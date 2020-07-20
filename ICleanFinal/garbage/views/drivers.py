from django.contrib import messages
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.db import transaction
from django.db.models import Avg, Count
from django.forms import inlineformset_factory
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse, reverse_lazy
from django.utils.decorators import method_decorator
from django.views.generic import (CreateView, DeleteView, DetailView, ListView,
                                  UpdateView)
from ..decorators import driver_required
from ..forms import DriverSignUpForm, Add_Garbage_Form
from ..models import User, Garbage


class DriverSignUpView(CreateView):
    model = User
    form_class = DriverSignUpForm
    template_name = 'registration/signup_form.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'driver'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('drivers:dashboard')


@method_decorator([login_required, driver_required], name='dispatch')
class dashboard(ListView):
    template_name = 'garbage/drivers/dashboard.html'
    model = Garbage

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'driver'
        context = super().get_context_data(**kwargs)
        context['garbages']=Garbage.objects.filter(user_id=self.request.user)
        return context

    def get_queryset(self):
        queryset = self.request.user
        return queryset


def add_garbage(request):
    if request.method== 'GET':
        return render(request, 'garbage/drivers/add_garbage.html', {'form':Add_Garbage_Form()})
    else:
        form = Add_Garbage_Form(request.POST)
        newgarbage = form.save()
        newgarbage.user_id_id = request.user
        newgarbage.save()
        return redirect('drivers:dashboard')



def edit_garbage(request, garbage_pk):
    garbage = get_object_or_404(Garbage, pk=garbage_pk, user_id=request.user)
    if request.method == 'GET':
        form = Add_Garbage_Form(instance=garbage)
        return render(request, 'garbage/drivers/edit_garbage.html', {'garbage': garbage, 'form': form})
    else:
        try:
            form = Add_Garbage_Form(request.POST, instance=garbage)
            if form.is_valid():
                form.save()
                return redirect('drivers:dashboard')
            else:
                form = Add_Garbage_Form(question=garbage)            
        except ValueError:
            return render(request, 'garbage/drivers/edit_garbage.html', {'form': Add_Garbage_Form(), 'errMsg': 'Data mismatch'})




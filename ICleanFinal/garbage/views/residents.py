from django.contrib import messages
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.db import transaction
from django.db.models import Count
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.generic import CreateView, ListView, UpdateView

from ..decorators import resident_required
from ..forms import ResidentSignUpForm
from ..models import User, Garbage


class ResidentSignUpView(CreateView):
    model = User
    form_class = ResidentSignUpForm
    template_name = 'registration/signup_form.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'resident'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('residents:dashboard')

@method_decorator([login_required, resident_required], name='dispatch')
class dashboard(ListView):
    template_name = 'garbage/residents/dashboard.html'
    model = Garbage
    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'driver'
        context = super().get_context_data(**kwargs)
        context['garbages']=Garbage.objects.all()
        return context
    def get_queryset(self):
        queryset = self.request.user
        return queryset


def add_garbage(request):
    if request.method== 'GET':
        return render(request, 'garbage/residents/add_garbage.html', {'form':Add_Garbage_Form()})
    else:
        form = Add_Garbage_Form(request.POST)
        newgarbage = form.save()
        newgarbage.user_id_id = request.user
        newgarbage.save()
        return redirect('residents:dashboard')



def edit_garbage_r(request, garbage_pk):
    garbage = get_object_or_404(Garbage, pk=garbage_pk, user_id=request.user)
    if request.method == 'GET':
        form = Add_Garbage_Form(instance=garbage)
        return render(request, 'garbage/residents/edit_garbage.html', {'garbage': garbage, 'form': form})
    else:
        try:
            form = Add_Garbage_Form(request.POST, instance=garbage)
            if form.is_valid():
                form.save()
                return redirect('residents:dashboard')
            else:
                form = Add_Garbage_Form(question=garbage)            
        except ValueError:
            return render(request, 'garbage/residents/edit_garbage.html', {'form': Add_Garbage_Form(), 'errMsg': 'Data mismatch'})
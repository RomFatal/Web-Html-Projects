from django.shortcuts import redirect, render
from django.views.generic import TemplateView


class SignUpView(TemplateView):
    template_name = 'registration/signup.html'


def home(request):
    if request.user.is_authenticated:
        if request.user.is_driver:
            return redirect('drivers:dashboard')
        else:
            return redirect('residents:dashboard')
    return render(request, 'garbage/home.html')

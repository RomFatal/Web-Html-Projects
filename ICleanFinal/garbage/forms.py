from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.db import transaction
from django.forms.utils import ValidationError
from django.forms import ModelForm
from garbage.models import User, Garbage

class DriverSignUpForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User

    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_driver = True
        if commit:
            user.save()
        return user

class ResidentSignUpForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User

    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_resident = True
        if commit:
            user.save()
        return user

class Add_Garbage_Form(forms.ModelForm):
    class Meta:
        model=Garbage
        fields = ['user_id', 'Address','Capacity','Comment']




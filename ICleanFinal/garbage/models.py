from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.html import escape, mark_safe
from django import forms
from django.core.validators import MaxValueValidator, MinValueValidator


class User(AbstractUser):
    is_resident = models.BooleanField(default=False)
    is_driver = models.BooleanField(default=False)

class Garbage(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)  
    Address = models.CharField(max_length=70)
    Capacity = models.IntegerField(default=1, validators=[MaxValueValidator(100), MinValueValidator(1)])
    Comment = models.TextField()
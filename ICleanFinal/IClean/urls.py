from django.urls import include, path

from garbage.views import garbage, residents, drivers

urlpatterns = [
    path('', include('garbage.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/signup/', garbage.SignUpView.as_view(), name='signup'),
    path('accounts/signup/resident/', residents.ResidentSignUpView.as_view(), name='resident_signup'),
    path('accounts/signup/driver/', drivers.DriverSignUpView.as_view(), name='driver_signup'),
]

from django.contrib import admin
from django.urls import include, path
from .views import garbage, drivers, residents

urlpatterns = [
    path('', garbage.home, name='home'),
    path('admin/', admin.site.urls),

    path('residents/', include(([
        path('', residents.dashboard.as_view(), name='dashboard'),
        path('Add-Garbage/', residents.add_garbage, name='add_garbage'),
        path('Edit-Garbage/<int:garbage_pk>/',
             residents.edit_garbage_r, name='edit_garbage_r'),
    ], 'garbage'), namespace='residents')),

    path('drivers/', include(([
        path('', drivers.dashboard.as_view(), name='dashboard'),
        path('Add-Garbage/', drivers.add_garbage, name='add_garbage'),
        path('Edit-Garbage/<int:garbage_pk>/',
             drivers.edit_garbage, name='edit_garbage'),
    ], 'garbage'), namespace='drivers')),
]

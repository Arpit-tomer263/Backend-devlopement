"""
URL configuration for Switch project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.contrib import admin
from django.urls import path
from Home.views import *  # Import the login view function from the views module

urlpatterns = [
    path('', entery),  # Use the login view for the root URL
    path('enter/',Login),
    path('home/',home),
    path('CreateNewaccount/',Signup),
    path('contact/',Contact_us),
    path('admin/', admin.site.urls),
    path('forgotpassword/',forgot_pass)
]



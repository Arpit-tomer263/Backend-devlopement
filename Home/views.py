from django.shortcuts import render

# Create your views here.


def entery(request):
    return render(request, "entery.html")

def home(request):
    return render(request, "index.html")


def Contact_us(request):
    return render(request,"contact.html")


def Login(request):
    return render(request,"login.html")


def Signup(request):
    return render(request,"sign.html")


def forgot_pass(request):
    return render(request,"Forgot.html")
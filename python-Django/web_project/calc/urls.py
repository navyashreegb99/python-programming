from django.urls import path
from django.urls import path

from . import views

urlpattens=[
    path('',views.home,name='home')
]
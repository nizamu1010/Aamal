from django.urls import path,include
from . import views

app_name = "authentication"


urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'), 
    path('useradmin/', views.useradmin, name='useradmin') 
    
]

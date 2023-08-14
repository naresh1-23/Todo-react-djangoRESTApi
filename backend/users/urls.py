from django.urls import path
from .views import UserRegistration
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path("login/", TokenObtainPairView.as_view()),#login api endpoint
    path("register/", UserRegistration.as_view())# signup api endpoint
]

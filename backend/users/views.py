from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserRegistrationSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User



class UserRegistration(APIView):
    
    def post(self, request):
        serializer = UserRegistrationSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save() 
            return Response({
                "status":200,
                "Message": "User Successfully created"
            })
        return Response({
            "status": 400,
            "Message": "error occured",
            "Error": serializer.errors
        })
            



# Create your views here.

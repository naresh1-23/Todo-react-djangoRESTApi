from rest_framework import serializers, fields
from .models import todolist

class TodolistSerializer(serializers.ModelSerializer):
    class Meta:
        model = todolist
        exclude = ()
        read_only_fields = ('id',)
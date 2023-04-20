from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import todolist
from rest_framework.response import Response
from .serializer import TodolistSerializer
from rest_framework.decorators import api_view

@api_view(['POST'])
def todo_lists(request):
    data = JSONParser().parse(request)
    serialized = TodolistSerializer(data = data)
    if serialized.is_valid():
        serialized.save()
        return JsonResponse(serialized.data, status= 201)
    return JsonResponse(serialized.errors, status = 400)

@api_view(['GET'])
def getlist(request):
    lists = todolist.objects.all()
    serialized = TodolistSerializer(lists, many=True)
    return Response({
        'status':200,
        'lists': serialized.data,
    })
    
@api_view(['GET'])
def todo_detail(request, id):
    try:
        lists = todolist.objects.get(id=id)
    except todolist.DoesNotExist:
        return HttpResponse(status=404)
    serialized = TodolistSerializer(lists)
    return Response({
        'status':200,
        'lists': serialized.data,
    })
    
@api_view(['PUT'])
def todo_update(request, id):
    try:
        lists = todolist.objects.get(id=id)
    except todolist.DoesNotExist:
        return HttpResponse(status=404)
    data = JSONParser().parse(request)
    serialized = TodolistSerializer(lists, data = data)
    if serialized.is_valid():
        serialized.save()
        return JsonResponse(serialized.data)
    return JsonResponse(serialized.errors, status=400)
@api_view(['DELETE'])
def todo_delete(request, id):
    try:
        lists = todolist.objects.get(id=id)
    except todolist.DoesNotExist:
        return HttpResponse(status=404)
    lists.delete()
    return HttpResponse(status = 204)

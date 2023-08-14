from django.urls import path
from .views import *

urlpatterns = [
    path('lists/', todo_lists),#addtodo
    path('alllists/', getlist),#get all todo
    path('lists/<int:id>/', todo_detail), #todo single
    path('update/<int:pk>/', DetailTodo.as_view()),#update
    path('delete/<int:id>/', todo_delete)#delete
]
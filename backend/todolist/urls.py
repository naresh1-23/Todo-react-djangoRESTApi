from django.urls import path
from .views import *

urlpatterns = [
    path('lists/', todo_lists),
    path('alllists/', getlist),
    path('lists/<int:id>/', todo_detail),
    path('update/<int:pk>/', DetailTodo.as_view()),
    path('delete/<int:id>/', todo_delete)
]
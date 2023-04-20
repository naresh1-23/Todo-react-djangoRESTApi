from django.urls import path
from . import views

urlpatterns = [
    path('lists/', views.todo_lists),
    path('alllists/', views.getlist),
    path('lists/<int:id>/', views.todo_detail),
    path('update/<int:id>/', views.todo_update),
    path('delete/<int:id>/', views.todo_delete)
]
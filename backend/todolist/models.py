from django.db import models
from django.contrib.auth.models import User


class todolist(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, null=False)
    description = models.TextField(null=False)
    duedate = models.DateField()
    completed = models.BooleanField(null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null = True)
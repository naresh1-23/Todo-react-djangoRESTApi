from django.db import models

class todolist(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, null=False)
    description = models.TextField(null=False)
    completed = models.BooleanField(null=False)

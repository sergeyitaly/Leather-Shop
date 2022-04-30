from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    username = models.CharField(max_length=40, unique=True, default='username')
    email = models.EmailField(max_length=255, unique=True, default='email')
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']
    # Any extra fields would go here
    def __str__(self):
        return self.email
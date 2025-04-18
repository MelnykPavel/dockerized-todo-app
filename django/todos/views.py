from rest_framework import viewsets
from todos.models import Todos
from .serializers import ToDoSerializer


class ToDoViewSet(viewsets.ModelViewSet):
    queryset = Todos.objects.all()
    serializer_class = ToDoSerializer

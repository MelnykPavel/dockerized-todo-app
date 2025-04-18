from rest_framework import serializers
from todos.models import Todos

class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todos
        fields = "__all__"
        read_only_fields = ("id", "created_at", "updated_at")

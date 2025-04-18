from django.contrib import admin
from todos.models import Todos

@admin.register(Todos)
class ToDoAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "is_completed", "created_at")
    list_filter = ("is_completed", "created_at")
    search_fields = ("title", "description")
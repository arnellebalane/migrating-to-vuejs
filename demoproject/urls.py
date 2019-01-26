from django.urls import path

from .views import HomeView


urlpatterns = [
    path('', HomeView.as_view()),
    path('gallery', HomeView.as_view()),
    path('video', HomeView.as_view()),
]

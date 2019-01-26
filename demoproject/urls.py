from django.urls import path

from .views import HomeView


urlpatterns = [
    path('', HomeView.as_view()),
    path('page-1', HomeView.as_view()),
    path('page-2', HomeView.as_view()),
    path('page-3', HomeView.as_view()),
]

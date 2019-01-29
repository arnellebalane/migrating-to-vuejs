from django.urls import path

from .views import HomeView, VueView


urlpatterns = [
    path('', HomeView.as_view()),
    path('image', HomeView.as_view()),
    path('gallery', VueView.as_view()),
    path('video', VueView.as_view()),
]

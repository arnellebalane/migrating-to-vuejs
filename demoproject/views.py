from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = 'demoproject/index.html'


class VueView(TemplateView):
    template_name = 'demoproject/vue-index.html'

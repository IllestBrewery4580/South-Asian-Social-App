from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api.views import PostViewSet, MessageViewSet

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'messages', MessageViewSet)

urlpatterns = [
    path('admin/', admin.sit.urls),
    path('api/', include(router.urls)),
]

from django.contrib import admin
from django.urls import path
from database import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('admin/', admin.site.urls),
    path('api/fields/<str:username>', views.fields, name='fields'),
    path('api/field/<int:id>', views.field, name='field'),
    path('api/gytrashs/', views.gytrashs, name='gytrashs'),
    path('api/gytrashs/<int:id>', views.gytrash, name='gytrash'),
    path('api/barn/<str:username>', views.barn, name='barn'),
    path('api/register/', views.register, name='register'),
    path('api/user/', views.get_user_info, name='user'),
]

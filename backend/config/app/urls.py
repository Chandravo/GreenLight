from django.urls import path
from . import views

urlpatterns =[
    path('login/', views.login.as_view()),
    path('home/', views.show_rooms.as_view()),
    path('check_status/',views.check_status.as_view()),
    path('logout/',views.logout.as_view()),
    path('add_room/',views.add_room.as_view()),
    path('show_rooms/',views.show_rooms.as_view()),
    # path('otp/',views.otp,name='otp'),
    # path('reset_password/',views.reset_password,name='reset_password'),
]
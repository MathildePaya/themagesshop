from database.models import Field
from database.models import Gytrash
from database.models import Barn
from django.contrib.auth.models import User
from database.serializers import FieldSerializer
from database.serializers import GytrashSerializer
from database.serializers import BarnSerializer
from database.serializers import UserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_info(request):
    """
    Retrieve user information for the authenticated user.
    """
    user = request.user  # This gives you the authenticated user

    # You can customize the data you want to return here, for example, username and user ID
    user_info = {
        'user_id': user.id,
        'username': user.username,
        # Add other user information fields as needed
    }

    return Response(user_info, status=status.HTTP_200_OK)
    

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def fields(request, username):
    
    if request.method == 'GET':
        try:
            # Get the user's id
            user = User.objects.get(username=username)
            user_id = user.id

            # Get all fields associated with the farmer's user_id
            fields = Field.objects.filter(farmer=user_id)
            
            # Serialize the fields
            serializer = FieldSerializer(fields, many=True)
            
            # Check if any fields were found
            if fields.exists():
                return Response({'fields': serializer.data})
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)
            
        except User.DoesNotExist: 
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    elif request.method == 'POST':
        serializer = FieldSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'field' : serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def field(request, id):
    try :
        data = Field.objects.get(pk=id)
    except Field.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = FieldSerializer(data)
        return Response({'field': serializer.data})
    elif request.method == 'DELETE':
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'POST':
        serializer = FieldSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'field' : serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def gytrashs(request):
    if request.method == 'GET':
        data = Gytrash.objects.all()
        serializer = GytrashSerializer(data, many=True)
        return Response({'gytrashs': serializer.data})
    elif request.method == 'POST':
        serializer = GytrashSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'gytrash' : serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def gytrash(request, id):
    try :
        data = Gytrash.objects.get(pk=id)
    except Gytrash.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = GytrashSerializer(data)
        return Response({'gytrash': serializer.data})
    elif request.method == 'DELETE':
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'POST':
        serializer = GytrashSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'gytrash' : serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def barn(request, username):
    if request.method == 'GET':
        try :
            #get the user's id
            user = User.objects.get(username=username)
            user_id = user.id
            print(user)
            print(user_id)
            
            #get the barn
            data = Barn.objects.get(farmer=user_id)
            serializer = BarnSerializer(data)
            return Response({'barn': serializer.data})
        except User.DoesNotExist: 
            return Response(status=status.HTTP_404_NOT_FOUND)
    elif request.method == 'POST':
        serializer = BarnSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'barn' : serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
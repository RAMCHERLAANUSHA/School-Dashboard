from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Students, Teacher
from .serializers import StudentsSerializer, TeacherSerializer 
from django.contrib.auth.models import User as Admin

class StudentView(APIView):
    def get(self, request, id=None):
        if id: 
            try:
                student = Students.objects.get(id=id)
                serializer = StudentsSerializer(student)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Students.DoesNotExist:
                return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            students = Students.objects.all()
            serializer = StudentsSerializer(students, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = StudentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, id=None):
        if id:
            try:
                student = Students.objects.get(id=id)
                serializer = StudentsSerializer(student, data=request.data, partial=False)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Students.DoesNotExist:
                return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "ID parameter is required"}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id=None):
        if id:
            try:
                student = Students.objects.get(id=id)
                student.delete()
                return Response({"message": "Student deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except Students.DoesNotExist:
                return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "ID parameter is required"}, status=status.HTTP_400_BAD_REQUEST)

class TeacherView(APIView):  
    def get(self, request, id=None):
        if id: 
            try:
                teacher = Teacher.objects.get(id=id)
                serializer = TeacherSerializer(teacher)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Teacher.DoesNotExist:
                return Response({"error": "Teacher not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            teachers = Teacher.objects.all()
            serializer = TeacherSerializer(teachers, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = TeacherSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, id=None):
        if id:
            try:
                teacher = Teacher.objects.get(id=id)
                serializer = TeacherSerializer(teacher, data=request.data, partial=False)  
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Teacher.DoesNotExist:
                return Response({"error": "Teacher not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "ID parameter is required"}, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, id=None):
        if id:
            try:
                teacher = Teacher.objects.get(id=id)
                teacher.delete()
                return Response({"message": "Teacher deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            except Teacher.DoesNotExist:
                return Response({"error": "Teacher not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"error": "ID parameter is required"}, status=status.HTTP_400_BAD_REQUEST)
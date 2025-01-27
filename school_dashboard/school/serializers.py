from rest_framework import serializers
from .models import Students, Teacher

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ['id','student_name', 'surname',
                  'gender','standard',
                  'dob','father_name',
                  'mother_name','caste',
                  'phone_Number','admission_date',
                  'address']
        read_only_fields = ['admission_date']

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id','Teacher_name', 'father_husband_name', 'qualification', 'phone_Number']

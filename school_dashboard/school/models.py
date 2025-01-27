from django.db import models

# Create your models here.
class Students(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    CASTE_CHOICES = [
        ('OC', 'OC'),
        ('BC', 'BC'),
        ('SC', 'SC'),
        ('ST', 'SC'),
        ('OTHER', 'Other'),
    ]
    id = models.IntegerField(primary_key=True, auto_created=True)
    student_name = models.CharField(max_length=100, null=False)
    surname = models.CharField(max_length=100, null=False)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=False)
    standard = models.IntegerField(null=False)
    dob = models.DateField(verbose_name="Date of Birth", null=False) 
    father_name = models.CharField(max_length=100, null=False)
    mother_name = models.CharField(max_length=100, null=False)
    caste = models.CharField(max_length=10, default='OC', null=False)
    phone_Number = models.BigIntegerField(null=False)
    admission_date = models.DateField(auto_now_add=True)
    address = models.CharField(max_length=200, null=False)

class Teacher(models.Model):
    id = models.IntegerField(primary_key=True)
    Teacher_name = models.CharField(max_length=100, null=False)
    father_husband_name = models.CharField(max_length=100)
    qualification = models.CharField(max_length=40, null=False)
    phone_Number = models.BigIntegerField(null=False)

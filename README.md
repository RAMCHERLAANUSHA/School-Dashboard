# School Dashboard

A Responsive web application developed using Django for the backend, React for the frontend, and SQLite as the database. This project is designed to manage and interact with student data in a school dashboard.

## Features
- Manage student data (CRUD operations)
- Display student performance analytics
- Create and manage school records

## Technologies Used
- **Backend**: Django
- **Frontend**: React with Vite
- **Database**: SQLite

## Installation
- pip install django 
- pip install djangorestframework 
- pip install django-cors-headers 
- npm install react react-router-dom
- npm install vite --save-dev
- npm install axios

### Backend (Django Setup)

1. **Create a new Django project**:


   django-admin startproject <project_name>

2. **Navigate to your project directory**:

   
   cd <project_name>

3. **Create a Django app**:

   
   python manage.py startapp <app_name>

4. **Update settings.py**:
   In INSTALLED_APPS, add the app:

   
   INSTALLED_APPS = [

   '<app_name>,<br>
   'rest_framework',<br>
   'corsheaders',<br>

   ]

   In MIDDLEWARE, add the CORS middleware:

   
   MIDDLEWARE = [

   
       'corsheaders.middleware.CorsMiddleware',

   
   ]

   In CORS_ALLOWED_ORIGINS, allow the React app URL:

   
   CORS_ALLOWED_ORIGINS = [

   
       "http://localhost:3000",  (React app URL for not using  vite)
       "http://localhost:5173",  (React app URL for using  vite)

   
   ]

6. **Migrate the database**:

   
   python manage.py makemigrations

   
   python manage.py migrate
   

7.  **Run the Django development server**:


    python manage.py runserver

### Frontend (React Setup with Vite)

1. **Create a React app using Vite**:

   
   npm create vite@latest <app_name> --template react

3. **Navigate to the React app directory**:

   
   cd <app_name>

5. **Install the necessary dependencies**:

   
   npm install

7. **Start the React development server**:

   
   npm run dev

### Running the Project

- To run the **Django backend**, navigate to the backend directory and run:


  python manage.py runserver

- To run the **React frontend**, navigate to the frontend directory and run:

  
  npm run dev

Run both servers in different terminals.




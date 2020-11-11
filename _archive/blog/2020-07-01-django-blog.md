---
title: Run the Django Blog
tags: [Coding]
style: fill
color: success
description: Coding instruction on Django Blog from Django by Example.
---

## Starting the Social Website Project

### Setting up the Virtual Environment
```python
mkdir env
python3 -m venv env
source env/bin/activate
```

### Installing the Modules
```python
pip3 install Django;
pip3 install Pillow==7.0.0;
pip3 install social-auth-app-django==3.1.0;
pip3 install django-taggit;
pip3 install psycopg2-binary==2.8.4;
pip3 install markdown==3.2.1;
```

### Sync Database with the Models
```python
python3 manage.py migrate
```

### Setting up an Admin-Account
```python
python3 manage.py createsuperuser
```

### Start the Server
```python
python3 manage.py runserver_plus --cert-file cert.crt
```

### Server blocked? - just type
```python
thisisunsafe
```

### Deactivate the virtual environment:
```python
deactivate
```

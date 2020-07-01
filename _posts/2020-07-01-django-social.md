---
title: Run the Django Social Network
tags: [Coding]
style: fill
color: warning
description: Coding instruction on Django Social Network from Django by Example.
---

## Starting the Social Website Project

### Setting up the Virtual Environment
```python
mkdir env
python3 -m venv env/bookmarks
source env/bookmarks/bin/activate
```

### Installing the Modules
```python
pip3 install Django;
pip3 install Pillow==7.0.0;
pip3 install social-auth-app-django==3.1.0;
pip3 install django-extensions==2.2.5;
pip3 install werkzeug==0.16.0;
pip3 install pyOpenSSL==19.0.0;
pip3 install easy-thumbnails==2.7;
pip3 install --upgrade certifi;
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

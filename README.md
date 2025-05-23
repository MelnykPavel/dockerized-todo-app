# 📝 Dockerized ToDo App

![Dockerized ToDo App](https://github.com/MelnykPavel/dockerized-todo-app/raw/main/project-logo.png)

## 🌐 Demo

🚀 **Live App:** [https://client-vite-nginx-production.up.railway.app/](https://client-vite-nginx-production.up.railway.app/)

---

## 🧩 Tech Stack

![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge)
![Django](https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white&style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge)
![Railway](https://img.shields.io/badge/Railway-000000?logo=railway&logoColor=white&style=for-the-badge)

---

## ✨ Features

- ✅ Task CRUD operations
- ✅ Responsive UI with Tailwind
- ✅ Admin panel via Django

---

## 📁 Project Structure

```
dockerized-todo-app/
├── client/                # Frontend (React + Vite)
├── django/                # Backend (Django)
├── .env                   # Environment variables
├── docker-compose.yaml    # Docker orchestration
├── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/MelnykPavel/dockerized-todo-app.git
cd dockerized-todo-app
```

### 2. Create `.env` file in the root

Copy and fill in the following:

```env
SQL_DATABASE=your_database_name
SQL_USER=your_db_user
SQL_PASSWORD=your_db_password
SQL_HOST=db
SQL_PORT=5432

DJANGO_PORT=8000
DJANGO_DEBUG=1
DJANGO_SECRET_KEY='django-insecure-'
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1,[::1]
DJANGO_SQL_ENGINE=django.db.backends.postgresql

CLIENT_PORT=3000
CLIENT_HOST=localhost
CORS_ALLOWED=http://${CLIENT_HOST}:${CLIENT_PORT}

API_PREFIX=/api/v1/
API_URL_DJANGO=http://localhost:${DJANGO_PORT}${API_PREFIX}
```

---

### 🚀 Start the app locally

```bash
docker-compose up --build
```

This will start:

- Django API: [http://localhost:8000](http://localhost:8000)
- React App: [http://localhost:3000](http://localhost:3000)

---

### 🔐 Create a superuser (optional)

```bash
docker-compose exec api-django python manage.py createsuperuser
```

---

### 🧪 Test the app

- React Client: [http://localhost:3000](http://localhost:3000)
- Django Admin: [http://localhost:8000/admin/](http://localhost:8000/admin/)
- Health Check: [http://localhost:8000/health/](http://localhost:8000/health/)

---

## 🛑 Manage Containers

### Stop the app

```bash
docker-compose down
```

### Keep database volumes

```bash
docker-compose down --volumes=false
```

### Remove all data and volumes

```bash
docker-compose down --volumes --remove-orphans
```

### Restart

```bash
docker-compose up             # Normal
docker-compose up --build    # Rebuild
docker-compose up --build --force-recreate  # Full reset
```

---

## 🧾 Available Scripts (Frontend)

From `client/` directory:

```bash
npm install     # Install dependencies
npm run dev     # Start dev server
npm run build   # Production build
```

---

## ☁️ Deployment on Railway

This project is deployed to [Railway](https://railway.app/) using Docker.

**Deployment files:**

- `Dockerfile.**.prod` — for building frontend and/or backend
- `nginx.conf` — for proxying requests
- `railway.toml` — Railway environment configuration

---

🛠️ **Automatic deployment is configured from the `railway` branch.**  
When you push code to the `railway` branch, Railway automatically builds and redeploys the app.

## ✅ Ready!

Your Dockerized full-stack ToDo app is now running locally — and in production.

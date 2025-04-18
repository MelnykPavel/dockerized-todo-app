FROM python:3.13-alpine

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DJANGO_PORT=8000

WORKDIR /django

COPY . .

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

EXPOSE ${DJANGO_PORT}

CMD ["sh", "-c", "\
  echo 'Running migrations...' && \
  python manage.py migrate && \
  echo 'Starting Django in development mode...' && \
  python manage.py runserver 0.0.0.0:${DJANGO_PORT} \
"]
# Imagen base
FROM python:3.11

# Crear directorio
WORKDIR /app

# Instalar dependencias
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copiar proyecto
COPY . .

# Puerto
EXPOSE 8080

# Comando de ejecución
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "alerta_segura.wsgi:application"]

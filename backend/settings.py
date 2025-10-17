INSTALLED_APPS = [
    ...,
    'rest_framework',
    'api',
]

INSTALLED_APPS += ['corsheaders']
MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware'] + MIDDLEQARE
CORS_ALLOWED_ORIGINS = [
    "https://localhost:5173", # React dev server
]
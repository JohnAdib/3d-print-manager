# Base image for PHP 8.2 with FPM
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    locales \
    zip \
    unzip \
    git \
    curl

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer globally
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set the working directory inside the container
WORKDIR /var/www/backend

# Copy the custom php.ini
COPY .docker/php/php.ini /usr/local/etc/php/conf.d/custom-php.ini

# Copy the entire project files to the container
COPY . .

# Install Composer dependencies with verbose output
RUN composer install --no-interaction --optimize-autoloader --prefer-dist --no-dev -vvv

# Generate application key and link storage after the files are copied
RUN php artisan key:generate && php artisan storage:link

# Set proper permissions for storage and bootstrap/cache directories
RUN chown -R www-data:www-data /var/www/backend/storage /var/www/backend/bootstrap/cache
RUN chmod -R 775 /var/www/backend/storage /var/www/backend/bootstrap/cache

# Expose PHP-FPM port
EXPOSE 9000

# Start PHP-FPM
CMD ["php-fpm"]

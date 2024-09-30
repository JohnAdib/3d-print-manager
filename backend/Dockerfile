# Base image for PHP 8.2 with Composer and extensions
FROM php:8.2-fpm AS base

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
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer globally
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set the working directory inside the container
WORKDIR /var/www/backend

# Copy the custom php.ini
COPY .docker/php/php.ini /usr/local/etc/php/conf.d/custom-php.ini

# Copy the entire project files to the container
COPY . .

# Ensure correct permissions for the application folder
RUN chown -R www-data:www-data /var/www/backend
RUN chmod -R 777 /var/www/backend

# Install Composer dependencies with proper permissions
USER www-data
# RUN composer install --no-interaction --optimize-autoloader --prefer-dist --no-dev -vvv || cat /var/www/backend/composer.json
RUN composer install

# Generate application key and link storage
RUN php artisan key:generate && php artisan storage:link

# Switch back to root to fix permissions for necessary directories
USER root
RUN chown -R www-data:www-data /var/www/backend/storage /var/www/backend/bootstrap/cache
RUN chmod -R 775 /var/www/backend/storage /var/www/backend/bootstrap/cache


# Ensure the correct PHP configuration is loaded
RUN php -i | grep "Loaded Configuration File"

# Expose PHP-FPM port
EXPOSE 4012

# Start PHP-FPM
# CMD ["php-fpm"]
# Finally fix composer install and start the server!
CMD bash -c "composer install && php artisan serve --host 0.0.0.0 --port 4012"
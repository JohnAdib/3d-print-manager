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
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Set working directory
WORKDIR /var/www/backend

# Copy the custom php.ini
COPY .docker/php/php.ini /usr/local/etc/php/conf.d/custom-php.ini

# Copy composer.json and composer.lock to install dependencies
COPY composer.json composer.lock ./

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Laravel dependencies via Composer
RUN composer install --no-scripts --no-autoloader --prefer-dist --no-dev

# Copy all application files (including the artisan file)
COPY . .

# Verify if 'artisan' exists after copying
RUN ls -l /var/www/backend/artisan

# Set proper permissions for storage and bootstrap/cache directories
RUN chown -R www-data:www-data /var/www/backend/storage /var/www/backend/bootstrap/cache
RUN chmod -R 775 /var/www/backend/storage /var/www/backend/bootstrap/cache

# Run artisan commands to create storage links and optimize cache
RUN php artisan storage:link
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache

# Optimize Composer autoloading
RUN composer dump-autoload --optimize

# Expose port 9000
EXPOSE 9000

# Start PHP-FPM
CMD ["php-fpm"]

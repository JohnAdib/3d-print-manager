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

# Copy composer.json and install dependencies
COPY composer.json composer.lock ./
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-scripts --no-autoloader

# Copy project files
COPY . .

# Install application dependencies
RUN composer dump-autoload --optimize

# Expose port 9000
EXPOSE 9000

# Start PHP-FPM
CMD ["php-fpm"]

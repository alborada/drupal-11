# Drupal 11 Project

## Descripción

Este proyecto es una implementación de Drupal 11 utilizando base de datos PostgreSQL y un subtema (child theme) personalizado basado en Olivero.

El objetivo del proyecto es demostrar buenas prácticas en:

Uso de Drupal moderno con Composer
Gestión de configuración (config/sync)
Desarrollo de theming mediante subtemas
Estructura lista para versionamiento en Git

## Tecnologías utilizadas
Drupal 11
PostgreSQL
PHP
Composer
Drush

## Theming

El proyecto utiliza un subtema personalizado que hereda de Olivero (tema base de Drupal).

Características del subtema:

Definido con base theme: olivero
Sobrescritura de templates Twig
Estilos personalizados mediante libraries.yml
Uso de preprocess hooks en .theme

Ruta del tema:

web/themes/custom/olivero_hijo

## Instalación del proyecto

1. Clonar repositorio
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo
2. Instalar dependencias
composer install
3. Configurar base de datos (PostgreSQL)

Editar:

web/sites/default/settings.php

Ejemplo:

$databases['default']['default'] = [

  'database' => 'nombre_db',
  'username' => 'usuario',
  'password' => 'password',
  'host' => 'localhost',
  'driver' => 'pgsql',

];

4. Instalar Drupal
drush site:install standard
5. Importar configuración
drush cim

## Gestión de configuración

Exportar configuración:
drush cex

Importar configuración:
drush cim

La configuración se encuentra en:
/config/sync

## Estructura relevante
/config/sync
/web/modules/custom
/web/themes/custom
composer.json

## Notas
La carpeta web/sites/default/files no está versionada
No se incluye base de datos en el repositorio
El proyecto está preparado para ser reproducido vía Composer + configuración exportada

## Objetivo del proyecto
Este repositorio forma parte de un portafolio orientado a demostrar:

Desarrollo backend en Drupal
Theming personalizado
Buenas prácticas de despliegue y versionamiento

## Autor
Caro Lina

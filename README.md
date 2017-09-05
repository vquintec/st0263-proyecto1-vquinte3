**NodeJS proyecto1**

By: Valentín Quintero Castrillón
– [*vquinte3@eafit.edu.co*](mailto:vquinte3@eafit.edu.co)

**Descripción de aplicación**

Aplicación web que permite gestionar Videos, un CRUD básico de (title,
description, category, privacy, tags) por Video.

Cubre:

-   Aplicación del patron MVC a una aplicación Web

-   Uso de un framework backend moderno -&gt; NodeJS

-   Configuración de ambientes: Desarrollo, Pruebas y Producción.

**1. Análisis**

**1.1 Requisitos funcionales:**

1.  La aplicación debe permitir crear usuarios por medio de un
    formulario de registro.

2.  La aplicación debe autenticar un usuario previamente creado para
    darle acceso a las funcionalidades de la aplicación por medio de un
    formulario de inicio de sesión.

3.  La aplicación debe permitir a un usuario modificar información
    personal desde su perfil.

4.  La aplicación debe permitir a un usuario crear contenido (videos) y
    asignar valores a sus características (título, descripción,
    categorías, privacidad, etiquetas).

5.  La aplicación debe permitir a un usuario modificar, eliminar,
    buscar, compartir, contenido previamente creado.

6.  La aplicación debe listar contenido que es visible para un usuario.

**1.2 Definición de tecnología de desarrollo y despliegue para la
aplicación:**

-   Lenguaje de Programación: Javascript

-   Framework web backend: NodeJS - Express

-   Framework web frontend: no se usa - se utilizará Templates HTML para
    Vista (V)

-   Base de datos: MongoDB

-   Web App Server: NodeJS

-   Web Server: NGINX

**2. Desarrollo**

Se generó la base, con Yeoman:

$ yo express

(este generador, crea una app base ejemplo MVC para gestión de
articulos)

**3. Diseño:**

**3.1 Modelo de datos:**

video:

{ title: String, description: String, users: \[{ type:
Schema.Types.ObjectId, ref: 'User' }\], owner: { type:
Schema.Types.ObjectId, ref: 'User' }, privacy: String, category: String,
tags: \[String\] }

user:

{ name: String, lastname: String, username: {type: String, unique: true,
required: true}, password: String, }

**3.2 Servicios Web**

/\* Servicio Web: Realiza la búsqueda en la base de datos de todos los
videos públicos Método: GET URI: /videos/list \*/

/\* Servicio Web: Realiza la búsqueda en la base de datos, por campo
titulo Método: GET URI: /videos/search?query=val\*/

/\* Servicio Web: Inserta un registro de Video en la Base de datos
Método: POST URI: /videos/upload \*/

/\* Servicio Web: Edita un registro de Video en la Base de datos Método:
POST URI: /videos/edit \*/

/\* Servicio Web: Borra un Video de la Base de datos. Método: GET URI:
/videos/delete/id \*/

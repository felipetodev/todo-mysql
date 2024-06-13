# TransVip Challenge

## Primeros pasos (Proyecto)

Clona el repositorio en tu máquina local y luego estando en la raíz del proyecto, ejecuta el siguiente comando:

```bash
pnpm install
```

Este comando instalará todas las dependencias necesarias para correr el proyecto, tanto en el front como en el back. Ya que el proyecto cuenta con un archivo `pnpm-workspace.yaml` que permite instalar las dependencias de todos los proyectos a la vez.

Una vez instaladas las dependencias, se debe ejecutar el siguiente comando para correr el proyecto:

```bash
pnpm dev
```

Este comando correrá tanto el front como el back del proyecto. El front se ejecutará en el puerto 3000 y el back en el puerto 4000.

Importante: Antes de levantar todos los servicios, se debe tener el servidor de MySQL corriendo. Si no se tiene instalado, se puede seguir los pasos que se encuentran más abajo.

## Primeros pasos (MySQL Server)

Para correr el proyecto con MySQL, de utilizó DBngin, una herramienta que permite correr MySQL en MacOS de manera sencilla. Para instalarlo, se puede hacer desde [aquí](https://dbngin.com/).

Una vez instalado, se debe agregar un nuevo servidor MySQL y configurar la base de datos con los siguientes datos:

- **Service:** MySQL
- **Name:** todolist-database
- **Port:** 3306

Una vez activado el servidor, se debe ejecutar el script de sql el cual se encuentra en la carpeta `script/todolist-database.sql` en la raíz del proyecto.

Para ello puedes utilizar MySQL Workbench o cualquier otro cliente de MySQL.

## Tecnologías utilizadas

- **Frontend:** TypeScript, Vite.js, React, TailwindCSS, Redux Toolkit, ShadCN.
- **Backend:** TypeScript, Node.js, Express, MySQL.

## Features

- [x] Crear una tarea
- [x] Listar todas las tareas
- [x] Marcar una tarea como completada
- [x] Eliminar una tarea
- [x] Persistencia de datos en MySQL
- [ ] Editar descripción de una tarea

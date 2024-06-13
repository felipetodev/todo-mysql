# TransVip Challenge - Todo List App

https://github.com/felipetodev/transvip-chall/assets/69825873/da007103-fdf0-4cae-8a52-2aea5df728f2

## 🚀 Primeros pasos (Proyecto)

Clona el repositorio en tu máquina local y luego estando en la raíz del proyecto, ejecuta el siguiente comando:

```bash
pnpm install
```

Este comando instalará todas las dependencias necesarias para correr el proyecto, tanto en el front como en el back. Ya que el proyecto cuenta con un archivo `pnpm-workspace.yaml` que permite instalar las dependencias de todos los proyectos a la vez.

Una vez instaladas las dependencias, se debe ejecutar el siguiente comando para correr el proyecto:

```bash
pnpm dev
```

o puedes correr el proyecto de manera individual con los siguientes comandos:

```bash
pnpm -F frontend dev
```

```bash
pnpm -F backend dev
```

Este comando correrá tanto el front como el back del proyecto. El front se ejecutará en el puerto `4000` y el back en el puerto `3000`.

> [!IMPORTANT]
> - Antes de levantar todos los servicios, se debe tener el servidor de MySQL corriendo. Si no se tiene instalado, se puede seguir los pasos que se encuentran más abajo.
> - La versión minima requerida de Node.js para correr el proyecto es desde la **18.x** en adelante (LTS).

## Primeros pasos (MySQL Server)

Para correr el proyecto con MySQL, de utilizó DBngin, una herramienta que permite correr MySQL en MacOS de manera sencilla. Para instalarlo, se puede hacer desde [aquí](https://dbngin.com/).

Una vez instalado, se debe agregar un nuevo servidor MySQL y configurar la base de datos con los siguientes datos utilizados:

- **Service:** MySQL (requerido)
- **Name:** todolist-database
- **Port:** 3306 (requerido)

Esto para que la conexión con el servidor de MySQL sea exitosa, ruta: `backend/models/mysql/todo.ts`.

Una vez activado el servidor, se debe ejecutar el script de sql el cual se encuentra en la carpeta `script/todolist-database.sql` en la raíz del proyecto.

Para ello puedes utilizar MySQL Workbench o cualquier otro cliente de MySQL.

## 🛠️ Tecnologías utilizadas

- **Frontend:** TypeScript, Vite.js, React, TailwindCSS, Redux Toolkit, ShadCN.
- **Backend:** TypeScript, Node.js, Express, MySQL.

## 📝 Features

- [x] Crear una tarea
- [x] Listar todas las tareas
- [x] Marcar una tarea como completada
- [x] Eliminar una tarea
- [x] Persistencia de datos en MySQL
- [x] Estado global de aplicación con Redux Toolkit
- [x] Workspaces con pnpm para manejar dependencias de front y back
- [x] Editar descripción de una tarea

## 🔑 Licencia 

- [MIT](https://github.com/felipetodev/transvip-chall/blob/main/LICENSE).

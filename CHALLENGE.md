# README #

## La Prueba es la siguiente ##

Crear una app en donde se puedan gestionar las Tareas a realizar.
Puedes usar cualquier framework de diseÃ±o (Bootstrap, Material UI, tailwindcss) tambiÃ©n puedes crear los estilos en css/scss, utilizar backend para listar, guardar, actualizar y eliminar tareas, ademas no debe usar framerork backend.

Â¡La persistencia debe ser a nivel backend!.

### Criterios de aceptaciÃ³n: ###

Las actividades deben poder ser:

 * Editables
 * Eliminadas
 * Creadas
 * Completadas
 * El nombre de la actividad solo debe contener Letras
 * Se debe respetar el diseÃ±o (el mismo debe ser responsivo)
 * Se debe mostrar una advertencia al usuario al momento de querer eliminar una actividad con el nombre de la actividad a eliminar
 * Una actividad eliminada no debe estar visible en el listado


### Objetivos: ###

 * Mostrar listado de las actividades
 * Crear Actividades
 * Editar Actividades
 * Eliminar Actividades
 
 
### Consideraciones tÃ©cnicas: ###
Front:

 * usar React +16.8
 * usar TypeScript
 * usar MUI
 * usar Redux para el manejo de la data
 * usar PatrÃ³n de diseÃ±o Atomic Design

Backend:

 * NodeJs con Typescript
 * mysql como motor principal
 * usar typeorm para gestionar modelos
 * usar express para manejo de request


DeberÃ¡ entregar su cÃ³digo, un archivo sql que considere para que la prueba pueda ser iniciada en un servidor o dockerizado, ademÃ¡s un archivo de texto explicando su soluciÃ³n. Para finalizar enviar un Merge Request a la rama Master
DiseÃ±o: https://www.figma.com/file/voIifFdy0AqrnK8xfJAFPT/To-Do-List---Prueba-T%C3%A9cnica?type=design&node-id=0-1&mode=design&t=uLiKzHtx5M2jew7o-0
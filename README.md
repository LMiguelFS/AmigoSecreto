# Desafío de Lógica de Programación: Lista de Amigos y Sorteo

Este proyecto tiene como objetivo fortalecer tus habilidades en lógica de programación mediante el desarrollo de una aplicación sencilla que gestiona una lista de amigos y realiza un sorteo para seleccionar aleatoriamente a uno de ellos como "amigo secreto".

## Funcionalidades

1. **Agregar amigos**: Permite añadir nombres de amigos a una lista.
2. **Listar amigos**: Muestra la lista actual de amigos en pantalla.
3. **Limpiar campos**: Borra el contenido del campo de entrada y limpia la lista antes de actualizarla.
4. **Sortear amigo secreto**: Selecciona aleatoriamente a un amigo de la lista y muestra el resultado en pantalla.

## Requisitos

- **HTML**: Un formulario con un campo de entrada de texto y botones para agregar amigos y realizar el sorteo.
- **JavaScript**: Lógica para manejar la lista de amigos, agregar elementos dinámicamente al DOM y realizar un sorteo aleatorio.
- **CSS** (opcional): Para mejorar el diseño y la presentación.

## Estructura del Código

### Variables y Arrays

- `amigos`: Array que almacena los nombres de los amigos agregados.

### Funciones Principales

1. **`agregarAmigo()`**
   - Agrega el nombre ingresado en el campo de entrada al array `amigos`.
   - Llama a `listarAmigos()` para actualizar la lista en pantalla.
   - Muestra un mensaje de alerta si el campo de entrada está vacío.

2. **`listarAmigos()`**
   - Limpia la lista HTML actual llamando a `limpiarCampos(lista)`.
   - Recorre el array `amigos` y crea elementos `<li>` para cada nombre.
   - Agrega los elementos `<li>` al elemento `<ul>`.

3. **`limpiarCampos(lista)`**
   - Limpia el campo de entrada y la lista HTML antes de actualizarla.

4. **`sortearAmigo()`**
   - Realiza un sorteo aleatorio entre los nombres de los amigos en el array `amigos`.
   - Muestra el resultado en pantalla.
   - Lanza una alerta si la lista está vacía.

5. **`numRandom()`**
   - Genera un número aleatorio basado en la longitud del array `amigos`.

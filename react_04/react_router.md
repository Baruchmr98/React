# React router
### Instalación
Ejecutar el comando npm para instalar React Router dentro del proyecto
```sh
npm i react-router-dom
```

### Implementación
1. Importar React Router en `main.jsx` para que se encuentre disponible en cualquier parte de la aplicación.
Para ello, importamos el componente 
`import { BrowserRouter } from 'react-router-dom`

2. Modificar el componente `<App />`, en el archivo 'main.jsx', y envolverlo con los componentes `<BrowserRouter> </ BrowserRouter>` quedando de la siguiente manera:
```javascript
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter>
    <App />
</BrowserRouter>
```

3. Crear componentes `Inicio.jsx`, `SobreNosotros.jsx` y `Contacto.jsx` (no se les dió estilo por cuestión de tiempo). Exportarlos e importarlos en el archivo `App.jsx`.

4. Necesitamos importar las funcionalidades que emplearemos `Route` y `Routes` dentro del archivo `App.jsx`. Y quedaría como sigue:
```javascript
import { Route, Routes } from 'react-router-dom'
```
5. Modificamos `App.jsx` para implementar Routes y Route

6. Para evitar etiquetas de anclaje, vamos a ocupar una funcionalidad de React Router llamada `{link}`



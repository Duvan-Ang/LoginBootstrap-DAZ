# Proyecto LoginBootstrap

## Proposito

Este proyecto tiene como objetivo comprender y aplicar conceptos fundamentales de **HTML**, **CSS** y **JavaScript**, integrando **Bootstrap 5** mediante CDN para lograr interfaces limpias, responsivas y modernas.

Además, se ha incorporado:

- **EmailJS**, para demostrar el envío de correos electrónicos directamente desde el frontend, sin necesidad de backend, como parte de la funcionalidad de recuperación de contraseña.
- **SweetAlert2**, para reemplazar los mensajes `alert()` tradicionales con una interfaz moderna, amigable y personalizable para validar acciones como login exitoso, errores o confirmaciones.

A través de esta actividad se aprende a:


- Usar formularios HTML reales y comprenden su estructura.
- Aplicar clases de Bootstrap para diseño y responsividad.
- Organizar un proyecto con múltiples vistas y archivos de estilos externos.
- Comprender la navegación entre páginas mediante enlaces.
- Integrar servicios externos (EmailJS y SweetAlert) para el envío de correos y visualización de alertas modernas.
- Aprender las bases para futuras funcionalidades como validación, almacenamiento de datos o integración con backend.

---

## Estructura del Proyecto

```plaintext
/
├── html/
    ├── index.html                # Página principal de Login
│   ├── registro.html             # Formulario para registrar usuarios nuevos
│   ├── recuperar.html            # Vista para recuperación de contraseña
│   └── paginaprincipal.html      # Vista principal para usuario logueado
├── css/
│   └── estilos.css               # Hoja de estilos externa común a todas las páginas
└── js/
    ├── login.js                  # Script que contiene lógica del login
    └── recuperar.js              # Script que contiene lógica para recuperar contraseña
```

---


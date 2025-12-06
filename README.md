# ✨ Adriana Tortosa Microblading - Landing Page

Landing page profesional para servicios de Microblading y Micropigmentación. Diseño lujoso con efecto Glassmorphism en paleta blanco y negro.

![Preview](https://via.placeholder.com/1200x630/1a1a1a/ffffff?text=Adriana+Tortosa+Microblading)

## 🚀 Características

- ✅ **Diseño Lujoso** - Estética elegante con efecto glassmorphism
- ✅ **100% Responsive** - Optimizado para móvil, tablet y desktop
- ✅ **SEO Optimizado** - Meta tags, Open Graph, Schema.org
- ✅ **Performance** - Lighthouse score objetivo >90
- ✅ **Animaciones Suaves** - AOS.js para animaciones al scroll
- ✅ **Carrusel Portfolio** - Swiper.js para galería de trabajos
- ✅ **Formulario de Contacto** - Validación y listo para integrar
- ✅ **Accesibilidad** - WCAG AA compatible

## 📁 Estructura del Proyecto

```
adriana-tortosa-microblading/
├── index.html              # Página principal
├── css/
│   ├── variables.css       # Variables CSS (colores, tipografía, espaciado)
│   ├── styles.css          # Estilos principales
│   └── responsive.css      # Media queries
├── js/
│   └── main.js             # JavaScript principal
├── assets/
│   └── images/             # Imágenes (añadir las tuyas)
├── favicon.ico             # Favicon (reemplazar)
├── ESPECIFICACIONES_PROYECTO.md
└── README.md
```

## 🎨 Personalización

### Colores

Edita `css/variables.css` para cambiar los colores:

```css
:root {
    --color-black: #000000;
    --color-white: #ffffff;
    /* ... más colores */
}
```

### Tipografías

Las fuentes utilizadas son de Google Fonts:
- **Títulos:** Playfair Display (serif elegante)
- **Cuerpo:** Inter Tight (sans-serif moderna)

### Contenido

1. **Textos:** Edita directamente en `index.html`
2. **Imágenes:** Reemplaza las URLs de placeholder con tus imágenes
3. **Contacto:** Actualiza teléfono, email y dirección

## 📱 Secciones

1. **Hero** - Presentación principal con CTA
2. **Quién Soy** - Biografía y credenciales
3. **Servicios** - Tarjetas con efecto glass
4. **Mi Método** - Timeline del proceso
5. **Portfolio** - Carrusel de Instagram
6. **Contacto** - Formulario + info de contacto

## 🔧 Configuración del Formulario

El formulario está preparado para conectar con servicios externos:

### Opción 1: Formspree (Recomendado)

1. Ve a [formspree.io](https://formspree.io) y crea una cuenta
2. Crea un nuevo formulario
3. Actualiza la acción del formulario:

```html
<form action="https://formspree.io/f/TU_ID" method="POST">
```

### Opción 2: EmailJS

1. Registra en [emailjs.com](https://www.emailjs.com/)
2. Configura tu servicio de email
3. Añade el SDK y configura en `main.js`

### Opción 3: Netlify Forms

Si despliegas en Netlify, añade el atributo:

```html
<form name="contact" netlify>
```

## 📸 Integración Instagram

Para mostrar las publicaciones de [@adrianatortosa_microstudio](https://www.instagram.com/adrianatortosa_microstudio/):

### Opción A: Widget de terceros (Más fácil)

1. **LightWidget** (Gratis):
   - Ve a [lightwidget.com](https://lightwidget.com)
   - Conecta tu cuenta de Instagram
   - Copia el código embed
   - Reemplaza el carrusel en `index.html`

2. **Elfsight** (Freemium):
   - Ve a [elfsight.com](https://elfsight.com/instagram-feed-widget/)
   - Configura el widget
   - Añade el script a tu página

### Opción B: Imágenes estáticas

Las imágenes actuales son placeholders. Para usar imágenes reales:

1. Descarga las imágenes de tu Instagram
2. Guárdalas en `assets/images/portfolio/`
3. Actualiza las URLs en `index.html`

## 🌐 Despliegue en GitHub Pages

### Paso 1: Crear repositorio

```bash
# Inicializa git
git init

# Añade archivos
git add .

# Commit inicial
git commit -m "Initial commit - Landing page Adriana Tortosa"

# Conecta con GitHub
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Sube los archivos
git push -u origin main
```

### Paso 2: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` / `root`
5. Save

Tu sitio estará disponible en: `https://TU_USUARIO.github.io/TU_REPO/`

### Paso 3: Dominio personalizado (Opcional)

1. Compra un dominio (ej: adrianatortosa.com)
2. Crea un archivo `CNAME` en la raíz con tu dominio:
   ```
   adrianatortosa.com
   ```
3. Configura los DNS en tu proveedor:
   - Tipo A: `185.199.108.153`
   - Tipo A: `185.199.109.153`
   - Tipo A: `185.199.110.153`
   - Tipo A: `185.199.111.153`

## 📊 SEO Checklist

- [x] Meta title optimizado
- [x] Meta description
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Schema.org LocalBusiness
- [x] Estructura de headings (H1-H6)
- [x] Alt text en imágenes
- [x] URLs semánticas (anchors)
- [ ] Sitemap.xml (generar)
- [ ] robots.txt (crear)
- [ ] Google Search Console (registrar)
- [ ] Google My Business (vincular)

## 🛠️ Tecnologías

- **HTML5** - Semántico y accesible
- **CSS3** - Variables, Flexbox, Grid, Glassmorphism
- **JavaScript ES6+** - Vanilla JS
- **[AOS.js](https://michalsnik.github.io/aos/)** - Animaciones al scroll
- **[Swiper.js](https://swiperjs.com/)** - Carrusel/slider
- **[Google Fonts](https://fonts.google.com/)** - Tipografías

## 📝 Tareas Pendientes

- [ ] Añadir imágenes reales (hero, about, portfolio)
- [ ] Actualizar información de contacto
- [ ] Configurar formulario con servicio externo
- [ ] Integrar feed de Instagram
- [ ] Crear favicon personalizado
- [ ] Generar sitemap.xml
- [ ] Registrar en Google Search Console
- [ ] Optimizar imágenes (WebP)

## 📄 Licencia

Este proyecto fue creado específicamente para Adriana Tortosa Microblading.

---

**Desarrollado con 💖**

*¿Preguntas? Consulta el archivo `ESPECIFICACIONES_PROYECTO.md` para más detalles técnicos.*


# 📋 Especificaciones del Proyecto: Landing Page Microblading

## 1. Descripción General

**Nombre del Proyecto:** Adriana Tortosa Microblading  
**Tipo:** Sitio web estático (Single Page Application)  
**Hospedaje:** GitHub Pages  
**Propósito:** Página web profesional para promocionar servicios de microblading, mostrar trabajos realizados y captar clientes potenciales.

### ⚠️ Prioridad Crítica: SEO
> **El SEO es un aspecto fundamental y prioritario en este proyecto.** La página debe estar completamente optimizada para posicionamiento en buscadores, ya que es clave para la captación de nuevos clientes de forma orgánica.

---

## 2. Estructura de Secciones

### 2.1 🏠 Home (Hero Section)
- **Contenido:**
  - Imagen/video de fondo impactante relacionado con microblading
  - Título principal con el nombre del negocio/profesional
  - Subtítulo con propuesta de valor única
  - Botón CTA (Call to Action) principal: "Reserva tu cita"
  - Navegación sticky/fija en la parte superior

### 2.2 👩‍💼 Quién Soy
- **Contenido:**
  - Foto profesional de la especialista
  - Biografía breve y cercana
  - Años de experiencia
  - Certificaciones y formación
  - Valores y filosofía de trabajo

### 2.3 💅 Servicios
- **Contenido:**
  - Tarjetas de servicios con:
    - Icono representativo
    - Nombre del servicio
    - Descripción breve
    - Duración aproximada
    - Precio (opcional)
  - Servicios sugeridos:
    - Microblading cejas
    - Microshading
    - Retoque/mantenimiento
    - Diseño de cejas
    - Otros tratamientos complementarios

### 2.4 ✨ Mi Método
- **Contenido:**
  - Proceso paso a paso del tratamiento
  - Timeline visual o stepper
  - Información sobre:
    1. Consulta inicial
    2. Diseño personalizado
    3. Procedimiento
    4. Cuidados posteriores
    5. Retoque incluido
  - Iconos o ilustraciones para cada paso
  - Información sobre higiene y seguridad

### 2.5 📸 Portfolio / Galería (Feed Instagram)
- **Contenido:**
  - **Carrusel con las últimas publicaciones de Instagram**
  - Fuente: [@adrianatortosa_microstudio](https://www.instagram.com/adrianatortosa_microstudio/)
  - Mostrar las publicaciones más recientes del feed
  - Diseño tipo carrusel/slider horizontal
  - Click en imagen abre Instagram directamente
  - Botón CTA: "Ver más en Instagram" que enlaza al perfil
- **Implementación técnica:**
  - Opción A: Usar API de Instagram Basic Display (requiere token)
  - Opción B: Widget de terceros (Elfsight, SnapWidget, LightWidget)
  - Opción C: Embed manual de publicaciones seleccionadas
  - Carrusel con Swiper.js para la navegación

### 2.6 📞 Contacto
- **Contenido:**
  - Formulario de contacto con campos:
    - Nombre completo
    - Email
    - Teléfono
    - Servicio de interés (dropdown)
    - Mensaje
  - Información de contacto directa:
    - Teléfono/WhatsApp
    - Email
    - Dirección del estudio (si aplica)
    - Horario de atención
  - Mapa de ubicación (Google Maps embed)
  - Enlaces a redes sociales

---

## 3. Especificaciones Técnicas

### 3.1 Stack Tecnológico
```
- HTML5 semántico
- CSS3 (con variables CSS para temas)
- JavaScript vanilla (ES6+)
- Sin frameworks pesados (para optimizar carga)
```

### 3.2 Librerías Externas (opcionales)
```
- AOS.js - Animaciones al scroll
- GLightbox - Lightbox para galería
- Swiper.js - Carrusel/slider (si se necesita)
- Google Fonts - Tipografías
```

### 3.3 Estructura de Archivos
```
microblading-landing/
├── index.html
├── css/
│   ├── styles.css
│   ├── variables.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── gallery.js
│   └── form.js
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── portfolio/
│   │   ├── about/
│   │   └── icons/
│   └── fonts/ (si son locales)
├── favicon.ico
└── README.md
```

### 3.4 Responsive Design
- **Breakpoints:**
  - Mobile: 320px - 480px
  - Tablet: 481px - 768px
  - Desktop: 769px - 1024px
  - Large Desktop: 1025px+
- Mobile-first approach
- Navegación hamburguesa en móvil

### 3.5 Performance
- Imágenes optimizadas (WebP con fallback)
- Lazy loading para imágenes
- CSS y JS minificados
- Puntuación objetivo Lighthouse: >90

### 3.6 🔍 SEO (PRIORIDAD ALTA)

> ⚠️ **El SEO es crítico para el éxito de este proyecto**

#### Meta Tags y Estructura
- Meta title optimizado con keywords principales
- Meta description atractiva y con llamada a la acción
- Meta keywords relevantes (microblading, cejas, [ciudad], etc.)
- Canonical URLs
- Hreflang si hay múltiples idiomas

#### Open Graph y Redes Sociales
- og:title, og:description, og:image para compartir
- Twitter Cards configuradas
- Imagen destacada optimizada para redes (1200x630px)

#### Schema Markup (Datos Estructurados)
```json
- LocalBusiness schema (negocio local)
- Service schema (servicios ofrecidos)
- Person schema (profesional)
- Review schema (testimonios)
- FAQPage schema (preguntas frecuentes)
- ImageGallery schema (portfolio)
```

#### Optimización Técnica SEO
- URLs amigables con anchors descriptivos (#servicios, #contacto)
- Estructura de headings correcta (H1 único, H2, H3 jerárquicos)
- Alt text descriptivo en TODAS las imágenes
- Tiempo de carga < 3 segundos
- Core Web Vitals optimizados (LCP, FID, CLS)
- Mobile-first indexing ready

#### Archivos SEO
- `sitemap.xml` - Mapa del sitio
- `robots.txt` - Instrucciones para crawlers
- Favicon en múltiples tamaños
- `manifest.json` para PWA básica

#### Keywords Objetivo (a definir)
- Microblading + [ciudad]
- Cejas perfectas + [ciudad]
- Micropigmentación cejas
- Especialista microblading
- Mejor microblading + [zona]

#### SEO Local
- Google My Business (externo pero vinculado)
- NAP consistente (Nombre, Dirección, Teléfono)
- Mapa embebido con ubicación exacta

### 3.7 Accesibilidad
- Contraste de colores WCAG AA
- Alt text en todas las imágenes
- Navegación por teclado
- Aria labels donde corresponda

---

## 4. Diseño y Estética

> 🎨 **Estilo: LUJOSO y ELEGANTE** con efecto Glassmorphism

### 4.1 Paleta de Colores (Blanco y Negro)
```css
:root {
  /* Colores principales */
  --color-black: #000000;           /* Negro puro */
  --color-black-soft: #1a1a1a;      /* Negro suave */
  --color-black-light: #2d2d2d;     /* Negro claro */
  
  --color-white: #ffffff;           /* Blanco puro */
  --color-white-soft: #f8f8f8;      /* Blanco suave */
  --color-white-cream: #fafafa;     /* Blanco crema */
  
  /* Grises de transición */
  --color-gray-dark: #333333;       /* Gris oscuro */
  --color-gray: #666666;            /* Gris medio */
  --color-gray-light: #e0e0e0;      /* Gris claro */
  
  /* Efectos Glass */
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  --glass-blur: blur(10px);
}
```

### 4.2 Tipografía (Google Fonts)

```css
/* Importar en HTML */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter+Tight:wght@300;400;500;600&display=swap');

:root {
  --font-primary: 'Playfair Display', serif;    /* Títulos, headings */
  --font-secondary: 'Inter Tight', sans-serif;  /* Cuerpo, textos, UI */
}
```

| Uso | Fuente | Pesos |
|-----|--------|-------|
| **Títulos (H1-H3)** | Playfair Display | 500, 600, 700 |
| **Subtítulos** | Playfair Display | 400, 500 |
| **Cuerpo de texto** | Inter Tight | 300, 400 |
| **Botones y UI** | Inter Tight | 500, 600 |
| **Navegación** | Inter Tight | 400, 500 |

### 4.3 Estilo Glassmorphism (Glass UI)

El diseño utilizará el efecto **cristal/vidrio** para dar un toque lujoso y moderno:

```css
/* Ejemplo de componente glass */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Variante oscura */
.glass-card-dark {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### Elementos con efecto Glass:
- ✅ Tarjetas de servicios
- ✅ Navegación/Header
- ✅ Formulario de contacto
- ✅ Cards de método/proceso
- ✅ Overlay en imágenes del portfolio
- ✅ Botones con hover glass

### 4.4 Estilo Visual General

- **Estética:** Lujosa, sofisticada y premium
- **Contraste:** Alto contraste blanco/negro para impacto visual
- **Espaciado:** Generoso, con mucho "aire" entre secciones
- **Imágenes:** Alta calidad, con overlays oscuros sutiles
- **Fondos:** 
  - Gradientes suaves negro → gris oscuro
  - Imágenes de fondo con overlay glass
  - Patrones geométricos sutiles (opcional)
- **Iconos:** Líneas finas, estilo outline, color blanco
- **Animaciones:** Suaves y elegantes (fade, slide, scale)
- **Bordes:** Redondeados (border-radius: 12-20px)
- **Sombras:** Difusas y profundas para efecto de profundidad

### 4.5 Ejemplo de Secciones

| Sección | Fondo | Texto | Elementos Glass |
|---------|-------|-------|-----------------|
| Hero | Imagen oscura + overlay | Blanco | CTA button |
| Quién Soy | Blanco/Crema | Negro | Card con foto |
| Servicios | Negro/Gris oscuro | Blanco | Tarjetas glass |
| Mi Método | Blanco | Negro | Timeline cards |
| Portfolio | Negro | Blanco | Overlay en hover |
| Contacto | Gradiente oscuro | Blanco | Formulario glass |

---

## 5. Funcionalidades JavaScript

### 5.1 Navegación
- Smooth scroll entre secciones
- Menú hamburguesa responsive
- Header que cambia al hacer scroll
- Indicador de sección activa

### 5.2 Carrusel Instagram (Portfolio)
- Integración con feed de [@adrianatortosa_microstudio](https://www.instagram.com/adrianatortosa_microstudio/)
- Carrusel horizontal con Swiper.js
- Navegación con flechas y dots
- Autoplay opcional (pausable)
- Click abre publicación en Instagram
- Responsive: 1 imagen en móvil, 3-4 en desktop
- Fallback con imágenes estáticas si falla la API

### 5.3 Formulario
- Validación de campos
- Feedback visual de errores
- Preparado para conectar con:
  - Formspree
  - Netlify Forms
  - EmailJS
  - Google Forms

### 5.4 Animaciones
- Fade in al scroll
- Parallax suave en hero
- Hover effects en elementos interactivos

---

## 6. Contenido Necesario (a proporcionar)

### Textos
- [ ] Nombre del negocio/marca
- [ ] Eslogan o tagline
- [ ] Biografía personal
- [ ] Descripción de cada servicio
- [ ] Pasos del método de trabajo
- [ ] Información de contacto completa
- [ ] Testimonios de clientes (opcional)

### Imágenes
- [ ] Logo (si existe)
- [ ] Foto profesional para "Quién Soy"
- [ ] Imágenes para hero/banner
- [ ] ~~Fotos de trabajos~~ *(se obtendrán del feed de Instagram)*
- [ ] Fotos del estudio/espacio de trabajo (opcional)

### Datos
- [ ] Precios de servicios (si se mostrarán)
- [ ] Horario de atención
- [ ] Dirección completa
- [ ] Teléfono/WhatsApp
- [ ] Email de contacto
- [x] Instagram: [@adrianatortosa_microstudio](https://www.instagram.com/adrianatortosa_microstudio/)
- [ ] Otras redes sociales (Facebook, TikTok, etc.)

---

## 7. Configuración GitHub Pages

### 7.1 Repositorio
```bash
# Nombre sugerido del repositorio
nombre-negocio.github.io
# o
microblading-landing
```

### 7.2 Dominio Personalizado (opcional)
- Configurar CNAME para dominio propio
- Certificado SSL automático de GitHub

---

## 8. Entregables

1. ✅ Código fuente completo y comentado
2. ✅ Archivos CSS organizados y responsivos
3. ✅ JavaScript modular y documentado
4. ✅ Imágenes placeholder (a reemplazar)
5. ✅ README con instrucciones de personalización
6. ✅ Guía de despliegue en GitHub Pages

---

## 9. Instrucciones de Uso

Para ejecutar este documento y que desarrolle la landing page, simplemente envíame este archivo o indica "Desarrolla el proyecto según las especificaciones" junto con cualquier personalización que desees:

- Nombre del negocio
- Colores preferidos
- Servicios específicos
- Cualquier preferencia de diseño

---

*Documento generado el: Diciembre 2024*  
*Versión: 1.2*  
*Última actualización: Diseño lujoso B/N + Glassmorphism + Tipografías definidas*


<!-- l10n-sync: source-file="README.md" -->

<div align="center">

# 🎮 Mona Mayhem

### Pulsa inicio. Elige un rival. Que empiece la batalla de contribuciones.

Crea una arena arcade retro que convierte la actividad de contribuciones de GitHub en un enfrentamiento cara a cara, con **GitHub Copilot** como copiloto de programación.

<a href="workshop/es/00-overview.md"><strong>▶ Empezar el taller</strong></a>
&nbsp; · &nbsp;
<a href="#elige-tu-modalidad">Elige tu modalidad</a>
&nbsp; · &nbsp;
<a href="#ejecútalo-en-local">Ejecútalo en local</a>

</div>

<p align="center">
  <img src="https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7" alt="Vista previa de la arena arcade retro de batallas de contribuciones Mona Mayhem" width="900" />
</p>

> **Proyecto inicial del taller:** La imagen muestra la arena que crearás durante el taller. La aplicación de este repositorio es el punto de partida, no el juego terminado.

🌐 [English](README.md) | Español | [Português (Brasil)](README.pt_BR.md) | [한국어](README.ko.md)

## Tu próxima misión de programación

Mona Mayhem es un taller práctico para crear una aplicación Astro que compara la actividad de contribuciones de GitHub de dos usuarios. Pasa del proyecto inicial a una experiencia inspirada en los salones recreativos mientras practicas cómo planificar, proporcionar contexto útil a un agente de programación con IA, desarrollar de forma iterativa y pulir un proyecto real.

### Elige tu modalidad

Ambas modalidades crean el mismo proyecto. Elige el flujo de trabajo que prefieras y sigue la [introducción al taller](workshop/es/00-overview.md).

| 🧑‍💻 VS Code | 💻 GitHub Copilot CLI |
| --- | --- |
| Trabaja en el editor con Chat, Plan Mode, Agent Mode, agentes en segundo plano y ciclos de revisión. | Desarrolla desde el terminal con `copilot`, contexto `@file`, `/plan`, `/fleet`, `/delegate` y `/review`. |

[Abre la introducción al taller para elegir tu modalidad →](workshop/es/00-overview.md)

### El registro de misiones

<details>
<summary>Ver todos los niveles del taller</summary>

| Parte | Nivel | Qué harás |
| --- | --- | --- |
| [00](workshop/es/00-overview.md) | Introducción | Elegir una modalidad y descubrir lo que aprenderás |
| [01](workshop/es/01-setup.md) | Configuración e ingeniería de contexto | Preparar el entorno y proporcionar contexto útil a Copilot |
| [02](workshop/es/02-plan-and-scaffold.md) | Planificación y estructura inicial | Definir la API y la arquitectura de la página |
| [03](workshop/es/03-agent-mode.md) | Crear el juego | Implementar la arena con ayuda agéntica |
| [04](workshop/es/04-design-vibes.md) | Tematización centrada en el diseño | Dar a la aplicación un aspecto de salón recreativo retro |
| [05](workshop/es/05-polish.md) | Pulido y trabajo paralelo | Refinar la experiencia y trabajar en paralelo |
| [06](workshop/es/06-bonus.md) | Bonus y ampliaciones | Probar funcionalidades adicionales y experimentos con Copilot |

</details>

## Empieza a jugar

1. **Crea tu propia copia** con **Use this template** en GitHub o haz un fork de este repositorio.
2. **Clona tu copia** y ábrela en VS Code, o abre un terminal para la modalidad CLI.
3. **Elige tu modalidad** en la [introducción al taller](workshop/es/00-overview.md) y ve al nivel 01.

### Requisitos

- GitHub Copilot (Pro, Business o Enterprise)
- Git y Node.js
- **Modalidad VS Code:** VS Code v1.107+ y la extensión GitHub Copilot, con la sesión iniciada
- **Modalidad CLI:** GitHub Copilot CLI (`copilot`). Instalarlo con `npm install -g @github/copilot` requiere Node.js 22+; también puedes usar Homebrew o WinGet.

## Ejecútalo en local

```sh
npm install
npm run dev
```

Abre la URL local que muestre Astro. Para comprobar la aplicación antes de compartir tus cambios:

```sh
npm run lint
npm run build
```

<details>
<summary>Notas sobre la pila tecnológica y el despliegue</summary>

- **Framework:** Astro v6 con el [adaptador de Node](https://docs.astro.build/en/guides/integrations-guide/node/)
- **Lenguaje:** TypeScript
- **Tipografía arcade:** Press Start 2P
- **Datos:** gráficos de contribuciones de GitHub

La ruta `GET /api/contributions/:username` obtiene JSON de contribuciones en el servidor. Las respuestas correctas se almacenan en caché en memoria durante una hora, con un límite de 100 usuarios por proceso del servidor; las entradas de caché no se comparten entre instancias.

El flujo de trabajo actual de `.github/workflows/deploy.yml` publica en GitHub Pages el contenido estático del taller y la documentación de `docs/` y `workshop/`. **No** compila ni despliega la aplicación Astro de `src/`.

Para desplegar la aplicación Astro en GitHub Pages, cambia Astro a salida estática, elimina el adaptador de Node y actualiza el flujo de trabajo para que compile y publique `dist/`. Si se trata de una página de proyecto en `https://<user>.github.io/<repo>/`, configura también `site` y `base` en `astro.config.mjs`.

Si quieres mantener las rutas de API en producción, usa una plataforma de servidor como Vercel, Netlify o un host de Node en lugar de GitHub Pages.

</details>

## Licencia

MIT

<!-- l10n-sync: source-file="workshop/04-design-vibes.md" -->
# Parte 4: Tematización Orientada al Diseño

---

En esta parte, usarás **Plan Mode** para diseñar una transformación de tema completa, y luego **Agent Mode** para implementarla. Esto es desarrollo orientado al diseño — comienza con la visión, itera sobre los elementos visuales y deja que Copilot se encargue del trabajo pesado de CSS.

## Tarea 1: Planifica el Tema Retro

<!-- track:vscode:start -->
Cambia a modo **Plan** en GitHub Copilot Chat.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Usa `/plan` en GitHub Copilot CLI o pulsa **Shift+Tab** hasta activar plan mode.
<!-- track:cli:end -->

Ingresa este prompt:

> Quiero transformar esta página en una experiencia completa de salón recreativo retro. Planifica una renovación visual integral que incluya: efectos de líneas de barrido CRT en el fondo, resplandor de neón en el título que pulse como un letrero, insignia VS animada con cambios de degradado, superposición brillante y de destellos en las tarjetas de resultados, animaciones de entrada flotante para los campos, texto de carga que cambie entre verde y morado y efectos de resplandor al pasar el cursor sobre los cuadros de contribuciones. Mantén el fondo oscuro (`#0a0a1a`) con colores de acento verde (`#5fed83`) y morado (`#8a2be2`). Usa un tema oscuro con la fuente retro Press Start 2P de Google Fonts.

Copilot generará un plan detallado de implementación cubriendo todos los efectos visuales. **No lo aceptes de inmediato** — revisa el plan e itera:

- Sugiere ajustes en la velocidad de las animaciones (por ejemplo, "Haz que el pulso de neón sea más lento, de unos 3 segundos").
- Pregunta sobre efectos específicos (por ejemplo, "¿Cómo funcionará la superposición de destellos en las tarjetas?").
- Solicita cambios en el enfoque si algo no te convence

Una vez que estés satisfecho con el plan, deja que Copilot proceda con la implementación.

> **⚠️ ¿No ves los cambios?** Si no aparecen el nuevo tema o las animaciones, detén el servidor de desarrollo (`Ctrl+C`), reinícialo con `npm run dev` y actualiza la página sin usar la caché (`Ctrl+Shift+R`).

<!-- track:vscode:start -->
## Tarea 2: Implementa el Tema

Cambia a modo **Agent** y pide a Copilot que implemente el plan:

> Implementa el plan de tema arcade retro que acabamos de diseñar.

Copilot agregará múltiples animaciones CSS, pseudo-elementos y transiciones en tu hoja de estilos. Esto puede incluir:

- `@keyframes` para scanlines, pulso neón, shimmer y efectos de aparición flotante
- Pseudo-elementos (`::before`, `::after`) para efectos de superposición
- CSS custom properties para los colores del tema
- Transiciones y estados hover para elementos interactivos

Una vez aplicados los cambios, **revisa la vista previa en tu navegador** para ver la transformación completa al estilo retro arcade.
<!-- track:vscode:end -->

<!-- track:cli:start -->
## Tarea 2: Implementa el tema

Cuando estés satisfecho con el plan, pide a Copilot que lo implemente:

> Implement the retro arcade theme plan we just designed.

Cuando terminen los cambios, usa `/diff` para revisar el estilo antes de aprobarlo.
<!-- track:cli:end -->

## Tarea 3: Ajusta las Vibras

Mantén la vista previa del navegador abierta e itera sobre el diseño. Prueba prompts como:

> El efecto de líneas de barrido es demasiado intenso; reduce la opacidad a 0.03.

> Añade un parpadeo eléctrico sutil al texto del título.

> La insignia VS debería pulsar de forma más llamativa.

Esto es **desarrollo orientado al diseño** — estás iterando sobre la salida visual en tiempo real. Cada prompt refina la experiencia hasta que se sienta correcta. No te conformes con "suficientemente bueno" — perfecciona las vibras hasta que la página parezca pertenecer a un gabinete arcade.

<!-- track:vscode:start -->
## Tarea 4: Actualiza las Instrucciones

Las instrucciones de tu workspace deben reflejar las decisiones de diseño importantes. Pídele a Copilot:

> Añade una sección de guía de diseño a copilot-instructions.md que describa el tema arcade retro: colores, fuentes y estilo de animación.

Esto mantiene las interacciones futuras de Copilot consistentes con la identidad visual que has establecido. Cualquier nueva funcionalidad o componente seguirá automáticamente la estética retro arcade.
<!-- track:vscode:end -->

<!-- track:cli:start -->
## Tarea 4: Actualiza las instrucciones

Actualiza las instrucciones del repositorio para documentar las decisiones de diseño principales. Pide a Copilot CLI:

> Actualiza las instrucciones del repositorio con una breve guía de diseño para el tema arcade retro: colores, fuentes, estilo de animación y la regla de que la nueva interfaz conserve la estética de neón.

Haz commit de las instrucciones y los cambios de diseño cuando la página tenga el aspecto que buscas.
<!-- track:cli:end -->

Haz commit de las instrucciones y los cambios de diseño cuando la página tenga el aspecto que buscas.

```
git add -A
git commit -m "Add retro arcade theme with CRT and neon effects"
git push
```

## ✅ Parte 4 Completa

**Lo que aprendiste:**

- **Plan Mode para sistemas de diseño** — esbozar una renovación visual completa antes de escribir código
- **Iterar sobre la salida visual** — usar prompts rápidos de seguimiento para ajustar animaciones, colores y efectos
- **Mantener las instrucciones actualizadas con decisiones de diseño** — documentar tu tema para que Copilot se mantenga consistente
- **Flujo de trabajo de desarrollo orientado al diseño** — comenzar con la visión, implementar con IA, refinar hasta que se sienta correcto

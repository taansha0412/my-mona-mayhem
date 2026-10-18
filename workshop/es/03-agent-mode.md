<!-- l10n-sync: source-file="workshop/03-agent-mode.md" -->
# Parte 3: Agent Mode — Construir el Juego

---

Agent Mode permite a Copilot planificar e implementar cambios de forma autónoma en múltiples archivos. En lugar de escribir código línea por línea, describes lo que quieres y Copilot determina qué archivos crear o modificar, luego implementa todo de principio a fin.

## Tarea 1: Conecta la Batalla

<!-- track:vscode:start -->
1. Cambia a modo **Agent** en Copilot Chat.
2. Ingresa este prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Vuelve al flujo de programación estándar de Copilot CLI (o mantén el modo autopilot para que Copilot siga trabajando hasta que lo detengas).
2. Si te resulta útil, añade el archivo de la página como contexto: `@src/pages/index.astro`.
3. Ingresa este prompt:
<!-- track:cli:end -->

   > Añade JavaScript del lado del cliente a la página de batalla para que:
   > 1. Al hacer clic en el botón Battle, obtenga ambos nombres de usuario de los campos.
   > 2. Compruebe que ambos estén completos (y muestre un error si no lo están).
   > 3. Obtenga en paralelo los datos de contribuciones de ambos usuarios desde nuestra API.
   > 4. Muestre los gráficos de contribuciones como cuadrículas de colores: cada día será un cuadro con un color de la paleta de GitHub.
   > 5. Muestre una insignia VS entre los dos usuarios.
   > 6. Muestre el nombre de usuario, el total de contribuciones y el intervalo de fechas de cada usuario.
   > 7. Gestione los estados de carga y los errores.
   > 8. Active la acción también al pulsar Enter en los campos.
   >
   > Usa interfaces de TypeScript para la estructura de datos de contribuciones.

<!-- track:vscode:start -->
3. Deja que Agent Mode implemente los cambios en `index.astro`.
4. Revisa los cambios propuestos en la vista de diferencias antes de aceptarlos.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Deja que Copilot CLI trabaje en `src/pages/index.astro`.
5. Usa `/diff` para revisar los cambios generados y aprobarlos.
<!-- track:cli:end -->

## Tarea 2: Prueba la Batalla

> **⚠️ ¿No ves los cambios?** Si la página de batalla no se actualiza, detén el servidor de desarrollo (`Ctrl+C`), reinícialo con `npm run dev` y actualiza el navegador.

1. Ingresa `octocat` y `torvalds` como los dos nombres de usuario y haz clic en **Battle**.
2. Deberías ver ambos gráficos de contribuciones renderizados lado a lado con cuadrículas de colores.
3. Prueba los casos de error:
   - Deja uno o ambos campos vacíos y haz clic en Battle: debería aparecer un error de validación.
   - Ingresa un nombre de usuario no válido: la aplicación debería mostrar un error de la API.
4. Prueba presionar **Enter** en cualquier campo de entrada — debería activar la batalla igual que al hacer clic en el botón.

## Tarea 3: Itera con Agent

<!-- track:vscode:start -->
Si algo no está del todo bien, dale retroalimentación a Agent directamente en el chat. Por ejemplo:

- *"Los cuadros de contribución son demasiado grandes; cámbialos a 12x12px."*
- *"Añade una descripción emergente al pasar el cursor que muestre la fecha y el número de contribuciones."*
- *"El estado de carga necesita una animación de pulso."*

Agent Mode maneja cambios en múltiples archivos e iteraciones de forma natural. Cada prompt de seguimiento se basa en el contexto previo, por lo que puedes refinar la implementación de forma incremental sin empezar de cero.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Copilot CLI conserva el historial de la sesión, así que cada prompt de seguimiento se basa en el anterior. Usa `/session` o `/context` para inspeccionar el contexto activo y ejecuta `/review` después de una iteración grande si quieres otra revisión de errores o mejoras.
<!-- track:cli:end -->

## Consejos para Agent Mode

- **Sé específico sobre lo que quieres** — requisitos claros producen mejores resultados.
- **Divide tareas grandes en prompts más pequeños** si Agent se desvía.
- **Revisa los cambios antes de aceptar** — usa la vista de diferencias para entender qué se modificó.
- **Si los resultados no son perfectos, da retroalimentación e itera** — Agent aprende de tus correcciones dentro de la conversación.

## ✅ Parte 3 Completa

Has aprendido a:

- Usar **Agent Mode** para implementaciones complejas en múltiples archivos
- **Iterar sobre los resultados** con retroalimentación dirigida
- Manejar el **ciclo de vida completo de una funcionalidad** — desde la implementación hasta las pruebas y el refinamiento — en una sola conversación

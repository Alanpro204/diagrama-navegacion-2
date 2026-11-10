// EDITA ESTE ARCHIVO PARA CAMBIAR LAS ASOCIACIONES.
// Las rutas de "archivo" son relativas a la carpeta assets.
// Ejemplo: { archivo: "mi-pantalla.webp", cu: "CU 08", vista: "Nueva vista" }
// imagenes: [] muestra NA. Puedes reutilizar un archivo en varios nodos.
// Los identificadores coinciden con data-node en index.html; no son consecutivos.
// Se conservan los identificadores anteriores cuando existe el mismo destino.
// N61–N65 corresponden a destinos nuevos o separados en new.svg.
window.GEOUCI_VISTAS = {
  N01: {
    elemento: "Inicio de sesión con cuenta UCI",
    nota: "Acceso y estado de credenciales incorrectas, también para el acceso del gestor al panel de administración.",
    imagenes: [
      { archivo: "CU06_p054_01.webp", cu: "CU 06", vista: "Inicio de sesión y confirmación de acceso" },
      { archivo: "CU06_p054_02.webp", cu: "CU 06", vista: "Inicio de sesión: credenciales incorrectas" },
    ],
  },
  N03: {
    elemento: "Recuperación de contraseña UCI",
    nota: "No se muestra recuperación de contraseña ni enlace al proveedor UCI.",
    imagenes: [],
  },
  N02: {
    elemento: "Mapa del campus",
    nota: "Agrupa el mapa, el menú lateral, los listados y búsquedas de eventos y localizaciones, la selección de marcadores y el cálculo de rutas. Se ve el recorrido, pero faltan selección de origen, indicaciones y tiempo estimado.",
    imagenes: [
      { archivo: "CU07_p059_01.webp", cu: "CU 07", vista: "Mapa principal: marcador seleccionado y ruta" },
      { archivo: "CU02_p036_01.webp", cu: "CU 02", vista: "Menú lateral: búsqueda y listados" },
      { archivo: "CU02_p036_02.webp", cu: "CU 02", vista: "Búsqueda con resultados" },
      { archivo: "CU02_p037_01.webp", cu: "CU 02", vista: "Búsqueda sin resultados" },
    ],
  },
  N07: {
    elemento: "Detalles del evento",
    nota: "Agrupa el detalle desde el mapa o el listado, comentarios, reacciones y denuncia. Se conservan las confirmaciones y validaciones. No hay capturas para editar o eliminar comentarios; la reacción mostrada es un pulgar/contador, no una validación positiva/negativa.",
    imagenes: [
      { archivo: "CU07_p059_02.webp", cu: "CU 07", vista: "Detalles e interacción con evento sobre el mapa" },
      { archivo: "CU02_p037_02.webp", cu: "CU 02", vista: "Detalles de evento desde el listado" },
      { archivo: "CU03_p042_01.webp", cu: "CU 03", vista: "Detalles de evento: reacción y comentario" },
      { archivo: "CU03_p043_01.webp", cu: "CU 03", vista: "Comentario publicado: confirmación" },
      { archivo: "CU03_p043_02.webp", cu: "CU 03", vista: "Comentario vacío: validación" },
      { archivo: "CU03_p042_02.webp", cu: "CU 03", vista: "Interacción no permitida con un evento propio" },
      { archivo: "CU03_p042_03.webp", cu: "CU 03", vista: "Denuncia: motivo y aviso de envío" },
      { archivo: "CU03_p042_04.webp", cu: "CU 03", vista: "Denuncia: validación del motivo obligatorio" },
    ],
  },
  N08: {
    elemento: "Detalles de la localización",
    nota: "Consulta desde el mapa del campus. Falta una interfaz específica de detalle de localización; no se sustituye por el detalle de evento. La información breve del marcador y el recorrido se encuentran en Mapa del campus.",
    imagenes: [],
  },
  N11: {
    elemento: "Mis eventos",
    nota: "Agrupa el listado de eventos propios, su selección y la confirmación de eliminación. El listado aparece detrás de un formulario o diálogo; falta una captura despejada.",
    imagenes: [
      { archivo: "CU04_p047_01.webp", cu: "CU 04", vista: "Mis eventos y formulario de creación" },
      { archivo: "CU04_p048_01.webp", cu: "CU 04", vista: "Modificar evento" },
      { archivo: "CU04_p048_02.webp", cu: "CU 04", vista: "Eliminar evento: confirmación" },
    ],
  },
  N22: {
    elemento: "Crear evento",
    nota: "Formulario de nuevo evento y campos inválidos. Revisar fecha y organizador.",
    imagenes: [
      { archivo: "CU04_p047_01.webp", cu: "CU 04", vista: "Mis eventos y formulario de creación" },
      { archivo: "CU04_p047_02.webp", cu: "CU 04", vista: "Crear evento: campos inválidos" },
    ],
  },
  N24: {
    elemento: "Editar evento",
    nota: "Formulario de modificación del evento propio.",
    imagenes: [
      { archivo: "CU04_p048_01.webp", cu: "CU 04", vista: "Modificar evento" },
    ],
  },
  N12: {
    elemento: "Solicitar nueva localización",
    nota: "Agrupa el formulario de solicitud, las validaciones y la confirmación de envío al gestor.",
    imagenes: [
      { archivo: "CU05_p051_01.webp", cu: "CU 05", vista: "Solicitar localización: formulario y confirmación" },
      { archivo: "CU05_p051_02.webp", cu: "CU 05", vista: "Solicitar localización: campos inválidos" },
    ],
  },
  N61: {
    elemento: "Mis solicitudes de localización",
    nota: "Nuevo destino de consulta de solicitudes propias. Solo existe la captura del formulario con confirmación de envío; falta un prototipo del listado y seguimiento del solicitante. No se reutiliza el listado administrativo como si fuera una vista del usuario.",
    imagenes: [
      { archivo: "CU05_p051_01.webp", cu: "CU 05", vista: "Solicitud enviada al gestor: confirmación (no es el listado de solicitudes propias)" },
    ],
  },
  N29: {
    elemento: "Panel de administración",
    nota: "Conserva las estadísticas como funcionalidad del panel: cantidades y elementos más visitados. No existe una captura del menú general del panel; tampoco hay filtros, ordenamiento ni cantidad de solicitudes en las estadísticas disponibles.",
    imagenes: [
      { archivo: "CU01_p032_01.webp", cu: "CU 01", vista: "Estadísticas: cantidades del sistema" },
      { archivo: "CU01_p032_02.webp", cu: "CU 01", vista: "Estadísticas: localizaciones y eventos más visitados" },
    ],
  },
  N36: {
    elemento: "Gestionar localizaciones",
    nota: "Listado administrativo de localizaciones y acceso a sus acciones. No hay un buscador visible en esta interfaz.",
    imagenes: [
      { archivo: "CU09_p072_01.webp", cu: "CU 09", vista: "Gestión de localizaciones: listado" },
    ],
  },
  N62: {
    elemento: "Crear localización",
    nota: "Creación separada de la edición en el nuevo diagrama. La captura disponible está en estado de error e incluye la casilla de localización oficial.",
    imagenes: [
      { archivo: "CU09_p073_02.webp", cu: "CU 09", vista: "Crear localización: formulario con validaciones" },
    ],
  },
  N63: {
    elemento: "Detalles de la localización",
    nota: "Detalle en administración y acción de eliminación. Se conserva la información del listado y la confirmación de eliminar; falta una pantalla independiente de detalle. La modificación tiene su propio destino: Editar localización.",
    imagenes: [
      { archivo: "CU09_p072_01.webp", cu: "CU 09", vista: "Gestión de localizaciones: listado" },
      { archivo: "CU09_p074_01.webp", cu: "CU 09", vista: "Eliminar localización: confirmación" },
    ],
  },
  N40: {
    elemento: "Editar localización",
    nota: "Formulario de modificación y estado de datos actualizados. Incluye la definición del tipo mediante la casilla «Es una localización oficial».",
    imagenes: [
      { archivo: "CU09_p072_02.webp", cu: "CU 09", vista: "Modificar localización" },
      { archivo: "CU09_p073_01.webp", cu: "CU 09", vista: "Modificar localización: datos actualizados" },
    ],
  },
  N37: {
    elemento: "Gestionar categorías",
    nota: "Tabla administrativa de categorías con acciones de gestión.",
    imagenes: [
      { archivo: "CU08_p065_01.webp", cu: "CU 08", vista: "Gestión de categorías: listado" },
    ],
  },
  N64: {
    elemento: "Crear categoría",
    nota: "Formulario de creación y validación de campos, separado de la edición en el nuevo diagrama.",
    imagenes: [
      { archivo: "CU08_p065_02.webp", cu: "CU 08", vista: "Crear categoría" },
      { archivo: "CU08_p066_01.webp", cu: "CU 08", vista: "Crear categoría: campos inválidos" },
    ],
  },
  N65: {
    elemento: "Detalles de la categoría",
    nota: "Información de la categoría y confirmación de eliminación. No existe una pantalla independiente de detalle; la información disponible aparece en la tabla. La edición tiene su propio destino.",
    imagenes: [
      { archivo: "CU08_p065_01.webp", cu: "CU 08", vista: "Gestión de categorías: listado" },
      { archivo: "CU08_p066_02.webp", cu: "CU 08", vista: "Eliminar categoría: confirmación" },
    ],
  },
  N44: {
    elemento: "Editar categoría",
    nota: "Formulario de modificación de categoría y estado de campos inválidos.",
    imagenes: [
      { archivo: "CU08_p067_01.webp", cu: "CU 08", vista: "Modificar categoría" },
      { archivo: "CU08_p067_02.webp", cu: "CU 08", vista: "Modificar categoría: campos inválidos" },
    ],
  },
  N38: {
    elemento: "Atender solicitudes",
    nota: "Listado administrativo de solicitudes pendientes que el gestor puede revisar.",
    imagenes: [
      { archivo: "CU12_p089_01.webp", cu: "CU 12", vista: "Solicitudes de usuarios: listado" },
    ],
  },
  N47: {
    elemento: "Detalles de la solicitud",
    nota: "Agrupa la información de la propuesta, el mapa y las acciones de aprobar o rechazar. Hay confirmación de rechazo, pero falta un campo para su motivo y un aviso específico de aprobación.",
    imagenes: [
      { archivo: "CU12_p089_02.webp", cu: "CU 12", vista: "Detalle de solicitud: aprobar o rechazar" },
      { archivo: "CU12_p090_01.webp", cu: "CU 12", vista: "Solicitud rechazada: confirmación" },
    ],
  },
  N50: {
    elemento: "Control de eventos",
    nota: "Listado administrativo con acciones y cantidades de denuncias. No hay un filtro explícito de eventos denunciados; las denuncias, el destacado y la eliminación se agrupan en el detalle del evento.",
    imagenes: [
      { archivo: "CU10_p078_01.webp", cu: "CU 10", vista: "Control de eventos: listado y acciones" },
    ],
  },
  N53: {
    elemento: "Detalle del evento",
    nota: "Agrupa el detalle para moderación, la consulta de denuncias y motivos, el destacado mediante estrellas y la confirmación de eliminación. El detalle disponible corresponde a la comunidad; las acciones administrativas están en la tabla, no en una pantalla independiente de detalle.",
    imagenes: [
      { archivo: "CU07_p059_02.webp", cu: "CU 07", vista: "Detalles e interacción con evento sobre el mapa" },
      { archivo: "CU10_p078_01.webp", cu: "CU 10", vista: "Control de eventos: listado y acciones" },
      { archivo: "CU10_p078_02.webp", cu: "CU 10", vista: "Consulta de denuncias de un evento" },
      { archivo: "CU10_p079_01.webp", cu: "CU 10", vista: "Eliminar evento desde administración: confirmación" },
    ],
  },
  N51: {
    elemento: "Control de usuarios",
    nota: "Listado de usuarios con identidad, permisos y acciones, dividido en dos capturas.",
    imagenes: [
      { archivo: "CU11_p084_01.webp", cu: "CU 11", vista: "Control de usuarios: nombres y permisos (parte izquierda)" },
      { archivo: "CU11_p084_02.webp", cu: "CU 11", vista: "Control de usuarios: permisos y bloqueo (parte derecha)" },
    ],
  },
  N58: {
    elemento: "Detalle del usuario",
    nota: "Agrupa la información del usuario, bloqueo o desbloqueo y promoción a gestor. No hay una vista independiente de detalle: los datos aparecen por fila. Existe confirmación de bloqueo, pero falta la confirmación específica de desbloqueo.",
    imagenes: [
      { archivo: "CU11_p084_01.webp", cu: "CU 11", vista: "Control de usuarios: nombres y permisos (parte izquierda)" },
      { archivo: "CU11_p084_02.webp", cu: "CU 11", vista: "Control de usuarios: permisos y bloqueo (parte derecha)" },
      { archivo: "CU11_p085_02.webp", cu: "CU 11", vista: "Bloquear usuario: confirmación" },
      { archivo: "CU11_p085_01.webp", cu: "CU 11", vista: "Promover a gestor: confirmación" },
    ],
  },
};

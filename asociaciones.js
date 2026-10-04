// EDITA ESTE ARCHIVO PARA CAMBIAR LAS ASOCIACIONES.
// Las rutas de "archivo" son relativas a la carpeta assets.
// Para añadir una imagen: copia el archivo a assets y añade un objeto a imagenes.
// Ejemplo: { "archivo": "mi-pantalla.webp", "cu": "CU 08", "vista": "Nueva vista" }
// imagenes: [] muestra NA. Se admiten webp, JPG, WebP y SVG.
// Conserva los identificadores N01–N60. Puedes reutilizar un archivo en varios nodos.
window.GEOUCI_VISTAS = {
  N01: {
    elemento: "Inicio de sesión con cuenta UCI",
    nota: "Acceso y estado de credenciales incorrectas.",
    imagenes: [
      {
        archivo: "CU06_p054_01.webp",
        cu: "CU 06",
        vista: "Inicio de sesión y confirmación de acceso",
      },
      {
        archivo: "CU06_p054_02.webp",
        cu: "CU 06",
        vista: "Inicio de sesión: credenciales incorrectas",
      },
    ],
  },
  N02: {
    elemento: "Mapa del campus",
    nota: "Mapa con marcadores, controles y recorrido dibujado.",
    imagenes: [
      {
        archivo: "CU07_p059_01.webp",
        cu: "CU 07",
        vista: "Mapa principal: marcador seleccionado y ruta",
      },
    ],
  },
  N03: {
    elemento: "Recuperación de contraseña UCI",
    nota: "No se muestra recuperación de contraseña ni enlace al proveedor UCI.",
    imagenes: [],
  },
  N04: {
    elemento: "Menú lateral",
    nota: "Menú de consulta abierto sobre el mapa.",
    imagenes: [
      {
        archivo: "CU02_p036_01.webp",
        cu: "CU 02",
        vista: "Menú lateral: búsqueda y listados",
      },
    ],
  },
  N05: {
    elemento: "Seleccionar marcador o buscar",
    nota: "Selección de marcador y búsqueda con y sin resultados.",
    imagenes: [
      {
        archivo: "CU07_p059_01.webp",
        cu: "CU 07",
        vista: "Mapa principal: marcador seleccionado y ruta",
      },
      {
        archivo: "CU02_p036_02.webp",
        cu: "CU 02",
        vista: "Búsqueda con resultados",
      },
      {
        archivo: "CU02_p037_01.webp",
        cu: "CU 02",
        vista: "Búsqueda sin resultados",
      },
    ],
  },
  N06: {
    elemento: "Información básica del elemento",
    nota: "Ventana breve del marcador con título, descripción y acciones.",
    imagenes: [
      {
        archivo: "CU07_p059_01.webp",
        cu: "CU 07",
        vista: "Mapa principal: marcador seleccionado y ruta",
      },
    ],
  },
  N07: {
    elemento: "Detalles del evento",
    nota: "Detalle del evento desde el mapa o desde el listado.",
    imagenes: [
      {
        archivo: "CU07_p059_02.webp",
        cu: "CU 07",
        vista: "Detalles e interacción con evento sobre el mapa",
      },
      {
        archivo: "CU02_p037_02.webp",
        cu: "CU 02",
        vista: "Detalles de evento desde el listado",
      },
    ],
  },
  N08: {
    elemento: "Detalles de la localización",
    nota: "Falta una interfaz específica de detalle de localización; no se sustituye por el detalle de evento.",
    imagenes: [],
  },
  N09: {
    elemento: "Eventos: listado y búsqueda",
    nota: "Listado compartido de eventos y localizaciones. Los estados de búsqueda disponibles ejemplifican localizaciones.",
    imagenes: [
      {
        archivo: "CU02_p036_01.webp",
        cu: "CU 02",
        vista: "Menú lateral: búsqueda y listados",
      },
      {
        archivo: "CU02_p036_02.webp",
        cu: "CU 02",
        vista: "Búsqueda con resultados",
      },
      {
        archivo: "CU02_p037_01.webp",
        cu: "CU 02",
        vista: "Búsqueda sin resultados",
      },
    ],
  },
  N10: {
    elemento: "Localizaciones: listado y búsqueda",
    nota: "Listado, resultado de búsqueda de una localización y estado sin resultados.",
    imagenes: [
      {
        archivo: "CU02_p036_01.webp",
        cu: "CU 02",
        vista: "Menú lateral: búsqueda y listados",
      },
      {
        archivo: "CU02_p036_02.webp",
        cu: "CU 02",
        vista: "Búsqueda con resultados",
      },
      {
        archivo: "CU02_p037_01.webp",
        cu: "CU 02",
        vista: "Búsqueda sin resultados",
      },
    ],
  },
  N11: {
    elemento: "Mis eventos",
    nota: "El listado de eventos propios aparece detrás de un formulario o diálogo; falta una captura despejada.",
    imagenes: [
      {
        archivo: "CU04_p047_01.webp",
        cu: "CU 04",
        vista: "Mis eventos y formulario de creación",
      },
      {
        archivo: "CU04_p048_02.webp",
        cu: "CU 04",
        vista: "Eliminar evento: confirmación",
      },
    ],
  },
  N12: {
    elemento: "Solicitar nueva localización",
    nota: "Acceso representado por el formulario de solicitud y sus validaciones.",
    imagenes: [
      {
        archivo: "CU05_p051_01.webp",
        cu: "CU 05",
        vista: "Solicitar localización: formulario y confirmación",
      },
      {
        archivo: "CU05_p051_02.webp",
        cu: "CU 05",
        vista: "Solicitar localización: campos inválidos",
      },
    ],
  },
  N13: {
    elemento: "Comentarios y reacciones",
    nota: "Bloque de comentarios, contador y acción de reacción dentro del detalle.",
    imagenes: [
      {
        archivo: "CU03_p042_01.webp",
        cu: "CU 03",
        vista: "Detalles de evento: reacción y comentario",
      },
      {
        archivo: "CU07_p059_02.webp",
        cu: "CU 07",
        vista: "Detalles e interacción con evento sobre el mapa",
      },
    ],
  },
  N14: {
    elemento: "Comentar evento",
    nota: "Campo de comentario, confirmación de publicación y validación de texto vacío.",
    imagenes: [
      {
        archivo: "CU03_p042_01.webp",
        cu: "CU 03",
        vista: "Detalles de evento: reacción y comentario",
      },
      {
        archivo: "CU03_p043_01.webp",
        cu: "CU 03",
        vista: "Comentario publicado: confirmación",
      },
      {
        archivo: "CU03_p043_02.webp",
        cu: "CU 03",
        vista: "Comentario vacío: validación",
      },
    ],
  },
  N15: {
    elemento: "Eliminar comentario",
    nota: "No hay control ni diálogo visible para eliminar un comentario.",
    imagenes: [],
  },
  N16: {
    elemento: "Modificar comentario",
    nota: "No hay formulario ni control visible para modificar un comentario.",
    imagenes: [],
  },
  N17: {
    elemento: "Reaccionar al evento",
    nota: "Se muestra un pulgar/contador y la restricción para eventos propios. Revisar su correspondencia con la validación positiva/negativa especificada.",
    imagenes: [
      {
        archivo: "CU03_p042_01.webp",
        cu: "CU 03",
        vista: "Detalles de evento: reacción y comentario",
      },
      {
        archivo: "CU03_p042_02.webp",
        cu: "CU 03",
        vista: "Interacción no permitida con un evento propio",
      },
    ],
  },
  N18: {
    elemento: "Denuncia: introducir motivo",
    nota: "Motivo de denuncia, confirmación y validación del campo obligatorio.",
    imagenes: [
      {
        archivo: "CU03_p042_03.webp",
        cu: "CU 03",
        vista: "Denuncia: motivo y aviso de envío",
      },
      {
        archivo: "CU03_p042_04.webp",
        cu: "CU 03",
        vista: "Denuncia: validación del motivo obligatorio",
      },
    ],
  },
  N19: {
    elemento: "Obtener ruta",
    nota: "Acción «Calcular ruta» en la información del marcador.",
    imagenes: [
      {
        archivo: "CU07_p059_01.webp",
        cu: "CU 07",
        vista: "Mapa principal: marcador seleccionado y ruta",
      },
    ],
  },
  N20: {
    elemento: "Ubicación actual o punto de partida",
    nota: "No se muestra selección de origen ni solicitud de ubicación actual.",
    imagenes: [],
  },
  N21: {
    elemento: "Ruta en el mapa: indicaciones y tiempo",
    nota: "Se ve el recorrido sobre el mapa; faltan indicaciones y tiempo estimado.",
    imagenes: [
      {
        archivo: "CU07_p059_01.webp",
        cu: "CU 07",
        vista: "Mapa principal: marcador seleccionado y ruta",
      },
    ],
  },
  N22: {
    elemento: "Crear evento",
    nota: "Formulario de nuevo evento y campos inválidos. Revisar fecha y organizador.",
    imagenes: [
      {
        archivo: "CU04_p047_01.webp",
        cu: "CU 04",
        vista: "Mis eventos y formulario de creación",
      },
      {
        archivo: "CU04_p047_02.webp",
        cu: "CU 04",
        vista: "Crear evento: campos inválidos",
      },
    ],
  },
  N23: {
    elemento: "Seleccionar evento propio",
    nota: "El evento seleccionado y sus acciones aparecen en el listado de fondo; falta el estado de selección despejado.",
    imagenes: [
      {
        archivo: "CU04_p048_01.webp",
        cu: "CU 04",
        vista: "Modificar evento",
      },
      {
        archivo: "CU04_p048_02.webp",
        cu: "CU 04",
        vista: "Eliminar evento: confirmación",
      },
    ],
  },
  N24: {
    elemento: "Editar evento",
    nota: "Formulario de modificación del evento.",
    imagenes: [
      {
        archivo: "CU04_p048_01.webp",
        cu: "CU 04",
        vista: "Modificar evento",
      },
    ],
  },
  N25: {
    elemento: "Confirmar eliminación",
    nota: "Confirmación de eliminación de un evento propio.",
    imagenes: [
      {
        archivo: "CU04_p048_02.webp",
        cu: "CU 04",
        vista: "Eliminar evento: confirmación",
      },
    ],
  },
  N26: {
    elemento: "Formulario de solicitud",
    nota: "Formulario de nueva localización y errores de validación.",
    imagenes: [
      {
        archivo: "CU05_p051_01.webp",
        cu: "CU 05",
        vista: "Solicitar localización: formulario y confirmación",
      },
      {
        archivo: "CU05_p051_02.webp",
        cu: "CU 05",
        vista: "Solicitar localización: campos inválidos",
      },
    ],
  },
  N27: {
    elemento: "Confirmación de envío",
    nota: "Aviso de que la solicitud fue enviada a un gestor para revisión.",
    imagenes: [
      {
        archivo: "CU05_p051_01.webp",
        cu: "CU 05",
        vista: "Solicitar localización: formulario y confirmación",
      },
    ],
  },
  N28: {
    elemento: "Sesión con rol Gestor",
    nota: "Hay acceso y pantallas administrativas, pero no un estado explícito de sesión con rol Gestor.",
    imagenes: [
      {
        archivo: "CU06_p054_01.webp",
        cu: "CU 06",
        vista: "Inicio de sesión y confirmación de acceso",
      },
      {
        archivo: "CU01_p032_01.webp",
        cu: "CU 01",
        vista: "Estadísticas: cantidades del sistema",
      },
    ],
  },
  N29: {
    elemento: "Panel de administración",
    nota: "No existe un prototipo del panel o menú general que conecte las áreas administrativas.",
    imagenes: [],
  },
  N30: {
    elemento: "Estadísticas",
    nota: "Pantalla de estadísticas y continuación con elementos más visitados.",
    imagenes: [
      {
        archivo: "CU01_p032_01.webp",
        cu: "CU 01",
        vista: "Estadísticas: cantidades del sistema",
      },
      {
        archivo: "CU01_p032_02.webp",
        cu: "CU 01",
        vista: "Estadísticas: localizaciones y eventos más visitados",
      },
    ],
  },
  N31: {
    elemento: "Gestión de contenido",
    nota: "Es una agrupación de navegación sin pantalla propia; sus destinos sí tienen prototipos.",
    imagenes: [],
  },
  N32: {
    elemento: "Moderación",
    nota: "Es una agrupación de navegación sin pantalla propia; control de eventos y usuarios tienen prototipos.",
    imagenes: [],
  },
  N33: {
    elemento: "Mapa y vistas de consulta",
    nota: "Se reutilizan las vistas de consulta de la comunidad; no se muestra su acceso desde el panel del gestor.",
    imagenes: [
      {
        archivo: "CU07_p059_01.webp",
        cu: "CU 07",
        vista: "Mapa principal: marcador seleccionado y ruta",
      },
      {
        archivo: "CU02_p036_01.webp",
        cu: "CU 02",
        vista: "Menú lateral: búsqueda y listados",
      },
      {
        archivo: "CU07_p059_02.webp",
        cu: "CU 07",
        vista: "Detalles e interacción con evento sobre el mapa",
      },
    ],
  },
  N34: {
    elemento: "Usuarios, eventos, localizaciones y solicitudes",
    nota: "Se muestran cantidades de usuarios, eventos y localizaciones; falta la cantidad de solicitudes.",
    imagenes: [
      {
        archivo: "CU01_p032_01.webp",
        cu: "CU 01",
        vista: "Estadísticas: cantidades del sistema",
      },
      {
        archivo: "CU01_p032_02.webp",
        cu: "CU 01",
        vista: "Estadísticas: localizaciones y eventos más visitados",
      },
    ],
  },
  N35: {
    elemento: "Filtros y ordenamiento",
    nota: "No aparecen controles de filtros ni ordenamiento para estadísticas.",
    imagenes: [],
  },
  N36: {
    elemento: "Gestionar localizaciones",
    nota: "Pantalla administrativa de localizaciones.",
    imagenes: [
      {
        archivo: "CU09_p072_01.webp",
        cu: "CU 09",
        vista: "Gestión de localizaciones: listado",
      },
    ],
  },
  N37: {
    elemento: "Gestionar categorías",
    nota: "Pantalla administrativa de categorías.",
    imagenes: [
      {
        archivo: "CU08_p065_01.webp",
        cu: "CU 08",
        vista: "Gestión de categorías: listado",
      },
    ],
  },
  N38: {
    elemento: "Atender solicitudes",
    nota: "Listado de solicitudes y detalle para su revisión.",
    imagenes: [
      {
        archivo: "CU12_p089_01.webp",
        cu: "CU 12",
        vista: "Solicitudes de usuarios: listado",
      },
      {
        archivo: "CU12_p089_02.webp",
        cu: "CU 12",
        vista: "Detalle de solicitud: aprobar o rechazar",
      },
    ],
  },
  N39: {
    elemento: "Listado y búsqueda",
    nota: "Existe listado de localizaciones, pero no buscador visible en esta interfaz administrativa.",
    imagenes: [
      {
        archivo: "CU09_p072_01.webp",
        cu: "CU 09",
        vista: "Gestión de localizaciones: listado",
      },
    ],
  },
  N40: {
    elemento: "Crear o editar localización",
    nota: "Edición y creación de localización. El prototipo de creación disponible está en estado de error.",
    imagenes: [
      {
        archivo: "CU09_p072_02.webp",
        cu: "CU 09",
        vista: "Modificar localización",
      },
      {
        archivo: "CU09_p073_01.webp",
        cu: "CU 09",
        vista: "Modificar localización: datos actualizados",
      },
      {
        archivo: "CU09_p073_02.webp",
        cu: "CU 09",
        vista: "Crear localización: formulario con validaciones",
      },
    ],
  },
  N41: {
    elemento: "Confirmar eliminación",
    nota: "Confirmación de eliminación de localización.",
    imagenes: [
      {
        archivo: "CU09_p074_01.webp",
        cu: "CU 09",
        vista: "Eliminar localización: confirmación",
      },
    ],
  },
  N42: {
    elemento: "Definir tipo: oficial o no oficial",
    nota: "Casilla «Es una localización oficial» integrada en el formulario.",
    imagenes: [
      {
        archivo: "CU09_p072_02.webp",
        cu: "CU 09",
        vista: "Modificar localización",
      },
      {
        archivo: "CU09_p073_01.webp",
        cu: "CU 09",
        vista: "Modificar localización: datos actualizados",
      },
      {
        archivo: "CU09_p073_02.webp",
        cu: "CU 09",
        vista: "Crear localización: formulario con validaciones",
      },
    ],
  },
  N43: {
    elemento: "Listado de categorías",
    nota: "Tabla de categorías con acciones.",
    imagenes: [
      {
        archivo: "CU08_p065_01.webp",
        cu: "CU 08",
        vista: "Gestión de categorías: listado",
      },
    ],
  },
  N44: {
    elemento: "Crear o editar categoría",
    nota: "Formularios para crear y editar categoría con estados de validación.",
    imagenes: [
      {
        archivo: "CU08_p065_02.webp",
        cu: "CU 08",
        vista: "Crear categoría",
      },
      {
        archivo: "CU08_p066_01.webp",
        cu: "CU 08",
        vista: "Crear categoría: campos inválidos",
      },
      {
        archivo: "CU08_p067_01.webp",
        cu: "CU 08",
        vista: "Modificar categoría",
      },
      {
        archivo: "CU08_p067_02.webp",
        cu: "CU 08",
        vista: "Modificar categoría: campos inválidos",
      },
    ],
  },
  N45: {
    elemento: "Confirmar eliminación",
    nota: "Confirmación de eliminación de categoría.",
    imagenes: [
      {
        archivo: "CU08_p066_02.webp",
        cu: "CU 08",
        vista: "Eliminar categoría: confirmación",
      },
    ],
  },
  N46: {
    elemento: "Solicitudes pendientes",
    nota: "Listado de solicitudes que el gestor puede revisar.",
    imagenes: [
      {
        archivo: "CU12_p089_01.webp",
        cu: "CU 12",
        vista: "Solicitudes de usuarios: listado",
      },
    ],
  },
  N47: {
    elemento: "Detalles de la solicitud",
    nota: "Detalle con información de la propuesta, mapa y acciones.",
    imagenes: [
      {
        archivo: "CU12_p089_02.webp",
        cu: "CU 12",
        vista: "Detalle de solicitud: aprobar o rechazar",
      },
    ],
  },
  N48: {
    elemento: "Confirmar aprobación",
    nota: "Existe el botón «Aprobar solicitud»; falta un diálogo o aviso específico de aprobación.",
    imagenes: [
      {
        archivo: "CU12_p089_02.webp",
        cu: "CU 12",
        vista: "Detalle de solicitud: aprobar o rechazar",
      },
    ],
  },
  N49: {
    elemento: "Rechazar: motivo y confirmación",
    nota: "Existe el rechazo y su confirmación; falta un campo para introducir el motivo.",
    imagenes: [
      {
        archivo: "CU12_p089_02.webp",
        cu: "CU 12",
        vista: "Detalle de solicitud: aprobar o rechazar",
      },
      {
        archivo: "CU12_p090_01.webp",
        cu: "CU 12",
        vista: "Solicitud rechazada: confirmación",
      },
    ],
  },
  N50: {
    elemento: "Control de eventos",
    nota: "Pantalla de control de eventos.",
    imagenes: [
      {
        archivo: "CU10_p078_01.webp",
        cu: "CU 10",
        vista: "Control de eventos: listado y acciones",
      },
    ],
  },
  N51: {
    elemento: "Control de usuarios",
    nota: "Pantalla de control de usuarios, dividida en dos capturas.",
    imagenes: [
      {
        archivo: "CU11_p084_01.webp",
        cu: "CU 11",
        vista: "Control de usuarios: nombres y permisos (parte izquierda)",
      },
      {
        archivo: "CU11_p084_02.webp",
        cu: "CU 11",
        vista: "Control de usuarios: permisos y bloqueo (parte derecha)",
      },
    ],
  },
  N52: {
    elemento: "Todos los eventos o eventos denunciados",
    nota: "Se muestran eventos y cantidad de denuncias; falta un filtro explícito de eventos denunciados.",
    imagenes: [
      {
        archivo: "CU10_p078_01.webp",
        cu: "CU 10",
        vista: "Control de eventos: listado y acciones",
      },
    ],
  },
  N53: {
    elemento: "Detalle del evento",
    nota: "El detalle existente corresponde a la comunidad. La tabla administrativa aporta acciones, pero falta un detalle específico para moderación.",
    imagenes: [
      {
        archivo: "CU07_p059_02.webp",
        cu: "CU 07",
        vista: "Detalles e interacción con evento sobre el mapa",
      },
      {
        archivo: "CU10_p078_01.webp",
        cu: "CU 10",
        vista: "Control de eventos: listado y acciones",
      },
    ],
  },
  N54: {
    elemento: "Ver denuncias y motivos",
    nota: "Diálogo con autores y motivos de las denuncias.",
    imagenes: [
      {
        archivo: "CU10_p078_02.webp",
        cu: "CU 10",
        vista: "Consulta de denuncias de un evento",
      },
    ],
  },
  N55: {
    elemento: "Destacar evento",
    nota: "Acción de destacar representada mediante estrellas en la tabla; no es una pantalla separada.",
    imagenes: [
      {
        archivo: "CU10_p078_01.webp",
        cu: "CU 10",
        vista: "Control de eventos: listado y acciones",
      },
    ],
  },
  N56: {
    elemento: "Confirmar eliminación",
    nota: "Confirmación de eliminación de evento desde administración.",
    imagenes: [
      {
        archivo: "CU10_p079_01.webp",
        cu: "CU 10",
        vista: "Eliminar evento desde administración: confirmación",
      },
    ],
  },
  N57: {
    elemento: "Listado de usuarios",
    nota: "Listado con identidad, permisos y acciones de bloqueo.",
    imagenes: [
      {
        archivo: "CU11_p084_01.webp",
        cu: "CU 11",
        vista: "Control de usuarios: nombres y permisos (parte izquierda)",
      },
      {
        archivo: "CU11_p084_02.webp",
        cu: "CU 11",
        vista: "Control de usuarios: permisos y bloqueo (parte derecha)",
      },
    ],
  },
  N58: {
    elemento: "Detalle del usuario",
    nota: "Hay información básica por fila, pero no una vista independiente de detalle del usuario.",
    imagenes: [
      {
        archivo: "CU11_p084_01.webp",
        cu: "CU 11",
        vista: "Control de usuarios: nombres y permisos (parte izquierda)",
      },
      {
        archivo: "CU11_p084_02.webp",
        cu: "CU 11",
        vista: "Control de usuarios: permisos y bloqueo (parte derecha)",
      },
    ],
  },
  N59: {
    elemento: "Confirmar bloqueo o desbloqueo",
    nota: "Existe confirmación de bloqueo y acción de desbloquear; falta la confirmación específica de desbloqueo.",
    imagenes: [
      {
        archivo: "CU11_p085_02.webp",
        cu: "CU 11",
        vista: "Bloquear usuario: confirmación",
      },
      {
        archivo: "CU11_p084_02.webp",
        cu: "CU 11",
        vista: "Control de usuarios: permisos y bloqueo (parte derecha)",
      },
    ],
  },
  N60: {
    elemento: "Confirmar promoción a Gestor",
    nota: "Confirmación para promover al usuario a gestor.",
    imagenes: [
      {
        archivo: "CU11_p085_01.webp",
        cu: "CU 11",
        vista: "Promover a gestor: confirmación",
      },
    ],
  },
};

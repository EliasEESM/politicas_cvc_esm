/* ==========================================================================
   CVC de Occidente 2026 - Datos Oficiales (Políticas, Objetivos y Escenarios)
   ========================================================================== */

window.CVC_DATA = {
  company: "Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V.",
  shortName: "CVC de Occidente",
  year: 2026,
  standard: "NMX-EC-17025-IMNC-2018; ISO/IEC 17025:2017",

  /* 5 Avatares Minimalistas de Ciencia y Metrología */
  avatars: [
    {
      id: "Jugador 1",
      name: "Termometría",
      subtitle: "Sensor RTD / Termopar",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/><path d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><path d="M12 9v6"/><path d="M17 6h2"/><path d="M17 10h2"/></svg>`
    },
    {
      id: "Jugador 2",
      name: "Masa y Balanzas",
      subtitle: "Patrón Metrológico",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`
    },
    {
      id: "Jugador 3",
      name: "Presión y Vacío",
      subtitle: "Manómetro Patrón",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m12 12 3.5-3.5"/><circle cx="12" cy="12" r="1.5"/><path d="M7 15h.01"/><path d="M17 15h.01"/><path d="M12 6v1"/></svg>`
    },
    {
      id: "Jugador 4",
      name: "Óptica",
      subtitle: "Prisma Espectral",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 3 3 20 21 20 12 3"/><path d="M2 12h5.5"/><path d="m15.5 10.5 6.5-2.5"/><path d="m16.5 13 5.5 1"/><path d="m17.5 15.5 4.5 3"/></svg>`
    },
    {
      id: "Jugador 5",
      name: "Validación AVS",
      subtitle: "Adquisición de Datos",
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M6 12h3l2-4 3 8 2-4h2"/></svg>`
    }
  ],

  /* 22 Flashcards clasificadas según el documento oficial 2026:
     - 1 Política de Calidad de la Empresa
     - 7 Objetivos Organizacionales
     - 14 Políticas Complementarias */
  flashcards: [
    // ================= POLÍTICA DE CALIDAD DE LA EMPRESA (1) =================
    {
      id: "pol-calidad-01",
      code: "PC-01",
      category: "calidad",
      categoryLabel: "Política de Calidad",
      title: "Política de calidad de la empresa",
      tags: ["ISO/IEC 17025:2017", "NMX-EC-17025-IMNC-2018", "Mejora Continua"],
      officialText: `“La Dirección General y todo el personal de CVC de Occidente, S.A. de C.V., estamos comprometidos con la buena práctica profesional y con la calidad de los servicios metrológicos que ofrecemos, por medio de la documentación, divulgación e implantación de nuestras políticas, planes de calidad, métodos, procedimientos y requisitos de nuestros clientes. Así mismo estamos comprometidos con la mejora continua de nuestro sistema de gestión de la calidad el cual se basa en los requerimientos de la NMX-EC-17025-IMNC-2018; ISO/IEC 17025:2017”`,
      interpretation: "Cada calibración y calificación en campo o en laboratorio debe ejecutarse siguiendo estrictamente los métodos documentados, cumpliendo los requisitos del cliente y manteniendo la mejora continua bajo la norma ISO/IEC 17025:2017."
    },

    // ================= OBJETIVOS ORGANIZACIONALES (7) =================
    {
      id: "obj-org-01",
      code: "OBJ-01",
      category: "objetivos",
      categoryLabel: "Objetivo Organizacional",
      title: "Satisfacción al Cliente (≥ 96%)",
      tags: ["100 Cuestionarios/Año", "Meta ≥ 96%", "Atención al Cliente"],
      officialText: `Mediante la aplicación de por lo menos 100 cuestionarios de satisfacción al cliente en el periodo de un año, mantener un índice de satisfacción no menor al 96%.`,
      interpretation: "Escuchamos activamente a nuestros clientes aplicando al menos 100 encuestas anuales y asegurando que la puntualidad, claridad técnica y trato en cada servicio mantengan una calificación mínima del 96%."
    },
    {
      id: "obj-org-02",
      code: "OBJ-02",
      category: "objetivos",
      categoryLabel: "Objetivo Organizacional",
      title: "Desempeño en Ensayos de Aptitud",
      tags: ["Ciclo de Acreditación", "Resultados Satisfactorios", "Competencia Técnica"],
      officialText: `Obtener resultados satisfactorios en todos los ensayos de aptitud programados durante el ciclo de acreditación.`,
      interpretation: "Demostramos la competencia técnica del laboratorio cumpliendo satisfactoriamente todas las comparaciones interlaboratorios programadas durante el ciclo de acreditación."
    },
    {
      id: "obj-org-03",
      code: "OBJ-03",
      category: "objetivos",
      categoryLabel: "Objetivo Organizacional",
      title: "Cumplimiento en Auditorías Internas (≥ 95%)",
      tags: ["Auditorías Internas", "Meta ≥ 95%", "Sistema de Gestión"],
      officialText: `Mantener el índice porcentual de cumplimiento en auditorías internas no menor al 95%.`,
      interpretation: "Mantenemos nuestros registros, bitácoras, trazabilidad y procedimientos al día permanentemente para que las revisiones internas reflejen al menos un 95% de apego normativo."
    },
    {
      id: "obj-org-04",
      code: "OBJ-04",
      category: "objetivos",
      categoryLabel: "Objetivo Organizacional",
      title: "Confiabilidad Estadística (En ≤ 1 y Prueba F)",
      tags: ["Error Normalizado ≤ 1", "Pruebas r y R", "5 Magnitudes"],
      officialText: `Obtener resultados de Error Normalizado ≤1 en las Repeticiones y en las pruebas de r y R; cumplir satisfactoriamente con la prueba F, en las magnitudes de masa, presión, temperatura, humedad y óptica.`,
      interpretation: "Validamos estadísticamente la repetibilidad y reproducibilidad de los metrólogos en las 5 magnitudes acreditadas, garantizando que el Error Normalizado sea menor o igual a 1 y se apruebe el estadístico F."
    },
    {
      id: "obj-org-05",
      code: "OBJ-05",
      category: "objetivos",
      categoryLabel: "Objetivo Organizacional",
      title: "Facturación Mensual en Óptica ($60,000.00)",
      tags: ["Acreditación en Óptica", "$60,000 MXN/mes", "Comercialización 2026"],
      officialText: `A partir de la obtención de la acreditación en óptica, implementar estrategias de comercialización que permitan alcanzar un nivel promedio de facturación de servicios de calibración en óptica de $60,000.00 mensuales en 2026.`,
      interpretation: "Impulsamos entre todos la difusión técnica y comercial de nuestro nuevo alcance acreditado en Óptica para consolidar una facturación mensual promedio de $60,000.00 durante 2026."
    },
    {
      id: "obj-org-06",
      code: "OBJ-06",
      category: "objetivos",
      categoryLabel: "Objetivo Organizacional",
      title: "Crecimiento Anual en Ventas (≥ 15%)",
      tags: ["Crecimiento ≥ 15%", "Ventas 2026", "Expansión"],
      officialText: `Mantener un ritmo de crecimiento en ventas de por lo menos 15 % anual para el 2026.`,
      interpretation: "La calidad técnica, los tiempos de respuesta y la retención de clientes deben traducirse en un incremento sostenido de al menos el 15% anual en ventas durante el ejercicio 2026."
    },
    {
      id: "obj-org-07",
      code: "OBJ-07",
      category: "objetivos",
      categoryLabel: "Objetivo Organizacional",
      title: "Ausencia de Conflicto de Interés y Cero Quejas de Imparcialidad",
      tags: ["0 Quejas de Imparcialidad", "Cuestionarios al Personal", "Neutralidad"],
      officialText: `Obtener resultados satisfactorios (ausencia de conflicto de interés) en el resumen anual de las actividades orientadas a evitar el Conflicto de Interés incluyendo en éste, pero sin limitarse a, los cuestionarios al personal para la detección de Conflicto de Intereses, y a la obtención de cero quejas generadas durante el año relacionadas a alguna falta en la imparcialidad.`,
      interpretation: "Declaramos de forma transparente cualquier vínculo potencial y rechazamos dádivas o presiones externas, manteniendo el indicador anual en cero quejas por faltas a la imparcialidad."
    },

    // ================= POLÍTICAS COMPLEMENTARIAS (14) =================
    {
      id: "pol-comp-01",
      code: "PCOMP-01",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política de propiedad intelectual",
      tags: ["Plantillas y Métodos", "Tecnología Propia", "Prohibida su Transferencia"],
      officialText: `Toda la tecnología, (métodos, procedimientos, técnicas), así como los descubrimientos y resultados de investigación se consideran propiedad intelectual; generados en la empresa o trabajando para ella, se consideran propiedad intelectual del Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V.
No podrá ser transferida o puesta a disposición de otras personas, grupos o terceros por ningún medio.`,
      interpretation: "Las hojas de cálculo, plantillas, procedimientos, métodos, macros y formatos desarrollados en CVC pertenecen exclusivamente a la empresa y nunca deben compartirse con externos."
    },
    {
      id: "pol-comp-02",
      code: "PCOMP-02",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política de confidencialidad",
      tags: ["Datos del Cliente", "Resguardo de Información", "Privacidad en Planta"],
      officialText: `Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., consciente de la importancia de la información generada se asegura, que el manejo de la información derivada de sus actividades será de manera confidencial, estableciendo en su sistema de gestión la información que será del público en general y la que se manejará de manera confidencial.`,
      interpretation: "Protegemos rigurosamente los resultados, planos, fotografías en planta y procesos de nuestros clientes. Está prohibido publicar fotos en redes sociales, subir información a sitios web o divulgar datos obtenidos durante las actividades de campo o laboratorio."
    },
    {
      id: "pol-comp-03",
      code: "PCOMP-03",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política de compras de servicios y suministros",
      tags: ["Proveedores Evaluados", "Trazabilidad CENAM", "Insumos Críticos"],
      officialText: `En Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., la selección de servicios y suministros son realizadas de acuerdo con procedimientos escritos asegurando que los proveedores de los servicios cubren las necesidades específicas para garantizar la trazabilidad a patrones nacionales en los servicios de calibración, y que los suministros utilizados al llevar a cabo las operaciones no afecten adversamente la calidad de los servicios de calibración.`,
      interpretation: "Nunca contratamos proveedores externos ni compramos insumos críticos bajo ninguna razón si el proveedor no ha sido evaluado internamente y no cuenta con acreditación vigente y trazabilidad demostrada a patrones nacionales (CENAM)."
    },
    {
      id: "pol-comp-04",
      code: "PCOMP-04",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política para la resolución de quejas",
      tags: ["Atención Oportuna", "Documentación", "Mejora del Sistema"],
      officialText: `Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., atiende y documenta en forma oportuna cualquier queja de los clientes o de otras partes relacionada con el personal y/o con los servicios ofrecidos que sea recibida por cualquier medio, según los procedimientos establecidos, asegurando que los clientes siempre sean tomados en cuenta y que sus reclamaciones sirvan para mejorar el desempeño de nuestro sistema de gestión.`,
      interpretation: "Toda inconformidad de un cliente recibida por teléfono, correo o en persona se registra y atiende formalmente mediante procedimiento; no se oculta ni se ignora, sino que se usa para fortalecer el sistema de calidad."
    },
    {
      id: "pol-comp-05",
      code: "PCOMP-05",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política de trabajo no conforme",
      tags: ["Desvíos Técnicos", "Aseguramiento de Calidad", "Notificación al Cliente"],
      officialText: `En Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., cuando algún aspecto del trabajo de calibración realizado o de los resultados obtenidos, no este conforme con los procedimientos del sistema de gestión o con los requisitos acordados con el cliente, la Coordinación de Aseguramiento de Calidad tendrá la autoridad y responsabilidad para conducir las investigaciones pertinentes e implementar las acciones que resulten, y en caso necesario, notifica al cliente.`,
      interpretation: "Si durante un servicio cometemos un error por descuido o faltas al método o procedimiento establecido, debemos reportarlo de inmediato a Aseguramiento de Calidad para investigar el impacto y notificar al cliente con transparencia."
    },
    {
      id: "pol-comp-06",
      code: "PCOMP-06",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política de ensayos de aptitud",
      tags: ["Política ema", "Reunión Técnica Previa", "Protocolos de Ensayo"],
      officialText: `Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., se obliga a cumplir con la política de ensayos de aptitud emitida por ema.
Los protocolos de ensayo de aptitud serán revisados en una reunión técnica con todos los involucrados en el ensayo para entender a cabalidad el ensayo de aptitud, su forma de ejecución y reporte.`,
      interpretation: "Antes de tocar un ítem de ensayo de aptitud, es obligatorio tener una reunión técnica con todos los participantes para analizar el protocolo, asegurar el método de medición y evitar errores de ejecución o reporte."
    },
    {
      id: "pol-comp-07",
      code: "PCOMP-07",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política para acciones correctivas",
      tags: ["Análisis de Causa Raíz", "Eliminar Recurrencia", "Consistencia"],
      officialText: `En Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., cuando se detecte desvíos en las políticas y procedimientos del sistema de gestión o de las operaciones técnicas o si del trabajo no conforme se deriva, se iniciarán, de acuerdo con procedimientos escritos, acciones correctivas encaminadas a corregir-su recurrencia y a mantener la consistencia del sistema de gestión asegurando la confiabilidad de los servicios ofrecidos.`,
      interpretation: "Cuando un trabajo no conforme o hallazgo revela un desvío sistemático, no basta con corregir el caso puntual, sino que implementamos acciones correctivas documentadas de raíz para impedir que vuelva a suceder."
    },
    {
      id: "pol-comp-08",
      code: "PCOMP-08",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política de formación personal",
      tags: ["Detección de Necesidades", "Capacitación Continua", "Evaluación Aprobatoria"],
      officialText: `En Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., todo el personal recibirá capacitación en los aspectos que requiera según la detección de sus necesidades de capacitación.
      Esta detección de necesidades de capacitación se realiza con base pero sin limitarse a; resultados no satisfactorios en auditorías internas y externas o quejas, frecuencia de ocurrencia de trabajo no conforme, detección en el análisis de riesgos y oportunidades, cambios en políticas y procedimientos del sistema de calidad, baja de productividad, alta de personal, cambios en las funciones de puesto, así como los futuros planes de expansión de la empresa
      Al personal se le capacitará para trabajar formalmente en el área que se le asigne, además deberá concluir y aprobar satisfactoriamente su esquema de capacitación.`,
      interpretation: "Identificamos dudas técnicas, nuevos ingresos o planes de expansión para programar capacitaciones formales que cada colaborador debe concluir y aprobar para garantizar el buen desempeño de su trabajo."
    },
    {
      id: "pol-comp-09",
      code: "PCOMP-09",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política de Revisión de los pedidos, ofertas y contratos",
      tags: ["Método Apropiado", "Capacidad Técnica", "Revisión Previa"],
      officialText: `Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., establece procedimientos que den como resultado un contrato para la realización de un servicio de calibración estableciendo los métodos a utilizar, que el laboratorio tenga la capacidad y los recursos para cumplir con los requisitos y que se selecciona el método apropiado para realizar el servicio ofrecido.`,
      interpretation: "Antes de aceptar un pedido o emitir una cotización, verificamos que contamos con los equipos y personal necesarios y que el método solicitado es técnicamente válido."
    },
    {
      id: "pol-comp-10",
      code: "PCOMP-10",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política de buenas prácticas de negocios y de operación",
      tags: ["Ética Profesional", "Integridad Operacional", "Respeto y Amabilidad"],
      officialText: `En Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., los valores éticos y morales forman parte esencial de su filosofía y misión empresarial.
      Todo el personal de la empresa deberá apegarse, en cualquier situación de negocios y operacionales, a las prácticas éticas y morales, aún en contra de intereses comerciales o personales. De igual manera, el personal no se involucrará en actividades que disminuyan la confianza en su competencia, imparcialidad, juicio o integridad operacional.
      En el trato con clientes, representantes de agencias gubernamentales, con colegas y proveedores, siempre se demostrarán nuestros valores, así como respeto amabilidad.`,
      interpretation: "La ética e integridad técnica están siempre por encima de cualquier interés comercial o urgencia operativa. Nunca alteramos ni omitimos datos críticos de un reporte, manteniendo un trato respetuoso y profesional."
    },
    {
      id: "pol-comp-11",
      code: "PCOMP-11",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política de imparcialidad",
      tags: ["Objetividad Total", "Cero Favoritismos", "Neutralidad"],
      officialText: `La Dirección General y todo el personal de Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., se compromete por medio de esta política de imparcialidad a que las actividades del laboratorio se lleven a cabo con total objetividad, libres de conflicto de interés, sin favoritismos personales, mostrando siempre neutralidad ante cualquier situación.`,
      interpretation: "Nuestros dictámenes y mediciones reflejan exclusivamente la realidad física medida por los patrones, sin ceder a presiones de clientes ni favoritismos personales."
    },
    {
      id: "pol-comp-12",
      code: "PCOMP-12",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política de gestión de riesgos",
      tags: ["Prevención en Campo", "Riesgos y Oportunidades", "Mitigación"],
      officialText: `Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V. considera los riesgos y las oportunidades asociados con sus actividades del laboratorio para asegurar que el sistema de gestión de calidad logre sus resultados previstos, mejore las oportunidades de lograr sus objetivos y prevenga o reduzca los impactos indeseados y los incumplimientos potenciales en las actividades del laboratorio.`,
      interpretation: "Nos anticipamos a posibles fallas operativas estableciendo controles preventivos antes de iniciar el servicio."
    },
    {
      id: "pol-comp-13",
      code: "PCOMP-13",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Código de ética",
      tags: ["Conducta Profesional", "Declaración Firmada", "Anexo 2"],
      officialText: `Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., consciente de la importancia de actuar mediante un código de ética, se compromete a llevarla a cabo abarcando todas las áreas de conducta profesional y se aplica a todo el personal de CVC incluyendo a la dirección general y al personal contratado por agencia. Todo el personal debe firmar una declaración indicando el pleno conocimiento de estas políticas y el apego a las mismas.`,
      interpretation: "El código de ética aplica sin excepción a todo el personal interno, directivo y externo por agencia; todos firmamos formalmente nuestro compromiso de conocer y respetar las normas éticas de CVC de Occidente."
    },
    {
      id: "pol-comp-14",
      code: "PCOMP-14",
      category: "complementarias",
      categoryLabel: "Política Complementaria",
      title: "Política de cumplimiento de la Ley de Infraestructura de la Calidad y normas complementarias",
      tags: ["LIC", "Organismo Evaluación Conformidad", "Normatividad Mexicana"],
      officialText: `Centro de Validaciones y Calibraciones de Occidente, S.A. de C.V., se rige bajo la Ley de Infraestructura de la Calidad como Organismo de la Evaluación de la Conformidad siendo laboratorio de calibración, y de ello deriva la obligatoriedad de dar cumplimiento a toda la normatividad, reglamentación y demás documentos aplicables que la autoridad normalizadora y entidad de acreditación declaren.`,
      interpretation: "Como laboratorio acreditado y Organismo de Evaluación de la Conformidad en México, es obligatorio cumplir la Ley de Infraestructura de la Calidad (LIC), las NOM/NMX y los criterios de la entidad de acreditación por encima de criterios informales."
    }
  ],

  /* Las 16 Situaciones / Escenarios Técnicos Exactos */
  scenarios: [
    {
      id: 1,
      title: "Situación 1: La presión del cliente en campo",
      context: "Estás realizando la calificación de desempeño de una autoclave utilizando el Validator AVS y termopares Tipo T. Al finalizar el ciclo, estás contento porque ningún sensor te falló y decides revisar en ese momento el reporte y notas que una de las ubicaciones de los termopares registró una caída constante de temperatura fuera del límite de aceptación. El cliente, muy presionado por liberar el equipo para producción, te pide discretamente que 'excluyas' ese sensor del reporte final para no invalidar todo el estudio.",
      question: "¿Qué política respalda tu actuación ética y objetiva frente a esta solicitud?",
      options: [
        { letter: "A", text: "Política de formación personal" },
        { letter: "B", text: "Política de imparcialidad y buenas prácticas de negocios" },
        { letter: "C", text: "Política de confidencialidad" },
        { letter: "D", text: "Política de ensayos de aptitud" },
        { letter: "E", text: "Objetivos organizacionales" }
      ],
      correctLetter: "B",
      justification: "La Política de buenas prácticas exige apegarse a la ética aún en contra de intereses comerciales. Además, la Política de imparcialidad obliga a actuar con total objetividad y sin favoritismos personales ante las presiones del cliente."
    },
    {
      id: 2,
      title: "Situación 2: Compartir archivos",
      context: "Un Ingeniero de Validación de nuevo ingreso te comenta que uno de sus amigos de la universidad, está trabajando en otra empresa del mismo giro que CVC de Occidente, y le pide de favor que le envie una plantilla de Excel con el cálculo de la TCM y la generación de los anexos gráficos que utlizan ustedes en CVC de Occidente. Tu nuevo compañero piensa que no habrá problema en pasárselos ya que además 'le borrará el logo de CVC'.",
      question: "¿Qué política le compartirías para actuar frente a esta situación?",
      options: [
        { letter: "A", text: "Política de propiedad intelectual" },
        { letter: "B", text: "Política de confidencialidad" },
        { letter: "C", text: "Política de trabajo no conforme" },
        { letter: "D", text: "Política de imparcialidad" },
        { letter: "E", text: "Código de ética" }
      ],
      correctLetter: "A",
      justification: "La Política de propiedad intelectual establece explícitamente que los métodos, procedimientos y técnicas generados en la empresa son propiedad de CVC de Occidente y no pueden ser transferidos a terceros por ningún medio."
    },
    {
      id: 3,
      title: "Situación 3: Calibración de nuestros patrones",
      context: "Es momento de enviar el patrón de referencia de temperatura (RTD) del departamento de Validación a su calibración anual. CVC no tiene capacidad en este momento para calibrar inmediatamente por exceso de trabajo y al departamento le urge este requerimiento; Dada esta situación, tu jefe encuentra un laboratorio externo que ofrece el servicio a mitad de precio y además con entrega en 1 día. Sin embargo, revisas la cotización, y te percatas que el proveedor no está acreditado ni garantiza trazabilidad a patrones nacionales (CENAM).",
      question: "¿Qué política le compartirías a tu jefe para actuar frente a esta situación?",
      options: [
        { letter: "A", text: "Política de ensayos de aptitud" },
        { letter: "B", text: "Política de gestión de riesgos" },
        { letter: "C", text: "Política de compras de servicios y suministros" },
        { letter: "D", text: "Objetivos organizacionales" },
        { letter: "E", text: "Política para acciones correctivas" }
      ],
      correctLetter: "C",
      justification: "La Política de compras de servicios y suministros exige asegurar que los proveedores de servicios cubren las necesidades específicas para garantizar la trazabilidad a patrones nacionales en los servicios de calibración."
    },
    {
      id: 4,
      title: "Situación 4: Reclamo por método incorrecto",
      context: "Tras entregar el reporte de desempeño de una cámara fría, el cliente llama sumamente molesto. Argumenta que la distribución de los termohigrómetros no se realizó conforme a lo que ellos habían solicitado inicialmente en la cotización, por lo que exige que se repita el trabajo sin costo o que interpondrá una reclamación formal.",
      question: "¿Qué política te ayuda a actuar frente a esta situación?",
      options: [
        { letter: "A", text: "Política de resolución de quejas y revisión de contratos" },
        { letter: "B", text: "Política de confidencialidad" },
        { letter: "C", text: "Política de formación personal" },
        { letter: "D", text: "Objetivos organizacionales (Facturación mensual)" },
        { letter: "E", text: "Política de cumplimiento de la Ley de Infraestructura de la Calidad" }
      ],
      correctLetter: "A",
      justification: "La Política para la resolución de quejas obliga a atender y documentar el caso para mejorar el sistema. Además, esto resalta la Política de revisión de contratos, la cual debe asegurar previamente que se selecciona el método apropiado y acordado con el cliente."
    },
    {
      id: 5,
      title: "Situación 5: El cronograma apretado",
      context: "Durante la calificación de una incubadora, notas que configuraste incorrectamente el intervalo de muestreo en el Keysight, lo configuraste para que registrara cada 5 minutos y el cliente lo solicitó a intervalos de 1 minuto, lo que incumple lo requerido. El cliente no se ha dado cuenta y el equipo ya está en operación por la empresa cliente; si lo reportas, atrasarás la entrega del servicio y sus operaciones.",
      question: "¿Qué política te ayuda a actuar frente a esta situación?",
      options: [
        { letter: "A", text: "Política de trabajo no conforme" },
        { letter: "B", text: "Política de gestión de riesgos" },
        { letter: "C", text: "Política de confidencialidad" },
        { letter: "D", text: "Política de ensayos de aptitud" },
        { letter: "E", text: "Política para acciones correctivas" }
      ],
      correctLetter: "A",
      justification: "Al ocurrir un desvío en el procedimiento del sistema de gestión durante el trabajo en campo, la Política de trabajo no conforme dicta que la Coordinación de Aseguramiento de Calidad debe conducir investigaciones e implementar acciones, notificando al cliente si es necesario."
    },
    {
      id: 6,
      title: "Situación 6: El hallazgo en la auditoría",
      context: "A raíz del incidente de configuración del intervalo de muestreo del Keysight, el departamento de calidad dictamina que esto es una desviación al sistema de gestión y existe el riesgo de que vuelva a ocurrir en futuros servicios.",
      question: "¿Qué directriz se debe aplicar inmediatamente para evitar que se repita?",
      options: [
        { letter: "A", text: "Política de formación personal" },
        { letter: "B", text: "Política para acciones correctivas" },
        { letter: "C", text: "Objetivos organizacionales" },
        { letter: "D", text: "Código de ética" },
        { letter: "E", text: "Política de buenas prácticas de negocios y de operación" }
      ],
      correctLetter: "B",
      justification: "La Política para acciones correctivas establece que, si del trabajo no conforme se derivan desvíos, se deben iniciar acciones encaminadas a corregir su recurrencia y mantener la consistencia del sistema."
    },
    {
      id: 7,
      title: "Situación 7: La fotografía en planta",
      context: "Estás colocando termohigrómetros para un mapeo ambiental en las bodegas de un cliente farmacéutico. Tomas fotografías de la ubicación de los equipos para incluirlas como evidencia en los anexos del reporte. Un compañero te sugiere subir una de esas fotos a LinkedIn para mostrar el 'trabajo de campo', pero en el fondo de la imagen se aprecian diagramas, logos y procedimientos de la operación del cliente.",
      question: "¿Qué política impide realizar esta publicación?",
      options: [
        { letter: "A", text: "Política de propiedad intelectual" },
        { letter: "B", text: "Política de imparcialidad" },
        { letter: "C", text: "Política de buenas prácticas de negocios y de operación" },
        { letter: "D", text: "Política de confidencialidad" },
        { letter: "E", text: "Política de cumplimiento de la Ley de Infraestructura de la Calidad" }
      ],
      correctLetter: "D",
      justification: "CVC de Occidente se asegura de que el manejo de la información derivada de sus actividades sea confidencial, por lo que divulgar detalles de las instalaciones del cliente viola la Política de confidencialidad."
    },
    {
      id: 8,
      title: "Situación 8: Dudas con la GUM",
      context: "Tras la revisión anual, se detecta que varios metrólogos tienen dificultades y dudas al momento de estimar la incertidumbre bajo los lineamientos normativos.",
      question: "Para mitigar este riesgo, ¿qué política respalda la programación urgente de un curso técnico?",
      options: [
        { letter: "A", text: "Política de gestión de riesgos" },
        { letter: "B", text: "Política de formación personal" },
        { letter: "C", text: "Política de calidad de la empresa" },
        { letter: "D", text: "Objetivos organizacionales" },
        { letter: "E", text: "Política de revisión de pedidos, ofertas y contratos" }
      ],
      correctLetter: "B",
      justification: "La Política de formación personal establece que la detección de necesidades de capacitación se realiza con base en riesgos y oportunidades, o cambios en funciones de puesto, para asegurar que el personal trabaje formalmente en su área."
    },
    {
      id: 9,
      title: "Situación 9: El atajo en la cotización",
      context: "Un cliente del sector farmacéutico solicita una cotización para la calificación de desempeño de una cámara fría de gran volumen. Para reducir costos, el cliente pide explícitamente que el servicio se realice utilizando únicamente 5 sensores en total, lo cual contradice los procedimientos técnicos establecidos y las guías normativas para garantizar un mapeo confiable en ese volumen.",
      question: "¿Qué política te obliga a asegurar la selección de un método técnico apropiado antes de formalizar el servicio?",
      options: [
        { letter: "A", text: "Política de gestión de riesgos" },
        { letter: "B", text: "Política de compras de servicios y suministros" },
        { letter: "C", text: "Política de Revisión de los pedidos, ofertas y contratos" },
        { letter: "D", text: "Política de trabajo no conforme" },
        { letter: "E", text: "Política para la resolución de quejas" }
      ],
      correctLetter: "C",
      justification: "Esta política exige establecer procedimientos previos al contrato para asegurar que se selecciona el método apropiado para realizar el servicio ofrecido y que el laboratorio tiene la capacidad de cumplir con los requisitos reales."
    },
    {
      id: 10,
      title: "Situación 10: Prevención en campo",
      context: "Estás planificando un mapeo ambiental de 7 días en un almacén de gran volumen. Antes de iniciar, tienes contacto con el cliente y te pide que le expliques qué sucedería si los termohigrómetros al ser de pilas se quedan sin energía a la mitad del estudio.",
      question: "¿Qué política te ayuda a tener establecidas estas acciones preventivas?",
      options: [
        { letter: "A", text: "Política de gestión de riesgos" },
        { letter: "B", text: "Política para la resolución de quejas" },
        { letter: "C", text: "Política de trabajo no conforme" },
        { letter: "D", text: "Política de calidad de la empresa" },
        { letter: "E", text: "Código de ética" }
      ],
      correctLetter: "A",
      justification: "CVC de Occidente considera los riesgos y oportunidades asociados con sus actividades del laboratorio para prevenir o reducir los impactos indeseados, como la pérdida de datos en campo, mediante la Política de gestión de riesgos."
    },
    {
      id: 11,
      title: "Situación 11: Promoción del nuevo alcance",
      context: "El laboratorio de CVC acaba de obtener una nueva acreditación en el área de Óptica para realizar calibraciones. El equipo directivo indica que todos deben apoyar en mencionar este nuevo servicio a los clientes actuales durante las visitas de campo para llegar a una meta específica en 2026.",
      question: "Esto forma parte de…",
      options: [
        { letter: "A", text: "La política de buenas prácticas de negocios y de operación" },
        { letter: "B", text: "Los objetivos organizacionales" },
        { letter: "C", text: "La política de revisión de los pedidos, ofertas y contratos" },
        { letter: "D", text: "La política de calidad de la empresa" },
        { letter: "E", text: "La política de formación personal" }
      ],
      correctLetter: "B",
      justification: "Uno de los Objetivos organizacionales exige implementar estrategias de comercialización a partir de la acreditación en óptica para alcanzar un nivel promedio de facturación de $60,000.00 mensuales en 2026."
    },
    {
      id: 12,
      title: "Situación 12: El marco legal metrológico",
      context: "Un cliente del sector regulado cuestiona por qué, además de operar bajo la ISO/IEC 17025, el reporte de calibración de CVC se ajusta estrictamente a los requerimientos normativos dictados por autoridades federales mexicanas y la entidad de acreditación en lugar de seguir solo el manual del fabricante del equipo.",
      question: "¿Qué política respalda este cumplimiento normativo?",
      options: [
        { letter: "A", text: "Política de calidad de la empresa" },
        { letter: "B", text: "Política de ensayos de aptitud" },
        { letter: "C", text: "Política de cumplimiento de la Ley de Infraestructura de la Calidad" },
        { letter: "D", text: "Objetivos organizacionales" },
        { letter: "E", text: "Política para la resolución de quejas" }
      ],
      correctLetter: "C",
      justification: "Como Organismo de la Evaluación de la Conformidad, existe la obligatoriedad de dar cumplimiento a toda la normatividad y reglamentación aplicable que la autoridad normalizadora declare, rigiéndose bajo la Ley de Infraestructura de la Calidad."
    },
    {
      id: 13,
      title: "Situación 13: La comparación interlaboratorios",
      context: "CVC de Occidente participará en una prueba enviada por la Entidad Mexicana de Acreditación (ema) para comparar sus mediciones de temperatura contra otros laboratorios.",
      question: "Para que este ejercicio sea considerado un éxito internamente, ¿qué meta estadística se debe cumplir en los resultados?",
      options: [
        { letter: "A", text: "Índice de satisfacción no menor al 96%" },
        { letter: "B", text: "Obtener resultados de Error Normalizado ≤1" },
        { letter: "C", text: "Índice porcentual de cumplimiento del 95%" },
        { letter: "D", text: "Ausencia de conflicto de interés" },
        { letter: "E", text: "Crecimiento de ventas del 15%" }
      ],
      correctLetter: "B",
      justification: "Los Objetivos organizacionales establecen que se deben obtener resultados de Error Normalizado ≤1 en las Repeticiones en magnitudes como temperatura y humedad."
    },
    {
      id: 14,
      title: "Situación 14: La revisión de la prueba",
      context: "Llega el protocolo del ensayo de aptitud mencionado en la situación anterior de la comparación interlaboratorios. Se asigna al personal para llevar a cabo el ensayo, esta misma persona comienza a realizarlo de inmediato y toma lecturas ese mismo día para terminar rápido y volver a sus actividades de campo.",
      question: "¿Qué política debió de haber considerado antes de comenzar a ejecutar el protocolo?",
      options: [
        { letter: "A", text: "Política de revisión de pedidos, ofertas y contratos" },
        { letter: "B", text: "Política de ensayos de aptitud" },
        { letter: "C", text: "Política de calidad de la empresa" },
        { letter: "D", text: "Código de ética" },
        { letter: "E", text: "Política de gestión de riesgos" }
      ],
      correctLetter: "B",
      justification: "La Política de ensayos de aptitud exige estrictamente que los protocolos de ensayo sean revisados en una reunión técnica con todos los involucrados antes de la ejecución para entender a cabalidad su forma de reporte y ejecución."
    },
    {
      id: 15,
      title: "Situación 15: El regalo del cliente",
      context: "Terminas un largo servicio de calificación en una planta procesadora de alimentos. El gerente de la planta, agradecido por tu velocidad, te ofrece de manera discreta un obsequio costoso. Tú lo rechazas amablemente.",
      question: "¿A qué objetivo de la empresa impacta directamente tu acción?",
      options: [
        { letter: "A", text: "Mantener índice de satisfacción del 96%" },
        { letter: "B", text: "Crecimiento en ventas del 15% anual" },
        { letter: "C", text: "Obtener resultados satisfactorios (ausencia de conflicto de interés) y cero quejas de imparcialidad" },
        { letter: "D", text: "Mantener cumplimiento en auditorías > 95%" },
        { letter: "E", text: "Alcanzar $60,000.00 en óptica" }
      ],
      correctLetter: "C",
      justification: "El rechazar regalos asegura la neutralidad, apoyando directamente el objetivo de evitar el Conflicto de Intereses y la obtención de cero quejas generadas por faltas a la imparcialidad."
    },
    {
      id: 16,
      title: "Situación 16: El pilar del servicio",
      context: "Durante una reunión de apertura con un cliente que exige altísimos estándares regulatorios, te preguntan cuál es el compromiso fundamental que rige absolutamente todos los servicios de metrología que ofrece CVC de Occidente.",
      question: "Y tú le respondes…",
      options: [
        { letter: "A", text: "Política de calidad de la empresa" },
        { letter: "B", text: "Objetivos organizacionales" },
        { letter: "C", text: "Código de ética" },
        { letter: "D", text: "Política de buenas prácticas de negocios y de operación" },
        { letter: "E", text: "Política de cumplimiento de la Ley de Infraestructura de la Calidad" }
      ],
      correctLetter: "A",
      justification: "La Política de calidad dicta que todo el personal está comprometido con la buena práctica profesional y la calidad de los servicios mediante la mejora continua del sistema basado en la ISO/IEC 17025:2017."
    }
  ]
};

**DOCUMENTO #2**

**PLATAFORMA DE VIDEOS**

**Tópicos especiales en telemática**

**Por:**

**Geralin Stefania Fernandez Bedoya - 201510033010**

**Christian Londoño Cañas - 201510112010**

**Valentín Quintero Castrillón - 201510088010**

**Juan Carlos Estrada Álvarez - 201510055010**

**Profesor encargado:**

**Edwin Nelson Montoya Munera**

**Universidad EAFIT**

**Medellín**

**2017**

**Estado del arte, análisis y diseño para escalabilidad Atributos de calidad seleccionados**

- **●●**** QA1:        **Disponibilidad**        **
  - **○○**** Encargados:       ** Valentin Quintero y Christian Londoño.

- **●●**** QA2:       ** Seguridad
  - **○○**** Encargado:       ** Juan Carlos Estrada

- **●●**** QA3:        **Rendimiento**        **
  - **○○**** Encargado:       ** Geralin Stefania Fernandez

**1. Síntesis de la fundamentación de los QA Seleccionados (2 a 3 páginas por QA, de forma muy sintética y clara, respondiendo a:**

**Marco de referencia**

**a. Disponibilidad**

Es la capacidad que tiene un sistema para mantenerse activo sin perder el servicio, normalmente el máximo tiempo disponible que puede estar un sistema caído son 300 segundos o 5 minutos por año, esta medida puede ser acortada dependiendo del tipo de servicio que se requiera, hasta obtener tiempos  de 8 segundos de caída por año.

Este tiempo que se encuentra inactivo un servidor no suele suceder en un solo instante tiempo, sino que se dan micro caídas a lo largo del año

Los patrones que se pueden implementar en el QA de disponibilidad son:

- **●●**** Failover:** Es el tiempo que un sistema se cae o deja de funcionar en un año, obtener un mínimo tiempo de este para mantener una alta disponibilidad, los failovers más comunes mantienen un porcentaje de 99,99%
- **●●**** Failback:** Es el tiempo que tarda un sistema en volver a un estado estable, después de haber tenido una caída, esto en muchos casos se hace recurriendo a una copia de los servicios originales mientras se encuentra la causa del problema, si el problema es una falta de energía se recurre a generadores de energía para soportar más tiempo
- **●●**** Replicación:** Se encarga de guardar los mismos datos en diferentes bases de datos con el fin de evitar pérdidas, esto trae consigo grandes cargas ya que divide la cantidad total que un sistema puede almacenar, sin embargo para sistemas que tienen información que requiere ser conservada en el tiempo es considerado un buen patrón
- **●●**** Redundancia:** Se encarga de buscar datos repetidos para no tener que hacer búsquedas largas sino poder llegar a ellos en menos tiempo.
  - **○○**** Virtualización:** Es crear varias máquinas virtuales en un mismo servidor con el fin de evitar una alta expansión horizontal y tener que hacer grandes inversiones en infraestructura
  - **○○**** Mantenimiento:** Se divide en categorías la cuales son, Mantenimiento continuo es realizar revisiones del estado del sistema continuamente y realizando respectivos ajustes, Mantenimiento preventivo, este se realiza cuando se anticipa un posible mal funcionamiento del sistema

**- Especificación mediante escenarios**

**Fuente:** Interfaz de comunicación con el sistema

**Estímulo:** Ejecutar comando para apagar el sistema

**Artefacto:** Sistema operativo

**Ambiente:** En normal

**Respuesta:** Detectar la indisponibilidad del sistema y hacer un failover a otro sistema que este disponible para atender peticiones.

**Medida de respuesta:** El tiempo para detectar y corregir este fallo será de 2 segundos.

**Fuente:** Agente exterior al sistema

**Estímulo:** Sobrepasar el máximo de solicitudes por segundo para un servicio del sistema

**Artefacto:** App

**Ambiente:** En normal

**Respuesta:** Detectar la congestión del servicio y balancear la carga de peticiones entre los sistemas disponibles para atender.

**Medida de respuesta:** El tiempo para detectar y corregir este fallo será de 2 segundos.

**Fuente:** Aplicación al interior del sistema

**Estímulo:** Excepción debido a un comportamiento inesperado

**Artefacto:** Sistema operativo

**Ambiente:** En normal

**Respuesta:** Detectar la indisponibilidad causada y proceder a asignar otro sistema que reemplace la carga de los módulos faltantes.

**Medida de respuesta:** El tiempo para detectar y corregir este fallo será de 1 segundos.

**- Qué        herramientas se pueden utilizar para lograrlo**

Herramientas de análisis de comportamiento en los procesos del sistema

**b. Seguridad**

La seguridad es una medida de la capacidad del sistema para proteger datos y la información del acceso no autorizado, y para poder también dar acceso a las personas a los sistemas que están autorizados.

**Tácticas**

- **--**** Seguridad física**
- **--**** Detección de ataques ****:** Detección de intrusos, Detección de denegación, Verificar la integridad de los mensajes, Detectar retardo de mensajes.
- **--**** Resistir ataques:** Identificación, Autenticar, Autorizar, Limitar el acceso, Limitar la exposición, Cifrar los datos, Separar entidades, Cambiar la configuración predeterminada.
- **--**** Reaccionar a los ataques:**Revocar acceso, Bloquear nodos, Informar a los actores
- **--**** Recuperar de los ataques:**Restaurar versión estable, Mantener la auditoría

**Herramientas**

- **--** Nmap
- **--** Nessus
- **--** Nikto
- **--** Metasploit

**Fuente:** Agente exterior al sistema

**Estímulo:** Intento de acceso al servidor

**Artefacto:** Servidor

**Ambiente:** En normal

**Respuesta:** Detectar ingreso de ip y bloquear la IP entrante.

**Medida de respuesta:** El tiempo para detectar y corregir este fallo será de 1 segundos.

**Fuente:** Agente exterior al sistema

**Estímulo:** Eliminar Base de datos

**Artefacto:** Base de datos

**Ambiente:** En normal

**Respuesta:** Solicitar permisos de administrador

**Medida de respuesta:**.Impedir eliminación de base de datos.

**c) Rendimiento**

El rendimiento es la medida de un sistema que tiene en cuenta el tiempo y la capacidad de un sistema de software para cumplir requisitos de sincronización.

**Tácticas**

- **--**** Administración de recursos:**
  - **--** Incremento de recursos.
  - **--** Introducir concurrencia.
  - **--** Mantener múltiples copias de los cálculos.
  - **--** Mantener múltiples copias de datos.
  - **--** Programar recursos.
- **--**** Control de la demanda de recursos:**
  - **--** Gestionar la frecuencia de muestreo.
  - **--** Limitar las respuestas a eventos.
  - **--** Priorizar eventos.
  - **--** Reducir gastos generales.
  - **--** Tiempos de ejecución limitados.
  - **--** Incrementar la eficiencia de recursos.
- **--**** Caché global:**
  - **--** Implica en colocar un servidor dedicado solo a caché, de manera que el nodo que hace la petición comprobará primero el caché global. Si la información no estaba en el caché, el caché traerá la información del origen, y lo guardará para futuras peticiones.
- **--**** Colas:**
  - **--** Cada tarea del cliente será enlazada a la cola, la cual será ejecutada por el servidor de forma sincrónica.
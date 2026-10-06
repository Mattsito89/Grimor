// Vía Custom: Ad Astra — complemento fanmade «Ad Astra»
export const viaAdAstra = {
    "id": "ad-astra",
    "nombre": "Ad Astra",
    "color": "#8b5cf6",
    "descripcion": "Vía basada en la magia que invade nuestro mundo desde fuera de Gaia, opuesta a todas las demás y de complicados conocimientos; quienes la dominan reciben el nombre de Astrólogos. Libre acceso: Cerrado. Sub-vías abiertas: Tiempo, Espacio, Sueños, Astrología, Vacío y Primigenia. Por la propia esencia de esta vía, no es posible seleccionar ninguno de sus hechizos como conjuros seleccionados.",
    "hechizos": [
        {
            "id": "luna-llena",
            "nombre": "Luna Llena",
            "nivel": 2,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Uno de los hechizos más básicos, a la vez que probablemente uno de los más útiles y fundamentales de esta vía. El hechicero conjura con su poder Zeónico una luna llena cada vez que este comienza a acumular Zeón. Como una pequeña esfera a su lado, esta luna brinda poder e inspiración al mago para poder canalizar hechizos de mayores grados incluso si este no posee la inteligencia necesaria para lanzarlos. A efectos de juego, el hechizo otorga un +1 a la inteligencia para calcular el grado en que se puede lanzar cualquier otro sortilegio de esta vía, incluidos los hechizos de sub-vía derivados de esta.",
            "zeon": {
                "base": 40,
                "intermedio": 80,
                "avanzado": 120,
                "arcano": 160
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "Afecta a los hechizos hasta el grado base.",
                "intermedio": "Afecta a los hechizos hasta el grado intermedio.",
                "avanzado": "Afecta a los hechizos hasta el grado avanzado.",
                "arcano": "Afecta a los hechizos hasta el grado arcano."
            },
            "mantenimiento": "10 / 15 / 15 / 20 Diario"
        },
        {
            "id": "mapa-estelar",
            "nombre": "Mapa Estelar",
            "nivel": 6,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Gracias a su poder Zeónico, el hechicero puede conjurar un mapa estelar, una especie de proyección del firmamento perfectamente clara y visible a través de la cual el hechicero o quienes haya a su alrededor pueden utilizar para guiarse a partir de las estrellas.",
            "zeon": {
                "base": 50,
                "intermedio": 90,
                "avanzado": 120,
                "arcano": 160
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "+40 a Navegación. 100m de radio",
                "intermedio": "+80 a Navegación. 500m de radio",
                "avanzado": "+120 a Navegación. 1Km de radio",
                "arcano": "+180 a Navegación. 5Km de radio"
            },
            "mantenimiento": "No"
        },
        {
            "id": "astrolabio",
            "nombre": "Astrolabio",
            "nivel": 8,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Acumulando Zeón y conjurando un instrumento para realizar complejos cálculos, el hechicero proyecta una previsión del temporal en una zona concreta. Indicado por el grado del conjuro, el hechicero podrá conocer en mayor o menor medida y en un área más amplia el clima, así como las fases lunares próximas.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 160,
                "arcano": 220
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 8,
                "avanzado": 10,
                "arcano": 12
            },
            "grados": {
                "base": "Las próximas 7 horas. 1Km de radio",
                "intermedio": "Los próximos 7 días. 2Km de radio",
                "avanzado": "Las próximas 7 semanas. 5Km de radio",
                "arcano": "Los próximos 7 meses. 10Km de radio"
            },
            "mantenimiento": "No"
        },
        {
            "id": "aura-boreal",
            "nombre": "Aura Boreal",
            "nivel": 10,
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Canalizando el Zeón hasta convertirlo en formas lumínicas, el mago proyecta estas formas y colores a su alrededor, provocando una zona luminosa que se mueve junto a él. Cualquiera que se encuentre dentro del área, incluido el propio lanzador sufrirá un estado de calma que sosiega y causa un penalizador de -10 a toda acción ofensiva que se intente realizar. Los afectados dentro del área tendrán derecho a una resistencia en el caso de que quieran resistirse a sus efectos.",
            "zeon": {
                "base": 50,
                "intermedio": 90,
                "avanzado": 120,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "5m de radio. 80 RM",
                "intermedio": "10m de radio. 100 RM",
                "avanzado": "25m de radio. 120 RM",
                "arcano": "50m de radio. 140 RM"
            },
            "mantenimiento": "5 / 10 / 10 / 15"
        },
        {
            "id": "lluvia-de-estrellas",
            "nombre": "Lluvia de estrellas",
            "nivel": 12,
            "accion": "Activa",
            "tipo": "Ataque, Anímico",
            "efecto": "El mago transforma el Zeón en pequeñas esferas lumínicas que son perfectamente visibles para todo el mundo. Estas se forman a la espalda del hechicero, y una vez que señala los objetivos, estas son disparadas a gran velocidad, persiguiendo a sus enemigos. Una vez se adhieren a estos comienzan a incrementar su masa hasta ralentizarlos y ser una carga. Los penalizadores no se superponen y un objetivo únicamente puede ser afectado por un efecto de este hechizo al mismo tiempo.",
            "zeon": {
                "base": 30,
                "intermedio": 60,
                "avanzado": 100,
                "arcano": 140
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "1 Ataque. -20 al turno y -1 al TM. 100 RM",
                "intermedio": "2 Ataques. -20 al turno y -1 al TM. 120 RM",
                "avanzado": "3 Ataques. -30 al turno y -2 al TM. 140 RM",
                "arcano": "5 Ataques. -40 al turno y -2 al TM. 160 RM"
            },
            "mantenimiento": "5 / 5 / 10 / 15"
        },
        {
            "id": "escudo-orbital",
            "nombre": "Escudo orbital",
            "nivel": 16,
            "accion": "Pasiva",
            "tipo": "Escudo",
            "efecto": "El hechicero conjura un escudo que le protege de cualquier tipo de ataque, incluso aquellos basados en energía. Adicionalmente, cualquier proyectil físico que sea lanzado o disparado en contra del escudo será ligeramente desviado de su trayectoria original, aplicando un penalizador a la habilidad de ataque con la que fue lanzada o disparada.",
            "zeon": {
                "base": 60,
                "intermedio": 120,
                "avanzado": 200,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "300 PVs. -10 a los proyectiles",
                "intermedio": "600 PVs. -20 a los proyectiles",
                "avanzado": "1200 PVs. -30 a los proyectiles",
                "arcano": "1800 PVs. -40 a los proyectiles"
            },
            "mantenimiento": "5 / 15 / 25 / 35"
        },
        {
            "id": "nebulosa",
            "nombre": "Nebulosa",
            "nivel": 18,
            "accion": "Activa",
            "tipo": "Detección",
            "efecto": "El hechicero libera una nube de color iridiscente moteada que solo aquellos con la capacidad de ver lo sobrenatural serán capaces de ver. Estas pequeñas partículas dispersas por la nube otorgan la información al lanzador de la posición, así como también de la naturaleza afín a los seres detectados.",
            "zeon": {
                "base": 80,
                "intermedio": 100,
                "avanzado": 120,
                "arcano": 140
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "120 RM. 10m de radio",
                "intermedio": "140 RM. 25m de radio",
                "avanzado": "180 RM. 100m de radio",
                "arcano": "220 RM. 250m de radio"
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "id": "repulsion",
            "nombre": "Repulsión",
            "nivel": 20,
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Formando una pantalla invisible frente al objetivo, forma un campo de fuerza que repele al afectado, rechazándolo con un impacto de fuerza indicada por el grado del conjuro.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 140,
                "arcano": 180
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "Impacto FUE 8",
                "intermedio": "Impacto FUE 10",
                "avanzado": "Impacto FUE 12",
                "arcano": "Impacto FUE 15"
            },
            "mantenimiento": "No"
        },
        {
            "id": "velocidad-radial",
            "nombre": "Velocidad radial",
            "nivel": 22,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero se imbuye a sí mismo y a sus aliados en una luz blanquecina que reduce su gravedad, así como les permite recorrer en menor tiempo más distancia gracias a que su cuerpo se ha vuelto mucho más liviano.",
            "zeon": {
                "base": 50,
                "intermedio": 90,
                "avanzado": 120,
                "arcano": 160
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 8,
                "avanzado": 10,
                "arcano": 12
            },
            "grados": {
                "base": "Otorga movimiento sin peso. +1 al TM. 25m de radio",
                "intermedio": "Igual que el anterior. +2 al TM. 50m de radio",
                "avanzado": "Igual que el anterior. +3 al TM. 100m de radio",
                "arcano": "Igual que el anterior. +4 al TM. 250m de radio"
            },
            "mantenimiento": "10 / 15 / 15 / 20"
        },
        {
            "id": "impacto-sideral",
            "nombre": "Impacto sideral",
            "nivel": 26,
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "El mago concentra el Zeón en una gran esfera que lanza en contra de su objetivo. A una velocidad altísima, esta comienza a calentarse o congelarse, dependiendo de lo que desee el mago y produce un ataque que ataca en la TA de FRIo o CALor, con un daño base indicado por el grado del conjuro.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 140,
                "arcano": 180
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "Daño 50",
                "intermedio": "Daño 70",
                "avanzado": "Daño 90",
                "arcano": "Daño 120"
            },
            "mantenimiento": "No"
        },
        {
            "id": "reflejo-lunar",
            "nombre": "Reflejo Lunar",
            "nivel": 28,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El mago crea un reflejo del objetivo seleccionado, pero sin algunas de sus heridas, como una fotocopia perfecta del estado sano de este. Tras unos segundos, la copia se fusiona con el cuerpo y este siente como nuevas fuerzas le renuevan y sus heridas sanan, desapareciendo como si nunca hubieran estado ahí. Lamentablemente pese a los efectos del hechizo, no es capaz de recuperar críticos, aunque sí que puede cerrar heridas y detener sangrados.",
            "zeon": {
                "base": 70,
                "intermedio": 100,
                "avanzado": 150,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "40 PVs",
                "intermedio": "80 PVs",
                "avanzado": "150 PVs",
                "arcano": "250 PVs"
            },
            "mantenimiento": "No"
        },
        {
            "id": "camino-sidereo",
            "nombre": "Camino sidéreo",
            "nivel": 30,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Mediante una manipulación de cuerpos lumínicos, el hechicero crea un camino con apariencia del firmamento estrellado. El mago podrá mantener ese camino y cualquier persona podrá pasar a través de él como si fuera un elemento más del terreno para, por ejemplo, sortear una caída o una pendiente.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "5m de largo y 2m de ancho",
                "intermedio": "10m de largo y 5m de ancho",
                "avanzado": "20m de largo y 10m de ancho",
                "arcano": "40m de largo y 20m de ancho"
            },
            "mantenimiento": "5 / 10 / 10 / 15"
        },
        {
            "id": "brujula-astronomica",
            "nombre": "Brújula astronómica",
            "nivel": 32,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Permite al hechicero imponer una condición a partir de la cual se creará una especie de seña invisible para todos excepto para él que le indicará el lugar más cercano a la condición expuesta. Esta podrá ser más o menos compleja y específica dependiendo del grado del conjuro. Si el Director de Juego lo considera pertinente, las personas, objetos o lugares de alta presencia pueden resistirse con un control de RM contra 120.",
            "zeon": {
                "base": 140,
                "intermedio": 200,
                "avanzado": 260,
                "arcano": 320
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "Indica el camino hasta un lugar u objeto de condición muy simple, como por ejemplo un oasis en el desierto.",
                "intermedio": "Indica el camino hasta un lugar u objeto con una condición algo más compleja, como pudiera ser un lugar con sombras y de temperaturas bajas y con comida cerca.",
                "avanzado": "Indica el camino hasta un lugar, objeto o persona con una condición específica, como podría ser el hijo de una persona en concreto o el nombre de un sitio en concreto.",
                "arcano": "Indica el camino hasta un lugar, objeto, persona que cumpla las especificaciones del hechicero, como podría ser encontrar el artefacto perdido décadas atrás de un antiguo héroe de guerra. Claro está que para esto tendrá que tener previamente conocimientos, aunque nada le impedirá hacer un viaje hasta algún “objeto de valor”, o cosas así."
            },
            "mantenimiento": "10 / 15 / 15 / 25 Diario"
        },
        {
            "id": "susurros-del-cosmos",
            "nombre": "Susurros del cosmos",
            "nivel": 36,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Debido a la capacidad de divergir los distintos sonidos ambientales, así como cualquier ruido, el objetivo de este hechizo es capaz de aumentar sus sentidos, especialmente el auditivo, que será muy susceptible y podrá aislar cualquier sonido para escucharlos individualmente. Este hechizo en cualquiera de sus grados elimina automáticamente cualquier modificador ambiental de ruido y otorga un aumento de PERcepción al objetivo, permitiéndole aumentar mucho sus sentidos. Cada incremento por encima de 13 será reducido a la mitad redondeado hacia abajo.",
            "zeon": {
                "base": 70,
                "intermedio": 100,
                "avanzado": 140,
                "arcano": 180
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "+1 PERcepción. +40 al advertir y al buscar auditivo",
                "intermedio": "+2 PERcepción. +60 al advertir y buscar auditivo",
                "avanzado": "+3 PERcepción. +80 al advertir y buscar auditivo",
                "arcano": "+4 PERcepción. +100 al advertir y buscar auditivo"
            },
            "mantenimiento": "15 / 20 / 25 / 30"
        },
        {
            "id": "teoria-de-cuerdas",
            "nombre": "Teoría de cuerdas",
            "nivel": 38,
            "accion": "Activa",
            "tipo": "Anímico, Efecto",
            "efecto": "Creando y vinculando finos hilos de magia sobre el objetivo, el hechicero es capaz de entorpecer o apoyar en las acciones que este intente realizar. En caso de utilizarlo para asistir a alguien, el hechizo simplemente será un efecto, mientras que, en caso de utilizarse para entorpecer, primero se tendrá que realizar una proyección capaz de impactar, como en cualquier hechizo anímico. En cualquiera de los casos tendrán que tirar una RM en caso de querer resistirse a los efectos de este hechizo.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 140,
                "arcano": 180
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "+10 a toda acción / -10 a toda acción. 120 RM",
                "intermedio": "+15 a toda acción / -20 a toda acción. 140 RM",
                "avanzado": "+15 a toda acción / -25 a toda acción. 160 RM",
                "arcano": "+20 a toda acción / -30 a toda acción. 200 RM"
            },
            "mantenimiento": "5 / 5 / 10 / 10"
        },
        {
            "id": "eco-de-luz",
            "nombre": "Eco de luz",
            "nivel": 40,
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Mediante unos residuos lumínicos que el afectado deja atrás cada cierto tiempo, cualquier tipo de detección será falseada y dará una información errónea que quedará a discreción del hechicero a menos que el lanzador del conjuro o detección superen una RM indicada por el grado del conjuro.",
            "zeon": {
                "base": 100,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 240
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "140 RM",
                "intermedio": "160 RM",
                "avanzado": "180 RM",
                "arcano": "220 RM"
            },
            "mantenimiento": "10 / 15 / 20 / 25 Diario"
        },
        {
            "id": "armas-de-argenta-lunala",
            "nombre": "Armas de argenta Lunala",
            "nivel": 42,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero crea mediante la solidificación de puro Zeón y la bendición de la luna, unas armas de metal especial, capaces de dañar energía y atacar en la TA de FRIo o CALor como crítico secundario a la hora de su concepción. Estas armas tendrán una calidad determinada por el grado del conjuro.",
            "zeon": {
                "base": 150,
                "intermedio": 220,
                "avanzado": 280,
                "arcano": 350
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "Calidad +0",
                "intermedio": "Calidad +5",
                "avanzado": "Calidad +5. A la hora de su concepción se puede elegir si hace doble daño a criaturas basadas en luz u oscuridad.",
                "arcano": "Igual que el anterior pero ahora son de calidad +10"
            },
            "mantenimiento": "10 / 15 / 20 / 25 Diario"
        },
        {
            "id": "estrella-oscura",
            "nombre": "Estrella oscura",
            "nivel": 46,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Creando un vórtice oscuro tras el objetivo del conjuro, este puede notar como la mayoría de sus dolencias, así como cualquier tipo de estado es automáticamente engullido por el oscuro astro. Mientras el hechizo se mantenga, permitirá que el afectado ignore un número determinado por el grado del conjuro de estados alterados descritos en el capítulo 14, que volverán una vez que esta deje de mantenerse.",
            "zeon": {
                "base": 80,
                "intermedio": 140,
                "avanzado": 200,
                "arcano": 260
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "Puede absorber hasta 1 estado alterado",
                "intermedio": "Puede absorber hasta 2 estados alterados",
                "avanzado": "Puede absorber hasta 3 estados alterados",
                "arcano": "Puede absorber hasta 5 estados alterados"
            },
            "mantenimiento": "10 / 15 / 15 / 20"
        },
        {
            "id": "arco-lunar",
            "nombre": "Arco lunar",
            "nivel": 48,
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "El mago crea un arco de luz lunar que dispara en contra de su objetivo. Este arco una vez que impacta contra el enemigo, provoca una columna de luz sobrenatural que revela al mismo, otorgándole penalizadores a la hora de utilizar las secundarias de Sigilo y Ocultar.",
            "zeon": {
                "base": 140,
                "intermedio": 180,
                "avanzado": 240,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "-80 Sigilo y Ocultación. 120 RM.",
                "intermedio": "-120 Sigilo y Ocultación. 140 RM.",
                "avanzado": "-140 Sigilo y Ocultación. 180 RM.",
                "arcano": "-180 Sigilo y Ocultación. 200 RM."
            },
            "mantenimiento": "5 / 10 / 20 / 30 Diario"
        },
        {
            "id": "tormenta-solar",
            "nombre": "Tormenta solar",
            "nivel": 50,
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "El ambiente alrededor del hechicero comienza a caldearse hasta tal punto que la mayoría de cuerpos que están en los alrededores comienzan a sentir los efectos del fuego. Cualquier objeto o persona que se exponga al radio indicado por el grado del conjuro deberá de sufrir un control de RF o sufrir un daño equivalente a la mitad del fracaso por la exposición con la energía. En el caso de los objetos, perderán automáticamente un grado de calidad o terminarán por romperse. Aquellos metales susceptibles a resistir altísimas temperaturas pueden obtener un bono de entre +10 y +40 para resistirse a estos efectos.",
            "zeon": {
                "base": 100,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "100 RF. 1m de radio",
                "intermedio": "120 RF. 5m de radio",
                "avanzado": "140 RF. 15m de radio",
                "arcano": "180 RF. 25m de radio"
            },
            "mantenimiento": "5 / 10 / 15 / 25"
        },
        {
            "id": "fundirse-con-las-estrellas",
            "nombre": "Fundirse con las estrellas",
            "nivel": 52,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El cuerpo designado por el hechicero se transforma en una silueta de color oscuro y estrellado. En este estado, el afectado es completamente inmune a cualquier ataque incapaz de dañar energía. De la misma forma, puede atravesar cualquier objeto físico que no esté encantado. Además, esta forma le permitirle moverse con un tipo de vuelo místico 8.",
            "zeon": {
                "base": 100,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 16
            },
            "grados": {
                "base": "Las habilidades descritas.",
                "intermedio": "Como en grado base, pero además ahora es capaz de hacer pequeños teletransportes proyectándose en lugar de moverse por el aire o volando. La distancia de la proyección es equivalente a su TM o el vuelo místico, lo que sea más alto.",
                "avanzado": "Como el grado anterior pero cualquier daño basado en oscuridad o luz es automáticamente reducido a la mitad.",
                "arcano": "Como en avanzado, pero además otorga invisibilidad espiritual al hechicero y sus conjuros anímicos, solo pudiendo ser vistos por aquellos capaces de ver los espíritus."
            },
            "mantenimiento": "10 / 10 / 15 / 25"
        },
        {
            "id": "aurora-astral",
            "nombre": "Aurora astral",
            "nivel": 56,
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "El hechicero conforma una masa astral que impacta contra el objetivo, obligándole a tener que superar una RM. No obstante, esta masa astral únicamente afecta a la esencia anímica más pura del afectado, obligándole a realizar dicha RM sin ningún bonificador o añadido externo más que su RM base. En caso de fallarla el afectado quedará bajo los efectos del estado de fascinación a causa de las visiones y delirios.",
            "zeon": {
                "base": 120,
                "intermedio": 180,
                "avanzado": 240,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "100 RM",
                "intermedio": "120 RM",
                "avanzado": "140 RM",
                "arcano": "160 RM"
            },
            "mantenimiento": "10 / 15 / 20 / 25"
        },
        {
            "id": "quietud-astral",
            "nombre": "Quietud astral",
            "nivel": 58,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero crea un área a su alrededor donde todo parece sumirse en un silencio absoluto. Una paz que sosiega la mente, el alma y el cuerpo de los individuos que se encuentren en su interior. En el interior de esta aura el hechicero podrá sanar a todos los que se encuentre en su interior una cantidad de PVs indicados en el grado del conjuro, independientemente de si son aliados o enemigos.",
            "zeon": {
                "base": 280,
                "intermedio": 400,
                "avanzado": 600,
                "arcano": 800
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "40 PVs. 5m de radio",
                "intermedio": "80 PVs. 10m de radio",
                "avanzado": "150 PVs. 25m de radio",
                "arcano": "250 PVs. 50m de radio"
            },
            "mantenimiento": "No"
        },
        {
            "id": "cosmos",
            "nombre": "Cosmos",
            "nivel": 60,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El blanco del conjuro obtiene un vínculo a partir del cual recupera un porcentaje del Zeón utilizado por el hechicero, pudiendo vincularse este a si mismo para crear un bucle de retroalimentación. Este efecto no tiene poder alguno sobre conjuros innatos o hechizos que no utilicen Zeón del propio hechicero.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 140,
                "arcano": 180
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "10% del zeón utilizado.",
                "intermedio": "15% del zeón utilizado",
                "avanzado": "20% del zeón utilizado",
                "arcano": "30% del zeón utilizado"
            },
            "mantenimiento": "5 / 5 / 10 / 15"
        },
        {
            "id": "eclipse-lunar",
            "nombre": "Eclipse lunar",
            "nivel": 62,
            "accion": "Activa",
            "tipo": "Efecto, especial",
            "efecto": "El hechicero obtiene la capacidad de conjurar un eclipse lunar gracias al conjuro de luna llena. Tornándola en una masa oscura y mística que otorga bonos a la valoración mágica para ocultar conjuros del hechicero y además un bono a su proyección. Este hechizo tiene como contraparte que mientras sea mantenido el hechicero no puede beneficiarse de los efectos del hechizo «Luna llena», por lo que no reducirá en 1 el requisito de inteligencia de ningún hechizo mientras este siga activo.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "+40 a la valoración mágica y +5 a la proyección del hechicero",
                "intermedio": "+80 a la valoración mágica y +10 a la proyección del hechicero",
                "avanzado": "+120 a la valoración mágica y +15 a la proyección del hechicero",
                "arcano": "+140 a la valoración mágica y +20 a la proyección del hechicero"
            },
            "mantenimiento": "10 / 15 / 20 / 25"
        },
        {
            "id": "imagen-cosmica",
            "nombre": "Imagen cósmica",
            "nivel": 66,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero crea una imagen cósmica de sí mismo, que a todos los efectos parece una manifestación real del mismo hechicero. Para detectar cual es el real se tendrá que superar una tirada contra advertir o buscar indicada por el grado del conjuro. Adicionalmente, aquellos que tengan la capacidad de ver la magia y superen una tirada de valoración mágica, serán capaces de percibir cual es la imagen real y cuáles no.\n\nMientras el conjuro se mantenga, cualquier ataque realizado por el hechicero aplicará flanco a su objetivo, a menos que sepa cual es el real.\n\nEn caso de dar intentar golpear una de las copias quedará a discreción del DJ y del entorno como decidir cuál es la real y cual no.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "1 copia. 120/40 en advertir o buscar. 80 en valoración mágica",
                "intermedio": "2 copias. 140/80 advertir o buscar. 120 en valoración mágica",
                "avanzado": "4 copias. 180/120 en advertir o buscar. 140 en valoración mágica. Aplica Sorpresa o Espalda en lugar de Flanco",
                "arcano": "5 copias. 240/140 en advertir o buscar. 180 en valoración mágica. Aplica Sorpresa o espalda en lugar de Flanco"
            },
            "mantenimiento": "15 / 20 / 20 / 25"
        },
        {
            "id": "escudo-meteoro",
            "nombre": "Escudo meteoro",
            "nivel": 68,
            "accion": "Activa",
            "tipo": "Escudo",
            "efecto": "El hechicero crea un escudo alrededor del cual orbitan unos pequeños astros formados de materia del entorno. Estos astros son automáticamente lanzados en contra del agresor en caso de obtener una defensa con éxito. Atacan en la TA CONtundente y tienen daño 30. En caso de utilizar todos los pequeños astros y que el escudo aún siga activo, ya no podrá crear ni atacar más a pesar de conseguir defensas con éxito. En caso de que el escudo sea destruido antes de lanzar todos los proyectiles, estos simplemente caerán al suelo.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 180,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "500 PVs. 3 proyectiles con habilidad predeterminada 140",
                "intermedio": "1000 PVs. 5 proyectiles con habilidad predeterminada 180",
                "avanzado": "1500 PVs. 7 proyectiles con habilidad predeterminada 240",
                "arcano": "2500 PVs. 9 proyectiles con habilidad predeterminada 280"
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "id": "estrella-fugaz",
            "nombre": "Estrella fugaz",
            "nivel": 70,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero conjura la divina providencia de las estrellas para conjurar un deseo. El conjuro no cumple deseos por sí mismo, pero sí que es capaz de proveer de los momentos o de un pequeño impulso a aquel que ha deseado algo para alcanzar una meta u objetivo. Dependiendo del grado del conjuro, estas señales serán más o menos claras y estarán más o menos presentes a la hora de guiar al susodicho ante el objeto de su deseo.\n\nPor ejemplo, si se utilizase este hechizo en grado arcano y el deseo fuera ser el campeón de un torneo de lucha, el deseo no cumplirá automáticamente el deseo, pero podría otorgarle Buena Suerte y Afortunado durante el tiempo que dure el torneo para ayudarle a conseguirlo.\n\nLos efectos de este hechizo quedan enteramente a discreción del DJ y un mismo individuo solo podrá mantener uno de estos conjuros activos a la vez.",
            "zeon": {
                "base": 150,
                "intermedio": 250,
                "avanzado": 350,
                "arcano": 500
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "Permite formular un pequeño deseo, algo que sea simbólico para el personaje y no tenga valor monetario o involucre a más personas.",
                "intermedio": "Permite formular un deseo algo más complejo, como querer descubrir unas ruinas que nadie haya descubierto anteriormente o lograr crear una buena creación artística.",
                "avanzado": "Como el anterior, pero además otorga Afortunado a todo lo relacionado con la obtención de su deseo.",
                "arcano": "Como el anterior, pero además otorga Buena Suerte a todo lo relacionado con la obtención de su deseo."
            },
            "mantenimiento": "10 / 20 / 30 / 40 Diario"
        },
        {
            "id": "atraccion-celestial",
            "nombre": "Atracción celestial",
            "nivel": 72,
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Concentrando una gran cantidad de Zeón, el cuerpo del hechicero se vuelve una masa con gravedad propia que comienza a atraer a los afectados que este designe que se encuentren en un área a su alrededor especificada por el grado del conjuro. Aquellos que no sean capaces de superar un control de FUErza determinado serán inmediatamente atraídos hacia el hechicero con un impacto de fuerza, que jamás podrá herir o chocar contra el hechicero ni ir más allá del mismo.",
            "zeon": {
                "base": 120,
                "intermedio": 160,
                "avanzado": 240,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "FUE 10 para atraerlo. 5m de radio",
                "intermedio": "FUE 12 para atraerlo. 10m de radio",
                "avanzado": "FUE 14 para atraerlo. 25m de radio",
                "arcano": "FUE 16 para atraerlo. 50m de radio"
            },
            "mantenimiento": "No"
        },
        {
            "id": "visitante",
            "nombre": "Visitante",
            "nivel": 76,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Atrayendo la atención de las energías del universo. El hechicero puede traer a la existencia un ser de apariencia extraterrestre. Alejada a lo que una persona pueda imaginar. Este ser se considera una creación y obedecerá a quien lo creo. Siendo un ente inteligente podrá aprender a comunicarse, así como entender el mundo que le rodea en escasos segundos. Por ello, suelen tratarse de seres curiosos y contemplativos del mundo. En grados más altos es posible dotarlos de apariencias más comunes del entendimiento, aunque siempre se verán en algo distintos y ajenos al planeta.\n\nA efectos de juego permite al hechicero crear un Ser Entre Mundos, Especial con Gnosis 20 bajo sus órdenes. Este ser nunca podrá superar el nivel del propio hechicero, así como obtener unas secundarias más altas en el campo intelectuales.\n\nEn caso de crear una criatura capaz de conjurar magia, la única vía que podrá utilizar será esta, ya que carece de conocimientos y ataduras con las energías mágicas convencionales.",
            "zeon": {
                "base": 300,
                "intermedio": 400,
                "avanzado": 600,
                "arcano": 800
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "Nivel 1",
                "intermedio": "Nivel 4",
                "avanzado": "Nivel 7",
                "arcano": "Nivel 9"
            },
            "mantenimiento": "40 / 60 / 100 / 150 Diario"
        },
        {
            "id": "cometa",
            "nombre": "Cometa",
            "nivel": 78,
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "Crea una enorme masa de energía que dispara a una gran velocidad y no se detiene al impactar si no que continúa con su trayectoria hasta alcanzar el final de su recorrido, momento en el que se destruye en pedazos. Ataca en la TA de energía y cualquiera que se encuentre en una línea recta sufrirá el ataque, incluso si hubo alguien capaz de bloquearlo. En caso de que alguien no se encuentre directamente en la trayectoria del conjuro podrá aplicar un +40 a su habilidad para defenderse del ataque.",
            "zeon": {
                "base": 150,
                "intermedio": 200,
                "avanzado": 250,
                "arcano": 350
            },
            "inteligenciaRequerida": {
                "base": 12,
                "intermedio": 14,
                "avanzado": 16,
                "arcano": 18
            },
            "grados": {
                "base": "Daño 120. 10m de longitud.",
                "intermedio": "Daño 140. 50m de longitud",
                "avanzado": "Daño 200. 200m de longitud",
                "arcano": "Daño 240. 500m de longitud"
            },
            "mantenimiento": "No"
        },
        {
            "id": "el-origen-de-la-creacion",
            "nombre": "El origen de la creación",
            "nivel": 80,
            "accion": "Activa",
            "tipo": "Anímico, Automático",
            "efecto": "Deshilachando las fibras de Zeón y destruyendo aquellas que estén anexadas anímicamente al objetivo del conjuro, el hechicero podrá revertir cualquier incremento mágico, así como poderes obtenidos mediante hechizos, los cuales serán destruidos automáticamente en una cantidad equivalente al grado del conjuro.\n\nAquellos PDs destruidos de esta manera, no reducirán el nivel del afectado, sino que simplemente serán destruidos para siempre, a no ser que tengan alguna forma de restaurarlos. Por ejemplo, si una persona estuviera manteniendo un hechizo que aumentase sus resistencias, así como un quimerizar, este hechizo destruiría el mantenimiento del hechizo que aumenta sus resistencias, así como reduciría los PDs obtenidos por el hechizo quimerizar en una cantidad determinada, sin modificar lo más mínimo el nivel del afectado, quién verá su poder mermado.\n\nLa única condición para verse afectado es estar delante del hechicero y que este seleccione al objetivo del conjuro.\n\nEste hechizo puede destruir PDs una única vez por cada hechizo que otorgue poderes de manera permanente. Pero cualquier número de veces en caso de destruir conjuros mantenidos que beneficien al objetivo, y no a otras personas.",
            "zeon": {
                "base": 300,
                "intermedio": 600,
                "avanzado": 1200,
                "arcano": 2400
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "-100 PDs de monstruo. Destruye hasta 2 incrementos mágicos.",
                "intermedio": "-200 PDs de monstruo. Destruye hasta 5 incrementos mágicos.",
                "avanzado": "-300 PDs de monstruo. Destruye hasta 7 incrementos mágicos.",
                "arcano": "-400 PDs de monstruo. Destruye hasta 9 incrementos mágicos."
            },
            "mantenimiento": "No"
        },
        {
            "id": "atraer-astro",
            "nombre": "Atraer Astro",
            "nivel": 82,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El místico atrae gracias a su poder un meteoroide que sea capaz de ver o conozca de su presencia. De este modo, cambia su trayectoria y provoca que atraviese la atmósfera hasta una localización cercana al hechicero, que no podrá controlar, pero se encontrará en una zona circundante. Este pequeño meteorito podrá contener en menos o mayor medida metal estelar, dependiendo del grado del conjuro. La nueva trayectoria, así como el cuerpo celeste son perfectamente visibles para todo aquel que sea capaz de verlo en el firmamento.",
            "zeon": {
                "base": 400,
                "intermedio": 700,
                "avanzado": 900,
                "arcano": 1500
            },
            "inteligenciaRequerida": {
                "base": 12,
                "intermedio": 14,
                "avanzado": 16,
                "arcano": 18
            },
            "grados": {
                "base": "500g. 10Km de radio",
                "intermedio": "1Kg. 1Km de radio",
                "avanzado": "2Kg. 500m de radio",
                "arcano": "5Kg. 100m de radio"
            },
            "mantenimiento": "No"
        },
        {
            "id": "agujero-negro",
            "nombre": "Agujero negro",
            "nivel": 86,
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "Conjurando una pequeña masa capaz de absorber todo lo que entra en contacto con esta, el hechicero intenta engullir a su oponente quién tendrá que defenderse de la acometida. En caso de fallarla, tendrá que superar una RM o hacer una tirada en la tabla de localización para representar la parte del cuerpo que sufrirá el equivalente a un crítico de 3º grado. En caso de que el resultado de la tabla sea un punto vulnerable, será automáticamente destruido por completo y asimilado por el agujero negro.",
            "zeon": {
                "base": 280,
                "intermedio": 420,
                "avanzado": 540,
                "arcano": 660
            },
            "inteligenciaRequerida": {
                "base": 11,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "120 RM",
                "intermedio": "140 RM",
                "avanzado": "160 RM",
                "arcano": "180 RM"
            },
            "mantenimiento": "No"
        },
        {
            "id": "espacio-exterior",
            "nombre": "Espacio exterior",
            "nivel": 88,
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Abriendo una pequeña brecha detrás del afectado, un frío espacial ataca con fuerza a su objetivo, sintiendo este un frío tan extremo que congela en cuestión de segundo su cuerpo, causando grandes daños abrasivos por frío y paralizándole por completo en caso de no superar la RF indicada por el grado del conjuro.",
            "zeon": {
                "base": 300,
                "intermedio": 450,
                "avanzado": 600,
                "arcano": 750
            },
            "inteligenciaRequerida": {
                "base": 13,
                "intermedio": 15,
                "avanzado": 17,
                "arcano": 19
            },
            "grados": {
                "base": "160 RF. Daño igual al fracaso",
                "intermedio": "180 RF. Daño igual al fracaso",
                "avanzado": "220 RF. Daño igual al doble del fracaso",
                "arcano": "240 RF. Daño igual al doble del fracaso"
            },
            "mantenimiento": "25 / 30 / 35 / 40"
        },
        {
            "id": "enana-blanca",
            "nombre": "Enana blanca",
            "nivel": 90,
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "Concentrando una gran cantidad de Zéon, el hechicero es capaz de manifestar un pequeño sol en miniatura, el cual lentamente comienza a expulsar su energía a gran velocidad, tornándose lentamente de color blanco a medida que la radiación y el fuego producen daños sobre todos los que se hayan alrededor, exceptuando al hechicero. Cualquiera que se encuentre en el radio de efecto de la Enana Blanca sufrirá un ataque con un daño base indicado por el grado del conjuro, que adicionalmente sufrirá el penalizador de ceguera total debido a la fuerte radiación lumínica. Ataca en la TA de CALor.",
            "zeon": {
                "base": 350,
                "intermedio": 450,
                "avanzado": 550,
                "arcano": 800
            },
            "inteligenciaRequerida": {
                "base": 13,
                "intermedio": 15,
                "avanzado": 17,
                "arcano": 19
            },
            "grados": {
                "base": "200m de radio. Daño base 200",
                "intermedio": "500m de radio. Daño base 250",
                "avanzado": "1Km de radio. Daño base 300",
                "arcano": "5Km de radio. Daño base 350"
            },
            "mantenimiento": "40 / 60 / 80 / 100"
        },
        {
            "id": "ascension-estelar",
            "nombre": "Ascensión estelar",
            "nivel": 92,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero crea una conexión directa con el exterior de Gaia, como un vínculo con el cual comienza a recibir la esencia y la fuerza exterior a este mundo, intercambiando a un nivel anímico la esencia del afectado por otra de poder inconmensurable. La única limitación de este conjuro es el control de presencia que el sujeto tendrá que superar en caso de ser objetivo del conjuro para poder contener y resistir ese nuevo poder. En caso de que fallar perderá la misma cantidad de puntos de presencia por los cuales no superó la resistencia. En caso de llegar a 0, el sujeto se verá destruido en cuerpo y alma por el poder y en cuanto finalice el conjuro estos serán consumidos por el espacio.\n\nLa presencia se recuperará a un ritmo de 1 punto por día.",
            "zeon": {
                "base": 500,
                "intermedio": 1000,
                "avanzado": 2000,
                "arcano": 5000
            },
            "inteligenciaRequerida": {
                "base": 15,
                "intermedio": 17,
                "avanzado": 19,
                "arcano": 21
            },
            "grados": {
                "base": "Gnosis 30. Control de presencia contra 70",
                "intermedio": "Gnosis 35. Control de presencia contra 90",
                "avanzado": "Gnosis 40. Control de presencia contra 110",
                "arcano": "Gnosis 45. Control de presencia contra 130"
            },
            "mantenimiento": "30 / 40 / 45 / 50"
        },
        {
            "id": "agujero-de-gusano",
            "nombre": "Agujero de gusano",
            "nivel": 96,
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "El hechicero abre un túnel entre dos puntos concretos. Tras manifestarlos, uno de estos intenta atrapar y engullir al objetivo del conjuro, quién tendrá que defenderse de este o en caso de sufrir un ataque que causaría daños contra TA 0 se verá arrastrado al otro punto del túnel que fue abierto. Una vez finalizado el conjuro, el túnel se cierra, aislando e imposibilitando la vuelta nuevamente al afectado.",
            "zeon": {
                "base": 750,
                "intermedio": 1250,
                "avanzado": 1750,
                "arcano": 2250
            },
            "inteligenciaRequerida": {
                "base": 15,
                "intermedio": 17,
                "avanzado": 19,
                "arcano": 21
            },
            "grados": {
                "base": "Permite enviar al afectado a cualquier parte de Gaia.",
                "intermedio": "Permite enviar al afectado a cualquier parte de Gaia, incluidas otras dimensiones como la vigilia o infiernos personales, etc.",
                "avanzado": "Permite enviar al afectado a cualquier parte de Gaia, incluidas otras dimensiones o incluso otros interregnos.",
                "arcano": "Permite enviar al afectado a cualquier parte, incluido el espacio exterior o astros como la luna."
            },
            "mantenimiento": "No"
        },
        {
            "id": "supernova",
            "nombre": "Supernova",
            "nivel": 98,
            "accion": "Pasiva",
            "tipo": "Ataque, especial",
            "efecto": "Manipulando el núcleo de una enana blanca previamente activa y mantenida, el hechicero puede desestabilizar el núcleo de la misma. A cambio de destruirla en el proceso, es capaz de crear una enorme fusión nuclear descontrolada, abarcando kilómetros y kilómetros de radio en el cual todo cuando se encuentre a su paso sufrirá un ataque de una magnitud nunca antes vista. Adicionalmente, cualquier persona que sea víctima del ataque, tendrá que superar una RF o sufrirá un daño equivalente al doble del fracaso. Ataca en la TA de ENErgía.",
            "zeon": {
                "base": 450,
                "intermedio": 900,
                "avanzado": 1350,
                "arcano": 1800
            },
            "inteligenciaRequerida": {
                "base": 15,
                "intermedio": 17,
                "avanzado": 19,
                "arcano": 21
            },
            "grados": {
                "base": "1Km de radio. 200 de daño base. RF 160",
                "intermedio": "10Km de radio. 300 de daño base. RF 180",
                "avanzado": "100Km de radio. 400 de daño base. RF 220",
                "arcano": "1000Km de radio. 500 de daño base. RF 260"
            },
            "mantenimiento": "No"
        },
        {
            "id": "cosmogonia",
            "nombre": "Cosmogonía",
            "nivel": 100,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero clama todas las fuerzas del universo, los astros y el espacio y abre una brecha que distorsiona toda la realidad. Esta apertura no solo conecta dos puntos concretos a través de los cuales el hechicero puede pasar de un lado a otro, sino que es capaz de traspasar distintos multiversos, permitiéndole descubrir nuevas realidades mediante la formulación de condiciones. Una vez que las condiciones han sido creadas, el hechizo le permite viajar a distintos universos donde estas condiciones hayan sido cumplidas completa o parcialmente. En caso de no formular ninguna condición o de que no exista un multiverso con esas especificaciones, simplemente se abrirá uno aleatorio llevándole a cualquiera de los trillones de realidades que existentes.",
            "zeon": {
                "base": 2000,
                "intermedio": 4000,
                "avanzado": 8000,
                "arcano": 12000
            },
            "inteligenciaRequerida": {
                "base": 15,
                "intermedio": 17,
                "avanzado": 19,
                "arcano": 21
            },
            "grados": {
                "base": "Permite al hechicero crear una brecha que le permita acceder a una realidad y multiverso que cumpla una condición, como pudiera ser, un universo donde en Gaia no existiera la barrera. Únicamente funciona en una dirección y solo permite trasladar al hechicero.",
                "intermedio": "Permite crear una brecha que permite pasar a cualquier clase de ser, pero únicamente en una dirección.",
                "avanzado": "Permite crear una brecha que permite el paso a cualquier clase de ser, en ambas direcciones.",
                "arcano": "Permite al hechicero crear una brecha en la cual decide quienes pueden traspasarlo o quienes no, así como también imponer normas y rituales para abrir el ritual para cualquiera que siga estas instrucciones o condiciones."
            },
            "mantenimiento": "200 / 400 / 600 / 800 Diario"
        }
    ]
};

// Sub-vía oficial extraída de Subvías.pdf.
export const subviaUmbral = {
    "id": "umbral",
    "nombre": "Umbral",
    "color": "#f97316",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Luz, Esencia, Agua, Creación, Destrucción",
    "hechizos": [
        {
            "nombre": "Ojos del Otro Lado",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Detección",
            "efecto": "Los ojos del hechicero le permiten ver los miedos intrínsecos de la gente, así como sus trastornos y locuras. Mientras este conjuro está activo, cualquiera capaz de percibir espíritus verá como los ojos del personaje se tornan completamente negros, como si una oscuridad interna los devorase. Para evitar sus efectos, un individuo puede superar un control de RM o RP contra la dificultad determinada por el grado del conjuro.",
            "zeon": {
                "base": 30,
                "intermedio": 60,
                "avanzado": 90,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 5,
                "intermedio": 8,
                "avanzado": 11,
                "arcano": 14
            },
            "grados": {
                "base": "El personaje puede sentir si una persona está asustada o no / RM o RP 120.",
                "intermedio": "El personaje puede percibir no sólo si una persona está o no asustada, sino también cual es o de donde viene el origen del miedo que está sintiendo en ese momento / RM o RP 140.",
                "avanzado": "El mago percibe los miedos y trastornos de la gente de un modo genérico, incluso cuando las personas a las que mira no están asustadas / RM o RP 160.",
                "arcano": "El personaje percibe los miedos y trastornos de la gente, viendo representaciones visuales de dichos miedos caminar al lado de estos / RM o RP 180."
            },
            "mantenimiento": "5 / 5 / 5 / 10"
        },
        {
            "nombre": "Sombra del Miedo",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este conjuro afecta una zona de terreno, volviéndola lúgubre y tenebrosa a la vista de los demás. Es importante puntualizar que diferentes personas pueden percibir la misma zona de un modo distinto, dependiendo de lo que estos consideren un lugar lúgubre.",
            "zeon": {
                "base": 40,
                "intermedio": 70,
                "avanzado": 100,
                "arcano": 130
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "50 metros de radio.",
                "intermedio": "250 metros de radio.",
                "avanzado": "500 metros de radio.",
                "arcano": "1 kilómetro de radio."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Susurros del Otro Lado",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Provoca la aparición de voces susurrantes en un área determinada, sonidos que inundan el corazón de sus víctimas de un miedo primordial. Cualquier persona dentro del radio de acción del conjuro que escuche más de cinco asaltos las voces debe superar automáticamente un control de RM o RP contra la dificultad determinada por el grado del conjuro o quedará sometido al estado de miedo.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "RM o RP 80 / 10 metros de radio.",
                "intermedio": "RM o RP 100 / 25 metros de radio.",
                "avanzado": "RM o RP 120 / 50 metros de radio.",
                "arcano": "RM o RP 140 / 100 metros de radio."
            },
            "mantenimiento": "5 / 5 / 10 / 10"
        },
        {
            "nombre": "Senda de la Locura",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "El brujo altera la mente de una persona con ideas y conceptos demenciales, trastornando su percepción del mundo y sumiéndolo temporalmente en la locura. El blanco de este conjuro debe de superar un control de RM o RP contra la dificultad determinada por el blanco del conjuro o se verá sometido a una locura transitoria como psicosis, esquizofrenia o paranoia, perdiendo la capacidad de ser dueño de sus propios actos. El personaje afectado sólo podrá repetir el control de resistencia una vez al día.",
            "zeon": {
                "base": 80,
                "intermedio": 100,
                "avanzado": 120,
                "arcano": 140
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "RM o RP 120.",
                "intermedio": "RM o RP 140.",
                "avanzado": "RM o RP 160.",
                "arcano": "RM o RP 180."
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "nombre": "Acechar en los Sueños",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Esta maldición permite al hechicero convertir los sueños de su víctima en una prisión donde atrapa su alma en una pesadilla sin fin. El objetivo queda sumido en un sueño eterno en el que constantemente será acosado por monstruosidades y otras criaturas innombrables que le darán caza hasta acabar con él. Este conjuro debe de ser lanzado sobre un individuo que está soñando y, en caso de que este falle la RM o RP requerida, no podrá volver a despertar hasta que el conjuro no finalice. El blanco sólo tendrá derecho a un nuevo control de resistencia cada vez que, mientras está en el mundo de pesadillas, su mente considere que ha ganado a las pesadillas que le acechan.",
            "zeon": {
                "base": 100,
                "intermedio": 140,
                "avanzado": 180,
                "arcano": 240
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "RM o RP 120.",
                "intermedio": "RM o RP 160.",
                "avanzado": "RM o RP 200.",
                "arcano": "RM o RP 240."
            },
            "mantenimiento": "10 / 15 / 20 / 25 Diario"
        },
        {
            "nombre": "Agudizar",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "El personaje agudiza los temores y locuras de aquellos individuos que se encuentre dentro del área de efecto del conjuro. Toda aquella persona que no supere la RM o RP pasará de tener miedo a tener terror de aquellas cosas que le asustaban, y la locura transitoria se convertirá en una profunda demencia. Sólo es posible repetir el control una vez al día o cuando aumenten las Resistencias del personaje.",
            "zeon": {
                "base": 120,
                "intermedio": 180,
                "avanzado": 240,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "50 metros / RM o RP 120.",
                "intermedio": "100 metros / RM o RP 140.",
                "avanzado": "250 metros / RM o RP 160.",
                "arcano": "500 metros / RM o RP 180."
            },
            "mantenimiento": "15 / 20 / 25 / 30 Diario"
        },
        {
            "nombre": "Terror",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Provoca temporalmente el estado de Terror a todos los sujetos que se encuentren alrededor del lanzador. El hechicero es quien decide cual es la fuente de terror para los afectados.",
            "zeon": {
                "base": 80,
                "intermedio": 140,
                "avanzado": 200,
                "arcano": 240
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "RM o PR 120 / 10 metros de radio.",
                "intermedio": "RM o PR 140 / 50 metros de radio.",
                "avanzado": "RM o PR 180 / 100 metros de radio.",
                "arcano": "RM o PR 200 / 250 metros de radio."
            },
            "mantenimiento": "10 / 15 / 20 / 25"
        },
        {
            "nombre": "Señor de los Locos",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "El brujo obtiene la capacidad de controlar a cualquier persona demente alterando a voluntad su demencia y percepción de la realidad. La condición para ser afectado por este sortilegio es estar dentro de la zona de influencia del conjuro y estar sumido en una demencia grave. Aquellos que sólo tengan una locura transitoria pueden aplicar un +40 a sus Resistencias contra los efectos de este conjuro. Los afectados sólo tienen derecho a repetir el control una vez al día o cuando aumenten sus Resistencias.",
            "zeon": {
                "base": 300,
                "intermedio": 400,
                "avanzado": 500,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "RM o RP 140 / 100 metros de radio.",
                "intermedio": "RM o RP 160 / 250 metros de radio.",
                "avanzado": "RM o RP 180 / 1 kilómetro de radio.",
                "arcano": "RM o RP 200 / 5 kilómetros de radio."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Encarnación del Miedo",
            "nivel": "84",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Este conjuro crea una encarnación pura del miedo de una persona, un ser entre mundos nacido a partir de los terrores más profundos del subconsciente de su objetivo. La criatura es real en todos los aspectos, pero únicamente el individuo o individuos que la temen son capaces de verla o interactuar con ella (del mismo modo, la criatura sólo siente o puede tocar a aquellas personas que la temen). Al lanzar este sortilegio, el hechicero debe de elegir una persona en su presencia como objetivo, a la que afecta de manera automática. Si dicho individuo no supera la RM o RP determinada por el grado del conjuro, da forma al instante a un ser a imagen y semejanza de los miedos del personaje. La criatura puede tener cualquier nivel o poder, siempre que no tenga un Gnosis superior a 30 o supere los límites impuestos por el grado del sortilegio.",
            "zeon": {
                "base": 150,
                "intermedio": 250,
                "avanzado": 500,
                "arcano": 700
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 18
            },
            "grados": {
                "base": "Nivel 4 / RM 140.",
                "intermedio": "Nivel 8 / RM 160.",
                "avanzado": "Nivel 12 / RM 180.",
                "arcano": "Nivel 15 / RM 200."
            },
            "mantenimiento": "15 / 25 / 50 / 70"
        },
        {
            "nombre": "El Miedo hecho Carne",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "El personaje se torna una fuente de miedo, provocando temor a todo tipo de criatura, incluso a aquellas que son inmunes a psicología. Todo aquel que esté en su presencia es sometido automáticamente a miedo, sin resistencia posible, y debe superar un control de RM o RP para no verse sometido además a Terror.",
            "zeon": {
                "base": 250,
                "intermedio": 350,
                "avanzado": 450,
                "arcano": 600
            },
            "inteligenciaRequerida": {
                "base": 11,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "RM o RP 120",
                "intermedio": "RM o RP 140",
                "avanzado": "RM o RP 200",
                "arcano": "RM o RP 240"
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "",
            "plantilla": true,
            "nivel": 0,
            "accion": "Activa",
            "tipo": "",
            "efecto": "",
            "zeon": {
                "base": 0,
                "intermedio": 0,
                "avanzado": 0,
                "arcano": 0
            },
            "inteligenciaRequerida": {
                "base": 0,
                "intermedio": 0,
                "avanzado": 0,
                "arcano": 0
            },
            "grados": {
                "base": "",
                "intermedio": "",
                "avanzado": "",
                "arcano": ""
            },
            "mantenimiento": ""
        },
        {
            "nombre": "",
            "plantilla": true,
            "nivel": 0,
            "accion": "Activa",
            "tipo": "",
            "efecto": "",
            "zeon": {
                "base": 0,
                "intermedio": 0,
                "avanzado": 0,
                "arcano": 0
            },
            "inteligenciaRequerida": {
                "base": 0,
                "intermedio": 0,
                "avanzado": 0,
                "arcano": 0
            },
            "grados": {
                "base": "",
                "intermedio": "",
                "avanzado": "",
                "arcano": ""
            },
            "mantenimiento": ""
        },
        {
            "nombre": "",
            "plantilla": true,
            "nivel": 0,
            "accion": "Activa",
            "tipo": "",
            "efecto": "",
            "zeon": {
                "base": 0,
                "intermedio": 0,
                "avanzado": 0,
                "arcano": 0
            },
            "inteligenciaRequerida": {
                "base": 0,
                "intermedio": 0,
                "avanzado": 0,
                "arcano": 0
            },
            "grados": {
                "base": "",
                "intermedio": "",
                "avanzado": "",
                "arcano": ""
            },
            "mantenimiento": ""
        }
    ]
};

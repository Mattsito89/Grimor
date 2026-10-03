// Sub-vía oficial extraída de Subvías.pdf.
export const subviaLiterae = {
    "id": "literae",
    "nombre": "Literae",
    "color": "#a78bfa",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Nigromancia, Destrucción, Esencia, Fuego, Aire, Tierra",
    "hechizos": [
        {
            "nombre": "Pluma de la Realidad",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Crea una pluma sobrenatural que escribe sobre cualquier superficie sin la necesidad de tinta. Usándola durante el lanzamiento de un conjuro de la subvía Literae, el hechicero puede potenciar monumentalmente los efectos de dicho sortilegio, haciendo que el coste de Zeon requerido se reduzca a la mitad. Por ejemplo, un conjuro de Misiva en grado base pasaría a costar 40 en lugar de 80.",
            "zeon": {
                "base": 30,
                "intermedio": 80,
                "avanzado": 100,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 5,
                "intermedio": 8,
                "avanzado": 10,
                "arcano": 12
            },
            "grados": {
                "base": "Afecta a conjuros Literae de grado base.",
                "intermedio": "Afecta a conjuros Literae de grado Intermedio.",
                "avanzado": "Afecta a conjuros Literae de grado Avanzado.",
                "arcano": "Afecta a conjuros Literae de grado Arcano."
            },
            "mantenimiento": "5 / 10 / 10 / 15 Diario"
        },
        {
            "nombre": "Misiva",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Tras escribir una carta es posible utilizar este hechizo para enviar su contenido a un individuo a quien el hechicero conozca personalmente. La carta, así como su envoltorio, desaparece de un fogonazo y una nube de humo, reapareciendo instantes después al lado de su receptor. El alcance del hechizo depende de su grado. Misiva puede traspasar estructuras encantadas de menor poder siempre y cuando haya suficiente espacio para, por ejemplo, “colar” la carta debajo de la puerta.",
            "zeon": {
                "base": 80,
                "intermedio": 140,
                "avanzado": 200,
                "arcano": 280
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 6
            },
            "grados": {
                "base": "10 Kilómetros.",
                "intermedio": "100 Kilómetros.",
                "avanzado": "1000 Kilómetros.",
                "arcano": "Cualquier lugar."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Diario de Viaje",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Encanta un libro para que recoja todas las experiencias que afecten al mago para poder revisarlas posteriormente, como si a efectos de juego estuviera escribiendo un detallado diario. El grado del conjuro determina el máximo periodo de tiempo que dicho libro cubre retrospectivamente desde el momento del lanzamiento.",
            "zeon": {
                "base": 100,
                "intermedio": 180,
                "avanzado": 240,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 6
            },
            "grados": {
                "base": "1 día.",
                "intermedio": "1 semana.",
                "avanzado": "1 mes.",
                "arcano": "1 año."
            },
            "mantenimiento": "5 / 20 / 25 / 30 Diario"
        },
        {
            "nombre": "Orden Escrita",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Permite escribir una orden simple en un pergamino que afectará al primero que la lea, obligándole a cumplirla si falla la resistencia del sortilegio. La orden funcionará incluso si está oculta entre otras frases, aunque el personaje afectado obtiene entre un +20 y un +60 al control si el mandato va directamente en contra de su naturaleza. Este conjuro puede repetirse de manera encadenada en varias ocasiones para crear una orden compleja, como “abre la puerta y luego olvida lo ocurrido”. El poder de las palabras pierde su poder después de haber imbuido a una persona con la orden, convirtiéndose en simples letras desde ese momento.",
            "zeon": {
                "base": 240,
                "intermedio": 360,
                "avanzado": 480,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "RM o RP 120.",
                "intermedio": "RM o RP 140.",
                "avanzado": "RM o RP 160.",
                "arcano": "RM o RP 180."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Escudo de Palabras",
            "nivel": "44",
            "accion": "Pasiva",
            "tipo": "Defensa",
            "efecto": "Usando la Pluma Mágica para trazar caracteres en el aire, el hechicero crea un escudo de palabras que le defienden tanto de ataques físicos como sobrenaturales. El escudo regenera cada asalto tantos Puntos de Resistencia como la habilidad base del mago en Arte (Literatura).",
            "zeon": {
                "base": 150,
                "intermedio": 200,
                "avanzado": 250,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 8
            },
            "grados": {
                "base": "200 Puntos de Resistencia.",
                "intermedio": "500 Puntos de Resistencia",
                "avanzado": "800 Puntos de Resistencia",
                "arcano": "1.200 Puntos de Resistencia"
            },
            "mantenimiento": "15 / 20 / 25 / 30"
        },
        {
            "nombre": "Teatro de la Vida",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Permite al hechicero modificar el comportamiento de las personas que se encuentran a su alrededor escribiendo sobre una superficie las acciones que quiere que dichos individuos realicen. Básicamente, el brujo se convierte en el escritor de una obra de teatro poniendo a la gente en el papel de actores que cumplen su cometido conforme él lo vaya narrando. Puede afectar a varias personas, siempre que su presencia combinada no supere el límite marcado por el grado del sortilegio. La condición para verse afectado es estar dentro del área de efecto del conjuro y que el lanzador conozca el nombre real de las personas sobre las que quiere influir, aunque sus objetivos pueden resistirse al control superando una RM o RP para evitar ser controlados. Si el narrador deja de escribir y los afectados no tienen nuevas órdenes que cumplir, se quedarán quietos, a la espera de su siguiente papel.",
            "zeon": {
                "base": 240,
                "intermedio": 360,
                "avanzado": 480,
                "arcano": 600
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 6
            },
            "grados": {
                "base": "RM o RP 120/ Límite de Presencia 100 / 20 metros de radio.",
                "intermedio": "RM o RP 140 / Límite de Presencia 180 / 40 metros de radio.",
                "avanzado": "RM o RP 160 / Límite de Presencia 240 / 80 metros de radio.",
                "arcano": "RM o RP 180 / Límite de Presencia 320 / 150 metros de radio."
            },
            "mantenimiento": "15 / 20 / 25 / 30"
        },
        {
            "nombre": "Compendio",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Encanta un libro para que responda las preguntas que se le dirijan de manera que, cuando alguien haga una pregunta ante él, se escribirá en sus páginas una contestación. Al lanzar Compendio, el manuscrito afectado recibe una cantidad de puntos de una habilidad intelectual determinada por el grado del conjuro, y dará una respuesta apropiada basada en lo que sabría un experto con la misma puntuación sobre el tema.",
            "zeon": {
                "base": 120,
                "intermedio": 260,
                "avanzado": 380,
                "arcano": 500
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "120 puntos de habilidad intelectual.",
                "intermedio": "240 puntos de habilidad intelectual.",
                "avanzado": "320 puntos de habilidad intelectual.",
                "arcano": "440 puntos de habilidad intelectual."
            },
            "mantenimiento": "10 / 20 / 30 / 40 Diario"
        },
        {
            "nombre": "Dramaturgo",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este hechizo modifica la realidad siempre que sea algo plausible y no afecte directamente a otro ser vivo. Por ejemplo, si el hechicero cae desde una azotea puede “escribir” que lo hace sobre un carro de heno que amortigua su caída y así ocurrirá o, si quiere entrar en un sitio cerrado, podrá “narrar” que la puerta no está bloqueada y será cierto. Las posibilidades de este hechizo son casi infinitas, siempre y cuando los elementos y objetos empleados sean simples y con una presencia que no supere lo que determine el grado del conjuro.",
            "zeon": {
                "base": 280,
                "intermedio": 320,
                "avanzado": 480,
                "arcano": 700
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "Presencia máxima 40.",
                "intermedio": "Presencia máxima 80.",
                "avanzado": "Presencia máxima 120.",
                "arcano": "Presencia máxima 160."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Secundario",
            "nivel": "84",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Crea un “personaje” con la personalidad y habilidades que desee el hechicero. Para hacerlo, el lanzador debe de describir en un libro la personalidad, historia y naturaleza de dicho individuo, quien creerá realmente ser lo que el brujo ha descrito para él. 03 6 La existencia del Secundario está ligada al libro por lo que, en caso de que este sea destruido, el personaje desaparecerá de inmediato. El nivel del Secundario no puede superar el indicado por el grado del sortilegio ni tampoco el nivel del propio hechicero.",
            "zeon": {
                "base": 400,
                "intermedio": 600,
                "avanzado": 800,
                "arcano": 1200
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 17
            },
            "grados": {
                "base": "Nivel 2.",
                "intermedio": "Nivel 5.",
                "avanzado": "Nivel 7.",
                "arcano": "Nivel 10."
            },
            "mantenimiento": "40 / 60 / 80 / 120 Diario."
        },
        {
            "nombre": "Tragedia",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Automático.",
            "efecto": "Este hechizo es la transformación suprema de la realidad, alterar el destino de otro ser vivo haciendo que termine como al mago le plazca. El lanzador puede escribir cualquier desenlace que desee para la vida de una persona, como “y tropezando, cayó sobre su espada ensartándose mortalmente” o “el cielo se iluminó cuando, de entre las nubes de tormenta, un rayo cayó sobre él cual saeta de los vengativos dioses”. La condición para verse afectado por este sortilegio es haber sido visto por el brujo al menos una vez y que este conozca su nombre verdadero. Para evitar sus efectos, tanto el blanco de Tragedia como cualquier persona directamente involucrada en el destino escrito han de superar la RM del sortilegio. De conseguirlo, se vuelven inmunes a este hechizo (lanzado por el mismo brujo) durante el resto de sus existencias.",
            "zeon": {
                "base": 500,
                "intermedio": 900,
                "avanzado": 1400,
                "arcano": 2500
            },
            "inteligenciaRequerida": {
                "base": 15,
                "intermedio": 17,
                "avanzado": 19,
                "arcano": 12
            },
            "grados": {
                "base": "RM 120",
                "intermedio": "RM 140",
                "avanzado": "RM 160",
                "arcano": "RM 180"
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

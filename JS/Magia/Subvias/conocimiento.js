// Sub-vía oficial extraída de Subvías.pdf.
export const subviaConocimiento = {
    "id": "conocimiento",
    "nombre": "Conocimiento",
    "color": "#14b8a6",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Destrucción, Tierra, Fuego, Ilusión",
    "hechizos": [
        {
            "nombre": "Categorizar",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Efecto.",
            "efecto": "El lanzador del conjuro obtiene conocimiento sobre la naturaleza de una creación, como usarlo sobre un plato de cocina tratando de averiguar su receta, o un artilugio para ver como esta hecho y de que esta creado. No otorga al lanzador conocimientos de como realizar tal cosa pero al menos le guía en que materia ha de buscar o que elementos ha de utilizar. Si el objeto o creación es especialmente complejo o posee una presencia muy elevada será inmune a este hechizo.",
            "zeon": {
                "base": 30,
                "intermedio": 60,
                "avanzado": 90,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 5,
                "intermedio": 7,
                "avanzado": 9,
                "arcano": 11
            },
            "grados": {
                "base": "El lanzador sabrá en que campo de estudio se ampara: la cocina, mecánica, herrería... sin adquirir más datos.",
                "intermedio": "Obtiene información de los materiales de los que está compuesto, así como una idea aproximada del porcentaje de cada uno en el conjunto final.",
                "avanzado": "Obtiene una vaga idea de como funciona, aunque no para que sirve.",
                "arcano": "El lanzador obtiene una vaga idea de como se creó el objeto, aunque no lo suficiente como para recrearlo."
            },
            "mantenimiento": "No."
        },
        {
            "nombre": "Conocimiento",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Otorga al lanzador un conocimiento innato en una materia. El hechicero obtiene un valor en la habilidad de conocimiento que desee, sustituyendo la que tuviese de por si. Un personaje puede tener varias veces lanzado este hechizo, pero cada vez ha de escoger un conocimiento diferente.",
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
                "base": "40 en una habilidad.",
                "intermedio": "60 en una habilidad.",
                "avanzado": "80 en una habilidad.",
                "arcano": "100 en una habilidad."
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "nombre": "Saber Debilidad",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Detección",
            "efecto": "Permite al hechicero ver las imperfecciones y debilidades de algo o alguien. Si se lanza sobre un ser, averiguará sus defectos y debilidades, mientras que si es sobre un objeto, sabrá si es especialmente débil ante algo y cual es su punto de fisura. La única condición para ser afectado por este conjuro es encontrarse en presencia del lanzador, aunque el objetivo puede resistirse a sus efectos superando una RM.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 140,
                "arcano": 180
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "120 RM.",
                "intermedio": "140 RM.",
                "avanzado": "160 RM.",
                "arcano": "180 RM."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Saber la Verdad",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Detección.",
            "efecto": "El hechicero sabrá cuando alguien esta mintiendo ante él. Si alguien lo hace frente al lanzador, deberá superar una RM contra la dificultad determinada por el grado del conjuro. En caso de fallarla, el hechicero sabrá que ha mentido en algo, aunque no específicamente en que.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "RM 80.",
                "intermedio": "RM 100.",
                "avanzado": "RM 120.",
                "arcano": "RM 140."
            },
            "mantenimiento": "10 / 15 / 20 / 20 Diario"
        },
        {
            "nombre": "Conocimiento Mágico",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El lanzador obtiene el conocimiento de lanzar un conjuro de una vía que no conoce, siempre y cuando dicho sortilegio no sea de un nivel superior a lo que indique el grado del conjuro. Una vez ejecutado Conocimiento Mágico, el brujo tiene un periodo máximo de 5 asaltos para usar el nuevo sortilegio, o perderá los beneficios de este sortilegio. Este conjuro no permite usar un sortilegio de una vía que resulte opuesta a aquella de la que depende esta sub-vía.",
            "zeon": {
                "base": 100,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "Un conjuro de hasta nivel 20.",
                "intermedio": "Un conjuro de hasta nivel 30.",
                "avanzado": "Un conjuro de hasta nivel 40.",
                "arcano": "Un conjuro de hasta nivel 50."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Conocimiento de Combate",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "El hechicero percibe y entiende las habilidades de un adversario, así como su metodología de combate y como anticiparse a sus movimientos. Por tanto, si el objetivo no supera la RM del conjuro, el lanzador obtiene un bono a todas las habilidades enfrentadas a dicho enemigo. La condición para verse afectado por este sortilegio es simplemente estar en presencia del hechicero.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "140 RM / +20 a toda acción enfrentada.",
                "intermedio": "160 RM/ +30 a toda acción enfrentada.",
                "avanzado": "180 RM/ +30 a toda acción enfrentada.",
                "arcano": "200 RM/ +40 a toda acción enfrentada."
            },
            "mantenimiento": "5 / 10 / 20 / 20"
        },
        {
            "nombre": "Aprendizaje",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Automático.",
            "efecto": "El blanco del hechizo mejora su capacidad de aprender a niveles imposibles, disminuyendo el tiempo de estudio o practica para dominar el conocimiento que desea alcanzar. Por ejemplo, podría lanzarse para aprender un sortilegio y este disminuía un grado su nivel de dificultad.",
            "zeon": {
                "base": 100,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "Disminuye en uno la dificultad del grado de aprendizaje.",
                "intermedio": "Disminuye en dos la dificultad del grado de aprendizaje.",
                "avanzado": "Disminuye en tres la dificultad del grado de aprendizaje.",
                "arcano": "Disminuye en cuatro la dificultad del grado de aprendizaje."
            },
            "mantenimiento": "10 / 20 / 30 / 40 Diario"
        },
        {
            "nombre": "Consejero",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Como su nombre indica, este hechizo aconseja sabiamente al lanzador respecto a una cuestión o duda. El conjuro no adivinará ni tendrá conocimientos mayores a los que posea el lanzador, pero usando sus conocimientos como base aconsejará lo mejor posible al lanzador.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 140,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "El lanzador obtiene un consejo aproximado sobre cual es la mejor de las decisiones que ha de tomar. El índice de acierto es elevado, pero dista de ser una predicción perfecta.",
                "intermedio": "El consejero mostrará el espectro de posibilidades y las posibles consecuencias de sus acontecimientos así como la más apropiada para realizar.",
                "avanzado": "El lanzador obtiene un consejo muy aproximado sobre las decisiones que ha de tomar o hacer. El índice de acierto es muy elevado.",
                "arcano": "El lanzador obtiene un consejo detallado con todas las posibilidades y posibles consecuencias de sus acciones, así como un porcentaje aproximado de las posibilidades de éxito que tiene cada una de ellas."
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "nombre": "Otorgar Conocimiento",
            "nivel": "84",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Permite traspasar el conocimiento de un individuo a otro. Por ejemplo, podría hacer que alguien perdiese sus conocimientos sobre arqueología o rituales ocultistas para otorgárselos a otro individuo mientras dure el sortilegio. En reglas de juego, Otorgar Conocimiento permite transmitir una habilidad intelectual cuyo valor no supere lo indicado por el grado del conjuro. Nótese que el lanzador puede elegir si traspasar toda la información pertinente, o sólo de un tema en concreto. Esta habilidad también permite enviar información referente al conocimiento de conjuros, en una cantidad máxima equivalente al valor determinado por el sortilegio. En tal caso, si por ejemplo el lanzador traspasa 40 niveles de magia de Luz un individuo que tiene nivel de vía 70, el afectado perdería la capacidad de lanzar conjuros de nivel 2 a 40, pero podría seguir lanzándolos de nivel 42 a 70. Es importante recordar que este hechizo no otorga el Don, por lo que si se transfiere conjuros a alguien sin dicha ventaja, simplemente no podrá usarlos. Resistirse a los efectos de este sortilegio requiere superar una RM determinada por el grado del conjuro. Alguien afectado sólo puede repetir el control una vez al día.",
            "zeon": {
                "base": 100,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "RM 120 / Habilidad intelectual de hasta 50 o Nivel de magia 20.",
                "intermedio": "RM 140 / Habilidad intelectual de hasta 100 o Nivel de magia 40.",
                "avanzado": "RM 160 / Habilidad intelectual de hasta 150 o Nivel de magia 60.",
                "arcano": "RM 180 / Habilidad intelectual de hasta 200 o Nivel de magia 80."
            },
            "mantenimiento": "5 / 10 / 15 / 20 Diario"
        },
        {
            "nombre": "Vida",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este conjuro otorga temporalmente experiencias vitales al personaje, permitiéndole incrementar unos instantes sus habilidades y conocimientos. A efectos de juego, otorga niveles adicionales al lanzador, dándole momentáneamente la capacidad de usar los PD obtenidos para mejorar con absoluta normalidad. Los efectos de este conjuro no se superponen, y el hechicero sólo puede beneficiarse de un conjuro de Vida a la vez.",
            "zeon": {
                "base": 400,
                "intermedio": 600,
                "avanzado": 800,
                "arcano": 1000
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "+1 Nivel.",
                "intermedio": "+2 Niveles.",
                "avanzado": "+3 Niveles.",
                "arcano": "+4 Niveles."
            },
            "mantenimiento": "40 / 60 / 80 / 100"
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

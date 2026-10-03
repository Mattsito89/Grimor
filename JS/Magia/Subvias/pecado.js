// Sub-vía oficial extraída de Subvías.pdf.
export const subviaPecado = {
    "id": "pecado",
    "nombre": "Pecado",
    "color": "#ef4444",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Luz, Esencia, Ilusión, Tierra, Agua",
    "hechizos": [
        {
            "nombre": "Sentir Pecado",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Detección",
            "efecto": "Mediante este conjuro el hechicero podrá ver los pecados que ha cometido alguien. No obtendrá información especifica de ellos (sabrá el tipo de pecado aunque no sepa exactamente que hizo), pero sentirá mas o menos su gravedad y en que momento aproximado fueron cometidos. Por ejemplo, podría saber que el pecado cometido por una persona es la mentira, aunque no saber en que mintió o porqué. El lanzador puede sentir un pecado por cada 10 puntos por los que el blanco del conjuro falle un control de RM contra la dificultad prefijada por el grado del conjuro.",
            "zeon": {
                "base": 40,
                "intermedio": 60,
                "avanzado": 90,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 6
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
            "nombre": "Imbuir Pecado",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "El objetivo del hechizo es incitado a cometer su pecado capital más afín. Alguien con una enorme gula sentirá la necesidad de comer insaciablemente, mientras que un individuo lujurioso se lanzará a los brazos de cualquier persona cercana que considere atractiva. Aquel que falle la RM del conjuro se verá afectado por él y sólo tendrá derecho a repetir el control cada vez que encuentre algo que le haga volver a tener la necesidad de pecar.",
            "zeon": {
                "base": 50,
                "intermedio": 70,
                "avanzado": 100,
                "arcano": 140
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 6
            },
            "grados": {
                "base": "120 RM.",
                "intermedio": "140 RM.",
                "avanzado": "160 RM.",
                "arcano": "180 RM."
            },
            "mantenimiento": "5 / 10 / 10 / 15 Diario"
        },
        {
            "nombre": "Gula",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero recupera automáticamente una parte de todos los puntos de Zeon (redondeado hacia arriba en grupos de 5) y de Ki que se gasten en un radio a su alrededor. Por ejemplo, si el lanzador tiene activo Gula en su grado base y un hechicero lanza un conjuro dentro de su radio de acción con un coste zeónico de 100 puntos, recuperaría automáticamente 10 puntos de Zeon. Gula no tiene efectos sobre conjuros innatos o poderes mágicos que no consuman propiamente Zeon, ni tampoco aquellos conjuros o Técnicas de Ki que utilice el lanzador.",
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
                "arcano": 7
            },
            "grados": {
                "base": "Absorbe un 10% / 10 metros de radio.",
                "intermedio": "Absorbe un 20% / 20 metros de radio.",
                "avanzado": "Absorbe un 30% / 40 metros de radio.",
                "arcano": "Absorbe un 50% / 60 metros de radio."
            },
            "mantenimiento": "5 / 5 / 10 / 10"
        },
        {
            "nombre": "Lujuria",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "El blanco del conjuro se convertirá en un iman para cualquiera que se sienta atraído por el sexo del blanco. Cualquiera que lo vea y no supere la RM determinada por el grado del sortilegio se sentirá inmensamente atraído por el afectado, mientras que quien falle el control por más de 40 puntos sentirá una atracción obsesiva y enfermiza, perdiendo incluso la razón y haciendo cualquier cosa por poseer al objeto de su lujuria. Cualquier individuo afectado puede repetir el control cada hora. El blanco del conjuro puede resistirse si lo desea a ser imbuido por Lujuria superando la RM del sortilegio.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 120,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "140 RM.",
                "intermedio": "160 RM.",
                "avanzado": "180 RM.",
                "arcano": "200 RM."
            },
            "mantenimiento": "5 / 5 / 10 / 10"
        },
        {
            "nombre": "Avaricia",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Automático.",
            "efecto": "Arrebata automáticamente algo que esté en posesión del blanco del conjuro, haciéndolo aparecer ante el hechicero. No es ni siquiera necesario que dicho objeto pueda “moverse” hacia el lanzador; se puede afectar desde algo que esté sostenido en las manos del objetivo hasta las ropas o armaduras que esté llevando. El objeto elegido no puede tener una presencia máxima superior a lo que determine el grado del conjuro. Alguien que sea consciente de que puede ser blanco de este conjuro puede tratar de resistirse a sus efectos superando una RM.",
            "zeon": {
                "base": 50,
                "intermedio": 80,
                "avanzado": 120,
                "arcano": 260
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 8
            },
            "grados": {
                "base": "120 RM / 50 de presencia.",
                "intermedio": "140 RM / 80 de presencia.",
                "avanzado": "160 RM / 100 de presencia.",
                "arcano": "180 RM / 120 de presencia."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Pereza",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El objetivo se ve sumido en un profundo estado de pereza. En consecuencia, mientras dure el efecto del sortilegio sólo podrá realizar acciones pasivas. Para resistir los efectos de este conjuro es necesario superar un control de RM contra la dificultad determinada por el grado del conjuro.",
            "zeon": {
                "base": 60,
                "intermedio": 80,
                "avanzado": 100,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "100 RM.",
                "intermedio": "120 RM.",
                "avanzado": "140 RM.",
                "arcano": "160 RM."
            },
            "mantenimiento": "5 / 5 / 10 / 10"
        },
        {
            "nombre": "Soberbia",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Quien sufra este efecto obtiene una confianza infinita despreciando las habilidades de todo el que le rodea. Cualquier persona incrementa automáticamente sus habilidades, obteniendo bonos especiales determinados por el grado del conjuro. No obstante, sus capacidades especiales quedarán muy limitadas, viéndose incapaz de usar técnicas de Ki o Magnus, poderes psíquicos de Nivel 2 o 3, o conjuros de nivel superior a 40. Para resistirse a sus efectos, es necesario superar una RM contra la dificultad determinado por el grado del conjuro.",
            "zeon": {
                "base": 80,
                "intermedio": 100,
                "avanzado": 120,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "120 RM / +10 a Toda Acción / +50 a Estilo.",
                "intermedio": "140 RM / +20 a Toda Acción / +100 a Estilo.",
                "avanzado": "160 RM / +20 a Toda Acción / +150 a Estilo / +100 Resistir el Dolor.",
                "arcano": "180 RM / +30 a Toda Acción / +200 a Estilo / +150 Resistir el Dolor."
            },
            "mantenimiento": "5 / 5 / 10 / 10"
        },
        {
            "nombre": "Ira",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "El objetivo del hechizo entra en un estado de ira berseker que no puede controlar, atacando de inmediato a todo aquel que sea objeto de su furia. El hechicero podrá, en el momento del lanzamiento, enfocar sobre quien irá dirigida toda esa rabia. Para resistir los efectos de este conjuro es necesario superar un control de RM contra la dificultad determinada por el grado del conjuro.",
            "zeon": {
                "base": 140,
                "intermedio": 180,
                "avanzado": 220,
                "arcano": 100
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "120 RM.",
                "intermedio": "140 RM.",
                "avanzado": "160 RM.",
                "arcano": "180 RM."
            },
            "mantenimiento": "5 / 5 / 10 / 10"
        },
        {
            "nombre": "Envidia",
            "nivel": "84",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Si el objetivo falla la RM determinada por el grado del conjuro, sufrirá todo lo que el hechicero sufra, tanto positivo como negativo. Por ejemplo, si dañan al lanzador el personaje afectado también sufrirá el mismo daño, o si el brujo recibe cualquier efecto místico, de la naturaleza que sea, tambien será traspasado.",
            "zeon": {
                "base": 100,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "120 RM.",
                "intermedio": "140 RM.",
                "avanzado": "160 RM.",
                "arcano": "180 RM."
            },
            "mantenimiento": "5 / 5 / 10 / 10"
        },
        {
            "nombre": "La Semilla del Mal",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Un individuo afectado por este sortilegio se torna intrínsecamente malvado, perdiendo cualquier concepto de moralidad. El personaje adquirirá una maldad extrema automáticamente. Una persona realmente pura, sin concepto alguno de la maldad, es inmune a este conjuro. Para resistir a sus efectos es necesario superar un control de RM contra la dificultad determinada por el grado del conjuro.",
            "zeon": {
                "base": 120,
                "intermedio": 180,
                "avanzado": 260,
                "arcano": 320
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
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

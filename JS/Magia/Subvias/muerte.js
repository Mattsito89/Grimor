// Sub-vía oficial extraída de Subvías.pdf.
export const subviaMuerte = {
    "id": "muerte",
    "nombre": "Muerte",
    "color": "#64748b",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Creación, Luz, Esencia, Tierra, Agua, Aire, Ilusión",
    "hechizos": [
        {
            "nombre": "Autopsia",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Determina la causa de la muerte y el momento en el que ocurrió. No especifica si el blanco del conjuro murió asesinado ni tampoco el responsable pero sí, por ejemplo, si alguien ha muerto por una contusión masiva o el tipo de enfermedad que lo mató. El grado del conjuro especifica el alcance de tiempo que puede rastrear, mas allá del cual el sortilegio es incapaz de obtener la información.",
            "zeon": {
                "base": 80,
                "intermedio": 100,
                "avanzado": 120,
                "arcano": 50
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 4
            },
            "grados": {
                "base": "1 hora.",
                "intermedio": "1 día.",
                "avanzado": "1 semana.",
                "arcano": "1 mes."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Resistencia a la Muerte",
            "nivel": "14",
            "accion": "Pasiva",
            "tipo": "Efecto",
            "efecto": "Este conjuro protege contra cualquier efecto que pueda provocar la muerte de manera automática, otorgando un bono a las resistencias del objetivo contra efectos de dicha índole.",
            "zeon": {
                "base": 60,
                "intermedio": 90,
                "avanzado": 120,
                "arcano": 140
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 6
            },
            "grados": {
                "base": "+20 a las Resistencias.",
                "intermedio": "+40 a las Resistencias.",
                "avanzado": "+60 a las Resistencias.",
                "arcano": "+80 a las Resistencias."
            },
            "mantenimiento": "10 / 10 / 15 / 15 Diario"
        },
        {
            "nombre": "Exterminio Menor",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Efecto, Anímico",
            "efecto": "Mata a las criaturas con Presencia 20 determinadas por el lanzador en un área si estos no superan la RM determinada por el grado del conjuro.",
            "zeon": {
                "base": 80,
                "intermedio": 100,
                "avanzado": 120,
                "arcano": 140
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 7
            },
            "grados": {
                "base": "RM 60 / 10 metros de radio.",
                "intermedio": "RM 80 / 25 metros de radio.",
                "avanzado": "RM 100 / 50 metros de radio.",
                "arcano": "RM 120 / 75 metros de radio."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Golpe de Gracia",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Remata a alguien que esté a punto de morir. La condición para ser afectado es que el objetivo debe encontrarse en el estado de entre la vida y la muerte, y morirá de manera automática si no supera la RM determinada por el grado del conjuro.",
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
                "base": "RM 140.",
                "intermedio": "RM 160.",
                "avanzado": "RM 180.",
                "arcano": "RM 200."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Poner en Reposo",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Destruye automáticamente a criaturas no muertas sin alma en el radio de acción del conjuro. Las criaturas pueden resistirse a sus efectos superando la RM determinada por el grado del conjuro.",
            "zeon": {
                "base": 60,
                "intermedio": 90,
                "avanzado": 120,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "RM 120 / 10 metros de radio.",
                "intermedio": "RM 140 / 25 metros de radio.",
                "avanzado": "RM 160 / 50 metros de radio.",
                "arcano": "RM 180 / 75 metros de radio."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Sentir la Muerte",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El lanzador es capaz de presentir la muerte en las cercanías, notando si alguien ha muerto o está a punto de morir a su alrededor.",
            "zeon": {
                "base": 100,
                "intermedio": 120,
                "avanzado": 150,
                "arcano": 80
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "El lanzador nota si alguien ha muerto en una zona de unos 100 metros de radio hace menos de una hora o si hay algún moribundo cercano que vaya a fallecer en menos de un minuto.",
                "intermedio": "El lanzador nota si alguien ha muerto en una zona de unos 150 metros de radio hace menos de seis horas o si alguien cercano a él va a morir en menos de diez minutos. Esta habilidad de predicción no le permite notar cosas con verdadera seguridad, sólo intuir la muerte.",
                "avanzado": "El lanzador siente la muerte con claridad. Puede percibir si alguien murió a su alrededor en el pasado o cuanto tiempo de vida aproximada le queda a una persona, y lo probable o improbable que resulta su muerte.",
                "arcano": "Como en grado avanzado, salvo que el lanzador es capaz de percibir la probable causa de muerte, tanto de aquellos que fallecieron en el pasado como los que es posible que mueran en un futuro próximo."
            },
            "mantenimiento": "10 / 10 / 15 / 15"
        },
        {
            "nombre": "Memento Mori",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Este hechizo mata a cualquier criatura dentro de su área que pueda ser considerada como un ser vivo, sin importar su naturaleza o condición. Los afectados pueden ignorar sus efectos superando una RM contra la dificultad determinada por el grado del conjuro.",
            "zeon": {
                "base": 120,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 260
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "RM 80 / 5 metros de radio.",
                "intermedio": "RM 100 / 10 metros de radio.",
                "avanzado": "RM 120 / 25 metros de radio.",
                "arcano": "RM 140 / 50 metros de radio."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Detener la Muerte",
            "nivel": "84",
            "accion": "Pasiva",
            "tipo": "Efecto, Anímico",
            "efecto": "El blanco de este conjuro se vuelve temporalmente inmortal. No significa en absoluto que se convierta en un No Muerto; sólo que mientras se mantenga el conjuro, la muerte no tendrá ningún poder sobre él. Este conjuro no tiene efecto sobre poderes que exterminen directamente el alma o efectos similares.",
            "zeon": {
                "base": 350,
                "intermedio": 500,
                "avanzado": 800,
                "arcano": 1200
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "El objetivo ignora automáticamente cualquier efecto que produzca muerte automática, aunque no es inmortal ante el daño físico.",
                "intermedio": "El personaje se vuelve inmortal ante el daño físico. No obstante, en el caso de que su cuerpo sea dañado hasta grados lo suficientemente elevados como para acabar con su vida, morirá de manera automática si en cualquier caso los efectos de este sortilegio desaparecen antes de que pueda ser curado. Este efecto no le protege de la muerte en caso de recibir un crítico en un punto vital o de perder la cabeza.",
                "avanzado": "Como en grado intermedio, pero el afectado tampoco puede morir a consecuencia de críticos, sin importar cuales sean las consecuencias.",
                "arcano": "Como en grado avanzado, pero el afectado es inmune a cualquier negativo a la acción que pueda sufrir a consecuencia del deterioro físico."
            },
            "mantenimiento": "15 / 25 / 40 / 60"
        },
        {
            "nombre": "Maldición Mortal",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Anímico, Automático",
            "efecto": "El lanzador puede hacer que un individuo muera en un momento determinado por él y de la manera que elija. De ese modo, crea cierta “predestinación a morir”, tal y como él crea conveniente. Para que este conjuro funcione el lanzador debe de alcanzar a su objetivo con el conjuro, y este fallar la RM determinada por el grado del sortilegio. A partir de ese momento, todos los demás individuos que estén incluidos en los sucesos predestinados a la muerte pueden evitar también sus efectos del mismo modo, pero son afectados por la RM de manera automática, por el mero hecho de estar involucrados con el personaje maldito.",
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
                "base": "RM 120.",
                "intermedio": "RM 160.",
                "avanzado": "RM 200.",
                "arcano": "RM 240."
            },
            "mantenimiento": "15 / 25 / 35 / 50 Diario"
        },
        {
            "nombre": "La Muerte",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Efecto, Automático",
            "efecto": "El brujo obtiene un poder absoluto sobre la muerte, pudiendo decidir quien fallece en el radio de acción del conjuro a voluntad. Como un efecto automático, el lanzador puede elegir que cualquier ser vivo muera si no supera una RM o RF contra el valor determinado por el grado del conjuro. Alguien que supere la resistencia una vez ya no puede ser afectado nuevamente por este poder (lanzado por el mismo hechicero).",
            "zeon": {
                "base": 400,
                "intermedio": 750,
                "avanzado": 1200,
                "arcano": 2000
            },
            "inteligenciaRequerida": {
                "base": 12,
                "intermedio": 14,
                "avanzado": 16,
                "arcano": 18
            },
            "grados": {
                "base": "500 metros de radio / RF o RM 80.",
                "intermedio": "1 kilómetro de radio / RF o RM 100.",
                "avanzado": "5 kilómetros de radio / RF o RM 120.",
                "arcano": "10 kilómetros de radio / RF o RM 140."
            },
            "mantenimiento": "40 / 75 / 120 / 200 Diario"
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

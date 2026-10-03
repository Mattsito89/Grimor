// Sub-vía oficial extraída de Subvías.pdf.
export const subviaMusical = {
    "id": "musical",
    "nombre": "Musical",
    "color": "#ec4899",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Destrucción, Fuego, Tierra, Nigromancia",
    "hechizos": [
        {
            "nombre": "Tempo",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Controlando el ritmo del mundo, este conjuro aísla al hechicero de las distracciones exteriores permitiéndole discernir de manera intuitiva todos los sonidos que le rodean. En consecuencia, obtiene un bono a su habilidad secundaria Buscar para todos aquellos controles que estén relacionados con el sonido.",
            "zeon": {
                "base": 30,
                "intermedio": 50,
                "avanzado": 70,
                "arcano": 100
            },
            "inteligenciaRequerida": {
                "base": 5,
                "intermedio": 8,
                "avanzado": 10,
                "arcano": 12
            },
            "grados": {
                "base": "+40 a Buscar.",
                "intermedio": "+60 a Buscar.",
                "avanzado": "+80 a Buscar.",
                "arcano": "+100 a Buscar."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Cantábile",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este conjuro permite al personaje hacer sonar su voz o una melodía interpretada por este en cualquier lugar que desee hasta una distancia máxima determinada por el grado del conjuro.",
            "zeon": {
                "base": 40,
                "intermedio": 60,
                "avanzado": 80,
                "arcano": 100
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 5
            },
            "grados": {
                "base": "100 metros.",
                "intermedio": "250 metros.",
                "avanzado": "500 metros.",
                "arcano": "1 kilómetro."
            },
            "mantenimiento": "5 / 5 / 5 / 10"
        },
        {
            "nombre": "Plagio",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Proporciona al mago la capacidad artística necesaria para efectuar una interpretación de algún tipo de composición musical, ya sea tocando un instrumento o cantando. El hechicero deberá conocer o haber escuchado, aunque sea de forma incompleta, la pieza que desea representar. Al hacerlo, el personaje tiene el equivalente a una habilidad de Música determinado por el grado del conjuro.",
            "zeon": {
                "base": 50,
                "intermedio": 70,
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
                "base": "120 Música.",
                "intermedio": "180 Música.",
                "avanzado": "240 Música.",
                "arcano": "280 Música."
            },
            "mantenimiento": "5 / 5 / 5 / 10"
        },
        {
            "nombre": "Mezzo Forte",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "Creando una nota musical discordante, el brujo desencadena una destructiva onda de sonido que destroza cualquier cosa sólida con la que se ponga en contacto. El ataque (ENE) tiene daño base muy bajo pero, en caso de causar daño, el defensor debe realizar un control de RF contra una dificultad igual a 10 veces la perdida de puntos de vida recibida (hasta un máximo de 240) o sufrir un daño adicional equivalente al nivel de fracaso. Por ejemplo, si este conjuro es lanzado en grado intermedio (daño base 20) y el ataque produce la perdida de 16 puntos de vida, el afectado deberá realizar un control de RF contra 160.",
            "zeon": {
                "base": 60,
                "intermedio": 90,
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
                "base": "Daño 10.",
                "intermedio": "Daño 20.",
                "avanzado": "Daño 30.",
                "arcano": "Daño 40."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Adagio",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Este conjuro crea una melodía cargada con fuertes emociones que penetran en todo aquel que las escuche al menos un asalto. Cualquiera que cumpla tal requisito, debe superar un control de RM o verse completamente imbuido por la emoción elegida por el brujo para la sinfonía. Si alguien escucha Adagio de manera parcial o logra cubrir en parte sus oídos, obtiene un bono de +40 al control de Resistencia. Adagio se escucha en un área alrededor del hechicero, dentro de la cual, el lanzador no puede escoger blancos.",
            "zeon": {
                "base": 100,
                "intermedio": 160,
                "avanzado": 220,
                "arcano": 280
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "120 RM / 20 metros de radio.",
                "intermedio": "140 RM / 50 metros de radio.",
                "avanzado": "160 RM / 100 metros de radio.",
                "arcano": "180 RM / 150 metros de radio."
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "nombre": "Allegro",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Crea la más hermosa melodía imaginable, que atonta y embelesa a quienes la escuchan. Todo aquel que se encuentre alrededor del hechicero debe superar cada dos asaltos una RM o quedará Fascinado, siendo incapaz de realizar acciones activas por su propia voluntad. Los objetivos incapaces de oír son inmunes a este hechizo, y si alguien escucha la música de manera parcial o logra cubrir en parte sus oídos, obtiene un bono de +40 al control de Resistencia.",
            "zeon": {
                "base": 100,
                "intermedio": 160,
                "avanzado": 220,
                "arcano": 280
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 7
            },
            "grados": {
                "base": "120 RM / 10 metros de radio.",
                "intermedio": "140 RM / 25 metros de radio.",
                "avanzado": "160 RM / 50 metros de radio.",
                "arcano": "180 RM / 100 metros de radio."
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "nombre": "Presstisimo",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este conjuro crea una frenética melodía que incrementa la velocidad de reacción de todo aquel que la escuche y sea designado por el lanzador. Los afectados que se encuentren cerca del hechicero obtienen de inmediato un bono a su Turno e incrementan su velocidad.",
            "zeon": {
                "base": 120,
                "intermedio": 180,
                "avanzado": 240,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 8
            },
            "grados": {
                "base": "10 metros de radio / +1 al Tipo de Movimiento / +30 al Turno.",
                "intermedio": "20 metros de radio / +2 al Tipo de Movimiento / +30 al Turno.",
                "avanzado": "30 metros de radio / +2 al Tipo de Movimiento / +40 al Turno.",
                "arcano": "40 metros de radio / +3 al Tipo de Movimiento / +50 al Turno."
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "nombre": "Fortísimo",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero obtiene un control absoluto sobre cualquier sonido que sea producido en el área de influencia determinada por el grado del conjuro, pudiendo alterarlo, incrementar su potencia o hacerlo completamente imperceptible. Por ejemplo, podría reunir pequeños murmullos ambientales para formar una agradable melodía o tergiversar las palabras de una persona. Salvo si el sonido como tal tiene presencia propia o es producido por un ser con Gnosis 40 o superior, no es posible de ningún modo evitar los efectos de este sortilegio.",
            "zeon": {
                "base": 120,
                "intermedio": 180,
                "avanzado": 240,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "10 metros de radio.",
                "intermedio": "25 metros de radio.",
                "avanzado": "50 metros de radio.",
                "arcano": "100 metros de radio."
            },
            "mantenimiento": "10 / 15 / 20 / 30"
        },
        {
            "nombre": "Marziale",
            "nivel": "84",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Crea una potente melodía que refuerza el aguante innato de aquellos que la escuchen y sean designados por el lanzador. Aquellos afectados que se encuentren alrededor del brujo obtienen diferentes bonos, descritos en los grados del conjuro. Los beneficios de este conjuro no se superponen, por lo que un individuo que se encuentre dentro de la zona de influencia de dos Marziale diferentes no aplica dos veces sus beneficios.",
            "zeon": {
                "base": 120,
                "intermedio": 180,
                "avanzado": 240,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "10 metros de radio / +2 a la TA / +20 RM.",
                "intermedio": "25 metros de radio / +3 a la TA / +20 RM y RF.",
                "avanzado": "50 metros de radio / +4 a la TA / +20 RM, RF y RP / Barrera de daño 50.",
                "arcano": "100 metros de radio / +5 a la TA / +30 RM, RF y RP / Barrera de daño 60."
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "nombre": "Anima",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Anima es un conjuro que carga una melodía de poder sobrenatural para penetrar automáticamente en el alma de todos cuanto la escuchen. Anima debe de ser lanzado en combinación con otro conjuro de clase Anímico, haciendo que dicho sortilegio se convierta en Automático y funcione sobre cualquiera que esté a menos de 50 metros del hechicero y escuche la melodía más de un asalto. La RM a superar es la misma de la del conjuro afectado por Anima, pero si alguien percibe la melodía de manera parcial o logra cubrir en parte sus oídos, obtiene un bono de +40 al control de RM.",
            "zeon": {
                "base": 300,
                "intermedio": 450,
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
                "base": "Afecta a conjuros de grado base.",
                "intermedio": "Afecta a conjuros de grado intermedio.",
                "avanzado": "Afecta a conjuros de grado avanzado.",
                "arcano": "Afecta a conjuros de grado arcano."
            },
            "mantenimiento": "5 / 10 / 15 / 20"
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

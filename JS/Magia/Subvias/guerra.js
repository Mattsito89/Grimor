// Sub-vía oficial extraída de Subvías.pdf.
export const subviaGuerra = {
    "id": "guerra",
    "nombre": "Guerra",
    "color": "#ef4444",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Esencia, Aire, Luz, Agua, Ilusión, Creación",
    "hechizos": [
        {
            "nombre": "Moral",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este grito provoca que los aliados del hechicero aumenten su espíritu combativo y se vuelvan inmunes a los efectos del miedo o el dolor. A efectos de juego, obtiene un bono a su habilidad secundaria Frialdad hasta que finalice el combate en el que se encuentran trabados o transcurran más de diez minutos.",
            "zeon": {
                "base": 60,
                "intermedio": 90,
                "avanzado": 120,
                "arcano": 30
            },
            "inteligenciaRequerida": {
                "base": 5,
                "intermedio": 8,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "+40 a Frialdad / 10 metros de radio.",
                "intermedio": "Base: +80 a Frialdad / 50 metros de radio.",
                "avanzado": "Base: +120 a Frialdad / 250 metros de radio.",
                "arcano": "Base: +180 a Frialdad / 500 metros de radio."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Ira Ancestral",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Despierta en los aliados del brujo un ansia de lucha que los convierte en guerreros imparables, bestias humanas llenas de furia sin par. El hechizo confiere un bono de +10 al ataque y provoca el estado de Ira en todo aquel aliado del lanzador que se encuentre dentro del radio de acción del sortilegio, más por suerte, los vínculos sobrenaturales limitan la desventaja de la rabia impidiendo a los afectados perder el control o atacarse los unos a los otros.",
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
                "base": "10 metros de radio.",
                "intermedio": "50 metros de radio.",
                "avanzado": "250 metros de radio.",
                "arcano": "500 metros de radio."
            },
            "mantenimiento": "5 / 10 / 10 / 15"
        },
        {
            "nombre": "Velocidad en la Batalla",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Canaliza el espíritu de batalla de los aliados, haciéndolos trabajar como un solo hombre y permitiéndoles anticiparse a las acciones de sus enemigos.",
            "zeon": {
                "base": 50,
                "intermedio": 90,
                "avanzado": 120,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "+10 al Turno / 10 metros de radio.",
                "intermedio": "+10 al Turno / 50 metros de radio.",
                "avanzado": "+20 al Turno / 250 metros de radio.",
                "arcano": "+20 al Turno / 500 metros de radio."
            },
            "mantenimiento": "5 / 10 / 15 / 15"
        },
        {
            "nombre": "Destrucción Desencadenada",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Incrementa la potencia destructiva de los aliados cercanos al personaje, otorgándoles a estos un bono al daño de todos sus ataques.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "+20 al Daño / 10 metros de radio.",
                "intermedio": "+20 al Daño / 50 metros de radio.",
                "avanzado": "+30 al Daño / 250 metros de radio.",
                "arcano": "+40 al Daño / 500 metros de radio."
            },
            "mantenimiento": "5 / 15 / 20 / 20"
        },
        {
            "nombre": "Protección Final",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Incrementa la protección y resistencia de los aliados cercanos al personaje, otorgándoles a estos un bono a sus Resistencias y Tipo de Armadura.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "+10 a todas las Resistencias / +1 TA / 10 metros de radio.",
                "intermedio": "+10 a todas las Resistencias / +2 TA / 50 metros de radio.",
                "avanzado": "+20 a todas las Resistencias / +2 TA / 250 metros de radio.",
                "arcano": "+30 a todas las Resistencias / +3 TA / 500 metros de radio."
            },
            "mantenimiento": "5 / 15 / 20 / 20"
        },
        {
            "nombre": "Marcha Implacable",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este hechizo permite a los compañeros del brujo marchar de forma incesante, resistiendo la fatiga y la furia de los elementos. A efectos de juego, proporciona a todos los aliados que se encuentren dentro del área de efecto del conjuro las habilidades del Ki Uso de la Energía Necesaria y Eliminación de Necesidades.",
            "zeon": {
                "base": 150,
                "intermedio": 200,
                "avanzado": 250,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 6
            },
            "grados": {
                "base": "10 metros de radio.",
                "intermedio": "50 metros de radio.",
                "avanzado": "100 metros de radio.",
                "arcano": "500 metros de radio."
            },
            "mantenimiento": "30 / 40 / 50 / 100 Diario."
        },
        {
            "nombre": "Campeón",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Canaliza el espíritu combativo del grupo en uno de sus guerreros, creando como resultado un luchador implacable e invencible. El hechizo otorga diferentes bonos a las habilidades de combate, siempre y cuando combata junto a sus compañeros. Sólo un individuo por cada 10 que compongan un grupo de batalla puede ser afectado por este sortilegio.",
            "zeon": {
                "base": 140,
                "intermedio": 180,
                "avanzado": 240,
                "arcano": 350
            },
            "inteligenciaRequerida": {
                "base": 12,
                "intermedio": 14,
                "avanzado": 16,
                "arcano": 10
            },
            "grados": {
                "base": "+10 a toda acción / +10 daño / +10 al Turno / +2 TA.",
                "intermedio": "+10 a toda acción / +20 daño / +20 al Turno / +3 TA.",
                "avanzado": "+20 a toda acción / +20 daño / +20 al Turno / +4 TA.",
                "arcano": "+30 a toda acción / +30 daño / +30 al Turno / +5 TA."
            },
            "mantenimiento": "15 / 15 / 20 / 30"
        },
        {
            "nombre": "Órdenes Precisas",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Permite al hechicero o a aquel sobre el que se lance el conjuro transmitir ordenes directamente a la mente de sus compañeros. Estos mensajes son automáticos, sin la necesidad de hablar con ellos o de formular largas frases o indicaciones que pueden ser escuchadas por personas indeseadas. El personaje puede elegir quienes le escuchan y quienes no, o incluso puede transmitir varias ordenes a la vez con un simple pensamiento.",
            "zeon": {
                "base": 200,
                "intermedio": 250,
                "avanzado": 300,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "Hasta 25 metros de radio.",
                "intermedio": "Hasta 100 metros de radio.",
                "avanzado": "Hasta 250 metros de radio.",
                "arcano": "Hasta 500 metros de radio."
            },
            "mantenimiento": "No."
        },
        {
            "nombre": "Hasta más Allá del Fin",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este hechizo lleva más allá del poder de los mortales el espíritu combativo de los aliados del brujo, permitiéndoles seguir adelante incluso en el umbral de la muerte. Todos sus aliados que se encuentren dentro del radio de acción del sortilegio duplican su aguante en puntos de vida negativos y no sufren ningún negativo por combatir en dicho estado. En caso de usar las reglas opcionales de entre la vida y la muerte, aplican un +40 a sus controles de RF.",
            "zeon": {
                "base": 250,
                "intermedio": 500,
                "avanzado": 750,
                "arcano": 1000
            },
            "inteligenciaRequerida": {
                "base": 14,
                "intermedio": 16,
                "avanzado": 18,
                "arcano": 20
            },
            "grados": {
                "base": "25 metros de radio.",
                "intermedio": "50 metros de radio.",
                "avanzado": "250 metros de radio.",
                "arcano": "500 metros de radio / Además de los efectos descritos, un personaje afectado por este hechizo puede seguir luchando en plenas facultados hasta dos asaltos después de haber muerto."
            },
            "mantenimiento": "25 / 50 / 75 / 100"
        },
        {
            "nombre": "Maestro de la Guerra",
            "nivel": "84",
            "accion": "Pasiva",
            "tipo": "Efecto.",
            "efecto": "El hechicero puede combatir físicamente con cualquier arma usando su habilidad de Proyección Mágica ofensiva y defensiva como si fuera habilidad de ataque y defensa. El límite máximo que puede alcanzar está determinado por el grado del conjuro.",
            "zeon": {
                "base": 200,
                "intermedio": 300,
                "avanzado": 400,
                "arcano": 500
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 18
            },
            "grados": {
                "base": "Hasta 200 de habilidad.",
                "intermedio": "Hasta 250 de habilidad.",
                "avanzado": "Hasta 300 de habilidad.",
                "arcano": "Sin límite alguno"
            },
            "mantenimiento": "10 / 15 / 20 / 25"
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

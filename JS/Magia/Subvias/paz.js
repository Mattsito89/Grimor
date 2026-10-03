// Sub-vía oficial extraída de Subvías.pdf.
export const subviaPaz = {
    "id": "paz",
    "nombre": "Paz",
    "color": "#22c55e",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Destrucción, Oscuridad, Fuego, Nigromancia, Ilusión",
    "hechizos": [
        {
            "nombre": "Escudo Salvador",
            "nivel": "4",
            "accion": "Pasiva",
            "tipo": "Defensa",
            "efecto": "Crea una barrera protectora que protege contra cualquier tipo de ataque. En el caso de que se utilice para cubrir a varios individuos contra un ataque en área, el conjuro permite proteger a tantos blancos como indique el grado del conjuro sin sufrir por ello daño adicional o aplicar un penalizador a la habilidad defensiva del lanzador.",
            "zeon": {
                "base": 50,
                "intermedio": 100,
                "avanzado": 160,
                "arcano": 240
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 8,
                "avanzado": 10,
                "arcano": 14
            },
            "grados": {
                "base": "El escudo tiene 300 puntos de Resistencia / Es capaz de proteger hasta a dos personas sin penalizador.",
                "intermedio": "El escudo tiene 900 puntos de Resistencia/ Es capaz de proteger hasta a cinco personas sin penalizador.",
                "avanzado": "El escudo tiene 1.500 puntos de Resistencia / Es capaz de proteger hasta a ocho personas sin penalizador.",
                "arcano": "El escudo tiene 3.000 puntos de Resistencia / Es capaz de proteger hasta a doce personas sin penalizador."
            },
            "mantenimiento": "5 / 15 / 20 / 25"
        },
        {
            "nombre": "Equilibrio Interior",
            "nivel": "14",
            "accion": "Pasiva",
            "tipo": "Efecto.",
            "efecto": "El hechicero o el objetivo designado por éste alcanza un nivel de paz interior que le hace inmune cualquier efecto que pueda desequilibrar su estado de ánimo.",
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
                "base": "El personaje se vuelve inmune a los estados psicológicos negativos.",
                "intermedio": "Como en grado base, pero el personaje obtiene además un +40 a sus Resistencias contra efectos desequilibrantes.",
                "avanzado": "Como en grado intermedio, pero el bono aplicable es de +80.",
                "arcano": "El personaje no puede ser afectado por ningún efecto que altere negativamente su conducta."
            },
            "mantenimiento": "15 / 20 / 25 / 30 Diario."
        },
        {
            "nombre": "Defensor",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Efecto.",
            "efecto": "Otorga un bono a la habilidad defensiva de un individuo al utilizar la maniobra de defensa total. Afecta a tantas personas como determine el lanzador, siempre y cuando la suma de sus presencias no supere lo que determine el grado del conjuro.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 140,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 6
            },
            "grados": {
                "base": "+20 a la habilidad defensiva / Presencia máxima 60.",
                "intermedio": "+20 a la habilidad defensiva / Presencia máxima 100.",
                "avanzado": "+30 a la habilidad defensiva / Presencia máxima 150.",
                "arcano": "+40 a la habilidad defensiva / Presencia máxima 250."
            },
            "mantenimiento": "10 / 10 / 15 / 20"
        },
        {
            "nombre": "Detectar Armonía",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Detección",
            "efecto": "El hechicero percibe las personas en el interior del radio del conjuro que tiene sentimientos pacíficos o violentos si estos no superan la RM determinada por el grado del sortilegio.",
            "zeon": {
                "base": 80,
                "intermedio": 100,
                "avanzado": 120,
                "arcano": 140
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "10 metros de radio / 100 RM.",
                "intermedio": "25 metros de radio / 120 RM.",
                "avanzado": "50 metros de radio / 140 RM.",
                "arcano": "100 metros de radio / 160 RM."
            },
            "mantenimiento": "10 / 10 / 15 / 15"
        },
        {
            "nombre": "Remanso de Paz",
            "nivel": "44",
            "accion": "Activo",
            "tipo": "Automático.",
            "efecto": "Este hechizo genera una zona en cuyo interior se pierde todo instinto agresivo. Cualquiera que penetre dentro debe de superar automáticamente un control de RM contra la dificultad determinada por el grado del conjuro o perderá toda actitud violenta. Una persona afectada por este conjuro no tiene derecho a repetir el control, salvo que sienta algo que pueda devolverle su actitud agresiva. Alguien que supere el control no vuelve a verse afectado por los efectos de Remanso de Paz mientras no salga de su zona de influencia. El área permanece estática en el lugar en el que fue lanzada.",
            "zeon": {
                "base": 160,
                "intermedio": 220,
                "avanzado": 280,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "10 metros de radio / 100 RM.",
                "intermedio": "25 metros de radio / 120 RM.",
                "avanzado": "50 metros de radio / 140 RM.",
                "arcano": "100 metros de radio / 160 RM."
            },
            "mantenimiento": "20 / 25 / 30 / 30 Diario"
        },
        {
            "nombre": "Signo de Paz",
            "nivel": "54",
            "accion": "Pasiva",
            "tipo": "Automático.",
            "efecto": "El hechicero cancela una acción de ataque que sea dirigida contra él. La condición para ser afectado es realizar un ataque que tenga como blanco al lanzador (incluso si hay otros individuos que también son afectados por el ataque). Para evitar sus efectos, es necesario superar una RM contra la dificultad indicada por el grado del conjuro. Un mismo ataque sólo puede ser afectado una vez por un conjuro de Signo de Paz.",
            "zeon": {
                "base": 100,
                "intermedio": 180,
                "avanzado": 260,
                "arcano": 340
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "RM 120.",
                "intermedio": "RM 160.",
                "avanzado": "RM 200.",
                "arcano": "RM 240."
            },
            "mantenimiento": "No."
        },
        {
            "nombre": "Defensa Absoluta",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Efecto.",
            "efecto": "Mientras el hechicero no realice ninguna acción ofensiva durante un asalto puede aplicar un bono a su Proyección Mágica defensiva.",
            "zeon": {
                "base": 50,
                "intermedio": 80,
                "avanzado": 110,
                "arcano": 140
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "+20 a la Proyección Mágica defensiva.",
                "intermedio": "+30 a la Proyección Mágica defensiva.",
                "avanzado": "+40 a la Proyección Mágica defensiva.",
                "arcano": "+50 a la Proyección Mágica defensiva."
            },
            "mantenimiento": "10 / 10 / 15 / 15"
        },
        {
            "nombre": "Alas de Salvación",
            "nivel": "74",
            "accion": "Pasiva",
            "tipo": "Defensa",
            "efecto": "Crea una barrera protectora que protege contra cualquier tipo de ataque. El conjuro permite cubrir todos los individuos que estén dentro del radio de acción del sortilegio sin sufrir por ello daño adicional o aplicar un penalizador a la habilidad defensiva del lanzador.",
            "zeon": {
                "base": 150,
                "intermedio": 250,
                "avanzado": 350,
                "arcano": 450
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "El escudo tiene 500 puntos de Resistencia / 5 metros de radio.",
                "intermedio": "El escudo tiene 1.200 puntos de Resistencia / 15 metros de radio.",
                "avanzado": "El escudo tiene 2.500 puntos de Resistencia / 25 metros de radio.",
                "arcano": "El escudo tiene 5.000 puntos de Resistencia / 50 metros de radio."
            },
            "mantenimiento": "15 / 25 / 35 / 45"
        },
        {
            "nombre": "Paz Absoluta",
            "nivel": "84",
            "accion": "Activa",
            "tipo": "Anímico.",
            "efecto": "El objetivo de este conjuro queda imbuido por una energía de la paz más pura, que le impedirá volver a entablar actos violentos de ningún tipo. Alguien que falle la RM determinada por el grado del sortilegio deja de poder realizar acciones ofensivas contra nadie de un modo consciente. Dado que su propia esencia violenta desaparece por completo, este conjuro no tiene mantenimiento.",
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
                "base": "RM 120.",
                "intermedio": "RM 140.",
                "avanzado": "RM 160.",
                "arcano": "RM 180."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Pax In Terrax",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Automático.",
            "efecto": "Al lanzar este conjuro se crea una zona absoluta de no violencia, donde no puede haber conflictos o guerras de ningún tipo. Todo individuo que entre en ella debe de superar automáticamente una RM contra dejará de concebir los conceptos de violencia o enfrentamiento, y siendo incapaz de realizar acciones violentas. Una persona que falle la resistencia no tiene derecho a repetirla mientras siga dentro del área de acción del conjuro, mientras que aquellos que la superen deberán volver a realizar el control cada vez que traten de realizar una acción violenta en el interior de la zona.",
            "zeon": {
                "base": 350,
                "intermedio": 600,
                "avanzado": 1000,
                "arcano": 1600
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "1 kilómetro de radio / 120 RM.",
                "intermedio": "5 kilómetros de radio / 140 RM.",
                "avanzado": "15 kilómetros de radio / 160 RM.",
                "arcano": "50 kilómetros de radio / 180 RM."
            },
            "mantenimiento": "35 / 60 / 100 / 160 Diario"
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

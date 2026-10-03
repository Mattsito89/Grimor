// Sub-vía oficial extraída de Subvías.pdf.
export const subviaNobleza = {
    "id": "nobleza",
    "nombre": "Nobleza",
    "color": "#f59e0b",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Destrucción, Fuego, Tierra, Nigromancia, Ilusión",
    "hechizos": [
        {
            "nombre": "Rostro",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Elimina las imperfecciones externas que puedan afectar el rostro del blanco del conjuro, cubriendo dichos defectos con una suave capa de maquillaje sobrenatural y aplicando un leve efecto curativo que elimina cualquier afección cutánea y realza el color. El personaje obtiene un aspecto vital y saludable.",
            "zeon": {
                "base": 30,
                "intermedio": 50,
                "avanzado": 80,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 5
            },
            "grados": {
                "base": "Las habilidades descritas.",
                "intermedio": "Como en grado base, pero el personaje incrementa un punto su Apariencia (hasta un máximo de 9) y le hace parecer algunos años más joven.",
                "avanzado": "Como en grado intermedio, pero incrementa dos puntos su Apariencia (hasta un máximo de 10).",
                "arcano": "Como en grado Avanzado, pero incrementa tres puntos su Apariencia (hasta un máximo de 10)."
            },
            "mantenimiento": "5 / 5 / 5 / 10 Diario"
        },
        {
            "nombre": "Perfume",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Efecto / Automático.",
            "efecto": "Este conjuro modifica el olor corporal del blanco designado por el hechicero, transformándolo en un fragante aroma, suave y agradable al olfato, que evoca placenteras sensaciones a quienes lo aspiran en un área determinada por el grado del conjuro.",
            "zeon": {
                "base": 40,
                "intermedio": 60,
                "avanzado": 90,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 5,
                "intermedio": 8,
                "avanzado": 10,
                "arcano": 12
            },
            "grados": {
                "base": "Las habilidades descritas / 20 metros de radio.",
                "intermedio": "Como en grado base, pero siempre que alguien sobre quien pese este conjuro deba realizar un control de Estilo en el que pueda influir su olor corporal, incrementa automáticamente un grado el nivel de dificultad alcanzado / 30 metros de radio.",
                "avanzado": "Como en grado intermedio, pero incrementa automáticamente dos grados el nivel de dificultad alcanzado / 40 metros de radio.",
                "arcano": "Como en grado avanzado, pero todo aquel que huela el perfume durante más de 5 asaltos debe de realizar un control de RM contra 100 o quedará automáticamente en estado de fascinación, quedando atontado de placer y siendo más receptible a las palabras del blanco del conjuro / 50 metros de radio."
            },
            "mantenimiento": "5 / 5 / 5 / 10 Diario"
        },
        {
            "nombre": "Musa",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Proporciona al lanzador la inspiración necesaria para efectuar una magistral interpretación de alguna forma de arte tradicional como puede ser tocar un instrumento, cantar, bailar, pintar, escribir, componer… Este conjuro otorga al brujo o bien una habilidad base en la Habilidad Secundaria que pone a prueba (Música, Baile o Arte), o bien la mitad de dicho valor como bono a su propia habilidad. Aunque no tiene mantenimiento, los efectos de este conjuro perduran el tiempo suficiente para completar la obra iniciada, siempre y cuando esta no tenga una duración superior a un día.",
            "zeon": {
                "base": 60,
                "intermedio": 90,
                "avanzado": 120,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "120 de habilidad.",
                "intermedio": "180 de habilidad.",
                "avanzado": "240 de habilidad.",
                "arcano": "280 de habilidad."
            },
            "mantenimiento": "No."
        },
        {
            "nombre": "Guardarropa",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Transforma temporalmente las ropas del blanco del conjuro en otras de una calidad exquisita con la capacidad de permanecer limpias y planchadas en todo momento. Las manchas y salpicaduras resbalarán por la tela sin causar la menor imperfección al tejido y cualquier desgarro será zurcido sobrenaturalmente en cuestión de segundos.",
            "zeon": {
                "base": 90,
                "intermedio": 120,
                "avanzado": 150,
                "arcano": 60
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "Las habilidades descritas.",
                "intermedio": "Como en grado base, pero mientras lleve las ropas el personaje obtiene un bono de +50 a su habilidad secundaria Estilo.",
                "avanzado": "Como en grado intermedio, Las ropas varían de forma y color dependiendo de la situación y el momento, pero manteniendo en todo instante una apariencia gloriosa e impresionante.",
                "arcano": "Como en grado avanzado, pero las ropas otorgan una TA 4 contra toda clase de ataque, y se reparan automáticamente en caso de sufrir cualquier clase de daño que no sea de naturaleza sobrenatural."
            },
            "mantenimiento": "5 / 5 / 5 / 10 Diario"
        },
        {
            "nombre": "Conquistar corazones",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Este conjuro altera la percepción de las personas haciéndoles sentir que el lanzador o el sujeto designado por éste es un ser de belleza y sensualidad embriagadoras. Cualquiera sexualmente compatible con el personaje que se beneficia de sus efectos deberá superar un control de RM o RP, o quedará automáticamente embelesado, demostrando un claro interés conforme a su naturaleza, personalidad y manera de ser. Además, el individuo sobre quien recae este hechizo obtiene un bono de +200 a Persuasión (Seducción) contra cualquiera que no haya podido superar el control. La condición para ser afectado por el sortilegio es dedicar verdadera atención a la apariencia del individuo que se beneficia del conjuro.",
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
                "base": "120 RM o RP.",
                "intermedio": "160 RM o RP.",
                "avanzado": "200 RM o RP.",
                "arcano": "240 RM o RP."
            },
            "mantenimiento": "5 / 10 / 10 / 15 Diario"
        },
        {
            "nombre": "Conversación Agradable",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Permite percibir los pensamientos superficiales e intereses más comunes de un individuo para poder mantener una conversación que sea agradable o entretenida para él. El afectado puede resistirse realizando un control de RM o RP. En caso de fallar, el mago obtiene un bono de +200 a todas las tiradas de Estilo y Persuasión dirigidas a fascinar al objetivo y arrastrarlo a una conversación intrascendente. La condición para que el conjuro funcione es estar conversando al menos medio minuto con una persona que no sea abiertamente hostil. Aunque no tiene mantenimiento, el bono se mantiene siempre y cuando la conversación no se detenga.",
            "zeon": {
                "base": 80,
                "intermedio": 100,
                "avanzado": 120,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "120 RM o RP.",
                "intermedio": "160 RM o RP.",
                "avanzado": "200 RM o RP.",
                "arcano": "240 RM o RP."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Grandeza",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Este conjuro cubre al hechicero de un aire de grandeza, proporcionándole una poderosa autoridad que intimida a todos aquellos acostumbrados a obedecer órdenes. Cualquiera que se encuentre en un área de 5 metros alrededor de él deberá realizar una tirada de RM o RP, o se sentirán impelidos a complacerle, tratándolo con el respeto y deferencia debidos a un superior; un soldado no hará preguntas, un posadero le ofrecerá su mejor mesa y los criados se arrodillarán a su paso respondiendo al más mínimo deseo. Grandeza no tiene efectos sobre individuos que tengan una marcada actitud hostil contra el lanzador, quienes le conozcan y sientan que son sus iguales o superiores, o aquellos seres que, simplemente, consideren que no podrían obedecer al brujo bajo ninguna circunstancia. Los afectados pueden repetir el control únicamente cuando el lanzador haga alguna acción tan contraria a razón que estos puedan replantearse su sumisión hacia él.",
            "zeon": {
                "base": 80,
                "intermedio": 100,
                "avanzado": 120,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "120 RM o RP.",
                "intermedio": "160 RM o RP.",
                "avanzado": "200 RM o RP.",
                "arcano": "240 RM o RP."
            },
            "mantenimiento": "10 / 10 / 15 / 15"
        },
        {
            "nombre": "Presencia Absoluta",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Este sortilegio hace que cualquier individuo en un radio alrededor del hechicero centre por completo su atención en él, siendo incapaz de fijarse o concentrarse en otra persona que no sea el brujo. Quienquiera que intente realizar una actividad que no esté centrada en el hechicero recibe automáticamente un penalizador de -40 a toda acción (-120 en caso de estar relacionada con habilidades perceptivas). La condición para ser afectado por este conjuro es simplemente estar en el interior del área designada y no superar un control de RM o RP.",
            "zeon": {
                "base": 120,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "120 RM o RP / 20 metros de radio.",
                "intermedio": "160 RM o RP / 50 metros de radio.",
                "avanzado": "200 RM o RP / 100 metros de radio.",
                "arcano": "240 RM o RP / 150 metros de radio."
            },
            "mantenimiento": "10 / 10 / 15 / 20"
        },
        {
            "nombre": "Perfección",
            "nivel": "84",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El blanco del conjuro altera su complexión física adquiriendo automáticamente una apariencia perfecta.",
            "zeon": {
                "base": 120,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "El objetivo obtiene Apariencia 10 y un bono de +100 a Estilo, Persuasión, Intimidar y Liderazgo.",
                "intermedio": "Como en grado base, pero sus heridas desaparecen siempre sin dejar marca o cicatriz, incrementando en +3 su nivel de regeneración base.",
                "avanzado": "Como en grado intermedio, pero el bono a Estilo, Persuasión, Intimidar y Liderazgo aumenta a +200.",
                "arcano": "Como en grado avanzado, pero el personaje obtiene un bono de +1 a todos sus atributos."
            },
            "mantenimiento": "15 / 15 / 20 / 25 Diario"
        },
        {
            "nombre": "El Rey del Mundo",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero emplea la magia para divinizar sus capacidades sociales, convirtiéndose en el centro de atención y veneración de todos cuantos le rodean. Cualquiera que se encuentre en un radio de él debe superar automáticamente un control de RM o considerará al hechicero como su maestro e ideal; el culmen de toda su admiración. El brujo no tendrá verdadero control sobre los afectados, quienes seguirán comportándose como correspondería a su personalidad, pero todos tratarán de satisfacer, ayudar y buscar la aprobación del lanzador como si fueran sus leales seguidores.",
            "zeon": {
                "base": 300,
                "intermedio": 450,
                "avanzado": 500,
                "arcano": 700
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "500 metros de radio / 120 RM.",
                "intermedio": "1 kilómetro de radio / 160 RM.",
                "avanzado": "2 kilómetros de radio / 200 RM.",
                "arcano": "5 kilómetros de radio / 240 RM."
            },
            "mantenimiento": "15 / 15 / 20 / 25 Diario"
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

// =====================================================
// VÍA: LIBRE ACCESO
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaLibreAcceso = {
    id: "libre-acceso",
    nombre: "Libre Acceso",
    color: "#64748b",
    hechizos: [
    {
        "nombre": "Crear Llamas",
        "nivel": "1-10",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea intensidades de fuego en una materia que sea naturalmente inflamable. Si prende, no será necesario mantener el conjuro.",
        "zeon": {
            "base": 40,
            "intermedio": 80,
            "avanzado": 110,
            "arcano": 130
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "1 intensidad.",
            "intermedio": "3 intensidades.",
            "avanzado": "6 intensidades.",
            "arcano": "9 intensidades."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "viasCerradas": "Agua"
    },
    {
        "nombre": "Mover Objetos",
        "nivel": "1-10",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro mueve artefactos inorgánicos sin la necesidad de que exista contacto físico con ellos, otorgándoles un Tipo de Vuelo 10. El peso máximo es determinado por el grado del conjuro.",
        "zeon": {
            "base": 30,
            "intermedio": 70,
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
            "base": "10 kilogramos.",
            "intermedio": "50 kilogramos.",
            "avanzado": "100 kilogramos.",
            "arcano": "150 kilogramos."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "viasCerradas": "Destrucción y Tierra"
    },
    {
        "nombre": "Crear Música",
        "nivel": "1-10",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea una melodía audible para todos aquellos que se encuentren en el radio de acción del hechizo. La calidad musical de la composición será realizada con el equivalente a una habilidad final en Música determinada por el grado del conjuro. Sólo puede reproducir temas que el lanzador conozca, aunque sea de un modo vago.",
        "zeon": {
            "base": 50,
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
            "base": "10 metros de radio / 80 en Música.",
            "intermedio": "50 metros de radio / 120 en Música.",
            "avanzado": "150 metros de radio / 180 en Música.",
            "arcano": "250 metros de radio / 240 en Música."
        },
        "mantenimiento": "5 / 5 / 5 / 10",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Aseamiento",
        "nivel": "1-10",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Elimina cualquier impureza física menor (como suciedad, mal olor…), en el cuerpo y ropas del objetivo del conjuro. También puede ser utilizado sobre lugares u objetos para sanearlos, siempre que la presencia de estos no supere a lo que determina el grado del conjuro.",
        "zeon": {
            "base": 30,
            "intermedio": 60,
            "avanzado": 100,
            "arcano": 140
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "Presencia máxima 40.",
            "intermedio": "Presencia máxima 80.",
            "avanzado": "Presencia máxima 120.",
            "arcano": "Presencia máxima 140."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Saltar",
        "nivel": "1-10",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El individuo afectado por este hechizo aumenta sobrenaturalmente su capacidad de saltar. El conjuro añade un bono a la base de la habilidad secundaria Saltar.",
        "zeon": {
            "base": 50,
            "intermedio": 80,
            "avanzado": 100,
            "arcano": 140
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "+50 a Saltar.",
            "intermedio": "+100 a Saltar.",
            "avanzado": "+150 a Saltar / Permite alcanzar la dificultad de Inhumano en los controles.",
            "arcano": "+200 a Saltar/ Permite alcanzar la dificultad de Zen en los controles."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "viasCerradas": "Tierra"
    },
    {
        "nombre": "Apertura",
        "nivel": "1-10",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite abrir cualquier puerta cerrada utilizando una habilidad final en Cerrajería determinada por el grado del conjuro.",
        "zeon": {
            "base": 30,
            "intermedio": 70,
            "avanzado": 100,
            "arcano": 140
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "80 en Cerrajería.",
            "intermedio": "140 en Cerrajería.",
            "avanzado": "240 en Cerrajería.",
            "arcano": "280 en Cerrajería."
        },
        "mantenimiento": "No",
        "viasCerradas": "Destrucción y Fuego"
    },
    {
        "nombre": "Atar",
        "nivel": "1-10",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro hace que cuerdas, cadenas o cualquier tipo de filamento cuya naturaleza le permita ser atado, se anuden con una habilidad final en Trucos de Manos determinada por el grado del conjuro. El hechicero también puede ordenar a las sogas que aten a un sujeto, en cuyo caso, el blanco deberá defenderse contra un ataque automático con una Habilidad final equivalente a la habilidad de Trucos de Manos del conjuro La Fuerza de la sujeción dependerá del material usado. Como referencia, una cuerda muy gruesa tendría una Fuerza 10, mientras que unas cadenas emplearían un 12. Cabe aclarar que las sogas no son creadas por el sortilegio.",
        "zeon": {
            "base": 40,
            "intermedio": 80,
            "avanzado": 120,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "120 en Trucos de Manos.",
            "intermedio": "140 en Trucos de Manos.",
            "avanzado": "180 en Trucos de Manos.",
            "arcano": "240 en Trucos de Manos."
        },
        "mantenimiento": "No",
        "viasCerradas": "Destrucción e Ilusión"
    },
    {
        "nombre": "Detección de Magia",
        "nivel": "1-10",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El hechicero detecta automáticamente cualquier fuente de magia a su alrededor. Si está oculta, emplea una habilidad de Valoración Mágica final determinada por el grado del conjuro para detectarla.",
        "zeon": {
            "base": 40,
            "intermedio": 80,
            "avanzado": 120,
            "arcano": 150
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "25 metros de radio / 140 Valoración mágica.",
            "intermedio": "100 metros de radio / 180 Valoración mágica.",
            "avanzado": "200 metros de radio / 200 Valoración mágica.",
            "arcano": "300 metros de radio / 240 Valoración mágica."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "viasCerradas": "Oscuridad"
    },
    {
        "nombre": "Detener Caída",
        "nivel": "1-10",
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Anula los efectos de una caída desde gran altura. En juego, suprime completamente el impacto sufrido al caer de una distancia elevada, o lo reduce equivalentemente en mayores distancias. Puede afectar a varios blancos, siempre que la suma de sus presencias no superen lo que determina el grado del conjuro.",
        "zeon": {
            "base": 40,
            "intermedio": 80,
            "avanzado": 160,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "50 metros de caída / Presencia máxima 60.",
            "intermedio": "150 metros de caída / Presencia máxima 160.",
            "avanzado": "500 metros de caída / Presencia máxima 240.",
            "arcano": "Anula los efectos de una caída desde cualquier distancia / Presencia máxima 320."
        },
        "mantenimiento": "5 / 15 / 20 / 25",
        "viasCerradas": "Tierra"
    },
    {
        "nombre": "Deshacer Escritura",
        "nivel": "1-10",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El conjuro hace desaparecer cierta cantidad de caracteres de texto sobre un objeto o superficie. No destruye la materia sobre la que se haya escrito, sino que elimina las letras o caracteres. Por ejemplo, en una hoja de papel desaparecería la tinta, mientras que en un grabado se rellenaría la piedra.",
        "zeon": {
            "base": 40,
            "intermedio": 80,
            "avanzado": 120,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "Presencia máxima del objeto 30 / Hace desaparecer 500 caracteres de texto.",
            "intermedio": "Presencia máxima del objeto 60 / Hace desaparecer 5.000 caracteres de texto.",
            "avanzado": "Presencia máxima del objeto 90 / Hace desaparecer 50.000 caracteres de texto.",
            "arcano": "Presencia máxima del objeto 120 / Hace desaparecer 250.000 caracteres de texto."
        },
        "mantenimiento": "No",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Mensaje Estático",
        "nivel": "1-10",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Marca un lugar u objeto con un mensaje escrito. El hechicero podrá hacer que aparezca y desaparezca a voluntad, incluso si no está presente (aunque no por ello sabe si hay alguien allí para leerlo).",
        "zeon": {
            "base": 30,
            "intermedio": 70,
            "avanzado": 120,
            "arcano": 180
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "Máximo de 50 palabras.",
            "intermedio": "Máximo de 150 palabras.",
            "avanzado": "Máximo de 250 palabras.",
            "arcano": "Máximo de 500 palabras."
        },
        "mantenimiento": "5 / 10 / 15 / 20 Diario",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Cambiar de Color",
        "nivel": "1-10",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro cambia el color de una materia, objeto o incluso persona cuya presencia no sea superior a lo que determina el grado del conjuro. Para resistirse, hace falta superar una RM. Alguien afectado no tiene derecho a una nueva resistencia mientras el conjuro se mantenga.",
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
            "base": "Presencia máxima 40 / RM 100.",
            "intermedio": "Presencia máxima 60 / RM 120.",
            "avanzado": "Presencia máxima 80 / RM 140.",
            "arcano": "Presencia máxima 100 / RM 160."
        },
        "mantenimiento": "5 / 5 / 5 / 10 Diario",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Crear Sonidos",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea un sonido en un lugar determinado.",
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
            "base": "A 50 metros.",
            "intermedio": "A 200 metros.",
            "avanzado": "A 500 metros.",
            "arcano": "A 1 kilómetro."
        },
        "mantenimiento": "5 / 10 / 15 / 20",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Recrear Imagen",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Recrea la imagen de algo que el hechicero ha visto con anterioridad. La aparición se trata de un holograma translúcido y sin sustancia, que permanece inmóvil en el lugar donde es creado.",
        "zeon": {
            "base": 40,
            "intermedio": 70,
            "avanzado": 100,
            "arcano": 130
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "Imagen de 1 metro cuadrado.",
            "intermedio": "Imagen de 5 metros cuadrado.",
            "avanzado": "Imagen de 10 metros cuadrado.",
            "arcano": "Imagen de 15 metros cuadrado / La imagen tiene un mayor grado de realismo, por lo que cualquiera que lo vea debe superar un Advertir contra Muy Difícil o Buscar contra Medio para darse cuenta de que no es real."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Encantar",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga a un objeto o lugar el carácter de cuerpo sobrenatural. La sustancia afectada será material para seres intangibles y conjuros. Si, por ejemplo, es lanzado sobre un arma, será capaz de dañar a seres inmateriales (empleando la presencia del objeto), y una pared encantada no podrá ser traspasada por seres etéreos o efectos místicos. Permite afectar a multitud de objetos, siempre y cuando la suma de sus presencias no supere el valor indicado por el conjuro.",
        "zeon": {
            "base": 50,
            "intermedio": 80,
            "avanzado": 110,
            "arcano": 130
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "Presencia máxima 40.",
            "intermedio": "Presencia máxima 60.",
            "avanzado": "Presencia máxima 90.",
            "arcano": "Presencia máxima 120."
        },
        "mantenimiento": "5 / 5 / 10 / 10 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Respirar Líquidos",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Confiere la capacidad de respirar en el interior de cualquier líquido, como si se tratase de aire. Se puede afectar a varios sujetos, siempre que la suma de sus presencias no supere el valor indicado por el conjuro.",
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
            "base": "Presencia máxima 60.",
            "intermedio": "Presencia máxima 100.",
            "avanzado": "Presencia máxima 200.",
            "arcano": "Presencia máxima 320."
        },
        "mantenimiento": "5 / 10 / 10 / 15 Diario",
        "viasCerradas": "Tierra y Fuego"
    },
    {
        "nombre": "Trepar",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro aumenta sobrenaturalmente la capacidad de escalar de un individuo, añadiendo un bono a la base de su habilidad secundaria Trepar.",
        "zeon": {
            "base": 50,
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
            "base": "+50 a Trepar.",
            "intermedio": "+100 a Trepar.",
            "avanzado": "+150 a Trepar / Permite alcanzar la dificultad de Inhumano en los controles.",
            "arcano": "+200 a Trepar / Permite alcanzar la dificultad de Zen en los controles."
        },
        "mantenimiento": "5 / 10 / 15 / 20",
        "viasCerradas": "Aire"
    },
    {
        "nombre": "Niebla",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Forma niebla con una intensidad a discreción del lanzador. Permanecerá estática donde fue lanzada.",
        "zeon": {
            "base": 60,
            "intermedio": 120,
            "avanzado": 180,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "100 metros de radio.",
            "intermedio": "250 metros de radio.",
            "avanzado": "500 metros de radio.",
            "arcano": "1 kilómetro de radio."
        },
        "mantenimiento": "10 / 20 / 20 / 25 Diario",
        "viasCerradas": "Fuego"
    },
    {
        "nombre": "Zona Resbaladiza",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Encanta un área estática sobre la cual es tan fácil resbalar como sobre una zona de hielo mojado. Pasar lentamente por ella sin caer requiere una tirada de Atletismo o Acrobacias de Difícil, mientras que corriendo la dificultad aumenta a Absurdo.",
        "zeon": {
            "base": 50,
            "intermedio": 100,
            "avanzado": 160,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "5 metros de radio.",
            "intermedio": "25 metros de radio.",
            "avanzado": "50 metros de radio.",
            "arcano": "100 metros de radio / Pasar lentamente sin caer requiere un control contra Muy Difícil, y corriendo contra Imposible."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "viasCerradas": "Fuego"
    },
    {
        "nombre": "Reparación",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Repara completamente un objeto inorgánico. No recrea partes perdidas, por lo que es necesario conservar los fragmentos o tener la materia prima necesaria para su reparación. Puede lanzarse sobre cualquier cosa, desde armas a edificios, mientras su presencia no sea superior a lo que determine el grado del conjuro.",
        "zeon": {
            "base": 60,
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
            "base": "Presencia máxima 30.",
            "intermedio": "Presencia máxima 50.",
            "avanzado": "Presencia máxima 70.",
            "arcano": "Presencia máxima 90."
        },
        "mantenimiento": "No",
        "viasCerradas": "Destrucción e Ilusión"
    },
    {
        "nombre": "Pasar Sin Dejar Marca",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Elimina los rastros físicos que deja tras de sí una persona. Para seguir las huellas de alguien sobre quien está activo este conjuro, será necesario alcanzar una dificultad de Imposible en Rastrear. Puede afectar a tantos blancos como se desee, mientras la suma de sus presencias no supere el valor determinado por el grado del conjuro.",
        "zeon": {
            "base": 60,
            "intermedio": 140,
            "avanzado": 220,
            "arcano": 340
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "Presencia máxima 120.",
            "intermedio": "Presencia máxima 180.",
            "avanzado": "Presencia máxima 240 / La dificultad para rastrearle aumenta Inhumano.",
            "arcano": "Presencia máxima 320 / La dificultad para rastrearle aumenta Zen."
        },
        "mantenimiento": "10 / 15 / 25 / 35 Diario",
        "viasCerradas": "Luz"
    },
    {
        "nombre": "Atraer Alimañas Menores",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Invoca una masa de alimañas (sapos, lagartijas, avispas, insectos…) hasta el lugar que designe el hechicero. Su aparición no es automática, pero son atraídas de inmediato desde la zona más cercana a donde se encuentran. El sortilegio no otorga ningún control sobre los seres. El lanzador determina que clase de alimañas son las que atrae.",
        "zeon": {
            "base": 30,
            "intermedio": 80,
            "avanzado": 140,
            "arcano": 180
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "Atrae hasta a quinientos seres.",
            "intermedio": "Atrae hasta diez mil seres.",
            "avanzado": "Atrae hasta cien mil seres.",
            "arcano": "Atrae a varios millones de seres."
        },
        "mantenimiento": "5 / 5 / 10 / 15",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Bolsa Infinita",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite a una envoltura, bolsa o baúl, cargar materiales que excedan su capacidad de contención, sin aumentar su peso. El mago siempre es capaz de extraer lo que quiere, aunque los demás sacarán las cosas al azar. No se pueden introducir objetos que no entren físicamente en el interior, como una lanza en una pequeña bolsa. Si el conjuro finaliza, la carga reaparecerá, pudiendo incluso reventar el contenedor.",
        "zeon": {
            "base": 40,
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
            "base": "x10 su capacidad.",
            "intermedio": "x30 su capacidad.",
            "avanzado": "x40 su capacidad.",
            "arcano": "x50 su capacidad."
        },
        "mantenimiento": "5 / 10 / 10 / 15 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Inhumanidad",
        "nivel": "10-20",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Los afectados por este conjuro podrán alcanzar la dificultad de Inhumano en cualquier campo o materia. Ten en cuenta que ello no quiere decir que las acciones realizadas por dichos sujetos sean automáticamente inhumanas, sino que podrán lograrlas si sus tiradas de habilidad o sus atributos se lo permiten.",
        "zeon": {
            "base": 50,
            "intermedio": 80,
            "avanzado": 110,
            "arcano": 150
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "Permite alcanzar Inhumanidad en una habilidad determinada.",
            "intermedio": "Permite alcanzar Inhumanidad en cualquier habilidad.",
            "avanzado": "Permite alcanzar Inhumanidad en cualquier habilidad y Zen en una habilidad determinada.",
            "arcano": "Permite alcanzar Zen en cualquier habilidad."
        },
        "mantenimiento": "5 / 5 / 10 / 15 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Nubes",
        "nivel": "20-30",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Forma una espesa capa de nubes. El hechicero tiene completo control sobre ellas, pudiendo moverlas o darles la forma que desee.",
        "zeon": {
            "base": 80,
            "intermedio": 140,
            "avanzado": 200,
            "arcano": 260
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "100 metros de radio.",
            "intermedio": "250 metros de radio. a",
            "avanzado": "500 metros de radio.",
            "arcano": "1 kilómetro de radio."
        },
        "mantenimiento": "10 / 15 / 20 / 30 Diario",
        "viasCerradas": "Fuego y Tierra"
    },
    {
        "nombre": "Causar Miedo",
        "nivel": "20-30",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Los afectados que se encuentren en un radio alrededor del hechicero serán presos de un terrible miedo mágico si no superan una RM. Aquellos que fallen el control temerán al lanzador, quedando sometidos al estado de Miedo.",
        "zeon": {
            "base": 100,
            "intermedio": 120,
            "avanzado": 140,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "5 metros de radio / RM 100.",
            "intermedio": "15 metros de radio / RM 120.",
            "avanzado": "25 metros de radio / RM 140.",
            "arcano": "50 metros de radio / RM 160."
        },
        "mantenimiento": "10 / 15 / 15 / 20",
        "viasCerradas": "Luz"
    },
    {
        "nombre": "Protección Mágica",
        "nivel": "20-30",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga una armadura contra todos los tipos de ataques, salvo energía. Puede combinarse con cualquier otra protección como capa adicional, pero no causa penalizadores especiales al turno.",
        "zeon": {
            "base": 60,
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
            "base": "TA 2.",
            "intermedio": "TA 4.",
            "avanzado": "TA 6.",
            "arcano": "TA 8."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Escudo Mágico",
        "nivel": "20-30",
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Crea un escudo mágico que protege al hechicero frente a cualquier tipo de ataque, incluyendo los de carácter sobrenatural.",
        "zeon": {
            "base": 60,
            "intermedio": 120,
            "avanzado": 180,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "300 puntos de resistencia.",
            "intermedio": "1.000 puntos de resistencia.",
            "avanzado": "2.000 puntos de resistencia.",
            "arcano": "3.000 puntos de resistencia."
        },
        "mantenimiento": "10 / 20 / 20 / 25",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Celeridad",
        "nivel": "20-30",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Eleva el movimiento de un sujeto, al igual que le proporciona un bono a su turno. Los valores que hagan aumentar el Tipo de Movimiento por encima de 12 quedan reducidos a la mitad.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 160,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "+1 al Tipo de movimiento / +20 al turno.",
            "intermedio": "+2 al Tipo de movimiento / +40 al turno.",
            "avanzado": "+4 al Tipo de movimiento / +60 al turno.",
            "arcano": "+6 al Tipo de movimiento / +80 al turno."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "viasCerradas": "Tierra"
    },
    {
        "nombre": "Serenidad",
        "nivel": "20-30",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Causa una sensación de tranquilidad y paz sobre el blanco del conjuro, haciéndolo propenso a calmarse incluso si se encuentra lleno de ira o aterrorizado. Este conjuro anula cualquier estado de miedo, terror o ira que padezca el sujeto afectado, salvo si son de origen sobrenatural.",
        "zeon": {
            "base": 50,
            "intermedio": 70,
            "avanzado": 100,
            "arcano": 130
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "RM 120.",
            "intermedio": "RM 140.",
            "avanzado": "RM 160.",
            "arcano": "RM 180."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "viasCerradas": "Fuego y Oscuridad"
    },
    {
        "nombre": "Red",
        "nivel": "20-30",
        "accion": "Activa",
        "tipo": "Efecto / Ataque",
        "efecto": "Este sortilegio crea unas fibras mágicas de gran densidad, que actúan como una red muy pegajosa. Sus usos quedan a disposición del hechicero: bloquear una zona, lanzarla directamente sobre individuos… Presa con Fuerza 10 a cualquier individuo que la toque y aguanta como un ser con acumulación empleando TA 4. Al ser una sustancia de naturaleza mística, será dañada únicamente por ataques sobrenaturales o calor.",
        "zeon": {
            "base": 60,
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
            "base": "3 metros cuadrados / 500 Puntos de vida.",
            "intermedio": "6 metros cuadrados / 750 Puntos de vida.",
            "avanzado": "9 metros cuadrados / 1.000 Puntos de vida.",
            "arcano": "12 metros cuadrados / 1.500 Puntos de vida / Presa con Fuerza 12."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Comprensión de Idiomas",
        "nivel": "20-30",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro permite comprender temporalmente un lenguaje desconocido, tanto si es escrito como oral.",
        "zeon": {
            "base": 100,
            "intermedio": 160,
            "avanzado": 200,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Afecta a idiomas básicos, conocidos y hablados comúnmente en muchos países del mundo.",
            "intermedio": "Afecta a idiomas extraños e inusuales, hablados por grupos minoritarios o que ya no son usados en ninguna sociedad.",
            "avanzado": "Afecta a idiomas únicos y olvidados.",
            "arcano": "Afecta a cualquier idioma."
        },
        "mantenimiento": "20 / 35 / 40 / 50 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Levitación",
        "nivel": "20-30",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El blanco de este conjuro podrá elevarse o descender verticalmente a voluntad por el aire, aunque no hacer movimientos horizontales.",
        "zeon": {
            "base": 50,
            "intermedio": 80,
            "avanzado": 100,
            "arcano": 120
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "Tipo de vuelo 4.",
            "intermedio": "Tipo de vuelo 6.",
            "avanzado": "Tipo de vuelo 8.",
            "arcano": "Tipo de vuelo 10."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "viasCerradas": "Tierra"
    },
    {
        "nombre": "Enviar Mensaje",
        "nivel": "20-30",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Envía un mensaje oral o escrito a una persona o lugar conocido, que se encuentre dentro de los límites espaciales del conjuro.",
        "zeon": {
            "base": 80,
            "intermedio": 100,
            "avanzado": 120,
            "arcano": 140
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "10 kilómetros / Hasta 500 palabras.",
            "intermedio": "100 kilómetros / hasta 1.000 palabras.",
            "avanzado": "250 kilómetros / 2.500 palabras.",
            "arcano": "1.000 kilómetros / 5.000 palabras."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Protección Anticonceptiva",
        "nivel": "20-30",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Evita al personaje contraer enfermedades de transmisión sexual o concebir descendencia. Puede afectar a varios individuos siempre que la suma de sus presencias no supere lo que determine el grado del conjuro.",
        "zeon": {
            "base": 60,
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
            "base": "Presencia máxima 80.",
            "intermedio": "Presencia máxima 180.",
            "avanzado": "Presencia máxima 260.",
            "arcano": "Presencia máxima 380."
        },
        "mantenimiento": "5 / 5 / 10 / 10 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Cerrar Mágicamente",
        "nivel": "20-30",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Cierra automáticamente cualquier puerta o cerradura, aumentando varios grados la dificultad necesaria para abrirla. Aunque el cerrojo queda encantado, no es necesario pagar un mantenimiento, ya que el hechizo se mantendrá hasta que sea abierta. Un conjuro de Cerrar Mágicamente sólo puede afectar a la vez a una cerradura.",
        "zeon": {
            "base": 100,
            "intermedio": 120,
            "avanzado": 140,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "+1 nivel de dificultad.",
            "intermedio": "+2 niveles de dificultad.",
            "avanzado": "+3 niveles de dificultad.",
            "arcano": "+4 niveles de dificultad."
        },
        "mantenimiento": "No",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Cerrar Realmente",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Mediante este hechizo, el mago obstruye automáticamente cualquier tipo de puerta, postigo o ventana. Si, por ejemplo, se lanza sobre una puerta abierta, esta se cerrará sola, o si se usa sobre un rastrillo, bajará taponando la salida. Mientras se mantenga el conjuro, no es posible abrir la puerta físicamente, salvo por medios mágicos o destrozándola. La máxima presencia de la puerta viene determinada por el grado del conjuro.",
        "zeon": {
            "base": 80,
            "intermedio": 160,
            "avanzado": 200,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "Presencia máxima 20.",
            "intermedio": "Presencia máxima 40.",
            "avanzado": "Presencia máxima 60.",
            "arcano": "Presencia máxima 80."
        },
        "mantenimiento": "5 / 10 / 10 / 15 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Purificación",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Purifica un cuerpo eliminando cualquier elemento nocivo para el sistema, como venenos o toxinas. La purificación sólo afectará a los elementos de un cuerpo que resulten dañinos y que no pertenezcan a él. De este modo, el veneno que posee una serpiente no se verá alterado, dado que es algo natural para ella, pero podría eliminarse cuando se inocule en una víctima.",
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
            "base": "Nivel máximo del veneno 30.",
            "intermedio": "Nivel máximo del veneno 50.",
            "avanzado": "Nivel máximo del veneno 70.",
            "arcano": "Nivel máximo del veneno 90."
        },
        "mantenimiento": "No",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Cambio de Aspecto",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Modifica la apariencia facial y corporal del sujeto sobre el que es lanzado. Puede alterar su color de piel o su fisonomía, pero no variar su altura o peso más allá de los límites impuestos por su Tamaño. El conjuro no obtiene un +10 a la Presencia afectable. Para resistir la alteración, es necesario superar una RM. Una vez fallada, sólo es posible repetir el control una vez por día.",
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
            "base": "RM 100.",
            "intermedio": "RM 110.",
            "avanzado": "RM 120.",
            "arcano": "RM 130."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Modificar el Tamaño",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Incrementa o disminuye el Tamaño de la persona u objeto sobre el que es lanzado. Por muchos añadidos que se empleen, nunca podrá disminuirse por debajo de 1. Puede resistirse sus efectos superando una RM.",
        "zeon": {
            "base": 80,
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
            "base": "Altera 2 puntos de Tamaño/ RM 100.",
            "intermedio": "Altera 4 puntos de Tamaño / RM 120.",
            "avanzado": "Altera 6 puntos de Tamaño / RM 140.",
            "arcano": "Altera 8 puntos de Tamaño / RM 160."
        },
        "mantenimiento": "10 / 10 / 15 / 20",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Invocar Agresividad",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Aumenta automáticamente la agresividad de todos los seres vivos que se encuentren cerca del hechicero, siempre y cuando no superen una RM. Los afectados actuarán de una forma violenta sobre cualquier individuo o cosa que pueda ser blanco de su ira.",
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
            "base": "20 metros de radio / RM 80.",
            "intermedio": "40 metros de radio / RM 100.",
            "avanzado": "60 metros de radio / RM 120.",
            "arcano": "80 metros de radio / RM 140."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "viasCerradas": "Luz"
    },
    {
        "nombre": "Eliminar Conjuros",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Destruye un conjuro activo cuyo valor zeónico no supere el indicado por el grado del conjuro.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
            "avanzado": 240,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "Valor zeónico máximo 60.",
            "intermedio": "Valor zeónico máximo 80.",
            "avanzado": "Valor zeónico máximo 100.",
            "arcano": "Valor zeónico máximo 120."
        },
        "mantenimiento": "No",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Resistencia al Dolor",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Aumenta el aguante de un ser vivo, otorgando un bonificador a la habilidad secundaria Resistir el Dolor.",
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
            "arcano": 14
        },
        "grados": {
            "base": "+50 a Resistir el dolor.",
            "intermedio": "+100 a Resistir el dolor.",
            "avanzado": "+150 a Resistir el dolor / Permite alcanzar Inhumanidad.",
            "arcano": "+200 a Resistir el dolor / Permite alcanzar Zen."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "viasCerradas": "Esencia"
    },
    {
        "nombre": "Descarga de Magia",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta una descarga de energía mágica, que ataca en la TA de Energía.",
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
            "arcano": 14
        },
        "grados": {
            "base": "Daño 40.",
            "intermedio": "Daño 60.",
            "avanzado": "Daño 80.",
            "arcano": "Daño 100."
        },
        "mantenimiento": "No",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Eliminar los Sueños",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Suprime la capacidad de soñar de un individuo. En caso de que sea lanzado sobre un individuo que se encuentre en la Vigilia, este será expulsado de inmediato al mundo real. El objetivo del conjuro puede resistirse superando una RM, aunque en caso de fallarla, sólo podrá repetir el control una vez al día.",
        "zeon": {
            "base": 50,
            "intermedio": 100,
            "avanzado": 150,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 14
        },
        "grados": {
            "base": "RM 120.",
            "intermedio": "RM 160.",
            "avanzado": "RM 200.",
            "arcano": "RM 240."
        },
        "mantenimiento": "5 / 10 / 15 / 15 Diario",
        "viasCerradas": "Luz y Oscuridad"
    },
    {
        "nombre": "Extender la Presencia",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El lanzador del conjuro puede separar a voluntad su presencia de su cuerpo permitiéndole actuar a distancia como si realmente se encontrara allí. Mientras esté separada el hechicero no podrá moverse, pero será capaz de hacerla regresar a su cuerpo cuando quiera sin tener que finalizar el sortilegio. La presencia expandida puede tocar objetos físicos e incluso atacar, pero será invisible al ojo humano; sólo es posible notarla mediante el uso de detecciones de Ki, la capacidad de ver espíritus, o algún otro medio de ver cuerpos etéreos (aunque si la presencia sostiene algo, dicho objeto sí es perfectamente visible). La presencia es intangible y sólo podrá ser dañada por ataques basados en energía. Cualquier pérdida de puntos de vida también afectará al cuerpo del hechicero. La distancia máxima que la presencia puede expandirse del cuerpo es determinada por el grado del conjuro.",
        "zeon": {
            "base": 100,
            "intermedio": 150,
            "avanzado": 200,
            "arcano": 250
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "5 metros.",
            "intermedio": "25 metros.",
            "avanzado": "50 metros.",
            "arcano": "100 metros / El conjuro crea también copias de la presencia de los objetos que el brujo lleve encima, permitiéndole usarlos cuando usa su presencia expandida."
        },
        "mantenimiento": "10 / 15 / 20 / 25 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Curar Enfermedades",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Elimina automáticamente cualquier enfermedad. Puede emplearse sobre varios individuos, siempre y cuando la suma de sus presencias no supere lo que determina el grado del conjuro.",
        "zeon": {
            "base": 80,
            "intermedio": 140,
            "avanzado": 200,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "Nivel máximo de la enfermedad 30 / Presencia máxima 80.",
            "intermedio": "Nivel máximo de la enfermedad 50 / Presencia máxima 120.",
            "avanzado": "Nivel máximo de la enfermedad 70 / Presencia máxima 180.",
            "arcano": "Nivel máximo de la enfermedad 100 / Presencia máxima 240."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Percibir Sentimientos",
        "nivel": "30-40",
        "accion": "Activa",
        "tipo": "Detección",
        "efecto": "Detecta un sentimiento determinado en aquellos individuos que se encuentren en un radio cercano al brujo. El hechicero debe elegir qué emoción desea percibir. Los sujetos afectados podrán escudarse superando una RM o RP.",
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
            "arcano": 16
        },
        "grados": {
            "base": "50 metros de radio / RM o RP 120.",
            "intermedio": "100 metros de radio / RM o RP 140.",
            "avanzado": "250 metros de radio / RM o RP 160.",
            "arcano": "500 metros de radio / RM o RP 180."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Anulación de Magia",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Anula los efectos de todos los conjuros (incluidos los del lanzador) que se encuentren en un radio alrededor del hechicero y cuyo valor zeónico no supere lo que determine el grado del conjuro. Ten en cuenta que no los destruye, sino simplemente neutraliza sus efectos mientras estén dentro del área.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
            "avanzado": 240,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "Valor zeónico máximo 60 / 10 metros de radio.",
            "intermedio": "Valor zeónico máximo 100 / 25 metros de radio.",
            "avanzado": "Valor zeónico máximo 140 / 50 metros de radio.",
            "arcano": "Valor zeónico máximo 180 / 100 metros de radio."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Deshacer",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Destruye kilogramos de cualquier material inorgánico, siempre que no supere una Resistencia.",
        "zeon": {
            "base": 100,
            "intermedio": 140,
            "avanzado": 180,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "50 kilos / Resistencia 80.",
            "intermedio": "100 kilos / Resistencia 100.",
            "avanzado": "250 kilos / Resistencia 120.",
            "arcano": "500 kilos / Resistencia 140."
        },
        "mantenimiento": "No",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Maldición",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro provoca una serie de condiciones negativas sobre persona a la que afecte. Su cometido es causar infortunio sobre ciertas acciones que realice el individuo maldito: mantener una relación amorosa, escribir poemas, ayudar a alguien… El hechicero es quien decide a qué exactamente, así como sus consecuencias, dentro de los límites indicados por el grado del conjuro. Por su naturaleza, el hechizo no influye sólo a quien lo recibe, sino también otras personas que se relacionen con él si entran en el campo de la maldición. En este caso, cada uno tendrá derecho a su propia RM. Por ejemplo, una jovencita que se sienta interesada en entablar una relación sentimental con un chico, afectado por una maldición que impide que nadie se enamore de él, se sentiría obligatoriamente desanimada si no supera la RM del conjuro. Sólo se puede realizar un nuevo control cuando sus efectos vuelvan a activarse.",
        "zeon": {
            "base": 200,
            "intermedio": 350,
            "avanzado": 500,
            "arcano": 700
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "La maldición sólo afecta actos muy concretos (como enamorarse de una persona determinada o escribir un poema para el rey) y produce únicamente infortunio, haciendo que el afectado no pueda lograr sus objetivos con éxito completo / RM 120.",
            "intermedio": "La maldición afecta también actos genéricos (como enamorarse, luchar, ayudar a los demás...) y produce autentica mala suerte, haciendo que el blanco no pueda lograr sus objetivos o, en caso de maldecir una habilidad, ya sea primaria o secundaria, aplique un penalizador de -60 cada vez que utilice / RM 140.",
            "avanzado": "La maldición afecta cualquier acto o condición, y produce toda clase de efectos negativos al objetivo del conjuro (como dolor, hacerle llorar sangre, que deje que hablar…) o, en caso de maldecir una habilidad, ya sea primaria o secundaria, aplique un penalizador de -80 cada vez que la utilice / RM 160.",
            "arcano": "La maldición puede tener cualquier nivel de complejidad imaginable y producir efectos mayores, inclusive la muerte, a aquellos que entren dentro de sus consecuencias / RM 180."
        },
        "mantenimiento": "10 / 20 / 25 / 35 Diario",
        "viasCerradas": "No"
    },
    {
        "nombre": "Leer la Mente",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Permite al hechicero indagar en los pensamientos o recuerdos de un individuo. Queda a discreción del DJ decidir la cantidad de asaltos que necesita para obtener la información deseada, dependiendo de lo oculto que esté en memoria del personaje. El afectado puede resistirse superando una RP o una RM. Mientras pueda leer las intenciones de su adversario, el brujo aplica un bonificador de +30 a las acciones enfrentadas en su contra.",
        "zeon": {
            "base": 100,
            "intermedio": 160,
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
            "base": "RM o RP 80.",
            "intermedio": "RM o RP 120.",
            "avanzado": "RM o RP 140.",
            "arcano": "RM o RP 180."
        },
        "mantenimiento": "10 / 20 / 20 / 25",
        "viasCerradas": "Oscuridad"
    },
    {
        "nombre": "Alterar Energía",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El hechicero puede transformar intensidades de cualquier tipo de energía elemental en otro, como convertir fuego en electricidad. Si estas intensidades son mágicas o tienen presencia propia, podrán resistirse superando una RM. Este conjuro no causa daños a los seres elementales, pero sí altera su naturaleza.",
        "zeon": {
            "base": 100,
            "intermedio": 160,
            "avanzado": 200,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "10 intensidades / RM 120.",
            "intermedio": "15 intensidades / RM 140.",
            "avanzado": "20 intensidades / RM 160.",
            "arcano": "25 intensidades / RM 180."
        },
        "mantenimiento": "10 / 20 / 20 / 25 Diario",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Enviar Sueños",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Permite enviar imágenes y palabras al subconsciente de un durmiente. El conjuro no funciona como un sistema de comunicación, ya que el brujo no tendrá constancia de lo que el soñador diga o haga. El mensaje puede mandarse a cualquier sujeto que el hechicero designe, sin importar la distancia a la que a esté. La condición para ser afectado por el conjuro es estar durmiendo, y ser el individuo elegido por el lanzador.",
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
            "arcano": 15
        },
        "grados": {
            "base": "Los sueños serán vagos y poco esclarecedores, permitiendo mostrar únicamente imágenes fragmentadas, frases inconexas y sonidos.",
            "intermedio": "Los sueños serán vagos, pero permiten mostrar secuencias y lugares al soñador.",
            "avanzado": "Los sueños serán claros y trasmitirán un mensaje comprensible, así como imágenes y secuencias ideadas por el lanzador.",
            "arcano": "Los sueños serán completamente claros y tienen una vaga consciencia similar a la del lanzador, permitiendo al soñador incluso formular preguntas o interactuar con lo que ve en el sueño."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "la",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Mediante este conjuro, el hechicero absorbe conocimientos escritos o gráficos, que se encuentren a su vista o al alcance de su mano. Así pues, le es posible, por ejemplo, leer un libro en escasos segundos tocando su cubierta y recordar los detalles como si lo hubiera hecho con detenimiento. Un personaje que trate de recordar información que ha memorizado usando este conjuro disminuye dos grados la dificultad de cualquier control de Memorizar.",
        "zeon": {
            "base": 80,
            "intermedio": 180,
            "avanzado": 320,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 16
        },
        "grados": {
            "base": "Un libro corto y no muy complejo.",
            "intermedio": "Un grueso volumen de gran complejidad.",
            "avanzado": "El equivalente a una enciclopedia.",
            "arcano": "El conocimiento de una biblioteca entera."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Amistad",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro crea en un individuo un vínculo de amistad hacia otra persona designada por el hechicero. Ten en cuenta que el afectado no se vuelve estúpido, por lo que no obedecerá de manera ciega a su “amigo”, actuando siempre conforme a su ética y personalidad. Para superar este conjuro, es necesario pasar una RM o RP. Posteriormente, sólo se repite el control una vez al día, o cuando algo pueda poner en duda la relación de compañerismo que mantiene el hechizado.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 180,
            "arcano": 220
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "RM o RP 120.",
            "intermedio": "RM o RP 140.",
            "avanzado": "RM o RP 160.",
            "arcano": "RM o RP 180."
        },
        "mantenimiento": "10 / 15 / 20 / 25 Diario",
        "viasCerradas": "Oscuridad"
    },
    {
        "nombre": "Causar Enfermedad",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Hace enfermar a un individuo que falle la RE requerida.",
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
            "arcano": 15
        },
        "grados": {
            "base": "Enfermedad de Nivel 30.",
            "intermedio": "Enfermedad de Nivel 50.",
            "avanzado": "Enfermedad de Nivel 70.",
            "arcano": "Enfermedad de Nivel 90."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ilusión y Agua"
    },
    {
        "nombre": "Transporte Rápido",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Transporta al blanco del conjuro a distancia. Este conjuro permite pasar a través de cuerpos físicos, siempre que no se encuentren basados en energía, pero no situar a sus objetivos en una superficie de naturaleza diferente a aquella en la que se encontrara (por ejemplo, haciendo aparecer a alguien en el aire).",
        "zeon": {
            "base": 60,
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
            "base": "25 metros.",
            "intermedio": "100 metros.",
            "avanzado": "200 metros.",
            "arcano": "350 metros."
        },
        "mantenimiento": "No",
        "viasCerradas": "Tierra"
    },
    {
        "nombre": "Enlentecer",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Disminuye la velocidad de reacción y movimiento del sujeto sobre el que se lance el conjuro, provocando un penalizador a su movimiento si no supera una RM.",
        "zeon": {
            "base": 60,
            "intermedio": 90,
            "avanzado": 120,
            "arcano": 150
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "-2 al Tipo de movimiento / RM 120.",
            "intermedio": "-4 al Tipo de movimiento / RM 140.",
            "avanzado": "-8 al Tipo de movimiento / RM 160.",
            "arcano": "-12 al Tipo de movimiento / RM 180."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "viasCerradas": "Aire"
    },
    {
        "nombre": "Mostrar lo Invisible",
        "nivel": "40-50",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Muestra cualquier fuerza o presencia invisible, exhibiéndola a la vista de todo el mundo. Este conjuro revela tanto efectos sobrenaturales como seres de naturaleza espiritual o completamente invisibles. Las criaturas afectadas podrán evitar manifestarse superando una RM. La condición consiste, simplemente, en encontrarse dentro del área del hechizo.",
        "zeon": {
            "base": 60,
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
            "base": "Radio de 25 metros / RM 120.",
            "intermedio": "Radio de 50 metros / RM 160.",
            "avanzado": "Radio de 100 metros / RM 200.",
            "arcano": "Radio de 250 metros / RM 240."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "viasCerradas": "Oscuridad"
    },
    {
        "nombre": "Ceguera",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Los sujetos dentro del radio del conjuro que fallen la RM perderán el sentido de la vista.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 160,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "Radio de 5 metros / RM 100.",
            "intermedio": "Radio de 25 metros / RM 120.",
            "avanzado": "Radio de 50 metros / RM 140.",
            "arcano": "Radio de 100 metros / RM 160."
        },
        "mantenimiento": "10 / 15 / 20 / 20",
        "viasCerradas": "Creación y Luz"
    },
    {
        "nombre": "Visualizar Cartografía",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al hechicero visualizar los elementos del terreno que se encuentren cercanos al sitio en el que está. No se puede localizar a individuos concretos o construcciones con exactitud, pero sí la ubicación de ciudades, ríos, montañas...",
        "zeon": {
            "base": 60,
            "intermedio": 90,
            "avanzado": 120,
            "arcano": 150
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "25 kilómetros de radio.",
            "intermedio": "100 kilómetros de radio.",
            "avanzado": "250 kilómetros de radio.",
            "arcano": "1.000 kilómetros de radio."
        },
        "mantenimiento": "No",
        "viasCerradas": "Oscuridad"
    },
    {
        "nombre": "Sordera",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Los sujetos dentro del radio del conjuro que fallen la RM perderán el sentido del oído.",
        "zeon": {
            "base": 80,
            "intermedio": 100,
            "avanzado": 120,
            "arcano": 140
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "Radio de 5 metros / RM 120.",
            "intermedio": "Radio de 25 metros / RM 140.",
            "avanzado": "Radio de 50 metros / RM 160.",
            "arcano": "Radio de 100 metros / RM 180."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Mudez",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Los sujetos dentro del radio del conjuro que fallen la RM perderán la capacidad de hablar.",
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
            "base": "Radio de 5 metros / RM 120.",
            "intermedio": "Radio de 25 metros / RM 150.",
            "avanzado": "Radio de 50 metros / RM 190.",
            "arcano": "Radio de 100 metros / RM 220."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Curar Heridas",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Sana cualquier clase de herida recuperando Puntos de Vida. Este tipo de curación no permite recobrar miembros perdidos o daños similares, pero sí evita los efectos del desangramiento.",
        "zeon": {
            "base": 100,
            "intermedio": 140,
            "avanzado": 180,
            "arcano": 220
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "40 Puntos de vida.",
            "intermedio": "80 Puntos de vida.",
            "avanzado": "160 Puntos de vida.",
            "arcano": "320 Puntos de vida."
        },
        "mantenimiento": "No",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Eliminar Cansancio",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro recupera el agotamiento físico que haya sufrido una persona, permitiendo recobrar sus puntos de Cansancio perdidos.",
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
            "base": "1 Punto de Cansancio.",
            "intermedio": "3 Puntos de Cansancio.",
            "avanzado": "5 Puntos de Cansancio.",
            "arcano": "7 Puntos de Cansancio."
        },
        "mantenimiento": "No",
        "viasCerradas": "Oscuridad"
    },
    {
        "nombre": "Montura Mágica",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea un ser sobrenatural, con el único objetivo de servir como montura. No tendrá ninguna habilidad de ataque y se defenderá usando las reglas de acumulación de daño. Para moverse, la montura mágica utiliza las reglas de la habilidad del Ki Eliminación de Peso y Atletismo 200.",
        "zeon": {
            "base": 100,
            "intermedio": 140,
            "avanzado": 180,
            "arcano": 220
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Tipo de movimiento 10, 500 PV, Fuerza 10, Tamaño máximo 20.",
            "intermedio": "Tipo de movimiento 12, 1.000 PV, Fuerza 12, Tamaño máximo 22.",
            "avanzado": "Tipo de movimiento 14, 1.500 PV, Fuerza 14, Tamaño máximo 24.",
            "arcano": "Tipo de movimiento 15, 2.000 PV, Fuerza 15, Tamaño máximo 28."
        },
        "mantenimiento": "10 / 15 / 15 / 20 Diario",
        "viasCerradas": "Ilusión"
    },
    {
        "nombre": "Andar por las Paredes",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite a un individuo moverse por paredes o techos como si se tratase del suelo, anulando absolutamente cualquier regla de la gravedad.",
        "zeon": {
            "base": 60,
            "intermedio": 80,
            "avanzado": 100,
            "arcano": 120
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "A una cuarta parte del Tipo de Movimiento como máximo.",
            "intermedio": "A mitad de Tipo de Movimiento como máximo.",
            "avanzado": "Tipo de Movimiento pleno.",
            "arcano": "El personaje puede moverse o quedarse quieto con plena estabilidad por superficies completamente imposibles, como un hilo, una pluma que cae lentamente del cielo o incluso saltar de una gota de lluvia a otra."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "viasCerradas": "Agua"
    },
    {
        "nombre": "Fusionar con el Cuerpo",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Fusiona uno o varios objetos, como armas, armaduras, ganzúas... con el individuo designado por el hechicero. El objeto quedará oculto bajo alguna forma visible, como una cicatriz o un tatuaje, hasta el momento en el que persona que lo contiene decida extraerlo. Mientras se encuentren ocultos, aquel que los porte no tendrá ningún penalizador por peso o por tamaño, pero tampoco ninguno de sus beneficios. No es posible fusionar algo que exceda en más de diez veces el tamaño de la persona que hace de contenedor. Separar un objeto y exteriorizarlo, requiere un asalto completo. La máxima presencia del objeto viene determinada por el grado del conjuro.",
        "zeon": {
            "base": 60,
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
            "base": "Presencia máxima 80.",
            "intermedio": "Presencia máxima 180.",
            "avanzado": "Presencia máxima 280.",
            "arcano": "Presencia máxima 320."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Nube Ácida",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Forma una nube corrosiva, que derrite cualquier sustancia material con su contacto. Los cuerpos que la toquen deben superar una RF o perderán una cantidad de puntos de vida equivalente al nivel de fracaso. Si un objeto no supera la Resistencia por 50 puntos, perderá además un nivel de calidad. Cada turno que un cuerpo se encuentre expuesto y falle la tirada, aplicará un negativo acumulativo a su RF de -10 en el siguiente asalto contra los efectos de la nube. La nube se mueve a voluntad del mago a una velocidad determinada por el grado del conjuro. La condición para que afecte el conjuro será encontrarse en el interior del área en el turno posterior a su lanzamiento. No es posible designar blancos en el interior del conjuro, y afectará incluso al propio lanzador.",
        "zeon": {
            "base": 100,
            "intermedio": 160,
            "avanzado": 240,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RF 120 / 5 metros de radio / Tipo de Vuelo 6.",
            "intermedio": "RF 140 / 10 metros de radio / Tipo de Vuelo 8.",
            "avanzado": "RF 160 / 20 metros de radio / Tipo de Vuelo 10.",
            "arcano": "RF 180 / 50 metros de radio / Tipo de Vuelo 12."
        },
        "mantenimiento": "10 / 20 / 25 / 35",
        "viasCerradas": "Tierra"
    },
    {
        "nombre": "Desproteger",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Reduce la TA de un defensor, si este (o su armadura) no superan una RM. La única condición para ser afectado por este conjuro es ser designado como blanco por el lanzador y fallar la RM.",
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
            "base": "-2 a la TA / RM 140.",
            "intermedio": "-4 a la TA / RM 160.",
            "avanzado": "-6 a la TA / RM 180.",
            "arcano": "-8 a la TA / RM 200."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Dormir",
        "nivel": "50-60",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Provoca un intenso sueño sobre los sujetos que se encuentren en el radio de acción determinado por el hechicero. Los afectados deberán superar una RM o quedarán sumidos en un profundo sueño en poco más de un minuto. Si fallan el control por una diferencia mayor a 20 puntos, los efectos del conjuro son inmediatos. Mientras se mantenga el sortilegio, los afectados no podrán despertarse. Cualquier causa que permitiría al hechizado despertar mientras sigue preso del conjuro, le dará la oportunidad de realizar una nueva RM.",
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
            "base": "10 metros de radio / RM 80.",
            "intermedio": "25 metros de radio / RM 100.",
            "avanzado": "50 metros de radio / RM 120.",
            "arcano": "100 metros de radio / RM 140."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Aumentar Características Mentales",
        "nivel": "60-70",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Aumenta una de las cuatro características mentales de un personaje: Inteligencia, Poder, Voluntad y Percepción. En el caso de que el atributo se incremente por encima de 12, el índice de progresión se reduce a la mitad. El aumento de Inteligencia no permite al brujo incrementar el potencial máximo de sus hechizos. Uno de estos conjuros tan sólo puede afectar a una característica concreta a la vez.",
        "zeon": {
            "base": 100,
            "intermedio": 120,
            "avanzado": 140,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "+1 a la característica.",
            "intermedio": "+3 a la característica.",
            "avanzado": "+5 a la característica.",
            "arcano": "+7 a la característica."
        },
        "mantenimiento": "10 / 15 / 15 / 20",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Alteración Menor",
        "nivel": "60-70",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al hechicero moldear la forma de la materia inorgánica, transmutando un objeto en otro similar de idéntica presencia. Por ejemplo, es posible convertir un arpón en una lanza, ya que ambos tienen una forma similar y la misma presencia, pero no en un mandoble, ya que su presencia es mayor y sus formas difieren considerablemente.",
        "zeon": {
            "base": 80,
            "intermedio": 160,
            "avanzado": 240,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Presencia máxima 30.",
            "intermedio": "Presencia máxima 50.",
            "avanzado": "Presencia máxima 70.",
            "arcano": "Presencia máxima 100."
        },
        "mantenimiento": "5 / 10 / 15 / 20",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Crear Emociones",
        "nivel": "60-70",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Introduce algún tipo de sentimiento o emoción en el individuo designado por el hechicero que falle una RM o RP contra la dificultad del conjuro. El afectado puede hacer un nuevo control cada día que transcurra, o cuando tenga una seria sospecha de que está siendo influido sobrenaturalmente.",
        "zeon": {
            "base": 120,
            "intermedio": 180,
            "avanzado": 220,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM o RP 120.",
            "intermedio": "RM o RP 140.",
            "avanzado": "RM o RP 160.",
            "arcano": "RM o RP 180."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario",
        "viasCerradas": "Ilusión"
    },
    {
        "nombre": "Paralizar",
        "nivel": "60-70",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Somete al efecto de Paralización Completa a cualquier sujeto que se encuentre en el área de acción del conjuro y falle la RM.",
        "zeon": {
            "base": 140,
            "intermedio": 200,
            "avanzado": 240,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 9,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "10 metros de Radio / RM 80.",
            "intermedio": "25 metros de Radio / RM 100.",
            "avanzado": "50 metros de Radio / RM 120.",
            "arcano": "100 metros de Radio / RM 140."
        },
        "mantenimiento": "15 / 20 / 25 / 30",
        "viasCerradas": "Aire"
    },
    {
        "nombre": "Aumentar Características Físicas",
        "nivel": "60-70",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Aumenta una de las cuatro características físicas de un personaje: Destreza, Agilidad, Fuerza o Constitución. En el caso de que el atributo se incremente por encima de 12, el índice de progresión se reduce a la mitad. Sólo uno de estos conjuros puede afectar a la vez a una característica concreta.",
        "zeon": {
            "base": 100,
            "intermedio": 120,
            "avanzado": 140,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "+1 a la característica.",
            "intermedio": "+3 a la característica.",
            "avanzado": "+5 a la característica.",
            "arcano": "+7 a la característica."
        },
        "mantenimiento": "10 / 10 / 15 / 20",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Arma Mágica",
        "nivel": "60-70",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El brujo elabora con su magia un arma sobrenatural. La creación será considerada un objeto de la calidad determinada por el grado del sortilegio con la habilidad de dañar energía.",
        "zeon": {
            "base": 140,
            "intermedio": 200,
            "avanzado": 240,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Calidad +5.",
            "intermedio": "Calidad +10.",
            "avanzado": "Calidad +15.",
            "arcano": "Calidad +20."
        },
        "mantenimiento": "15 / 20 / 25 /30 Diario",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Debilidad",
        "nivel": "60-70",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El blanco de este conjuro se verá sometido temporalmente al efecto de Debilidad tal y como se explica en el Capítulo 14.",
        "zeon": {
            "base": 80,
            "intermedio": 100,
            "avanzado": 120,
            "arcano": 140
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "RM 120.",
            "intermedio": "RM 140.",
            "avanzado": "RM 160.",
            "arcano": "RM 180."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Cuerpo a Magia",
        "nivel": "60-70",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El cuerpo designado por el hechicero se transformará en energía mágica.",
        "zeon": {
            "base": 100,
            "intermedio": 120,
            "avanzado": 140,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "El objetivo es inmune a todos los ataques no basados en energía.",
            "intermedio": "Como en grado base, pero el objetivo puede además atravesar cualquier materia física no basada en energía.",
            "avanzado": "Como en grado intermedio, pero el objetivo obtiene un +10 a su ACT.",
            "arcano": "Como en grado avanzado, pero todo daño basado en una habilidad mágica o un conjuro queda reducido a la mitad."
        },
        "mantenimiento": "10 / 15 / 15 / 20",
        "viasCerradas": "Tierra"
    },
    {
        "nombre": "Resistir",
        "nivel": "60-70",
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Potencia una de las Resistencias de un sujeto. Sólo se mejora un único tipo, como la RM o RF; no en su totalidad.",
        "zeon": {
            "base": 80,
            "intermedio": 100,
            "avanzado": 120,
            "arcano": 140
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "+20 a una Resistencia.",
            "intermedio": "+40 a una Resistencia.",
            "avanzado": "+60 a una Resistencia.",
            "arcano": "+80 a una Resistencia."
        },
        "mantenimiento": "20 / 20 / 25 / 30",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Olvido",
        "nivel": "60-70",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Afecta a la memoria de un sujeto, haciéndole olvidar todo lo que el hechicero desee. Si los recuerdos que se quieren borrar están muy arraigados en el afectado, podrá aplicar un bono de +40 a su tirada de RM o RP. A pesar de no tener mantenimiento, el blanco tendrá una oportunidad de volver a realizar un control de Resistencia si encuentra algo que pueda hacerle recordar. Este conjuro no afecta a las habilidades del personaje, sólo a la memoria consciente.",
        "zeon": {
            "base": 120,
            "intermedio": 160,
            "avanzado": 200,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM o RP 120.",
            "intermedio": "RM o RP 140.",
            "avanzado": "RM o RP 160.",
            "arcano": "RM o RP 180."
        },
        "mantenimiento": "No",
        "viasCerradas": "Esencia"
    },
    {
        "nombre": "Rechazo",
        "nivel": "60-70",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Encanta un cuerpo físico con energía mágica, produciendo un fuerte rechazo a cualquiera que lo toque. El conjuro provoca un impacto sobre todo aquel con el que se ponga en contacto. Como en todos los golpes similares, el DJ deberá considerar daño que sufre el afectado, dependiendo de la diferencia con un control enfrentado de Agilidad o Fuerza, y los elementos que haya en el entorno. La presencia máxima del objeto afectado no puede superar lo que determine el grado del conjuro.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 180,
            "arcano": 220
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "Presencia máxima 30 / Fuerza 8.",
            "intermedio": "Presencia máxima 40 / Fuerza 10.",
            "avanzado": "Presencia máxima 50 / Fuerza 12.",
            "arcano": "Presencia máxima 60 / Fuerza 14."
        },
        "mantenimiento": "5 / 5 / 10 / 15 Diario",
        "viasCerradas": "Esencia, Agua"
    },
    {
        "nombre": "Plaga",
        "nivel": "60-70",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este conjuro debe de lanzarse sobre un sujeto o un lugar que esté infectado con una enfermedad. Al hacerlo, extiende la infección de manera automática sobre todos los individuos que se encuentren en el radio. Estas personas tendrán derecho a una RE contra la enfermedad expandida, para evitar el contagio. La condición para ser afectado será encontrarse, simplemente, en el área del conjuro.",
        "zeon": {
            "base": 140,
            "intermedio": 200,
            "avanzado": 240,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "1 Kilómetro de radio / Nivel máximo de enfermedad 20.",
            "intermedio": "5 Kilómetro de radio / Nivel máximo de enfermedad 40.",
            "avanzado": "10 Kilómetro de radio / Nivel máximo de enfermedad 60.",
            "arcano": "25 Kilómetro de radio / Nivel máximo de enfermedad 80 / La dificultad de la RE de la enfermedad se incrementa 10 puntos."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ilusión"
    },
    {
        "nombre": "Inutilidad",
        "nivel": "70-80",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El sujeto afectado por el conjuro de Inutilidad se volverá torpe e incapaz de ejecutar maniobras físicas. Deberá superar una RM o sufrir un penalizador a equivalente a su nivel de fracaso. Este hechizo no afecta a las habilidades mágicas, psíquicas o perceptivas.",
        "zeon": {
            "base": 120,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM 120.",
            "intermedio": "RM 140.",
            "avanzado": "RM 180.",
            "arcano": "RM 220."
        },
        "mantenimiento": "15 / 20 / 25 / 30",
        "viasCerradas": "Agua"
    },
    {
        "nombre": "Esfera de Levitación",
        "nivel": "70-80",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Hace levitar todo lo que se encuentre comprendido en un radio respecto al hechicero. El lanzador decide qué es lo que se eleva y qué no, sin importar el peso o el tamaño de lo que levanta. Los objetos o personas que se encuentren en el aire son movidos por el mago, con un Tipo de vuelo 6 si no superan una RM. Sólo los seres vivos o animados tienen derecho a un control de Resistencia, al igual que las construcciones que estén dotadas de características sobrenaturales.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
            "avanzado": 250,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM 80/ 25 metros de radio.",
            "intermedio": "RM 100 / 150 metros de radio.",
            "avanzado": "RM 120 / 250 metros de radio.",
            "arcano": "RM 140 / 350 metros de radio."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario",
        "viasCerradas": "Tierra, Agua"
    },
    {
        "nombre": "Vuelo",
        "nivel": "70-80",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga al afectado la capacidad de moverse por el aire a voluntad.",
        "zeon": {
            "base": 100,
            "intermedio": 120,
            "avanzado": 140,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "Tipo de Vuelo Místico 8.",
            "intermedio": "Tipo de Vuelo Místico 10.",
            "avanzado": "Tipo de Vuelo Místico 12.",
            "arcano": "Tipo de Vuelo Místico 14."
        },
        "mantenimiento": "5 / 10 / 10 / 10",
        "viasCerradas": "Piedra"
    },
    {
        "nombre": "Dominio",
        "nivel": "70-80",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Permite dominar la voluntad de cualquiera que no supere una RM o RP. El afectado sólo tiene derecho a un nuevo control cada vez que se le ordene realizar un acto que va completamente en contra de su naturaleza. Si la orden es excepcionalmente opuesta, puede aplicar un +20 a su tirada.",
        "zeon": {
            "base": 160,
            "intermedio": 200,
            "avanzado": 240,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM o RP 100.",
            "intermedio": "RM o RP 120.",
            "avanzado": "RM o RP 140.",
            "arcano": "RM o RP 160."
        },
        "mantenimiento": "20 / 20 / 25 / 30",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Erudición Defensiva",
        "nivel": "70-80",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Empleando este conjuro, el hechicero aumenta su Proyección Mágica defensiva. Sólo puede emplearse a la vez un conjuro de Erudición Defensiva sobre un sujeto concreto.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 160,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "+20 a la Proyección mágica defensiva.",
            "intermedio": "+30 a la Proyección mágica defensiva.",
            "avanzado": "+40 a la Proyección mágica defensiva.",
            "arcano": "+50 a la Proyección mágica defensiva."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Invisibilidad",
        "nivel": "70-80",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro vuelve invisible uno o varios cuerpos designados por el hechicero. Un individuo puede percibir las alteraciones que produce un cuerpo invisible superando un control de Advertir o Buscar contra la Dificultad determinada por el grado del conjuro.",
        "zeon": {
            "base": 160,
            "intermedio": 200,
            "avanzado": 240,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "Advertir contra Imposible y Buscar contra Absurdo.",
            "intermedio": "Advertir contra Inhumano y Buscar contra Casi Imposible.",
            "avanzado": "Advertir contra Zen y Buscar contra Imposible.",
            "arcano": "El blanco no puede ser percibido por el sentido de la vista."
        },
        "mantenimiento": "20 / 20 / 25 / 30",
        "viasCerradas": "Esencia"
    },
    {
        "nombre": "Desviar Trayectoria",
        "nivel": "70-80",
        "accion": "Pasiva",
        "tipo": "Efecto, Defensa",
        "efecto": "El hechicero puede modificar la trayectoria de un cuerpo en movimiento, redirigiéndolo hacia la dirección que desee. Este conjuro afecta a cualquier tipo de masa, ya sea algo pequeño como una flecha o grande como un barco. Ten en cuenta que no permite mover un cuerpo estático, sino modificar la ruta que uno en movimiento ya llevaba de por sí. Desviar Trayectoria también puede ser utilizado como defensa contra ataques materiales, como espadazos o proyectiles. En el caso de que el mago consiga una defensa con éxito con su Proyección Mágica, podrá redirigirlo hacia otro adversario. Este conjuro puede evitarse, superando una RM (en caso de usarse como defensa, será el atacante quien deba superar la Resistencia).",
        "zeon": {
            "base": 100,
            "intermedio": 160,
            "avanzado": 220,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM 140.",
            "intermedio": "RM 160.",
            "avanzado": "RM 200.",
            "arcano": "RM 240."
        },
        "mantenimiento": "No",
        "viasCerradas": "Fuego"
    },
    {
        "nombre": "Estancar Conjuro",
        "nivel": "70-80",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite almacenar un segundo conjuro en el interior de un objeto, para que sea usado posteriormente por otros brujos. Estancar Conjuro debe de lanzarse al mismo tiempo que el mago realiza otro hechizo, de modo que el segundo sortilegio, en lugar de funcionar con normalidad, quedará estancado en el interior de algo. El conjuro estancado podrá activarse, más tarde, por cualquier brujo que introduzca en el contenedor el coste zeónico exacto conque fue lanzado. El mago que posea el objeto tendrá el control del conjuro como si se tratase del lanzador, e incluso podrá pagar su mantenimiento en el caso de que lo tenga. El hechizo estancado podrá volver a ser usado, siempre que pague de nuevo el mismo coste zeónico. Imaginemos un ejemplo; un archimago estanca en un bastón un conjuro de Bola de Fuego en grado base. A partir de ese momento, cualquier personaje que tenga ese báculo e introduzca en su interior 50 puntos de Zeon, desencadenará una Bola de Fuego.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
            "avanzado": 250,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "Zeón máximo 80.",
            "intermedio": "Zeón máximo 120.",
            "avanzado": "Zeón máximo 180.",
            "arcano": "Zeón máximo 240."
        },
        "mantenimiento": "No",
        "viasCerradas": "Aire"
    },
    {
        "nombre": "Contención",
        "nivel": "70-80",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este conjuro encanta un lugar determinado haciendo que cualquier criatura que entre en él (o que ya se encuentre en su interior) no pueda salir de sus límites si no supera una RM. Aunque podrá moverse dentro de la zona con libertad, le será completamente imposible atravesar la barrera exterior. Una vez que se ha fallado la Resistencia, un sujeto afectado no tiene derecho a un nuevo control mientras se mantenga el conjuro, salvo si por alguna causa sus Resistencias aumentan. La condición para ser afectado es, simplemente, encontrarse dentro del lugar en el turno siguiente al de su lanzamiento, por lo que el mago no podrá elegir blancos en su interior, e incluso podrá quedar él mismo encerrado.",
        "zeon": {
            "base": 200,
            "intermedio": 240,
            "avanzado": 280,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "10 metros de radio / RM 120.",
            "intermedio": "25 metros de radio / RM 140.",
            "avanzado": "50 metros de radio / RM 160.",
            "arcano": "100 metros de radio / RM 180."
        },
        "mantenimiento": "40 / 50 / 60 / 65 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Marca de Detección",
        "nivel": "70-80",
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Encanta una persona, objeto o lugar, permitiendo al hechicero unir con él sus sentidos. De este modo, el brujo puede utilizar sus habilidades de percepción como si estuviera presente hasta la distancia máxima precisada por el grado del conjuro. Además, tendrá siempre constancia de dónde se encuentra su marca con respecto a su posición. En el caso de tratarse de un ser vivo o un objeto sobrenatural, podrá evitar ser afectado superando una RM.",
        "zeon": {
            "base": 100,
            "intermedio": 120,
            "avanzado": 140,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "10 kilómetros / RM 120.",
            "intermedio": "100 kilómetros /RM 140.",
            "avanzado": "1.000 kilómetros /RM 160.",
            "arcano": "Cualquier distancia / RM 180."
        },
        "mantenimiento": "10 / 15 / 15 / 20 Diario",
        "viasCerradas": "Oscuridad"
    },
    {
        "nombre": "Erudición Ofensiva",
        "nivel": "70-80",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Empleando este conjuro, el hechicero aumenta su Proyección Mágica ofensiva. Sólo puede emplearse a la vez un conjuro de Erudición Ofensiva sobre un sujeto concreto.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 160,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "+20 a la Proyección mágica ofensiva.",
            "intermedio": "+30 a la Proyección mágica ofensiva.",
            "avanzado": "+40 a la Proyección mágica ofensiva.",
            "arcano": "+50 a la Proyección mágica ofensiva."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Blanco Perfecto",
        "nivel": "70-80",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Encanta mágicamente un proyectil convencional haciendo que, una vez disparado, alcance su blanco de modo ineludible. El proyectil utiliza la habilidad de su lanzador, y en el caso de que se emplee para atacar a un adversario, este se defiende utilizando las reglas convencionales de defensa contra proyectiles. No obstante, el poder sobrenatural del conjuro confiere al atacante un bono a su tirada, permitiéndole ignorar las dificultades de disparo de la Tabla 48 y la distancia que le separa del blanco; siempre llegará hasta donde se encuentre su objetivo, sin importar dónde esté. Blanco Perfecto debe ser lanzado en el mismo asalto en que se realiza el disparo.",
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
            "arcano": 16
        },
        "grados": {
            "base": "Bono de Habilidad +40.",
            "intermedio": "Bono de Habilidad +60.",
            "avanzado": "Bono de Habilidad +80.",
            "arcano": "Bono de Habilidad +100."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Desencantamiento",
        "nivel": "80-90",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Destruye automáticamente un objeto mágico. El hechicero puede elegir si destruir completamente el objeto o, por el contrario, despojarle simplemente de sus cualidades sobrenaturales.",
        "zeon": {
            "base": 200,
            "intermedio": 250,
            "avanzado": 320,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "Presencia máxima 80.",
            "intermedio": "Presencia máxima 100.",
            "avanzado": "Presencia máxima 120.",
            "arcano": "Presencia máxima 140."
        },
        "mantenimiento": "No",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Conjuro Natural",
        "nivel": "80-90",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El Conjuro Natural permite al hechicero atar a su esencia uno o más sortilegios que prepare para tal contingencia, otorgándole la capacidad de lanzarlos posteriormente tantas veces como desee como si fueran conjuros innatos, sin que tengan coste zeónico alguno. De este modo, el mago puede ejecutar innatamente uno de dichos hechizos cada asalto. Por ejemplo, podría tener preparados un sortilegio de Bola de Fuego en grado intermedio y uno de Vuelo en grado base y usar uno de ellos por asalto completamente gratis. En el momento del lanzamiento de este conjuro, el brujo debe ejecutar todos los sortilegios que pretende preparar gastando el Zeon con el que pretende usarlos. Sólo es posible mantener activo un conjuro natural a la vez.",
        "zeon": {
            "base": 350,
            "intermedio": 420,
            "avanzado": 480,
            "arcano": 540
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "Valor zeónico máximo 100.",
            "intermedio": "Valor zeónico máximo 140.",
            "avanzado": "Valor zeónico máximo 180.",
            "arcano": "Valor zeónico máximo 220."
        },
        "mantenimiento": "70 / 85 / 100 / 110 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Inmortalidad",
        "nivel": "80-90",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Mientras este conjuro siga activo, el hechicero o quien este designe no envejece ni sufre los efectos del paso del tiempo. Así, se volverá un ser inmortal, salvo ante una muerte de carácter violento. Si este conjuro deja de mantenerse o es destruido, el individuo recuperará la edad que le corresponde a un ritmo muy acelerado.",
        "zeon": {
            "base": 300,
            "intermedio": 400,
            "avanzado": 500,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "Las habilidades descritas.",
            "intermedio": "Como en grado base, pero el personaje tampoco es vulnerable a venenos o enfermedades que no sean de origen sobrenatural.",
            "avanzado": "Como en grado intermedio, pero el personaje no puede morir causa de desangramiento o daños físicos que no sean de origen sobrenatural.",
            "arcano": "Como en grado avanzado, pero el personaje puede además sufrir cualquier cantidad de daño físico sin morir siempre y cuando no sufra un crítico mortal en uno de sus puntos vulnerables (aunque no por ello deja de sufrir penalizadores por daños físicos)."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Eliminar Necesidades",
        "nivel": "80-90",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Hace desaparecer completamente cualquier necesidad física de un individuo. Mientras se mantenga el conjuro, no se verá afectado por los efectos del hambre, el cansancio o el sueño, ignorando por completo cualquier penalizador causado por estos. El personaje puede seguir gastando puntos de Cansancio para mejorar sus acciones físicas (que se recuperan a un ritmo de un punto por hora), aunque no sufre negativos por alcanzar valores muy bajos.",
        "zeon": {
            "base": 300,
            "intermedio": 360,
            "avanzado": 420,
            "arcano": 480
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Las habilidades descritas.",
            "intermedio": "Como en grado base, pero el personaje ignora los penalizadores causados por efectos climáticos naturales como el calor o el frío.",
            "avanzado": "Como en grado intermedio, pero el personaje ignorará cualquier penalizador natural que no sea provocado por efectos sobrenaturales.",
            "arcano": "Como en grado avanzado, pero el personaje recupera un punto de Cansancio por asalto."
        },
        "mantenimiento": "15 / 20 / 25 / 25 Diario",
        "viasCerradas": "Esencia"
    },
    {
        "nombre": "Robar Conjuro",
        "nivel": "80-90",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Sustrae la esencia mágica de un hechizo, cortando sus lazos con el brujo que lo ha lanzado y ligándolo a otro individuo. A efectos de juego, el hechicero toma el control de un conjuro que no es suyo, dominándolo a partir de ese momento como si él mismo fuese el lanzador. El hechizo robado no podrá tener un valor zeónico superior a lo que indique el grado del conjuro, y sólo es posible robar aquellos que tengan mantenimiento; nunca los de acción automática. El hechicero que controla el conjuro podrá evitar que le sea robado superando una RM.",
        "zeon": {
            "base": 200,
            "intermedio": 280,
            "avanzado": 340,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Valor zeónico máximo 120 / RM 120.",
            "intermedio": "Valor zeónico máximo 180 / RM 140.",
            "avanzado": "Valor zeónico máximo 240 / RM 160.",
            "arcano": "Valor zeónico máximo 300 /RM 180."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Portal",
        "nivel": "80-90",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Portal crea una puerta mágica de tránsito entre dos lugares distantes. Cualquiera que la atraviese se trasladará, instantáneamente, hasta la otra abertura. El conjuro queda fijado en el lugar donde es lanzado y en el sitio donde se designe la salida, por lo que el hechicero no puede cambiar su ubicación con posterioridad. Su creador también puede decidir, durante el lanzamiento, si funciona en ambas direcciones o sólo transporta en una dirección. El tamaño de la abertura del portal así como la distancia máxima que puede separar ambas aberturas y la máxima cantidad de presencias que pueden trasportarse a través de ellas al día son determinadas por el grado del conjuro.",
        "zeon": {
            "base": 500,
            "intermedio": 600,
            "avanzado": 700,
            "arcano": 800
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "5 metros de abertura / 1.000 kilómetros de distancia / 500 presencias al día.",
            "intermedio": "15 metros de abertura / 5.000 kilómetros de distancia / 1.000 presencias al día.",
            "avanzado": "25 metros de abertura / 25.000 kilómetros de distancia / 2.000 presencias al día.",
            "arcano": "50 metros de abertura / cualquier distancia de separación / Sin límite de presencias al día. a"
        },
        "mantenimiento": "25 / 30 / 35 / 40 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Prisma de Magia",
        "nivel": "80-90",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Solidifica la magia, creando un recipiente sobrenatural para el Zeon. Aplicado a reglas de juego, conforma un contenedor de magia que aparece vacío. Sólo es posible mantener activo un conjuro de Prisma de Magia a la vez.",
        "zeon": {
            "base": 200,
            "intermedio": 240,
            "avanzado": 280,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "400 puntos de Zeon.",
            "intermedio": "800 puntos de Zeon.",
            "avanzado": "1.500 puntos de Zeon.",
            "arcano": "3.000 puntos de Zeon."
        },
        "mantenimiento": "10 / 15 / 15 / 20 Diario",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Localización",
        "nivel": "80-90",
        "accion": "Activa",
        "tipo": "Detección",
        "efecto": "Localización permite encontrar una persona, objeto o lugar, y conocer su ubicación exacta en ese momento. El brujo puede buscar cualquier cosa concreta, pero no cualidades subjetivas, como por ejemplo localizar a la persona que ha matado a su hermano si no sabe quién es exactamente. Para evitar ser encontrados, las personas u objetos deberán superar una RM. Los lugares de gran tamaño aplicarán un penalizador de -40 a dicha tirada.",
        "zeon": {
            "base": 300,
            "intermedio": 360,
            "avanzado": 420,
            "arcano": 480
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "100 kilómetros / RM 120.",
            "intermedio": "1.000 kilómetros / RM 140.",
            "avanzado": "10.000 kilómetros / RM 180.",
            "arcano": "Cualquier distancia / RM 220."
        },
        "mantenimiento": "No",
        "viasCerradas": "Oscuridad"
    },
    {
        "nombre": "Inmunidad Física",
        "nivel": "80-90",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El individuo u objeto designado se vuelve completamente invulnerable a cualquier daño que no sea capaz de afectar energía. Es posible elegir tantos blancos como se desee, mientras la suma de sus presencias no supere lo que determine el máximo del conjuro.",
        "zeon": {
            "base": 200,
            "intermedio": 240,
            "avanzado": 280,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Presencia máxima 60.",
            "intermedio": "Presencia máxima 80.",
            "avanzado": "Presencia máxima 100.",
            "arcano": "Presencia máxima 120."
        },
        "mantenimiento": "10 / 15 / 15 / 20 Diario",
        "viasCerradas": "Esencia"
    },
    {
        "nombre": "Devolución de Conjuro",
        "nivel": "80-90",
        "accion": "Pasiva",
        "tipo": "Automático",
        "efecto": "Devuelve un conjuro activo contra su lanzador, o sobre cualquier otro blanco que se elija. El sortilegio rechazado utiliza la misma Proyección Mágica de quien lo ejecutó. La devolución es un efecto automático.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
            "avanzado": 240,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Zeón máximo del conjuro 100.",
            "intermedio": "Zeón máximo del conjuro 120.",
            "avanzado": "Zeón máximo del conjuro 140.",
            "arcano": "Zeón máximo del conjuro 160."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Preparar Conjuro",
        "nivel": "80-90",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite introducir un segundo conjuro en el interior de un objeto o individuo, para lanzarlo posteriormente de manera automática, sin ningún tipo de acumulación o preparativo. Este conjuro debe lanzarse al mismo tiempo que el mago realiza otro hechizo de modo que el segundo sortilegio, en lugar de funcionar con normalidad, se queda en el interior de algo esperando a ser desencadenado posteriormente. El conjuro preparado podrá activarse por voluntad del brujo, el sujeto en cuyo interior se encuentre, o aquel que esté en posesión del objeto encantado. Utiliza la Proyección Mágica de su lanzador original, salvo si quien lo posee en la actualidad decide utilizar la suya propia. Una vez lanzado, el hechizo preparado desaparece. Si deja de pagarse el mantenimiento de Preparar Conjuro, el segundo hechizo también se pierde. Sólo es posible lanzar un sortilegio preparado por asalto, sin importar el número que se tenga almacenado. Un objeto o persona puede contener hasta cuatro veces su presencia en valor zeónico. Es decir, un individuo con presencia 50 podría tener hasta 200 puntos de Zeon en conjuros preparados.",
        "zeon": {
            "base": 200,
            "intermedio": 300,
            "avanzado": 360,
            "arcano": 420
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Zeon máximo del conjuro 100.",
            "intermedio": "Zeon máximo del conjuro 200.",
            "avanzado": "Zeon máximo del conjuro 300.",
            "arcano": "Zeon máximo del conjuro 400."
        },
        "mantenimiento": "20 / 30 / 40 / 45 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Teletransporte",
        "nivel": "80-90",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El hechicero, o quien este designe, es teletransportado a otra posición. Este conjuro permite pasar a través de cuerpos físicos, mientras no se encuentren basados en energía. Puede afectar a tantos blancos como se desee, mientras la suma de su presencias no supere lo que determina el grado del conjuro.",
        "zeon": {
            "base": 300,
            "intermedio": 480,
            "avanzado": 560,
            "arcano": 640
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "50 kilómetros / Presencia máxima 80.",
            "intermedio": "1.000 kilómetros / Presencia máxima 180.",
            "avanzado": "5.000 kilómetros / Presencia máxima 240.",
            "arcano": "10.000 kilómetros / Presencia máxima 320."
        },
        "mantenimiento": "No",
        "viasCerradas": "Piedra"
    },
    {
        "nombre": "Ojo del Tiempo",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El brujo puede enviar sus sentidos al pasado, para observar cualquier acontecimiento que haya ocurrido tiempo atrás en el lugar donde se encuentra como si estuviera presente. El lanzador puede avanzar y retroceder libremente al momento que desee dentro del periodo que le permite el grado del conjuro.",
        "zeon": {
            "base": 200,
            "intermedio": 300,
            "avanzado": 400,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 11,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "Una década.",
            "intermedio": "Un siglo.",
            "avanzado": "Un milenio.",
            "arcano": "Cualquier periodo de tiempo."
        },
        "mantenimiento": "10 / 15 / 20 / 25",
        "viasCerradas": "Oscuridad"
    },
    {
        "nombre": "Sellar",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Sellar estanca un sortilegio anímico activo en una persona, haciendo imposible que se libre posteriormente de sus efectos. Este conjuro se utiliza sobre un hechizo de carácter Anímico, lanzado anteriormente con éxito sobre un individuo que fallase el control de Resistencia. De este modo, hasta que el conjuro Anímico no deje de mantenerse o sea destruido, el sujeto afectado pierde toda capacidad de realizar un nuevo control de RM, sin importar lo que las reglas generales o el propio conjuro digan. No tiene efectos sobre hechizos sin mantenimiento, o aquellos que influyan sólo en un área determinada.",
        "zeon": {
            "base": 200,
            "intermedio": 360,
            "avanzado": 420,
            "arcano": 480
        },
        "inteligenciaRequerida": {
            "base": 11,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "Estanca un conjuro de grado base.",
            "intermedio": "Estanca un conjuro de grado intermedio.",
            "avanzado": "Estanca un conjuro de grado avanzado.",
            "arcano": "Estanca un conjuro de grado arcano."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "El Don del Conocimiento",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Utilizando la magia, el hechicero obtiene conocimientos intelectuales que desconoce. Este conjuro otorga al brujo, o a quien este designe, un bono a las habilidades secundarias del campo Intelectual, que podrá repartir libremente como considere apropiado (hasta un tope de 340). Por ejemplo si obtuviera 100 puntos, puede aumentar 40 puntos su habilidad de Historia, más 30 en Ciencia y Animales, respectivamente. Sólo un conjuro de El Don del Conocimiento puede estar activo en un sujeto a la vez.",
        "zeon": {
            "base": 200,
            "intermedio": 300,
            "avanzado": 400,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "+100 de bono.",
            "intermedio": "+250 de bono.",
            "avanzado": "+400 de bono.",
            "arcano": "+600 de bono."
        },
        "mantenimiento": "30 / 45 / 60 / 75 Diario",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Escudar Contra Poderes",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Afecta un lugar dentro del cual el hechicero crea un área que impide utilizar poderes sobrenaturales de cualquier tipo. En su interior, no funcionará ningún conjuro, convocación, poder psíquico o Técnica de Ki cuyo valor zeónico, potencial o coste no supere lo que indique el grado del conjuro. El área permanece siempre estática donde fue creada y afecta automáticamente a todos los que estén en su interior, incluyendo al propio lanzador.",
        "zeon": {
            "base": 300,
            "intermedio": 360,
            "avanzado": 420,
            "arcano": 480
        },
        "inteligenciaRequerida": {
            "base": 11,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "50 metros de radio / Zeon 100 / Potencial Psíquico 140 / Coste de Ki 8 / Convocación inferior a 180",
            "intermedio": "150 metros de radio / Zeon 150 / Potencial Psíquico 180 Coste de Ki 14 / Convocación 240",
            "avanzado": "300 metros de radio / Zeon 200 / Potencial Psíquico 240 Coste de Ki 22 / Convocación 280",
            "arcano": "500 metros de radio / Zeon 250 / Potencial Psíquico 280 / Técnica de Ki 30 / Convocación 320"
        },
        "mantenimiento": "30 / 40 / 45 / 50 Diario",
        "viasCerradas": "Creación"
    },
    {
        "nombre": "Fortalecer la Magia",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro intensifica el poder de la magia que utiliza el hechicero, haciendo que los sortilegios que emplee sean más difíciles de destruir. Mientras se mantenga, fortalece todos los conjuros que lance el brujo contra efectos que pudieran ser perjudiciales para su magia. En juego, añade puntos de Zeon “falsos” al valor zeónico de los conjuros que utilice a partir de ese momento. Este incremento no es real, por lo que estos puntos no otorgan ningún efecto añadido a los sortilegios, aunque sí aumentan su potencial contra habilidades que afecten a hechizos de poder inferior. Si, por ejemplo el brujo tiene mantenido este conjuro en grado base (+50 puntos) y lanza crear luz en grado intermedio (valor zeónico 50), el potencial del conjuro de Luz no se vería incrementado, pero en el caso de que otro mago lanzase un Destruir Conjuro contra él, el hechizo tendría a efectos prácticos un valor zeónico de 70, en lugar de sólo 20.",
        "zeon": {
            "base": 200,
            "intermedio": 360,
            "avanzado": 480,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 11,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "+50 al valor zeónico falso de los conjuros.",
            "intermedio": "+100 al valor zeónico falso de los conjuros.",
            "avanzado": "+150 al valor zeónico falso de los conjuros.",
            "arcano": "+250 al valor zeónico falso de los conjuros."
        },
        "mantenimiento": "20 / 40 / 50 / 60 Diario",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Condicionamiento",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Condicionamiento afecta directamente a otros conjuros que lance el hechicero, estancándolos y haciendo que no se activen hasta que se dé una circunstancia que su controlador haya elegido. Debe de lanzarse al mismo tiempo que el mago realiza los hechizos adicionales, de modo que dichos sortilegios, en lugar de funcionar con normalidad, esperan para activarse a que se presenten las circunstancias que el brujo hubiera designado. Cada sortilegio condicionado puede ser sometido a una condición distinta pero, una vez prefijadas, posteriormente no pueden cambiarse. El conjuro condicionado se activará automáticamente en el mismo momento en que se dé la circunstancia determinada, incluso si el mago no es consciente de ello. Por ejemplo, si un brujo condiciona el conjuro de Detener Caída, puede decidir que se active en el instante en el que caiga de gran altura, al igual que un nigromante es capaz de condicionar un hechizo de Superar la Muerte para que se ejecute en el momento en el que muera. La acción del conjuro es activa o pasiva, dependiendo de su propia naturaleza, pero siempre se acaba activando al final del asalto en el que se ha dado la condición en caso de que el lanzador no pueda actuar ese asalto. Mientras permanezcan estancados, los conjuros no tienen mantenimiento, ya que no se encuentran activos. Si el hechizo de condicionamiento desaparece, los sortilegios condicionados también se pierden. Pueden condicionarse tantos conjuros como se desee siempre que no excedan el Zeon máximo determinado por el Grado del conjuro. Sólo es posible mantener activo un conjuro de Condicionamiento a la vez.",
        "zeon": {
            "base": 300,
            "intermedio": 400,
            "avanzado": 500,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 11,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "Zeón máximo 100.",
            "intermedio": "Zeón máximo 150.",
            "avanzado": "Zeón máximo 200.",
            "arcano": "Zeón máximo 250."
        },
        "mantenimiento": "30 / 40 / 50 / 60 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Posesión",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Otorga al hechicero la capacidad de tomar control del cuerpo de otro individuo, trasladando temporalmente una parte de su espíritu hasta el huésped. Este dominio permite al brujo utilizar o bien las habilidades del sujeto poseído o bien las suyas propias (el mago decide cada turno cual de ellas emplea, pero en ningún caso podrá mezclarlas ambas a la vez). En caso de que decida usar las habilidades / del cuerpo poseído, las características físicas serán las del cuerpo poseído, y no las del lanzador del conjuro. Si el individuo no tiene una forma física similar a la del / brujo, el lanzador aplicará un penalizador de entre -20 y -40, a discreción del DJ, a causa de la dificultad que entraña para él controlarlo correctamente. Mientras Posesión permanece activo, el cuerpo original del hechicero se encuentra en un estado de coma. Los ataques que no sean capaces de dañar energía sólo afectarán al cuerpo poseído, pero si son sobrenaturales, restarán puntos de vida a ambos por igual. Si el cuerpo es de un ser con acumulación, el brujo sólo sufre una décima parte del daño que recibe la forma física. En el caso de que el cuerpo muera, pero al brujo le sigan quedando puntos de vida, su espíritu regresa de inmediato a su forma original. Para evitar los efectos del conjuro, es necesario superar una RM. El afectado tiene derecho a una nueva tirada por día que transcurra, o cada vez que realice una acción que vaya completamente en contra de su comportamiento.",
        "zeon": {
            "base": 300,
            "intermedio": 400,
            "avanzado": 500,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "RM 120.",
            "intermedio": "RM 140.",
            "avanzado": "RM 180.",
            "arcano": "RM 220."
        },
        "mantenimiento": "30 / 40 / 50 / 60 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Imitar Conjuro",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Efecto (Variable)",
        "efecto": "Permite al brujo imitar un sortilegio que se encuentre en su presencia. Pueden copiarse tanto hechizos automáticos, si se lanzan en el mismo asalto que se utiliza la imitación, como conjuros mantenidos. Este hechizo imita incluso conjuros de Alta Magia o Divinos, sin necesidad de que el brujo tenga el Gnosis necesario para lanzarlos. El brujo elige si emplea su propia Proyección Mágica o la de quien lanza el conjuro original. El máximo valor zeónico de dichos conjuros no puede exceder lo que indique el grado del conjuro.",
        "zeon": {
            "base": 200,
            "intermedio": 300,
            "avanzado": 360,
            "arcano": 420
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Valor zeónico máximo 100.",
            "intermedio": "Valor zeónico máximo 150.",
            "avanzado": "Valor zeónico máximo 200.",
            "arcano": "Valor zeónico máximo 250."
        },
        "mantenimiento": "Como el conjuro imitado",
        "viasCerradas": "Destrucción"
    },
    {
        "nombre": "Magia Innata",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este hechizo incrementa exponencialmente el potencial mágico ambiental, aumentando la capacidad de los brujos para dominar innatamente su magia. En reglas de juego, encanta una zona estática dentro de la cual los conjuros innatos tienen un potencial adicional de lo que indique el ACT del brujo. El lanzador posee la capacidad de elegir si este incremento favorece a todo el mundo, o si sólo él se beneficia de sus efectos.",
        "zeon": {
            "base": 200,
            "intermedio": 300,
            "avanzado": 400,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "25 metros de radio / +10 al valor zeónico de la magia innata.",
            "intermedio": "100 metros de radio/ +20 al valor zeónico de la magia innata.",
            "avanzado": "250 metros de radio / +30 al valor zeónico de la magia innata.",
            "arcano": "500 metros de radio / +40 al valor zeónico de la magia innata."
        },
        "mantenimiento": "50 / 60 / 70 / 80 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Vincular Mantenimiento",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El brujo puede vincular el pago del mantenimiento de uno de sus conjuros a otro individuo u objeto, obligándole a invertir sus puntos de Zeon de un modo inconsciente. La vinculación sólo puede utilizarse sobre personas que posean el Don o, en su defecto, seres u objetos mágicos. Para evitar ser afectado, es necesario superar una RM. Si el individuo vinculado no se da cuenta de que está siendo blanco de este conjuro, no puede realizar un nuevo control de Resistencia. Si se percata y trata de resistirse, tendrá derecho a repetir la tirada, dependiendo del tipo de hechizo al que se le haya vinculado; en el caso de conjuros con mantenimiento diario tendrá derecho a una nueva tirada cada día, mientras que con el resto podrá realizar un nuevo control cada cinco asaltos. En el momento en que supere la RM o no le queden suficientes puntos de Zeon, los efectos de la vinculación desaparecerán para siempre.",
        "zeon": {
            "base": 100,
            "intermedio": 150,
            "avanzado": 200,
            "arcano": 250
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "RM 120.",
            "intermedio": "RM 140.",
            "avanzado": "RM 160.",
            "arcano": "RM 180."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "El Magistrado",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este hechizo crea un área en cuyo interior el brujo se convierte en juez absoluto de lo que ocurre, obteniendo la capacidad de intervenir en las decisiones de todos los presentes. Si lo desea, puede vetar cualquier acción activa de los sujetos que se encuentren en el interior de la zona afectada, prohibiéndoles realizar cualquier cosa que él no quiera que hagan. El brujo no es capaz de someter a nadie a su voluntad, pero sí de impedirles actuar libremente. La prohibición es una acción pasiva, por lo que interrumpe incluso las acciones de individuos que le hayan ganado la iniciativa. El hechicero debe ser consciente de la maniobra que desea vetar. Cada vez que un personaje quiera realizar un acto que prohíba El Magistrado, necesita superar una RM o no podrá iniciarla. Si embargo, incluso si alguien consigue superar la Resistencia, no se verá totalmente libre del conjuro, ya que en el siguiente asalto volverá a someterse a la voluntad del Magistrado si no supera nuevamente el control. El área permanece estática en el lugar donde fue lanzada. La condición para ser afectado consiste, simplemente, en estar dentro del área del conjuro.",
        "zeon": {
            "base": 450,
            "intermedio": 600,
            "avanzado": 800,
            "arcano": 1000
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 14,
            "avanzado": 16,
            "arcano": 18
        },
        "grados": {
            "base": "50 metros de radio / RM 140.",
            "intermedio": "100 metros de radio / RM 180.",
            "avanzado": "500 metros de radio / RM 220.",
            "arcano": "1 kilómetro de radio / RM 260."
        },
        "mantenimiento": "45 / 60 / 80 / 100 Diario",
        "viasCerradas": "Ninguna"
    },
    {
        "nombre": "Predestinación",
        "nivel": "90-100",
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Mediante este conjuro el mago puede modificar los acontecimientos venideros según sus designios, predestinando distintos sucesos en el futuro. Queda a disposición del propio hechicero designar la complejidad de los mismos del modo que desee. Es posible que predestine un único evento, dejando en manos de la casualidad los distintos sucesos que permitan su realización, o por el contrario tratar de determinar cada uno de los aspectos que acabarán causando el fin deseado. Aunque en un principio este conjuro no puede causar un resultado completamente imposible, las posibilidades quedan limitadas únicamente por la imaginación de su lanzador. Los sucesos determinados pueden fijarse para una fecha concreta o para que se repitan eternamente a lo largo del tiempo, como por ejemplo, todos los solsticios de los años bisiestos. Dada la enorme complejidad del sortilegio, veamos ahora algunos ejemplos de lo que se podría hacer con él. Una Predestinación imprecisa sería que el hechicero designe que la fatalidad se cernirá sobre una familia y toda su estirpe, cuyos miembros sufrirán una muerte horrible antes de cumplir cierta edad. Por el contrario, si el brujo quisiese detallarla más, podría precisar, diciendo que sus primogénitos serán asesinados por lobos salvajes la misma noche en la que nazcan. Naturalmente, no todas las predestinaciones han de resultar negativas; se puede decidir, incluso, que un niño acabará convirtiéndose en rey. Sin embargo, no crea un futuro absoluto e ineludible, ya que siempre existe la posibilidad de evitar su resultado. Todo aquel que no se encuentre dentro de los límites prefijados por el hechicero, es decir, fuera de la RM del mismo, tiene la capacidad de impedir que el destino se cumpla. Para contrarrestar la acción de terceros, el lanzador puede inventar medidas de seguridad que se encuentren dentro de los límites del conjuro. Un buen ejemplo sería decidir que cualquier persona que trate de detener el destino será asesinada por lobos, que actuarían como una especie de salvaguardia. Para evitar que este conjuro funcione, sólo se requiere que se supere una única RM en el momento de su lanzamiento, que será realizada por la persona, criatura u objeto con mayor Resistencia de cuantos sean afectados directamente por la Predestinación. Los que se encuentren dentro de sus efectos, no podrán hacer nada para evitar su cumplimiento; la casualidad jugará en su contra de un modo completamente ineludible. Sólo se puede repetir la RM cuando se cumpla alguno de los acontecimientos predeterminados, por lo que, cuanto mayor grado de detalle tenga el sortilegio, mayores posibilidades hay de que pueda evitarse. Si alguno de los acontecimientos predeterminados es impedido, el conjuro entero deja de funcionar. La condición para ser afectado es encontrarse específicamente dentro del destino designado.",
        "zeon": {
            "base": 600,
            "intermedio": 900,
            "avanzado": 1200,
            "arcano": 1500
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 15,
            "avanzado": 17,
            "arcano": 19
        },
        "grados": {
            "base": "RM 140.",
            "intermedio": "RM 170.",
            "avanzado": "RM 200.",
            "arcano": "RM 240."
        },
        "mantenimiento": "No",
        "viasCerradas": "Ninguna"
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

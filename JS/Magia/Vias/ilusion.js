// =====================================================
// VÍA: ILUSIÓN
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaIlusion = {
    id: "ilusion",
    nombre: "Ilusión",
    color: "#ec4899",
    hechizos: [
    {
        "nombre": "Ilusión Sonora",
        "nivel": 2,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Forma un sonido ilusorio, que el hechicero compondrá con completa libertad. Podría crear, por ejemplo, voces humanas o el ruido de un arroyo. El conjuro afectará a aquellos sujetos que no superen una RM. El hechicero puede elegir quién escucha el sonido dentro del área y quién no.",
        "zeon": {
            "base": 30,
            "intermedio": 50,
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
            "base": "RM 100 / radio de 20 metros.",
            "intermedio": "RM 120 / radio de 50 metros.",
            "avanzado": "RM 140 / radio de 100 metros.",
            "arcano": "RM 160 / radio de 250 metros."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Ilusión Olfativa",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Crea un olor ilusorio. El conjuro afectará en radio a aquellos sujetos que no superen una RM. El hechicero puede elegir quién huele el aroma dentro del área y quién no.",
        "zeon": {
            "base": 30,
            "intermedio": 50,
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
            "base": "RM 100 / radio de 20 metros.",
            "intermedio": "RM 120 / radio de 50 metros.",
            "avanzado": "RM 140 / radio de 100 metros.",
            "arcano": "RM 160 / radio de 250 metros."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Ilusión Táctil",
        "nivel": 10,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Falsea el tacto o el gusto de un elemento concreto. El ilusionista decidirá qué nueva sensación o gusto adquiere, y quién la notará, dentro del área. El conjuro afectará a aquellos sujetos que no superen una RM.",
        "zeon": {
            "base": 30,
            "intermedio": 50,
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
            "base": "RM 100 / radio de 20 metros.",
            "intermedio": "RM 120 / radio de 50 metros.",
            "avanzado": "RM 140 / radio de 100 metros.",
            "arcano": "RM 160 / radio de 250 metros."
        },
        "mantenimiento": "5 / 5 / 10 / 10"
    },
    {
        "nombre": "Ilusión Visual",
        "nivel": 12,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Crea una imagen ilusoria inmóvil que engaña al sentido de la vista. El conjuro afectará a cualquier persona dentro del radio de efecto que vea la imagen y no supere una RM. El hechicero puede elegir qué sujetos la verán y cuáles no.",
        "zeon": {
            "base": 40,
            "intermedio": 70,
            "avanzado": 100,
            "arcano": 130
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "RM 100 / radio de 10 metros.",
            "intermedio": "RM 120 / radio de 25 metros.",
            "avanzado": "RM 140 / radio de 50 metros.",
            "arcano": "RM 160 / radio de 100 metros."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Detectar Ilusiones",
        "nivel": 16,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Otorga al brujo la capacidad de sentir las ilusiones en un radio. Mientras esté activa la detección, cualquier conjuro de esta vía será automáticamente revelado al hechicero.",
        "zeon": {
            "base": 60,
            "intermedio": 160,
            "avanzado": 200,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "Afecta a conjuros de grado base.",
            "intermedio": "Afecta a conjuros de grado intermedio.",
            "avanzado": "Afecta a conjuros de grado avanzado.",
            "arcano": "Afecta a conjuros de grado arcano."
        },
        "mantenimiento": "10 / 20 / 20 / 25",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Engatusar",
        "nivel": 20,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El individuo objeto del conjuro ve aumentado, mediante la magia, su carisma y su encanto. Mientras esté activo, el personaje recibirá un bono a sus habilidades secundarias Liderazgo y Persuasión.",
        "zeon": {
            "base": 50,
            "intermedio": 80,
            "avanzado": 100,
            "arcano": 120
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 13
        },
        "grados": {
            "base": "+50 a Liderazgo y Persuasión.",
            "intermedio": "+80 a Liderazgo y Persuasión.",
            "avanzado": "+100 a Liderazgo y Persuasión.",
            "arcano": "+120 a Liderazgo y Persuasión."
        },
        "mantenimiento": "5 / 10 / 10 / 15"
    },
    {
        "nombre": "Alterar Apariencia",
        "nivel": 22,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El ilusionista altera a la vista de los demás el aspecto físico de un individuo u objeto, modificándolo por otro a su elección. Este conjuro sólo podrá aumentar o reducir en tres grados las características de Tamaño Apariencia del afectado. Cualquier sujeto que mire la ilusión, deberá superar una RM para ver la realidad que se esconde bajo este falso aspecto. Una vez que alguien es afectado por ella, sólo tendrá derecho a un nuevo control de Resistencia cuando posea algún motivo para sospechar que hay algo raro en la identidad o apariencia del sujeto.",
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
            "base": "RM 120.",
            "intermedio": "RM 160.",
            "avanzado": "RM 200.",
            "arcano": "RM 240."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Invisibilidad Ilusoria",
        "nivel": 26,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Utilizando este conjuro, un ilusionista puede hacer desaparecer de la vista cualquier ser u objeto. Afectará a tantos como desee, mientras la suma de sus presencias no supere lo que determina el grado del conjuro. Cualquier individuo que mire hacia los cuerpos invisibles deberá superar automáticamente una RM o no será capaz de detectarlos usando su sentido de la vista.",
        "zeon": {
            "base": 60,
            "intermedio": 90,
            "avanzado": 120,
            "arcano": 150
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 120,
            "arcano": 150
        },
        "grados": {
            "base": "RM 120 / Presencia máxima 140.",
            "intermedio": "RM 150 / Presencia máxima 200.",
            "avanzado": "RM 180 / Presencia máxima 260.",
            "arcano": "RM 210 / Presencia máxima 320."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Imagen Espejo",
        "nivel": 30,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Realiza copias de un blanco determinado. Se trata sólo de imágenes ilusorias, que no podrán estar separadas a más de 10 metros de distancia entre ellas. Como si se tratase de espejos, realizarán los mismos movimientos que el blanco del conjuro. Si alguna de ellas es alcanzada por algún impacto que dañe energía, será inmediatamente destruida. Para ver la ilusión, es necesario pasar una RM.",
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
            "arcano": 14
        },
        "grados": {
            "base": "RM 120 / 5 imágenes.",
            "intermedio": "RM 140 / 10 imágenes.",
            "avanzado": "RM 160 / 20 imágenes.",
            "arcano": "RM 180 / 50 imágenes."
        },
        "mantenimiento": "10 / 10 / 15 / 15"
    },
    {
        "nombre": "Ilusión Total",
        "nivel": 32,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Forma una ilusión completa, que engaña a los cinco sentidos de los afectados. El brujo podrá crear cualquier cosa inanimada. La ilusión será destruida si es alcanzada por ataques que dañen energía. El conjuro afectará a cualquiera capaz de ver, oír o sentir la ilusión y que no supere una RM.",
        "zeon": {
            "base": 80,
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
            "base": "120 RM.",
            "intermedio": "160 RM.",
            "avanzado": "200 RM.",
            "arcano": "240 RM."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Confusión",
        "nivel": 36,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Confunde los sentidos de un individuo, provocando un penalizador a todas las habilidades secundarias del campo perceptivo equivalente al nivel de fracaso. Si la diferencia es mayor de 40, el afectado sufrirá un negativo adicional de -20 a toda acción a causa de los mareos. Un individuo afectado no tiene derecho a un nuevo control salvo si aumentan sus Resistencias.",
        "zeon": {
            "base": 50,
            "intermedio": 70,
            "avanzado": 90,
            "arcano": 120
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "RM 120.",
            "intermedio": "RM 120.",
            "avanzado": "RM 120.",
            "arcano": "RM 120."
        },
        "mantenimiento": "5 / 5 / 5 / 10",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Crear Ser Ilusorio",
        "nivel": 40,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Crea un ser ilusorio que actúa dentro de una zona determinada. El ente será confeccionado a gusto del hechicero como un Ser Entre Mundos usando las reglas del Capítulo 26, aunque al ser irreal, goza automáticamente de la Habilidad Natural Exención Física. La criatura será ficticia a todos los efectos y no podrá producir daños ni alterar de ningún modo la realidad, al igual que cualquier ataque no basado en energía la atravesará sin producirle daños. Este conjuro debe lanzarse sobre un área determinada, que se mantiene fija en todo momento. Cualquiera que entre en ella debe de pasar automáticamente una RM y, en caso de superarla, no verá o sentirá a la criatura. De igual forma, si alguien supera la Resistencia de la ilusión, tampoco existirá para la criatura, la cual no será capaz de ver al personaje. La ilusión puede tener como máximo dos niveles por encima del lanzador.",
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
            "base": "RM 120 / Nivel 2 / 20 metros de radio.",
            "intermedio": "RM 140 / Nivel 4 / 50 metros de radio.",
            "avanzado": "RM 160 / Nivel 7 / 100 metros de radio.",
            "arcano": "RM 180 / Nivel 10 / 250 metros de radio."
        },
        "mantenimiento": "5 / 5 / 10 / 10 Diario"
    },
    {
        "nombre": "Resistencia a las Ilusiones",
        "nivel": 42,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Aumenta la Resistencia mágica de un sujeto contra los efectos ilusorios. El conjuro otorga un bonificador a toda RM contra cualquier conjuro de la vía Ilusión (o conjuros de naturaleza similar). Los efectos de este hechizo no se superponen, y sólo se puede afectar con él una vez a cada sujeto.",
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
            "base": "+20 a la RM.",
            "intermedio": "+40 a la RM.",
            "avanzado": "+60 a la RM.",
            "arcano": "+80 a la RM."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Detectar Mentira",
        "nivel": 46,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Detecta automáticamente cualquier mentira que se diga en presencia del hechicero. Cada vez que alguien mienta conscientemente ante el brujo, deberá superar un control de RM o RP, o el lanzador se dará cuenta de que no ha dicho la verdad. Si alguien no sabe que esta mintiendo, no es afectado por el hechizo.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 160,
            "arcano": 200
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
        "mantenimiento": "10 / 15 / 20 / 20 Diario",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Ilusión Fantasmal",
        "nivel": 50,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Crea uno o varios objetos, que se verán sometidos a las reglas de conjuro Fantasmal. Podrá crearse cualquier cosa inanimada que decida el hechicero, desde una espada a un muro, siempre y cuando la supuesta presencia del objeto no supere lo que determina el grado del conjuro. Una vez fallada la Resistencia, los afectados sólo tendrán derecho a una nueva tirada si encuentran algún motivo o sospecha para dudar de la realidad de la ilusión.",
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
            "base": "RM 120 / Presencia máxima 60.",
            "intermedio": "RM 150 / Presencia máxima 80.",
            "avanzado": "RM 180 / Presencia máxima 100.",
            "arcano": "RM 210 / Presencia máxima 120."
        },
        "mantenimiento": "10 / 10 / 15 / 15"
    },
    {
        "nombre": "Falsear Detección",
        "nivel": 52,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Otorga al ilusionista la capacidad de alterar el resultado de cualquier detección de carácter sobrenatural que se realice a su alrededor. Podrá falsear la información de la forma que desee, aumentando o disminuyendo el potencial de una criatura o un artefacto, sus habilidades o su emplazamiento. El personaje que haya lanzado la detección deberá superar una RM para evitar ser engañado. Este conjuro no funciona contra los individuos que se encuentren dentro de su área de efecto, sino contra la propia detección sobrenatural. Por tanto, si alguien intenta detectar algo que está en el radio de acción del sortilegio, incluso si se encuentra físicamente fuera del radio del conjuro, deberá superar igualmente la RM. Sería el ejemplo de un brujo que, desde kilómetros de distancia, trata de encontrar mágicamente al ilusionista o a alguien que va a su lado. Por la misma razón, al afectar directamente a la detección, aquel que la emplee no se percata de que ha tenido que superar una Resistencia y puede estar siendo engañado.",
        "zeon": {
            "base": 120,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "RM 120 / 10 metros de radio.",
            "intermedio": "RM 140 / 50 metros de radio.",
            "avanzado": "RM 180 / 250 metros de radio.",
            "arcano": "RM 220 / 500 metros de radio."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Mentira",
        "nivel": 56,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Al lanzar este conjuro, el ilusionista induce a todo aquel que le escuche a creer sus mentiras, por absurdas o ilógicas que sean. Eso no significa que los afectados deban necesariamente obedecerle, pero sí se sentirán empujados a creerle. Cada vez que el ilusionista diga una mentira, quienes le escuchen deben superar una RM o le creerán. En el caso de que la mentira sea excepcionalmente increíble o un individuo esté prevenido hacia esta habilidad, puede aplicar un bono de +40 a su tirada.",
        "zeon": {
            "base": 100,
            "intermedio": 120,
            "avanzado": 140,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "RM 100.",
            "intermedio": "RM 120.",
            "avanzado": "RM 140.",
            "arcano": "RM 160."
        },
        "mantenimiento": "10 / 15 / 15 / 20 Diario",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Destruir Ilusiones",
        "nivel": 60,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Destruye un conjuro activo que pertenezca a la vía de Ilusión.",
        "zeon": {
            "base": 80,
            "intermedio": 180,
            "avanzado": 300,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Zeón máximo 80.",
            "intermedio": "Zeón máximo 140.",
            "avanzado": "Zeón máximo 200.",
            "arcano": "Zeón máximo 300."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Ser Fantasmal",
        "nivel": 62,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Crea un ser fantasmal. El ente ilusorio será confeccionado a gusto del hechicero como un Ser Entre Mundos, usando las reglas de creación de seres. A todos los efectos, funciona igual que el sortilegio Crear Ser Ilusorio (ilusión nivel 40), salvo por el hecho de que quien fracase una RM se ve sometido a las reglas de conjuros fantasmales. Es posible realizar un nuevo control sólo si un personaje encuentra alguna duda o motivo para sospechar de la autenticidad del ser. El fantasma puede tener como máximo tres niveles por encima del lanzador.",
        "zeon": {
            "base": 100,
            "intermedio": 120,
            "avanzado": 150,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM 120 / Nivel 2 / 20 metros de radio.",
            "intermedio": "RM 140 / Nivel 4 / 50 metros de radio.",
            "avanzado": "RM 160 / Nivel 7 / 100 metros de radio.",
            "arcano": "RM 180 / Nivel 10 / 250 metros de radio."
        },
        "mantenimiento": "10 / 15 / 15 / 20",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Credulidad",
        "nivel": 66,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Debilita las Resistencias sobrenaturales de un blanco contra los conjuros ilusorios. El afectado deberá superar una RM o sufrirá un negativo a su RM y RP, equivalente a la cifra por la que falló el control, aunque únicamente contra hechizos de ilusión.",
        "zeon": {
            "base": 60,
            "intermedio": 100,
            "avanzado": 140,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "RM 140.",
            "intermedio": "RM 160.",
            "avanzado": "RM 180.",
            "arcano": "RM 200."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Ataque Fantasmal",
        "nivel": 70,
        "accion": "Activa",
        "tipo": "Ataque, Anímico",
        "efecto": "Proyecta una descarga de energía fantasmal. El daño se someterá las reglas de conjuros fantasmales. Dado que el ataque no es real, no puede usarse para chocar contra otras descargas. Puede atacar en cualquier tipología de ataque que desee el lanzador.",
        "zeon": {
            "base": 80,
            "intermedio": 140,
            "avanzado": 220,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "RM 140 / Daño 100.",
            "intermedio": "RM 160 / Daño 180.",
            "avanzado": "RM 180 / Daño 250.",
            "arcano": "RM 200 / Daño 350."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "El Don de la Mentira",
        "nivel": 72,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El ilusionista tiene la capacidad de obligar a un individuo a mentir. Puede constreñirle a hacerlo en absolutamente todo lo que diga, o únicamente en un tema determinado. El afectado no podrá indicar a otros que está mintiendo, ni tampoco dar información veraz sobre el tema (o temas) de ningún modo. Si alguien falla la RM o RP, sólo puede repetir el control una vez al día.",
        "zeon": {
            "base": 120,
            "intermedio": 180,
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
            "base": "RM o RP 140.",
            "intermedio": "RM o RP 160.",
            "avanzado": "RM o RP 180.",
            "arcano": "RM o RP 200."
        },
        "mantenimiento": "15 / 20 / 25 / 35 Diario",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Vida Ilusoria",
        "nivel": 76,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Introduce recuerdos falsos en la mente de un individuo. El ilusionista puede alterar sus recuerdos, incluyendo todos los datos nuevos que desee. Una persona influida por este hechizo no es capaz de diferenciar los recuerdos ilusorios de los suyos propios. Una vez fallado el control, el personaje no tendrá derecho a una nueva tirada, salvo si encuentra motivos para pensar que esos recuerdos son falsos.",
        "zeon": {
            "base": 140,
            "intermedio": 200,
            "avanzado": 260,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM o RP 140.",
            "intermedio": "RM o RP 160.",
            "avanzado": "RM o RP 180.",
            "arcano": "RM o RP 200."
        },
        "mantenimiento": "15 / 20 / 30 / 35 Diario",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Ilusión Mayor",
        "nivel": 80,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Crea una enorme ilusión que afecta a los cinco sentidos humanos. El hechizo se manifiesta en una zona dentro de la cual las personas verán y sentirán todo lo que el hechicero desee. Por ejemplo, puede crear la apariencia de que un pueblo está deshabitado cuando en realidad es una próspera ciudad. Cualquiera que entre en la zona se verá afectado automáticamente por la ilusión si no supera una RM. Si falla el control, sus sentidos se adaptarán a la mentira, y sólo podrán repetir la Resistencia si encuentran algún motivo de sospecha sobre la autenticidad de lo que hay a su alrededor.",
        "zeon": {
            "base": 250,
            "intermedio": 350,
            "avanzado": 500,
            "arcano": 700
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "RM 120 / 1 kilómetro de radio.",
            "intermedio": "RM 160 / 5 kilómetros de radio.",
            "avanzado": "RM 200 / 10 kilómetros de radio.",
            "arcano": "RM 240 / 20 kilómetros de radio."
        },
        "mantenimiento": "25 / 35 / 50 / 70 Diario"
    },
    {
        "nombre": "Fijar Ilusión",
        "nivel": 82,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Fija una ilusión a la realidad de forma permanente. A efectos de juego añade puntos de Zeón al mantenimiento de un conjuro de la vía de Ilusión. Esta cantidad no se suma al poder del hechizo, sino que añade Zeón solo para pagar su mantenimiento. No puede utilizarse sobre conjuros de Libre Acceso, incluso si pertenecen a la vía de Ilusión.",
        "zeon": {
            "base": 250,
            "intermedio": 360,
            "avanzado": 450,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "+1.000 puntos de Zeón al mantenimiento.",
            "intermedio": "+1.500 puntos de Zeón al mantenimiento.",
            "avanzado": "+3.000 puntos de Zeón al mantenimiento.",
            "arcano": "+5.000 puntos de Zeón al mantenimiento."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-90"
    },
    {
        "nombre": "Ilusión de Sentidos",
        "nivel": 86,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El hechicero tiene la capacidad de hacer creer a un individuo cualquier cosa que desee. Aunque en realidad el brujo no está cambiando nada, el personaje afectado asumirá la ilusión hasta tal punto que reaccionará como si fuera cierta en todos los aspectos. Si, por ejemplo, utiliza el conjuro para hacerle pensar que no tiene brazos ni piernas, dejará de sentir sus extremidades y caerá al suelo pensando que realmente las ha perdido. Otro ejemplo sería que la ilusión se empleara sobre un luchador herido y con negativos, al cual se le hace sentir no sólo que está en perfecto estado, sino que posee además un bono a toda acción de +50 (completamente ficticio, por supuesto). Si se le dice a un personaje que está muerto, este queda inconsciente automáticamente. El personaje afectado no tendrá derecho a una nueva Resistencia, salvo si tiene la convicción de que es víctima de un engaño.",
        "zeon": {
            "base": 200,
            "intermedio": 250,
            "avanzado": 300,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "RM o RP 120.",
            "intermedio": "RM o RP 150.",
            "avanzado": "RM o RP 190.",
            "arcano": "RM o RP 220."
        },
        "mantenimiento": "20 / 25 / 30 / 35",
        "libreAcceso": "1-90"
    },
    {
        "nombre": "Inexistencia",
        "nivel": 90,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "La persona u objeto que sea blanco de este conjuro no podrá ser percibido mediante ninguno de los sentidos naturales. Por tanto, no será visto, oído, olido, sentido o degustado de ningún modo, aunque seguirá siendo material y físico. Adicionalmente, mientras se mantenga el hechizo, el personaje tampoco dejará rastros o huellas visibles. La única manera de darse cuenta de su presencia será mediante alguna clase de detección sobrenatural; ya sea mágica, psíquica o de Ki. Cualquiera que pueda sentirle mediante algún sentido natural debe superar automáticamente una RM o será incapaz de detectarle. Si alguien falla el control, sólo tendrá la oportunidad de repetirlo cada vez que tenga una causa para pensar que hay alguien a su alrededor. y",
        "zeon": {
            "base": 250,
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
            "base": "RM 120. la",
            "intermedio": "RM 140.",
            "avanzado": "RM 160.",
            "arcano": "RM 180."
        },
        "mantenimiento": "25 / 30 / 40 / 50 Diario"
    },
    {
        "nombre": "Engañar a la Muerte",
        "nivel": 92,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El ilusionista logra, con este conjuro, engañar a la propia muerte. Mientras se encuentre activo, el individuo afectado por él no morirá de ningún modo, puesto que el flujo de almas ignora su presencia y será incapaz de reclamarlo. Aunque su espíritu no saldrá del cuerpo, su forma física puede ser destrozada, y el personaje seguirá sufriendo cualquier efecto perjudicial que le produzca el daño. Este conjuro no protege de un efecto que destruya el alma.",
        "zeon": {
            "base": 500,
            "intermedio": 800,
            "avanzado": 1200,
            "arcano": 1500
        },
        "inteligenciaRequerida": {
            "base": 13,
            "intermedio": 15,
            "avanzado": 17,
            "arcano": 19
        },
        "grados": {
            "base": "Nivel 5.",
            "intermedio": "Nivel 10.",
            "avanzado": "Nivel 15.",
            "arcano": "Nivel 20."
        },
        "mantenimiento": "100 / 160 / 240 / 300 Diario",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Mundo de Mentiras",
        "nivel": 96,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Forma una realidad de mentiras que el lanzador puede modificar a su antojo; es capaz de crear una ciudad de la nada y transformarla, en el asalto siguiente, en un paraje de fantasía; el único límite es su imaginación. Afecta en una zona dentro de la cual todas las ilusiones tendrán el carácter de conjuro fantasmal, y cualquiera que entre en ella debe superar automáticamente una RM para no verse influido por sus efectos. El conjuro también permite engendrar criaturas irreales que habiten el Mundo de Mentiras que, como el resto de las ilusiones, serán de carácter fantasmal. El lanzador tendrá a su disposición niveles a repartir entre estas entidades, aunque ninguna de ellas podrá tener más de la mitad de su nivel (redondeado hacia arriba). Es decir, puede crear cien seres fantasmales de nivel uno o veinte de quinto nivel; cualquier combinación es posible. Los fantasmas serán confeccionados como Seres Entre Mundos, usando las reglas de creación de seres. Estas criaturas tendrán inteligencia y vida ficticia, y son capaces de actuar independientemente siguiendo las órdenes que su señor les haya dado. Los personajes que entren dentro del área de influencia de este hechizo y fallen el control de Resistencia, sólo podrán repetirlo cuando tengan alguna duda sobre la realidad de su entorno.",
        "zeon": {
            "base": 500,
            "intermedio": 900,
            "avanzado": 1400,
            "arcano": 2000
        },
        "inteligenciaRequerida": {
            "base": 13,
            "intermedio": 15,
            "avanzado": 17,
            "arcano": 19
        },
        "grados": {
            "base": "RM 140 / 10 km de radio / 100 niveles a repartir entre seres.",
            "intermedio": "RM 180 / 100 km de radio / 500 niveles a repartir entre seres.",
            "avanzado": "RM 220 / 1.000 km de radio / 1.500 niveles a repartir entre seres.",
            "arcano": "RM 260 / 10.000 km de radio / 5.000 niveles a repartir entre seres."
        },
        "mantenimiento": "50 / 90 / 140 / 200 Diario"
    },
    {
        "nombre": "La Falsa Realidad",
        "nivel": 100,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este hechizo engaña a la existencia, haciendo realidad un hecho que no ha ocurrido. De este modo, se pueden inventar acontecimientos que jamás sucedieron y que repercutan en el presente. La historia no se modifica realmente, ya que el conjuro lo que hace es cambiar las cosas en el momento en el que se desencadena, pero muy pocos son capaces de notar la diferencia. El sortilegio no puede realizar imposibles, sólo alterar acontecimientos factibles que sean capaces de ocurrir si el lanzador crea una situación apropiada. Imaginemos algunos ejemplos. Quien ejecuta este conjuro podría decir que un paso de montaña está bloqueado a causa de que, días atrás, hubo un derrumbamiento provocado por unos ladrones. Así pues, La Falsa Realidad afectaría a un grupo de ladrones cualesquiera (si no se ha seleccionado a ciertos individuos en concreto) y a toda persona que esté viajando por el paso en ese momento. Otra posibilidad sería que el lanzador afirmara que una terrible entidad que no existe, a la que decide llamar Ethon, está a punto de atacar a una ciudad, siempre que sea capaz de justificar su nacimiento alegando, por ejemplo, que fue creada por un poderoso hechicero en el pasado. Todo depende de la creatividad con la que componga su mentira. La RM de este conjuro es difícil de calcular; hay que buscar el ser u objeto con mayor Resistencia que ha sido introducido en la mentira o que se vea afectado por ella. En el primero de los ejemplos anteriores, parece natural que las rocas o el grupo de ladrones serían quienes lanzaran la RM, pero si un individuo de elevado nivel está cruzando el paso en ese momento, podría usar su RM en lugar de los ladrones. En el ejemplo de “Ethon”, lo más lógico seria que el DJ buscara al hechicero más apropiado capaz de realizar semejante creación y le hiciese lanzar la Resistencia. Ten en cuenta que, cuanto mayor sea el acontecimiento provocado, entidades más poderosas podrían tener relación. Dado que en realidad este conjuro no puede cambiar la historia, no es posible devolver la vida a los muertos o hacer que alguien haya fallecido en un pasado distante. La razón que lo justifica es que no es viable devolver al mundo a una presencia que ha regresado al flujo de almas. En el caso de que se cambiara algún acontecimiento que implicase que un difunto volviese a la vida, lo haría sin alma y sin personalidad, como una carcasa vacía de lo que fue realmente. Este sortilegio no permite aumentar o disminuir las características o el nivel de los personajes. Dadas las enormes implicaciones que conlleva, tampoco es posible involucrar en la historia ficticia a un ser con Gnosis superior al del lanzador.",
        "zeon": {
            "base": 600,
            "intermedio": 1000,
            "avanzado": 2000,
            "arcano": 3000
        },
        "inteligenciaRequerida": {
            "base": 14,
            "intermedio": 16,
            "avanzado": 18,
            "arcano": 19
        },
        "grados": {
            "base": "RM 140.",
            "intermedio": "RM 180.",
            "avanzado": "RM 220.",
            "arcano": "RM 240."
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

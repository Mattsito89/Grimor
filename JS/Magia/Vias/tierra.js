// =====================================================
// VÍA: TIERRA
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaTierra = {
    id: "tierra",
    nombre: "Tierra",
    color: "#a16207",
    hechizos: [
    {
        "nombre": "Detectar Minerales",
        "nivel": 2,
        "accion": "Activa",
        "tipo": "Detección",
        "efecto": "Permite al hechicero detectar la ubicación de un mineral determinado que se encuentre en el radio de acción del conjuro. Este hechizo no da información sobre la forma del material, pero sí indica de un modo aproximado su tamaño o cantidad. No es posible detectar a través de barreras basadas en energía.",
        "zeon": {
            "base": 20,
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
            "base": "10 metros de radio.",
            "intermedio": "50 metros de radio.",
            "avanzado": "150 metros de radio.",
            "arcano": "500 metros de radio."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Control Mineral",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Otorga la capacidad de controlar cualquier sustancia mineral. Ten en cuenta que, por mucho dominio que ejerza el hechicero sobre las cosas, no puede atribuirles capacidades que estas no tengan por sí solas. Es decir, aunque controle una roca, no podría hacer que se moviese por sí sola, pero sí obligar a un golem mecánico o a un elemental de piedra a someterse a su voluntad. Los seres de tales características pueden evitar este efecto superando una RM contra 100. La criatura puede repetir el control una vez al día, o si recibe una orden que sea completamente opuesta a su naturaleza.",
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
            "base": "Presencia máxima 30 / RM 100.",
            "intermedio": "Presencia máxima 60 / RM 120.",
            "avanzado": "Presencia máxima 90 / RM 130.",
            "arcano": "Presencia máxima 120 / RM 140."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Aumentar Peso",
        "nivel": 10,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Incrementa el peso de un cuerpo físico ya sea orgánico o inorganico.",
        "zeon": {
            "base": 40,
            "intermedio": 120,
            "avanzado": 200,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "+20 kilogramos.",
            "intermedio": "+120 kilogramos.",
            "avanzado": "+200 kilogramos.",
            "arcano": "+300 kilogramos."
        },
        "mantenimiento": "5 / 25 / 30 / 40 Diario"
    },
    {
        "nombre": "Transformar Mineral",
        "nivel": 12,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Transmuta un determinado tipo de mineral en otro distinto, modificando su composición natural. Puede alterarse minerales convirtiendo, si por ejemplo, una roca en oro. El peso resultante puede variar dependiendo de aquello en que se lo transforme y según su presencia.",
        "zeon": {
            "base": 40,
            "intermedio": 80,
            "avanzado": 120,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "Presencia máxima 30 / hasta 10 kilos de masa.",
            "intermedio": "Presencia máxima 50 / hasta 50 kilos de masa.",
            "avanzado": "Presencia máxima 70 / hasta 100 kilos de masa.",
            "arcano": "Presencia máxima 90 / hasta 250 kilos de masa."
        },
        "mantenimiento": "5 / 5 / 5 / 10",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Firmeza",
        "nivel": 16,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Aumenta el aguante de un individuo o un objeto, haciéndolo especialmente resistente al daño. Si se lanza sobre un ser vivo, otorga un bonificador a cualquier tirada de RF que realice para evitar los efectos de un critico, mientras que si se aplica sobre un objeto, incrementa su entereza. Sólo es posible afectar con un conjuro de Firmeza a un cuerpo a la vez.",
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
            "base": "+20 RF / +3 entereza.",
            "intermedio": "+30 RF / +5 entereza.",
            "avanzado": "+45 RF / +7 entereza.",
            "arcano": "+60 RF / +9 entereza."
        },
        "mantenimiento": "5 / 10 / 15 / 20 Diario",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Barrera de Piedra",
        "nivel": 20,
        "accion": "Activa",
        "tipo": "Defensa",
        "efecto": "Levanta una barrera material que permite al hechicero defenderse de cualquier tipo de ataque que provoque daños, incluyendo los basados en energía. No obstante, este escudo es incapaz de detener efectos anímicos o que obliguen únicamente a realizar una RM o RP. Además de su resistencia, tiene una barrera de daño contra los ataques físicos.",
        "zeon": {
            "base": 60,
            "intermedio": 160,
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
            "base": "Barrera de daño 60 / 600 Puntos de Resistencia.",
            "intermedio": "Barrera de daño 100 / 1.600 Puntos de Resistencia.",
            "avanzado": "Barrera de daño 150 / 3.000 Puntos de Resistencia.",
            "arcano": "Barrera de daño 200 / 5.000 Puntos de Resistencia."
        },
        "mantenimiento": "10 / 20 / 25 / 30"
    },
    {
        "nombre": "Lentitud",
        "nivel": 22,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Reduce la velocidad de desplazamiento y la capacidad de reacción de un individuo si este no supera la RM del conjuro. Si el tipo de movimiento llega a 0, cada punto de movimiento adicional que se disminuya provoca en su lugar un -20 a todas las acciones físicas.",
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
            "base": "RM 120 / -50 al turno y -2 al Tipo de Movimiento.",
            "intermedio": "RM 140 / -70 al turno y -4 al Tipo de Movimiento.",
            "avanzado": "RM 160 / -90 al turno y -6 al Tipo de Movimiento.",
            "arcano": "RM 180 / -120 al turno y -10 al Tipo de Movimiento."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Coraza",
        "nivel": 26,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Forma una coraza física que protege contra todos los tipos de ataque, salvo los basados en energía. Aunque cuenta como una armadura, no se aplican penalizadores al turno por emplear capas de protección adicionales.",
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
            "arcano": 15
        },
        "grados": {
            "base": "TA 2.",
            "intermedio": "TA 4.",
            "avanzado": "TA 6.",
            "arcano": "TA 8."
        },
        "mantenimiento": "5 / 5 / 10 / 10 Diario",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Escudo Magnético",
        "nivel": 30,
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Controlando los campos magnéticos de su entorno, el hechicero levanta un escudo capaz de repeler cualquier ataque que se realice en su contra empleando un medio metálico. Si recibe una acometida de tales características, la distorsión causada por el magnetismo provocará un penalizador de -50 a la habilidad ofensiva del atacante. El escudo sólo puede ser perjudicado por ataques que sean capaces de dañar energía. Esta barrera es virtualmente inútil contra ataques inmateriales o anímicos.",
        "zeon": {
            "base": 50,
            "intermedio": 90,
            "avanzado": 120,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 11,
            "arcano": 14
        },
        "grados": {
            "base": "300 puntos de resistencia.",
            "intermedio": "600 puntos de resistencia.",
            "avanzado": "900 puntos de resistencia.",
            "arcano": "1.200 puntos de resistencia."
        },
        "mantenimiento": "5 / 10 / 10 / 20"
    },
    {
        "nombre": "Atravesar lo Sólido",
        "nivel": 32,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro permite a uno o varios sujetos, a elección del hechicero, ser capaces de atravesar cuerpos sólidos. Aquellos sobre quienes sea lanzado no son realmente inmateriales, viéndose influidos por los efectos de los elementos como el calor o el frío, pero pueden ignorar completamente cualquier cosa no basada en energía. De este modo, podrían atravesar voluntariamente una pared como si no existiera para ellos, o pasar a través de una espada normal sin sufrir daños. Es posible decidir a qué cuerpos se puede atravesar y a cuáles no.",
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
            "base": "Presencia máxima 100.",
            "intermedio": "Presencia máxima 140.",
            "avanzado": "Presencia máxima 180.",
            "arcano": "Presencia máxima 240."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Espina de la Tierra",
        "nivel": 36,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "El control que ejerce el hechicero sobre la tierra le permite levantar afiladas aristas del suelo, que puede utilizar como medio de ataque contra adversarios que se encuentren en la superficie. Cada espina tiene un daño base de 60 y ataca en Penetrantes. No producen efectos sobre seres inmateriales o en aquellos que sólo sean dañados por energía (salvo si las aristas se combinan a un hechizo de Encantar). Cada espina puede ser utilizada para atacar a un mismo individuo, o sobre distintos blancos. A pesar de ser un sortilegio de ataque, no puede utilizarse para realizar un choque de conjuros. Este ataque no puede usarse contra seres voladores que se encuentren en ese momento a más de 10 metros del una superficie sólida.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 150,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "2 Espinas.",
            "intermedio": "4 Espinas.",
            "avanzado": "6 Espinas.",
            "arcano": "8 Espinas."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Rotura",
        "nivel": 40,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Mediante la magia, el brujo incrementa la capacidad de un cuerpo para romper cosas. A efectos de juego, la rotura del objeto o arma sobre el que se lance.",
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
            "base": "+4 a la rotura.",
            "intermedio": "+8 a la rotura.",
            "avanzado": "+12 a la rotura.",
            "arcano": "+15 a la rotura."
        },
        "mantenimiento": "10 / 10 / 15 / 15"
    },
    {
        "nombre": "Telemetría",
        "nivel": 42,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El brujo puede leer la historia de un objeto con el que se ponga en contacto, percibiendo los acontecimientos más importantes que hayan ocurrido con él durante un tiempo. Puede usarse también sobre personas pero, en tal caso, el individuo afectado podrá evitarlo superando una RM.",
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
            "base": "RM 80 / 1 mes.",
            "intermedio": "RM 120 / 1 año.",
            "avanzado": "RM 140 / 10 años.",
            "arcano": "RM 160 / 1 siglo."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Control Magnético",
        "nivel": 46,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga al hechicero el control de los campos magnéticos que se encuentren a su alrededor. De ese modo, podrá mover a distancia con completa libertad cualquier cuerpo metálico que esté a su alcance, con el equivalente de una fuerza determinada por el grado del conjuro. Su control sobre el magnetismo es tal, que sus acciones se ejecutan como un efecto automático sobre el metal. Podría, por ejemplo, paralizar a alguien que utiliza una armadura completa, o arrebatarle la espada de sus manos sin ni siquiera hacer un control de Proyección Mágica. En estos casos, es posible evitar tales efectos superando un control enfrentado de Fuerza o Agilidad. Este control es una acción activa, por lo que el mago ha de tener la acción para ejecutarlo (y, por tanto, no puede ser utilizado como defensa). Si un cuerpo está compuesto por metales sólo en una pequeña parte, o se encuentra escudado con energía, el control de Fuerza aplica un -4. De usarse para enarbolar un arma a distancia, se emplean las mismas reglas que en el poder mental Telequinesis Menor.",
        "zeon": {
            "base": 100,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "25 metros de radio / Fuerza 10",
            "intermedio": "150 metros de radio / Fuerza 12",
            "avanzado": "350 metros de radio / Fuerza 13.",
            "arcano": "500 metros de radio / Fuerza 14."
        },
        "mantenimiento": "10 / 20 / 25 / 30",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Forja",
        "nivel": 50,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro emplea la magia para fraguar un objeto, empleando el equivalente a la habilidad de Forja. Dado que se utiliza puro poder sobrenatural, la creación no aplica ninguno de los modificadores por tiempo de la Tabla 21, ni necesita tener ningún tipo de equipo o fragua. Este hechizo no fabrica materiales, por lo que debe de ser el propio hechicero quien los consiga.",
        "zeon": {
            "base": 160,
            "intermedio": 270,
            "avanzado": 360,
            "arcano": 450
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Forja 120.",
            "intermedio": "Forja 180.",
            "avanzado": "Forja 240.",
            "arcano": "Forja 280."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Cuerpo Sólido",
        "nivel": 52,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El cuerpo designado por el hechicero adquirirá una enorme solidez, obteniendo una resistencia similar a la de la piedra. Si se lanza contra un individuo, obtendrá una armadura natural (salvo contra energía) y una barrera de daño equivalente al doble de su presencia. Mientras se encuentre en este estado sus músculos se fortalecerán, pero también disminuirá en 2 su Tipo de movimiento. El material al que se asemeja el cuerpo transformado varía, dependiendo del grado del conjuro: Roca, acero, diamante y malebolgia.",
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
            "base": "Las habilidades descritas / TA natural 6 / +1 Fuerza.",
            "intermedio": "Las habilidades descritas / TA natural 8 / +2 Fuerza.",
            "avanzado": "TA natural 10 / No puede ser dañado por ataques físicos no basados en energía / +3 Fuerza.",
            "arcano": "Como en grado Intermedio, pero obtiene TA natural 12 / Los ataques físicos basados en energía le producen sólo la mitad de daño / +4 Fuerza."
        },
        "mantenimiento": "10 / 15 / 15 / 20",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Resistencia",
        "nivel": 56,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este hechizo afecta al cuerpo de un individuo, confiriéndole temporalmente la capacidad de absorber casi cualquier daño. A efectos de juego, otorga “puntos de vida adicionales”, permitiendo al afectado emplear las reglas de defensa de los seres con acumulación. Estos puntos serán los primeros que pierda antes de restar los suyos propios. El efecto añadido otorga además +50 Puntos de Vida adicionales. La TA depende del Tamaño del personaje. Mientras este conjuro permanezca activo, el individuo sobre el que sea lanzado no puede utilizar ningún tipo de habilidad de defensa. Sólo un hechizo de Resistencia puede afectar a la vez a un sujeto determinado.",
        "zeon": {
            "base": 100,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "500 Puntos de Vida.",
            "intermedio": "1.200 Puntos de Vida.",
            "avanzado": "2.000 Puntos de Vida.",
            "arcano": "3.000 Puntos de Vida."
        },
        "mantenimiento": "10 / 20 / 25 / 30",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Petrificar",
        "nivel": 60,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este hechizo transforma en piedra a un ser físico, confinándolo en esa forma durante años si es preciso. Mientras se encuentre petrificado, no podrá moverse ni ser consciente de lo que ocurre a su alrededor. Cuando el conjuro desaparezca, el individuo vuelve a su forma original, con la misma edad y apariencia que tenia en el momento en el que fue petrificado. Si la “estatua” sufre deterioros o se rompe, el sujeto puede recibir daños o incluso morir. Para resistirse a este efecto, es necesario superar una RM contra lo que determine el grado del conjuro. Un sujeto afectado por un conjuro de petrificación tiene derecho a repetir la tirada, al finalizar el primer día en el que fue afectado y, posteriormente, una vez a la semana.",
        "zeon": {
            "base": 140,
            "intermedio": 200,
            "avanzado": 260,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM 120.",
            "intermedio": "RM 150.",
            "avanzado": "RM 180.",
            "arcano": "RM 220."
        },
        "mantenimiento": "10 / 10 / 15 / 20 Diario"
    },
    {
        "nombre": "Grieta",
        "nivel": 62,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El brujo es capaz de abrir grietas de gran tamaño en el suelo, capaces de engullir por igual tanto construcciones como personas. Si un individuo se encuentra en la zona en la que se abre la grieta, debe superar un control de Agilidad para evitar caer al interior y sufrir una caída de entre 20 y 50 metros. Las construcciones con una barrera de daño muy elevada no son afectadas por este conjuro, dado que su edificación es demasiado compacta para ser deteriorada por la fisura. La grieta tendrá una longitud y anchura máximas determinadas por el grado del conjuro.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
            "avanzado": 250,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "10 metros de longitud y 3 de anchura / Construcciones con barrera de daño 40.",
            "intermedio": "25 metros de longitud / 8 de anchura / Construcciones con barrera de daño 60.",
            "avanzado": "36 metros de longitud / 12 de anchura / Construcciones con barrera de daño 80.",
            "arcano": "48 metros de longitud / 15 de anchura / Construcciones con barrera de daño 100."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Invertir la Gravedad",
        "nivel": 66,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Altera completamente las fuerzas gravitacionales de una zona del planeta, invirtiendo su potencia; en cierta manera, le da la vuelta al mundo por completo. Todo lo que se encuentre en el interior de un área, comenzará de inmediato a “caer” hacia el cielo hasta la distancia máxima que determine el conjuro. El lanzador puede fijar un límite a la caída inferior del máximo (por ejemplo, afectar sólo lo que se encuentre en el interior de una construcción), o por el contrario, arrojarlo todo hasta su máxima altura. Naturalmente, las cosas que se encuentren pegadas al suelo no caerán, del mismo modo que un sujeto puede quedarse “colgando” si encuentra algo donde agarrarse. Un individuo puede evitar este efecto superando una RM. El hechizo permanece estático en el lugar donde fue lanzado.",
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
            "base": "25 metros de radio / 50 de altura / 120 RM",
            "intermedio": "50 metros de radio / 100 de altura / 140 RM",
            "avanzado": "100 metros de radio / 200 de altura / 160 RM",
            "arcano": "150 metros de radio / 300 de altura / 180 RM"
        },
        "mantenimiento": "40 / 50 / 60 / 65 Diario",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Creación Mineral",
        "nivel": 70,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El hechicero puede utilizar este conjuro para crear cualquier cosa que desee, siempre y cuando esté compuesta por minerales o metales. El objeto creado debe de aparecer ubicado lógicamente según su naturaleza. Es decir, no se puede crear una pequeña montaña en mitad del aire.",
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
            "base": "Presencia máxima 40.",
            "intermedio": "Presencia máxima 70.",
            "avanzado": "Presencia máxima 100.",
            "arcano": "Presencia máxima 140."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario"
    },
    {
        "nombre": "Erudición del Terreno",
        "nivel": 72,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El lanzador obtiene un conocimiento absoluto de todo lo que se halla a su alrededor en contacto con el suelo. En realidad este conjuro no es un hechizo de localización, sino que permite al brujo unir su conciencia con la propia tierra, y sentir todo lo que esté en contacto con ella como si se encontrara presente. Tanto seres vivos como construcciones, son localizados de inmediato (siempre y cuando no se trate de seres inmateriales o voladores). Este conjuro no permite ver a través de lugares sellados por energía.",
        "zeon": {
            "base": 120,
            "intermedio": 270,
            "avanzado": 360,
            "arcano": 450
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "500 metros de radio.",
            "intermedio": "3 kilómetros de radio.",
            "avanzado": "10 kilómetros de radio.",
            "arcano": "15 kilómetros de radio."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Terremoto",
        "nivel": 76,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Provoca una sacudida a gran escala capaz de devastar cuanto rodee al lanzador. Cualquier construcción con una barrera de daño inferior a 40 quedará destruida de inmediato, mientras que el resto sufrirá 5 puntos de daño en el primer asalto, que se irán doblando cada turno posterior. Así pues, recibirá 5 puntos de daño en el primero, 10 en el segundo, 20 en el tercero… Las construcciones con una barrera de daño superior a 150 no son afectadas por el terremoto. Naturalmente, cualquier individuo dentro de la zona del conjuro sufrirá sus efectos, dependiendo siempre del entorno en el que se encuentre.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
            "avanzado": 300,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "500 metros de radio.",
            "intermedio": "3 kilómetros de radio.",
            "avanzado": "10 kilómetros de radio.",
            "arcano": "15 kilómetros de radio."
        },
        "mantenimiento": "15 / 20 / 25 / 30",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Destrucción Gravitacional",
        "nivel": 80,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El control de la gravedad que otorga este hechizo permite al brujo crear una cúpula de alta presión, capaz de reventar completamente cualquier cosa física que se encuentre en su interior. Si un individuo está dentro de ella, deberá superar una RF contra 180 cada asalto, o sufrir un daño equivalente a la mitad de su nivel de fracaso. No obstante, cada punto de TA contra ataques Contundentes otorga un bono de +5 a la tirada de RF. La cúpula permanece estática en el lugar donde es lanzada, aunque la presión impide a cualquiera que se encuentre en su interior salir, si no es capaz de superar un control de Fuerza 16. La potencia gravitacional es tan fuerte que incluso los seres inmateriales son parcialmente afectados por ella, aunque podrán aplicar un bono de +40 a sus controles de Resistencia y +6 a los de Fuerza. Tiene un radio de 20 metros, dentro del cual no es posible seleccionar blancos, y sólo el lanzador será inmune a sus efectos. La condición para ser afectado por el conjuro es encontrarse en el interior de la cúpula el turno siguiente al que es lanzada.",
        "zeon": {
            "base": 180,
            "intermedio": 250,
            "avanzado": 320,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "20 metros de radio.",
            "intermedio": "50 metros de radio.",
            "avanzado": "100 metros de radio.",
            "arcano": "150 metros de radio."
        },
        "mantenimiento": "20 / 25 / 35 / 40"
    },
    {
        "nombre": "Crear Golem",
        "nivel": 82,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea un ser de piedra con apariencia de vida, bajo el control absoluto del hechicero. El ente será creado como un Ser Entre Mundos, usando los poderes y limitaciones de los elementales de Piedra de las reglas de creación de seres. La criatura tendrá PD y se le aplican los mismos límites descritos en el conjuro Crear Ser, de la vía de Creación.",
        "zeon": {
            "base": 250,
            "intermedio": 350,
            "avanzado": 500,
            "arcano": 700
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Nivel 1.",
            "intermedio": "Nivel 3.",
            "avanzado": "Nivel 6.",
            "arcano": "Nivel 10."
        },
        "mantenimiento": "50 / 70 / 100 / 140 Diario",
        "libreAcceso": "1-90"
    },
    {
        "nombre": "Aumento de Gravedad",
        "nivel": 86,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Incrementa la masa de la atmósfera de una zona determinada, aumentando con ello la fuerza de la gravedad y, por tanto, el peso de todo lo que se halle en su interior. A efectos de juego, aumenta el peso de todo lo que determine el hechicero dentro del área del conjuro. El área del sortilegio permanece estática en el lugar donde fue lanzado.",
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
            "base": "Dobla el peso / 100 metros de radio.",
            "intermedio": "Triplica el peso / 200 metros de radio.",
            "avanzado": "Quintuplica el peso / 300 metros de radio.",
            "arcano": "Deduplica el peso / 400 metros de radio."
        },
        "mantenimiento": "20 / 25 / 30 / 35 Diario",
        "libreAcceso": "1-90"
    },
    {
        "nombre": "Meteoro",
        "nivel": 90,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Este conjuro permite a su lanzador controlar la trayectoria de uno o varios meteoros y arrojarlos desde los cielos para provocar una devastación sin precedentes. A pesar de ser un conjuro de ataque, la llegada de cada asteroide requiere entre uno y diez asaltos tras su lanzamiento, los cuales se determinan lanzando un dado de diez por meteoro. Cada uno de ellos produce un daño base de 200 puntos en 10 metros de radio, atacando en la TA de Contundentes o Calor. No obstante, todo lo que se encuentre en una zona de 50 metros alrededor del impacto central, sufrirá también los efectos de la onda expansiva, que tiene un daño base de 60 puntos produce adicionalmente un impacto de Fuerza 14. Naturalmente, este conjuro no produce efectos plenos si es lanzado en interiores o subterráneos, por lo que sus consecuencias pueden alterarse dependiendo del entorno.",
        "zeon": {
            "base": 200,
            "intermedio": 250,
            "avanzado": 350,
            "arcano": 450
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "1 meteoro.",
            "intermedio": "5 meteoros.",
            "avanzado": "10 meteoros.",
            "arcano": "15 meteoros."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Control de la Gravedad",
        "nivel": 92,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga la capacidad de controlar completamente todas las fuerzas gravitacionales de una zona del planeta. Dentro de ella, el lanzador tendrá un dominio absoluto de la gravedad, pudiendo anularla, incrementar hasta diez veces su valor o invertirla. Todo cuerpo físico que se encuentre en esta área, será automáticamente influido por sus efectos.",
        "zeon": {
            "base": 350,
            "intermedio": 500,
            "avanzado": 650,
            "arcano": 800
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 14,
            "avanzado": 16,
            "arcano": 18
        },
        "grados": {
            "base": "100 kilómetros de radio.",
            "intermedio": "750 kilómetros de radio.",
            "avanzado": "1.500 kilómetros de radio.",
            "arcano": "5.000 kilómetros de radio."
        },
        "mantenimiento": "70 / 100 / 130 / 160 L Diario"
    },
    {
        "nombre": "Uno con la Tierra",
        "nivel": 96,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El hechicero puede fusionar su esencia con el mundo, obteniendo un control absoluto de cualquier elemento mineral. Este control le permite alterar la apariencia del planeta dentro de su radio de acción, levantando montañas y cordilleras o haciéndolas desaparecer. Toda criatura basada en piedra que se encuentre dentro del área del sortilegio deberá superar una RM o será controlada de inmediato. Si la pasan, ya no necesitan volver a realizar el control. Los afectados tienen derecho a una nueva tirada únicamente si alteran su Resistencia base.",
        "zeon": {
            "base": 300,
            "intermedio": 450,
            "avanzado": 600,
            "arcano": 1000
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "100 kilómetros de radio / 140 RM.",
            "intermedio": "1.000 kilómetros de radio / 180 RM.",
            "avanzado": "10.000 kilómetros de radio / 200 RM.",
            "arcano": "Afecta cualquier elemento mineral existente / 240 RM."
        },
        "mantenimiento": "30 / 45 / 60 / 100 Diario",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Control Atómico",
        "nivel": 100,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este hechizo permite a su lanzador controlar completamente la materia atómica que se encuentre a su alrededor, pudiendo moldearla como si fuese arcilla en sus manos. Para él, todo lo que se mueve no es más que un conjunto de átomos que alterar y manejar a su antojo. De este modo, obtiene el dominio absoluto de toda materia, orgánica o inorgánica, que no supere una RF o RM y se encuentre cerca. No hay límite para lo que el brujo puede hacer con un cuerpo que tiene controlado, desde alterar su forma, masa y apariencia, hasta hacerlo desaparecer completamente desperdigando sus átomos. Este conjuro sólo afecta materia física, por lo que no tiene ningún efecto sobre cuerpos completamente inmateriales o almas.",
        "zeon": {
            "base": 450,
            "intermedio": 800,
            "avanzado": 1200,
            "arcano": 1600
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 14,
            "avanzado": 16,
            "arcano": 18
        },
        "grados": {
            "base": "RM o RF 140 / 100 metros de radio.",
            "intermedio": "RM o RF 160 / 250 metros de radio.",
            "avanzado": "RM o RF 200 / 500 metros de radio.",
            "arcano": "RM o RF 240 / 1 kilómetro de radio."
        },
        "mantenimiento": "45 /80 / 120 / 160",
        "libreAcceso": "1-10"
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

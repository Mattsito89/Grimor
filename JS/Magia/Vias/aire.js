// =====================================================
// VÍA: AIRE
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaAire = {
    id: "aire",
    nombre: "Aire",
    color: "#38bdf8",
    hechizos: [
    {
        "nombre": "Crear Viento",
        "nivel": 2,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Levanta viento de gran velocidad. Para usar este conjuro, es necesario que el brujo se encuentre en el exterior, o en una zona en la que sea posible que sople el aire. La anchura de la corriente no deberá exceder lo determinado por el grado del conjuro, y su longitud será 10 veces su anchura.",
        "zeon": {
            "base": 30,
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
            "base": "20 Km/h / 25 metros de anchura.",
            "intermedio": "40 Km/h / 50 metros de anchura.",
            "avanzado": "80 Km/h / 75 metros de anchura.",
            "arcano": "100 Km/h / 100 metros de anchura."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Mover",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro permite al brujo mover objetos inanimados a distancia, sin la necesidad de que exista contacto físico entre ellos, a una velocidad equivalente a un Tipo de vuelo 10. No afecta a objetos que estén directamente en contacto con seres vivos.",
        "zeon": {
            "base": 30,
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
            "base": "Peso máximo 10 Kg.",
            "intermedio": "Peso máximo 50 Kg.",
            "avanzado": "Peso máximo 100 Kg.",
            "arcano": "Peso máximo 250 Kg."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Reducir Peso",
        "nivel": 10,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Reduce el peso de un cuerpo material orgánico o inorgánico hasta un mínimo de 1 kilogramo.",
        "zeon": {
            "base": 40,
            "intermedio": 140,
            "avanzado": 240,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "-20 Kg.",
            "intermedio": "-150 Kg.",
            "avanzado": "-300 Kg.",
            "arcano": "-500 Kg."
        },
        "mantenimiento": "5 / 15 / 25 / 35 Diario"
    },
    {
        "nombre": "No Respirar",
        "nivel": 12,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "El blanco de este conjuro deja de tener la necesidad de respirar. Puede afectar a tantos individuos como desee el lanzador, siempre que la suma de sus presencias no supere lo que determine el grado del conjuro.",
        "zeon": {
            "base": 40,
            "intermedio": 80,
            "avanzado": 110,
            "arcano": 150
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "Presencia máxima 80.",
            "intermedio": "Presencia máxima 150.",
            "avanzado": "Presencia máxima 200.",
            "arcano": "Presencia máxima 350."
        },
        "mantenimiento": "5 / 10 / 10 / 15 Diario",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Movimiento Libre",
        "nivel": 16,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga al blanco del conjuro la habilidad de moverse libremente por cualquier tipo de superficie, ignorando completamente las leyes de la gravedad. De este modo, un individuo podrá caminar por encima del agua o correr sin problemas por paredes y techos. Puede afectar a tantos blancos como desee el brujo, siempre que la suma de sus presencias no supere lo que determine el grado del conjuro.",
        "zeon": {
            "base": 50,
            "intermedio": 80,
            "avanzado": 110,
            "arcano": 150
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "Presencia máxima 80.",
            "intermedio": "Presencia máxima 120.",
            "avanzado": "Presencia máxima 160.",
            "arcano": "Presencia máxima 240."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Golpe de Aire",
        "nivel": 20,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "El hechicero desencadena un potente golpe de viento, concentrándolo lo suficiente para impactar a un solo blanco muy lejano, o de una forma tan dispersa como para retener a un grupo de personas a distancia. En el caso de que se concentre sobre un solo blanco, aplica un bonificador de +2 a su Fuerza. Aunque mínimo, un golpe de viento es capaz de causar daño real, que equivaldría al doble del bono de la Fuerza del impacto atacando en Contundente. Al ser un impacto producido por aire, el ataque sólo podrá ser percibido por personas capaces de ver magia o que superen un control de Advertir contra Absurdo.",
        "zeon": {
            "base": 40,
            "intermedio": 80,
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
            "base": "5 metros de anchura / Fuerza 6.",
            "intermedio": "20 metros de anchura / Fuerza 9.",
            "avanzado": "30 metros de anchura / Fuerza 12.",
            "arcano": "50 metros de anchura / Fuerza 14."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Pantalla de Aire",
        "nivel": 22,
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Forma una barrera de aire que protege frente a cualquier fuente de ataque, excepto aquellas basadas en electricidad o energía. Adicionalmente, los fuertes vientos que levanta perjudican a cualquier proyectil físico que sea disparado o lanzado contra el defensor, por lo que provocan un penalizador de -50 a la habilidad de ataque final del proyectil.",
        "zeon": {
            "base": 50,
            "intermedio": 160,
            "avanzado": 200,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 14
        },
        "grados": {
            "base": "300 puntos de Resistencia.",
            "intermedio": "1.500 puntos de Resistencia.",
            "avanzado": "2.000 puntos de Resistencia.",
            "arcano": "3.500 puntos de Resistencia."
        },
        "mantenimiento": "5 / 20 / 20 / 25",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Transporte Automático",
        "nivel": 26,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El hechicero, o quien este designe, es teletransportado a un lugar que vea o conozca de antemano. Este conjuro permite pasar a través de objetos físicos, como muros o puertas, mientras estos no se encuentren basados en energía o sean de carácter sobrenatural. En caso de que el conjuro se use para teletransportar a alguien a una posición innatural (como por ejemplo, a 50 metros de altura en el aire), el blanco del conjuro puede aplicar un +40 a su RM. Puede afectar a tantos blancos como desee el brujo, siempre que la suma de sus presencias no supere lo que determine el grado del conjuro.",
        "zeon": {
            "base": 50,
            "intermedio": 80,
            "avanzado": 120,
            "arcano": 150
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "50 metros / Presencia máxima 60.",
            "intermedio": "250 metros / Presencia máxima 90.",
            "avanzado": "400 metros / Presencia máxima 120.",
            "arcano": "1 kilómetro / Presencia máxima 150."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Vuelo",
        "nivel": 30,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga al afectado la capacidad de moverse con un Tipo de Vuelo místico determinado por el grado del conjuro.",
        "zeon": {
            "base": 60,
            "intermedio": 100,
            "avanzado": 150,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Tipo de Vuelo 4.",
            "intermedio": "Tipo de Vuelo 8.",
            "avanzado": "Tipo de Vuelo 12.",
            "arcano": "Tipo de Vuelo 15."
        },
        "mantenimiento": "15 / 20 / 25 / 30"
    },
    {
        "nombre": "Incremento de Reacción",
        "nivel": 32,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Aumenta la capacidad de reacción de un sujeto, otorgándole un bono a su turno. A partir de turno 200, este incremento se reduce a la mitad.",
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
            "base": "+30 al turno.",
            "intermedio": "+60 al turno.",
            "avanzado": "+90 al turno.",
            "arcano": "+120 al turno."
        },
        "mantenimiento": "5 / 5 / 10 / 15",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Electrificar",
        "nivel": 36,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro electrifica un cuerpo físico, provocando potentes descargas a quien lo toque. Cualquier sujeto que se ponga en contacto con él, incluyendo el lanzador, deberá superar cada asalto una RF o perderá una cantidad de puntos de vida equivalente a la mitad del nivel de fracaso. El daño se considera producido por un ataque de electricidad. La máxima presencia del objeto así como su longitud máxima son determinadas por el grado del conjuro.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 160,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "RF 100 / Presencia máxima 30 / 1 metro de longitud.",
            "intermedio": "RF 120 / Presencia máxima 40 / 3 metros de longitud.",
            "avanzado": "RF 140 / Presencia máxima 60 / 5 metros de longitud.",
            "arcano": "RF 160 / Presencia máxima 80 / 10 metros de longitud."
        },
        "mantenimiento": "10 / 15 / 20 / 25 Diario",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Tajo de Aire",
        "nivel": 40,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Produce una fuerte ráfaga de aire, capaz de cortar lo que toque como si se tratase de una afilada espada. El tajo afecta en una línea en la cual no será posible seleccionar blanco. Tiene un daño base de 80 y ataca en Filo, reduciendo en -2 la TA al defensor.",
        "zeon": {
            "base": 60,
            "intermedio": 150,
            "avanzado": 240,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Línea de 3 metros de longitud.",
            "intermedio": "Línea de 12 metros de longitud.",
            "avanzado": "Línea de 25 metros de longitud.",
            "arcano": "Línea de 50 metros de longitud."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Velocidad",
        "nivel": 42,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Incrementa de un modo increíble la velocidad de desplazamiento de los individuos afectados. A efectos de juego, dobla la cantidad de metros por asalto que un personaje puede moverse gracias a su Tipo de movimiento. Puede afectar a tantos blancos como desee el brujo, siempre que la suma de sus presencias no supere lo que determine el grado del conjuro.",
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
            "base": "Presencia máxima 50.",
            "intermedio": "Presencia máxima 80.",
            "avanzado": "Presencia máxima 120.",
            "arcano": "Presencia máxima 160."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Rayo",
        "nivel": 46,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Desencadena un relámpago eléctrico con un daño base de 100 puntos. Antes de impactar, el hechicero debe elegir si concentra todo el poder del rayo en una sola descarga, o por el contrario tras alcanzar su blanco, la electricidad rebota una vez hacia el cuerpo más próximo realizando un nuevo ataque de idénticas características al primero. El hechicero no podrá elegir sobre quién se dirigirá el rayo después del ataque original, aunque nunca podrá volverse contra él. Un mismo blanco no puede ser afectado dos veces por el mismo rayo a causa de los rebotes.",
        "zeon": {
            "base": 80,
            "intermedio": 180,
            "avanzado": 280,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "1 rebote o +10 al Daño.",
            "intermedio": "10 rebotes o + 40 al Daño.",
            "avanzado": "15 rebotes o + 80 al Daño.",
            "arcano": "25 rebotes o +150 al Daño."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Remolino",
        "nivel": 50,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El brujo levanta un remolino de aire que lo arrasa todo a su paso. Cualquier sujeto que se encuentre en el interior de su área recibirá automáticamente un ataque con una habilidad directa de Absurdo (es decir, un ataque final de 180) y un daño base de 40 en Contundente. Adicionalmente, todos los afectados deberán superar un control enfrentado de características, usando su Fuerza o Agilidad contra el equivalente a una Fuerza 12, o de lo contrario serán levantados por los aires y arrollados por el remolino. Quien sea arrastrado de esta manera, recibe un penalizador de -60 a toda acción mientras permanezca en su interior. Cuando el conjuro finalice, los cuerpos elevados caen desde una distancia de entre 30 y 50 metros. La condición para ser afectado por el remolino será encontrarse en el interior de su área, a partir del asalto siguiente al que ha sido creado. El hechicero podrá desplazar el hechizo con una velocidad 8. No tiene efectos sobre cuerpos inmateriales o aquellos que no sean afectados por el aire.",
        "zeon": {
            "base": 140,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "3 metros de radio.",
            "intermedio": "6 metros de radio.",
            "avanzado": "12 metros de radio.",
            "arcano": "25 metros de radio."
        },
        "mantenimiento": "30 / 40 / 50 / 60"
    },
    {
        "nombre": "Forma etérea",
        "nivel": 52,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El cuerpo designado por el hechicero se transformará en aire, volviéndose intangible ante todas las materias y ataques no basados en energía. Mientras se encuentre en este estado será invisible ante cualquier individuo incapaz de ver magia o que no supere un control de Advertir contra Casi Imposible, o un Buscar contra Muy Difícil. Aunque no puede traspasar materia física, un cuerpo etéreo se introduce por cualquier rendija o espacio por el que pueda soplar el aire.",
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
            "base": "Las habilidades descritas.",
            "intermedio": "El sujeto podrá moverse por el aire a una velocidad equivalente a su Tipo de movimiento natural.",
            "avanzado": "Como el Intermedio, pero incluso aquellos con la capacidad de ver magia requieren superar un control de Advertir contra Muy Difícil, o un Buscar contra Medio para ver al personaje.",
            "arcano": "Como el Avanzado, pero los ataques de Filo o Penetrantes basados en energía le producen sólo mitad de daño."
        },
        "mantenimiento": "10 / 15 / 15 / 20",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Control del Aire",
        "nivel": 56,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Otorga al hechicero el control del aire, así como el de cualquier sustancia gaseosa que se encuentre a su alrededor. El mago será capaz de manejar a su antojo las corrientes de viento y los elementos gaseosos para usarlos como desee. Podría, por ejemplo, vaciar de aire una zona o cambiar el curso de un tornado. Si se lanza sobre un ser basado naturalmente en aire, el mago podrá controlarlo si la criatura no supera una RM.",
        "zeon": {
            "base": 80,
            "intermedio": 150,
            "avanzado": 240,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "Radio de 50 metros / RM 120.",
            "intermedio": "Radio de 300 metros / RM 140.",
            "avanzado": "Radio de 500 metros / RM 180.",
            "arcano": "Radio de 1 kilómetro / RM 220."
        },
        "mantenimiento": "10 / 20 / 25 / 35",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Control de la Electricidad",
        "nivel": 60,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Permite controlar la forma y dirección de una fuente eléctrica. Si se trata de un ser basado naturalmente en electricidad, el mago podrá controlarlo si este no supera una RM.",
        "zeon": {
            "base": 80,
            "intermedio": 150,
            "avanzado": 240,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "RM 120 / 5 intensidades.",
            "intermedio": "RM 160 / 15 intensidades.",
            "avanzado": "RM 180 / 25 intensidades.",
            "arcano": "RM 220 / 40 intensidades."
        },
        "mantenimiento": "10 / 20 / 25 / 35"
    },
    {
        "nombre": "Movimiento Defensivo",
        "nivel": 62,
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Mediante esta defensa, el brujo se mueve o se transporta fuera del alcance de un ataque. A efectos de juego, permite utilizar la habilidad de Proyección Mágica del hechicero como si se tratase de su esquiva. Podrá apartarse de un máximo de ataques por asalto, tras los cuales deberá encontrar otro método de defensa hasta el siguiente turno. El conjuro esquiva como si se dispusiera de una velocidad equivalente a un Tipo de movimiento determinado por el grado del conjuro a la hora de contabilizar los penalizadores contra ataques en área.",
        "zeon": {
            "base": 120,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "3 Esquivas por asalto / Tipo de Movimiento 8.",
            "intermedio": "9 Esquivas por asalto / Tipo de Movimiento 12.",
            "avanzado": "15 Esquivas por asalto / Tipo de Movimiento 16.",
            "arcano": "Sin límite de esquivas / Tipo de Movimiento 18."
        },
        "mantenimiento": "15 / 20 / 25 / 30",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Teletransportación",
        "nivel": 66,
        "accion": "Activa",
        "tipo": "Efecto.",
        "efecto": "El hechicero o quien este designe es transportado a distancia. Este conjuro permite pasar a través de cuerpos físicos si no se encuentran basados en energía. Puede afectar a tantos blancos como desee el brujo, siempre que la suma de sus presencias no supere lo que determine el grado del conjuro. El objetivo tiene que conocer o ver el lugar al que va a ser transportado si quiere poder hacerlo con precisión. En caso contrario, sólo se transportará a un lugar aproximado hacia la dirección que desee.",
        "zeon": {
            "base": 180,
            "intermedio": 300,
            "avanzado": 450,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "Presencia máxima 80 / 10 kilómetros.",
            "intermedio": "Presencia máxima 150 / 10.000 kilómetros.",
            "avanzado": "Presencia máxima 240 / 100.000 kilómetros.",
            "arcano": "Presencia máxima 350 / Cualquier distancia."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Inmaterialidad",
        "nivel": 70,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "El cuerpo designado por el hechicero se vuelve completamente inmaterial, haciéndose intangible ante todo lo que no esté basado en energía. Mientras esté así el afectado no podrá tocar ni ser tocado y, por tanto, será capaz de atravesar cualquier cosa que no sea de naturaleza sobrenatural. Si el hechicero lanza el conjuro sobre un sujeto o cuerpo que desea resistirse a sus efectos, este deberá superar una RM para conseguirlo. Si fracasa el control y se torna inmaterial, tendrá derecho a una nueva Resistencia cada día. La máxima presencia afectable será de 80 puntos.",
        "zeon": {
            "base": 120,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "RM 100 / Presencia máxima 80.",
            "intermedio": "RM 140 / Presencia máxima 120.",
            "avanzado": "RM 160 / Presencia máxima 160.",
            "arcano": "RM 200 / Presencia máxima 200."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario"
    },
    {
        "nombre": "Huracán",
        "nivel": 72,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Como su nombre indica, este conjuro crea un terrible vendaval que arrasará cuanto se encuentre en un radio de acción. Cualquiera que esté en el interior del área deberá superar un control contra una Fuerza 12, o será arrastrado por el viento. Toda construcción que posea una barrera de daño inferior a 60 quedará automáticamente destrozada, mientras que las que tengan menos de 120, recibirán 10 puntos de daño por asalto hasta ser destruidas. Las construcciones con una barrera superior a 120 no se verán afectadas en absoluto. Aquellos cuerpos que hayan sido arrastrados por el viento quedarán suspensos en el aire hasta que el conjuro finalice, momento en el cual caerán desde la altura (la distancia hasta el suelo puede variar dependiendo del entorno y de la voluntad del hechicero, aunque en ningún caso podrá superar los 100 metros). Quien pase el control enfrentado de Fuerza, no tendrá que volver a repetirlo mientras no se mueva y permanezca en la misma posición, pero deberá repetirlo cada turno que se mueva por encima de su movimiento pasivo. El DJ puede aplicar el bono que considere oportuno al control de características de los afectados, dependiendo de su entorno y de si tienen algo sólido a lo que aferrarse.",
        "zeon": {
            "base": 200,
            "intermedio": 300,
            "avanzado": 450,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "500 metros de radio.",
            "intermedio": "1 kilómetro de radio.",
            "avanzado": "2 kilómetros de radio.",
            "arcano": "5 kilómetros de radio / El control de Fuerza es contra 14."
        },
        "mantenimiento": "10 / 15 / 20 / 25",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Aire Sólido",
        "nivel": 76,
        "accion": "Activa",
        "tipo": "Efecto, Ataque",
        "efecto": "Permite solidificar el aire, creando una materia compacta y resistente. El brujo puede elegir qué forma darle y dónde ubicarla. Podría, por ejemplo, cerrar una entrada creando un bloque sólido que impidiera el paso, o formar un puente invisible por el que pasar una grieta. El aire sólido sólo puede ser dañado con armas capaces de afectar energía, y cada 5 metros de material resiste 150 puntos de daño antes de ser roto. Esta sustancia no puede ser vista, salvo si se supera un control de Advertir contra Inhumano, o de Buscar contra Absurdo. Este conjuro puede también utilizarse para rodear a personas e impedirles moverse con libertad. En caso de que se emplee con este objetivo, es posible realizar un ataque usando las reglas de Presa, aunque el brujo no sufrirá ningún penalizador a su habilidad de Proyección por ejecutar la maniobra. El aire posee una Fuerza 14, afectando a todos los individuos designados que estén dentro del área del hechizo.",
        "zeon": {
            "base": 140,
            "intermedio": 200,
            "avanzado": 260,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "25 metros de radio.",
            "intermedio": "150 metros de radio.",
            "avanzado": "300 metros de radio.",
            "arcano": "500 metros de radio / Si se usa para apresar, tiene Fuerza 16."
        },
        "mantenimiento": "10 / 10 / 15 / 25",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Control del Clima",
        "nivel": 80,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El hechicero obtiene un completo control sobre el clima en un radio de acción determinado por el grado del conjuro. Podrá modificar cualquier elemento meteorológico a su antojo, creando la situación climática que desee de manera gradual.",
        "zeon": {
            "base": 250,
            "intermedio": 300,
            "avanzado": 380,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "5 kilómetros.",
            "intermedio": "25 kilómetros.",
            "avanzado": "100 kilómetros.",
            "arcano": "1.000 kilómetros."
        },
        "mantenimiento": "50 / 60 / 80 / 100 Diario"
    },
    {
        "nombre": "Crear Silfo",
        "nivel": 82,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea una criatura de aire con apariencia de vida bajo el control absoluto del hechicero. El ente será desarrollado como un Ser Entre Mundos, usando los poderes y limitaciones de los elementales de aire del Capítulo 26. Para calcular su nivel máximo, se emplean las mismas reglas que en el conjuro Crear Ser de la vía de Creación.",
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
        "nombre": "Telequinesis Superior",
        "nivel": 86,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro permite al brujo mover a distancia cualquier cuerpo material, orgánico o inorgánico, sin la necesidad de que exista contacto físico con ellos y dotándoles de una velocidad equivalente a un Tipo de vuelo 10. Los seres vivos o criaturas de presencia sobrenatural excepcional podrán resistirse si superan una RM.",
        "zeon": {
            "base": 160,
            "intermedio": 280,
            "avanzado": 400,
            "arcano": 550
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "RM 100 / 100 toneladas.",
            "intermedio": "RM 120 / 10.000 toneladas.",
            "avanzado": "RM 140 / 250.000 toneladas.",
            "arcano": "RM 160 / 150.000 toneladas."
        },
        "mantenimiento": "35 / 40 / 50 / 60 Diario",
        "libreAcceso": "1-90"
    },
    {
        "nombre": "Ubicar Magia",
        "nivel": 90,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga al brujo la capacidad de trasladar libremente las fuentes mágicas que sustentan un conjuro activo de un sitio a otro. De este modo, puede mover un sortilegio de lugar y situarlo donde le plazca. Será capaz de trasladar cualquier conjuro mantenido, incluso si no se encuentra bajo su control. La distancia máxima de su reubicación queda determinada por las reglas generales de Proyección Mágica. Este hechizo puede emplearse tanto contra conjuros que afecten a un determinado lugar, como contra los que se encuentren sobre un individuo u objeto. Si lo que se traslada es un conjuro Anímico de un sujeto a otro, se tratará a todos los efectos del mismo modo que si acabase de ser lanzado por el hechicero, permitiendo al nuevo blanco defenderse de él y realizar un control de Resistencia con normalidad.",
        "zeon": {
            "base": 180,
            "intermedio": 270,
            "avanzado": 360,
            "arcano": 450
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "Conjuros de hasta 100 puntos de Zeon.",
            "intermedio": "Conjuros de hasta 200 puntos de Zeon.",
            "avanzado": "Conjuros de hasta 300 puntos de Zeon.",
            "arcano": "Conjuros de hasta 400 puntos de Zeon."
        },
        "mantenimiento": "20 / 30 / 40 / 45 Diario"
    },
    {
        "nombre": "Magia Pasiva",
        "nivel": 92,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este hechizo envuelve la esencia de su lanzador, haciendo que la magia fluya en él de un modo instintivo y manifestando automáticamente sus designios. Así pues, la magia y él responden como un solo ser ante cualquier acontecimiento. Mientras se mantenga, cualquier hechizo que ejecute el personaje se considerará una acción pasiva, incluidos los de Ataque y los Anímicos.",
        "zeon": {
            "base": 300,
            "intermedio": 400,
            "avanzado": 550,
            "arcano": 800
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Afecta a conjuros de grado Base.",
            "intermedio": "Afecta a conjuros de grado Intermedio.",
            "avanzado": "Afecta a conjuros de grado Avanzado.",
            "arcano": "Afecta a conjuros de grado Arcano."
        },
        "mantenimiento": "30 / 40 / 55 / 80",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Señor del Aire",
        "nivel": 96,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El lanzador controla cualquier núcleo de aire y electricidad, sin importar el número de intensidades que lo compongan. Este dominio le permite también modificar a su antojo el clima, así como crear vendavales, tormentas o ventiscas de cualquier magnitud. Toda criatura basada en aire que se encuentre dentro del área del sortilegio, deberá superar una RM o será controlada de inmediato. Si la pasan, ya no necesitan volver a realizar el control. Los afectados tienen derecho a una nueva tirada únicamente si alteran su Resistencia base.",
        "zeon": {
            "base": 300,
            "intermedio": 450,
            "avanzado": 600,
            "arcano": 1000
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "100 kilómetros de radio / 140 RM.",
            "intermedio": "1.000 kilómetros de radio / 180 RM.",
            "avanzado": "10.000 kilómetros de radio / 200 RM.",
            "arcano": "100.000 kilómetros de radio / 240 RM."
        },
        "mantenimiento": "30 / 45 / 60 / 100 Diario",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Un Lugar en el Mundo",
        "nivel": 100,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Al ejecutar este conjuro, el lanzador altera el orden de la misma red de almas y, con ello, el de la propia realidad. Aunque no es capaz de cambiar la esencia de las cosas ni su forma, este hechizo le otorga la habilidad de moverlas por el mundo y situarlas en cualquier lugar que se desee, sin otra limitación que su voluntad. De este modo, puede mover cualesquiera objetos o seres, tanto físicos como espirituales, y teletransportarlos adonde quiera. Es posible mover tantas cosas como se desee por asalto, sin importar su número o condición, y reubicar cada una de ellas a voluntad. La única manera de resistirse a sus efectos será superar una RM en cada ocasión en la que se quiera evitar ser trasladado. El radio de acción afecta automáticamente a cualquier ser u objeto que se encuentre en su interior.",
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
            "base": "50 Kilómetros de radio / RM 140.",
            "intermedio": "250 Kilómetros de radio / RM 180.",
            "avanzado": "500 Kilómetros de radio / RM 240.",
            "arcano": "1.000 Kilómetros de radio / RM 280."
        },
        "mantenimiento": "45 / 80 / 120 / 200"
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

// =====================================================
// VÍA: FUEGO
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaFuego = {
    id: "fuego",
    nombre: "Fuego",
    color: "#ef4444",
    hechizos: [
    {
        "nombre": "Crear Fuego",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea intensidades de fuego. Mientras se mantenga el conjuro, la temperatura se conservará.",
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
            "base": "1 intensidad de fuego.",
            "intermedio": "6 intensidades de fuego.",
            "avanzado": "8 intensidades de fuego.",
            "arcano": "10 intensidades de fuego."
        },
        "mantenimiento": "5 / 10 / 10 / 15 Diario",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Mitigar Fuego",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Disminuye intensidades de fuego o de calor. Hay que tener en cuenta que algunas fuentes de fuego, como volcanes o grandes incendios, se reproducen automáticamente si no se consiguen mitigar del todo. Al lanzarlo sobre un ser basado en fuego, recibirá 5 puntos de daño por cada intensidad rebajada, si no supera una RM. Los seres con acumulación reciben 25 puntos de daño por cada intensidad.",
        "zeon": {
            "base": 30,
            "intermedio": 80,
            "avanzado": 120,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 13
        },
        "grados": {
            "base": "-1 intensidad de fuego / RM 100.",
            "intermedio": "-5 intensidades de fuego / RM 120.",
            "avanzado": "-10 intensidades de fuego / RM 140.",
            "arcano": "-15 intensidades de fuego / RM 180."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Inmunidad Contra el Fuego",
        "nivel": 10,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro permite al hechicero, o a las personas que designe, ser inmunes a intensidades de calor. En el caso de que se reciba un ataque basado en dicho elemento, cada intensidad a la que es inmune disminuye 5 puntos el daño base del ataque, otorgando un +5 a las Resistencias contra sus efectos.",
        "zeon": {
            "base": 50,
            "intermedio": 140,
            "avanzado": 200,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 13
        },
        "grados": {
            "base": "5 intensidades de calor.",
            "intermedio": "12 intensidades de calor.",
            "avanzado": "20 intensidades de calor.",
            "arcano": "30 intensidades de calor."
        },
        "mantenimiento": "5 / 10 / 10 / 15 Diario"
    },
    {
        "nombre": "Sentir el Calor",
        "nivel": 12,
        "accion": "Activa",
        "tipo": "Detección",
        "efecto": "Detecta la localización de cualquier fuente de calor. El conjuro no dará información sobre qué lo produce, pero podrá sentir intensidades y tamaños. Es posible, incluso, percibir el calor que desprende un cuerpo humano, pero no el de seres inanimados o inmateriales, como golems o no muertos. Si se desea resistir, deberá superarse una RM.",
        "zeon": {
            "base": 60,
            "intermedio": 100,
            "avanzado": 140,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "25 metros / RM 120.",
            "intermedio": "50 metros / RM 150.",
            "avanzado": "100 metros / RM 180.",
            "arcano": "250 metros / RM 220."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Bola de Fuego",
        "nivel": 16,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta un ataque ígneo que estalla en un área. No es posible seleccionar blancos en el interior de la explosión. Ataca en la TA de calor.",
        "zeon": {
            "base": 50,
            "intermedio": 100,
            "avanzado": 160,
            "arcano": 250
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Daño base 50 / Área de 5 metros de radio.",
            "intermedio": "Daño base 100 / Área de 25 metros de radio.",
            "avanzado": "Daño base 140 / Área de 80 metros de radio.",
            "arcano": "Daño base 160 / área de 150 metros de radio."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Control Sobre el Fuego",
        "nivel": 20,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Permite controlar la forma y crecimiento de un fuego. Del mismo modo, podrán modificarse distintos aspectos de las llamas, como su color, apariencia e incluso el humo que producen. Si se trata de un ser basado naturalmente en este elemento, el mago podrá controlarlo si la criatura no supera una RM. Un ser que falle la Resistencia no puede repetirla, salvo en caso de que recibir una orden opuesta a su naturaleza.",
        "zeon": {
            "base": 50,
            "intermedio": 80,
            "avanzado": 120,
            "arcano": 180
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "RM 100 / 5 intensidades.",
            "intermedio": "RM 120 / 8 intensidades.",
            "avanzado": "RM 140 / 12 intensidades.",
            "arcano": "RM 180 / 15 intensidades."
        },
        "mantenimiento": "5 / 10 / 15 / 20"
    },
    {
        "nombre": "Barrera de Fuego",
        "nivel": 22,
        "accion": "Activa",
        "tipo": "Automático, Defensa",
        "efecto": "Este conjuro levanta un potente muro de fuego. Cualquiera que trate de traspasarlo recibirá automáticamente un ataque contra una habilidad Casi Imposible (es decir, un ataque automático de habilidad final 240) en la TA de calor. Recibir daño no impide a un personaje atravesar el muro. Adicionalmente, el brujo podrá usarla a modo de escudo mágico para detener únicamente ataques basados en agua, frío o fuego.",
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
            "base": "Daño 80 / 2 metros de extensión / 300 puntos de Resistencia.",
            "intermedio": "Daño 90 / 5 metros de extensión / 500 puntos de Resistencia.",
            "avanzado": "Daño 100 / 10 metros de extensión / 800 puntos de Resistencia / Permite detener ataques basados en energía.",
            "arcano": "Daño 100 / 15 metros de extensión / 1.500 puntos de Resistencia / El ataque es contra Imposible / Permite detener ataques basados en cualquier tipo de ataque."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Arma Ígnea",
        "nivel": 26,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Imbuye de llamas un arma, haciendo que ataque en la TA de calor como crítico primario. El fuego será tan potente que aumentará en el daño base del ataque, sin afectar en absoluto la resistencia del arma.",
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
            "arcano": 14
        },
        "grados": {
            "base": "+10 al daño base.",
            "intermedio": "+20 al daño base.",
            "avanzado": "+30 al daño base.",
            "arcano": "+40 al daño base."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Descarga de Calor",
        "nivel": 30,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta una descarga de ondas de alta temperatura, capaces de abrasar cualquier cosa. El ataque se realiza en la TA de calor. Dado que las ondas no son visibles para el ojo humano, el defensor deberá ser capaz de ver magia, tener visión térmica, o superar un control de Advertir contra Absurdo, si no quiere sufrir el penalizador de Cegado contra este ataque.",
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
            "base": "Daño 50.",
            "intermedio": "Daño 70.",
            "avanzado": "Daño 90.",
            "arcano": "Daño 110."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Ver en las Cenizas",
        "nivel": 32,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Traslada los sentidos del hechicero al pasado, permitiéndole ver la causa o incidente que provocó un determinado incendio. El hechicero deberá estar presente entre los restos del incendio para ejecutar el conjuro, y mientras lo hace no será consciente de lo que ocurre a su alrededor en la actualidad.",
        "zeon": {
            "base": 60,
            "intermedio": 140,
            "avanzado": 220,
            "arcano": 340
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "Retrocede un día hora.",
            "intermedio": "Retrocede un día.",
            "avanzado": "Retrocede un mes.",
            "arcano": "Retrocede un año."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Aumentar la Temperatura Ambiental",
        "nivel": 36,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Aumenta la temperatura ambiente. Si la temperatura aumenta 10 grados por encima de lo que es natural en una zona en su momento más cálido, el índice de aumento se reduce a la mitad.",
        "zeon": {
            "base": 60,
            "intermedio": 140,
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
            "base": "+5 grados / 1 kilómetro de radio.",
            "intermedio": "+10 grados / 5 kilómetros de radio.",
            "avanzado": "+20 grados / 10 kilómetros de radio.",
            "arcano": "+30 grados / 15 kilómetros de radio."
        },
        "mantenimiento": "15 / 40 / 50 / 60 Diario",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Mina de Fuego",
        "nivel": 40,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea una mina ígnea, que estalla a voluntad del hechicero en radio atacando en la TA de calor. Para defenderse de la explosión, es necesario realizar una defensa contra un ataque final de dificultad Casi Imposible (es decir, una habilidad de ataque final de 240) si se encuentra a más de la mitad de la zona abarcada por el área de explosión, o contra Imposible (ataque de habilidad final 280) si se está a menos. A bocajarro, es decir, a menos de un metro de su centro, el ataque es de dificultad Inhumana (habilidad final de 320). La mina puede dejarse fija en un lugar o en un objeto determinado, y permanece estática en ese lugar hasta que estalla. El brujo puede activarla cuando desee, aunque hacerlo se considera una acción activa. No es posible seleccionar blancos en el interior de su explosión, y afecta a todos los presentes, incluyendo al propio lanzador.",
        "zeon": {
            "base": 80,
            "intermedio": 160,
            "avanzado": 240,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "10 metros de radio / Daño 80.",
            "intermedio": "50 metros de radio / Daño 120.",
            "avanzado": "150 metros de radio / Daño 180.",
            "arcano": "250 metros de radio / Daño 240."
        },
        "mantenimiento": "20 / 40 / 50 / 60 Diario"
    },
    {
        "nombre": "Aumentar el Crítico",
        "nivel": 42,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Proporciona un bonificador a la tirada para calcular el Nivel de Crítico que haya provocado un ataque determinado. A pesar de ser un conjuro pasivo, debe usarse antes de que se lancen los dados.",
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
            "base": "+20 al Nivel de Crítico.",
            "intermedio": "+40 al Nivel de Crítico.",
            "avanzado": "+60 al Nivel de Crítico.",
            "arcano": "+80 al Nivel de Crítico."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Secar",
        "nivel": 46,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Este conjuro seca inmediatamente cualquier cuerpo mojado que se encuentre dentro de un radio. Puede utilizarse para dañar cualquier tipo de elemental de agua, causándole el doble de daño por el que no supere una RM o RF. Si se usa para perjudicar a seres vivos que poseen organismos basados en agua (lo que incluye a los seres humanos), sus efectos pueden ser también muy perjudiciales, aunque el daño se reduce sólo a la mitad del nivel de fracaso.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 180,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "5 metros de radio / RM o RF 100.",
            "intermedio": "15 metros de radio / RM o RF 120.",
            "avanzado": "25 metros de radio / RM o RF 140.",
            "arcano": "35 metros de radio / RM o RF 160."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Fundir",
        "nivel": 50,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro calienta cualquier objeto inorgánico que el hechicero elija en un radio haciendo que alcance altísimas temperaturas. El calor producido será tan intenso que, cualquier objeto susceptible de fundirse que no supere un control de Resistencia se fundirá en un número de asaltos equivalente a su entereza. Cualquier persona que esté en contacto con el cuerpo abrasado, deberá desprenderse de él o sufrirá daños. Si no lo arroja, cada turno realizará una tirada acumulativa en la Tabla 76.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 180,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "10 metros de radio / RF 80.",
            "intermedio": "50 metros de radio / RF 100.",
            "avanzado": "100 metros de radio / RF 120.",
            "arcano": "150 metros de radio / RF 140."
        },
        "mantenimiento": "10 / 10 / 15 / 15"
    },
    {
        "nombre": "Cuerpo a Fuego",
        "nivel": 52,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El cuerpo designado por el hechicero se transformará en llamas, volviéndose inmune a cualquier ataque no basado en energía, frío o agua. Todo aquello capaz de mitigar el fuego (arena, espuma…) producirá también daño al personaje, Cualquiera que se ponga en contacto con las llamas que forman su cuerpo, estará obligado a realizar una RF contra el doble de su presencia, o a perder una cantidad de puntos de vida equivalente a la mitad del nivel de fracaso (si el afectado tiene protección contra fuego, cada punto de TA contra calor que posea le otorga un bono de +5 a esta tirada).",
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
            "intermedio": "El sujeto ganará un bono de +30 a sus Resistencias contra efectos basados en calor.",
            "avanzado": "Como el Intermedio, el sujeto puede colarse por cualquier lugar en el que pueda pasar las lenguas de fuego.",
            "arcano": "Como el Avanzado, pero los ataques basados en frío o agua que no sean de origen sobrenatural no le producen daño."
        },
        "mantenimiento": "10 / 15 / 15 / 20",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Sacrificio Vital",
        "nivel": 56,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al hechicero consumir su propia fuerza vital para incrementar sus capacidades físicas cuando lo requiera. Este conjuro otorga la habilidad pasiva de sacrificar temporalmente sus puntos de vida para obtener un bonificador a una acción determinada. Cada 5 puntos de vida que gaste de esta forma proporcionarán al personaje +5 a una de sus tiradas (en el caso de las criaturas de acumulación de daño, será necesario multiplicar estos puntos por su múltiplo de acumulación). Este bono sólo será aplicable a las acciones físicas, pero podrá sumarse a habilidades primarias como ataque, defensa o Proyección Mágica. A pesar de ser una acción pasiva, es necesario declarar el sacrificio antes de lanzar los dados. Es también posible que el brujo decida conferir esta habilidad a otro individuo, siendo entonces este quien decida cuántos puntos gastar en cada caso. Los puntos de vida perdidos de esta forma se recuperan a un ritmo de 10 al día, sin importar lo que indique la Regeneración natural del personaje (es decir, cuentan como un Sacrificio). Sus efectos no se superponen, y sólo se puede tener un conjuro de esta clase activo sobre un individuo determinado.",
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
            "base": "Sacrificio máximo de 50 Puntos de Vida por asalto.",
            "intermedio": "Sacrificio máximo de 100 Puntos de Vida por asalto.",
            "avanzado": "Sacrificio máximo de 150 Puntos de Vida por asalto.",
            "arcano": "Sacrificio máximo de 200 Puntos de Vida por asalto."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Incinerar",
        "nivel": 60,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Prende en llamas cualquier cuerpo que designe el hechicero, orgánico o inorgánico, por la mera condición de hallarse en su presencia. A efectos de juego, el brujo realizará una tirada con un bonificador en la Tabla 76: En Llamas, por cada blanco que desee incinerar.",
        "zeon": {
            "base": 100,
            "intermedio": 150,
            "avanzado": 200,
            "arcano": 260
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "RM 140 / +100 a la Tabla 76 / 50 metros de radio.",
            "intermedio": "RM 160 / +120 a la Tabla 76 / 100 metros de radio.",
            "avanzado": "RM 180 / +140 a la Tabla 76 / 150 metros de radio.",
            "arcano": "RM 200 / +160 a la Tabla 76 / 200 metros de radio."
        },
        "mantenimiento": "10 / 15 / 15 / 20"
    },
    {
        "nombre": "Consumir Esencia",
        "nivel": 62,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este hechizo crea una terrorífica aura sobrenatural alrededor del brujo que destruye la esencia vital de las personas, consumiendo sus energías e impidiéndoles curarse por medios naturales. Cualquier sujeto que se encuentre en un radio respecto al mago deberá superar una RM o perderá una cantidad de puntos de vida y puntos de Zeon equivalentes al nivel de fracaso. Los puntos de vida que un personaje pierda a causa de este hechizo no se recuperan de manera natural, y sólo podrán sanarse mediante conjuros de curación o medios sobrenaturales equivalentes. En lo que respecta a los puntos de Zeon, deberán ser absorbidos de otros hechiceros o contenedores mágicos.",
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
            "base": "10 metros de radio / RM 120.",
            "intermedio": "25 metros de radio / RM 160.",
            "avanzado": "50 metros de radio y RM 200.",
            "arcano": "150 metros de radio / RM 220."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Sacrificio de Poder",
        "nivel": 66,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al hechicero consumir su propia energía mágica para incrementar su acumulación mágica. Este conjuro otorga la habilidad pasiva de gastar puntos de Zeon para obtener un bono temporal a su ACT. Cada 10 puntos que invierta con este fin, le proporcionarán un +5 a su ACT hasta el fin del turno. Sus efectos no se superponen, y sólo se puede tener un conjuro de esta clase activo sobre un individuo determinado.",
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
            "base": "20 puntos de Zeon por asalto.",
            "intermedio": "50 puntos de Zeon por asalto.",
            "avanzado": "80 puntos de Zeon por asalto.",
            "arcano": "120 puntos de Zeon por asalto."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Crítico Directo",
        "nivel": 70,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Causa un estallido interno en un individuo, provocándole un crítico de manera automática. A efectos de juego, el blanco recibirá el equivalente a un Nivel de Crítico aunque tendrá la capacidad de contrarrestarlo con su RF, empleando las reglas generales. Para evitar sus efectos es necesario superar un control de RM contra el valor determinado por el grado del conjuro.",
        "zeon": {
            "base": 100,
            "intermedio": 140,
            "avanzado": 200,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "Crítico 120 / RM 140.",
            "intermedio": "Crítico 140 / RM 160.",
            "avanzado": "Crítico 180 / RM 180.",
            "arcano": "Crítico 220 / RM 200."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Magia por Capacidades",
        "nivel": 72,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al hechicero consumir su propia energía mágica, para incrementar temporalmente sus atributos y las habilidades que dependan de ellos. Este conjuro otorga la habilidad pasiva de sacrificar sus puntos de Zeon para obtener un bonificador a una sola Característica. Cada 25 puntos de Zeon que gaste de esta forma le proporcionarán un +1 a una única Característica hasta el final del turno. Sus efectos no se superponen, y sólo se puede tener un conjuro de esta clase activo sobre un individuo determinado.",
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
            "base": "50 puntos de Zeon por asalto.",
            "intermedio": "100 puntos de Zeon por asalto.",
            "avanzado": "150 puntos de Zeon por asalto.",
            "arcano": "200 puntos de Zeon por asalto."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Tormenta de Fuego",
        "nivel": 76,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El brujo designa un área dentro de la cual se desencadena una potente tormenta de llamas, que calcina todo lo que se encuentra en su interior. Los individuos que se hallen en ella sufrirán, cada asalto, un ataque automático en la TA de calor contra una habilidad final determinada por el grado del conjuro y un daño base de 100 puntos. El área de la tormenta tendrá un radio máximo en cuyo interior no se podrán designar blancos, pudiendo afectar incluso al propio lanzador. La condición para recibir el ataque será estar dentro de la tormenta en el asalto posterior a su lanzamiento. El hechizo siempre permanece estático en el lugar donde fue conjurado.",
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
            "arcano": 15
        },
        "grados": {
            "base": "25 metros de radio / Habilidad de Ataque Absurdo (180).",
            "intermedio": "150 metros de radio / Habilidad de Ataque Casi Imposible (240).",
            "avanzado": "200 metros de radio/ Habilidad de Imposible (280).",
            "arcano": "250 metros de radio/ Habilidad de Ataque Inhumano (320)."
        },
        "mantenimiento": "15 / 20 / 25 / 30",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Consumir Vida por Magia",
        "nivel": 80,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al hechicero consumir su propia fuerza vital para incrementar su reserva de magia. Este conjuro otorga la habilidad pasiva de sacrificar temporalmente puntos de vida para recuperar Zeon. Cada 5 PV que se sacrifiquen con este objetivo, proporcionan al personaje 100 puntos de Zeon que gastar (en el caso de las criaturas con acumulación de daño, la cantidad a sacrificar aumentará dependiendo de su múltiplo). Los puntos de vida perdidos mediante este método se recuperarán a un ritmo de 10 puntos por día, sin importar la Regeneración natural del personaje ni los conjuros de curación que emplee (es decir, cuentan como un Sacrificio). Sus efectos no se superponen, y sólo se puede tener un conjuro de esta clase activo sobre un individuo determinado.",
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
            "base": "20 puntos de vida asalto.",
            "intermedio": "80 puntos de vida asalto.",
            "avanzado": "140 puntos de vida asalto.",
            "arcano": "200 puntos de vida asalto."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario"
    },
    {
        "nombre": "Crear Ifreet",
        "nivel": 82,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea una criatura de fuego con apariencia de vida, bajo el control absoluto del hechicero. El ente será desarrollado como un Ser Entre Mundos, usando los poderes y limitaciones de los elementales de Fuego. La criatura tendrá PD y, para calcular su nivel máximo, se emplean las mismas reglas que en el conjuro Crear Ser de la vía de Creación.",
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
        "nombre": "Pira Absoluta",
        "nivel": 86,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea intensidades de fuego. Mientras se mantenga el conjuro, la llama seguirá ardiendo incluso sin nada que consumir. Si se prende en algo inflamable, arderá naturalmente tras finalizar el hechizo.",
        "zeon": {
            "base": 250,
            "intermedio": 300,
            "avanzado": 350,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 18
        },
        "grados": {
            "base": "15 intensidades.",
            "intermedio": "25 intensidades.",
            "avanzado": "35 intensidades.",
            "arcano": "45 intensidades."
        },
        "mantenimiento": "25 / 30 / 30 / 35 Diario",
        "libreAcceso": "1-90"
    },
    {
        "nombre": "Devastación",
        "nivel": 90,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta una explosión ígnea, que ataca en área con un daño base de 200 puntos. Ataca en la TA de calor, aunque es capaz de dañar energía. No es posible designar blancos en el interior del conjuro.",
        "zeon": {
            "base": 200,
            "intermedio": 300,
            "avanzado": 400,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 16,
            "arcano": 18
        },
        "grados": {
            "base": "1 kilómetro de radio.",
            "intermedio": "5 kilómetros de radio.",
            "avanzado": "10 kilómetros de radio.",
            "arcano": "15 kilómetros de radio."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Sacrificar a Otros",
        "nivel": 92,
        "accion": "Activa",
        "tipo": "Anímico, Efecto",
        "efecto": "Este hechizo encadena la esencia y la fuerza vital de otros individuos al lanzador, permitiendo a este consumirla en su propio beneficio. A efectos de juego, permite a la entidad utilizar los puntos de vida y Zeon de los sujetos afectados por el conjuro para sus hechizos de sacrificio: Sacrificio Vital, Magia por Capacidades, Sacrificio de Poder y Consumir Vida Por Magia. Este conjuro tiene un área estática de un kilómetro, dentro de la cual podrá designar tantos blancos como quiera el lanzador. La RM para superar este conjuro será de 120. Los afectados tendrán derecho a una nueva tirada por día que transcurra, o en cada ocasión en la que sus energías sean consumidas.",
        "zeon": {
            "base": 250,
            "intermedio": 350,
            "avanzado": 500,
            "arcano": 750
        },
        "inteligenciaRequerida": {
            "base": 13,
            "intermedio": 15,
            "avanzado": 17,
            "arcano": 19
        },
        "grados": {
            "base": "RM 120 / 1 kilómetro de área.",
            "intermedio": "RM 140 / 2 kilómetros de área.",
            "avanzado": "RM 160 / 3 kilómetros de área.",
            "arcano": "RM 180 / 5 kilómetros de área."
        },
        "mantenimiento": "50 / 70 / 100 / 150 Diario"
    },
    {
        "nombre": "Señor del Fuego",
        "nivel": 96,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El hechicero controla cualquier núcleo de elevado calor a su alrededor. Este dominio le permite incluso manejar las corrientes de magma del interior del planeta, pudiendo crear erupciones y volcanes. Toda criatura basada en fuego que se encuentre dentro del área del conjuro, deberá superar una RM o será controlada por el lanzador. Si la pasan, ya no necesitan volver a realizar el control. Los afectados tienen derecho a una nueva tirada únicamente si alteran su Resistencia base.",
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
            "arcano": "Afecta cualquier fuente de calor / 240 RM."
        },
        "mantenimiento": "30 / 45 / 60 / 100 Diario",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Armagedón",
        "nivel": 100,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El conjuro de fuego definitivo concede al lanzador la capacidad de consumir una parte de la propia esencia del mundo, calcinando las almas que están a su alrededor. Cualquier cosa, orgánica o no, que se encuentre en el a interior de su área, deberá superar cada minuto que esté dentro una RM o será calcinado física y espiritualmente. Mientras el lanzador mantenga activo el Armagedón, ninguna forma de vida podrá nacer o ser creada dentro de su zona de influencia.",
        "zeon": {
            "base": 450,
            "intermedio": 800,
            "avanzado": 1200,
            "arcano": 1600
        },
        "inteligenciaRequerida": {
            "base": 15,
            "intermedio": 16,
            "avanzado": 17,
            "arcano": 18
        },
        "grados": {
            "base": "10 kilómetros de radio / RM 140.",
            "intermedio": "25 kilómetros de radio / RM 150.",
            "avanzado": "50 kilómetros de radio / RM 160.",
            "arcano": "150 kilómetros de radio / RM 180."
        },
        "mantenimiento": "90 / 100 / 105 / 110",
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

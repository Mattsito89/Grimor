// =====================================================
// VÍA: ESENCIA
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaEsencia = {
    id: "esencia",
    nombre: "Esencia",
    color: "#8b5cf6",
    hechizos: [
    {
        "nombre": "Afinidad Natural",
        "nivel": 2,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Altera la esencia de un individuo, permitiéndole volverse afín cualquier tipo de ser vivo y consiguiendo así que estos le reconozcan como un miembro de su especie. Como ejemplo, podría usarse este conjuro para adquirir afinidad hacia los lobos y, de ese modo, ser reconocido como un igual por estos. Sólo afecta a seres que se basen en instintos.",
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
            "base": "Afecta a animales naturales (caballos, conejos, lobos…).",
            "intermedio": "Afecta a toda clase de criatura natural.",
            "avanzado": "Afecta tanto a seres naturales como a criaturas entre mundo.",
            "arcano": "Cualquier clase de criatura, incluyendo seres sobrenaturales de alto poder existencial."
        },
        "mantenimiento": "5 / 10 / 10 / 15 Diario",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Detectar Esencia",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El hechicero percibe la esencia en la que está basado cualquier ser que se encuentre a su alrededor. El brujo no obtiene información real sobre las criaturas, pero puede reconocer sus ataduras elementales e identificar posteriormente seres con el mismo tipo de esencia o raza. Ten en cuenta que no es un conjuro de detección como tal, por lo que el mago deberá tener al menos constancia de que una entidad está cerca de él para poder sentir su esencia. Aun así, el hechizo sí permite percibir a criaturas espirituales que sean invisibles al ojo humano.",
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
            "base": "RM 100 / 10 metros de radio.",
            "intermedio": "RM 140 / 25 metros de radio.",
            "avanzado": "RM 160 / 50 metros de radio.",
            "arcano": "RM 200 / 100 metros de radio."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Comunicación por Esencia",
        "nivel": 10,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El hechizo establece un enlace anímico entre el lanzador y un sujeto determinado, permitiendo a ambos comunicarse espiritualmente. La conversación se realizará mediante conceptos que ambos entenderán automáticamente, incluso si hablan idiomas diferentes o uno de ellos ni siquiera está capacitado para hablar. Es incluso posible comunicarse con plantas o animales que no tienen un idioma estructurado.",
        "zeon": {
            "base": 30,
            "intermedio": 70,
            "avanzado": 100,
            "arcano": 150
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 10,
            "arcano": 13
        },
        "grados": {
            "base": "Permite comunicarte con animales y plantas.",
            "intermedio": "Permite comunicarte con cualquier clase de ser natural.",
            "avanzado": "Permite comunicarte con cualquier clase de ser natural o entre mundos.",
            "arcano": "Permite comunicarte con cualquier clase de entidad."
        },
        "mantenimiento": "10 / 20 / 20 / 25 Diario"
    },
    {
        "nombre": "Conocimiento Natural",
        "nivel": 12,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite analizar toda la información sobre un determinado tipo de ser natural, como animales o plantas. Un hechicero que usase este conjuro podría, por ejemplo, examinar una planta extraña y descubrir si es venenosa o si tiene algún tipo de propiedad especial.",
        "zeon": {
            "base": 40,
            "intermedio": 60,
            "avanzado": 90,
            "arcano": 120
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 10,
            "arcano": 13
        },
        "grados": {
            "base": "Analiza las propiedades básicas de una planta o animal.",
            "intermedio": "Analiza todas las propiedades de una planta o animal.",
            "avanzado": "Analiza todas las propiedades de una raza natural.",
            "arcano": "Analiza todas las propiedades y poderes místicos o especiales de un ser natural."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Sanación",
        "nivel": 16,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga la capacidad de regenerar a un ritmo vertiginoso las heridas de un individuo, curando los puntos de vida perdidos. Este conjuro no permite recuperar miembros cercenados o daños similares, ni tampoco elimina los penalizadores causados por los críticos, pero sí detiene cualquier tipo de desangramiento. En el caso de que sea lanzado sobre un ser con acumulación de daño, sólo recupera la mitad del valor porcentual.",
        "zeon": {
            "base": 80,
            "intermedio": 100,
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
            "base": "20% de puntos de vida.",
            "intermedio": "40% de puntos de vida.",
            "avanzado": "60% de puntos de vida.",
            "arcano": "80% de puntos de vida."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Barrera de Almas",
        "nivel": 20,
        "accion": "Activa",
        "tipo": "Escudo",
        "efecto": "Crea una barrera espiritual que detiene cualquier ataque anímico que afecte a las Resistencias sobrenaturales. Es decir, permite usar el escudo para detener cualquier efecto que obligue al hechicero a lanzar una RM o RP, aunque es virtualmente inútil contra otros tipos de ataques o conjuros. Tampoco es capaz de detener ataques que producen daños con efectos añadidos, como por ejemplo, el sortilegio Lluvia de Destrucción. El escudo en sí no tiene puntos de vida, ya que no protege contra impactos que produzcan daño.",
        "zeon": {
            "base": 40,
            "intermedio": 60,
            "avanzado": 90,
            "arcano": 120
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Hasta 140 de Resistencia.",
            "intermedio": "Hasta 160 de Resistencia.",
            "avanzado": "Hasta 200 de Resistencia.",
            "arcano": "Hasta 240 de Resistencia."
        },
        "mantenimiento": "5 / 10 / 10 / 15 Diario"
    },
    {
        "nombre": "Compartir Sentidos",
        "nivel": 22,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Conecta los sentidos del hechicero con los de otros individuos y viceversa, permitiéndoles ver y escuchar lo que los otros perciban. Si el brujo lo desea, es capaz de negar el acceso a sus propios sentidos. Para resistirse, se debe superar una RM o RP. Cualquier afectado tiene derecho a una nueva Resistencia cada hora. Puede afectar a varios individuos a la vez, siempre que la suma de la presencia de estos (sin incluir la del hechicero) no supere lo que determine el grado del conjuro.",
        "zeon": {
            "base": 60,
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
            "base": "Presencia máxima 100 / RM o RP 100 / 1 kilómetro de distancia máxima.",
            "intermedio": "Presencia máxima 160 / RM o RP 160 / 10 kilómetros de distancia máxima.",
            "avanzado": "Presencia máxima 200 / RM o RP 190 / 50 kilómetros de distancia máxima.",
            "arcano": "Presencia máxima 240 / RM o RP 220 / 150 kilómetros de distancia máxima."
        },
        "mantenimiento": "10 / 20 / 25 / 30 Diario",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Modificar la Esencia",
        "nivel": 26,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Permite al hechicero modificar libremente la esencia de un individuo o ser. Este conjuro no otorga habilidades especiales por el cambio en si, pero altera temporalmente la base anímica del objetivo. De esta forma, mientras se mantenga, podría incluso modificar la esencia de un elemental de tierra por frío, haciéndole especialmente vulnerable a efectos y ataques basados en calor. En el caso de que la criatura posea poderes que están cerrados al elemento al que se modifica su esencia, perderá temporalmente la capacidad de utilizarlos.",
        "zeon": {
            "base": 50,
            "intermedio": 80,
            "avanzado": 100,
            "arcano": 140
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "RM 140.",
            "intermedio": "RM 160.",
            "avanzado": "RM 180.",
            "arcano": "RM 200."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Veneno de Almas",
        "nivel": 30,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El veneno de esencia es una creación sobrenatural que se inocula en el alma del afectado y se extiende por todo su cuerpo. El hechicero podrá crear libremente los efectos del veneno, siguiendo la descripción del Capítulo 14. También es posible desarrollar antídotos, si se tienen los conocimientos suficientes sobre el veneno original.",
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
            "base": "Veneno Nivel 40.",
            "intermedio": "Veneno Nivel 50.",
            "avanzado": "Veneno Nivel 60.",
            "arcano": "Veneno Nivel 70."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Analizar el Alma",
        "nivel": 32,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este hechizo permite al brujo analizar espiritualmente a un individuo o criatura, obteniendo información detallada acerca de sus capacidades naturales y sus poderes. Aunque no le da acceso a saber cuáles son sus conocimientos ni el nivel de las habilidades que dependan de estos, sí puede medir su potencial espiritual y averiguar cómo funcionan sus capacidades innatas. Por ejemplo, si se utiliza sobre un ser sobrenatural, el brujo descubrirá cuáles son sus poderes y cuán elevados son, pero no lo que sabe hacer ni cómo es de bueno luchando. Este conjuro funciona automáticamente sobre la criatura designada si el hechicero la ve o conoce su verdadero nombre, aunque ésta puede resistirse superando una RM.",
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
            "base": "RM 120.",
            "intermedio": "RM 140.",
            "avanzado": "RM 180.",
            "arcano": "RM 200."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Adquirir Capacidades Naturales",
        "nivel": 36,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Concede a un individuo la capacidad de adquirir habilidades características de los seres existentes en el reino animal o vegetal. A efectos de juego, concede PD adicionales al personaje para obtener habilidades secundarias, habilidades esenciales o poderes de la Creación de Seres. No obstante, sólo podrán escogerse habilidades secundarias de los campos físicos de Agilidad, Percepción y Fuerza, y los poderes especiales que tengan como requerimiento Gnosis 0. Los PD se invierten según los costes de la categoría del personaje. No puede aumentarse ningún campo de habilidades primarias, ni tampoco adquirir capacidades sobrenaturales. Hay que tener en cuenta que estos cambios afectarán temporalmente a la forma física del personaje. Si, por ejemplo, ha adquirido un Arma Natural de daño incrementado, lo más lógico sería que estuviese dotado de unas enormes garras o cuernos. Los efectos de este conjuro no se superponen, sólo se puede afectar con él una vez a cada sujeto. Si quieren obtenerse poderes distintos, primero debe dejar de mantenerse el sortilegio y lanzar uno nuevo.",
        "zeon": {
            "base": 120,
            "intermedio": 200,
            "avanzado": 280,
            "arcano": 360
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "+50 PD.",
            "intermedio": "+10 PD.",
            "avanzado": "+150 PD.",
            "arcano": "+200 PD."
        },
        "mantenimiento": "25 / 40 / 60 / 80 Diario",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Revitalizar",
        "nivel": 40,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Crea una zona dentro de la cual todo ser vivo regenera sus heridas se revitaliza. Personas y animales recuperarán su vigor, mientras que las plantas florecerán con renovadas fuerzas. El conjuro afecta un radio alrededor del hechicero dentro del cual las criaturas vivientes adquirirán una Regeneración 16 mientras permanezcan en ella.",
        "zeon": {
            "base": 100,
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
            "base": "50 metros de radio.",
            "intermedio": "200 metros de radio.",
            "avanzado": "500 metros de radio.",
            "arcano": "1 kilómetro de radio."
        },
        "mantenimiento": "10 / 20 / 25 / 30"
    },
    {
        "nombre": "Mente de Vida",
        "nivel": 42,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Permite al brujo conectar su esencia con la mente de cualquier ser vivo (lo que incluye animales y plantas) con Gnosis entre 0 y 10 que se encuentre en la zona de acción del conjuro. El mago podrá sentir lo que hay alrededor de los afectados utilizando la percepción de estos individuos, aunque no puede influir en lo más mínimo sobre ellos. Dado que también transmite una parte de su espíritu, puede lanzar conjuros con la mitad de su ACT como si estuviera presente, aunque por ello cualquier conjuro Anímico realizado sobre el cuerpo en el que se encuentra funcionará, de forma adicional, también contra él. En el momento en el que pretende introducir su esencia en un individuo, el objetivo puede evitarlo superando una RM. Una vez que está observando desde ese cuerpo, el mago es libre de saltar a cualquier otro blanco que esté dentro del radio de acción del hechizo (siempre y cuando el nuevo objetivo no supere la Resistencia, por supuesto). Una vez que un individuo pasa el control, ya no puede ser afectado por el conjuro por más que el brujo trate de introducirse en él. Si alguien en quien reside la esencia del hechicero sale del área de acción de Mente de Vida, el lanzador perderá su poder sobre él. Habitualmente, una persona afectada no se da cuenta de que está siendo utilizada de este modo, incluso si desde ella se lanzan conjuros. Mente de Vida no permite al lanzador detectar cuántos objetivos hay a su alrededor ni su posición exacta, pero el mago puede dirigir sus poderes hacia el lugar al que le interesa enviar su espíritu. Es posible, por ejemplo, decidir que quiere entrar en la mente más cercana que se encuentre a 300 metros de él hacia el norte, y el conjuro buscará de modo automático el ser que más se acerque punto designado. Mientras una parte de su esencia se encuentra fuera del cuerpo, el brujo no es consciente de lo que ocurre alrededor de su verdadero yo.",
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
            "base": "RM 80 / 500 metros de radio.",
            "intermedio": "RM 120 / 1 kilómetro de radio.",
            "avanzado": "RM 140 / 2 kilómetros de radio.",
            "arcano": "RM 180 / 3 kilómetros de radio. y"
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Alterar el Crecimiento",
        "nivel": 46,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Modifica el ritmo natural de desarrollo de un organismo, acelerando o retrasando su evolución. En juego, permite multiplicar o dividir el ritmo de envejecimiento de un cuerpo vivo por el valor que determina el grado del conjuro. Por ejemplo, si este conjuro se lanza en grado avanzado para acelerar el envejecimiento de alguien, cada día que transcurra será equivalente a cincuenta para el objetivo. Una vez alguien es afectado por este conjuro, no y tiene derecho a repetir la RM mientras el lanzador mantenga el sortilegio.",
        "zeon": {
            "base": 80,
            "intermedio": 140,
            "avanzado": 180,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "x2 al ritmo de crecimiento / RM 100.",
            "intermedio": "x10 al ritmo de crecimiento / RM 120.",
            "avanzado": "x50 al ritmo de crecimiento / RM 140.",
            "arcano": "x100 al ritmo de crecimiento / RM 160."
        },
        "mantenimiento": "10 / 15 / 15 / 20 Diario",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Imitación Natural",
        "nivel": 50,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea un animal natural, imitando a una especie existente. El ser estará bajo y el control absoluto del hechicero, quien podrá darle órdenes a través del lazo místico que les une. La criatura creada debe de ser un animal con Gnosis 0 y de una raza que exista en el mundo (por ejemplo osos, conejos, elefantes...). El conjuro permite crear un solo ser (nivel 5 como máximo), o repartir los niveles que confiere entre varias criaturas. Las creaciones tendrán todos sus instintos y habilidades naturales. Como referencia, el hechicero debe utilizar los animales del Capítulo 25.",
        "zeon": {
            "base": 60,
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
            "base": "2 niveles.",
            "intermedio": "10 niveles.",
            "avanzado": "20 niveles.",
            "arcano": "50 niveles."
        },
        "mantenimiento": "10 / 10 / 15 / 15"
    },
    {
        "nombre": "Forma Espiritual",
        "nivel": 52,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Transforma la forma física de un individuo en materia espiritual. Mientras se encuentre en este estado, aplicará las reglas descritas en el grado del conjuro como si fuera un ser espiritual (Capítulo 26).",
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
            "base": "El personaje se vuelve intangible ante cualquier materia o ataque no basado en energía.",
            "intermedio": "Como en grado base pero el personaje también carece de necesidades físicas.",
            "avanzado": "Como en grado intermedio pero el personaje obtiene invisibilidad espiritual.",
            "arcano": "Como en grado avanzado pero el personaje también obtiene el poder Interacción con el mundo."
        },
        "mantenimiento": "10 / 15 / 15 / 20",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Control Natural",
        "nivel": 56,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Por medio de este hechizo, el mago obtiene el dominio absoluto de un miembro de una raza natural con Gnosis 0, como animales, plantas o incluso seres humanos normales. El brujo podrá transmitir sus órdenes directamente por la conexión mística que crea con el afectado, sin la necesidad de hablarle o de que este le entienda. Para resistir los efectos del hechizo es necesario superar una RM (dado que se controla la esencia del sujeto y no su mente, no le es posible utilizar su RP). El individuo subyugado tendrá derecho a un nuevo control por día, y en cada ocasión en la que la reciba una orden que vaya completamente en contra de su naturaleza. Ante una petición que ponga su vida en peligro o le obligue a matar a alguien querido, podrá aplicar un bono de +20 a su RM.",
        "zeon": {
            "base": 100,
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
            "base": "RM 80.",
            "intermedio": "RM 120.",
            "avanzado": "RM 150.",
            "arcano": "RM 180."
        },
        "mantenimiento": "20 / 40 / 50 / 60 Diario",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Inducción de Estados",
        "nivel": 60,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Mediante la manipulación del alma, se imbuye al objetivo del conjuro en cualquiera de los estados genéricos descritos en el Capítulo 14 (con excepción de muerte). El brujo elige el momento de lanzamiento del hechizo cual desea provocar, cuya duración dependerá de las reglas generales en cada caso. Para resistirse, es necesario superar una RM. Si los estados inducidos son Coma o Paralización completa, el afectado puede añadir un bono de +40 a su tirada.",
        "zeon": {
            "base": 100,
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
            "base": "RM 100.",
            "intermedio": "RM 140.",
            "avanzado": "RM 180.",
            "arcano": "RM 200."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Devolver al Flujo",
        "nivel": 62,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro afecta a un espíritu devolviéndolo al más allá. Permite influenciar tanto a almas muertas que esperan “El Llamamiento” como a criaturas de naturaleza espiritual. Salvo si la entidad tiene un Gnosis lo suficientemente elevado que le permita regresar al mundo, su esencia desaparecerá al llegar al más allá. En el caso de No Muertos, dado que sus almas ya no pertenecen al mundo, son automáticamente destruidas.",
        "zeon": {
            "base": 100,
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
            "base": "RM 120.",
            "intermedio": "RM 160.",
            "avanzado": "RM 180.",
            "arcano": "RM 220."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Escudar",
        "nivel": 66,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Encanta una cierta zona, haciéndola impenetrable para un determinado tipo de ser. En el momento de lanzar el hechizo, el mago debe elegir a qué clase de seres les estará vedado el acceso, aunque tendrá libertad absoluta para seleccionar a tantos como desee. Podría, por ejemplo, prohibir el paso sólo a los elementales de fuego o permitir únicamente la entrada de humanos. La zona afectada no podrá tener una extensión mayor de lo que indique el grado del conjuro, o el doble en longitud si tiene forma de muro. Es decir, si lanza el conjuro en grado base el hechicero puede elegir entre que la zona tenga 20 metros de radio o una longitud de 40 metros en línea. Cualquier ser que tenga el paso vedado y que no supere una RM no será capaz de atravesar el escudo. Alguien que haya fallado el control tiene derecho a repetir la tirada una vez por hora. Si alguno de estos seres ya se encontraba en el interior de una zona escudada cuando el conjuro fue lanzado, podrá moverse libremente por ella hasta que salga y pretenda volver a entrar. Escudar permanece estático en el lugar donde es lanzado.",
        "zeon": {
            "base": 120,
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
            "base": "RM 120 / 20 metros de radio.",
            "intermedio": "RM 160 / 30 metros de radio.",
            "avanzado": "RM 180 / 40 metros de radio.",
            "arcano": "RM 200 / 50 metros de radio."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Control Sobrenatural",
        "nivel": 70,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Por medio de este conjuro, el hechicero obtiene el control absoluto de un espíritu o de un Ser Entre Mundos. El brujo podrá transmitir sus órdenes directamente, por la conexión mística que crea con la entidad. Para resistir los efectos de este conjuro, es necesario que la entidad supere una RM (dado que se controla la esencia de la criatura, no es posible utilizar su RP). El ser tendrá derecho a una nueva Resistencia por día, y en cada ocasión en la que las órdenes recibidas vayan completamente en contra de su comportamiento.",
        "zeon": {
            "base": 120,
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
            "base": "RM 100.",
            "intermedio": "RM 120.",
            "avanzado": "RM 140.",
            "arcano": "RM 180."
        },
        "mantenimiento": "25 / 40 / 50 / 60 Diario"
    },
    {
        "nombre": "Compartir Esencia",
        "nivel": 72,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El mago ata la esencia de dos individuos, formando una unidad indivisible. De este modo, cualquier daño o efecto espiritual que reciba uno de los afectados, lo sufrirán igualmente los demás. En el caso de los conjuros anímicos, se usará la RM más elevada. Si se ata la esencia de un ser normal con otro de acumulación de daño, el primero sólo sufrirá una quinta parte del daño recibido por la criatura. En el caso de que alguno de los blancos del conjuro quiera resistirse deberá superar una RM.",
        "zeon": {
            "base": 140,
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
            "base": "Presencia máxima 100 / RM 120.",
            "intermedio": "Presencia máxima 140 / RM 140.",
            "avanzado": "Presencia máxima 200 / RM 170.",
            "arcano": "Presencia máxima 260 / RM 200."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Transmigrar Almas",
        "nivel": 76,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Otorga al hechicero la capacidad de transportar un alma de un cuerpo a otro. A todos los efectos, permite abandonar su antigua forma para tomar una nueva, conservando únicamente las capacidades intelectuales y anímicas. El alma puede ser ubicada tanto en cuerpos inanimados (piedras, espadas, etc...) como en seres vivos. Por naturaleza, el espíritu adquiere las limitaciones físicas de su nuevo cuerpo, aunque podrá sobrevivir mientras su carcasa no sea destruida. Si su nueva forma no tiene necesidades, el individuo podrá subsistir sin ellas. Si, por ejemplo, se transmigra a una piedra, el afectado no será consciente de qué hay en su entorno ni podrá moverse, pero en el caso de que la roca sea destruida, sería equivalente a que su cuerpo muriese. Si se introduce en un cuerpo sin vida, pero conservado en buenas condiciones, este volverá a vivir, al imbuírsele el alma de la que carecía. Si el cuerpo en el que se introduce ya tuviese alma, esta tratará naturalmente de resistirse a la intrusa. Para calcular el resultado de la lucha espiritual por el dominio, deberá realizarse un control comparativo entre ambas presencias. Cada una deberá lanzar un D100 y sumar el resultado a su presencia base (sin admitir la Tirada Abierta). Si la diferencia es superior a 100, el ganador habrá consumido a su antagonista y tomará el control del cuerpo para siempre. Si la diferencia es mayor de 50, el alma más débil permanecerá dormida indefinidamente hasta que algo la haga despertar. Finalmente, si es inferior 50, la vencedora obtendrá un control temporal del cuerpo, aunque la más débil permanecerá despierta y tendrá derecho a un nuevo control al finalizar el día. Tanto el alma afectada como el cuerpo en el que se desea introducir, tendrán derecho a resistirse superando una RM. Este conjuro permite transmigrar cualquier clase de alma que esté presente ante el mago, lo que incluye espíritus fallecidos que aún esperan El Llamamiento, pero no trae de vuelta espíritus del más allá. Si un espíritu sobrenatural es encerrado en un cuerpo físico, pierde sus poderes anímicos, reduciendo si es preciso su nivel.",
        "zeon": {
            "base": 180,
            "intermedio": 240,
            "avanzado": 300,
            "arcano": 540
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "RM 100 / Presencia máxima 60",
            "intermedio": "RM 140 / Presencia máxima 100",
            "avanzado": "RM 160 / Presencia máxima 140",
            "arcano": "RM 200 / Presencia máxima 180"
        },
        "mantenimiento": "No",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Existencia Espiritual",
        "nivel": 80,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al mago trascender a un estado espiritual, abandonando definitivamente su cuerpo físico. A partir de ese momento, dejará de ser una criatura natural o entre mundos y pasará a convertirse en ente espiritual con Gnosis 25, gozando de todas las ventajas que ello conlleva. Adicionalmente, obtendrá PD extras, que podrá usar para elegir entre Habilidades Naturales y Poderes de Creación de Seres, descritas en el Capítulo 26. También permite escoger PD en desventajas y penalizadores para obtener puntos adicionales. Ten en cuenta que el exceso de PD aumenta el nivel del hechicero; al usar este conjuro, el hechicero sume automáticamente un nivel (al convertirse en un ente espiritual) más otro adicional por cada 100 PD que obtenga sin desventajas. Este conjuro sólo funciona sobre seres naturales y seres entre mundos, por lo que no podrá ser lanzado sobre espíritus para incrementar sus habilidades nuevamente. En el caso de que un ser espiritual se reencarne de nuevo en una forma física, perderá de manera automática las ventajas y poderes que haya obtenido mediante este hechizo.",
        "zeon": {
            "base": 250,
            "intermedio": 500,
            "avanzado": 1000,
            "arcano": 2500
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "Hasta 100 PD opcionales en desventajas.",
            "intermedio": "+100 PD / hasta 100 PD opcionales en desventajas.",
            "avanzado": "+200 PD / hasta 200 PD opcionales en desventajas.",
            "arcano": "+300 PD / hasta 200 PD opcionales en desventajas."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Creación de Espíritus",
        "nivel": 82,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Mediante su magia, el brujo crea un ente espiritual bajo su completo dominio. El ser debe ser desarrollado como un Espíritu, usando los poderes y limitaciones de dichos seres del Capítulo 26. La criatura tendrá PD y, para calcular su nivel máximo, se emplean las mismas reglas que en el conjuro Crear Ser de la vía de Creación.",
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
        "nombre": "Atar Esencia Vital",
        "nivel": 86,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro esconde un alma en un contenedor físico, sin desligarla a completamente de su forma original. El afectado seguirá actuando a través de su antiguo cuerpo con libertad, puesto que sigue existiendo un vínculo con su alma, aunque este no será más que una carcasa vacía inmortal, ya que su esencia vital se encuentra a salvo en otro lugar. No obstante, el hecho de que no muera no significa que sea invulnerable. El cuerpo no es inmune a los críticos y estos podrán incapacitarle por completo. Además, aunque es incapaz de perecer a causa de la pérdida de puntos de vida, si estos se reducen hasta el estado de muerte, su cuerpo se convierte en una cáscara sin vida que sólo se curará con habilidades sobrenaturales. La carcasa sin alma será inmune a los efectos místicos de carácter anímico, es decir, que afecten directamente a su esencia. Por el contrario, el contenedor sí es vulnerable, y si este es destruido el personaje morirá automáticamente. Dado que sigue existiendo un lazo entre el cuerpo y el objeto que sirve como escondite para el alma, estos no pueden separarse a mucha distancia a riesgo de que se rompa la unión y el individuo fallezca. Dicha distancia es determinada por el grado del conjuro. Si alguien quiere resistirse a este efecto, deberá superar una RM, pero una vez fallada, no tendrá derecho a repetirla mientras no se ponga en contacto físico con el contenedor.",
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
            "base": "RM 100 / 1 kilómetro de distancia.",
            "intermedio": "RM 120 / 5 kilómetros de distancia.",
            "avanzado": "RM 140 / 50 kilómetros de distancia.",
            "arcano": "RM 160 / 150 kilómetros de distancia."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-90"
    },
    {
        "nombre": "Verdor",
        "nivel": 90,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El hechicero une su espíritu con las criaturas más naturales de la creación: los animales y las plantas, obteniendo el poder de extenderlos por todo el mundo. Verdor crea vida vegetal y animal al antojo del lanzador. La vegetación y los animales aparecerán en el mismo instante en el que se lanza este hechizo, sin importar las condiciones climatológicas de la zona; el brujo podría crear una selva incluso en mitad de un desierto (aunque eso no implica que sobreviviese durante un periodo prolongado en tales condiciones). Los animales y plantas deben ser de especies y razas existentes.",
        "zeon": {
            "base": 250,
            "intermedio": 450,
            "avanzado": 600,
            "arcano": 750
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "10 kilómetros de radio.",
            "intermedio": "150 kilómetros de radio.",
            "avanzado": "350 kilómetros de radio.",
            "arcano": "600 kilómetros de radio."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Dominio de la Vida",
        "nivel": 92,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El lanzador controla parte de la esencia del mundo, obteniendo el dominio absoluto de todos los Seres Naturales que se encuentren a su alrededor. Podrá transmitir sus órdenes directamente por la conexión mística que mantiene con los afectados, sin la necesidad de estar junto a ellos. Para resistirse, es necesario superar una RM (dado que controla la esencia misma de las criaturas, no es posible utilizar la RP). Los afectados tendrán derecho a una nueva Resistencia por día, y en cada ocasión en la que las órdenes recibidas vayan completamente en contra de su comportamiento.",
        "zeon": {
            "base": 300,
            "intermedio": 500,
            "avanzado": 750,
            "arcano": 1000
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "RM 100 / 100 kilómetros de radio.",
            "intermedio": "RM 130 / 500 kilómetros de radio.",
            "avanzado": "RM 160 / 1.500 kilómetros de radio.",
            "arcano": "RM 200 / 2.500 kilómetros de radio."
        },
        "mantenimiento": "60 / 75 / 85 / 100 Diario",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Resurrección",
        "nivel": 96,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro arranca del más allá un alma muerta, devolviéndola a la vida. La dificultad del hechizo depende del tiempo que haya transcurrido desde el momento en el que esta falleció, ya que cuanto mayor sea el periodo, el espíritu se encontrará mucho más disperso y arraigado en el flujo de las almas. Este hechizo sólo permite traer el alma, pero no podrá atarla por sí solo a su cuerpo ni sanarlo. Para hacer completamente efectiva una resurrección, deberá trasladarse el espíritu a un cuerpo apropiado mediante el conjuro Transmigrar el Alma. Existe la posibilidad de que el tiempo que ha pasado en el más allá haya afectado de forma irreparable al alma, por lo que queda en manos del Director de Juego limitar de algún modo los recuerdos y conocimientos del individuo. No es posible resucitar un alma que ya se haya reencarnado o que fuese destruida. Por base, el alma resucitada no podrá tener una presencia superior ni su muerte superar el plazo de tiempo que determine el grado del conjuro. L",
        "zeon": {
            "base": 400,
            "intermedio": 500,
            "avanzado": 600,
            "arcano": 700
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "Presencia máxima 30 / 1 mes.",
            "intermedio": "Presencia máxima 60 / 1 año.",
            "avanzado": "Presencia máxima 120 / 1 década.",
            "arcano": "Presencia máxima 150 / 1 siglo."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Señor de las Almas",
        "nivel": 100,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El lanzador controla una parte del flujo de las almas, obteniendo el dominio absoluto de todos los espíritus. Su autoridad se extiende sobre cualquier alma, lo que incluye tanto Seres Espirituales como otras criaturas similares. Tendrá un control total sobre ellas y podrá manejarlas como desee: mantenerlas en el mundo, devolverlas al flujo o modificar su esencia como se le antoje. También podrá arrancarlas de un cuerpo y reintroducirlas en otro libremente, incluso en niños que aún no han nacido (controlando así el nacimiento de Nephilim). El Señor de las Almas puede transmitir sus órdenes a las almas que se encuentren bajo su control directamente, por la conexión mística que mantiene con estas, sin necesidad de tener que estar ante ellas. Cualquiera que se pueda ver afectado por este conjuro podrá resistir sus efectos superando una RM. Aquellos que fallen el control tendrán derecho a una nueva tirada cada día, o cada vez que las órdenes recibidas vayan completamente en contra de su comportamiento. Una vez superada la Resistencia, un individuo queda completamente libre del hechizo. Este conjuro no otorga ningún control sobre los espíritus de los No Muertos, ya que se encuentran desvinculados del flujo.",
        "zeon": {
            "base": 600,
            "intermedio": 800,
            "avanzado": 1200,
            "arcano": 1500
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 14,
            "avanzado": 16,
            "arcano": 18
        },
        "grados": {
            "base": "RM 120 / 100 kilómetros.",
            "intermedio": "RM 140 / 1.000 kilómetros.",
            "avanzado": "RM 180 / 2.500 kilómetros.",
            "arcano": "RM 200 / 5.000 kilómetros."
        },
        "mantenimiento": "120 / 160 / 240 / 300 Diario",
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

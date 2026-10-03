// =====================================================
// VÍA: AGUA
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaAgua = {
    id: "agua",
    nombre: "Agua",
    color: "#3b82f6",
    hechizos: [
    {
        "nombre": "Manantial",
        "nivel": 2,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Atrae cualquier corriente o arroyo subterráneo que haya en las proximidades, haciendo brotar un manantial en el lugar designado por el brujo. El conjuro influye en los líquidos naturales que se encuentren a menos distancia del lanzador de lo que determina el grado del conjuro, aunque no es capaz de atravesar barreras de energía.",
        "zeon": {
            "base": 30,
            "intermedio": 80,
            "avanzado": 120,
            "arcano": 180
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 7,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "100 metros.",
            "intermedio": "250 metros.",
            "avanzado": "500 metros.",
            "arcano": "1 kilómetro."
        },
        "mantenimiento": "5 / 10 / 15 / 20 Diario",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Crear Frío",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea intensidades de frío o hielo. Mientras se mantenga el conjuro, la temperatura se conservará.",
        "zeon": {
            "base": 30,
            "intermedio": 50,
            "avanzado": 90,
            "arcano": 140
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 7,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "1 Intensidad.",
            "intermedio": "3 Intensidades.",
            "avanzado": "5 Intensidades.",
            "arcano": "8 Intensidades."
        },
        "mantenimiento": "5 / 5 / 10 / 15 Diario",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Capacidad Acuática",
        "nivel": 10,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Confiere la capacidad de respirar y moverse libremente por ambientes acuáticos. El personaje sobre el que se lance podrá trasladarse con su máximo Tipo de movimiento en dichos medios, respirando líquidos y resistiendo cualquier clase de presión. Puede afectar a tantos blancos como desee el brujo, siempre que la suma de sus presencias no supere lo que determine el grado del conjuro.",
        "zeon": {
            "base": 50,
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
            "base": "Presencia máxima 50.",
            "intermedio": "Presencia máxima 100.",
            "avanzado": "Presencia máxima 200.",
            "arcano": "Presencia máxima 350."
        },
        "mantenimiento": "10 / 20 / 20 / 25 Diario"
    },
    {
        "nombre": "Inmunidad al Frío",
        "nivel": 12,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro permite al hechicero, o a las personas que designe, ser inmune a intensidades de frío. En el caso de que se reciba un ataque basado en dicho elemento, cada intensidad a la que es inmune disminuye 5 puntos el daño base del ataque y otorga un +5 a las Resistencias contra sus efectos.",
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
            "base": "5 intensidades de frío.",
            "intermedio": "12 intensidades de frío.",
            "avanzado": "20 intensidades de frío.",
            "arcano": "30 intensidades de frío."
        },
        "mantenimiento": "5 / 10 / 10 / 15 Diario",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Burbuja Protectora",
        "nivel": 16,
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Levanta una burbuja de energía mágica que funciona a modo de escudo contra cualquier clase de ataque. La barrera no sufre perjuicio alguno si detiene ataques con un daño base igual o inferior a lo que indique el grado del conjuro, pero los impactos con un daño base superior la rompen automáticamente.",
        "zeon": {
            "base": 40,
            "intermedio": 90,
            "avanzado": 140,
            "arcano": 220
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Hasta Daño base 40.",
            "intermedio": "Hasta Daño base 90.",
            "avanzado": "Hasta Daño base 120.",
            "arcano": "Hasta Daño base 160."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Impacto de Agua",
        "nivel": 20,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "El brujo genera una descarga ofensiva que, aunque ataca en la Contundente, es capaz de dañar energía. Si causa daño o es detenido, produce un impacto sobre el blanco del sortilegio con una fuerza determinada por el grado del conjuro.",
        "zeon": {
            "base": 50,
            "intermedio": 90,
            "avanzado": 140,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "Daño 40 / Fuerza 8.",
            "intermedio": "Daño 60 / Fuerza 10.",
            "avanzado": "Daño 80 / Fuerza 12.",
            "arcano": "Daño 100 / Fuerza 14."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Control sobre los Líquidos",
        "nivel": 22,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Otorga completo control sobre una masa líquida. El hechizo permite alterar su forma y naturaleza, haciendo que se mueva por sí misma, dándole otra apariencia o incluso modificando su solidez. Si se ejecuta contra un elemental de agua, el mago podrá dominarlo si la criatura no supera una RM. Este sortilegio es incluso capaz de manejar el torrente sanguíneo de los seres vivos, pero en tal caso, el individuo afectado aplica un bono de +40 a su RM o RF. Manejar la sangre de una persona permite al hechicero producirle por asalto un negativo a la acción y un daño equivalente a la mitad del nivel de fracaso. En el caso de los elementales, tendrán derecho a un nuevo control al día o si reciben una orden completamente opuesta a su naturaleza, mientras que, cualquier otro individuo afectado, podrá repetirlo cada cinco asaltos para tratar de librarse completamente de la influencia del mago.",
        "zeon": {
            "base": 60,
            "intermedio": 100,
            "avanzado": 150,
            "arcano": 220
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "RM o RF 100 / 5 litros.",
            "intermedio": "RM o RF 120 / 50 litros.",
            "avanzado": "RM o RF 140 / 500 litros.",
            "arcano": "RM o RF 180 / 5.000 litros."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Congelar las Emociones",
        "nivel": 26,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este hechizo hiela los sentimientos de una persona, otorgándole inmunidad psicológica contra todos los estados emocionales.",
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
            "base": "Afecta a estados naturales.",
            "intermedio": "Como en grado base, pero el afectado deja de sentir también dolor.",
            "avanzado": "Como en grado intermedio, pero también afecta a todos los estados sobrenaturales.",
            "arcano": "Como en grado Avanzado, pero el hechicero es capaz de elegir libremente que sentimientos congelar y cuales no."
        },
        "mantenimiento": "5 / 5 / 10 / 10",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Controlar el Frío",
        "nivel": 30,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Permite controlar una cantidad de frío o hielo. El dominio capacita al brujo para alterar su potencia (hasta un la mitad de su valor arriba o abajo, en caso de que se mida por intensidades) o cambiar su forma. Si lo usa contra un ser basado naturalmente en frío, el mago podrá controlarlo si este no supera una RM. La criatura tendrá derecho a un nuevo control al día, o si recibe una orden completamente opuesta a su naturaleza.",
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
        "nombre": "Congelar",
        "nivel": 32,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Provoca un intenso frío sobre una o varias personas, congelando sus cuerpos al tiempo que los encierra en prisiones de hielo. Si se concentra sobre un único antagonista, aumenta el valor de la Resistencia 20 puntos. Dependiendo del nivel de fracaso del control, las consecuencias del conjuro son distintas. Si la diferencia es menor de 20, el efecto es parálisis menor; si es menor de 80, de parálisis normal, y si es superior, parálisis completa.",
        "zeon": {
            "base": 60,
            "intermedio": 100,
            "avanzado": 140,
            "arcano": 220
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "RM 120 / 5 metros de radio.",
            "intermedio": "RM 140/ 10 metros de radio.",
            "avanzado": "RM 160 / 25 metros de radio.",
            "arcano": "RM 180 / 50 metros de radio."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Pantalla de Hielo",
        "nivel": 36,
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Forma una barrera de hielo que protege frente a cualquier fuente de ataque. En el caso de que el escudo detenga con éxito una descarga de energía basada en luz u oscuridad, puede devolver el ataque hacia su lanzador con la misma habilidad con la que este lo proyectó.",
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
            "base": "400 puntos de Resistencia.",
            "intermedio": "1.500 puntos de Resistencia.",
            "avanzado": "2.500 puntos de Resistencia.",
            "arcano": "4.000 puntos de Resistencia."
        },
        "mantenimiento": "10 / 10 / 15 / 15",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Crear Líquidos",
        "nivel": 40,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea agua o un cuerpo líquido similar. En el caso de que el compuesto tenga una presencia superior al agua, el DJ tiene la capacidad de reducir como considere necesario su cantidad. Este conjuro no permite elaborar líquidos con capacidades místicas.",
        "zeon": {
            "base": 80,
            "intermedio": 140,
            "avanzado": 240,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 16
        },
        "grados": {
            "base": "50 litros de agua.",
            "intermedio": "500 litros de agua.",
            "avanzado": "5.000 litros de agua.",
            "arcano": "50.000 litros de agua."
        },
        "mantenimiento": "10 / 20 / 25 / 30 Diario"
    },
    {
        "nombre": "Ataque de Hielo",
        "nivel": 42,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Produce una potente descarga de hielo capaz de dañar energía. El lanzador puede elegir libremente entre atacar en Frío o en Penetrantes.",
        "zeon": {
            "base": 80,
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
            "base": "Daño 100.",
            "intermedio": "Daño 150.",
            "avanzado": "Daño 200.",
            "arcano": "Daño 250."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Cristalización",
        "nivel": 46,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este hechizo cristaliza un cuerpo, tornándolo frágil y quebradizo. El individuo afectado deberá superar un control de RM o RF o todo su cuerpo se congelará, quedando sometido de inmediato a paralización menor. Adicionalmente, cualquier daño que reciba se considera automáticamente crítico, sin importar cuál sea su valor. Los seres con acumulación no reciben un crítico directo, pero todo su cuerpo se torna un punto vulnerable.",
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
            "base": "RM o RF 140.",
            "intermedio": "RM o RF 160.",
            "avanzado": "RM o RF 180.",
            "arcano": "RM o RF 200."
        },
        "mantenimiento": "5 / 10 / 15 / 20",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Control Reflejo",
        "nivel": 50,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El hechicero ata el cuerpo de un individuo al suyo propio, obligándole a imitar todos los movimientos que haga. En cierta manera, el personaje afectado se comporta como un espejo, que copia al instante a su controlador. Para resistir el conjuro es necesario superar un control de RM. El hechizo no permite repetir la tirada, salvo si el afectado se da cuenta de que va a ejecutar una acción que jamás realizaría.",
        "zeon": {
            "base": 80,
            "intermedio": 160,
            "avanzado": 240,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "RM 80.",
            "intermedio": "RM 130.",
            "avanzado": "RM 160.",
            "arcano": "RM 200."
        },
        "mantenimiento": "5 / 10 / 15 / 20"
    },
    {
        "nombre": "Cuerpo Líquido",
        "nivel": 52,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El cuerpo designado por el hechicero se transforma en una sustancia líquida, permitiéndole alterar su forma voluntariamente y volviéndolo inmune a muchas clases de ataques. El limitado metamorfismo funciona con efectividad, ya que quienquiera que lo vea, debe superar un control de Advertir contra Muy difícil para percatarse de su naturaleza líquida. Adicionalmente, tiene la capacidad de convertir sus extremidades en variadas armas físicas, que poseerán una calidad +5. Aunque no es propiamente inmaterial, alguien en forma líquida puede entrar en cualquier lugar en el que sea capaz de filtrarse, como pequeñas rendijas. En este estado, un personaje es completamente invulnerable a los ataques Penetrantes y de Filo que no dañen energía, mientras que los Contundentes le producen sólo la mitad de efecto (salvo si dañan energía, que seguirán afectándole plenamente). Desgraciadamente, se torna vulnerable a los efectos de frío paralizantes, aplicando un penalizador de -20 a sus Resistencias contra ellos.",
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
            "intermedio": "El sujeto podrá moverse por el agua a una velocidad equivalente a su Tipo de movimiento natural.",
            "avanzado": "Como el Intermedio, pero la calidad de las armas es +10.",
            "arcano": "Como el Avanzado, pero los ataques de Filo o Penetrantes basados en energía le producen sólo mitad de daño."
        },
        "mantenimiento": "10 / 15 / 15 / 20",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Reflejar Estados",
        "nivel": 56,
        "accion": "Pasiva",
        "tipo": "Automático",
        "efecto": "El brujo crea un espejo místico, capaz de reflejar cualquier estado sobrenatural del que él o un individuo cercano sea blanco. El efecto se refleja automáticamente sobre aquel que lo haya producido, quien deberá superar una RM para evitar caer víctima de su propio poder. Si, por ejemplo, el brujo es presa de un terrible dolor de carácter mágico, este hechizo obliga al individuo que se lo hubiera provocado a superar automáticamente la RM, o también sufrirá el mismo padecimiento. Este hechizo no tiene mantenimiento, pero el estado reflejado se mantendrá mientras perdure en el sujeto sobre el que fue lanzado originariamente. Cada efecto sólo puede tratar de reflejarse una vez.",
        "zeon": {
            "base": 120,
            "intermedio": 180,
            "avanzado": 240,
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
        "mantenimiento": "No",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Tormenta de Hielo",
        "nivel": 60,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Crea una potente tormenta helada que congelará todo lo que encuentre. Quienquiera que se halle en ella, debe de superar cada cinco asaltos un control de RF contra 140, o sufrir automáticamente 10 puntos de daño basado en frío y un -5 acumulativo a toda acción. Debido a la intensa ventisca, las habilidades perceptivas aumentan dos niveles su dificultad. La tormenta tendrá un radio dentro del cual no es posible designar blancos. La condición para ser afectado será estar en el interior del área en el asalto posterior a su lanzamiento. El conjuro permanece siempre estático en el mismo lugar.",
        "zeon": {
            "base": 120,
            "intermedio": 180,
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
            "base": "50 metros de radio.",
            "intermedio": "150 metros de radio.",
            "avanzado": "500 metros de radio / La RF se incrementa hasta 160.",
            "arcano": "1 kilómetro de radio / La RF se incrementa hasta 180."
        },
        "mantenimiento": "10 / 10 / 15 / 15"
    },
    {
        "nombre": "Control de las Mareas",
        "nivel": 62,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga la capacidad de controlar limitadamente las corrientes de agua de mares y ríos, permitiendo al hechicero modificar su curso y potencia. El poder de este hechizo es tal, que el mago puede incluso producir pequeños maremotos o invertir el sentido de un río. Afecta en un radio alrededor del hechicero.",
        "zeon": {
            "base": 150,
            "intermedio": 300,
            "avanzado": 450,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "500 metros de radio.",
            "intermedio": "1 kilómetro de radio.",
            "avanzado": "3 kilómetros de radio.",
            "arcano": "5 kilómetros de radio."
        },
        "mantenimiento": "15 / 30 / 45 / 60 Diario",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Prisión de Agua",
        "nivel": 66,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este hechizo crea una inmensa masa de agua que engulle en su interior a todos los individuos que encuentre. Quienquiera que sea atrapado dentro, se moverá como si estuviera buceando y, a menos que respire en cuerpos líquidos, comenzará también a ahogarse. La prisión no permite que nadie escape de ella, produciendo potentes corrientes que empujan a sus víctimas hacia su centro. Si un personaje pretende huir, debe superar un control enfrentado contra una Fuerza 14, aunque obtiene un bonificar de +1 a su característica por cada nivel de Nadar que supere por encima de Fácil. La condición para ser afectado será encontrarse en el interior de la zona seleccionada, en el asalto posterior al lanzamiento del conjuro.",
        "zeon": {
            "base": 140,
            "intermedio": 200,
            "avanzado": 280,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "10 metros cúbicos.",
            "intermedio": "50 metros cúbicos.",
            "avanzado": "100 metros cúbicos.",
            "arcano": "150 metros cúbicos / El control es contra Fuerza 15."
        },
        "mantenimiento": "10 / 10 / 15 / 20",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Glacial",
        "nivel": 70,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Como su nombre indica, crea una inmensa zona glacial alrededor del hechicero, sin importar en absoluto cuáles sean las condiciones climáticas del ambiente en el que se encuentra. Todo el entorno se cubrirá de inmediato de hielo y nieve, reduciendo la temperatura ambiental a varios grados bajo cero. Mientras el conjuro se mantenga, el frío no será afectado por los fenómenos atmosféricos naturales.",
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
            "base": "1 Kilómetro de radio.",
            "intermedio": "3 Kilómetros de radio.",
            "avanzado": "5 Kilómetros de radio.",
            "arcano": "10 Kilómetros de radio."
        },
        "mantenimiento": "40 / 60 / 80 / 100 Diario"
    },
    {
        "nombre": "Tsunami",
        "nivel": 72,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Levanta un devastador tsunami capaz de arrasar completamente la costa. Las construcciones con una barrera de daño inferior a 80 serán destruidas de inmediato, mientras que el resto sufrirá enormes daños. Naturalmente, cualquier individuo dentro de la zona de impacto padecerá las consecuencias lógicas del fenómeno.",
        "zeon": {
            "base": 250,
            "intermedio": 350,
            "avanzado": 450,
            "arcano": 550
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "1 kilómetro de longitud.",
            "intermedio": "10 kilómetros de longitud.",
            "avanzado": "20 kilómetros de longitud.",
            "arcano": "30 kilómetros de longitud / Arrasa construcciones de hasta barrera de daño 90."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Reflejo del Alma",
        "nivel": 76,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El poder de este hechizo manifiesta un reflejo espiritual de una persona o criatura, una copia anímica de un individuo que conserva todas y cada una de las cualidades que tiene el original. La entidad es idéntica al personaje afectado, salvo por el hecho de que es un ser espiritual, con la capacidad de interactuar con el mundo real y visible por cualquiera (pero aun así, inmune a cualquier ataque no basado en energía). Si la criatura tiene poderes que dependen de un Gnosis superior a 20, dichas habilidades no son copiadas. El reflejo obedece las órdenes del brujo, pero sólo puede manifestarse mientras se encuentre en presencia del sujeto a partir del cual se ha formado. Puede exteriorizarse el alma de cualquiera. El brujo sólo puede tener activo un hechizo de reflejo del alma sobre un mismo individuo a la vez. Si el sujeto que va a ser copiado trata de resistirse, puede evitar los efectos del sortilegio superando una RM. Este conjuro no funciona sobre el propio lanzador.",
        "zeon": {
            "base": 200,
            "intermedio": 280,
            "avanzado": 320,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "RM 140 / Copia entidades de hasta Nivel 3.",
            "intermedio": "RM 160 / Copia entidades de hasta Nivel 5.",
            "avanzado": "RM 180 / Copia entidades de hasta Nivel 8 / Imita poderes de hasta Gnosis 25.",
            "arcano": "RM 200 / Copia entidades de hasta Nivel 12 / Imita poderes de hasta Gnosis 30."
        },
        "mantenimiento": "20 / 30 / 35 / 40",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Enlentecer el Tiempo",
        "nivel": 80,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este conjuro influye en las fibras del continuo espacio tiempo de una parte de la realidad, aminorando su flujo de modo que, para todo el mundo, incluyendo al propio lanzador, trascurre mucho más lentamente. La zona afectada por el hechizo se separa de la realidad momentáneamente, haciendo que cada instante dure más en el exterior; por ejemplo, si el tiempo se reduce una décima parte, cada minuto dentro serían diez fuera del área del conjuro. El área de acción es alrededor del brujo, aunque se extiende a una velocidad de 10 metros por asalto a partir del momento en el que es lanzado. Si alguien penetra en ella posteriormente, se ve igualmente influenciado. Las entidades afectadas pueden evitar las consecuencias del hechizo superando una RM, pero únicamente si posee un Gnosis mayor de 30. La condición para ser influido es encontrarse en el interior de la zona seleccionada, en el asalto posterior al lanzamiento del conjuro.",
        "zeon": {
            "base": 200,
            "intermedio": 320,
            "avanzado": 450,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "100 metros de radio / RM 120 / El tiempo se reduce una décima parte.",
            "intermedio": "200 metros de radio / RM 140 / El tiempo se reduce una centésima parte.",
            "avanzado": "500 metros de radio / RM 160 / El tiempo se reduce una milésima parte.",
            "arcano": "1 kilómetro de radio / RM 180 / El tiempo se reduce una millonésima parte."
        },
        "mantenimiento": "20 / 25 / 30 / 35"
    },
    {
        "nombre": "Crear Ondina",
        "nivel": 82,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea una entidad de agua con apariencia de vida bajo el control absoluto del hechicero. El ente será desarrollado como un Ser Entre Mundos, usando los poderes y limitaciones de los elementales de agua del Capítulo 26. Para calcular su nivel máximo, se emplean las mismas reglas que en el conjuro Crear Ser de la vía de Creación. con el hechizo Crear Ondina",
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
        "nombre": "Congelar la Magia",
        "nivel": 86,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Este hechizo congela la magia, paralizando temporalmente un conjuro y anulando sus efectos. Mientras un sortilegio permanezca helado no desaparece, pero se queda estancado sin producir consecuencias, y tampoco requiere que se pague su mantenimiento. Afecta tanto a hechizos controlados por el brujo como a aquellos que han sido lanzados por terceros. En el momento en el que congelar la magia deja de mantenerse, el sortilegio estancado vuelve a ser efectivo. Dado que es pasivo, puede congelar hechizos que se usan en el mismo asalto en que es ejecutado.",
        "zeon": {
            "base": 250,
            "intermedio": 400,
            "avanzado": 550,
            "arcano": 800
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "Valor zeónico máximo 150.",
            "intermedio": "Valor zeónico máximo 250.",
            "avanzado": "Valor zeónico máximo 300.",
            "arcano": "Valor zeónico máximo 400."
        },
        "mantenimiento": "50 / 75 / 90 / 110 Diario",
        "libreAcceso": "1-90"
    },
    {
        "nombre": "En el Interior del Espejo",
        "nivel": 90,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El brujo conjura el reflejo de un territorio, creando una realidad paralela a imagen y semejanza de un lugar que existe en el mundo real. El reflejo es idéntico al sitio imitado, incluyendo tanto construcciones como flora y clima, que permanecen inalterables de la manera en la que se encontraban cuando el sortilegio fue lanzado. Únicamente no podrán ser imitados los seres vivos con una presencia superior a 20 y los lugares con características excepcionales. En el momento de lanzar el conjuro, el hechicero debe crear distintas puertas que conecten el mundo real con su obra, que podrán ubicarse y tener la forma que desee. No hay un número máximo de aperturas, aunque por lo menos está obligado a crear una.",
        "zeon": {
            "base": 300,
            "intermedio": 480,
            "avanzado": 600,
            "arcano": 800
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "500 metros de radio máximo.",
            "intermedio": "2 kilómetros de radio máximo.",
            "avanzado": "5 kilómetros de radio máximo.",
            "arcano": "10 kilómetros de radio máximo / Se pueden imitar seres de hasta presencia 30."
        },
        "mantenimiento": "30 / 50 / 60 / 70 Diario"
    },
    {
        "nombre": "Señor de los Hielos",
        "nivel": 92,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El lanzador controla cualquier núcleo de frío o hielo sin importar el número de intensidades que lo compongan. Este dominio le permite disminuir la temperatura ambiental dentro de su área de acción, y cristalizar hielo allí donde desee. Cualquier criatura basada en frío que se encuentre en el interior, deberá superar una RM o será dominada de inmediato. Si la pasan, ya no necesitan volver a realizar el control. Los afectados tienen derecho a una nueva tirada únicamente si alteran sus Resistencias.",
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
        "mantenimiento": "30 / 45 / 60 / 100 Diario"
    },
    {
        "nombre": "Señor de las Aguas",
        "nivel": 96,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Otorga el control absoluto de todas las sustancias líquidas que se encuentren en un radio de 100 kilómetros. Este dominio le permite alterar libremente los océanos, ríos y lagos de cualquier magnitud, moldeándolos a su antojo como si fuesen una extensión de su ser. Toda criatura basada en agua que se encuentre dentro del área del conjuro, deberá superar una RM o será controlada por el lanzador. Si la pasan, ya no necesitan volver a realizar el control. Los afectados tienen derecho a una nueva tirada únicamente si alteran su Resistencia base.",
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
            "arcano": "Afecta cualquier sustancia líquida existente / 240 RM."
        },
        "mantenimiento": "30 / 45 / 60 / 100 Diario",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Un mundo Perfecto",
        "nivel": 100,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este hechizo congela toda la realidad, deteniendo completamente el paso del tiempo. Mientras duren sus efectos, la existencia permanece paralizada; únicamente el lanzador podrá moverse y alterar su entorno libremente (aunque será incapaz de regenerar Zeon). Las entidades afectadas pueden evitar las consecuencias del hechizo superando una RM, pero únicamente si poseen un Gnosis mayor de 35 o 20 puntos por encima de su Natura.",
        "zeon": {
            "base": 450,
            "intermedio": 800,
            "avanzado": 1200,
            "arcano": 1600
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 15,
            "avanzado": 17,
            "arcano": 20
        },
        "grados": {
            "base": "RM 120.",
            "intermedio": "RM 180.",
            "avanzado": "RM 220.",
            "arcano": "RM 260."
        },
        "mantenimiento": "90 / 115 / 130 / 145 Diario",
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

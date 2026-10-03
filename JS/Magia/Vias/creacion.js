// =====================================================
// VÍA: CREACIÓN
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaCreacion = {
    id: "creacion",
    nombre: "Creación",
    color: "#22c55e",
    hechizos: [
    {
        "nombre": "Creación Menor",
        "nivel": 2,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea un objeto de naturaleza simple, cuya presencia no podrá ser mayor de 25.",
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
            "base": "1 objeto / presencia máxima 25.",
            "intermedio": "5 objetos / presencia máxima 25.",
            "avanzado": "1 objetos / presencia máxima 30.",
            "arcano": "5 objetos / presencia máxima 25."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Reconstruir",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Restaura un objeto inorgánico hasta su forma original, a partir de las piezas o componentes que queden de él. Nótese que es necesario tener todos sus fragmentos o la materia prima necesaria para que la reconstrucción sea completa o, en caso contrario, sólo se reparará parcialmente.",
        "zeon": {
            "base": 40,
            "intermedio": 140,
            "avanzado": 200,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "Presencia máxima afectable 20.",
            "intermedio": "Presencia máxima afectable 60.",
            "avanzado": "Presencia máxima afectable 100.",
            "arcano": "Presencia máxima afectable 120."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Crear Energía",
        "nivel": 8,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea intensidades de uno de los tres tipos de energía existentes: frío, fuego o electricidad.",
        "zeon": {
            "base": 40,
            "intermedio": 150,
            "avanzado": 200,
            "arcano": 250
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "1 intensidad.",
            "intermedio": "5 intensidades.",
            "avanzado": "10 intensidades.",
            "arcano": "20 intensidades."
        },
        "mantenimiento": "5 / 15 / 20 / 25"
    },
    {
        "nombre": "Regeneración",
        "nivel": 10,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Aumenta la capacidad de un cuerpo para sanar todo tipo de herida. Este conjuro otorga un nivel de Regeneración base a cualquier individuo designado por el mago, sustituyendo la que poseyera naturalmente.",
        "zeon": {
            "base": 60,
            "intermedio": 100,
            "avanzado": 150,
            "arcano": 250
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "Regeneración 4.",
            "intermedio": "Regeneración 8.",
            "avanzado": "Regeneración 12.",
            "arcano": "Regeneración 16."
        },
        "mantenimiento": "10 / 10 / 15 / 25 Diario"
    },
    {
        "nombre": "Modificación Inorgánica",
        "nivel": 12,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Mediante el control de la magia, el brujo puede alterar la forma y naturaleza de un objeto inorgánico, convirtiéndolo en otro completamente distinto pero de poder espiritual similar. De este modo, permite transformar algo en otra cosa que tenga una presencia igual o inferior.",
        "zeon": {
            "base": 60,
            "intermedio": 90,
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
            "base": "Presencia máxima 20.",
            "intermedio": "Presencia máxima 30.",
            "avanzado": "Presencia máxima 40.",
            "arcano": "Presencia máxima 50."
        },
        "mantenimiento": "5 / 5 / 5 / 10",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Aumentar Resistencias",
        "nivel": 16,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Incrementa sobrenaturalmente todas las Resistencias de un individuo (RF, RV, RE, RM y RP). Los efectos de este conjuro no se superponen, y sólo se puede afectar con él una vez a cada sujeto.",
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
            "base": "+10 a todas las Resistencias.",
            "intermedio": "+20 a todas las Resistencias.",
            "avanzado": "+30 a todas las Resistencias.",
            "arcano": "+40 a todas las Resistencias."
        },
        "mantenimiento": "15 / 20 / 30 / 40 Diario"
    },
    {
        "nombre": "Escudo Real",
        "nivel": 18,
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Forma una barrera de energía que protege frente a cualquier fuente de ataque.",
        "zeon": {
            "base": 40,
            "intermedio": 150,
            "avanzado": 260,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "500 Puntos de Resistencia.",
            "intermedio": "3.000 Puntos de Resistencia.",
            "avanzado": "5.000 Puntos de Resistencia.",
            "arcano": "10.000 Puntos de Resistencia."
        },
        "mantenimiento": "5 / 15 / 15 / 20"
    },
    {
        "nombre": "Curación",
        "nivel": 20,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Hace recuperar puntos de vida al sujeto sobre el que se lance. Este conjuro no permite recobrar miembros cercenados o pérdidas permanentes, pero sí elimina los penalizadores temporales causados por críticos, en una cantidad equivalente a la mitad de los puntos de vida devueltos.",
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
            "base": "50 Puntos de vida.",
            "intermedio": "150 Puntos de vida.",
            "avanzado": "250 Puntos de vida.",
            "arcano": "350 Puntos de vida."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Barrera de Daño",
        "nivel": 22,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Las energías sobrenaturales que maneja este hechizo se unen al cuerpo del individuo designado, otorgándole así cierta inmunidad al daño. A efectos de juego, obtendrá una barrera de daño (Ver capítulo 14).",
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
            "base": "Barrera de Daño 30.",
            "intermedio": "Barrera de Daño 50.",
            "avanzado": "Barrera de Daño 80.",
            "arcano": "Barrera de Daño 100."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Crear Homúnculo",
        "nivel": 26,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Los homúnculos son pequeños elementales de magia que los brujos suelen utilizar en diversas funciones, desde el espionaje hasta el mantenimiento de su casa. El conjuro crea un ser místico de nivel 0 bajo el completo control del hechicero, empleando las reglas descritas en el Capítulo 26. Se trata de Seres Entre Mundos con Gnosis 5 pero, dada su naturaleza menor, se rigen por las siguientes reglas especiales: 1- Sus características no podrán ser superiores a 5, no pueden tener el Don ni tampoco ninguna habilidad primaria o secundaria por encima de 50. 2- Además, tienen un penalizador de -2 a su tamaño y no pueden elegir Tamaño Innatural. 3- No podrán tener ninguna habilidad intelectual por encima de la de su creador. Cada homúnculo creado puede ser completamente distinto.",
        "zeon": {
            "base": 60,
            "intermedio": 180,
            "avanzado": 250,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "1 Homúnculo.",
            "intermedio": "10 Homúnculos.",
            "avanzado": "25 Homúnculos.",
            "arcano": "100 Homúnculos."
        },
        "mantenimiento": "10 / 20 / 25 / 35 Diario"
    },
    {
        "nombre": "Cambio Menor",
        "nivel": 28,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro permite alterar la apariencia de un objeto o ser, modificando su forma. El cambio se limita a variar su aspecto exterior, sin que en ningún caso pueda perder sus cualidades o naturaleza original. De esta forma, una reluciente espada corta se podría tornar vieja y oxidada, pero no en un objeto distinto, como un bastón. En el caso de los seres vivos, puede modificarse su aspecto físico sin variar más de dos puntos su Tamaño, transformando, por ejemplo, a un hombre gordo y feo en otro joven y atractivo. En el caso de los objetos, una vez que son afectados no tienen derecho a una nueva Resistencia, pero las personas podrán repetir el control una vez al día si desean librarse de sus efectos. Es posible afectar a varios objetivos, siempre y cuando la suma de sus presencias no sea superior a la máxima presencia permitida.",
        "zeon": {
            "base": 60,
            "intermedio": 90,
            "avanzado": 150,
            "arcano": 250
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "RM 80 / Máxima Presencia 60.",
            "intermedio": "RM 100 / Máxima Presencia 90.",
            "avanzado": "RM 140 / Máxima Presencia 120.",
            "arcano": "RM 180 / Máxima Presencia 180."
        },
        "mantenimiento": "10 / 10 / 15 / 25 Diario"
    },
    {
        "nombre": "Imitar",
        "nivel": 30,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea una copia exacta de un objeto inorgánico ya existente que se encuentre al alcance del brujo. Se forma una imitación perfecta del original que mantendrá todas sus cualidades, incluso las sobrenaturales, siempre y cuando no sean poderes de Nivel 4 o superior. No tiene efectos sobre criaturas animadas mágicamente, pero sí sobre construcciones mecánicas, en el caso de que no tengan alma.",
        "zeon": {
            "base": 100,
            "intermedio": 200,
            "avanzado": 300,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Presencia máxima 30.",
            "intermedio": "Presencia máxima 80.",
            "avanzado": "Presencia máxima 120.",
            "arcano": "Presencia máxima 160."
        },
        "mantenimiento": "5 / 10 / 15 / 20 Diario"
    },
    {
        "nombre": "al Inmunidad",
        "nivel": 32,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro permite al hechicero, o a aquellas personas designadas por él, ser inmune a intensidades de un tipo concreto de energía, ya sea fuego, electricidad o frío. En el caso de que se reciba un ataque basado en el elemento respecto del que se es inmune, cada intensidad disminuye 5 puntos el daño base y otorga un +5 a las Resistencias contra sus efectos.",
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
            "base": "5 Intensidades.",
            "intermedio": "15 Intensidades.",
            "avanzado": "25 Intensidades.",
            "arcano": "35 Intensidades."
        },
        "mantenimiento": "10 / 20 / 25 / 30 Diario",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Reducción de Daño",
        "nivel": 36,
        "accion": "Pasiva",
        "tipo": "Automático",
        "efecto": "La magia de este conjuro afecta a la potencia de una agresión, disminuyendo la fuerza de su impacto. Al ser lanzado, reduce el daño base de un ataque. Si esta decrece hasta 0, la agresión no produce ningún efecto. Si, por ejemplo, se utiliza en grado base contra un ataque de daño 60, cuando este vaya a golpear se calculará como si tuviera sólo 20. Dos conjuros de reducción de daño no se superponen frente a una misma fuente de ataque.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 160,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "-40 al daño del ataque.",
            "intermedio": "-60 al daño del ataque.",
            "avanzado": "-80 al daño del ataque.",
            "arcano": "-120 al daño del ataque."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Control Físico",
        "nivel": 38,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Mediante este hechizo, el brujo es capaz de controlar el cuerpo de un ser como si fuese un simple títere. Dado que sólo otorga un dominio físico y no espiritual, el individuo sometido no está obligado a usar ninguna habilidad sobrenatural (magia, Ki, poderes psíquicos…) en contra de su voluntad, aunque sí sus habilidades marciales. Para resistir el control, hay que superar una RM. El afectado tendrá derecho a una nueva Resistencia por día, y en cada ocasión en la que las órdenes recibidas vayan completamente en contra de su comportamiento.",
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
            "base": "RM 80.",
            "intermedio": "RM 120.",
            "avanzado": "RM 140.",
            "arcano": "RM 180."
        },
        "mantenimiento": "25 / 40 / 50 / 60 Diario"
    },
    {
        "nombre": "Adquirir Habilidades",
        "nivel": 40,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este hechizo incrementa temporalmente las habilidades secundarias de un individuo, otorgándole un bonificador que podrá repartir libremente entre cualquier campo hasta un máximo de 320, salvo en aquellos que requieran conocimientos.",
        "zeon": {
            "base": 80,
            "intermedio": 180,
            "avanzado": 280,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "+50 al bonificador.",
            "intermedio": "+150 al bonificador.",
            "avanzado": "+250 al bonificador.",
            "arcano": "+400 al bonificador."
        },
        "mantenimiento": "5 / 10 / 15 / 20"
    },
    {
        "nombre": "Fusionar",
        "nivel": 42,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Une dos seres en un único cuerpo, creando un nuevo individuo que reúne las características y habilidades de ambos. El brujo designará qué capacidades predominarán, seleccionando las que más le interesen de cada uno. De esta forma, si se fusionan un luchador y un mentalista, el individuo resultante podrá tener la pericia de combate del guerrero, las capacidades mentales del psíquico y las habilidades secundarias más elevadas de cada uno. El dominio del cuerpo recaerá en aquel de los dos que gane un control enfrentado de Voluntad, aunque puede mantener algunos rasgos característicos de la personalidad del otro. Los cuerpos originales permanecen en el mismo estado en el que se encontraban en el momento de la fusión, por lo que al finalizar el conjuro se separarán, regresando a su forma y estado original. La muerte de la entidad conlleva que los personajes que la componen también perecen. La suma de la presencia de ambos sujetos no podrá ser superior a lo que determine el grado del conjuro. También es posible fusionar individuos con objetos o cosas, en cuyo caso el DJ puede otorgar las ventajas o habilidades que considere pertinentes.",
        "zeon": {
            "base": 140,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Presencia máxima 80 / RM 80.",
            "intermedio": "Presencia máxima 100 / RM 120.",
            "avanzado": "Presencia máxima 150 / RM 140.",
            "arcano": "Presencia máxima 200 / RM 180."
        },
        "mantenimiento": "15 / 20 / 25 / 30",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Crear Recuerdos",
        "nivel": 46,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Permite crear recuerdos nuevos en la mente de un sujeto, sin borrar necesariamente con ello los anteriores. La gran mayoría de las veces, salvo si se modifican memorias muy arraigadas, el personaje afectado se siente ligeramente confundido, pero está convencido de que todos sus recuerdos son reales. El brujo puede determinar qué información pretende inducir, sin importar su complejidad o duración. Para evitarlo, es necesario superar una RM o RP. Aunque no exige mantenimiento, el individuo afectado tendrá derecho a una nueva tirada si ve o hace algo que pueda llevarle a sospechar que ha sido engañado.",
        "zeon": {
            "base": 140,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "RM o RP 100.",
            "intermedio": "RM o RP 120.",
            "avanzado": "RM o RP 160.",
            "arcano": "RM o RP 200."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Recuperar",
        "nivel": 48,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Restaura completamente la condición física de un sujeto, sanando sus puntos de vida perdidos y haciendo desaparecer cualquier penalizador físico que tuviese, siempre que no sea por causa de miembros amputados o daños similares. Este hechizo no recupera puntos de Cansancio, ni deshace estados negativos provocados por medios sobrenaturales.",
        "zeon": {
            "base": 250,
            "intermedio": 300,
            "avanzado": 350,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "500 Puntos de vida.",
            "intermedio": "750 Puntos de vida.",
            "avanzado": "1.000 Puntos de vida.",
            "arcano": "1.500 Puntos de vida."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Adquirir Poderes",
        "nivel": 50,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Concede al hechicero, o a quien este elija, la capacidad de adquirir habilidades de seres sobrenaturales. A efectos de juego, otorga al personaje PD adicionales para obtener cualquiera de los Poderes detallados en el Capítulo 26, como si tuviera Gnosis 25. Estos cambios afectarán temporalmente a su forma física. Si, por ejemplo, obtiene Vuelo Natural, lo más lógico sería que estuviese dotado de unas enormes alas. Los beneficios de este conjuro no se superponen, y sólo puede afectar uno cada vez a un mismo sujeto.",
        "zeon": {
            "base": 100,
            "intermedio": 200,
            "avanzado": 300,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "100 PD.",
            "intermedio": "200 PD.",
            "avanzado": "300 PD.",
            "arcano": "400 PD / Gnosis 30."
        },
        "mantenimiento": "20 / 40 / 50 / 60"
    },
    {
        "nombre": "Crear Engendro",
        "nivel": 52,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea un ser mágico con apariencia de vida bajo el control absoluto del hechicero. El ente debe de ser desarrollado como un Ser Entre Mundos usando las reglas descritas en el Capítulo 26. La criatura tendrá un Gnosis 20. Sin importar el Grado en el que el conjuro sea lanzado, este sortilegio no permite crear criaturas de un nivel superior al del hechicero, ya que estas se basan en la presencia espiritual del mismo. Los engendros no tienen la capacidad de recibir un alma, por lo que no es posible darles vida independiente mediante el conjuro de Otorgar Alma, ni transmigrar un espíritu en ellos.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 250,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Nivel 2.",
            "intermedio": "Nivel 4.",
            "avanzado": "Nivel 8.",
            "arcano": "Nivel 12."
        },
        "mantenimiento": "10 / 15 / 25 / 50",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Aura de Protección",
        "nivel": 56,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Incrementa sobrenaturalmente todas las Resistencias de los individuos designados por el brujo en un área (RF, RV, RE, RM y RP). Los efectos de este conjuro no se superponen, y sólo se puede afectar con él una vez a cada sujeto.",
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
            "base": "+20 a las Resistencias / 100 metros de radio.",
            "intermedio": "+50 a las Resistencias / 500 metros de radio.",
            "avanzado": "+80 a las Resistencias / 1 kilómetro de radio.",
            "arcano": "+120 a las Resistencias / 10 kilómetros de radio."
        },
        "mantenimiento": "10 / 15 / 25 / 35"
    },
    {
        "nombre": "Estancar Esencia",
        "nivel": 58,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Como su nombre indica, el hechizo estanca el espíritu de un individuo en el estado en que se encuentra en el mismo momento de su lanzamiento. A partir de ese instante, el afectado no deberá realizar nuevos controles mágicos o psíquicos, y permanecerá inalterablemente en la condición espiritual en la que se hallase. De este modo, no podrá ser influido por estados de ningún tipo, tanto positivos como negativos. Si desea resistir el estancamiento, será necesario superar una RM. Lógicamente, alguien afectado por este sortilegio no puede realizar ningún control para librarse de él mientras se mantenga.",
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
            "arcano": 15
        },
        "grados": {
            "base": "RM 100.",
            "intermedio": "RM 120.",
            "avanzado": "RM 140.",
            "arcano": "RM 180."
        },
        "mantenimiento": "15 / 20 / 25 / 30"
    },
    {
        "nombre": "Escudo Perfecto",
        "nivel": 60,
        "accion": "Activa",
        "tipo": "Defensa",
        "efecto": "Forma una barrera de energía que protege frente a cualquier fuente de ataque. Si no es destruido al finalizar el asalto, recupera automáticamente todos sus puntos de vida perdidos.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
            "avanzado": 300,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "Aguanta 100 puntos de daño.",
            "intermedio": "Aguanta 250 puntos de daño.",
            "avanzado": "Aguanta 500 puntos de daño.",
            "arcano": "Aguanta 1.000 puntos de daño."
        },
        "mantenimiento": "15 / 20 / 30 / 40 Diario"
    },
    {
        "nombre": "Vitalidad",
        "nivel": 62,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "La magia crea un estado de vitalidad sobrenatural en un individuo, aumenta el valor máximo de sus puntos de vida mientras este hechizo se mantenga. Sus efectos no se superponen, y sólo se puede afectar con él una vez a cada sujeto. Los seres con acumulación de daño multiplican por cinco esta cantidad.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
            "avanzado": 250,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "+50 Puntos de Vida.",
            "intermedio": "+75 Puntos de Vida.",
            "avanzado": "+100 Puntos de Vida.",
            "arcano": "+150 Puntos de Vida."
        },
        "mantenimiento": "15 / 20 / 25 / 35 Diario",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Creación Completa",
        "nivel": 66,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Forma un objeto con una presencia determinada por el grado del conjuro. La creación debe de encontrarse en una ubicación lógica, dependiendo de su naturaleza. No es posible, por ejemplo, hacer aparecer una pequeña montaña, situarla en el aire y dejarla caer. Como limitación, la presencia del objeto creado no puede ser superior al doble de la presencia base del brujo.",
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
            "base": "Presencia máxima 50.",
            "intermedio": "Presencia máxima 80.",
            "avanzado": "Presencia máxima 120.",
            "arcano": "Presencia máxima 150."
        },
        "mantenimiento": "15 / 20 / 30 / 40 Diario"
    },
    {
        "nombre": "Potenciar Magia",
        "nivel": 68,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Potencia el poder de otro hechizo al que se le vincule. A términos de juego, otorga al sortilegio vinculado las siguientes ventajas: +20 a su RM. +50% de daño / resistencia al daño adicional (redondeado hacia arriba en grupos de 5). +20% a cualquier valor numérico de diferente naturaleza (Presencia, intensidades, distancia, radio de efecto, incrementos o elementos similares), salvo los valores relacionados con el Gnosis.",
        "zeon": {
            "base": 100,
            "intermedio": 200,
            "avanzado": 300,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "Afecta la los conjuros de Grado Base.",
            "intermedio": "Afecta la los conjuros de Grado Intermedio.",
            "avanzado": "Afecta la los conjuros de Grado Avanzado.",
            "arcano": "Afecta la los conjuros de Grado Arcano."
        },
        "mantenimiento": "10 / 20 / 30 / 40"
    },
    {
        "nombre": "Transmutar",
        "nivel": 70,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El brujo transforma un objeto inorgánico convirtiéndolo en otro distinto, pero de poder anímico similar. De este modo modifica algo en otra cosa que tenga un valor de presencia igual o inferior. Si el objeto es sobrenatural o especialmente poderoso, puede resistirse pasando una RM.",
        "zeon": {
            "base": 250,
            "intermedio": 350,
            "avanzado": 500,
            "arcano": 800
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "RM 120 / Presencia Máxima 50.",
            "intermedio": "RM 160 / Presencia Máxima 100.",
            "avanzado": "RM 220 / Presencia Máxima 150.",
            "arcano": "RM 260 / Presencia Máxima 200."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Metamorfismo",
        "nivel": 72,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El brujo transmuta la sustancia y forma de un cuerpo, convirtiéndolo en cualquier cosa que desee, siempre y cuando su presencia no se incremente por encima de la original. Así, por ejemplo, el hechicero puede convertir a una persona en lo que quiera (un ratón, una estatua de piedra…), mientras la presencia del individuo no sea menor que aquello en lo que se le transforma. Los seres vivos que son polimorfizados en cosas inorgánicas, seguirán viviendo bajo la nueva forma que se les ha dado, incluso sin poder moverse o respirar. Cuando el conjuro desparece, el individuo u objeto mutado recupera su apariencia original. Este hechizo no permite otorgar poderes o habilidades esenciales, salvo aquellos que poseen los seres vivos naturales con Gnosis 0. Para evitar ser polimorfizado, es necesario superar una RM. Sólo es posible repetir la Resistencia una vez al día.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
            "avanzado": 250,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "RM 100.",
            "intermedio": "RM 120.",
            "avanzado": "RM 160.",
            "arcano": "RM 200."
        },
        "mantenimiento": "10 / 10 / 15 / 20 Diario",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Recrear",
        "nivel": 76,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Manipulando la esencia de la materia y de las almas, el mago es capaz de restaurar cualquier pérdida o menoscabo que haya sufrido el individuo u objeto blanco de este conjuro. Puede elegir qué partes o elementos recrea, sin estar obligado a devolverlo completamente todo a su estado original. De este modo, si una persona tuerta y manca recibe un conjuro de Recrear, el brujo podría elegir entre devolverle su ojo, el brazo, o ambos a la vez. Lanzar este sortilegio sobre un individuo herido o una construcción destrozada hace desaparecer automáticamente cualquier daño o negativo (siempre y cuando el hechicero lo desee, por supuesto). Recrear también deshace los efectos de habilidades sobrenaturales que hayan mermado física o anímicamente a individuos o cosas; restaura recuerdos borrados, o PD perdidos. Este hechizo sólo tiene tres limitaciones. La primera es que afecta únicamente a carencias o pérdidas sufridas de modo artificial, y no una evolución natural o positiva. Así pues, no permite devolver a una persona a un estado anterior perjudicial o inferior. En segundo lugar, no tiene alcance sobre almas fallecidas o que hayan pasado previamente por el flujo, por lo que es incapaz de devolver la vida a los muertos. Finalmente, si el daño o destrucción ha sido provocado por un ser cuyo Gnosis es al menos 15 puntos superior al del lanzador, la máxima presencia afectable se reduce a la mitad.",
        "zeon": {
            "base": 300,
            "intermedio": 500,
            "avanzado": 750,
            "arcano": 1500
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "Presencia máxima 60.",
            "intermedio": "Presencia máxima 120.",
            "avanzado": "Presencia máxima 180.",
            "arcano": "Presencia máxima 240."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Crear Ser",
        "nivel": 78,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea una criatura con apariencia de vida bajo el control absoluto del hechicero. El ente será desarrollado como un Ser Entre Mundos con Gnosis 25. Dado que su existencia se encuentra directamente atada al alma del brujo, el número de seres que haya creado y dependan de él (ya sea empleando este hechizo o los de nivel 82 de las vías menores) limitará el nivel máximo de la entidad. De este modo, la criatura puede tener como tope el nivel de su creador, menos el número de entidades que el brujo haya concebido mágicamente y mantenga. Por ejemplo, si se crea un solo ser, este podrá tener como máximo un nivel menos que su señor; dos niveles menos en el caso de que sean dos; tres menos si mantiene a tres entidades... Si uno o varios seres tienen ya su nivel máximo y el brujo crea otro nuevo, los anteriores bajan un nivel inmediatamente. cómo su señora ha creado vida.",
        "zeon": {
            "base": 250,
            "intermedio": 400,
            "avanzado": 600,
            "arcano": 1000
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "Nivel 1.",
            "intermedio": "Nivel 5.",
            "avanzado": "Nivel 9.",
            "arcano": "Nivel 12."
        },
        "mantenimiento": "50 / 80 / 120 / 200 Diario"
    },
    {
        "nombre": "Quimera",
        "nivel": 80,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El hechicero, o quien este designe, deja de ser una criatura natural para convertirse en un Ser Entre Mundos con Gnosis 25, gozando de todas las ventajas y desventajas que ello supone. Adicionalmente, obtendrá PD extras que podrá utilizar para elegir entre Habilidades Esenciales y poderes de la Creación de Seres, descritas en el Capítulo 26. También le permite escoger PD en desventajas y penalizadores para obtener puntos adicionales. El exceso de PD aumenta el nivel del personaje. Este conjuro sólo funciona sobre criaturas naturales, por lo que no podrá ser lanzado sobre Seres Entre Mundos o Ánimas para incrementar sus habilidades. Todos los poderes y dones que se adquieran mediante este hechizo dependen directamente de la forma física del individuo, por lo que, si por algún método regresa a su estado anterior o transmigra su alma a otro cuerpo o forma, perderá automáticamente las ventajas recibidas.",
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
            "base": "+100 PD / hasta 100 PD opcionales en desventajas.",
            "intermedio": "+200 PD / hasta 100 PD opcionales en desventajas.",
            "avanzado": "+300 PD / hasta 200 PD opcionales en desventajas.",
            "arcano": "+400 PD / hasta 200 PD opcionales en desventajas."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Zona de Salvaguardia",
        "nivel": 82,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Crea una zona mágica en cuyo interior nada ni nadie puede causar ningún tipo de daño, ni por acción ni por omisión, a ninguna persona u objeto. De este modo, un individuo influido por este conjuro será incapaz de derribar una puerta a golpes, o de aplastar una simple cucaracha por error. Afecta automáticamente a cualquiera que se encuentre en el área del sortilegio, incluyendo al propio brujo. La zona encantada permanece en el lugar donde es lanzada, sin que el hechicero pueda reubicarla posteriormente. Para superar sus efectos es necesario superar una RM. Sólo es posible repetir la Resistencia una vez al día, incluso si se sale de ella y se vuelve a entrar.",
        "zeon": {
            "base": 350,
            "intermedio": 500,
            "avanzado": 800,
            "arcano": 1500
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 15,
            "avanzado": 17,
            "arcano": 18
        },
        "grados": {
            "base": "RM 140 / radio de 100 metros.",
            "intermedio": "RM 180 / radio de 500 metros.",
            "avanzado": "RM 220 / radio de 1 kilómetro.",
            "arcano": "RM 250 / radio de 5 kilómetros."
        },
        "mantenimiento": "35 / 50 / 80 / 150 Diario",
        "libreAcceso": "1-90"
    },
    {
        "nombre": "Mantenimiento",
        "nivel": 86,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Afecta a otro hechizo activo, fijándolo de un modo más duradero al mundo. A efectos de juego, añade puntos de Zeon al mantenimiento de un conjuro determinado. Ten en cuenta que esta cantidad no se suma a su potencial, sino que los emplea tan sólo para pagar su conservación.",
        "zeon": {
            "base": 250,
            "intermedio": 500,
            "avanzado": 900,
            "arcano": 1600
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "500 Puntos de Zeon.",
            "intermedio": "2.000 Puntos de Zeon.",
            "avanzado": "5.000 Puntos de Zeon.",
            "arcano": "10.000 Puntos de Zeon."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Otorgar Alma",
        "nivel": 88,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Mediante este hechizo, el brujo es capaz de concebir un alma completa, dándole el soplo de la vida a un objeto o cuerpo que sea capaz de contenerla. Si se la otorga a una criatura engendrada mágicamente, como las entidades desarrolladas con el conjuro de nivel 78 de esta vía o los de nivel 82 de las elementales, deja de ser necesario mantener el hechizo que la sustenta y el ente cobra existencia independiente. De este modo, rompe cualquier lazo con su creador, obteniendo libre albedrío como un Ser Entre Mundos más. No todas las almas creadas por este conjuro son capaces de penetrar en el cuerpo donde se las imbuye, ni se puede emplear sobre algo que ya posea un alma viva.",
        "zeon": {
            "base": 500,
            "intermedio": 800,
            "avanzado": 1200,
            "arcano": 2000
        },
        "inteligenciaRequerida": {
            "base": 13,
            "intermedio": 14,
            "avanzado": 15,
            "arcano": 16
        },
        "grados": {
            "base": "Presencia máxima 30.",
            "intermedio": "Presencia máxima 50.",
            "avanzado": "Presencia máxima 80.",
            "arcano": "Presencia máxima 100."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Creación Mayor",
        "nivel": 90,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga al hechicero el don de crear a su antojo, concediéndole puntos de presencia para repartir libremente entre varios objetos o construcciones. Puede elaborar cualquier cosa inanimada que desee, desde castillos a montañas, siempre y cuando la presencia de sus creaciones no sea superior a lo que permite el grado del conjuro.",
        "zeon": {
            "base": 400,
            "intermedio": 800,
            "avanzado": 1200,
            "arcano": 2000
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "500 Puntos de Presencia / Presencia máxima 100.",
            "intermedio": "1.000 Puntos de Presencia / Presencia máxima 120.",
            "avanzado": "2.000 Puntos de Presencia / Presencia máxima 140.",
            "arcano": "3.000 Puntos de Presencia / Presencia máxima 180."
        },
        "mantenimiento": "20 / 25 / 25 / 30 Diario"
    },
    {
        "nombre": "Magia eterna",
        "nivel": 92,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Como su nombre indica, afecta a otro conjuro activo, disminuyendo enormemente el coste de su mantenimiento o incluso haciéndolo desaparecer. Sus efectos varían dependiendo de si influye o no a un hechizo con mantenimiento diario. Si es diario, Magia Eterna lo estanca, haciendo que deje de ser necesario mantenerlo. El sortilegio sigue siendo controlado por su lanzador, aunque perdurará incluso después de que este haya muerto. Si el mantenimiento es por asalto, pasará a convertirse en un conjuro de tipo Diario. Magia Eterna sólo influye en hechizos que tengan un nivel de vía inferior a 80.",
        "zeon": {
            "base": 600,
            "intermedio": 1000,
            "avanzado": 2500,
            "arcano": 5000
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 14,
            "avanzado": 16,
            "arcano": 18
        },
        "grados": {
            "base": "Afecta a un conjuro de Grado Base.",
            "intermedio": "Afecta a un conjuro de Grado Base.",
            "avanzado": "Afecta a un conjuro de Grado Base.",
            "arcano": "Afecta a un conjuro de Grado Arcano."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "La Barrera",
        "nivel": 96,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este descomunal hechizo forma una brecha en la propia realidad, capaz de separar en dos partes el mundo. De este modo, levanta una barrera invisible que no permite a nadie alcanzar el otro lado, como si dividiese dos planos distintos independientes el uno del otro. La separación no es percibida de un modo natural, ni siquiera para aquellos que pueden ver magia. Es capaz de adoptar cualquier apariencia; desde ser completamente invisible hasta tener el sencillo aspecto de un muro de piedra. De todos modos, tome la forma que tome, no permite vislumbrar la realidad que se oculta detrás de ella. Habitualmente, nadie es consciente de su existencia, ni siquiera cuando tratan de atravesarla. Si alguien la intenta cruzar, sale por otro punto de ella, ignorando completamente lo que hay detrás (es posible incluso dar directamente la vuelta sin notarlo). El transporte no es automático, sino que poco a poco la realidad se va adaptando al lugar de salida de un modo casi imperceptible (dificultad en advertir de Inhumano). Como ejemplo, La Barrera podría utilizarse sobre una isla para separarla del resto del mundo. Ese lugar desaparecería de la vista, y cualquier barco que navegase por la zona no vería más que agua, siendo transportado de inmediato hasta otro lugar para proseguir inocentemente su viaje. La Barrera no tiene por qué ser absolutamente perfecta. El lanzador puede elegir dejar deliberadamente abiertos pasajes o aperturas, en una ambas direcciones, para cruzar a través de ella. Existen ciertos requisitos que permiten a alguien traspasarla. Para empezar, debe tratarse de una entidad con Gnosis superior a 25, y ser además consciente de su existencia y ubicación exacta. Si los cumple ambos, necesita realizar una RM para pasarla. Si fracasa, sólo puede repetir el control una vez al día. Puede afectar a un territorio extenderse en una línea. Una vez lanzada, permanece siempre en la misma ubicación.",
        "zeon": {
            "base": 800,
            "intermedio": 2500,
            "avanzado": 5000,
            "arcano": 10000
        },
        "inteligenciaRequerida": {
            "base": 15,
            "intermedio": 16,
            "avanzado": 17,
            "arcano": 19
        },
        "grados": {
            "base": "RM 120 / 100 kilómetros cuadrados o línea.",
            "intermedio": "RM 180 / 1.000 kilómetros cuadrados o línea.",
            "avanzado": "RM 240 / 100.000 kilómetros cuadrados o línea.",
            "arcano": "RM 300 / Sin límite de espacio."
        },
        "mantenimiento": "40 / 45 / 45 / 50 Diario",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "El Don de la Vida",
        "nivel": 98,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El lanzador es imbuido de la capacidad de crear una nueva forma de vida, el neonato de una raza que nunca antes había existido. La creación puede ser de cualquier clase (Natural, Espiritual o Entre Mundos), y estar atada a un elemento determinado. El nivel máximo de la criatura no podrá ser superior a la de su creador. Este último debe elegir el Gnosis de su obra, dándole como máximo diez puntos menos del que él mismo posee. Si es un Ser Natural con Gnosis inferior a 20, obtendrá además PD adicionales para elegir poderes y habilidades especiales raciales, empleando las reglas descritas en el Capítulo 26.",
        "zeon": {
            "base": 800,
            "intermedio": 2000,
            "avanzado": 4000,
            "arcano": 8000
        },
        "inteligenciaRequerida": {
            "base": 16,
            "intermedio": 17,
            "avanzado": 18,
            "arcano": 19
        },
        "grados": {
            "base": "Nivel 1 y 50 PD en el caso de que se trate de un ser natural.",
            "intermedio": "Nivel 6 y 100 PD en el caso de que se trate de un ser natural.",
            "avanzado": "Nivel 11 y 150 PD en el caso de que se trate de un ser natural.",
            "arcano": "Nivel 16 y 200 PD en el caso de que se trate de un ser natural."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Crear",
        "nivel": 100,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite a su lanzador obtener el poder absoluto de la creación, otorgándole la capacidad de concebir cualquier cosa que desee: continentes, océanos o incluso mundos enteros. A efectos de juego, otorga puntos de presencia para crear lo que este quiera, mientras no supere un límite de presencia determinada por el grado del conjuro. Este hechizo también puede imponer nuevas reglas a la realidad; alterar la gravedad, modificar la velocidad con la que pasa el tiempo… Cualquiera con un Gnosis inferior a la mitad del que posee el lanzador, se verá sometido a ellas.",
        "zeon": {
            "base": 1000,
            "intermedio": 3000,
            "avanzado": 6000,
            "arcano": 12000
        },
        "inteligenciaRequerida": {
            "base": 17,
            "intermedio": 18,
            "avanzado": 19,
            "arcano": 20
        },
        "grados": {
            "base": "1.000 Puntos de presencia / Presencia máxima 180 / 1 regla existencial.",
            "intermedio": "10.000 Puntos de presencia / Presencia máxima 220 / 5 reglas existenciales. o",
            "avanzado": "10.000 Puntos de presencia / Presencia máxima 260 / 10 reglas existenciales.",
            "arcano": "100.000 Puntos de presencia / Presencia máxima 320 / Cualquier número de reglas existenciales."
        },
        "mantenimiento": "No",
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

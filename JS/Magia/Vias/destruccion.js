// =====================================================
// VÍA: DESTRUCCIÓN
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaDestruccion = {
    id: "destruccion",
    nombre: "Destrucción",
    color: "#dc2626",
    hechizos: [
    {
        "nombre": "Fragilidad",
        "nivel": 2,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Altera la solidez de un objeto, disminuyendo su resistencia volviéndolo quebradizo. Cualquier cuerpo afectado perderá automáticamente su barrera de daño y, en el caso de que sea un arma o una armadura, reducirá su entereza.",
        "zeon": {
            "base": 30,
            "intermedio": 60,
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
            "base": "-2 a su entereza / Presencia máxima afectable 30.",
            "intermedio": "-4 a su entereza / Presencia máxima afectable 60.",
            "avanzado": "-8 a su entereza / Presencia máxima afectable 90.",
            "arcano": "-12 a su entereza / Presencia máxima afectable 120."
        },
        "mantenimiento": "5 / 10 / 15 / 15"
    },
    {
        "nombre": "Desmantelar",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Desmantela un objeto que esté formado por varias piezas. Solo afecta a cosas inanimadas.",
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
            "base": "Presencia máxima 20.",
            "intermedio": "Presencia máxima 40.",
            "avanzado": "Presencia máxima 60.",
            "arcano": "Presencia máxima 80."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Destruir Intensidades",
        "nivel": 8,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Destruye intensidades de uno de los tres tipos de energía existentes: frío, fuego o electricidad. Los seres formados por dichos elementos pierden 5 puntos de vida por cada intensidad disminuida si fallan la RM del conjuro.",
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
            "base": "1 intensidad / 100 RM.",
            "intermedio": "5 intensidades / 120 RM.",
            "avanzado": "10 intensidades / 140 RM.",
            "arcano": "15 intensidades / 160 RM."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Destrucción Menor",
        "nivel": 10,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Afecta a la esencia de un objeto sin vida, destruyéndolo completamente, siempre que su presencia no sea superior a lo permitido por el grado del conjuro.",
        "zeon": {
            "base": 50,
            "intermedio": 90,
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
            "base": "Presencia máxima 20.",
            "intermedio": "Presencia máxima 40.",
            "avanzado": "Presencia máxima 60.",
            "arcano": "Presencia máxima 80."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Esfera de Destrucción",
        "nivel": 12,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta descargas menores de energía mágica. El ataque se realiza en la TA de energía y tiene daño 30. Cada ataque puede ser dirigido a blancos diferentes, pero hay que determinar todos sus objetivos y distribución en el momento del lanzamiento.",
        "zeon": {
            "base": 30,
            "intermedio": 60,
            "avanzado": 100,
            "arcano": 150
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 13
        },
        "grados": {
            "base": "Realiza un ataque.",
            "intermedio": "Realiza tres ataques.",
            "avanzado": "Realiza cinco ataques.",
            "arcano": "Realiza siete ataques."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Incrementar Debilidad",
        "nivel": 16,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro encuentra los puntos débiles de un individuo y los acrecienta sobrenaturalmente. A efectos de juego, dobla cualquier penalizador que el personaje tenga por alguna vulnerabilidad. Por ejemplo, un elemental débil ante la luz recibiría el cuádruple de daño contra ataques luminosos en lugar de sólo el doble, mientras que un personaje vulnerable a los venenos reduciría su RV a una cuarta parte en lugar de a la mitad. Una vez afectado por la RM, el blanco del conjuro sólo podrá repetir la tirada cada vez que su debilidad le afecte.",
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
            "base": "120 RM.",
            "intermedio": "140 RM.",
            "avanzado": "160 RM.",
            "arcano": "200 RM."
        },
        "mantenimiento": "5 / 10 / 15 / 15 Diario"
    },
    {
        "nombre": "Destrucción de Magia",
        "nivel": 18,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Destruye un sortilegio hasta cierto valor de Zeon. Dado que es un conjuro pasivo, puede emplearse para anular cualquier hechizo que se lance en el mismo asalto en el que se usa la Destrucción de Magia.",
        "zeon": {
            "base": 60,
            "intermedio": 150,
            "avanzado": 300,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 16
        },
        "grados": {
            "base": "Valor zeónico 50.",
            "intermedio": "Valor zeónico 120.",
            "avanzado": "Valor zeónico 200.",
            "arcano": "Valor zeónico 350."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Agravar Daño",
        "nivel": 20,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Aumenta el daño base que produzca una fuente de ataque de cualquier clase: física o sobrenatural. Así pues, si un luchador acomete con un arma con daño base 60, empleando este conjuro en grado base el hechicero podrá aumentarlo hasta 90. A pesar de ser un sortilegio pasivo, debe de ser ejecutado antes de que se lancen los dados, para calcular el ataque y la defensa de los oponentes.",
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
            "base": "+30 al daño.",
            "intermedio": "+50 al daño.",
            "avanzado": "+90 al daño.",
            "arcano": "+120 al daño."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Destrucción de Matrices",
        "nivel": 22,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Este hechizo deshace las energías matriciales de un poder psíquico. Dado que es un conjuro pasivo, puede emplearse para anular cualquier poder psíquico que se utilice en el mismo asalto en que se usa la destrucción de Matrices.",
        "zeon": {
            "base": 80,
            "intermedio": 140,
            "avanzado": 240,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 16
        },
        "grados": {
            "base": "Dificultad Media (80).",
            "intermedio": "Dificultad Muy Difícil (140).",
            "avanzado": "Dificultad Casi Imposible (240).",
            "arcano": "Dificultad Inhumano (320)."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Herir",
        "nivel": 26,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Herir afecta a la condición física de un individuo, menoscabando su estado de salud en ese momento. Produce heridas y daños equivalentes a un porcentaje de sus puntos de vida actuales, no de su total. Para resistir este hechizo, debe de superase una RM.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 180,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "20% de Puntos de Vida / 120 RM.",
            "intermedio": "40% de Puntos de Vida / 140 RM.",
            "avanzado": "60% de Puntos de Vida / 160 RM.",
            "arcano": "80% de Puntos de Vida / 200 RM."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Destrucción de Ki",
        "nivel": 28,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "La magia que desencadena este conjuro se introduce en el alma de un individuo, deshaciendo la reserva de Ki que posea. El afectado deberá superar una RM o perderá una cantidad de puntos de Ki equivalente al nivel de fracaso.",
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
            "base": "140 RM.",
            "intermedio": "160 RM.",
            "avanzado": "180 RM.",
            "arcano": "220 RM."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Producir Daño",
        "nivel": 30,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Mediante el uso de este hechizo, el brujo produce automáticamente una herida en el cuerpo de un individuo. Si no supera una RM, el personaje afectado recibirá directamente daño. Las criaturas con acumulación de daño aumentan esta cantidad por su múltiplo de acumulación.",
        "zeon": {
            "base": 80,
            "intermedio": 120,
            "avanzado": 180,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "50 puntos de daño / 120 RM.",
            "intermedio": "100 puntos de daño / 140 RM.",
            "avanzado": "180 puntos de daño / 160 RM.",
            "arcano": "250 puntos de daño / 200 RM."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Destrucción de Sentidos",
        "nivel": 32,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El brujo arrebata los sentidos de un individuo que no supere una RM contra 100. El mago es quien decide de cuáles despojar.",
        "zeon": {
            "base": 100,
            "intermedio": 140,
            "avanzado": 200,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "100 RM.",
            "intermedio": "120 RM.",
            "avanzado": "140 RM.",
            "arcano": "180 RM."
        },
        "mantenimiento": "5 / 10 / 15 / 15",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Descarga",
        "nivel": 36,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta una descarga mística. El ataque se realiza en la TA de energía.",
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
            "base": "Daño 100.",
            "intermedio": "Daño 150.",
            "avanzado": "Daño 200.",
            "arcano": "Daño 250."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Desatar Vínculos",
        "nivel": 38,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Mediante este conjuro, el brujo deshace los lazos que permiten a los convocadores tener cualquier tipo de dominio sobre sus criaturas. Puede utilizarse indistintamente sobre el ser o su controlador, pero en cualquier caso, será el creador del vínculo quien deba realizar el control de Resistencia. Si se lanza sobre la criatura, sólo afectará al lazo que la ata a ella, mientras que si se emplea sobre el convocador, el hechizo romperá un vínculo de control o atadura adicional por cada 10 puntos por los que este no supere una RM. Los familiares pueden aplicar un bonificador de +40 a sus RM.",
        "zeon": {
            "base": 100,
            "intermedio": 200,
            "avanzado": 300,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM 120.",
            "intermedio": "RM 140.",
            "avanzado": "RM 160.",
            "arcano": "RM 200."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Destruir Resistencias",
        "nivel": 40,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El afectado por este conjuro disminuirá todas sus Resistencias, en una cantidad equivalente a la cifra por la que no supere la RM.",
        "zeon": {
            "base": 80,
            "intermedio": 160,
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
            "base": "RM 120.",
            "intermedio": "RM 160.",
            "avanzado": "RM 200.",
            "arcano": "RM 240."
        },
        "mantenimiento": "10 / 20 / 25 / 30"
    },
    {
        "nombre": "Deshacer Estados",
        "nivel": 42,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Deshace inmediatamente cualquiera de los estados descritos en el Capítulo 14, u otros equivalentes. Podrá afectar a tantos individuos como se desee, siempre y cuando la suma de sus presencias no superen el valor determinado por el grado del conjuro. Este hechizo no puede deshacer los penalizadores a la acción provocados por un crítico. Si desea resistirse, es necesario superar una RM.",
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
            "base": "RM 120 / Presencia máxima 120.",
            "intermedio": "RM 140 / Presencia máxima 200.",
            "avanzado": "RM 160 / Presencia máxima 300.",
            "arcano": "RM 200 / Presencia máxima 400."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Cúpula de Destrucción",
        "nivel": 46,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Desencadena una cúpula de energía sobrenatural, que estalla en un área. El ataque se realiza en la TA de energía y no es posible seleccionar blancos en su interior.",
        "zeon": {
            "base": 100,
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
            "base": "10 metros de radio / Daño 80.",
            "intermedio": "50 metros de radio / Daño 120.",
            "avanzado": "100 metros de radio / Daño 160.",
            "arcano": "150 metros de radio / Daño 200."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Área de Decaimiento",
        "nivel": 48,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este conjuro encanta una zona fija dentro de la cual toda forma de vida comienza a pudrirse y deshacerse a un ritmo acelerado. Cualquier ser que se encuentre en el interior del área de decaimiento perderá una décima parte de sus puntos de vida totales si no es capaz de superar la RM. Cada asalto que se permanezca en el interior del área deberá realizarse un nuevo control, sin importar que en el anterior se haya o no superado la Resistencia. La condición para ser afectado por el conjuro es, simplemente, encontrarse en el interior del área.",
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
            "base": "10 metros de radio / RM 100.",
            "intermedio": "30 metros de radio / RM 120.",
            "avanzado": "60 metros de radio / RM 160.",
            "arcano": "100 metros de radio / RM 200."
        },
        "mantenimiento": "15 / 20 / 25 / 30"
    },
    {
        "nombre": "Aura de Destrucción",
        "nivel": 50,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Encanta un objeto o lugar, creando a su alrededor un aura de magia que destruye todo lo que se pone en contacto con ella. Cualquiera que la toque deberá superar una RM, o perderá una cantidad de puntos de vida equivalente a su nivel de fracaso. La máxima presencia de objeto afectado, así como la superficie afectada (en caso de tratarse de un lugar) no puede ser superior a lo que determine el grado del conjuro. Los efectos de este hechizo afectan incluso a su propio lanzador.",
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
            "arcano": 15
        },
        "grados": {
            "base": "RM 80 / Presencia máxima 60 / 1 metro de diámetro.",
            "intermedio": "RM 100 / Presencia máxima 90 / 5 metros de diámetro.",
            "avanzado": "RM 120 / Presencia máxima 120 / 15 metros de diámetro.",
            "arcano": "RM 150 / Presencia máxima 150 / 25 metros de diámetro."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario"
    },
    {
        "nombre": "Destruir Recuerdos",
        "nivel": 52,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Afecta a los recuerdos de un individuo, haciéndole olvidar todo lo que el hechicero desee. Este conjuro no influye en las habilidades de un personaje, sólo a su memoria consciente.",
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
            "base": "RM o RP 100.",
            "intermedio": "RM o RP 120.",
            "avanzado": "RM o RP 160.",
            "arcano": "RM o RP 200."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Bloquear Aprendizaje",
        "nivel": 56,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este hechizo estanca la capacidad de aprendizaje de un individuo, impidiéndole completamente evolucionar o adquirir nuevos conocimientos. Mientras un personaje se encuentre bajo los efectos de este conjuro, no podrá adquirir puntos de experiencia ni desarrollar ninguna de sus habilidades o poderes. Para evitar los efectos de este conjuro, deberá superarse una RM. Sólo es posible repetir la Resistencia una vez al día.",
        "zeon": {
            "base": 80,
            "intermedio": 180,
            "avanzado": 300,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 7,
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
        "mantenimiento": "15 / 20 / 25 / 30 Diario"
    },
    {
        "nombre": "Negar",
        "nivel": 58,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El hechicero veta una acción concreta de un sujeto, impidiéndole completamente que pueda ni siquiera tratar de llevarla a cabo. Este conjuro sólo permite negar acciones activas. Para resistirse a él, es necesario superar una RM, aunque en el caso de que la acción negada sea muy amplia, como no atacar o no moverse, el afectado puede aplicar un bono a su RM entre +10 y +30.",
        "zeon": {
            "base": 100,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM 120.",
            "intermedio": "RM 160.",
            "avanzado": "RM 200.",
            "arcano": "RM 240."
        },
        "mantenimiento": "10 / 15 / 25 / 30"
    },
    {
        "nombre": "Destruir Poderes",
        "nivel": 60,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Si un sujeto es afectado por este conjuro, pierde automáticamente la capacidad de utilizar todas sus habilidades sobrenaturales. De este modo, niega los poderes mágicos, psíquicos o dominios del Ki que posea. Los seres místicos también pierden todos sus poderes (aunque no sus habilidades naturales). Para evitar los efectos de este sortilegio, deberá superarse una RM.",
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
            "base": "RM 120.",
            "intermedio": "RM 140.",
            "avanzado": "RM 180.",
            "arcano": "RM 220."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario"
    },
    {
        "nombre": "Descarga Mayor",
        "nivel": 62,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta una poderosa descarga mística. El ataque se realiza en la TA de energía.",
        "zeon": {
            "base": 150,
            "intermedio": 300,
            "avanzado": 450,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "Daño 150.",
            "intermedio": "Daño 300.",
            "avanzado": "Daño 450.",
            "arcano": "Daño 600."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Destruir la Voluntad",
        "nivel": 66,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro afecta a un área dentro de la cual, todo individuo que no supere una RM perderá automáticamente la capacidad de tomar decisiones. Mientras una persona esté influida por este sortilegio, no podrá emprender ninguna acción activa, ni siquiera moverse, salvo caso de necesidad instintiva.",
        "zeon": {
            "base": 160,
            "intermedio": 200,
            "avanzado": 240,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "RM 120 / 10 metros de radio.",
            "intermedio": "RM 140 / 25 metros de radio.",
            "avanzado": "RM 160 / 50 metros de radio.",
            "arcano": "RM 180 / 100 metros de radio."
        },
        "mantenimiento": "20 / 20 / 25 / 30"
    },
    {
        "nombre": "Zona de Debilidad",
        "nivel": 68,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Con este hechizo, el brujo debilita las fibras de la propia realidad dentro de un área determinada, haciendo que todo lo que se encuentre en ella se vuelva frágil y quebradizo. De este modo, cualquier daño que se produzca en su interior se dobla automáticamente, y los personajes sufren críticos como si todo su cuerpo fuera un punto vulnerable. Las estructuras y edificaciones perderán automáticamente su barrera de daño, y los objetos con entereza, como espadas y armaduras, sufrirán un penalizador de -5. Permanece fijo en el lugar donde es conjurado. Cualquier ser vivo u objeto de poder puede evitar sus efectos superando una RM. La condición para ser influido por la Zona de Debilidad es estar simplemente en su interior, y únicamente es posible librarse de ella saliendo del área, ya que sólo permite repetir el control de Resistencia una vez al día.",
        "zeon": {
            "base": 200,
            "intermedio": 300,
            "avanzado": 400,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "25 metros de radio / RM 140.",
            "intermedio": "100 metros de radio / RM 160.",
            "avanzado": "250 metros de radio / RM 180.",
            "arcano": "500 metros de radio / RM 200."
        },
        "mantenimiento": "20 / 30 / 40 / 50 Diario"
    },
    {
        "nombre": "Esencia de Destrucción",
        "nivel": 70,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El brujo altera la materia de un cuerpo, transformándola en una forma de pura energía destructiva, capaz de devorar todo lo que se ponga en contacto con ella. Mientras se encuentre en este estado, sólo podrá ser dañado por ataques capaces de afectar a cuerpos sobrenaturales, y cualquiera que se ponga en contacto con él deberá superar una RM contra el doble de su presencia, o sufrir los efectos descritos por el grado del conjuro.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
            "avanzado": 250,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Daño equivalente al nivel de fracaso.",
            "intermedio": "Daño y negativo a toda acción equivalente al nivel de fracaso.",
            "avanzado": "Daño equivalente al doble del nivel de fracaso / Negativo a toda acción equivalente al nivel de fracaso.",
            "arcano": "Daño y negativo a toda acción equivalente al doble del nivel de fracaso."
        },
        "mantenimiento": "15 / 20 / 25 / 30"
    },
    {
        "nombre": "Muerte",
        "nivel": 72,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El brujo es capaz de producir la muerte de un ser vivo, separando el alma de su cuerpo. El poder de este conjuro es tan grande que puede incluso matar a seres espirituales o a criaturas nigrománticas, convirtiéndolos en simples almas muertas o destruyéndolos completamente. Para resistir los efectos de este conjuro, es necesario superar una RM o RF.",
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
            "base": "RM o RF 120.",
            "intermedio": "RM o RF 140.",
            "avanzado": "RM o RF 160.",
            "arcano": "RM o RF 180."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Zona Devoradora",
        "nivel": 76,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Como un vacío de muerte, la Zona Devoradora se extiende desgarrando la esencia de todo lo que encuentra a su paso y consumiéndola lentamente. Poco a poco, las cosas que alcanza este conjuro van debilitándose hasta deshacerse, ya sean objetos materiales o seres vivos. Cada día de permanencia en su interior, exigirá realizar una RM o RF, o perderá temporalmente cinco puntos de su presencia base. Si esta disminuye hasta cero, se descompondrá dejando escasos rastros. En el caso de los seres vivos, estos recibirán adicionalmente un penalizador a toda acción, equivalente doble de sus puntos de presencia perdidos. El daño espiritual se repone un ritmo de cinco puntos por día, una vez que se está fuera de su influencia. Permanece fija en el lugar donde es lanzada.",
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
            "arcano": 17
        },
        "grados": {
            "base": "RM o RF 140 y 500 metros de radio.",
            "intermedio": "RM o RF 195 y 6000 metros de radio.",
            "avanzado": "RM o RF 240 y 10500 metros de radio.",
            "arcano": "RM o RF 270 y 13500 metros de radio."
        },
        "mantenimiento": "25 / 40 / 45 / 55 Diario"
    },
    {
        "nombre": "Destruir Capacidades",
        "nivel": 78,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro destruye parte de las habilidades o poderes de un individuo, arrebatándoselas para siempre. El brujo puede rebajar libremente PD del personaje afectado, eligiendo en qué capacidades o campos arrancárselos. Podría, por ejemplo, rebajar 30 PD de su habilidad de ataque y los 20 restantes de una habilidad secundaria. También es posible utilizar este hechizo para destruir habilidades sobrenaturales de criaturas místicas, tomando como referencia el valor en PD descrito en el Capítulo 26. Destruir Capacidades permite también arrebatar las ventajas elegidas con Puntos de Creación, a un coste de 100 PD por punto.",
        "zeon": {
            "base": 150,
            "intermedio": 250,
            "avanzado": 350,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "-50 PD, RM 120.",
            "intermedio": "-100 PD, RM 160.",
            "avanzado": "-150 PD, RM 200.",
            "arcano": "-200 PD, RM 240."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Sesgar la Existencia",
        "nivel": 80,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Como si enarbolara una cuchilla de vacío, el brujo es capaz de cortar la misma realidad, aniquilando todo aquello que encuentra en su camino. De este modo, cualquier cosa que entre en contacto con el conjuro será destruido física y anímicamente, sin dejar ningún rastro de haber existido. El hechizo permite cortar una línea o focalizar todo su poder en un solo punto, destruyendo completamente cuanto toque y no sea capaz de superar la Resistencia requerida. A pesar de ser un conjuro anímico, el corte en la realidad es perfectamente visible, incluso para aquellos que no sean capaces de ver la magia. Las cosas o individuos sesgados por este sortilegio son destruidos completamente, en lugar de regresar al flujo de almas. Si se enfoca en un solo punto, la RM aumenta en +20.",
        "zeon": {
            "base": 350,
            "intermedio": 500,
            "avanzado": 600,
            "arcano": 800
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 14,
            "avanzado": 16,
            "arcano": 18
        },
        "grados": {
            "base": "RM 120 / 10 metros de línea.",
            "intermedio": "RM 160 / 100 metros de línea.",
            "avanzado": "RM 200 / 250 metros de línea.",
            "arcano": "RM 240 / 1 kilómetro metros de línea."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Lluvia de Destrucción",
        "nivel": 82,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Desencadena una tempestad de descargas selectivas en área que destrozan únicamente los blancos designados por el brujo. Este conjuro ataca en Energía. Adicionalmente, si consigue impactar a un blanco y provocarle daño, este deberá superar una RM o sufrir una perdida de puntos de vida equivalente al nivel de fracaso.",
        "zeon": {
            "base": 250,
            "intermedio": 350,
            "avanzado": 450,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "Daño 200 / RM 140 / 50 metros de radio.",
            "intermedio": "Daño 250 / RM 180 / 150 metros de radio.",
            "avanzado": "Daño 300 / RM 220 / 500 metros de radio.",
            "arcano": "Daño 400 / RM 260 / 1 kilómetro de radio."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-90"
    },
    {
        "nombre": "Destrucción de Zeon",
        "nivel": 86,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Afectando directamente a la propia esencia de la magia, este conjuro es capaz de disipar el poder de otro sortilegio activo, disminuyendo automáticamente su valor zeónico y de grado. Si el hechizo mermado baja por debajo del coste de su grado base, desaparece.",
        "zeon": {
            "base": 200,
            "intermedio": 400,
            "avanzado": 600,
            "arcano": 700
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "-50 al Zeon del Conjuro / Sólo afecta a conjuros de grado base.",
            "intermedio": "-150 al Zeon del Conjuro/ Afecta a conjuros hasta grado intermedio.",
            "avanzado": "-250 al Zeon del Conjuro/ Afecta a conjuros hasta grado avanzado.",
            "arcano": "-350 al Zeon del Conjuro/ Afecta a conjuros hasta grado arcano."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Arrojar de los Cielos",
        "nivel": 88,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Despojándolo de su propia esencia, este hechizo arrebata la presencia divina de un ente, transformándolo temporalmente en un ser terrenal. Aplicado a reglas de juego, la criatura afectada por el conjuro disminuirá el valor de su Gnosis. Esta reducción afecta a los poderes o habilidades del ente que dependan de dicha capacidad, por lo que no podrá utilizarlas mientras se mantenga su pérdida. No es posible repetir la Resistencia de ningún modo mientras el conjuro siga activo.",
        "zeon": {
            "base": 300,
            "intermedio": 600,
            "avanzado": 1000,
            "arcano": 2000
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 14,
            "avanzado": 16,
            "arcano": 18
        },
        "grados": {
            "base": "-5 a su Gnosis, RM 120.",
            "intermedio": "-10 a su Gnosis, RM 160.",
            "avanzado": "-15 a su Gnosis, RM 200.",
            "arcano": "-20 a su Gnosis, RM 260."
        },
        "mantenimiento": "15 / 30 / 50 / 100 Diario"
    },
    {
        "nombre": "Vacío",
        "nivel": 90,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este hechizo forma una esfera de absoluto vacío que, como un agujero negro, absorbe hacia su interior toda materia física y espiritual que haya a su alrededor, deshaciéndola completamente. La cúpula debe de ser ubicada en un espacio abierto, y esta permanecerá fija en ese lugar hasta que desaparezca. Una vez creada, comienza a succionar cualquier cosa que se encuentre a su alrededor. El poder de atracción del conjuro emplea el equivalente a una Fuerza 14, y cualquiera que fracase en un control enfrentado de características contra ella será atraído hacia el interior a un ritmo de 10 metros por cada punto de diferencia. El Vacío es tan poderoso que, todo lo que se ponga directamente en contacto con la esfera, irá debilitándose hasta desaparecer. Cada asalto que se permanezca en su interior es necesario realizar dos Resistencias distintas; una RM o perder una cantidad de puntos de Zeon equivalente al doble del nivel de fracaso, y otra de RF o perderlos en Puntos de Vida. Cuando un personaje se haya quedado sin Zeon, empezará a bajar un punto permanente de su característica de Poder por cada 100 de magia que debiese perder. Si su característica disminuye hasta cero, o muere por pérdida de puntos de vida, todo su ser será engullido por la nada. Aunque el hechicero no es influido por la fuerza de succión de la cúpula, sufrirá los efectos del vacío si se pone en contacto con su núcleo.",
        "zeon": {
            "base": 250,
            "intermedio": 350,
            "avanzado": 500,
            "arcano": 800
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 14,
            "avanzado": 16,
            "arcano": 18
        },
        "grados": {
            "base": "5 metros de radio / 50 metros de succión / 120 de RM y RF.",
            "intermedio": "15 metros de radio / 500 metros de succión / 160 de RM y RF.",
            "avanzado": "25 metros de radio / 1 kilómetro de succión / 200 de RM y RF.",
            "arcano": "50 metros de radio / 3 kilómetros de succión / 240 de RM y RF."
        },
        "mantenimiento": "25 / 40 / 45 / 55"
    },
    {
        "nombre": "Destrucción Mayor",
        "nivel": 92,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga la capacidad de destruir parte del mundo material a gran escala, desintegrando incluso grandes construcciones, como ciudades enteras, o amplias zonas de terreno. Puede afectar automáticamente a cualquier número de cosas inorgánicas, siempre que no supere la presencia determinada por el grado del conjuro.",
        "zeon": {
            "base": 350,
            "intermedio": 600,
            "avanzado": 900,
            "arcano": 1500
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 14,
            "avanzado": 16,
            "arcano": 18
        },
        "grados": {
            "base": "Presencia máxima 100.",
            "intermedio": "Presencia máxima 160.",
            "avanzado": "Presencia máxima 200.",
            "arcano": "Presencia máxima 240."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Destrucción de Almas",
        "nivel": 96,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El poder que desencadena la destrucción de almas arrasa la materia espiritual que se encuentra alrededor del lanzador, acabando con la existencia de todo aquel que no sea capaz de superar sus efectos. Cualquier individuo que esté dentro del área donde el conjuro se desencadena, deberá realizar automáticamente una RM, o su alma quedará completamente descompuesta y morirá de inmediato.",
        "zeon": {
            "base": 500,
            "intermedio": 800,
            "avanzado": 1500,
            "arcano": 2500
        },
        "inteligenciaRequerida": {
            "base": 13,
            "intermedio": 15,
            "avanzado": 17,
            "arcano": 19
        },
        "grados": {
            "base": "RM 100 / 5 kilómetros de radio.",
            "intermedio": "RM 140 /50 kilómetros de radio.",
            "avanzado": "RM 180 / 250 kilómetros de radio.",
            "arcano": "RM 220 / 1.000 kilómetros de radio."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Caos",
        "nivel": 98,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Caos es un conjuro que destruye los pilares de la propia realidad. Al desencadenarlo, el lanzador desmorona el orden en el mundo, alterando el equilibrio de todas las cosas de un modo completamente imprevisto. En el interior de una zona de caos nada funciona como debería y todos los acontecimientos son tergiversados de un modo innatural. Por poner algunos ejemplos, Caos podría afectar a la gravedad, haciendo que a veces las cosas fuesen ligeras como plumas y otras pesadas como el plomo, o bien podría afectar al clima, causando ventiscas heladas a unos escasos metros de donde se desencadenan vendavales y olas de calor. Pero este hechizo no afecta únicamente a elementos naturales, sino que influencia a sentimientos y a la reacción de las personas, provocando que parejas se odien a muerte o enemigos irreconciliables decidan hacer las paces. Incluso puede afectar al mismo paso del tiempo, haciendo que fluya a mayor o menor velocidad (aunque no permite viajar hacia el pasado). Es decir, Caos es capaz de afectar a prácticamente cualquier matiz de la realidad imaginable. El lanzador puede designar qué aspecto de la existencia en concreto quiere alterar, o por el contrario, transformarla toda completamente. De todos modos, este conjuro no le otorga control sobre lo que está cambiando, por lo que el resultado y devenir de los acontecimientos serán, como el nombre del conjuro indica, completamente caóticos. No existe resistencia posible, y afecta a todos aquellos seres cuyo Gnosis no sea suficientemente elevado. La única excepción son individuos cuyo Gnosis sea 20 puntos superior a su Natura.",
        "zeon": {
            "base": 700,
            "intermedio": 1200,
            "avanzado": 2000,
            "arcano": 5000
        },
        "inteligenciaRequerida": {
            "base": 14,
            "intermedio": 16,
            "avanzado": 18,
            "arcano": 20
        },
        "grados": {
            "base": "100 kilómetros de radio / Afecta hasta Gnosis 10.",
            "intermedio": "1.000 kilómetros de radio / Afecta hasta Gnosis 20.",
            "avanzado": "10.000 kilómetros de radio / Afecta hasta Gnosis 30.",
            "arcano": "Afecta toda la creación / Afecta hasta Gnosis 40."
        },
        "mantenimiento": "70 / 80 / 90 / 100 Diario"
    },
    {
        "nombre": "Descrear",
        "nivel": 100,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este conjuro permite al hechicero designar un aspecto de la existencia, tan complejo como una ciudad o una raza, o tan simple como un individuo en concreto, y hacer sencillamente que deje de existir. El elemento descreado será borrado de la realidad con todas las consecuencias que esto implica, de modo que nunca hubiera existido. Nadie que lo conociese lo recordaría, y todos los sucesos en los que él pudo intervenir serán modificados como si no hubiera estado presente, incluso devolviendo la vida a aquellos que hayan perecido por su causa (siempre y cuando sus almas no hayan sido destruidas). Únicamente las entidades con Gnosis mayor de 40 o 20 puntos por encima de su Natura serán conscientes del cambio. Tan sólo es posible realizar un control de RM para evitar este efecto, incluso si se afecta a multitud de blancos o individuos. Para saber quién debe realizar el control, se designará a aquel que posea la mayor Resistencia en ese momento en concreto. No se pueden descrear elementos del pasado, sino cosas que estén presentes en la actualidad.",
        "zeon": {
            "base": 1000,
            "intermedio": 2500,
            "avanzado": 5000,
            "arcano": 10000
        },
        "inteligenciaRequerida": {
            "base": 17,
            "intermedio": 18,
            "avanzado": 19,
            "arcano": 20
        },
        "grados": {
            "base": "RM 140.",
            "intermedio": "RM 160.",
            "avanzado": "RM 200.",
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

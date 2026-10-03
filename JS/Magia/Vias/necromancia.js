// =====================================================
// VÍA: NIGROMANCIA
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaNigromancia = {
    id: "necromancia",
    nombre: "Nigromancia",
    color: "#374151",
    hechizos: [
    {
        "nombre": "Sentir la Muerte",
        "nivel": 2,
        "accion": "Activa",
        "tipo": "Detección",
        "efecto": "El nigromante detecta, automáticamente, cualquier fallecimiento que ocurra en un radio a su alrededor. Este hechizo es también capaz de revelar criaturas no muertas, aunque estas tendrán derecho a una RM para evitar ser encontradas.",
        "zeon": {
            "base": 30,
            "intermedio": 60,
            "avanzado": 90,
            "arcano": 120
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "100 metros de radio / RM 120.",
            "intermedio": "250 metros de radio / RM 140.",
            "avanzado": "500 metros de radio / RM 160.",
            "arcano": "1 kilómetro de radio / RM 180."
        },
        "mantenimiento": "5 / 10 / 10 / 15",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Más Allá",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite ver ciertas clases de seres espirituales invisibles al ojo humano.",
        "zeon": {
            "base": 30,
            "intermedio": 60,
            "avanzado": 90,
            "arcano": 120
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "Permite ver seres espectrales.",
            "intermedio": "Permite ver seres espectrales y almas que esperan El Llamamiento.",
            "avanzado": "Permite ver toda clase de ser espiritual.",
            "arcano": "Permite ver toda clase de ser espiritual así como cualquier cosa de carácter sobrenatural que haya en el ambiente."
        },
        "mantenimiento": "5 / 10 / 10 / 15"
    },
    {
        "nombre": "Dominar a los Carroñeros",
        "nivel": 8,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Otorga al brujo un control absoluto sobre cualquier alimaña carroñera. La consideración de alimaña carroñera es la de toda criatura de naturaleza inferior, es decir, con presencia 20 o inferior, que se alimente generalmente de los muertos. Cuervos, gusanos y otros muchos insectos encajan perfectamente dentro de esta descripción.",
        "zeon": {
            "base": 40,
            "intermedio": 120,
            "avanzado": 200,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "10 metros de radio.",
            "intermedio": "150 metros de radio.",
            "avanzado": "500 metros de radio.",
            "arcano": "2 kilómetros de radio."
        },
        "mantenimiento": "5 / 10 / 10 / 15"
    },
    {
        "nombre": "Escudo Espectral",
        "nivel": 10,
        "accion": "Pasiva",
        "tipo": "Escudo",
        "efecto": "Forma un escudo de energía nigromántica, capaz de detener cualquier asalto anímico que afecte a las Resistencias sobrenaturales del personaje, aunque no así de acometidas de carácter físico o ataques que produzcan daños. Permite detener efectos místicos, siempre que estos no obliguen a lanzar una Resistencia contra más de lo que determine el grado del conjuro.",
        "zeon": {
            "base": 40,
            "intermedio": 60,
            "avanzado": 80,
            "arcano": 100
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 11,
            "arcano": 13
        },
        "grados": {
            "base": "Detiene Resistencias de hasta 140.",
            "intermedio": "Detiene Resistencias de hasta 180.",
            "avanzado": "Detiene Resistencias de hasta 220.",
            "arcano": "Detiene Resistencias de hasta 260."
        },
        "mantenimiento": "5 / 5 / 10 / 15"
    },
    {
        "nombre": "Drenar Vida",
        "nivel": 12,
        "accion": "Pasiva",
        "tipo": "Anímico",
        "efecto": "El nigromante puede absorber una parte de la vida de otra persona, dañándola gravemente en el proceso a la vez que él se fortalece. Cualquier individuo que sea afectado por este conjuro deberá realizar un control de RM o perderá una cantidad de puntos de vida equivalente al nivel de fracaso, los cuales servirán al brujo para curar sus propias heridas. Los seres con acumulación de daño pierden cinco veces esa cantidad, pero el brujo, sólo recupera una quinta parte de lo que arrebata (es decir, si un ser con acumulación de daño falla el control por 20 puntos, perdería 100 PV, aunque el nigromante solo absorbería 20).",
        "zeon": {
            "base": 50,
            "intermedio": 140,
            "avanzado": 230,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "RM 100.",
            "intermedio": "RM 140.",
            "avanzado": "RM 180.",
            "arcano": "RM 240."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Detección Nigromántica",
        "nivel": 16,
        "accion": "Activa",
        "tipo": "Detección",
        "efecto": "Permite al nigromante detectar la presencia de cualquier criatura viva o muerta que se encuentre cerca de él. Para resistirse a sus efectos, hay que superar una RM.",
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
            "base": "RM 120 / 20 metros de radio.",
            "intermedio": "RM 160 / 50 metros de radio.",
            "avanzado": "RM 200 / 100 metros de radio.",
            "arcano": "RM 240 / 150 metros de radio."
        },
        "mantenimiento": "5 / 10 / 10 / 15"
    },
    {
        "nombre": "Hablar con los Muertos",
        "nivel": 18,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este hechizo confiere al nigromante la capacidad de comunicarse con almas y espíritus de seres muertos que se encuentren a su alrededor, incluso si no es consciente de su posición exacta. El nivel del espíritu es el que determina si este puede o no escucharle.",
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
            "base": "Nivel 4.",
            "intermedio": "Nivel 8.",
            "avanzado": "Nivel 12.",
            "arcano": "Nivel 16."
        },
        "mantenimiento": "5 / 5 / 5 / 5"
    },
    {
        "nombre": "Paralización Nigromántica",
        "nivel": 20,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro congela la esencia sobrenatural de las criaturas no muertas, conteniéndolas y haciendo que sean incapaces de moverse. Cualquier ser nigromántico, en un radio respecto al brujo, queda automáticamente sometido a paralización completa si no es capaz de superar un control de RM.",
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
            "base": "10 metros de radio / RM 120.",
            "intermedio": "25 metros de radio / RM 140.",
            "avanzado": "50 metros de radio / RM 160.",
            "arcano": "100 metros de radio / RM 180."
        },
        "mantenimiento": "10 / 10 / 15 / 15"
    },
    {
        "nombre": "Necromitud",
        "nivel": 22,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Hace recuperar puntos de vida a una criatura nigromántica. No tiene ningún efecto sobre seres vivos.",
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
            "base": "50 puntos de vida.",
            "intermedio": "100 puntos de vida.",
            "avanzado": "150 puntos de vida.",
            "arcano": "250 puntos de vida."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Descarga de Muerte",
        "nivel": 26,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta una potente descarga nigromántica. El ataque se realiza en la TA de energía.",
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
            "base": "Daño 80.",
            "intermedio": "Daño 100.",
            "avanzado": "Daño 140.",
            "arcano": "Daño 180."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Levantar Cadáveres",
        "nivel": 28,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Mediante la manipulación de energías nigrománticas, el brujo puede animar cadáveres y convertirlos en zombis o esqueletos bajo su control. Los muertos no conservan las habilidades especiales o conocimientos que tenían en vida, dado que son sólo remedos de carne y hueso de su anterior condición. Aun así, mantienen sus capacidades básicas, como armas naturales y algunas de sus características físicas. El poder y resistencia de la criatura varía dependiendo de su cuerpo. Por ejemplo, el cadáver de un oso sería considerablemente más peligroso que el de un ser humano. Como referencia, el Director de Juego tiene a su disposición las fichas de zombis básicos que aparecen en el bestiario. Puede animar entre una o varias criaturas hasta un valor de presencia, siempre que ninguno de los no muertos levantados supere el nivel que determina el grado del conjuro.",
        "zeon": {
            "base": 80,
            "intermedio": 180,
            "avanzado": 300,
            "arcano": 450
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "100 puntos de presencia (Nivel máximo 0).",
            "intermedio": "300 puntos de presencia (Nivel máximo 1).",
            "avanzado": "600 puntos de presencia (Nivel máximo 2).",
            "arcano": "1.000 puntos de presencia (Nivel máximo 3)."
        },
        "mantenimiento": "10 / 20 / 25 / 30 Diario"
    },
    {
        "nombre": "Cuerpo Muerto",
        "nivel": 30,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este hechizo detiene temporalmente las funciones corporales de un individuo sin matarlo, aunque sigue siendo capaz de moverse y actuar con completa normalidad. Mientras permanezca activo el conjuro, el personaje será extremadamente resistente a los efectos del daño y a sus consecuencias, por lo que cualquier penalizador físico queda reducido a la mitad. Adicionalmente, permite mantenerse consciente y sin negativos (salvo los causados por críticos) en el estado de entre la vida y la muerte. Cualquiera que inspeccione el cuerpo será incapaz de descubrir que no se trata de un verdadero cadáver.",
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
            "base": "Personajes de Nivel 3.",
            "intermedio": "Personajes de Nivel 6.",
            "avanzado": "Personajes de Nivel 12.",
            "arcano": "Personajes de Nivel 18."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario"
    },
    {
        "nombre": "Drenar Magia",
        "nivel": 32,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Permite drenar la energía mágica de un individuo u objeto y otorgársela al nigromante. Quienquiera que sea afectado por el conjuro, deberá realizar un control de RM, o perderá una cantidad de puntos de Zeon equivalente al doble del nivel de fracaso, que será inmediatamente absorbida por el brujo.",
        "zeon": {
            "base": 60,
            "intermedio": 140,
            "avanzado": 220,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "RM 140.",
            "intermedio": "RM 180.",
            "avanzado": "RM 220.",
            "arcano": "RM 260."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Destruir No Muertos",
        "nivel": 36,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro destruye completamente la esencia de los no muertos. Cualquier ser nigromántico que sea su blanco deberá superar un control de RM o sufrir un daño equivalente al doble de su nivel de fracaso. Si tiene acumulación, sufre diez veces dicha cantidad.",
        "zeon": {
            "base": 80,
            "intermedio": 160,
            "avanzado": 240,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "RM 140.",
            "intermedio": "RM 180.",
            "avanzado": "RM 220.",
            "arcano": "RM 260."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Drenar Características",
        "nivel": 38,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El nigromante roba las capacidades de otros individuos, aumentando en el proceso las suyas propias. El lanzador debe decidir cuál es la característica que quiere drenar, antes de ejecutar el conjuro. El blanco designado perderá un punto de ese atributo por cada 10 por los que no supere un control de RM. Si el valor natural de las características drenadas es superior a las del nigromante, por cada punto que absorba aumenta en uno la suya. Si es inferior, necesita drenar tres para sumar uno. Mientras se mantenga el conjuro, el brujo conserva los atributos incrementados. Las características perdidas se recuperan a un ritmo de un punto por hora, una vez que el nigromante deshace el hechizo.",
        "zeon": {
            "base": 60,
            "intermedio": 150,
            "avanzado": 240,
            "arcano": 320
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "RM 140.",
            "intermedio": "RM 180.",
            "avanzado": "RM 220.",
            "arcano": "RM 260."
        },
        "mantenimiento": "5 / 10 / 15 / 15"
    },
    {
        "nombre": "Controlar a los Muertos",
        "nivel": 40,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El nigromante obtiene el control absoluto de cualquier no muerto que se encuentre en un radio en el momento de lanzar el conjuro. El dominio sobre los no muertos permanece activo mientras el hechizo se mantenga, pero no afecta a otras criaturas nigrománticas que le se acerquen con posterioridad. Los no muertos pueden evitar el control, superando una RM. Las entidades sólo tienen derecho a repetir la tirada si reciben una orden que vaya en contra de su naturaleza, por lo que las criaturas sin voluntad, como los cadáveres animados, nunca pueden liberarse.",
        "zeon": {
            "base": 100,
            "intermedio": 140,
            "avanzado": 180,
            "arcano": 250
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "20 metros de radio / RM 120.",
            "intermedio": "50 metros de radio / RM 140.",
            "avanzado": "100 metros de radio / RM 160.",
            "arcano": "150 metros de radio / RM 180."
        },
        "mantenimiento": "10 / 15 / 20 / 25 Diario"
    },
    {
        "nombre": "Marchitar la Vida",
        "nivel": 42,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Este conjuro crea un área de energía nigromántica que mata de inmediato cualquier forma de vida inferior que se encuentre alrededor del brujo, como pequeños animales y plantas. Todo ser vivo con una presencia 20 o inferior se pudre o marchita a gran velocidad sin derecho a ningún control de Resistencia.",
        "zeon": {
            "base": 100,
            "intermedio": 140,
            "avanzado": 180,
            "arcano": 220
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "10 metros de radio.",
            "intermedio": "20 metros de radio.",
            "avanzado": "30 metros de radio.",
            "arcano": "50 metros de radio."
        },
        "mantenimiento": "10 / 15 / 20 / 25 Diario",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Escudo Nigromántico",
        "nivel": 46,
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Empleando la esencia de almas muertas, forma un escudo de energía que protege frente a cualquier clase de ataque.",
        "zeon": {
            "base": 80,
            "intermedio": 160,
            "avanzado": 240,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "1.000 puntos de Resistencia.",
            "intermedio": "2.000 puntos de Resistencia.",
            "avanzado": "3.500 puntos de Resistencia.",
            "arcano": "5.000 puntos de Resistencia."
        },
        "mantenimiento": "5 / 10 / 15 / 15"
    },
    {
        "nombre": "Dominar la Vida",
        "nivel": 48,
        "accion": "Pasiva",
        "tipo": "Anímico",
        "efecto": "Permite al brujo esclavizar el alma de un ser vivo, sometiéndolo a un control similar al que tiene sobre sus criaturas no muertas. El personaje podrá resistirse superando un control de RM. El individuo tendrá derecho a una nueva Resistencia por día, y en cada ocasión en la que las órdenes recibidas vayan completamente en contra de su comportamiento.",
        "zeon": {
            "base": 140,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "RM 100.",
            "intermedio": "RM 120.",
            "avanzado": "RM 140.",
            "arcano": "RM 160."
        },
        "mantenimiento": "30 / 40 / 50 / 60 Diario"
    },
    {
        "nombre": "Estigma Vampírico",
        "nivel": 50,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El personaje sobre el que se lance este conjuro obtiene la capacidad de absorber, automáticamente, un porcentaje del daño que produzca personalmente a sus adversarios. Funciona tanto con ataques físicos como con conjuros de daño directo o poderes equivalentes. En el caso de los seres con acumulación, cantidad absorbida se divide por el múltiplo de acumulación de la criatura.",
        "zeon": {
            "base": 140,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "20% de absorción.",
            "intermedio": "40% de absorción.",
            "avanzado": "60% de absorción.",
            "arcano": "100% de absorción."
        },
        "mantenimiento": "15 / 20 / 25 / 30"
    },
    {
        "nombre": "Forma Espectral",
        "nivel": 52,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El cuerpo físico del nigromante se convierte en una crepitante masa espectral, que daña la esencia de cualquier ser vivo que se ponga en contacto con ella.",
        "zeon": {
            "base": 100,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "El brujo es inmaterial y sólo puede ser dañado por ataques que afecten energía.",
            "intermedio": "Como en base, pero aquel que toque al brujo siente un frío de muerte que le obliga a realizar un control de RF o RM contra el doble de la presencia de este y, si falla la tirada, sufrirá un negativo a toda acción y una pérdida de puntos de vida equivalente a la mitad de su nivel de fracaso.",
            "avanzado": "Como en Avanzado, pero el brujo obtiene una cantidad de puntos de vida equivalentes a la cantidad que pierde cualquier persona con que entre en contacto.",
            "arcano": "Como en avanzado, pero si el objetivo falla la RM o RF por más de 40 puntos muere irremisiblemente."
        },
        "mantenimiento": "10 / 20 / 25 / 30",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Modificación Nigromántica",
        "nivel": 56,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "La entidad no muerta que sea blanco de este hechizo se alimenta de su energía, adquiriendo temporalmente nuevos poderes y habilidades. A términos de juego, un no muerto obtiene PD adicionales para obtener cualquiera de los Poderes Especiales detallados en el Capítulo 26, como si se tratase de una criatura con Gnosis 25. No puede usarse sobre seres vivos. Los efectos de este hechizo no se superponen, y sólo puede afectar uno de ellos a la vez a un mismo sujeto.",
        "zeon": {
            "base": 100,
            "intermedio": 200,
            "avanzado": 300,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "100 PD.",
            "intermedio": "200 PD.",
            "avanzado": "300 PD.",
            "arcano": "400 PD."
        },
        "mantenimiento": "10 / 20 / 30 / 40"
    },
    {
        "nombre": "Llamar a los Muertos",
        "nivel": 58,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro atrae hasta el nigromante las almas de personas fallecidas o de espectros. El brujo es quien elige a qué espíritu llama, aunque en el caso de que este no pueda responderle, es posible que se presente alguna otra alma en su lugar. Llamar a los Muertos sólo funciona con espíritus que permanecen atados al mundo o con criaturas espectrales, por lo que no tiene poder sobre almas que ya hayan transmigrado.",
        "zeon": {
            "base": 100,
            "intermedio": 140,
            "avanzado": 160,
            "arcano": 180
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Nivel máximo 3.",
            "intermedio": "Nivel máximo 6.",
            "avanzado": "Nivel máximo 9.",
            "arcano": "Nivel máximo 12."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Levantar Espectros",
        "nivel": 60,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Dominando las almas de los muertos, el nigromante obtiene la capacidad de pervertir sus esencias y convertirlas en espectros a su servicio. Estos fantasmas conservan una pequeña parte de sus capacidades en vida, aunque pierden la gran mayoría de sus antiguos poderes y atributos en el proceso. Un espectro, alzado por este hechizo reduce a la mitad el nivel que tenía mientras vivía (redondeado hacia arriba), aunque utiliza las reglas generales de los espíritus no la muertos obteniendo 100 PD adicionales que el brujo empleará para darle los poderes que considere apropiados como un ser con Gnosis 20. Este hechizo sólo funciona sobre almas recién fallecidas y que aún esperen el llamamiento. Puede afectar a varios espectros a la vez, siempre y cuando la suma de sus presencias no supere lo que determine el grado del conjuro.",
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
            "base": "Nivel máximo del espíritu 1 / Suma total de presencias 100.",
            "intermedio": "Nivel máximo del espíritu 2 / Suma total de presencias 160.",
            "avanzado": "Nivel máximo del espíritu 4 / Suma total de presencias 220.",
            "arcano": "Nivel máximo del espíritu 6 / Suma total de presencias 280."
        },
        "mantenimiento": "20 / 25 / 30 / 35 Diario"
    },
    {
        "nombre": "Fuerza Vital",
        "nivel": 62,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este hechizo absorbe la fuerza vital de un individuo y se la transmite a quien designe el nigromante. El personaje que sea su blanco debe superar un control de RM o perderá un punto de Constitución y de Poder por cada 10 por el que lo falle. Si el lanzador lo desea, el objetivo puede también envejecer tantos años como nivel de fracaso. Los puntos absorbidos permiten al nigromante o, en su defecto, al sujeto que los reciba, recuperar atributos perdidos hasta sus niveles iniciales o rejuvenecer. El personaje al que se le arranque su fuerza vital no la recupera nunca, salvo mediante habilidades sobrenaturales que lo permitan.",
        "zeon": {
            "base": 180,
            "intermedio": 240,
            "avanzado": 300,
            "arcano": 360
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "RM 100.",
            "intermedio": "RM 130.",
            "avanzado": "RM 160.",
            "arcano": "RM 190."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Matar",
        "nivel": 66,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro detiene las funciones vitales de una persona, produciéndole de inmediato la muerte. Este hechizo sólo funciona sobre seres vivos, por lo que resulta virtualmente inútil contra espíritus o Seres Entre Mundos inanimados. Cualquier afectado deberá superar un control de RM o RF si quiere sobrevivir.",
        "zeon": {
            "base": 100,
            "intermedio": 140,
            "avanzado": 180,
            "arcano": 220
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "RM o RF 80.",
            "intermedio": "RM o RF 100.",
            "avanzado": "RM o RF 120.",
            "arcano": "RM o RF 140."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Descarga de Almas",
        "nivel": 68,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta una descarga de energía mágica compuesta por almas marchitas. Este conjuro ataca en Energía. Sólo afecta a seres con alma, por lo que ignora los cuerpos físicos sin vida, como paredes o golems. Dada la naturaleza de la descarga, únicamente aquellos con la capacidad de ver espíritus son capaces de percibirla.",
        "zeon": {
            "base": 140,
            "intermedio": 260,
            "avanzado": 380,
            "arcano": 500
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 11,
            "avanzado": 13,
            "arcano": 16
        },
        "grados": {
            "base": "Daño 100.",
            "intermedio": "Daño 200.",
            "avanzado": "Daño 300.",
            "arcano": "Daño 400."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Quimera Nigromántica",
        "nivel": 70,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al mago componer una criatura no muerta sometida a su control. El ente será desarrollado como un Ser Entre Mundos con Gnosis 25. Sin embargo, el nigromante no puede crear a la criatura de la nada, por lo que para desarrollarla debe reunir partes de diversos cadáveres con los que darle forma. Para otorgarle cualquier poder o habilidad esencial que desee, primero ha de conseguir cuerpos de seres que los tuvieran. Si, por ejemplo, quiere dotarle del poder Vuelo Natural, antes debería conseguir el cadáver de una criatura que tuviera esa capacidad exacta. Puesto que la existencia de la quimera se encuentra directamente atada al alma del nigromante, para calcular su nivel máximo se emplean las mismas reglas que en el conjuro Crear Ser, de la vía de Creación.",
        "zeon": {
            "base": 250,
            "intermedio": 360,
            "avanzado": 500,
            "arcano": 800
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "Nivel 2.",
            "intermedio": "Nivel 6.",
            "avanzado": "Nivel 10.",
            "arcano": "Nivel 13."
        },
        "mantenimiento": "50 / 80 / 100 / 160 Diario"
    },
    {
        "nombre": "Perversión de Vida",
        "nivel": 72,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro corrompe la esencia de un ser vivo y detiene sus funciones físicas, transformándolo de inmediato en un ente no muerto. El personaje afectado mantendrá las mismas características y habilidades que tenía en vida, aunque en su estado de cadáver animado conseguirá, naturalmente, la ventaja de exención física. Para evitar la transformación, es necesario superar una RM o RF.",
        "zeon": {
            "base": 180,
            "intermedio": 240,
            "avanzado": 300,
            "arcano": 360
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "RM o RF 100.",
            "intermedio": "RM o RF 140.",
            "avanzado": "RM o RF 180.",
            "arcano": "RM o RF 220."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Vasallaje",
        "nivel": 76,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Ata eternamente la esencia de una criatura no muerta a la del nigromante, convirtiendo automáticamente al brujo en su superior jerárquico, y haciendo que la existencia de la entidad dependa de este. Aunque este conjuro no otorga realmente al nigromante control sobre la criatura, la vida del vasallo está unida a la de su maestro, conllevando que si el “amo” es destruido, también perezca el “súbdito”. Un no muerto puede resistirse al vasallaje superando una RM o RF, pero una vez fallada la unión no puede romperse de ningún modo.",
        "zeon": {
            "base": 250,
            "intermedio": 360,
            "avanzado": 450,
            "arcano": 540
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "RM o RF 100.",
            "intermedio": "RM o RF 140.",
            "avanzado": "RM o RF 180.",
            "arcano": "RM o RF 220."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Drenar Almas",
        "nivel": 78,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "El nigromante arranca el alma de otra persona, alimentándose de su esencia y poder. Cuanto más fuerte sea el espíritu que absorbe, mayor será la energía recibida. El individuo que sea blanco de este conjuro debe superar un control de RM o perderá una cantidad de presencia equivalente a la mitad de su nivel de fracaso. Cada cinco puntos perdidos resta también un nivel y, con ello, cualquier capacidad o poder que dependiera de este. Si su presencia llega a cero, su alma ha sido completamente consumida y muere. Por cada 10 puntos de presencia que absorba, el nigromante incrementa temporalmente una de sus características en +1, u obtiene 10 PD para adquirir cualquier poder o habilidad esencial de monstruos como un ser con Gnosis 30. El nigromante pierde cada día un punto de característica o 20 de los PD incrementados.",
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
            "base": "RM 120.",
            "intermedio": "RM 140.",
            "avanzado": "RM 160.",
            "arcano": "RM 180."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Superar la Muerte",
        "nivel": 80,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro permite a su objetivo vencer a la propia muerte convirtiéndose en un no muerto sin ataduras, una entidad capaz de sostenerse en el mundo con su mero poder. El sortilegio debe lanzarse en el instante en el que el personaje fallece o, en su defecto, escasos segundos antes (ya que por sí mismo no es capaz de producirle la muerte). El brujo es libre de decidir si se convierte en un Ser Entre Mundos o en un Espíritu, aunque en un caso u otro, tendrá Gnosis 25. El conjuro le confiere PD adicionales para elegir entre cualquier habilidad esencial o poder descrito en el Capítulo 26; aunque si opta por ser un espectro, deberá invertir 100 PD en el proceso. También puede escoger PD en desventajas y penalizadores, con los que obtendrá puntos adicionales. El exceso de PD aumenta su nivel del modo descrito en el hechizo Quimera de la vía de Creación. Superar la muerte sólo funciona sobre seres vivos en el momento de morir, por lo que no tiene efecto sobre criaturas de origen nigromántico.",
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
        "nombre": "Alzamiento",
        "nivel": 82,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite alzar un cadáver conservando todos y cada uno de los poderes, conocimientos y habilidades que tenía en vida. Desgraciadamente, se trata sólo de una sombra de quien fue, un ser no muerto carente de verdadera alma. Permite afectar a cualquier individuo o criatura fallecida cuyo cadáver esté al alcance del brujo, siempre y cuando su nivel no fuese mayor de lo que determine el coste del conjuro. A veces, si ha pasado mucho tiempo y el cuerpo se encuentra en mal estado, sus habilidades físicas pueden verse perjudicadas. Alguien que haya sido levantado gracias a este hechizo no puede volver a ser alzado. Ten en cuenta que el cadáver, a pesar de ser un no muerto, no está controlado por el nigromante.",
        "zeon": {
            "base": 350,
            "intermedio": 500,
            "avanzado": 800,
            "arcano": 1200
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Nivel máximo 3.",
            "intermedio": "Nivel máximo 6.",
            "avanzado": "Nivel máximo 9.",
            "arcano": "Nivel máximo 12."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-90"
    },
    {
        "nombre": "Pozo de vida",
        "nivel": 86,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Como un vacío que se alimenta del daño que sufren los demás, el nigromante absorbe la mitad de los puntos de vida perdidos por los seres vivos que se encuentren a su alrededor, sin posible resistencia alguna. Estos PV le sirven para restituir cualquier clase de herida que haya sufrido.",
        "zeon": {
            "base": 300,
            "intermedio": 400,
            "avanzado": 500,
            "arcano": 600
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "50 metros de radio.",
            "intermedio": "250 metros de radio.",
            "avanzado": "500 metros de radio.",
            "arcano": "1 kilómetro de radio."
        },
        "mantenimiento": "15 / 20 / 25 / 30"
    },
    {
        "nombre": "Tierra Maldita",
        "nivel": 88,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Corrompiendo un pequeño fragmento del mundo, el brujo encanta una zona de terreno, haciendo que cualquier ser que fallezca en su interior se levante al instante como un no muerto bajo su control. Los difuntos se convierten automáticamente en cadáveres animados, aunque aquellos seres naturales cuyo Gnosis sea al menos 5 puntos superior a su natura, se levanta como un espectro (como si hubiera sido afectado por el conjuro de nivel 60 de esta vía). Las criaturas sólo pueden actuar mientras se encuentren en el interior de la tierra maldita. Si salen de ella, la magia que los sustenta desaparece. El conjuro afecta una zona de terreno que permanece estática en el lugar donde fue lanzada.",
        "zeon": {
            "base": 350,
            "intermedio": 600,
            "avanzado": 900,
            "arcano": 1500
        },
        "inteligenciaRequerida": {
            "base": 9,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "1 kilómetro de radio.",
            "intermedio": "10 kilómetro de radio.",
            "avanzado": "100 kilómetro de radio.",
            "arcano": "1.000 kilómetro de radio."
        },
        "mantenimiento": "35 / 60 / 90 / 150"
    },
    {
        "nombre": "Sostenimiento",
        "nivel": 90,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Afecta a la esencia de una o varias criaturas no muertas que se hallen sostenidas por un conjuro, permitiéndoles seguir existiendo incluso después de que el nigromante deje de pagar su mantenimiento. Si, por ejemplo, el hechicero utiliza sostenimiento sobre un zombi animado por un sortilegio de levantar cadáveres, el ser seguirá activo una vez que el hechizo haya finalizado. Afecta tantos no muertos como desee el nigromante, siempre y cuando la suma de sus presencias no sea superior a lo que determine el grado del conjuro.",
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
            "base": "Hasta 60 de presencia.",
            "intermedio": "Hasta 120 de presencia.",
            "avanzado": "Hasta 240 de presencia.",
            "arcano": "Hasta 480 de presencia."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Materia Prima",
        "nivel": 92,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este hechizo genera las energías corruptas que utiliza la magia nigromántica para alzar cadáveres y espectros, permitiendo al lanzador crear de la nada materia prima con la que levantar cadáveres posteriormente. El conjuro forma material nigromántico equivalente a cierta cantidad de cuerpos humanos muertos o, en su defecto, a una cantidad menor de otras criaturas más poderosas.",
        "zeon": {
            "base": 350,
            "intermedio": 500,
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
            "base": "1.000 cuerpos humanos.",
            "intermedio": "10.000 cuerpos humanos.",
            "avanzado": "100.000 cuerpos humanos.",
            "arcano": "1.000.000 de cuerpos humanos."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Señor de los Muertos",
        "nivel": 96,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El Señor de los Muertos extiende su presencia por el mundo, obteniendo el control absoluto de todas las criaturas no muertas que se encuentren a su alrededor. Cualquiera de estos seres que esté dentro del área del conjuro deberá superar una RM o será completamente controlado por el lanzador. Si pasa la Resistencia, ya no tiene que volver a realizarla. Los afectados tienen derecho a un nuevo control únicamente si alteran sus Resistencias.",
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
            "base": "100 kilómetros de radio / 140 RM.",
            "intermedio": "1.000 kilómetros de radio / 160 RM.",
            "avanzado": "10.000 kilómetros de radio / 180 RM.",
            "arcano": "100.000 kilómetros de radio / 200 RM."
        },
        "mantenimiento": "30 / 60 / 100 / 200 Diario"
    },
    {
        "nombre": "Regresar de Entre los Muertos",
        "nivel": 98,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este hechizo devuelve al mundo el espíritu de una criatura difunta, incluso si ha regresado al flujo de almas o su esencia ha sido dispersada. El personaje regresa como una criatura no muerta, pero conservando intactas su alma y su esencia. Si el cuerpo del fallecido aún sigue existiendo, regresará a él. En caso contrario, también puede encarnar uno nuevo o convertirse en un espectro inmaterial. Como en otros hechizos similares, el tiempo que haya transcurrido entre la muerte y su regreso condicionan la efectividad del conjuro, tal y como indican los diferentes grados de poder. No es posible resucitar un alma que ya se haya reencarnado o que fuese descreada o destruida.",
        "zeon": {
            "base": 400,
            "intermedio": 800,
            "avanzado": 1600,
            "arcano": 3200
        },
        "inteligenciaRequerida": {
            "base": 16,
            "intermedio": 17,
            "avanzado": 18,
            "arcano": 19
        },
        "grados": {
            "base": "Nivel 4 máximo / Un mes como máximo desde su muerte.",
            "intermedio": "Nivel 8 máximo / Un año como máximo desde su muerte.",
            "avanzado": "Nivel 12 máximo / Una década como máximo desde su muerte.",
            "arcano": "Nivel 16 máximo / Un siglo como máximo desde su muerte."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "El Despertar",
        "nivel": 100,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "El Despertar es el más poderoso de los conjuros nigrománticos. a Corrompiendo una parte del alma del mundo, el lanzador extiende su sombra por toda la existencia, devolviendo la vida a los muertos y sometiéndolos a su dominio. El Despertar no tiene un radio de acción determinado; afecta por igual a cualquier difunto cuyo nivel no fuese superior a lo que determine el grado del conjuro. Si sus espíritus esperan aún el llamamiento, se levantan como espectros o, en caso contrario, como cadáveres animados. Aquellos seres cuyo gnosis sea al menos 15 puntos superior a su Natura, regresa como no muerto con sus facultades plenas.",
        "zeon": {
            "base": 900,
            "intermedio": 2000,
            "avanzado": 3500,
            "arcano": 5000
        },
        "inteligenciaRequerida": {
            "base": 17,
            "intermedio": 18,
            "avanzado": 19,
            "arcano": 20
        },
        "grados": {
            "base": "Nivel 4.",
            "intermedio": "Nivel 8.",
            "avanzado": "Nivel 12.",
            "arcano": "Nivel 15l."
        },
        "mantenimiento": "45 / 100 / 175 / 250 Diario"
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

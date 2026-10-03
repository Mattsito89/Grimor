// =====================================================
// VÍA: LUZ
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaLuz = {
    id: "luz",
    nombre: "Luz",
    color: "#facc15",
    hechizos: [
    {
        "nombre": "Crear Luz",
        "nivel": 2,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea una fuente de luz en un punto u objeto determinado por el hechicero.",
        "zeon": {
            "base": 20,
            "intermedio": 50,
            "avanzado": 100,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "5 metros de zona iluminada.",
            "intermedio": "25 metros de zona iluminada.",
            "avanzado": "100 metros de zona iluminada.",
            "arcano": "500 metros de zona iluminada."
        },
        "mantenimiento": "5 / 5 / 10 / 15 Diario",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Imbuir Calma",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Tranquiliza a los individuos perturbados por un sentimiento de temor u odio que se encuentren alrededor del lanzador. Hace desaparecer cualquier estado de Miedo, Terror o Ira en el que estén sumidos, incluso si es de origen sobrenatural. De cualquier modo, no eliminará acciones violentas si estas se realizan a sangre fría o premeditadamente.",
        "zeon": {
            "base": 40,
            "intermedio": 80,
            "avanzado": 120,
            "arcano": 160
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 11,
            "arcano": 14
        },
        "grados": {
            "base": "RM o RP 80 / 10 metros de radio.",
            "intermedio": "RM o RP 100 / 25 metros de radio.",
            "avanzado": "RM o RP 120 / 50 metros de radio.",
            "arcano": "RM o RP 150 / 100 metros de radio."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Flash Cegador",
        "nivel": 8,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Causa un repentino flash de luz en un radio alrededor del brujo que ciega a cualquiera que lo mire durante tantos asaltos como número de decenas por las que no supere la RF del conjuro. No es posible designar blancos específicos en el interior del flash, afectando automáticamente a todos por igual salvo al lanzador. Si alguien se está cubriendo los ojos o prevé de algún modo el resplandor, podrá aplicar un +40 a su RF.",
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
            "base": "10 metros de radio / 140 RF.",
            "intermedio": "25 metros de radio / 140 RF.",
            "avanzado": "50 metros de radio / 140 RF.",
            "arcano": "100 metros de radio / 160 RF."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Escudo de Luz",
        "nivel": 10,
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Forma una barrera de energía, que protege frente a cualquier fuente de ataque. El escudo sólo puede ser dañado por ataques de naturaleza sobrenatural, aunque los impactos basados en oscuridad causarán doble daño sobre él.",
        "zeon": {
            "base": 50,
            "intermedio": 120,
            "avanzado": 180,
            "arcano": 250
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 14
        },
        "grados": {
            "base": "El escudo tiene 300 puntos de Resistencia.",
            "intermedio": "El escudo tiene 1.000 puntos de Resistencia.",
            "avanzado": "El escudo tiene 1.800 puntos de Resistencia.",
            "arcano": "El escudo tiene 3.000 puntos de Resistencia."
        },
        "mantenimiento": "5 / 15 / 20 / 25"
    },
    {
        "nombre": "Percibir",
        "nivel": 12,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro aumenta la percepción del hechicero acrecentando sus habilidades secundarias de Advertir y Buscar, así como su Valoración mágica en el caso de que pretenda medir o detectar el potencial mágico de algo o alguien (nunca para ocultarlo) así como para analizar la naturaleza de otros conjuros.",
        "zeon": {
            "base": 50,
            "intermedio": 150,
            "avanzado": 200,
            "arcano": 250
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "+50 Advertir, Buscar y Valoración mágica.",
            "intermedio": "+150 Advertir, Buscar y Valoración mágica.",
            "avanzado": "+200 Advertir, Buscar y Valoración mágica.",
            "arcano": "+250 Advertir, Buscar y Valoración mágica."
        },
        "mantenimiento": "5 / 15 / 20 / 25",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Armadura de Luz",
        "nivel": 16,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Forma una coraza mística que otorga TA a su usuario contra todo tipo de ataque, en especial contra los basados en energía. Aunque cuenta como una armadura, no se aplican penalizadores al turno por emplear capas de protección adicionales.",
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
            "base": "TA 2 en Energía y TA 1 en el resto.",
            "intermedio": "TA 5 en Energía y TA 2 en el resto.",
            "avanzado": "TA 8 en Energía y TA 4 en el resto.",
            "arcano": "TA 12 en Energía y TA 6 en el resto."
        },
        "mantenimiento": "5 / 10 / 15 / 20"
    },
    {
        "nombre": "Destrucción de Sombras",
        "nivel": 18,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Destruye las sombras existentes alrededor del hechicero. Si se lanza sobre seres basados naturalmente en oscuridad, estos deberán superar una RM o perderán una cantidad equivalente al doble de su nivel de fracaso en puntos de vida (por diez, si poseen acumulación de daño). Mientras se mantenga el conjuro, las entidades afectadas deberán realizar un nuevo control de RM cada asalto.",
        "zeon": {
            "base": 60,
            "intermedio": 100,
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
            "base": "10 metros de radio / 140 RM.",
            "intermedio": "100 metros de radio / 180 RM.",
            "avanzado": "250 metros de radio / 220 RM.",
            "arcano": "500 metros de radio / 280 RM."
        },
        "mantenimiento": "10 / 10 / 15 / 25"
    },
    {
        "nombre": "Detectar lo Negativo",
        "nivel": 20,
        "accion": "Activa",
        "tipo": "Detección",
        "efecto": "Detecta cualquier sentimiento negativo, como odio, miedo o ira, que se encuentre un radio alrededor del lanzador, que no sea capaz de resistir la RM del conjuro. De igual forma, el mago también percibe las criaturas elementales basadas en dichas emociones.",
        "zeon": {
            "base": 50,
            "intermedio": 100,
            "avanzado": 160,
            "arcano": 280
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "25 metros de radio / 80 RM para resistirse.",
            "intermedio": "150 metros de radio / 140 RM para resistirse.",
            "avanzado": "500 metros de radio / 160 RM para resistirse.",
            "arcano": "1 kilómetro de radio / 200 RM para resistirse."
        },
        "mantenimiento": "5 / 10 / 20 / 30"
    },
    {
        "nombre": "Descarga de Luz",
        "nivel": 22,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta una descarga de energía mágica basada en luz. El ataque se realiza en la TA de Energía.",
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
            "base": "Daño 60.",
            "intermedio": "Daño 90.",
            "avanzado": "Daño 120.",
            "arcano": "Daño 150."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-30"
    },
    {
        "nombre": "Holograma",
        "nivel": 26,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea una forma luminosa inmaterial a la que el hechicero podrá darle la apariencia y el movimiento que desee, haciendo muy difícil diferenciarla de un verdadero ser u objeto. Si se crea una criatura, podrá realizar cualquier acción inhumana que el controlador desee, pero imitará las habilidades físicas del hechicero. Si, por ejemplo, se utiliza el holograma para simular que se va a realizar un ataque, utilizará la habilidad de combate de su lanzador. El holograma no puede tocar a nadie ni ser tocado, pero si recibe algún daño basado en energía, desaparece. Para poder percibir que se trata sólo de una imagen, es necesario superar un control de Advertir contra una dificultad de Casi Imposible, o un Buscar contra Muy Difícil.",
        "zeon": {
            "base": 40,
            "intermedio": 150,
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
            "base": "La imagen tiene un tamaño máximo de un metro cuadrado.",
            "intermedio": "La imagen tiene un tamaño máximo de 15 metros cuadrados.",
            "avanzado": "La imagen tiene un tamaño máximo de 50 metros cuadrados.",
            "arcano": "La imagen tiene un tamaño máximo de 100 metros cuadrados y la dificultad del control de Advertir y buscar aumenta respectivamente a Imposible y Absurdo."
        },
        "mantenimiento": "5 / 20 / 25 / 30"
    },
    {
        "nombre": "Lazos de Luz",
        "nivel": 28,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Forma unos lazos de luz que sujetan al blanco designado. Para ello el lanzador emplea las reglas de Presa, aunque sin penalizador alguno a su habilidad. Los lazos de luz no pueden romperse por el sujeto al que sujetan, pero si un tercero intenta romperlos, estos se consideran un arma de energía con Entereza 25.",
        "zeon": {
            "base": 60,
            "intermedio": 100,
            "avanzado": 140,
            "arcano": 180
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Disponen de una Fuerza base 8 para los controles.",
            "intermedio": "Disponen de una Fuerza base 12 para los controles.",
            "avanzado": "Disponen de una Fuerza base 15 para los controles y tienen Entereza 30.",
            "arcano": "Disponen de una Fuerza base 18 para los controles y tienen Entereza 35."
        },
        "mantenimiento": "10 / 10 / 15 / 15"
    },
    {
        "nombre": "Dominio Lumínico",
        "nivel": 30,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Modifica y controla la forma, color o intensidad de la luz de un ambiente. Si se lanza sobre seres basados naturalmente en este elemento serán dominados por el hechicero si no superan una RM determinada por el grado del conjuro. La criatura sólo puede repetir el control si recibe una orden que sea opuesta a su naturaleza.",
        "zeon": {
            "base": 50,
            "intermedio": 150,
            "avanzado": 250,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 16
        },
        "grados": {
            "base": "Radio de 20 metros / RM 80.",
            "intermedio": "Radio de 150 metros / RM 140.",
            "avanzado": "Radio de 300 metros y RM 180.",
            "arcano": "Radio de 500 metros / RM 220."
        },
        "mantenimiento": "5 / 20 / 25 / 30"
    },
    {
        "nombre": "Detectar Vida",
        "nivel": 32,
        "accion": "Activa",
        "tipo": "Detección",
        "efecto": "Detecta cualquier fuente de vida. El conjuro no dará más información que el número de seres vivos y el lugar exacto donde se encuentran con respecto al lanzador.",
        "zeon": {
            "base": 60,
            "intermedio": 100,
            "avanzado": 150,
            "arcano": 300
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "Radio de 25 metros / RM 140.",
            "intermedio": "Radio de 50 metros / RM 180.",
            "avanzado": "Radio de 150 metros / RM 220.",
            "arcano": "Radio de 500 metros / RM 280."
        },
        "mantenimiento": "5 / 10 / 15 / 30",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Espía de Luz",
        "nivel": 36,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea una pequeña luz de energía que se mueve a voluntad del hechicero con un Tipo de vuelo 14. A través de ella el brujo puede ver y escuchar como si se encontrara presente hasta una distancia máxima determinada por el grado del conjuro, pero al hacerlo suprimirá sus sentidos naturales y sólo podrá percibir el mundo a través del espía (el personaje ha de elegir cada asalto si va a mirar a través del conjuro o no). El espía emplea habilidades de Advertir y Buscar independientes de las del lanzador, y serán estas las que utilice el brujo cuando mire o escuche a través de él. El espía puede esquivar ataques usando la Proyección Mágica del hechicero. Sólo es posible dañarle con ataques sobrenaturales, pero es destruido en el caso de que sufra cualquier tipo de daño. La distancia máxima que puede separar al espía del hechicero es determinada por el grado del conjuro.",
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
            "base": "100 en Advertir y Buscar / 1 Kilómetro de distancia máxima.",
            "intermedio": "150 en Advertir y Buscar / 10 Kilómetros de distancia máxima.",
            "avanzado": "200 en Advertir y Buscar / 50 Kilómetros de distancia máxima.",
            "arcano": "250 en Advertir y Buscar / 500 Kilómetros de distancia máxima."
        },
        "mantenimiento": "20 / 40 / 60 / 80 Diario"
    },
    {
        "nombre": "Éxtasis",
        "nivel": 38,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Este conjuro embriaga, con un sentimiento de completo éxtasis, a aquel o aquellos sujetos que se encuentren alrededor del lanzador y fallen la RM. La sensación de placer será tan intensa que sus sentidos se nublarán por completo, aplicando un penalizador de -20 a toda acción mientras dure su poder. Sin embargo, los hechizados olvidarán completamente cualquier sentimiento de dolor y pesadumbre, e ignorarán todos los otros penalizadores que puedan aplicárseles, salvo aquellos provocados por incapacidades físicas.",
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
            "base": "RM 80 / 10 metros de radio.",
            "intermedio": "RM 100 / 50 metros de radio.",
            "avanzado": "RM 120 / 100 metros de radio.",
            "arcano": "RM 160 / 250 metros de radio."
        },
        "mantenimiento": "10 / 10 / 15 / 15"
    },
    {
        "nombre": "Destruir Sentimientos Negativos",
        "nivel": 40,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Destruye temporalmente cualquier sentimiento negativo, como odio, miedo o ira, de aquellos individuos que se encuentren alrededor del hechicero y no superen la RM del conjuro.",
        "zeon": {
            "base": 80,
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
            "base": "RM o RP 100 / 100 metros de radio.",
            "intermedio": "RM o RP 150 / 500 metros de radio.",
            "avanzado": "RM o RP 180 / 1 kilómetro de radio.",
            "arcano": "RM o RP 220 / 5 Kilómetros de radio."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Luz Sanadora",
        "nivel": 42,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Hace recuperar puntos de vida al sujeto sobre el que se lance. Este conjuro no permite restaurar miembros cercenados o pérdidas permanentes, ni tampoco elimina los penalizadores causados por los críticos.",
        "zeon": {
            "base": 70,
            "intermedio": 100,
            "avanzado": 150,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 13,
            "arcano": 15
        },
        "grados": {
            "base": "40 Puntos de Vida.",
            "intermedio": "80 Puntos de Vida.",
            "avanzado": "120 Puntos de Vida.",
            "arcano": "250 Puntos de Vida."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Esfera Buscadora",
        "nivel": 46,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Desencadena una esfera de energía luminosa que ataca en la TA de Energía. El conjuro puede controlarse con la Proyección Mágica del lanzador hasta que impacte sobre un objetivo, por lo que si un blanco esquiva la acometida de una Esfera Buscadora, esta podrá seguir atacando en el turno siguiente al no haber sido destruida. Únicamente cuando causa daño o es parada, la esfera desaparece. Si el hechicero abandona el control directo sobre ella, la esfera se moverá por si misma, atacando todos los asaltos al último blanco prefijado con su propia Proyección Mágica independiente de la del hechicero.",
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
            "base": "Daño Base 100 / Proyección Mágica 150.",
            "intermedio": "Daño Base de 120 / Proyección Mágica 180.",
            "avanzado": "Daño Base de 160 / Proyección Mágica 210.",
            "arcano": "Daño Base de 200 / Proyección Mágica 240."
        },
        "mantenimiento": "15 / 20 / 25 / 30"
    },
    {
        "nombre": "Zona de Detección",
        "nivel": 48,
        "accion": "Activa",
        "tipo": "Detección.",
        "efecto": "Al lanzar este conjuro sobre un lugar determinado, el brujo percibirá a cualquier ser que entre dentro del área del hechizo si no supera una RM. La Zona de Detección no dará más información que el número de individuos que se encuentran dentro y su localización exacta, pero el mago no podrá ver su aspecto o escucharles. También percibirá otros hechizos de Detección que traten de entrar en ella, siempre que el mago que los lanza no supere la RM de la Zona (sin importar dónde se encuentre). Este conjuro permanece estático en el lugar donde fue lanzado.",
        "zeon": {
            "base": 140,
            "intermedio": 200,
            "avanzado": 280,
            "arcano": 360
        },
        "inteligenciaRequerida": {
            "base": 7,
            "intermedio": 10,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "RM 180 / 20 metros de radio.",
            "intermedio": "RM 240 / 80 metros de radio.",
            "avanzado": "RM 280 / 150 metros de radio.",
            "arcano": "RM 340 / 250 metros de radio."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario"
    },
    {
        "nombre": "Introducirse en los Sueños",
        "nivel": 50,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Permite al hechicero introducirse físicamente en los sueños de un durmiente. El brujo no tendrá ningún control sobre el mundo onírico del soñador, y cualquier cosa que suceda será real para él. La persona deberá tener sueños tranquilos para que este conjuro pueda afectarle y, en el momento en que se torne una pesadilla, despierte o muera, el mago abandonará el mundo onírico y volverá al real. Cualquier conjuro de Esencia realizado sobre el durmiente afectará también al hechicero. Una vez en los sueños, el brujo podrá saltar al subconsciente de otro soñador si este no se encuentra, físicamente, a una distancia cercana del durmiente original. Naturalmente, este sujeto tendrá derecho a una nueva RM. En el caso de que la conciencia del soñador se encuentre en el mundo de la Vigilia, el hechicero quedará atrapado allí incluso después de que finalice el conjuro.",
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
            "base": "RM o RP 140 / 10 metros de distancia.",
            "intermedio": "RM o RP 160 / 80 metros de distancia.",
            "avanzado": "RM o RP 200 / 140 metros de distancia.",
            "arcano": "RM o RP 240 / 200 metros de distancia."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario"
    },
    {
        "nombre": "Cuerpo a Luz",
        "nivel": 52,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El cuerpo designado por el hechicero se transformará en pura energía luminosa, volviéndose intangible ante todas las materias y ataques no basados en energía. Mientras se encuentre en este estado, el sujeto ganará un bono en sus habilidades secundarias de Advertir y Buscar, así como a sus Resistencias contra efectos basados en Luz. En este estado, cualquier daño causado por Oscuridad se doblará.",
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
            "base": "+50 en Advertir y Buscar / +20 a sus Resistencias.",
            "intermedio": "+60 en Advertir y Buscar / +30 a sus Resistencias.",
            "avanzado": "Como el Intermedio, pero el bono a sus Resistencias se aplica contra toda clase de efecto sobrenatural no basado en oscuridad.",
            "arcano": "Como el Avanzado, pero no sufre doble daño por recibir ataques basados en oscuridad."
        },
        "mantenimiento": "10 / 15 / 15 / 20",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Bendición",
        "nivel": 56,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "La bendición imbuye de una increíble energía sobrenatural a quienes se encuentren alrededor del hechicero. Aquellos que se encuentren bajo su influencia recibirán un bonificador a todas sus acciones y Resistencias. Los beneficios de este conjuro no se superponen, por lo que un personaje no obtendría el doble de bonos por encontrarse en el área de dos conjuros de Bendición.",
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
            "base": "+10 a toda acción / +10 resistencias / Radio de 5 metros.",
            "intermedio": "+20 a toda acción / +20 resistencias / Radio de 25 metros.",
            "avanzado": "+20 a toda acción / +30 resistencias / Radio de 50 metros.",
            "arcano": "+30 a toda acción / +30 resistencias / Radio de 150 metros."
        },
        "mantenimiento": "5 / 10 / 15 / 15"
    },
    {
        "nombre": "Crear Sentimientos Positivos",
        "nivel": 58,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Introduce algún tipo de sentimiento positivo, como amor, placer o amistad, en los individuos designados por el hechicero que fallen la RM del conjuro. El afectado puede repetir el control una vez al día.",
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
            "base": "Radio de 20 metros / RM o RP 120.",
            "intermedio": "Radio de 100 metros / RM o RP 160.",
            "avanzado": "Radio de 250 metros / RM o RP 180.",
            "arcano": "Radio de 500 metros / RM o RP 220."
        },
        "mantenimiento": "10 / 20 / 25 / 30 Diario"
    },
    {
        "nombre": "Ver Realmente",
        "nivel": 60,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al afectado por el conjuro percibir las fuerzas sobrenaturales que son invisibles para el ojo humano; podrá ver magia, matrices psíquicas y seres invisibles o espirituales. Aunque no funciona contra conjuros ilusorios, ya que afectan a la mente y no a la vista, cualquiera que utilice Ver Realmente contra ilusiones visuales podrá aplicar un bono a su RM, puesto que le resulta más fácil darse cuenta de su falsedad.",
        "zeon": {
            "base": 100,
            "intermedio": 120,
            "avanzado": 180,
            "arcano": 250
        },
        "inteligenciaRequerida": {
            "base": 8,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Podrá ver magia, matrices psíquicas y seres invisibles / +50 RM contra ilusiones.",
            "intermedio": "Como en Base, pero permite ver también seres espirituales.",
            "avanzado": "Como en Intermedio, pero obtiene un +75 RM contra ilusiones.",
            "arcano": "Como avanzado, pero obtiene un +100 RM contra ilusiones."
        },
        "mantenimiento": "10 / 15 / 15 / 25 Diario"
    },
    {
        "nombre": "Escudar Contra lo Negativo",
        "nivel": 62,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Encanta una zona, haciéndola impenetrable para los seres basados naturalmente en sentimientos negativos u oscuridad. Cualquiera de estas criaturas que entre en la zona del conjuro, deberá realizar cada asalto una RM o sufrir una pérdida en puntos de vida equivalente al nivel de fracaso. Adicionalmente, de fallar el control, el ser recibirá de inmediato un penalizador a toda acción de -40 mientras siga en su interior. La zona afectada permanece estática en el lugar donde fue lanzada.",
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
            "base": "RM 120 / radio de 20 metros.",
            "intermedio": "RM 140 / radio de 100 metros.",
            "avanzado": "RM 160 / radio de 250 metros.",
            "arcano": "RM 180 / radio de 500 metros."
        },
        "mantenimiento": "15 / 20 / 25 / 30 Diario",
        "libreAcceso": "1-70"
    },
    {
        "nombre": "Encontrar",
        "nivel": 66,
        "accion": "Activa",
        "tipo": "Detección",
        "efecto": "Mediante el conjuro de Encontrar, el hechicero adquiere la capacidad de localizar una persona, objeto o lugar, y conocer su ubicación exacta en ese momento sin importar la distancia que los separe. Podrá buscar cualquier cosa, concreta o genérica, o simplemente algo que reúna una condición determinada. Por ejemplo, podría intentar localizar una ciudad, al ladrón que le sustrajo su báculo (al cual no conoce) o incluso a la doncella de sangre real más próxima a él. Los objetos, lugares o personas afectados deberán realizar una tirada contra una RM para evitar ser localizados. Los lugares de gran tamaño aplicarán un penalizador de -40 a dicha tirada.",
        "zeon": {
            "base": 160,
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
            "base": "RM 140.",
            "intermedio": "RM 180.",
            "avanzado": "RM 220.",
            "arcano": "RM 260."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Restituir",
        "nivel": 68,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Este conjuro restituye los penalizadores que se apliquen sobre un individuo determinado. Los negativos restituidos podrán haber sido causados por cansancio, hambre, daños físicos o incluso conjuros, aunque no por carencias físicas, como la pérdida de un miembro u otra parte del cuerpo. La restitución recuperará, además, cierta cantidad de de puntos de Cansancio gastados.",
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
            "base": "Elimina un -40 a toda acción y restituye 2 puntos de Cansancio",
            "intermedio": "Elimina un -80 a toda acción y restituye 5 puntos de Cansancio",
            "avanzado": "Elimina un -120 a toda acción y restituye 10 puntos de Cansancio",
            "arcano": "Restituye cualquier penalizador y cantidad de Puntos de Cansancio."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Esquema Hipnótico",
        "nivel": 70,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Forma una marca o un espectáculo de luces en un lugar determinado que fascina y atonta a los que la observen. Todo aquel que lo mire y falle Resistencia no podrá hacer sino seguir contemplándolo absorto, y mientras se encuentren afectados por el conjuro, sólo podrán realizar acciones pasivas sin poder moverse demasiado. Cada vez que reciban un ataque tendrán una nueva oportunidad de superar la Resistencia. La condición para ser afectado consiste en mirar directamente al esquema hipnótico.",
        "zeon": {
            "base": 140,
            "intermedio": 200,
            "avanzado": 280,
            "arcano": 360
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Visible en 1 kilómetro de radio / RM o RP 120.",
            "intermedio": "Visible en 5 kilómetros de radio / RM o RP 150.",
            "avanzado": "Visible en 15 kilómetros de radio / RM o RP 180.",
            "arcano": "Visible en 25 kilómetros de radio / RM o RP 220."
        },
        "mantenimiento": "5 / 10 / 10 / 15"
    },
    {
        "nombre": "Luz Catastrófica",
        "nivel": 72,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta una descarga basada en luz. Ataca en la TA de Energía.",
        "zeon": {
            "base": 140,
            "intermedio": 180,
            "avanzado": 240,
            "arcano": 350
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "Daño 120 / 25 metros de radio.",
            "intermedio": "Daño 150 / 100 metros de radio.",
            "avanzado": "Daño 200 / 150 metros de radio.",
            "arcano": "Daño 250 / 250 metros de radio."
        },
        "mantenimiento": "No",
        "libreAcceso": "1-80"
    },
    {
        "nombre": "Objetos Luminosos Materiales",
        "nivel": 76,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Forma un objeto físico de energía lumínica. Pese a estar hecho de luz, tiene consistencia física. La presencia máxima de dicho objeto y la calidad del mismo viene determinada por el grado del conjuro.",
        "zeon": {
            "base": 150,
            "intermedio": 200,
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
            "base": "Presencia 60 / Calidad +5.",
            "intermedio": "Presencia 100 / Calidad +10.",
            "avanzado": "Presencia 140 / Calidad +10.",
            "arcano": "Presencia 180 / Calidad +15."
        },
        "mantenimiento": "15 / 20 / 25 / 30"
    },
    {
        "nombre": "Transmisión por Luz",
        "nivel": 78,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Transporta instantáneamente a los individuos u objetos designados por el brujo, desde una fuente de luz hasta otra. Si desea resistirse, hay que superar la RM del conjuro. Tanto la distancia máxima como la máxima presencia afectable son determinadas por el grado del conjuro.",
        "zeon": {
            "base": 250,
            "intermedio": 360,
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
            "base": "100 kilómetros / 250 de presencia / RM 120.",
            "intermedio": "1.000 kilómetros / 500 de presencia / RM 140.",
            "avanzado": "5.000 kilómetros / 1.000 de presencia / RM 180.",
            "arcano": "15.000 kilómetros / 2.000 de presencia / RM contra 200."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Señor de los Sueños",
        "nivel": 80,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Permite dominar cualquier tipo de sueño de un individuo que no supere RM del conjuro. El hechicero tendrá la capacidad de controlar el mundo onírico de un durmiente, modificándolo como si tuviera Gnosis 45. En el caso de que el sueño se alimente de energía negativa, es decir, que se torne una pesadilla, su Gnosis será sólo de 30. Los conjuros que el brujo lance únicamente gracias a dicho Gnosis (como por ejemplo, magia divina), no tienen efecto fuera de los límites espaciales del conjuro y sus efectos desaparecen en cuanto el hechicero sale del sueño o de la Vigilia.",
        "zeon": {
            "base": 300,
            "intermedio": 400,
            "avanzado": 500,
            "arcano": 750
        },
        "inteligenciaRequerida": {
            "base": 12,
            "intermedio": 14,
            "avanzado": 16,
            "arcano": 18
        },
        "grados": {
            "base": "RM 140.",
            "intermedio": "RM 150 / Si el hechicero se encuentra en la Vigilia, controla además su entorno y gana los poderes de una criatura con Gnosis 40, siempre la y cuando esté en un lugar fuertemente influenciado por energías positivas. Si se encuentra en una zona neutra, su puntuación será 30. Este conjuro sólo afecta la zona de la Vigilia en la que fue lanzado, y siempre y cuando no haya otra entidad de Gnosis similar enlazada a ella.",
            "avanzado": "RM 160 / Como Intermedio, pero el Gnosis del brujo en zonas neutras es de 35.",
            "arcano": "RM 180 / Como Avanzado, pero los efectos del conjuro no tienen límites espaciales, afectando por igual a toda la Vigilia influenciada por energías positivas."
        },
        "mantenimiento": "60 / 65 / 70 / 80"
    },
    {
        "nombre": "Creación de Luz",
        "nivel": 82,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea un ser luminoso con apariencia de vida, bajo el control absoluto del hechicero. El ente será desarrollado como un Ser Entre Mundos, usando los poderes y limitaciones de los elementales de Luz del Capítulo 26. Para calcular su nivel máximo se emplean las mismas reglas que en el conjuro Crear Ser, de la vía de Creación.",
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
        "nombre": "Prisma Reflectante",
        "nivel": 86,
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Crea un cuerpo de luz pura que funciona a modo de escudo que reflecta cualquier hechizo ofensivo, disciplina psíquica de ataque o técnica de Ki a distancia que se efectúe contra el lanzador. Para que la descarga sea devuelta, el hechicero deberá logar una defensa con éxito y ganar un control de choque contra un equivalente de daño determinado por el Grado del conjuro. En caso de tratarse de un Ataque en área, no lo devolverá en su totalidad; seguirá afectando a cualquier sujeto que se encuentre dentro de la zona afectada, salvo al hechicero. Este conjuro no devuelve efectos Anímicos o Esotéricos. El brujo podrá utilizar su Proyección Mágica para redirigir el ataque al nuevo blanco que desee.",
        "zeon": {
            "base": 160,
            "intermedio": 250,
            "avanzado": 300,
            "arcano": 400
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 13,
            "avanzado": 15,
            "arcano": 17
        },
        "grados": {
            "base": "100 contra choques / Tiene 800 puntos de Resistencia.",
            "intermedio": "120 contra choques / Tiene 1.500 puntos de Resistencia.",
            "avanzado": "140 contra choques / Tiene 3.000 puntos de Resistencia.",
            "arcano": "180 contra choques / Tiene 6.000 puntos de Resistencia."
        },
        "mantenimiento": "20 / 25 / 30 / 40 Diario"
    },
    {
        "nombre": "Omnisciencia Radial",
        "nivel": 86,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Permite al lanzador ser omnisciente respecto a cualquier suceso o pensamiento que acontezca a su alrededor. Sólo afecta a individuos que no tengan más Gnosis que el personaje y cuya presencia no sea superior a lo permitido por el Grado del conjuro. El brujo sabrá, de manera automática, todo lo que está pasado dentro de este radio y qué piensan las personas. No hay control de Resistencia posible.",
        "zeon": {
            "base": 200,
            "intermedio": 250,
            "avanzado": 400,
            "arcano": 800
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 15,
            "arcano": 18
        },
        "grados": {
            "base": "500 metros de radio / presencia máxima 60.",
            "intermedio": "2 kilómetros de radio / presencia máxima 80.",
            "avanzado": "10 kilómetros de radio / presencia máxima 100.",
            "arcano": "50 kilómetros de radio / presencia máxima 120."
        },
        "mantenimiento": "40 / 50 / 60 / 65"
    },
    {
        "nombre": "Predecir",
        "nivel": 90,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Permite vislumbrar los acontecimientos futuros que se desarrollarán alrededor de una persona, objeto o lugar. Predecir mostrará al brujo el destino más probable que aguarda a algo o alguien, dándole información detallada sobre los eventos futuros. El intervalo de tiempo no podrá extenderse más de lo permitido por el Grado del conjuro. El DJ deberá explicar verazmente al hechicero cuáles serán los sucesos que acontecerán. Sin embargo, estos no son infalibles; lo que se predice es sólo el destino más probable, existiendo la posibilidad de que pueda ser modificado mediante la intervención de fuerzas mayores o de individuos con un Gnosis muy superior a su Natura.",
        "zeon": {
            "base": 200,
            "intermedio": 300,
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
            "base": "Un año.",
            "intermedio": "Cinco años.",
            "avanzado": "Cincuenta años / En caso de ser una predicción de algo que deba ocurrir en menos de un día, ésta será bastante exacta.",
            "arcano": "Un siglo / En caso de ser una predicción de algo que deba ocurrir en menos de años, ésta será bastante exacta."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Prisión de Luz",
        "nivel": 92,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Encierra algo en un mundo de luz intraspasable, un universo propio desde el que no podrá interactuar con el exterior, ni el exterior hacerlo recíprocamente con el objeto o criatura. Mientras el afectado se encuentre dentro de la prisión, no será consciente de lo que ocurre fuera, ni viceversa. Para forzar el conjuro desde el interior, la prisión es considerada como un ser con acumulación de daño y una TA 10, cuya resistencia es determinada por el grado del conjuro. No obstante, todo daño que sufra desde fuera se dobla automáticamente, La prisión se recupera de cualquier daño con Regeneración 19. Si el blanco del conjuro falla la RM y es afectado por el sortilegio, no tendrá derecho a ninguna tirada posterior; si quiere salir, deberá ser capaz de romper la prisión. El lanzador del conjuro no puede encerrarse a si mismo dentro de su propia prisión de luz.",
        "zeon": {
            "base": 200,
            "intermedio": 350,
            "avanzado": 500,
            "arcano": 800
        },
        "inteligenciaRequerida": {
            "base": 14,
            "intermedio": 16,
            "avanzado": 18,
            "arcano": 20
        },
        "grados": {
            "base": "RM 140 / La prisión posee 10.000 puntos de resistencia.",
            "intermedio": "RM 180 / La prisión posee 250.000 puntos de resistencia.",
            "avanzado": "RM 220 / La prisión posee 500.000 puntos de resistencia.",
            "arcano": "RM 240 / La prisión no puede ser rota desde el interior, pero tiene 500.000 puntos de resistencia si es atacada desde fuera."
        },
        "mantenimiento": "40 / 70 / 100 / 160",
        "libreAcceso": "1-100"
    },
    {
        "nombre": "Esencia de Luz",
        "nivel": 96,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al lanzador o el objetivo designado por este entrar en un estado de completo letargo, mientras su cuerpo se hace uno con la luz. La entidad abandona el mundo y asciende a la red de almas para nutrirse de sus energías. Apartado y desconocedor de todo lo que sucede en el exterior, multiplica por 10 su regeneración zeónica y cura sus heridas con Regeneración 16. Cuanto tiempo puede permanecer apartado del mundo es determinado por el grado del conjuro.",
        "zeon": {
            "base": 200,
            "intermedio": 400,
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
            "base": "Un día.",
            "intermedio": "Una semana.",
            "avanzado": "Un mes.",
            "arcano": "Un año."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Ascensión",
        "nivel": 98,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El conjuro intercambia la esencia del lanzador por energía divina, modificando su espíritu por puro poder sobrenatural. Al hacerlo, el lanzador o el individuo designado por éste aumenta su Gnosis hasta una cantidad máxima determinada por el grado del conjuro.",
        "zeon": {
            "base": 500,
            "intermedio": 1000,
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
            "base": "Gnosis máximo 30.",
            "intermedio": "Gnosis máximo 35.",
            "avanzado": "Gnosis máximo 40.",
            "arcano": "Gnosis máximo 45."
        },
        "mantenimiento": "30 / 40 / 45 / 50"
    },
    {
        "nombre": "Holocausto de Luz",
        "nivel": 100,
        "accion": "Activa",
        "tipo": "Ataque, Anímico",
        "efecto": "Este conjuro desencadena el poder de la luz en su estado más puro, arrasando todo lo que encuentra a su paso, tanto en el mundo material como en el espiritual. La energía liberada lo arrastra y devora todo, unificando toda existencia con la luz. Incluso las criaturas elementales de luz son asimiladas por su poder. El Holocausto crea una gran cúpula lumínica que ataca en la TA de energía. Cualquier ser que reciba daño, por mínimo que sea, deberá superar una RM contra 160 o será unificado con la luz y, por tanto, destruido en cuerpo y alma de forma automática. No es posible designar blancos específicos en el radio del conjuro, y afectará a todos por igual salvo al lanzador.",
        "zeon": {
            "base": 600,
            "intermedio": 1000,
            "avanzado": 2500,
            "arcano": 10000
        },
        "inteligenciaRequerida": {
            "base": 14,
            "intermedio": 16,
            "avanzado": 18,
            "arcano": 20
        },
        "grados": {
            "base": "Daño 350 / 100 metros de radio.",
            "intermedio": "Daño 500 / 100 kilómetros de radio.",
            "avanzado": "Daño 800 / 10.000 kilómetros de radio.",
            "arcano": "Daño 1.000 / 1 ua de radio."
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

// =====================================================
// VÍA: OSCURIDAD
// Fuente de contenido: Vías de Magia.pdf
// =====================================================

export const viaOscuridad = {
    id: "oscuridad",
    nombre: "Oscuridad",
    color: "#6b21a8",
    hechizos: [
    {
        "nombre": "Crear Oscuridad",
        "nivel": 2,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Oscurece completamente una zona. Todo lo que hay en su interior se percibe como en una noche cerrada y sin luna.",
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
            "base": "5 metros de radio.",
            "intermedio": "25 metros de radio.",
            "avanzado": "100 metros de radio.",
            "arcano": "500 metros de radio."
        },
        "mantenimiento": "5 / 5 / 10 / 15 Diario",
        "libreAcceso": "1-10"
    },
    {
        "nombre": "Imbuir Miedo",
        "nivel": 6,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Provoca, temporalmente, el estado de Miedo a todos los sujetos que se encuentren alrededor del lanzador. El hechicero decidirá cuál es la fuente que origina el miedo a los afectados.",
        "zeon": {
            "base": 40,
            "intermedio": 80,
            "avanzado": 140,
            "arcano": 180
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 8,
            "avanzado": 10,
            "arcano": 12
        },
        "grados": {
            "base": "RM o RP 80 / 10 metros de radio.",
            "intermedio": "RM o RP 100 / 50 metros de radio.",
            "avanzado": "RM o RP 120 / 100 metros de radio.",
            "arcano": "RM o RP 140 / 250 metros de radio."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Ver en la Oscuridad",
        "nivel": 8,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al hechicero, o a quienes este seleccione, ver perfectamente en la oscuridad natural, siempre que la suma de sus presencias no supere el valor determinado por el grado del conjuro.",
        "zeon": {
            "base": 40,
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
            "base": "Presencia máxima 80.",
            "intermedio": "Presencia máxima 100.",
            "avanzado": "Presencia máxima 120.",
            "arcano": "Presencia máxima 140 / Permite ver en la oscuridad sobrenatural."
        },
        "mantenimiento": "5 / 10 / 10 / 15 Diario"
    },
    {
        "nombre": "Escudo Oscuro",
        "nivel": 10,
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Forma una barrera de energía, que protege frente a cualquier fuente de ataque. El escudo sólo puede ser dañado por ataques de naturaleza sobrenatural, aunque los impactos basados en luz causarán doble daño sobre él.",
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
        "nombre": "Sombra",
        "nivel": 10,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Este conjuro aumenta la capacidad de ocultación del hechicero, acrecentando sus habilidades secundarias de Sigilo y Ocultarse, así como su Valoración mágica en la misma cantidad, aunque sólo en el caso de que pretenda ocultar el potencial mágico de algo o alguien (nunca para detectarlo).",
        "zeon": {
            "base": 50,
            "intermedio": 150,
            "avanzado": 200,
            "arcano": 240
        },
        "inteligenciaRequerida": {
            "base": 5,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 14
        },
        "grados": {
            "base": "+50 en Sigilo, Ocultarse y Valoración Mágica.",
            "intermedio": "+150 en Sigilo, Ocultarse y Valoración Mágica.",
            "avanzado": "+200 en Sigilo, Ocultarse y Valoración Mágica.",
            "arcano": "+250 en Sigilo, Ocultarse y Valoración Mágica."
        },
        "mantenimiento": "5 / 15 / 20 / 25",
        "libreAcceso": "1-20"
    },
    {
        "nombre": "Armadura Oscura",
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
        "nombre": "Destrucción de Luz",
        "nivel": 18,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Destruye la luminosidad ambiental alrededor del hechicero. Si se lanza sobre seres basados naturalmente en luz, estos deberán superar una RM o perderán una cantidad equivalente al doble de su nivel de fracaso en puntos de vida (por diez, si poseen acumulación de daño). Mientras se mantenga el conjuro, la entidad, deberá realizar un nuevo control de RM cada asalto que permanezca en el interior del radio del conjuro.",
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
        "nombre": "Ocultación de Magia",
        "nivel": 20,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Oculta un conjuro, o las propiedades místicas de un objeto, ante cualquier tipo de detección mágica. A efectos de juego, produce un penalizador a la Valoración mágica de quien intente detectar o medir el conjuro u objeto oculto (así como al propio hechizo de Ocultación de Magia).",
        "zeon": {
            "base": 50,
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
            "base": "-100 a Valoración Mágica.",
            "intermedio": "-180 a Valoración Mágica.",
            "avanzado": "-240 a Valoración Mágica.",
            "arcano": "-320 a Valoración Mágica."
        },
        "mantenimiento": "5 / 20 / 25 / 30 Diario"
    },
    {
        "nombre": "Descarga Oscura",
        "nivel": 22,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta una descarga mágica basada en oscuridad. El ataque se realiza en la TA de Energía.",
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
        "nombre": "Oscuridad Ambiental",
        "nivel": 26,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea un ambiente místico que nubla los sentidos de cualquiera que se encuentre en su interior. La Oscuridad Ambiental aumenta en dos grados el nivel de dificultad de cualquier control perceptivo que se realice dentro, incluyendo detección por Ki o medios mágicos. No se puede designar blancos en su interior, y la zona permanece inmóvil en el mismo lugar en el que fue lanzada. No tiene control de RM posible.",
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
            "base": "Radio de 20 metros.",
            "intermedio": "Radio de 250 metros.",
            "avanzado": "Radio de 500 metros.",
            "arcano": "Radio de 1 kilómetro."
        },
        "mantenimiento": "5 / 10 / 15 / 15"
    },
    {
        "nombre": "Lazos Oscuros",
        "nivel": 28,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Forma unos lazos de oscuridad que sujetan al blanco designado. Para ello el lanzador emplea las reglas de Presa, aunque sin penalizador alguno a su habilidad. Los lazos de luz no pueden romperse por el sujeto al que sujetan, pero si un tercero intenta romperlos, estos se consideran un arma de energía con Entereza 25.",
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
        "nombre": "Dominio Oscuro",
        "nivel": 30,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Este conjuro modifica y controla la forma e intensidad de la oscuridad y sombras que rodean al hechicero. Si se lanza sobre seres basados naturalmente en este elemento serán dominados por el hechicero si no superan una RM determinada por el grado del conjuro. La criatura sólo puede repetir el control si recibe una orden que sea opuesta a su naturaleza.",
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
        "nombre": "Ocultación",
        "nivel": 32,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Oculta la presencia del hechicero o del blanco designado por este ante cualquier tipo de detección. A efectos de juego, aumenta en las Resistencias que se efectúen contra detecciones sobrenaturales, ya sean místicas o psíquicas. Esta habilidad también aumenta la Ocultación del Ki del personaje (aunque este aumento no se contabiliza a la hora de determinar los bonos aplicables a la RM), permitiéndole esconder su energía incluso si no ha desarrollado dicha habilidad.",
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
            "base": "+50 a la RM o RP / +50 Ocultación del Ki.",
            "intermedio": "+140 a la RM o RP / +150 Ocultación del Ki.",
            "avanzado": "+220 a la RM o RP / +200 Ocultación del Ki.",
            "arcano": "+280 a la RM o RP / +250 Ocultación del Ki."
        },
        "mantenimiento": "10 / 20 / 25 / 30 Diario",
        "libreAcceso": "1-40"
    },
    {
        "nombre": "Ofuscar",
        "nivel": 36,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Modifica el cuerpo de un individuo, fundiéndolo con su entorno y permitiéndole ocultarse naturalmente. Mientras el conjuro de Ofuscar se mantenga activo, el personaje podrá intercambiar su habilidad de Sigilo y Ocultarse por un valor base. También proporciona la misma cantidad a su Ocultación del Ki, incluso si no ha desarrollado dicha habilidad.",
        "zeon": {
            "base": 100,
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
            "base": "Base de 100 en Sigilo, Ocultarse y Ocultación del Ki.",
            "intermedio": "Base de 150 en Sigilo, Ocultarse y Ocultación del Ki.",
            "avanzado": "Base de 200 en Sigilo, Ocultarse y Ocultación del Ki.",
            "arcano": "Base de 250 en Sigilo, Ocultarse y Ocultación del Ki."
        },
        "mantenimiento": "20 / 40 / 50 / 60 Diario"
    },
    {
        "nombre": "Rabia",
        "nivel": 38,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Provoca el estado de Ira sobre los objetivos del conjuro, haciendo que estos no controlen sus acciones y ataquen al individuo más cercano a ellos. Mientras alguien se vea influido por sus efectos, aplicará un bono de +10 a su habilidad ofensiva y un -30 al resto de sus controles.",
        "zeon": {
            "base": 60,
            "intermedio": 90,
            "avanzado": 150,
            "arcano": 200
        },
        "inteligenciaRequerida": {
            "base": 6,
            "intermedio": 9,
            "avanzado": 12,
            "arcano": 15
        },
        "grados": {
            "base": "5 metros de radio / RM 80.",
            "intermedio": "20 metros de radio / RM 100.",
            "avanzado": "50 metros de radio / RM 120.",
            "arcano": "100 metros de radio / RM 140."
        },
        "mantenimiento": "10 / 10 / 15 / 20"
    },
    {
        "nombre": "Destruir Sentimientos Positivos",
        "nivel": 40,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Destruye temporalmente cualquier sentimiento positivo, como paz interior, calma o alegría, que se encuentre en un radio respecto al hechicero. Si desea resistirse, ha de superarse una RM o RP.",
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
        "nombre": "Noche",
        "nivel": 42,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Forma una cúpula de oscuridad absoluta. Todo aquel que se encuentre en su interior, excepto el hechicero, se verá sometido a las reglas de Ceguera. Para poder ver a través de esta oscuridad, ya sea desde dentro o fuera de la cúpula, es necesario superar una dificultad de Imposible en Advertir o de Absurdo en Buscar. No se puede designar blancos en el interior del área.",
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
            "base": "Radio 25 metros.",
            "intermedio": "Radio 250 metros.",
            "avanzado": "Radio 500 metros/ La oscuridad se considera sobrenatural.",
            "arcano": "Radio 1 kilómetro / La oscuridad se considera sobrenatural."
        },
        "mantenimiento": "10 / 20 / 25 / 30",
        "libreAcceso": "1-50"
    },
    {
        "nombre": "Esfera Oscura",
        "nivel": 46,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Desencadena una esfera de energía oscura que ataca en la TA de Energía. El conjuro puede controlarse con la Proyección Mágica del lanzador hasta que impacte sobre un objetivo, por lo que si un blanco esquiva la acometida de una Esfera Buscadora, esta podrá seguir atacando en el turno siguiente al no haber sido destruida. Únicamente cuando causa daño o es parada, la esfera desaparece. Si el hechicero abandona el control directo sobre ella, la esfera se moverá por si misma, atacando todos los asaltos al último blanco prefijado con su propia Proyección Mágica independiente de la del hechicero.",
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
        "nombre": "Zona de Ocultación",
        "nivel": 48,
        "accion": "Activa",
        "tipo": "Detección",
        "efecto": "Al lanzar este conjuro sobre una zona, el hechicero crea un área mística que impide que se pueda detectar nada de lo que se encuentra en el interior. Todo lo que hay dentro de la zona incrementa su RM contra detecciones y cualquier habilidad de Detección del Ki, Valoración mágica o habilidad psíquica de detección que se utilice en ella, sufre un penalizador a su resultado final. La zona afectada permanece estática en el lugar donde fue lanzada.",
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
            "base": "20 metros de radio, RM +100, -140 a Habilidades de detección.",
            "intermedio": "50 metros de radio, RM +150, -180 a Habilidades de detección.",
            "avanzado": "250 metros de radio, RM +200, -240 a Habilidades de detección.",
            "arcano": "500 metros de radio, RM +300, -320 a Habilidades de detección."
        },
        "mantenimiento": "10 / 10 / 15 / 15 Diario"
    },
    {
        "nombre": "Introducirse en las Pesadillas",
        "nivel": 50,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Permite al hechicero introducirse físicamente en las pesadillas de un durmiente. El brujo no tendrá ningún control sobre el mundo onírico del soñador, y cualquier cosa que suceda será real para él. La persona deberá tener terribles pesadillas para que este conjuro pueda afectarle y, en el momento en que se torne un sueño plácido, despierte o muera, el mago abandonará el mundo onírico y volverá al real. Cualquier conjuro de Esencia realizado sobre el durmiente afectará también al hechicero. Una vez en las pesadillas, el brujo podrá saltar al subconsciente de otro soñador si este no se encuentra, físicamente, a una distancia cercana del durmiente original. Naturalmente, este sujeto tendrá derecho a una nueva RM. En el caso de que la conciencia del soñador se encuentre en el mundo de la Vigilia, el hechicero quedará atrapado allí incluso después de que finalice el conjuro.",
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
        "nombre": "Cuerpo a Oscuridad",
        "nivel": 52,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El cuerpo designado por el hechicero se transformará en pura energía oscura, volviéndose intangible ante todas las materias y ataques no basados en energía. Mientras se encuentre en este estado, el sujeto ganará un bono en sus habilidades secundarias de Advertir y Buscar, así como a sus Resistencias contra efectos basados en Oscuridad. En este estado, cualquier daño causado por Luz se doblará.",
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
            "avanzado": "Como el Intermedio, pero el bono a sus Resistencias se aplica contra toda clase de efecto sobrenatural no basado en Luz.",
            "arcano": "Como el Avanzado, pero no sufre doble daño por recibir ataques basados en Luz."
        },
        "mantenimiento": "10 / 15 / 15 / 20",
        "libreAcceso": "1-60"
    },
    {
        "nombre": "Perdición",
        "nivel": 56,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "La Perdición causa una conmoción a los individuos a los que afecte, disminuyendo sus capacidades y poderes. Aquellos que se encuentren bajo su zona de influencia deberán superar una RM, o recibir un penalizador a toda acción y a sus Resistencias de -30. El conjuro afecta en un radio alrededor del hechicero, afectando automáticamente a cualquiera que el hechicero desee de cuantos se encuentren en el interior. Los penalizadores de la Perdición no se superponen, por lo que un personaje no sufriría el doble de negativos por encontrarse bajo la influencia de dos perdiciones.",
        "zeon": {
            "base": 100,
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
            "base": "RM 120 / Radio de 5 metros.",
            "intermedio": "RM 160 / 25 metros de radio. o",
            "avanzado": "RM 180 / 50 metros de radio / -40 a toda acción. a",
            "arcano": "RM 200 / 150 metros de radio / -50 a toda acción."
        },
        "mantenimiento": "5 / 10 / 15 / 15"
    },
    {
        "nombre": "Crear Sentimientos Negativos",
        "nivel": 58,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Introduce algún tipo de sentimiento negativo, como odio, miedo o ira, en los individuos designados por el hechicero. El afectado puede repetir el control una vez al día.",
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
        "nombre": "Eliminar Residuos",
        "nivel": 60,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El hechicero puede borrar el rastro de que ha estado en un sitio determinado. De hecho, cualquier residuo de su paso por ese lugar desaparece completamente, ya sea ante habilidades de carácter natural, como Rastrear, o detecciones sobrenaturales.",
        "zeon": {
            "base": 100,
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
            "base": "50 metros de radio.",
            "intermedio": "250 metros de radio.",
            "avanzado": "1 kilómetro de radio / El conjuro permite además borrar las acciones de un individuo ante habilidades que permiten ver el pasado de objetos o lugares.",
            "arcano": "5 kilómetros de radio / Como en grado Avanzado, salvo que el hechicero puede borrar todo rastro de cuanto aconteció en el pasado en la zona afectada."
        },
        "mantenimiento": "No"
    },
    {
        "nombre": "Escudar Contra lo Positivo",
        "nivel": 62,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Encanta una zona, haciéndola impenetrable para los seres basados naturalmente en sentimientos positivos u luz. Cualquiera de estas criaturas que entre en la zona del conjuro, deberá realizar cada asalto una RM o sufrir una pérdida en puntos de vida equivalente al nivel de fracaso. Adicionalmente, de fallar el control, el ser recibirá de inmediato un penalizador a toda acción de -40 mientras sigua en su interior. La zona afectada permanece estática en el lugar donde fue lanzada.",
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
        "nombre": "Oscuridad Devoradora",
        "nivel": 66,
        "accion": "Pasiva",
        "tipo": "Defensa",
        "efecto": "Crea un escudo sobrenatural sombrío que posee además la habilidad de tragarse cualquier hechizo de Ataque que reciba. Para que el conjuro sea absorbido, es necesario primero lograr una parada con éxito contra la descarga, y en segundo lugar ganar un control de choque. El vacío permite absorber la mitad del Zeon del conjuro devorado. Es posible incluso que se trague ataques en área.",
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
            "base": "Daño del choque 80 y 600 puntos de Resistencia.",
            "intermedio": "Daño del choque 110 y 1200 puntos de Resistencia.",
            "avanzado": "Daño del choque 140 y 1800 puntos de Resistencia.",
            "arcano": "Daño del choque 170 y 2200 puntos de Resistencia."
        },
        "mantenimiento": "10 / 10 / 15 / 15"
    },
    {
        "nombre": "Destrozar",
        "nivel": 68,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Provoca penalizadores mediante la acumulación de dolor, sufrimiento, desdicha y otros efectos místicos tenebrosos. El afectado deberá superar una RM, o sufrir un penalizador a toda acción y a sus Resistencias equivalente al nivel de fracaso del control. Si no supera la RM, el blanco del conjuro no tendrá derecho a una nueva tirada mientras el hechizo se mantenga.",
        "zeon": {
            "base": 100,
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
            "base": "RM 120.",
            "intermedio": "RM 160.",
            "avanzado": "RM 200.",
            "arcano": "RM 240."
        },
        "mantenimiento": "10 / 20 / 25 / 30"
    },
    {
        "nombre": "Marca del Miedo",
        "nivel": 70,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Forma una marca o un espectáculo de luces en un lugar determinado que aterroriza y llena de terror a quienes la observen. Todo aquel que lo mire y falle la Resistencia sufrirá de inmediato el estado de Terror. La condición para ser afectado consiste en mirar directamente la Marca del Miedo.",
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
        "nombre": "Oscuridad Catastrófica",
        "nivel": 72,
        "accion": "Activa",
        "tipo": "Ataque",
        "efecto": "Proyecta una descarga de energía basada en oscuridad. Ataca en la TA de Energía.",
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
        "nombre": "Objetos Oscuros",
        "nivel": 76,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Forma un objeto físico de energía lumínica, ya sea algo tan complejo como un reloj o tan simple como una espada. Pese a estar hecho de luz, tiene consistencia física. La presencia máxima de dicho objeto y la calidad del mismo viene determinada por el grado del conjuro.",
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
        "nombre": "Transmisión por Sombras",
        "nivel": 78,
        "accion": "Activa",
        "tipo": "3Efecto, Anímico",
        "efecto": "Transporta instantáneamente a los individuos u objetos designados por el brujo, desde una sombra hasta otra. Si desea resistirse, hay que superar la RM del conjuro. Tanto la distancia máxima como la máxima presencia afectable son determinadas por el grado del conjuro.",
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
        "nombre": "Rey de Pesadillas",
        "nivel": 80,
        "accion": "Activa",
        "tipo": "Efecto, Anímico",
        "efecto": "Permite dominar cualquier tipo de pesadilla de un individuo que no supere la RM del conjuro. El hechicero tendrá la capacidad de controlar el mundo onírico de un durmiente, modificándolo como si tuviera Gnosis 45. Su Gnosis será sólo de 30 si la pesadilla pasa a ser un sueño agradable. Los conjuros que el brujo lance únicamente gracias a dicho Gnosis (como por ejemplo, magia divina), no tienen efecto fuera de los límites espaciales del conjuro y sus efectos desaparecen en cuanto el hechicero sale del sueño o de la Vigilia.",
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
            "intermedio": "RM 150 / Si el hechicero se encuentra en la Vigilia, controla además su entorno y gana los poderes de una criatura con Gnosis 40, siempre y cuando esté en un lugar fuertemente influenciado por energías negativas. Si se encuentra en una zona neutra, su puntuación será 30. Este conjuro sólo afecta la zona de la Vigilia en la que fue lanzado, y siempre y cuando no haya otra entidad de Gnosis similar enlazada a ella.",
            "avanzado": "RM 160 / Como Intermedio, pero el Gnosis del brujo en zonas neutras es de 35.",
            "arcano": "RM 180 / Como Avanzado, pero los efectos del conjuro no tienen límites espaciales, afectando por igual a toda la Vigilia influenciada por energías positivas."
        },
        "mantenimiento": "60 / 65 / 70 / 80"
    },
    {
        "nombre": "Creación Oscura",
        "nivel": 82,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Crea un ser oscuro con apariencia de vida, bajo el control absoluto del hechicero. El ente será desarrollado como un Ser Entre Mundos, usando los poderes y limitaciones de los elementales oscuros del Capítulo 26. Para calcular su nivel máximo se emplean las mismas reglas que en el conjuro Crear Ser, de la vía de Creación.",
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
        "nombre": "Ocultarse Ante la Magia",
        "nivel": 86,
        "accion": "Pasiva",
        "tipo": "Efecto",
        "efecto": "Oculta la presencia de un individuo contra los conjuros de tipo Automático, haciendo que no sea afectado de manera directa por ellos. Al contrario de lo que indican las reglas generales, el hechicero que mantenga cualquier conjuro Automático deberá conseguir fijar con su Proyección Mágica al personaje, como si se tratase de un conjuro Anímico normal, a pesar de que este cumpla la condición para ser afectado.",
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
            "base": "Afecta a conjuros Automáticos de Grado Base.",
            "intermedio": "Afecta a conjuros Automáticos de Grado Intermedio.",
            "avanzado": "Afecta a conjuros Automáticos de Grado Avanzado.",
            "arcano": "Afecta a conjuros Automáticos de Grado Arcano."
        },
        "mantenimiento": "10 / 15 / 15 / 20 Diario"
    },
    {
        "nombre": "Reino de Tinieblas",
        "nivel": 88,
        "accion": "Activa",
        "tipo": "Automático",
        "efecto": "Crea una zona estática alrededor del hechicero donde todo se vuelve oscuridad absoluta. El cuerpo del brujo se funde con las sombras, incrementando en +20 su ACT al lanzar conjuros de Oscuridad y aumentando en +40 sus Resistencias contra cualquier clase de detección. Si alguien intenta localizarlo empleando los sentidos naturales, es necesario superar un control de Buscar contra Imposible, o de Advertir contra Inhumano, mientras que se usa Detección del Ki, se requiere pasar un control contra Zen. Además, mientras sea uno con la oscuridad el hechicero podrá transportarse una vez por asalto como una acción activa hasta el lugar que desee dentro de los límites del Reino de Tinieblas. Cualquier ser vivo que permanezca dentro del área que no sea un elemental oscuro pierde automáticamente 10 puntos de Zeon por asalto y un punto de Ki (el doble, si es un elemental de luz).",
        "zeon": {
            "base": 200,
            "intermedio": 360,
            "avanzado": 420,
            "arcano": 480
        },
        "inteligenciaRequerida": {
            "base": 10,
            "intermedio": 12,
            "avanzado": 14,
            "arcano": 16
        },
        "grados": {
            "base": "50 metros de radio.",
            "intermedio": "500 metros de radio.",
            "avanzado": "1 kilómetro de radio.",
            "arcano": "1 kilómetros de radio / +30 al ACT al lanzar conjuros oscuros."
        },
        "mantenimiento": "10 / 20 / 25 / 25"
    },
    {
        "nombre": "Indetección",
        "nivel": 90,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "El hechicero, o quien este designe, se vuelve completamente inmune ante ciertos tipos de detecciones sobrenaturales. Por ejemplo, un personaje que use este conjuro en grado Arcano sólo podría ser encontrado mediante los sentidos físicos, como la vista o el oído.",
        "zeon": {
            "base": 350,
            "intermedio": 450,
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
            "base": "El personaje se vuelve indetectable ante conjuros y habilidades psíquicas.",
            "intermedio": "Como en grado Base, pero también se vuelve indetectable ante habilidades del Ki.",
            "avanzado": "Como en grado Intermedio, pero también se vuelve indetectable ante todas las habilidades sobrenaturales.",
            "arcano": "Ignora cualquier detección que no sean los sentidos naturales."
        },
        "mantenimiento": "80 / 90 / 105 / 115 Diario"
    },
    {
        "nombre": "Prisión de Oscuridad",
        "nivel": 92,
        "accion": "Activa",
        "tipo": "Anímico",
        "efecto": "Encierra algo en un mundo de tinieblas intraspasable, un universo propio desde el que no podrá interactuar con el exterior, ni el exterior hacerlo recíprocamente con el objeto o criatura. Mientras el afectado se encuentre dentro de la prisión, no será consciente de lo que ocurre fuera, ni viceversa. Para forzar el conjuro desde el interior, la prisión es considerada como un ser con acumulación de daño y una TA 10, cuya resistencia es determinada por el grado del conjuro. No obstante, todo daño que sufra desde fuera se dobla automáticamente, La prisión se recupera de cualquier daño con Regeneración 19. Si el blanco del conjuro falla la RM y es afectado por el sortilegio, no tendrá derecho a ninguna tirada posterior; si quiere salir, deberá ser capaz de romper la prisión. El lanzador del conjuro no puede encerrarse a si mismo dentro de su propia prisión de oscuridad.",
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
        "nombre": "Esencia Oscura",
        "nivel": 96,
        "accion": "Activa",
        "tipo": "Efecto",
        "efecto": "Permite al lanzador o el objetivo designado por este entrar en un estado de completo letargo, mientras su cuerpo se hace uno con la oscuridad. La entidad abandona el mundo y asciende a la red de almas para nutrirse de sus energías. Apartado y desconocedor de todo lo que sucede en el exterior, multiplica por 10 su regeneración zeónica y cura sus heridas con Regeneración 16. Cuanto tiempo puede permanecer apartado del mundo es determinado por el grado del conjuro. si",
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
        "nombre": "Ascensión Oscura",
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
        "nombre": "Holocausto de Oscuridad",
        "nivel": 100,
        "accion": "Activa",
        "tipo": "Ataque, Anímico",
        "efecto": "Este conjuro desencadena el poder de la oscuridad en su estado más puro, arrasando todo lo que encuentra a su paso, tanto en el mundo material como en el espiritual. La energía liberada lo arrastra y devora todo, unificando toda existencia con las tinieblas. Incluso las criaturas elementales de oscuridad son asimiladas por su poder. El Holocausto crea una gran cúpula de tinieblas que ataca en la TA de energía. Cualquier ser que reciba daño, por mínimo que sea, deberá superar una RM contra 160 o será unificado con la oscuridad y, por tanto, destruido en cuerpo y alma de forma automática. No es posible designar blancos específicos en el radio del conjuro, y afectará a todos por igual salvo al lanzador.",
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

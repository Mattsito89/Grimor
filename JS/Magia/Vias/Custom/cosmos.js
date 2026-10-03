// Vía Custom: Cosmos — Libro del Cosmos.pdf
export const viaCosmos = {
    "id": "cosmos",
    "nombre": "Cosmos",
    "color": "#6366f1",
    "descripcion": "Hechizos creados por seguidores de las estrellas que aprovechan las propiedades y la historia asociada a sus representaciones. En grado Arcano obtienen un efecto adicional. Vínculos cerrados: Destrucción, Ilusión, Tierra, Oscuridad y Nigromancia.",
    "hechizos": [
        {
            "id": "crux",
            "nombre": "Crux",
            "nivel": 4,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero invoca estrellas artificiales en posición de cruz que apoyan al hechicero o a quien designe a localizar objetivos. Mejora la capacidad de rastrear.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 140,
                "arcano": 190
            },
            "inteligenciaRequerida": {
                "base": 4,
                "intermedio": 6,
                "avanzado": 8,
                "arcano": 12
            },
            "grados": {
                "base": "+45 a Rastrear.",
                "intermedio": "+90 a Rastrear.",
                "avanzado": "+135 a Rastrear.",
                "arcano": "+180 a Rastrear; otorga +2 al TM durante 5 minutos si ha logrado rastrear a su objetivo."
            },
            "mantenimiento": "No"
        },
        {
            "id": "andromeda",
            "nombre": "Andromeda",
            "nivel": 14,
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "El hechicero crea unas cadenas que sujetan al objetivo al suelo, generando que se sienta más pesado. El objetivo realiza un control enfrentado contra la fuerza del grado y obtiene -10 a Toda acción física por cada 2 puntos por los que haya fallado.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
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
                "base": "Fuerza 8.",
                "intermedio": "Fuerza 11.",
                "avanzado": "Fuerza 14.",
                "arcano": "Fuerza 16 y, además del penalizador a toda acción, el afectado obtiene un penalizador por presa menor."
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "id": "orion",
            "nombre": "Orion",
            "nivel": 24,
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "Las estrellas de Orion se alinean y prestan su ayuda al hechicero, lanzando estrellas envueltas en fuego para causar daño. Orion tiene CAL de crítico primario.",
            "zeon": {
                "base": 50,
                "intermedio": 120,
                "avanzado": 200,
                "arcano": 240
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "Una estrella con daño 40.",
                "intermedio": "Tres estrellas con daño 50.",
                "avanzado": "Cinco estrellas con daño 70.",
                "arcano": "Cinco estrellas con daño 90; dos estallan antes de impactar atacando en un área de 5 metros."
            },
            "mantenimiento": "No"
        },
        {
            "id": "can-mayor",
            "nombre": "Can Mayor",
            "nivel": 34,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Encantando un objeto inorgánico, el hechicero le otorga la lealtad del Can Mayor para que actúe como montura. Solo puede usarse en objetos de tamaño mediano a pequeño y no permite beneficiarse de los bonos de vuelo.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "Vuelo 8, Presencia máxima 30.",
                "intermedio": "Vuelo 10, Presencia máxima 60.",
                "avanzado": "Vuelo 12, Presencia máxima 90.",
                "arcano": "Vuelo 14, +30 al turno mientras se usa de montura, Presencia máxima 120."
            },
            "mantenimiento": "10 / 20 / 30 / 40 Diario"
        },
        {
            "id": "aries",
            "nombre": "Aries",
            "nivel": 44,
            "accion": "Pasiva",
            "tipo": "Defensa",
            "efecto": "El mago invoca la encarnación de Aries el carnero para que le defienda de ataques físicos y sobrenaturales y use su fuerza para defenderse de controles que la impliquen.",
            "zeon": {
                "base": 60,
                "intermedio": 120,
                "avanzado": 180,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 8,
                "avanzado": 11,
                "arcano": 14
            },
            "grados": {
                "base": "400 Puntos de Resistencia y Fuerza 7.",
                "intermedio": "800 Puntos de Resistencia y Fuerza 9.",
                "avanzado": "1500 Puntos de Resistencia y Fuerza 1.",
                "arcano": "2000 Puntos de Resistencia y Fuerza 13; si detiene el ataque, genera un impacto de Fuerza contra el objetivo si está a menos de 2 metros."
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "id": "casiopea",
            "nombre": "Casiopea",
            "nivel": 54,
            "accion": "Activa",
            "tipo": "Automático, Efecto",
            "efecto": "El mago invoca a la encarnación de Casiopea, que se convierte en una estatua y concentra parte del daño causado hacia ella. Redirige un porcentaje del daño recibido por los aliados.",
            "zeon": {
                "base": 150,
                "intermedio": 200,
                "avanzado": 250,
                "arcano": 300
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 14
            },
            "grados": {
                "base": "Redirige 30%; 2 TA; barrera 100; 100 de vida.",
                "intermedio": "Redirige 40%; 4 TA; barrera 100; 170 de vida.",
                "avanzado": "Redirige 50%; 6 TA; barrera 120; 240 de vida.",
                "arcano": "Redirige 60%; 8 TA; barrera 15; 350 de vida. Si un golpe dejaría al aliado con vida negativa, absorbe el 100% si su salud lo permite y se destruye."
            },
            "mantenimiento": "10 / 15 / 20 / 25"
        },
        {
            "id": "pisces",
            "nombre": "Pisces",
            "nivel": 64,
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Invoca a Venus y Cupido, dos peces unidos por una cuerda, para atraer inofensivamente al objetivo de Cupido hacia la posición de Venus. Requiere superar una resistencia.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "120 RM, 50 metros, 60 kg.",
                "intermedio": "140 RM, 150 metros, 120 kg.",
                "avanzado": "160 RM, 250 metros, 200 kg.",
                "arcano": "180 RM, 500 metros, 400 kg."
            },
            "mantenimiento": "No"
        },
        {
            "id": "perseo",
            "nombre": "Perseo",
            "nivel": 74,
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "Una de las Perseidas se desvía hacia el punto indicado. Es un ataque independiente, usa la proyección del lanzador sin penalizaciones y tarda 3 turnos en llegar. Consume la mitad de la vida actual del taumaturgo.",
            "zeon": {
                "base": 180,
                "intermedio": 240,
                "avanzado": 280,
                "arcano": 350
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 18
            },
            "grados": {
                "base": "Meteorito con daño 120.",
                "intermedio": "Meteorito con daño 140.",
                "avanzado": "Daño 160 y ataca en área a quienes hirieron al lanzador durante los últimos 3 turnos.",
                "arcano": "Igual que el anterior; si Perseo está desatado y asesina a uno de sus objetivos, revive a su lanzador con 1 punto de vida, inconsciente y estable."
            },
            "mantenimiento": "No"
        },
        {
            "id": "aquarius",
            "nombre": "Aquarius",
            "nivel": 84,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Vierte agua en un área que envuelve a los aliados, otorgando regeneración de vida y cansancio por turno y reduciendo penalizadores que no sean carencias.",
            "zeon": {
                "base": 150,
                "intermedio": 220,
                "avanzado": 280,
                "arcano": 350
            },
            "inteligenciaRequerida": {
                "base": 11,
                "intermedio": 12,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "+20 vida, -10 penalizadores no carencia, +1 cansancio, radio 5 m.",
                "intermedio": "+30 vida, -15 penalizadores no carencia, +1 cansancio, radio 25 m.",
                "avanzado": "+40 vida, -20 penalizadores no carencia, +2 cansancios, radio 50 m.",
                "arcano": "+60 vida, -30 penalizadores no carencia o -20 de carencia, +3 cansancios, radio 150 m, +40 RF entre vida y muerte y +5 Constitución para calcular el total para morir."
            },
            "mantenimiento": "10 / 15 / 20 / 40"
        },
        {
            "id": "hidra",
            "nombre": "Hidra",
            "nivel": 94,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El objetivo obtiene los beneficios de la Hidra: inmunidad a efectos de crítico, aumento de vida y creación de copias cuando pierde vida.",
            "zeon": {
                "base": 600,
                "intermedio": 800,
                "avanzado": 1200,
                "arcano": 1600
            },
            "inteligenciaRequerida": {
                "base": 15,
                "intermedio": 17,
                "avanzado": 18,
                "arcano": 20
            },
            "grados": {
                "base": "+200 vida; clones con -80 a toda habilidad ofensiva y defensiva.",
                "intermedio": "+400 vida; clones con -60.",
                "avanzado": "+600 vida; clones con -40.",
                "arcano": "+800 vida; clones con -20."
            },
            "mantenimiento": "80 / 120 / 160 / 200 Diario"
        }
    ]
};

// Sub-vía Custom: Astrología — complemento fanmade «Ad Astra»
export const subviaAstrologia = {
    "id": "astrologia",
    "nombre": "Astrología",
    "color": "#f59e0b",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Nigromancia, Creación, Destrucción, Esencia",
    "descripcion": "Esta sub-vía a está centrada en la canalización de los poderes del brujo a través de la fuerza de las constelaciones. Gracias a ellas, el hechicero es capaz de bendecir o resaltar facetas anexas a cada constelación o incluso utilizar el poder de algunas de ellas para manifestarlas en el mundo y atacar a sus enemigos.",
    "hechizos": [
        {
            "id": "cygnus",
            "nombre": "Cygnus",
            "nivel": 4,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Bajo la bendición del cisne, el mago o quién este seleccione goza de una presencia imponente y con gracia. A efectos de juego otorga a las secundarias de Estilo y Etiqueta una habilidad base indicada por el grado del conjuro.",
            "zeon": {
                "base": 40,
                "intermedio": 80,
                "avanzado": 120,
                "arcano": 180
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "40 en estilo y etiqueta.",
                "intermedio": "80 en estilo y etiqueta.",
                "avanzado": "120 en estilo y etiqueta.",
                "arcano": "180 en estilo y etiqueta."
            },
            "mantenimiento": "5 / 5 / 10 / 10 Diario"
        },
        {
            "id": "lupus",
            "nombre": "Lupus",
            "nivel": 14,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Aquellos a los cuales el lobo concede su gracia gozan de la energía de una manada, así como el carisma de un alfa. Dicha constelación otorga al mago o a quién este designe una habilidad en Atletismo y Liderazgo base indicada por el grado del conjuro.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 140,
                "arcano": 180
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "40 en atletismo y liderazgo.",
                "intermedio": "80 en atletismo y liderazgo.",
                "avanzado": "120 en atletismo y liderazgo.",
                "arcano": "180 en atletismo y liderazgo."
            },
            "mantenimiento": "5 / 10 / 10 / 15 Diario"
        },
        {
            "id": "ursa",
            "nombre": "Ursa",
            "nivel": 24,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Aquellos que reposan bajo la mirada de la constelación de Ursa, son bendecidos con un profundo y reconfortante descanso. A efectos de juego otorga al mago o a quién este designe obtendrá un nivel de regeneración indicado en el grado del conjuro. La contraparte de este hechizo es que durante el tiempo que dure el sueño del objetivo hechizado mantendrá ese sueño profundo, otorgando la desventaja con el mismo nombre mientras dure el reposo.",
            "zeon": {
                "base": 100,
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
                "base": "Regeneración 6.",
                "intermedio": "Regeneración 8.",
                "avanzado": "Regeneración 10.",
                "arcano": "Regeneración 14."
            },
            "mantenimiento": "No"
        },
        {
            "id": "monoceros",
            "nombre": "Monoceros",
            "nivel": 34,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Los dotados por los conocimientos que brinda el cuerpo del unicornio, obtendrán la capacidad para curar y sanar las heridas de los demás, otorgando a estos una habilidad base en Medicina y además en Venenos para identificar el tipo de veneno y poder desarrollar antídotos en contra de estos.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "40 en Medicina y Venenos.",
                "intermedio": "80 en Medicina y Venenos.",
                "avanzado": "120 en Medicina y Venenos.",
                "arcano": "180 en Medicina y Venenos."
            },
            "mantenimiento": "5 / 10 / 15 / 20 Diario"
        },
        {
            "id": "pegaso",
            "nombre": "Pegaso",
            "nivel": 44,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Respondiendo a la llamada del hechicero, la constelación del Pegaso se manifiesta y desciende desde el firmamento, como un enorme ser capaz de surcar los cielos a grandes velocidades. Este ser está únicamente hecho para servir como montura a su señor y se defenderá siguiendo las normas de acumulación. La criatura tiene un TM distinto dependiendo de si se encuentra volando o en tierra y dispone de un Atletismo 140 para los controles.",
            "zeon": {
                "base": 100,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "Vuelo Natural 8, TM 6, Fuerza 8, Tamaño Máximo 16, 600 PVs.",
                "intermedio": "Vuelo Natural 10, TM 8, Fuerza 10, Tamaño Máximo 18, 800 PVs.",
                "avanzado": "Vuelo Natural 12, TM 8, Fuerza 10, Tamaño Máximo 20, 1200 PVs.",
                "arcano": "Vuelo místico 14, TM 10, Fuerza 12, Tamaño Máximo 22, 1500 PVs."
            },
            "mantenimiento": "15 / 20 / 25 / 30 Diario"
        },
        {
            "id": "phoenix",
            "nombre": "Phoenix",
            "nivel": 54,
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "Con un estallido en llamas, feroces, la constelación del Fénix aparece con una deflagración al lado del hechicero, a quién este indicará el objetivo de sus llamas. El Fénix irá a toda velocidad e impactará contra el objetivo señalado, causando daños por fuego y tras unos segundos, explotará dejando atrás una zona en llamas.\n\nEl objetivo del conjuro en el momento del impacto y cualquiera que se mantenga dentro de la zona en el final del siguiente asalto mientras dure el efecto, tendrá que superar una RF o sufrir un control en la tabla de «En llamas» con un bono equivalente al nivel de fracaso.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 240
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "Daño 60. El fuego residual dura 1 turno en un área de 3 metros. RF 120.",
                "intermedio": "Daño 80. El fuego residual dura 2 turnos en un área de 5 metros. RF 140.",
                "avanzado": "Daño 100. El fuego residual dura 3 turnos en un área de 10 metros. RF 160",
                "arcano": "Daño 120. El fuego residual dura 5 turnos en un área de 15 metros. RF 180."
            },
            "mantenimiento": "No"
        },
        {
            "id": "carta-astral",
            "nombre": "Carta Astral",
            "nivel": 64,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero canaliza Zeón para manipular la realidad de un individuo y generar en base a una serie de parámetros una carta astral, indicando los factores y facetas más relevantes de cada individuo según las constelaciones que estuvieron presentes en su nacimiento. Por ello, al generar la carta astral de un individuo, obtendrá distintos bonos dependiendo de su fecha de nacimiento.\n\nEn caso de que un objetivo no conozca su fecha de nacimiento puede tirarse 1d4 para calcular cuál de las bendiciones obtiene, pero estas jamás podrán volver a variar.\n\nFuego: Abril, Agosto, Diciembre.\nAgua: Julio, Noviembre, Marzo.\nAire: Junio, Octubre, Febrero.\nTierra: Mayo, Septiembre, Enero.",
            "zeon": {
                "base": 120,
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
                "base": "Fuego — +5 a toda acción física.\nAgua — +5 al ACT.\nAire — +20 al turno.\nTierra — +2 TA.",
                "intermedio": "Fuego — +10 a toda acción física.\nAgua — +5 al ACT.\nAire — +30 al turno.\nTierra — +3 TA.",
                "avanzado": "Fuego — +15 a toda acción física.\nAgua — +10 al ACT.\nAire — +40 al turno.\nTierra — +4 TA.",
                "arcano": "Fuego — +20 a toda acción física.\nAgua — +15 al ACT.\nAire — +60 al turno.\nTierra — +5 TA."
            },
            "mantenimiento": "10 / 15 / 20 / 25 Diario"
        },
        {
            "id": "ara",
            "nombre": "Ara",
            "nivel": 74,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Al conjurar el altar de la constelación Ara, el hechicero puede utilizar ese mismo altar para alimentar una construcción o lugar que requieran de un núcleo místico. Podría alimentar por ejemplo un Sanctum Sanctorum con la energía y el poder que el altar emana, utilizando sus propias energías místicas en lugar de las del hechicero. Esto no exime al hechicero de conseguir los materiales necesarios para la creación del mismo, pero sí que otorga una cantidad de puntos de Zeón y en grados avanzados de Poder artificiales que podrá utilizar en lugar de invertir los suyos propios a la hora de crear el Sanctum Sanctorum. El nivel máximo de Sanctum Sanctorum que puede beneficiarse de estos efectos viene dado en el grado del conjuro.",
            "zeon": {
                "base": 250,
                "intermedio": 500,
                "avanzado": 750,
                "arcano": 1000
            },
            "inteligenciaRequerida": {
                "base": 12,
                "intermedio": 14,
                "avanzado": 16,
                "arcano": 18
            },
            "grados": {
                "base": "Otorga el equivalente a 50 puntos de Zeón a la hora de realizar el ritual. Sanctum Sanctorum de nivel 1.",
                "intermedio": "Como el anterior, pero otorga 100 puntos de Zeón. Sanctum Sanctorum de nivel 2.",
                "avanzado": "Como el anterior, pero otorga 150 puntos de Zéon. Sanctum Sanctorum de nivel 3.",
                "arcano": "Como el anterior, pero el Zeón aumenta a 200 y además otorga el equivalente a 1 punto de poder para adquirir una Efecto Mayor. Sanctum Sanctorum de nivel 4."
            },
            "mantenimiento": "20 / 40 / 60 / 80 Diario"
        },
        {
            "id": "horologium",
            "nombre": "Horologium",
            "nivel": 84,
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Manifestando la constelación del reloj de péndulo, las hebras mágicas se atan al enemigo e intentan atraparlo a la vez que las manecillas del reloj se ajustan y comienza una cuenta regresiva. El hechicero podrá imponer una condición para que estas hebras se deshagan y el reloj deje de aplastar al objetivo, que en caso de no cumplirlo se verá afectado por el estado de dolor hasta que lo logre.\n\nDependiendo del grado del conjuro las condiciones serán de menor o mayor complejidad. Por ejemplo, alguien que lance el conjuro en grado base podría por ejemplo poner como condición tener que recorrer 2 kilómetros, comer algo que está a disposición del entorno o tener que hacer una actuación o cantar. Mientras que alguien que lo lance en grado avanzado podría imponer alguna condición como tener que hacerse amigo de una persona o descubrir algún secreto, recuperar algún objeto…\n\nEn caso de superar el tiempo otorgado, el afectado sentirá un fuerte dolor que no desaparecerá hasta que haya completado la condición, momento en que el hechizo desaparece.\n\nEl objetivo del conjuro conoce de manera sobrenatural lo que tiene que hacer para deshacerse de esas fibras mágicas que únicamente él puede ver.",
            "zeon": {
                "base": 200,
                "intermedio": 350,
                "avanzado": 500,
                "arcano": 700
            },
            "inteligenciaRequerida": {
                "base": 11,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "RM 140. Condición muy simple. Tiempo superior a 1 día.",
                "intermedio": "RM 160. Condición simple. Tiempo superior a 1 semana.",
                "avanzado": "RM 180. Condición completa. Tiempo superior a 1 mes. Puede causar dolor extremo en lugar de simplemente dolor.",
                "arcano": "RM 200. Condición extremadamente compleja. Tiempo superior a 1 año. Puede causar dolor extremo en lugar de simplemente dolor, e incluso la muerte si se le otorgan mínimo 2 años, pero en ese caso la RM baja a 180."
            },
            "mantenimiento": "No"
        },
        {
            "id": "dracos",
            "nombre": "Dracos",
            "nivel": 94,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Entrelazando los caminos de las estrellas y creando la enorme constelación de Draco, esta comienza a precipitarse sobre la tierra y deja un cráter en el lugar donde dos criaturas extienden sus alas, dejando atrás su forma esférica para dar a luz a dos dragones crepitantes de energía que responden a las órdenes del hechicero.\n\nA efectos de juego permite al hechicero invocar dos enormes dragones del nivel especificado por el grado del conjuro. En contra de las normas generales, estos dos dragones se consideran entre mundos, especiales e inmunes a habilidades de convocatoria. Adicionalmente, el aliento de ambos dragones ataca en la TA de ENErgía, pero uno de ellos se considera un ataque elemental de Fuego y Oscuridad mientras que el otro se considera un ataque elemental de Hielo y Luz.",
            "zeon": {
                "base": 400,
                "intermedio": 600,
                "avanzado": 800,
                "arcano": 1000
            },
            "inteligenciaRequerida": {
                "base": 11,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "Permite invocar dos dragones de energía de nivel 7 (Menor).",
                "intermedio": "Permite invocar dos dragones de energía de nivel 9 (Mayor).",
                "avanzado": "Permite invocar dos dragones de energía de nivel 11 (Antiguo).",
                "arcano": "Permite invocar dos dragones de energía de nivel 13 (Ancestral)."
            },
            "mantenimiento": "15 / 30 / 45 / 60"
        }
    ]
};

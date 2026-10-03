// Sub-vía oficial extraída de Subvías.pdf.
export const subviaTiempo = {
    "id": "tiempo",
    "nombre": "Tiempo",
    "color": "#06b6d4",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Nigromancia, Aire, Agua, Fuego, Tierra, Esencia",
    "hechizos": [
        {
            "nombre": "Conocimiento Temporal",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El personaje puede percibir sobrenaturalmente el paso del tiempo.",
            "zeon": {
                "base": 30,
                "intermedio": 50,
                "avanzado": 70,
                "arcano": 90
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 5
            },
            "grados": {
                "base": "Permite percibir sobrenaturalmente la hora y fecha que es en ese instante determinado usando el calendario conocido por el lanzador.",
                "intermedio": "Como en grado base, pero el lanzador siente además con absoluta exactitud los segundos y milésimas de segundo. Además, permite sentir si existe alguna clase de alteración sobrenatural en el fluir del tiempo.",
                "avanzado": "Como en grado intermedio, pero el personaje puede fijar una alarma desde ese momento hasta que trascurra un periodo de tiempo que él mismo determine, sintiendo automáticamente cuando llegue dicho instante. Por ejemplo, podría determinar que quiere notar cuando pase un periodo de cuatro horas, doce minutos y siete segundos.",
                "arcano": "Como en grado avanzado, pero el lanzador puede calcular el periodo de tiempo que va a tardar algo en concluir, como cuanto le costará a una persona que anda a velocidad constante cruzar una playa, cuanto va a tardar una melodía en ocurrir."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Aceleración Temporal",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El brujo acelera su esencia ante el fluir del tiempo. Mientras que él percibe el mundo a cámara lenta, el resto sólo ve un borrón en movimiento. A efectos de juego, otorga diferentes bonos al lanzador o al individuo designado por este indicados por el grado del conjuro.",
            "zeon": {
                "base": 100,
                "intermedio": 140,
                "avanzado": 180,
                "arcano": 240
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "+1 Tipo de Movimiento / +20 al Turno / +10 a Toda Acción.",
                "intermedio": "+2 Tipos de Movimientos / +30 al Turno / +15 a Toda Acción.",
                "avanzado": "+2 Tipos de Movimientos / +40 al Turno / +20 a Toda Acción.",
                "arcano": "+3 Tipos de Movimientos / +50 al Turno / +25 a Toda Acción."
            },
            "mantenimiento": "10 / 15 / 20 / 25"
        },
        {
            "nombre": "Lentitud Temporal",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este conjuro afecta un área determinada de terreno dentro de la cual todo aquel individuo designado por el lanzador es arrastrado a un flujo temporal retardado. En consecuencia, los afectados se mueven mucho más lentamente, sufriendo así diversos penalizadores reflejados en los diferentes grados del sortilegio. El área afectada por Lentitud Temporal permanece estática en el lugar donde es lanzada. Para resistirse a sus efectos, es necesario superar una RM, pero alguien que haya fallado el control no podrá repetirlo hasta que salga de la influencia del conjuro.",
            "zeon": {
                "base": 100,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "-2 Tipos de Movimiento / -40 al Turno / 10 metros de radio / 100 RM.",
                "intermedio": "-4 Tipos de Movimiento / -60 al Turno / -10 a Toda Acción / 25 metros de radio / 120 RM.",
                "avanzado": "-6 Tipos de Movimiento / -80 al Turno / -20 a Toda Acción / 50 metros de radio / 140 RM.",
                "arcano": "-8 Tipos de Movimiento / -100 al Turno / -30 a Toda Acción / 100 metros de radio / 160 RM."
            },
            "mantenimiento": "10 / 15 / 20 / 25"
        },
        {
            "nombre": "Estancar el Tiempo",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Este conjuro crea una burbuja sobrenatural que estanca el flujo de tiempo haciendo que, hasta que el sortilegio deje de funcionar, el estado de las cosas que se encuentran en su interior no pueda cambiar. A efectos de juego este hechizo memoriza el estado y condición actual de todo cuanto se encuentra en un radio de acción determinado por el grado del sortilegio en el instante en el que es lanzado, impidiendo en todo momento que, por mucho daño que cosas o personas reciban a partir de entonces, sus efectos o consecuencias puedan aparecer aún en su cuerpo. Por ejemplo, mientras este conjuro se mantenga, un personaje herido permanecerá con la misma cantidad de puntos de vida perdidos incluso si posteriormente recibe nuevos ataques que puedan llegar a producirle daño adicional o incluso matarle. De igual forma, los efectos negativos de carácter físico, como dolor o cansancio, tampoco tendrán efecto en ese momento. Lamentablemente, Estancar el Tiempo sólo puede retrasar los efectos de lo que realmente ha sucedido, y nunca evitarlos, por lo que todo perjuicio que un individuo o cosa haya sufrido durante el lapso de tiempo estancado aparecerá de inmediato en cuanto el conjuro finalice o salgan de su zona de influencia. Eso significa que, si alguien ha muerto en el interior de una zona estancada, por mucha curación que reciba posteriormente no podrá ser salvado cuando el conjuro finalice; ya estará muerto desde hace mucho. El brujo puede elegir libremente que es afectado y que no, siendo capaz de decidir que cosas pueden ser destruidas y cuales no. No obstante, este sortilegio nunca afecta al propio lanzador, pues es el nexo que vincula el pasado con el presente. El área afectada por Estancar el Tiempo permanece estática en el lugar donde es lanzada.",
            "zeon": {
                "base": 150,
                "intermedio": 200,
                "avanzado": 280,
                "arcano": 380
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "5 metros.",
                "intermedio": "10 metros.",
                "avanzado": "25 metros.",
                "arcano": "50 metros."
            },
            "mantenimiento": "15 / 20 / 30 / 40"
        },
        {
            "nombre": "Detener el Tiempo",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Este hechizo hace que el tiempo se detenga en el interior de un espacio determinado. Todo aquel individuo o cosa que, a partir del asalto posterior al lanzamiento del conjuro, se encuentre en el interior de su zona de efecto quedará congelado en el tiempo si no supera una RM. Las personas o cosas congeladas en el tiempo son completamente sólidas, por lo que nada puede interactuar con ellas, tocarlas no dañarlas de forma alguna, ni interactuar con nada más. Los seres con Gnosis 40 o superior pueden ignorar este hecho, siendo capaces de interactuar libremente con las cosas congeladas sin problema alguno. Alguien afectado por este conjuro sólo puede repetir el control de RM una vez al día. El área afectada por Detener el Tiempo permanece estática en el lugar donde es lanzada, y no es posible elegir blancos en su interior; afecta por igual todo cuanto se encuentre dentro de ella salvo al propio lanzador.",
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
                "base": "120 RM / 10 metros.",
                "intermedio": "140 RM / 25 metros.",
                "avanzado": "160 RM / 50 metros.",
                "arcano": "180 RM / 100 metros."
            },
            "mantenimiento": "40 / 60 / 80 / 100 Diario"
        },
        {
            "nombre": "Retroevolucionar",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Anímico.",
            "efecto": "Este sortilegio afecta la esencia de un objetivo, haciendo que su “existencia” retroceda en el tiempo. Naturalmente, el afectado no viaja al pasado propiamente; es su esencia la que regresa a un momento anterior de su vida. De ese modo, un anciano volvería a ser joven o un hombre adulto podría llegar a convertirse en un simple niño (o incluso un bebe). Lamentablemente, el tiempo retrocedido se borra de la vida del individuo, por lo que el afectado pierde esa parte de su vida, olvidando sus recuerdos o incluso perdiendo (o ganando) las capacidades que ha tenido anteriormente. Naturalmente, si es necesario es incluso posible alterar el nivel del afectado. Este conjuro no permite recuperar miembros cercenados ni anular efectos o daños producidos por seres de Gnosis 40 o superior. Para resistirse a sus efectos, es necesario realizar un control de RM contra la dificultad determinada por el grado del conjuro.",
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
                "base": "120 RM / Retrocede hasta un día.",
                "intermedio": "140 RM / Retrocede hasta un mes.",
                "avanzado": "160 RM / Retrocede hasta un año.",
                "arcano": "180 RM / Retrocede hasta una década."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Deshacer el Tiempo",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este conjuro permite hacer que las fibras del tiempo retrocedan unos instantes en una zona determinada, deshaciendo cualquier suceso que haya acontecido en dicho periodo. De esa manera, se puede repetir nuevamente unos cuantos asaltos o incluso devolver a la vida a alguien que hubiera muerto en ese periodo de tiempo. Únicamente el lanzador, los seres con Gnosis 15 puntos superior a su natura o criaturas de naturaleza divina serán conscientes de lo que ha pasado en el periodo de tiempo deshecho; para el resto esos momentos nunca habrán pasado. Este conjuro no permite deshacer las acciones en las que esté directamente involucrado un ser con Gnosis 40 o superior, salvo si el lanzador tiene a su vez un Gnosis aún más elevado, ni tampoco devolver a la vida a alguien cuya alma ha quedado descreada. Es importante puntualizar que en realidad el tiempo en general no retrocede, sino que separa una parte del mundo del continuo espaciotiempo natural y lo hace retroceder brevemente. Por lo tanto, se crea una breve distorsión temporal que la existencia se ocupará de arreglar del modo menos dañino. 1 Tanto el área afectada como el periodo de tiempo que es posible retroceder son determinados por el grado del conjuro. No hay tirada de Resistencia posible.",
            "zeon": {
                "base": 350,
                "intermedio": 500,
                "avanzado": 800,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 11,
                "intermedio": 14,
                "avanzado": 16,
                "arcano": 18
            },
            "grados": {
                "base": "15 segundos (5 asaltos) / 50 metros.",
                "intermedio": "30 segundos (10 asaltos) / 150 metros.",
                "avanzado": "Un minuto / 250 metros.",
                "arcano": "Una hora / 1 kilómetro."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Salto Temporal",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Este conjuro afecta a un individuo o cosa haciendo que dé un salto temporal al futuro. A efectos de juego, el blanco del conjuro desaparece de donde está, apareciendo en el mismo sitio cierto periodo de tiempo después. Mientras que para él únicamente cambia el entorno y no percibe lapso alguno, quienes estaban a su lado en ese instante lo ven esfumarse por completo. El lanzador es quien elige cuanto tiempo adelanta el afectado, siempre que este no se exceda de los límites determinados por el grado del conjuro. No obstante, hay un límite a sus efectos; existen ciertos momentos en la historia que marcan acontecimientos tan importantes existencialmente que son imposibles de evitar. Por eso, si el periodo de tiempo que adelanta un salto temporal pasa a través de uno de ellos, el individuo que esté saltando detendrá su avance, dando por finalizado el sortilegio antes de lo previsto. El objetivo del conjuro puede resistirse a sus efectos superando una RM.",
            "zeon": {
                "base": 250,
                "intermedio": 350,
                "avanzado": 450,
                "arcano": 600
            },
            "inteligenciaRequerida": {
                "base": 11,
                "intermedio": 14,
                "avanzado": 16,
                "arcano": 18
            },
            "grados": {
                "base": "Hasta diez minutos / 120 RM.",
                "intermedio": "Hasta un día / 160 RM.",
                "avanzado": "Hasta un mes / 200 RM.",
                "arcano": "Hasta un año / 240 RM."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Bucle Temporal",
            "nivel": "84",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este hechizo crea un bucle en un periodo de tiempo, haciendo que la historia se repita constantemente una y otra vez. Mientras el sortilegio se mantenga, al llegar el final del periodo determinado por el lanzador el tiempo se reinicia, dando nuevamente comienzo a los mismos acontecimientos. Salvo los individuos designados por el lanzador o quienes que tengan más de Gnosis 35 (o, en su defecto, aquellos cuyo Gnosis sea por lo menos 15 puntos por encima de su Natura), nadie será consciente de que la historia se repite. Este conjuro tiene un área de efecto definida y, sin embargo, ello no significa que el tiempo avance fuera de esa zona. Cuando el conjuro finaliza, únicamente se considera que el último lapso de tiempo ha tenido verdaderamente lugar. Los seres con Gnosis 40 o mayor son conscientes de inmediato del lugar y posicionamiento de todos los bucles temporales existentes en ese instante. Si lo desea, el lanzador puede imponer un acontecimiento como final del sortilegio, haciendo que, en caso de ocurrir las cosas como ha designado, el hechizo termine de inmediato. El mantenimiento de este sortilegio se calcula de un modo especial. Al contrario de las reglas generales, el hechicero debe de pagar el coste de mantenimiento al finalizar cada uno de los periodos que ha designado. Es decir, en caso de que establezca que el bucle temporal fuera de diez minutos, sería al transcurrir ese periodo cuando debería gastar su Zeon. Lamentablemente, al atar su esencia a un momento estático de la historia el lanzador de Bucle Temporal no puede recuperar Zeon de ningún modo mientras mantenga activo el conjuro. No hay tirada de Resistencia posible contra un Bucle Temporal. Limitación Especial: En contra de las reglas generales de conjuros de Libre Acceso y sub-vías, Bucle Temporal se considera un conjuro de Alta Magia.",
            "zeon": {
                "base": 400,
                "intermedio": 600,
                "avanzado": 900,
                "arcano": 1400
            },
            "inteligenciaRequerida": {
                "base": 11,
                "intermedio": 14,
                "avanzado": 16,
                "arcano": 18
            },
            "grados": {
                "base": "250 metros de radio / Hasta un día.",
                "intermedio": "500 metros de radio / Hasta una semana.",
                "avanzado": "1 kilómetro de radio / Hasta un mes.",
                "arcano": "5 kilómetros de radio / Hasta un año."
            },
            "mantenimiento": "40 / 60 / 90 / 140 (Especial)"
        },
        {
            "nombre": "Solapar el Tiempo",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este hechizo permite al lanzador crear un punto de unión entre el presente y el pasado, haciendo que ambos instantes se unan en uno. Al hacerlo, todo lo que hubiera en el momento designado por el hechicero dentro de la zona que determine el grado del conjuro se manifiesta en el presente, como si siempre hubiera estado ahí. En realidad, el pasado no se altera en absoluto; es el presente el que se modifica, al colarse en este una línea temporal anterior. Eso significa que, tanto personas o cosas que existieran en ese momento y lugar, reaparecen en la actualidad. No hay límite a la cantidad de elementos que son traídos dentro de la zona afectada; puede desde manifestarse ejércitos enteros hasta ciudades que existieron eones atrás. Los seres y objetos aparecidos no son realmente copias, pero al mismo tiempo, tampoco son completamente reales; se trata de seres fuera de su línea temporal, cuya existencia prolongada es, en el mejor de los casos, innatural. En el caso de que se superpongan dos cosas idénticas en el mismo lugar (como es habitual en las construcciones duraderas y los accidentes geográficos), se impondrá la que tuviera más presencia en ese momento o, en el caso de ambas presencias sean muy parecidas, se mezclarán dando como resultado un punto intermedio entre ambas. De darse el caso de que una misma persona estuviera en el mismo lugar en ambos momentos, el resultado es siempre inestable; es posible que o bien se fusionen en uno, que existan como entes separados, o incluso que ambos sean completamente destruidos. No obstante, este conjuro también tiene sus límites. En primer lugar, no se puede “traer” del pasado a alguien o algo que haya sido descreado o cuya alma fuese destruida (en el segundo de estos casos, su cuerpo sí aparecería, pero sería poco más que una carcasa vacía). Además, si se trae un objeto único de Nivel de Poder 5 que sigue existiendo en la actualidad, la manifestación del objeto sería incompleta, poseyendo cualidades muy inferiores a las del que sigue existiendo. Limitación Especial: En contra de las reglas generales de conjuros de Libre Acceso y sub-vías, Solapar el Tiempo se considera un conjuro de Magia Divina.",
            "zeon": {
                "base": 500,
                "intermedio": 800,
                "avanzado": 1250,
                "arcano": 2500
            },
            "inteligenciaRequerida": {
                "base": 12,
                "intermedio": 15,
                "avanzado": 17,
                "arcano": 19
            },
            "grados": {
                "base": "5 metros de radio / Hasta un año en el pasado.",
                "intermedio": "25 metros de radio / Hasta una década en el pasado.",
                "avanzado": "500 metros de radio / Hasta un siglo en el pasado.",
                "arcano": "1 kilómetro de radio / Hasta mil años en el pasado."
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

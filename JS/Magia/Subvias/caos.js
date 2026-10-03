// Sub-vía oficial extraída de Subvías.pdf.
export const subviaCaos = {
    "id": "caos",
    "nombre": "Caos",
    "color": "#f59e0b",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Nigromancia, Ilusión, Esencia, Fuego, Tierra, Agua",
    "hechizos": [
        {
            "nombre": "Sentir el Caos",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Efecto, Detección",
            "efecto": "El hechicero es capaz de notar las fluctuaciones provocadas por el caos en el ambiente, permitiéndole sentir cualquier cosa innatural para la realidad que ocurra dentro del área del conjuro. No determina la localización exacta, pero si es consciente del nivel de influencia que el caos provoca en la existencia.",
            "zeon": {
                "base": 50,
                "intermedio": 80,
                "avanzado": 100,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 5
            },
            "grados": {
                "base": "50 metros de radio.",
                "intermedio": "100 metros de radio.",
                "avanzado": "250 metros de radio.",
                "arcano": "500 metros de radio / El hechicero percibe la presencia de cualquier ser con Gnosis superior a 20 o Natura superior a 10 que esté dentro de la zona de acción del conjuro si estos no superan una RM contra 160."
            },
            "mantenimiento": "5 / 10 / 10 / 15 Diario"
        },
        {
            "nombre": "Aura de Caos",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero provoca una oleada de energía que altera las posibilidades forzando resultados caóticos e impredecibles. Mientras este sortilegio se encuentre activo, todas las personas se comportan como si tuvieran Natura 10 (aunque, a efectos de su importancia en la realidad, mantienen su valor original) y todo tipo de sucesos inusuales e imposibles ocurren sin parar. Dicho de otro modo, es como si la suerte se hubiera vuelto loca, y todo pudiera ocurrir. En el momento de lanzar este conjuro, el hechicero debe decidir si lo deja fijo en una zona determinada o hace que el aura se mueva consigo.",
            "zeon": {
                "base": 60,
                "intermedio": 90,
                "avanzado": 120,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 6
            },
            "grados": {
                "base": "RM 80 / 10 metros de radio / Presencia máxima 100.",
                "intermedio": "RM 100 / 20 metros de radio / Presencia máxima 120.",
                "avanzado": "RM 120 / 40 metros de radio / Presencia máxima 140.",
                "arcano": "RM 140 / 60 metros de radio / Presencia máxima 160."
            },
            "mantenimiento": "15 / 20 / 25 / 30"
        },
        {
            "nombre": "Alteración de la Probabilidad",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "El hechicero o el personaje que este elija sufre una alteración temporal de su naturaleza, siendo capaz de realizar con mucha más facilidad acciones extremas, tanto para bien como para mal. En consecuencia, incrementa su rango de pifia y tirada abierta, en los valores indicados por el grado del conjuro. Por ejemplo, alguien sin maestría que fuera afectado por este conjuro en grado base, pifiaría con un resultado de 5 y obtendría una tirada abierta con un 85.",
            "zeon": {
                "base": 80,
                "intermedio": 100,
                "avanzado": 120,
                "arcano": 140
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 8
            },
            "grados": {
                "base": "+2 al rango de pifia / -5 al rango de tirada abierta.",
                "intermedio": "+4 al rango de pifia / -10 al rango de tirada abierta.",
                "avanzado": "+6 al rango de pifia / -15 al rango de tirada abierta.",
                "arcano": "+8 al rango de pifia / -20 al rango de tirada abierta."
            },
            "mantenimiento": "20 / 20 / 25 / 30"
        },
        {
            "nombre": "Alterar la Suerte",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "El blanco de este conjuro ven incrementados los resultados producidos por el azar y la suerte del modo deseado por el hechicero, de manera que cualquier situación que se vea determinada por el azar obtiene siempre resultados desmesurados, ya sea para bien o para mal. Un jugador de cartas, por ejemplo, obtendrían continuamente resultados increíblemente afortunados o desastrosos. Los personajes con la Ventajas y Desventaja Afortunado y Desafortunado ven incrementados exponencialmente sus efectos. Es posible evitar sus efectos superando una RM contra el valor determinado por el grado del conjuro.",
            "zeon": {
                "base": 140,
                "intermedio": 250,
                "avanzado": 400,
                "arcano": 80
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "RM 120.",
                "intermedio": "RM 140.",
                "avanzado": "RM 160 / La suerte concedida es algo desproporcionado, rozando lo absurdo.",
                "arcano": "RM 180 / Como en grado avanzado, pero aún salvo al enfrentarse a entes sobrenaturales de Gnosis o Natura elevada, el personaje siempre ganará o perderá contra cualquier persona en todo aquello que pueda estar relacionada con la suerte."
            },
            "mantenimiento": "10 / 10 / 15 / 15"
        },
        {
            "nombre": "Caminos del Caos",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "El hechicero puede repetir cierta cantidad de tiradas por asalto, siempre y cuando ninguna de ellas sea un resultado de pifia. No es posible afectar dos veces la misma tirada.",
            "zeon": {
                "base": 120,
                "intermedio": 180,
                "avanzado": 280,
                "arcano": 400
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "Una tirada por asalto.",
                "intermedio": "Dos tiradas por asalto.",
                "avanzado": "Tres tiradas por asalto.",
                "arcano": "Cuatro tiradas por asalto o una que sea un resultado de pifia."
            },
            "mantenimiento": "20 / 20 / 25 / 30"
        },
        {
            "nombre": "Aberración Caótica",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Crea un engendro solidificado el caos que haya en el ambiente. El lanzador no tiene poder alguno sobre él, y se comportará de un modo completamente impredecible (aunque por regla general, siempre de un modo violento). El ente debe de ser desarrollado como un Ser Entre Mundos usando las reglas descritas en el Capítulo 26 del libro básico, pero el lanzador solamente puede elegir gastar voluntariamente la mitad de los PD de la criatura, mientras que la otra mitad serán determinados al azar por el Director de Juego. La criatura tendrá un Gnosis determinado por el grado del conjuro, 20. Sin importar el Grado en el que el conjuro sea lanzado, este sortilegio no permite crear criaturas de un nivel superior al del hechicero, ya que estas se basan en la presencia espiritual del mismo. Los engendros del caos no tienen la capacidad de recibir un alma, por lo que no es posible darles vida independiente mediante el conjuro de Otorgar Alma, ni transmigrar un espíritu en ellos.",
            "zeon": {
                "base": 120,
                "intermedio": 200,
                "avanzado": 300,
                "arcano": 700
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
            "mantenimiento": "No"
        },
        {
            "nombre": "Mutación Caótica",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El objetivo de este conjuro sufre serias mutaciones en su cuerpo, alterando tanto su fisionomía como sus capacidades. Al usar Mutación Caótica, el hechicero o el individuo que éste determine consigue PD adicionales para obtener Poderes de monstruo como si fuera un Ser Entre Mundos con Gnosis 25. No obstante, únicamente puede elegir gastar voluntariamente la mitad de dichos PD, mientras que la otra mitad serán determinados al azar por el Director de Juego. Por regla general, los poderes que provoca este conjuro siempre dejan visibles cambios físicos. Una persona puede tratar de resistirse a sus efectos, siempre y cuando supere la RM determinada por el grado del conjuro. El exceso de PD aumenta el nivel del personaje. Este conjuro sólo puede ser lanzado sobre un individuo una sola vez.",
            "zeon": {
                "base": 200,
                "intermedio": 400,
                "avanzado": 800,
                "arcano": 1200
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "100 PD / 100 RM.",
                "intermedio": "200 PD / 120 RM.",
                "avanzado": "300 PD / 140 RM.",
                "arcano": "400 PD / Gnosis 30 / 160 RM."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Control del Caos",
            "nivel": "84",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El hechicero tiene la capacidad de doblegar la naturaleza del caos a su antojo, pudiendo usarlo para obtener los resultados que desee. De ese modo, puede hacer desde cosas tan simples como que una silla se rompa hasta que el espacio se pliegue creando portales. Es importante puntualizar que este conjuro no otorga a un personaje un control del caos si este no existe como tal en una zona, por lo que cuanto mayor ambiente caótico haya, mayores serán sus poderes. Por ejemplo, controlar un lugar en el que el ambiente caótico es muy bajo no le permitiría hacer nada, mientras que dominarlo en una zona que, por ejemplo, está afectada por un fuerte caos, podría hacer casi cualquier cosa. A efectos de juego, el brujo obtiene los poderes Gnosticos Influir en la Realidad y Auspice, con un valor máximo de Gnosis que depende del grado del conjuro y del nivel de caos que haya. En el caso de que un ser basado en caos se encuentre en presencia del hechicero, este puede dominarlo si la criatura no supera un control de RM indicado por el grado del sortilegio.",
            "zeon": {
                "base": 300,
                "intermedio": 500,
                "avanzado": 800,
                "arcano": 1200
            },
            "inteligenciaRequerida": {
                "base": 11,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "Hasta Gnosis 30 / RM 120.",
                "intermedio": "Hasta Gnosis 35 / RM 160.",
                "avanzado": "Hasta Gnosis 40 / RM 200.",
                "arcano": "Hasta Gnosis 45 / RM 260."
            },
            "mantenimiento": "50 / 60 / 65 / 75"
        },
        {
            "nombre": "Manipulación del Caos",
            "nivel": "64",
            "accion": "Pasiva",
            "tipo": "Automático",
            "efecto": "Alterando la esencia del caos este conjuro permite cambiar el desenlace de un suceso provocando el cambio en la acción de una persona. El conjuro debe ser lanzado inmediatamente después de que se realice una acción; el personaje que la haya realizado deberá repetir inmediatamente su tirada de dados. Por ejemplo, un personaje que intente cruzar brincando un vacío y falle una tirada de Saltar puede volver a intentarla nuevamente desechando el resultado anterior y generando uno nuevo. Este conjuro es automático, y la condición para obligar a realizar la RM es estar ante el brujo y haber realizado una acción en ese momento. Los seres con Gnosis 35 o Natura elevada son conscientes del cambio, mientras que los demás no pueden percibirlo.",
            "zeon": {
                "base": 100,
                "intermedio": 200,
                "avanzado": 300,
                "arcano": 400
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "RM 140.",
                "intermedio": "RM 180 / Puede obligar a repetir la tirada dos veces.",
                "avanzado": "RM 220/ Puede obligar a repetir la tirada tres veces.",
                "arcano": "RM 260/ Puede obligar a repetir la tirada cuatro veces."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Caos Primario",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Alterando completamente las leyes de la realidad, el hechicero crea caos en su estado más puro, una zona donde todo cuanto contiene deja de responder a ninguna regla de la razón. El espacio se distorsiona de manera que arriba puede ser abajo, kilómetros se recorren en segundos y metros en horas. Una persona puede ser joven y vieja a la vez, estallar una tormenta sin dejar de ser un día soleado… nada tiene lógica, porque el propio concepto de la lógica ha dejado de existir. Alguien normal puede volverse loco en pocos minutos, mientras que todo poder sobrenatural puede salir fuera de control. La zona de acción de este conjuro es determinada por su grado, y permanece estática donde fue lanzada.",
            "zeon": {
                "base": 500,
                "intermedio": 900,
                "avanzado": 1500,
                "arcano": 2400
            },
            "inteligenciaRequerida": {
                "base": 12,
                "intermedio": 14,
                "avanzado": 16,
                "arcano": 18
            },
            "grados": {
                "base": "500 metros.",
                "intermedio": "1 kilómetro.",
                "avanzado": "5 kilómetro / Cualquier persona que esté en el interior del Caos Primario al menos un minuto es afectado irremisiblemente por el conjuro Mutación Caótica lanzado en grado arcano.",
                "arcano": "25 kilómetros/ Como en grado avanzado, pero a menos de un kilómetro del núcleo del conjuro el estado de la alteración es absoluto, por lo que ninguna regla existencia funciona; a efectos de juego, incluso la materia deja de existir, convirtiéndose simplemente en un conjunto de átomos en continuo movimiento. Todo lo que esté dentro debe superar un control de RM contra 160 o simplemente se fundirá con el caos y desaparecerá para siempre."
            },
            "mantenimiento": "100 / 180 / 300 / 480 Diario"
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

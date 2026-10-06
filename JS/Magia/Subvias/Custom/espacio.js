// Sub-vía Custom: Espacio — complemento fanmade «Ad Astra»
export const subviaEspacio = {
    "id": "espacio",
    "nombre": "Espacio",
    "color": "#14b8a6",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Nigromancia, Aire, Agua, Fuego, Tierra, Esencia, Ilusión",
    "descripcion": "En la sub-vía del espacio se tratan los poderes capaces de manipular la realidad y el entorno, pudiendo recortar distancias, teletransportarse a él u otros individuos contra su voluntad o crear prisiones aisladas o atacar desde lugares que los enemigos son incapaces de predecir. Es una vía muy peligrosa, motivo por el cual sus hechizos de nivel 84 y 94 se consideran alta magia en contra de las reglas generales.",
    "hechizos": [
        {
            "id": "medicion-espacial",
            "nombre": "Medición espacial",
            "nivel": 4,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "El conjuro permite medir la distancia que hay entre punto A y punto B en una línea recta designada por el hechicero.",
            "zeon": {
                "base": 30,
                "intermedio": 50,
                "avanzado": 90,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "El hechicero es capaz de medir el espacio comprendido entre dos puntos que se encuentren al alcance de su vista.",
                "intermedio": "Como el anterior pero solamente tiene que conocer los dos puntos.",
                "avanzado": "Como el anterior pero ahora también es capaz de medir desniveles, caminos y altitudes.",
                "arcano": "El hechicero obtiene una información completa de la localización de los dos puntos y la distancia que hay entre ellos en todos sus posibles caminos. Es decir, podría usarse para descubrir nuevas rutas más cortas, con menos desniveles o incluso uno que adicionalmente pase por un tercer punto C."
            },
            "mantenimiento": "No"
        },
        {
            "id": "recolocacion",
            "nombre": "Recolocación",
            "nivel": 14,
            "accion": "Pasiva",
            "tipo": "Efecto/Defensa",
            "efecto": "Mediante la manipulación del espacio y del entorno, el mago es capaz de alterar el punto físico en el que se encuentra, teletransportándose en cualquier momento a otro punto distinto dentro del área designada por el grado del conjuro. En caso de utilizarse para escapar de un ataque en cuya área de efecto se encuentre el mago, podrá utilizar su proyección mágica en caso de que el área del conjuro le permita salir del área de efecto del ataque. Este teletransporte no es capaz de atravesar barreras físicas de ningún tipo, a menos que tengan espacio suficiente para que una persona pueda salir.",
            "zeon": {
                "base": 50,
                "intermedio": 80,
                "avanzado": 120,
                "arcano": 160
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "10m de área",
                "intermedio": "50m de área",
                "avanzado": "100m de área",
                "arcano": "250m de área"
            },
            "mantenimiento": "No"
        },
        {
            "id": "recortar-distancia",
            "nombre": "Recortar distancia",
            "nivel": 24,
            "accion": "Pasiva",
            "tipo": "Efecto",
            "efecto": "Mediante la manipulación del espacio, la distancia entre dos puntos que estén a la vista del hechicero quedará reducida a todos los efectos en una cantidad determinada por el grado del conjuro. Esto podría servir para, por ejemplo, reducir la distancia que habría de recorrer de un punto a otro, la distancia de un foso el cuál habría que sortear mediante un salto, la longitud de un muro a escalar o incluso la altura desde la cuál alguien se precipita al vacío. Cualquiera que interactúe con la distancia modificada por el hechicero, tendrá que substraer del total de distancia una cantidad de metros equivalentes a lo indicado por el conjuro. Así, por ejemplo, una caída desde 30 metros de altura podría ser modificada para que únicamente fuera de 15 metros en grado avanzado.\n\nAlternativamente, puede usarse el poder de este conjuro para potenciar los hechizos de esta sub-vía, incrementando en la cantidad indicada la distancia total que abarcan todos sus conjuros de áreas y distancias mientras se mantenga.",
            "zeon": {
                "base": 70,
                "intermedio": 90,
                "avanzado": 120,
                "arcano": 160
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "Es capaz de reducir una cuarta parte de la distancia total. Las áreas y distancias se ven incrementadas un 25%.",
                "intermedio": "Como en el anterior grado, pero reduce una tercera parte de la distancia total. Las áreas y distancias se ven incrementadas un 33%.",
                "avanzado": "Como el anterior, pero reduce a la mitad la distancia total. Las áreas y distancias se ven incrementadas un 50%.",
                "arcano": "Como el anterior, pero reduce dos terceras partes de la distancia total. Las áreas y distancias se ven incrementadas un 66%."
            },
            "mantenimiento": "10 / 15 / 15 / 20 Diario"
        },
        {
            "id": "desvanecimiento-de-la-materia",
            "nombre": "Desvanecimiento de la materia",
            "nivel": 34,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Mediante este conjuro, el hechicero puede hacer desaparecer del plano físico cualquier persona o criatura cuya presencia no supere la especificada en el grado del conjuro. Tras esto el hechicero seleccionará el lugar y la distancia a la que lo teletransporta dentro del rango del conjuro, apareciendo el afectado en un lapso de tiempo posterior al que le hubiera costado llegar en caso de desplazarse a su máximo tipo de movimiento. A todos los efectos tardará tanto tiempo como hubiese tardado corriendo a su máximo TM (mínimo de 1), pero sin ser propiamente él quién se desplaza. Este conjuro no permite atravesar barreras físicas en caso de no poder atravesarse de alguna manera convencional. El lugar objetivo ha de ser un lugar al que el afectado pueda llegar de manera natural y por sus propias capacidades.",
            "zeon": {
                "base": 60,
                "intermedio": 80,
                "avanzado": 120,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "100m. 60 de presencia",
                "intermedio": "250m. 90 de presencia",
                "avanzado": "500m. 120 de presencia",
                "arcano": "1Km. 150 de presencia"
            },
            "mantenimiento": "No"
        },
        {
            "id": "marca-dimensional",
            "nombre": "Marca dimensional",
            "nivel": 44,
            "accion": "Activa",
            "tipo": "Efecto, Anímico",
            "efecto": "El hechicero deja una pequeña marca. Como una especie de señal en el plano espacial y físico a la cual puede volver a teletransportarse en cualquier momento siempre que se encuentre en el radio indicado en el grado del conjuro. Utilizado en objetos o lugares con alta presencia o individuos tendrán derecho a una RM para resistir sus efectos.",
            "zeon": {
                "base": 100,
                "intermedio": 120,
                "avanzado": 140,
                "arcano": 160
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 11,
                "avanzado": 13,
                "arcano": 15
            },
            "grados": {
                "base": "RM 100. Hasta 100 metros de distancia",
                "intermedio": "RM 120. Hasta 1Km de distancia",
                "avanzado": "RM 140. Hasta 10 Km de distancia",
                "arcano": "RM 180. Hasta 100 Km de distancia"
            },
            "mantenimiento": "5 / 10 / 15 / 20 Diario"
        },
        {
            "id": "golpe-curvo",
            "nombre": "Golpe curvo",
            "nivel": 54,
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "Cercenando y acortando la realidad durante unos instantes, el hechicero crea un vacío en forma de luna creciente que rasga el espacio y acelera la abertura, cortando todo lo que encuentra a su paso. Dependiendo del grado del conjuro, esta brecha puede volverse más o menos violenta, atendiendo al número de objetivos a los cuales impacte, incrementando aún más el daño base del hechizo por cada enemigo subsiguiente. Cualquiera que está en la trayectoria del hechizo, pero no en el centro de la misma puede aplicar un +40 a su habilidad defensiva a la hora de defenderse del conjuro.",
            "zeon": {
                "base": 60,
                "intermedio": 100,
                "avanzado": 140,
                "arcano": 180
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 14
            },
            "grados": {
                "base": "1 objetivo. Daño base 60. Sin incremento. 1m de área y 5m de longitud en arco.",
                "intermedio": "2 objetivos. Daño base 60. +10 al daño por cada objetivo adicional. 1m de área y 10m de longitud en arco.",
                "avanzado": "3 objetivos. Daño base 60. +20 al daño por cada objetivo adicional. 3m de área y 20m de longitud en arco.",
                "arcano": "4 objetivos. Daño base 60. +30 al daño por cada objetivo adicional. 5m de área y 50m de longitud en arco."
            },
            "mantenimiento": "No"
        },
        {
            "id": "reordenacion-espacial",
            "nombre": "Reordenación espacial",
            "nivel": 64,
            "accion": "Pasiva",
            "tipo": "Automático",
            "efecto": "El hechicero tiene la capacidad de intercambiar la posición de dos cuerpos físicos que se encuentren en su campo de visión, siempre que estos no superen de manera individual la presencia especificada por el grado del conjuro. Este teletransporte se efectúa de manera pasiva y puede utilizarse tantas veces al comienzo del asalto o en el turno del hechicero como lo descrito en el grado del conjuro.\n\nEn el caso de que el objetivo estuviera trabado en combate, se podrá realizar un ataque de oportunidad, aunque este no aplicará ningún penalizador defensivo ni tampoco interrumpirá el efecto del conjuro.\n\nEn el caso de que alguien se intente resistir tendrá que superar un control de RM o será afectado por el conjuro, pudiendo repetir el control cada vez que intente intercambiar su posición en turnos posteriores.",
            "zeon": {
                "base": 120,
                "intermedio": 200,
                "avanzado": 260,
                "arcano": 320
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "1 Intercambio por asalto. Presencia 50. RM 120",
                "intermedio": "2 Intercambios por asalto. Presencia 70. RM 140",
                "avanzado": "3 Intercambios por asalto. Presencia 90. RM 160",
                "arcano": "4 Intercambios por asalto. Presencia 110. RM 200"
            },
            "mantenimiento": "10 / 15 / 20 / 25"
        },
        {
            "id": "percepcion-expandida",
            "nombre": "Percepción Expandida",
            "nivel": 74,
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Permite al objetivo del hechizo poder obtener una visión general de los distintos planos físicos que se encuentran en un radio alrededor del hechicero. Dependiendo del grado del conjuro el área aumentará y será capaz de ver mejor lo que está sucediendo en los otros planos físicos. Las criaturas o entidades capaces de caminar entre planos mediante poderes o por un Gnosis elevado serán conscientes de que alguien las está observando dentro de su plano.",
            "zeon": {
                "base": 200,
                "intermedio": 360,
                "avanzado": 420,
                "arcano": 600
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "Permite ver el plano espiritual. 250m",
                "intermedio": "Permite ver el plano de la vigilia. 1Km",
                "avanzado": "Permite ver a través de planos físicos artificiales como los creados por espacios cerrados, infiernos personales o espacios creados por Ars Magnus cómo Ashuriam. 5Km",
                "arcano": "Permite ver a través de cualquier plano físico a la vez, permitiéndole ver a través de todos ellos. 10Km"
            },
            "mantenimiento": "10 / 20 / 30 / 40"
        },
        {
            "id": "cupula-dimensional",
            "nombre": "Cúpula dimensional",
            "nivel": 84,
            "accion": "Activa",
            "tipo": "Efecto, Automático",
            "efecto": "Generando una zona alrededor del hechicero, este podrá controlar cualquiera de los planos que se encuentren ubicados en un mismo punto. Permitiéndole en todo momento seleccionar a cuál de estos planos desea acceder, pero únicamente mientras se encuentre en el interior de la cúpula, ya que al salir de esta simplemente continuará caminando por el plano físico en el que se encontraba originalmente.\n\nCualquier individuo que se encuentre dentro del área del conjuro es automáticamente desplazado también y tiene la capacidad de interactuar y ver a través de los planos que estén superpuestos dentro del área. Una vez escogido el plano al que se desea acceder, no se puede modificar, y en caso de cancelar el mantenimiento, será imposible volver al plano físico a menos que se vuelva a realizar el conjuro.\n\nPor ejemplo, si un hechicero rodeado de enemigos utilizase este hechizo, tanto él como sus antagonistas dentro del radio del conjuro serán automáticamente engullidos por la cúpula, interior de la cual el hechicero podrá decidir cuál de los planos físicos manifiesta en su interior. Pudiendo escoger entre el físico, la vigilia, algún infierno personal de un duque infernal e incluso espacios cerrados como pueden ser los de Ashuriam o por poderes de monstruo. Las criaturas con un Gnosis que les permita caminar entre planos o aquellas con un poder similar, pueden ignorar los efectos de este conjuro si así lo desean.",
            "zeon": {
                "base": 240,
                "intermedio": 360,
                "avanzado": 480,
                "arcano": 600
            },
            "inteligenciaRequerida": {
                "base": 11,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "Área de 100m",
                "intermedio": "Área de 500m",
                "avanzado": "Área de 1Km",
                "arcano": "Área de 10Km"
            },
            "mantenimiento": "20 / 40 / 60 / 80 Diario"
        },
        {
            "id": "relatividad",
            "nombre": "Relatividad",
            "nivel": 94,
            "accion": "Activa",
            "tipo": "Anímico, Efecto",
            "efecto": "Mediante la manipulación de una porción de la realizad y del espacio físico, el hechicero encierra dentro de una dimensión recién creada y ajena a todo plano físico al objetivo del conjuro, dejándolo aislado de cualquier lugar en el que se encontrase en su interior.\n\nDesde esta nueva prisión, el plano físico comienza a expandirse en todas las direcciones a una velocidad absurda, imposibilitando a quién quiera que quedase encerrado en su interior a escapar del espacio a menos que sea capaz de correr más rápido de lo que se expande el nuevo dominio.\n\nNo obstante, gracias a la manipulación del espacio también es posible controlar lo que se crea en el nuevo dominio, permitiendo un control total al hechicero de lo que quiere que se genere en su interior a medida que se expande, pero únicamente de una forma generalizada. Podría por ejemplo desear que se genere un enorme laberinto, gigantescas mazmorras, grandes desniveles o incluso terrenos flotantes y peligrosos distanciados entre ellos por centenares de metros. La máxima distancia de terreno “vacío” que se puede generar antes de tener que crear al menos algo de materia o “camino” equivale a 3 asaltos de expansión del dominio.\n\nPese a que el dominio se expande dentro de su propia realidad y espacio, lo cierto es que visualmente en el mundo exterior se contempla como una fisura en la realidad, cómo si de un espejo roto se tratase. Cualquiera que intentase traspasarlo físicamente o destruirlo a la fuerza de manera externa recibirá un impacto de fuerza equivalente al TM de expansión indicado en el grado del conjuro. Únicamente magia divina, criaturas de gnosis mayor al creador del espacio o un individuo que consiga salir del interior del espacio serán capaces de poner fin a este conjuro.",
            "zeon": {
                "base": 350,
                "intermedio": 700,
                "avanzado": 1200,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 13,
                "intermedio": 15,
                "avanzado": 17,
                "arcano": 19
            },
            "grados": {
                "base": "RM 140. TM 12 para calcular su velocidad de expansión.",
                "intermedio": "RM 180. TM 14 para calcular su velocidad de expansión.",
                "avanzado": "RM 220. TM 16 para calcular su velocidad de expansión.",
                "arcano": "RM 260. TM 18 para calcular su velocidad de expansión."
            },
            "mantenimiento": "40 / 80 / 120 / 160 Diario"
        }
    ]
};

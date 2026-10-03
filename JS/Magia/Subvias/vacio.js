// Sub-vía oficial extraída de Subvías.pdf.
export const subviaVacio = {
    "id": "vac-o",
    "nombre": "Vacío",
    "color": "#94a3b8",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Luz, Creación, Tierra, Fuego, Ilusión, Esencia",
    "hechizos": [
        {
            "nombre": "Sombra de Vacío",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Trae a la existencia un fragmento del vacío, una mera sombra de la nada primordial que durante unos instantes absorbe parcialmente la luz, reduce la cantidad de oxígeno en la zona, y arrebata energía vital a cuanto la rodea. Todo aquel que se encuentren en la zona afectada por este conjuro deberá realizar un control de RM o perderá o bien un punto de Cansancio en los seres vivos, dos intensidades en el caso de elementales.",
            "zeon": {
                "base": 30,
                "intermedio": 60,
                "avanzado": 90,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 5,
                "intermedio": 8,
                "avanzado": 11,
                "arcano": 14
            },
            "grados": {
                "base": "RM 80 / Área 5 metros.",
                "intermedio": "RM 100 / Área 10 metros.",
                "avanzado": "RM 120 / Área 15 metros.",
                "arcano": "RM 150 / Área 30 metros."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Onda Vacua",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "Este hechizo manda una leve onda de vacío capaz de desestructurar las fibras sobrenaturales de cualquier protección. Este conjuro en si no provoca daños a sus adversarios, pero dirigido contra un escudo sobrenatural, provoca demoledoras consecuencias. La Onda Vacua es invisible al ojo humano, salvo para aquellos capaces de ver magia.",
            "zeon": {
                "base": 30,
                "intermedio": 60,
                "avanzado": 90,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 6
            },
            "grados": {
                "base": "Daño 120 contra escudos.",
                "intermedio": "Daño 250 contra escudos.",
                "avanzado": "Daño 400 contra escudos.",
                "arcano": "Daño 600 contra escudos."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Escudo de Vacío",
            "nivel": "24",
            "accion": "Pasiva",
            "tipo": "Escudo",
            "efecto": "Crea una barrera de partículas de vacío que absorbe y convierte en nada los ataques que recibe. Además de tener resistencia como un escudo convencional, cualquier poder sobrenatural que detenga quedará automáticamente anulado si el atacante no logra superar un control de Voluntad o Poder contra la dificultad determinada por el grado del conjuro. Es decir, si un contrincante lanza un sortilegio ofensivo o anímico contra un mago que se proteja tras un escudo de vacío de grado intermedio, y este último obtiene una defensa con éxito, el atacante deberá superar un control de Voluntad o Poder contra 16 o su ataque quedará anulado sin dañar lo más mínimo el escudo. De igual forma, cualquier objeto físico que logre parar el escudo debe superar una RF contra la dificultad determinada por el escudo o será destruido de inmediato.",
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
                "base": "200 Puntos de Resistencia / Dificultad 14 / RF 100.",
                "intermedio": "300 Puntos de Resistencia / Dificultad 16 / RF 120.",
                "avanzado": "400 Puntos de Resistencia / Dificultad 18 / RF 140.",
                "arcano": "500 Puntos de Resistencia / Dificultad 20 / RF 160."
            },
            "mantenimiento": "5 / 20 / 25 / 30"
        },
        {
            "nombre": "Vórtice de Realidad",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Crea una zona repleta de millones de microscópicas partículas de vacío. Todo individuo que esté en ella más de un asalto deberá hacer automáticamente una RM cada turno o sufrir un daño y una perdida de puntos de Ki equivalente a la mitad del nivel de fracaso, así como una perdida de puntos de Zeon equivalente al nivel de fracaso pleno. Este hechizo no permite elegir blancos, y afecta a todos por igual, inclusive el propio lanzador.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 180,
                "arcano": 240
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 7
            },
            "grados": {
                "base": "RM 100 / 5 metros de radio.",
                "intermedio": "RM 120 / 10 metros de radio.",
                "avanzado": "RM 140 / 20 metros de radio.",
                "arcano": "RM 160 / 40 metros de radio."
            },
            "mantenimiento": "5 / 10 / 15 / 20"
        },
        {
            "nombre": "Negra Hoja de Perdición",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "Invoca vacío en su estado más puro, dando forma a una crepitante hoja de poder que se manifiesta en las manos del hechicero. El arma puede usarse para atacar en Filo con la Proyección Mágica del lanzador o bien con su Habilidad de Ataque cuerpo a cuerpo e ignora por completo cualquier clase de Armadura. El hechicero puede mantener activa la hoja para realizar nuevos ataques en asaltos posteriores, pero cada turno que lo haga debe de realizar un control de Voluntad contra dificultad 12 o la espada corre el riesgo de descontrolarse. Cada vez que consiga supera el control incrementa un punto su dificultad en el siguiente turno. Si llegase a fallarlo, la espada se vuelve contra el brujo, atacándole con su habilidad plena +50.",
            "zeon": {
                "base": 100,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 9,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 6
            },
            "grados": {
                "base": "Daño 80",
                "intermedio": "Daño 120.",
                "avanzado": "Daño 160.",
                "arcano": "Daño 200."
            },
            "mantenimiento": "5 / 10 / 10 / 15"
        },
        {
            "nombre": "Aura de Vacío",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Cubre al hechicero con un aura de vacío que le protege de los efectos de los ataques sobrenaturales, proporcionándole una TA de Energía a la vez que devora cualquier hechizo o poder psíquico de valor inferior al indicado. Lamentablemente, este conjuro no discrimina entre poderes amigos o enemigos, y los devora todos sin distinción. La capa de vacío es invisible, aunque todo lo que rodea al hechicero parece verse mas tenue y apagado.",
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
                "base": "TA 4 / Valor Zeónico 60 / Potencial Psíquico 80.",
                "intermedio": "TA 6 / Valor Zeónico 90/ Potencial Psíquico 120.",
                "avanzado": "TA 8 / Valor Zeónico 120/ Potencial Psíquico 140.",
                "arcano": "TA 10 / Valor Zeónico 160/ Potencial Psíquico 180."
            },
            "mantenimiento": "15 / 20 / 25 / 35 Diario"
        },
        {
            "nombre": "Puntos Negros",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Automático",
            "efecto": "Crea una zona alrededor del hechicero llena de vórtices existenciales y agujeros de vacío que se mueven caóticamente de un lado a otro. Cualquier que entre dentro de dicha área debe superar cada asalto un control de Atletismo, Acrobacias o Defensa contra la dificultad determinada por el grado del conjuro, o de lo contrario chocará con unos de puntos negros. Si se diera el caso, el personaje debe de superar un control de RF o RM contra la dificultad que determine el conjuro o sufrir un daño y una perdida de puntos de Ki equivalente a la mitad del nivel de fracaso, así como una perdida de Zeon equivalente al nivel de fracaso pleno. No es posible designar blancos en el interior del sortilegio.",
            "zeon": {
                "base": 250,
                "intermedio": 350,
                "avanzado": 500,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 8,
                "intermedio": 10,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "Dificultad 120 / 10 metros de radio / RM o RF 120.",
                "intermedio": "Dificultad 140 / 20 metros de radio / RM o RF 140.",
                "avanzado": "Dificultad 180 / 50 metros de radio / RM o RF 160.",
                "arcano": "Dificultad 240 / 100 metros de radio / RM o RF 180."
            },
            "mantenimiento": "15 / 25 / 35 / 50"
        },
        {
            "nombre": "Protección contra el Vacío",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Ataque",
            "efecto": "Cubre al hechicero de una energía sobrenatural que repele los efectos del vacío. Cualquier conjuro o poder relacionado con la nada no tiene efecto sobre él ni puede causarle daño.",
            "zeon": {
                "base": 140,
                "intermedio": 200,
                "avanzado": 280,
                "arcano": 400
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "Protege contra conjuros de esta sub-vía.",
                "intermedio": "Como en grado base, pero el personaje es también inmune a los efectos y ataques de seres basados en el vacío, como los Etrien Gnosos.",
                "avanzado": "El personaje es inmune a cualquier efecto relaciona con el vacío, salvo la nada primordial.",
                "arcano": "Como en grado avanzado, pero el personaje es capaz de sobrevivir incluso en la nada primordial."
            },
            "mantenimiento": "15 / 20 / 30 / 40"
        },
        {
            "nombre": "Implosión",
            "nivel": "84",
            "accion": "Activa",
            "tipo": "Ataque.",
            "efecto": "Este terrorífico conjuro crea un punto de vacío en el interior de algo que atrae toda la masa del mismo a su interior, provocando que su estructura implosione y desaparezca completamente. Al absorber la carne, huesos y órganos, en caso de causar daño provoca además un crítico automático con un bonificador determinado por el grado del conjuro.",
            "zeon": {
                "base": 500,
                "intermedio": 750,
                "avanzado": 1000,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 14,
                "intermedio": 16,
                "avanzado": 18,
                "arcano": 20
            },
            "grados": {
                "base": "Daño 200 / Crítico +20.",
                "intermedio": "Daño 400 / Crítico +40.",
                "avanzado": "Daño 500 / Crítico +60.",
                "arcano": "Daño 800 / Crítico +100."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Puerta a Ninguna Parte",
            "nivel": "94",
            "accion": "Pasiva",
            "tipo": "Efecto",
            "efecto": "Abre un portal unidireccional al vacío más absoluto, la nada primigenia que un día devorará el universo. Cualquiera que cruce la puerta dejará de existir automáticamente, sin control de resistencia posible. Sólo los seres con Gnosis 35 o superior, objetos de presencia equivalente, o individuos protegidos de algún modo contra el Vacío pueden sobrevivir allí, pero van perdiendo poco a poco puntos de su atributo de Poder, que se recupera a un ritmo de uno al día. Naturalmente, algo que permanezca en el interior es virtualmente inmune a ninguna clase de ataque, ya que estos no pueden alcanzarle. Las dimensiones del portal son determinadas por el grado del conjuro.",
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
                "arcano": 18
            },
            "grados": {
                "base": "2 metros de diámetro.",
                "intermedio": "5 metros de diámetro.",
                "avanzado": "15 metros de diámetro.",
                "arcano": "50 metros de diámetro."
            },
            "mantenimiento": "30 / 50 / 80 / 120"
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

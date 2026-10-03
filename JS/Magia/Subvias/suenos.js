// Sub-vía oficial extraída de Subvías.pdf.
export const subviaSuenos = {
    "id": "sue-os",
    "nombre": "Sueños",
    "color": "#8b5cf6",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Creación, Destrucción, Agua, Tierra, Fuego",
    "hechizos": [
        {
            "nombre": "Sentir los Sueños",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Detección",
            "efecto": "Mediante este conjuro el hechicero es capaz de localizar las energías oníricas de todos los seres que estén soñando cerca de él. Además, mediante la energía que desprenden podrá saber si están teniendo sueños plácidos o por el contrario, terribles pesadillas. Para resistirse a la detección, los durmientes deben superar una RM.",
            "zeon": {
                "base": 60,
                "intermedio": 80,
                "avanzado": 100,
                "arcano": 40
            },
            "inteligenciaRequerida": {
                "base": 5,
                "intermedio": 8,
                "avanzado": 10,
                "arcano": 12
            },
            "grados": {
                "base": "50 metros / RM 120.",
                "intermedio": "150 metros / RM 160.",
                "avanzado": "200 metros / RM 200.",
                "arcano": "500 metros / RM 240"
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Sueño imperturbable",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este hechizo protege a un personaje de ser asaltado por conjuros o efectos de cualquier tipo relacionado con los sueños, otorgándole un bono a la RM y RP contra tales menesteres. De igual forma, este conjuro evita que el personaje sea trasportado involuntariamente hasta la Vigilia, otorgándole el mismo bono a sus Resistencias en caso de que alguien trate de forzarle a ir en contra de su voluntad.",
            "zeon": {
                "base": 60,
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
                "base": "+40 RM o RP.",
                "intermedio": "+60 RM o RP.",
                "avanzado": "+80 RM o RP.",
                "arcano": "+100 RM o RP."
            },
            "mantenimiento": "5 / 5 / 5 / 10 Diario"
        },
        {
            "nombre": "Espiar los Sueños",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Este hechizo permite observar que esta ocurriendo en los sueños de un durmiente, tanto si son tranquilos como pesadillas. No es posible intervenir en ellos de ninguna manera, pero si verlos detalladamente. Una persona puede resistirse superando un control de RM, pero si lo falla, sólo tiene derecho a un nuevo control cada día, siempre y cuando sea consciente o sospeche que puede estar siendo afectado por un conjuro de estas características.",
            "zeon": {
                "base": 60,
                "intermedio": 80,
                "avanzado": 100,
                "arcano": 120
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 8,
                "avanzado": 10,
                "arcano": 12
            },
            "grados": {
                "base": "RM 140.",
                "intermedio": "RM 160.",
                "avanzado": "RM 180.",
                "arcano": "RM 200 / El lanzador puede manifestar una imagen material de los sueños del individuo afectado, permitiendo a cualquier persona que esté junto a él verlos."
            },
            "mantenimiento": "10 / 10 / 10 / 15 Diario"
        },
        {
            "nombre": "Alterar los Sueños",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Mediante este conjuro el hechicero tiene la capacidad de alterar los sueños (ya sean tranquilos o pesadillas) que tengan todas las personas que estén dentro del radio de acción determinado por el grado del sortilegio. Este conjuro sólo funciona si el hechicero está “fuera” del sueño, y no permite usarlo si está introducido en el propio sueño o en la Vigilia. 05 0 Este hechizo sólo afecta a personas que estén durmiendo en esos momentos, y desaparece en el instante en el que despiertan.",
            "zeon": {
                "base": 80,
                "intermedio": 100,
                "avanzado": 120,
                "arcano": 140
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "RM 100 / 50 metros de radio.",
                "intermedio": "RM 120 / 150 metros de radio.",
                "avanzado": "RM 140 / 250 metros de radio.",
                "arcano": "RM 160 / 500 metros de radio."
            },
            "mantenimiento": "10 / 10 / 10 / 15"
        },
        {
            "nombre": "Caminante Noctámbulo",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Efecto.",
            "efecto": "Gracias a este sortilegio el hechicero o la persona designada por este puede traer al mundo su yo onírico, la forma que toma su consciencia más habitualmente al soñar. Así pues, mientras su cuerpo físico duerme, puede moverse libremente por el mundo en su forma de sueños. Mientras alguien está afectado por este conjuro es invisible al ojo humano (salvo aquellas personas capaces de ver espíritus) y no produce ruido alguno. Al mismo tiempo, es completamente intangible, y no puede tocar nada material. La distancia máxima que el afectado puede separarse de su cuerpo físico es determinada por el grado del conjuro. Si el caminante recibe alguna clase de daño el conjuro es interrumpido.",
            "zeon": {
                "base": 100,
                "intermedio": 120,
                "avanzado": 140,
                "arcano": 160
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "1 kilómetro de distancia máxima.",
                "intermedio": "2 kilómetros de distancia máxima / El afectado puede tornarse visible a voluntad y hablar con cualquier persona.",
                "avanzado": "5 kilómetros de distancia máxima / Como en grado intermedio, pero el personaje puede alterar su aspecto físico a voluntad, adquiriendo cualquier forma con la que pueda soñar.",
                "arcano": "A cualquier distancia/ Como en grado avanzado, pero el caminante puede entrar en el mundo onírico de cualquier durmiente con el que se cruce si el soñador no supera un control de RM contra 150."
            },
            "mantenimiento": "30 / 30 / 40 / 40 Diario"
        },
        {
            "nombre": "Sueño Eterno",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Anímico.",
            "efecto": "Este terrible conjuro sume a su víctima en un sueño del que no puede despertar hasta que el hechicero no lo desee, sin importar lo que le pase a su cuerpo. Alguien afectado por este conjuro tiene derecho a una resistencia al día, aunque aplica un -40 a sus resistencias para lograr despertarse si ya ha sido afectado por el conjuro.",
            "zeon": {
                "base": 100,
                "intermedio": 140,
                "avanzado": 180,
                "arcano": 240
            },
            "inteligenciaRequerida": {
                "base": 7,
                "intermedio": 9,
                "avanzado": 11,
                "arcano": 13
            },
            "grados": {
                "base": "RM 80.",
                "intermedio": "RM 100.",
                "avanzado": "RM 120.",
                "arcano": "RM 140."
            },
            "mantenimiento": "10 / 20 / 20 / 25 Diario"
        },
        {
            "nombre": "Rasgar la Membrana",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Efecto.",
            "efecto": "El hechicero crea un vórtice en la realidad permitiéndole crear un portal a la Vigilia.",
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
                "base": "El portal sólo permite pasar al hechicero, y es sólo de una dirección.",
                "intermedio": "El portal puede ser pasado por cualquier clase de ser, pero es sólo de una dirección.",
                "avanzado": "Como en grado intermedio, pero el portal puede ser usado en ambas direcciones.",
                "arcano": "Como el grado avanzado, pero el hechicero puede determinar libremente quienes pueden cruzar el portal o si es necesario tener algún sentimiento o cualidad especial para abrirlo."
            },
            "mantenimiento": "40 / 50 / 60 / 70 Diario"
        },
        {
            "nombre": "Desterrar a la Vigilia",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Anímico.",
            "efecto": "Este hechizo permite arrancar del mundo terrenal a un individuo o ser y lanzarlo hasta un lugar al azar de la Vigilia. El lanzador puede elegir si sólo envía el subconsciente onírico del afectado (es decir, que su cuerpo permanece durmiendo mientras su mente va a la Vigilia). Si estaba dormido podría no llegar a notar el salto dimensional, si estaba despierto su cuerpo caerá en un profundo sueño. También puede afectar a criaturas propias de la Vigilia que serán arrastradas por completo. Para resistirse deberá superar una RM.",
            "zeon": {
                "base": 120,
                "intermedio": 140,
                "avanzado": 160,
                "arcano": 100
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 14,
                "arcano": 16
            },
            "grados": {
                "base": "RM 100.",
                "intermedio": "RM 120.",
                "avanzado": "RM 140.",
                "arcano": "RM 160."
            },
            "mantenimiento": "No."
        },
        {
            "nombre": "Entre Sueños y Realidad",
            "nivel": "84",
            "accion": "Activa",
            "tipo": "Efecto.",
            "efecto": "Permite al hechicero alterar los lazos entre el mundo real y la Vigilia, permitiendo temporalmente fundir ambos aspectos de la realidad en uno. Los seres que entren en dicha zona seguirán siendo “de su lado”, por lo que si salen de la zona afectada lo seguirán haciendo “por su lado” (es decir, un ser de la Vigilia seguirá en su plano de existencia al cruzar el área afectada por el conjuro). No obstante, las criaturas tienen poderes especiales en la Vigilia los mantendrán en dicha zona.",
            "zeon": {
                "base": 400,
                "intermedio": 500,
                "avanzado": 700,
                "arcano": 900
            },
            "inteligenciaRequerida": {
                "base": 13,
                "intermedio": 15,
                "avanzado": 17,
                "arcano": 19
            },
            "grados": {
                "base": "100 metros de radio.",
                "intermedio": "500 metros de radio.",
                "avanzado": "1 kilómetro de radio.",
                "arcano": "3 kilómetros de radio."
            },
            "mantenimiento": "80 / 100 / 140 / 180 Diario"
        },
        {
            "nombre": "Hacer los Sueños Realidad",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Efecto.",
            "efecto": "Este conjuro realiza literalmente lo que su nombre indica; permite al hechicero traer al mundo real cualquier ser u objeto que se encuentre en los sueños de algún durmiente. Podría traer, por ejemplo, un escudo con el que está soñando un guerrero o el caballo con el que montaba en su infancia. Al hacerlo realidad se materializará adquiriendo “sustancia”. En el caso de que se traiga un ser “vivo”, la criatura es aparentemente real, pero no podrá tener poderes superiores a Gnosis 25 ni un nivel superior a lo que determine el grado del conjuro. Si por el contrario es un objeto, su presencia máxima será determinada por el grado del sortilegio. Es importante puntualizar que este conjuro en si no permite al lanzador observar lo que hay en el interior de los sueños de la gente, por lo que será necesario usar algún otro medio para “ver” exactamente lo que quiere traer.",
            "zeon": {
                "base": 300,
                "intermedio": 600,
                "avanzado": 900,
                "arcano": 1200
            },
            "inteligenciaRequerida": {
                "base": 12,
                "intermedio": 14,
                "avanzado": 16,
                "arcano": 18
            },
            "grados": {
                "base": "Presencia máxima 80/ Nivel 3.",
                "intermedio": "Presencia máxima 120/ Nivel 6.",
                "avanzado": "Presencia máxima 160/ Nivel 9.",
                "arcano": "Presencia máxima 200/ Nivel 12."
            },
            "mantenimiento": "50 / 60 / 65 / 75 Diario"
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

// Sub-vía oficial extraída de Subvías.pdf.
export const subviaSangre = {
    "id": "sangre",
    "nombre": "Sangre",
    "color": "#dc2626",
    "tipoContenido": "subvia",
    "vinculosCerrados": "Luz, Ilusión, Fuego, Aire, Tierra",
    "hechizos": [
        {
            "nombre": "Ralentizar Pulso",
            "nivel": "4",
            "accion": "Activa",
            "tipo": "Anímico",
            "efecto": "Afecta al torrente sanguíneo de sus objetivos, ralentizándolo en el caso de que sea anormalmente rápido (como es el caso de emociones extremas, como la ira o el temor). El afectado se siente relajado, siendo eliminada cualquier emoción extrema en el que esté sumido, sea de origen natural o no. La sensación de tranquilidad será tan grande, que durante el siguiente minuto el blanco del conjuro sufre un -10 a toda acción de carácter físico. Para tratar de resistirse a sus efectos es necesario superar una RM contra la dificultad determinada por el grado del conjuro.",
            "zeon": {
                "base": 30,
                "intermedio": 60,
                "avanzado": 100,
                "arcano": 150
            },
            "inteligenciaRequerida": {
                "base": 5,
                "intermedio": 8,
                "avanzado": 10,
                "arcano": 13
            },
            "grados": {
                "base": "RM 80.",
                "intermedio": "RM 100.",
                "avanzado": "RM 120.",
                "arcano": "RM 160."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Coagular",
            "nivel": "14",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Restaña las heridas mágicamente, impidiendo la pérdida de sangre y cerrando las heridas. Sólo es posible afectar a alguien una vez al día con este conjuro.",
            "zeon": {
                "base": 40,
                "intermedio": 80,
                "avanzado": 120,
                "arcano": 160
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 8,
                "avanzado": 10,
                "arcano": 13
            },
            "grados": {
                "base": "Elimina automáticamente cualquier desangramiento",
                "intermedio": "Recupera un 20% de los puntos de vida perdidos por heridas producidas por cortes o hemorragias.",
                "avanzado": "Recupera un 40% de los puntos de vida perdidos por heridas producidas por cortes o hemorragias.",
                "arcano": "Recupera un 60% de los puntos de vida perdidos por heridas producidas por cortes o hemorragias."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Sangre Fría",
            "nivel": "24",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Cambia la temperatura corporal de los objetivos del conjuro, permitiéndole regularla de forma acorde a las condiciones externas. Así, no se verán afectados por la meteorología adversa, pudiendo sobrevivir en yermos gélidos o desiertos ardientes. Puede afectar a tantos blancos como se desee, siempre y cuando la suma de sus presencias no supere lo que determine el grado del conjuro.",
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
                "base": "Presencia máxima 60.",
                "intermedio": "Presencia máxima 100.",
                "avanzado": "Presencia máxima 180.",
                "arcano": "Presencia máxima 300."
            },
            "mantenimiento": "5 / 20 / 25 / 30 Diario"
        },
        {
            "nombre": "Creación de Sangre",
            "nivel": "34",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Crea un objeto u arma partir de la propia sangre del hechicero, cristalizándola hasta convertirla en un material de una dureza extrema. Lamentablemente, esto reprenda que el brujo debe de sacrificar necesariamente parte de su propia sangre, perdiendo puntos de vida en el proceso.",
            "zeon": {
                "base": 80,
                "intermedio": 120,
                "avanzado": 160,
                "arcano": 200
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "Perdida de -10 PV / Calidad +0 / Objetos de hasta 2 kilos.",
                "intermedio": "Perdida de -20 PV / Calidad +5 / Objetos de hasta 5 kilos.",
                "avanzado": "Perdida de -40 PV / Calidad +10 / Objetos de hasta 15 kilos.",
                "arcano": "Perdida de -60 PV / Calidad +15 / Objetos de hasta 25 kilos."
            },
            "mantenimiento": "10 / 40 / 50 / 60"
        },
        {
            "nombre": "Transfusión",
            "nivel": "44",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Separando los elementos vitales de la sangre del hechicero e imbuyéndolos sobre un aliado, permite que el brujo transfiera parte de sus puntos de vida a otra persona. La cantidad de PV que sacrifique el lanzador se multiplica por la cantidad que determine el grado del conjuro. Por ejemplo, si el brujo lanzara este conjuro en grado intermedio y sacrificara 10 PV, recuperaría 50 PV de su aliado. Este conjuro no permite restaurar miembros cercenados o pérdidas permanentes, pero sí elimina los penalizadores causados por los críticos en una cantidad equivalente a los puntos de vida sacrificados.",
            "zeon": {
                "base": 40,
                "intermedio": 60,
                "avanzado": 80,
                "arcano": 100
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 8,
                "avanzado": 10,
                "arcano": 12
            },
            "grados": {
                "base": "x2 a los PV sacrificados.",
                "intermedio": "x5 a los PV sacrificados",
                "avanzado": "x10 a los PV sacrificados.",
                "arcano": "x20 a los PV sacrificados."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Desangrar",
            "nivel": "54",
            "accion": "Activa",
            "tipo": "Anímico.",
            "efecto": "Este hechizo provoca que las heridas de un objetivo sangren horriblemente, incrementando así los daños que reciba. Mientras se mantenga activo, el afectado incrementa el daño que sufra en una cantidad determinada por el grado del conjuro. Para que Desangrar tenga efecto el daño resultante debe provenir de contusiones, hemorragias y cortes, mientras que las heridas provocadas por calor, frío o energía no se benefician de esta regla. Para evitar sus efectos, el objetivo debe superar un control de RM, pero puede volver a repetirlo cada vez que reciba un impacto cuyo daño sea incrementado por este sortilegio.",
            "zeon": {
                "base": 100,
                "intermedio": 150,
                "avanzado": 200,
                "arcano": 250
            },
            "inteligenciaRequerida": {
                "base": 6,
                "intermedio": 9,
                "avanzado": 12,
                "arcano": 15
            },
            "grados": {
                "base": "Incrementa el daño recibido un 50% / RM 120.",
                "intermedio": "Dobla el daño recibido / RM 140.",
                "avanzado": "Triplica el daño recibido / RM 160.",
                "arcano": "Cuadruplica el daño recibido / RM 180."
            },
            "mantenimiento": "10 / 15 / 20 / 25"
        },
        {
            "nombre": "Vampirismo",
            "nivel": "64",
            "accion": "Activa",
            "tipo": "Efecto",
            "efecto": "Este conjuro provoca que un arma beba parte de la sangre de aquellos a los que hiera, canalizando sus energías vitales y otorgándoselas al portador para que recupere sus PV perdidos. En el caso de que se ataque a un ser con acumulación de daño, la cantidad drenada debe dividirse por diez.",
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
                "base": "Drena el 10% de las heridas causadas.",
                "intermedio": "Drena el 20% de las heridas causadas.",
                "avanzado": "Drena el 30% de las heridas causadas.",
                "arcano": "Drena el 40% de las heridas causadas."
            },
            "mantenimiento": "10 / 10 / 15 / 15"
        },
        {
            "nombre": "Lágrimas de Sangre",
            "nivel": "74",
            "accion": "Activa",
            "tipo": "Anímico.",
            "efecto": "Este terrorífico conjuro provoca que la sangre del corazón de un objetivo se expanda y lo reviente desde dentro a causa de la presión. Si el personaje falla el control por más de 40 puntos muere de manera automática, mientras que si el nivel de fracaso no es superior a 40, recibe el daño determinado en la descripción del grado del conjuro.",
            "zeon": {
                "base": 320,
                "intermedio": 360,
                "avanzado": 400,
                "arcano": 280
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "RM o RF 140 / Daño 50.",
                "intermedio": "RM o RF 180 / Daño 100.",
                "avanzado": "RM o RF 220 / Daño 150.",
                "arcano": "RM o RF 260 / Daño 200."
            },
            "mantenimiento": "No"
        },
        {
            "nombre": "Corriente Sanguínea",
            "nivel": "84",
            "accion": "Pasiva",
            "tipo": "Efecto",
            "efecto": "Incrementa la velocidad del torrente sanguíneo del hechicero y aquellos aliados que designe, incrementando notablemente sus capacidades. Sin embargo, la presión a la que se somete el corazón de los beneficiarios del hechizo les provoca daños internos que pueden llegar a matarlos si se mantiene demasiado tiempo.",
            "zeon": {
                "base": 200,
                "intermedio": 240,
                "avanzado": 300,
                "arcano": 340
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 12,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "+10 a toda acción / -5 PV por turno.",
                "intermedio": "+20 a toda acción / -15 PV por turno.",
                "avanzado": "+40 a toda acción / -30 PV por turno.",
                "arcano": "+60 a toda acción / -50 PV por turno."
            },
            "mantenimiento": "40 / 50/ 60 / 70"
        },
        {
            "nombre": "Un Mundo de Sangre",
            "nivel": "94",
            "accion": "Activa",
            "tipo": "Anímico.",
            "efecto": "El hechicero obtiene un control absoluto sobre toda la sangre que se encuentre dentro del radio de acción del sortilegio. Su dominio es tal que puede desde paralizar los cuerpos de los seres vivos hasta crear prácticamente cualquier cosa que desee con la sangre que ya haya sido derramada. Cualquier individuo que se vea afectado por el conjuro debe superar un control de RM o RF para no verse controlado por el brujo como una marioneta, o sufrir si este lo desea un daño equivalente al doble del nivel de fracaso. En el caso de que el hechicero quiera usar la sangre como medio de ataque o de defensa (creando cuchillas, espinas o escudos), tiene la capacidad de emplear su proyección mágica para proyectarla como descargas afiladas o escudos místicos. Tanto el daño de sus ataques como la resistencia de los mismos es determinado por el grado del conjuro, pero únicamente puede usarla si hay suficiente sangre a su alrededor.",
            "zeon": {
                "base": 280,
                "intermedio": 320,
                "avanzado": 360,
                "arcano": 400
            },
            "inteligenciaRequerida": {
                "base": 10,
                "intermedio": 13,
                "avanzado": 15,
                "arcano": 17
            },
            "grados": {
                "base": "RM o RF 120 / Daño 60 / 500 Puntos de Resistencia.",
                "intermedio": "RM o RF 140 / Daño 90 / 1.200 Puntos de Resistencia.",
                "avanzado": "RM o RF 160 / Daño 120 / 2.400 Puntos de Resistencia.",
                "arcano": "RM o RF 180 / Daño 150 / 3.600 Puntos de Resistencia."
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

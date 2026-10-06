import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina Custom: Terrakinesis — Ad Astra (complemento fanmade)
export const disciplinaTerrakinesis = crearDisciplinaPsiquica({
    "id": "terrakinesis",
    "nombre": "Terrakinesis",
    "color": "#a16207",
    "descripcion": "Esta disciplina se centra en la manipulación y control geológico, permitiendo efectos variados como poder atacar a base de manipular la tierra para crear lanzas, crear puentes a partir de la propia roca o barro o incluso dotar al cuerpo de una gran capacidad regenerativa.",
    "modificador": "",
    "poderes": [
        {
            "id": "crecer-brote",
            "nombre": "Crecer Brote",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "Mediante la manipulación de las sales minerales, la savia, así como también de los tejidos celulares, el mentalista es capaz de nutrir y hacer crecer el cuerpo de plantas y vegetación que esté aún en estado de crecimiento hasta alcanzar su forma adulta o incluso regenerar bosques enteros a partir de troncos tallados de árboles. La única limitación para este poder es que se necesita una gran cantidad de agua para hacerlos crecer, por ello se necesita que las plantas sean capaces de suministrarles suficiente agua como para que crezcan sanas.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Hace crecer pequeños tallos hasta la mitad de su crecimiento natural"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Hace crecer tallos hasta convertirlos en árboles o plantas jóvenes. Sin frutos"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Permite alcanzar la madurez de la vegetación en la que enfoque su poder. Con frutos"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Como el anterior, pero en 25m de área a su alrededor"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Como el anterior, pero en 100m de área a su alrededor"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Como el anterior, pero 250m de área a su alrededor, así como también regenerar árboles a partir de troncos y tallos muertos. Se puede obtener hasta el doble de frutos"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Como el anterior, pero en 500m de área a su alrededor"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Permite acelerar grandes extensiones de vegetación, a partir de tan solo restos antiguos o muertos de bosques o vegetación ya vencida en un 1KM de área a su alrededor"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Permite acelerar enormes masas de vegetación, pudiendo hacer crecer por ejemplo una selva entera a su alrededor a partir de semillas, brotes o tallos caídos. 5 KM de área"
                }
            ]
        },
        {
            "id": "espinas",
            "nombre": "Espinas",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "Gracias a su control geológico, el mentalista es capaz de alzar espinas de tierra que atraviesan a sus enemigos, pudiendo crear devastadores ataques en área en altos grados. En caso de encontrarse demasiado lejos de una fuente de la cual poder extraer la materia, aplicará un penalizador a su potencial y su proyección de -30. En caso de no encontrarse en ningún lado alrededor del mentalista, simplemente no surte efecto.\n\nAtaca en la TA de PENetrante.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "1 Ataque / 40 de Daño"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "1 Ataque / 60 de Daño"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "2 Ataques / 60 de daño"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "2 Ataques / 80 de daño"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "3 Ataques / 80 de daño"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "3 Ataques / 100 de daño"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "4 Ataques o Ataque en área de 25m de radio / 100 de daño"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "4 Ataques o Ataque en área de 50m de radio / 150 de daño"
                }
            ]
        },
        {
            "id": "alzar-muro",
            "nombre": "Alzar Muro",
            "nivel": "1",
            "accion": "Activa/Pasiva",
            "mantenimiento": "Sí",
            "descripcion": "Manipulando la tierra, roca, minerales y cualquier elemento que pueda proporcionarle la tierra, es capaz de crear un muro de una altura determinada por el grado que alcance el mentalista. Alternativamente, puede utilizar esa manipulación para generar un escudo a su alrededor, permitiéndole defenderse de ataques dirigidos contra el mentalista.\n\nLa extensión del muro es igual al doble de los metros de altura indicados en el nivel de poder alcanzado.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 3"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "2m / 200 PVs / Barrera de daño 30"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "5m / 400 PVs / Barrera de daño 40"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "15m / 600 PVs / Barrera de daño 60"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "30m / 800 PVs / Barrera de daño 80"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "100m / 800 PVs / Permite proteger hasta 2 personas / Barrera de daño 80"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "200m / 1000 PVs / Permite proteger hasta 4 personas / Barrera de daño 100"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "400m / 2000 PVs / Permite proteger hasta 5 personas /Barrera de daño 120"
                }
            ]
        },
        {
            "id": "control-geologico",
            "nombre": "Control Geológico",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "Controla a placer la forma, así como las propiedades de los minerales y la tierra a su alrededor siempre y cuando no supere los kilos indicados por el nivel de poder alcanzado. Utilizado en un elemental, es capaz de controlarlo a menos que esta supere una RF contra la dificultad indicada en el valor alcanzado.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "2 Kg / 80 RF"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "4 Kg / 100 RF"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "10 Kg / 120 RF"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "20 Kg / 140 RF"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "50 Kg / 160 RF"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "80 Kg / 180 RF"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "150 Kg / 200 RF"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "300 Kg / 240 RF"
                }
            ]
        },
        {
            "id": "curacion",
            "nombre": "Curación",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "El mentalista es capaz de regenerar rápidamente un cuerpo a cambio de un desgaste físico por parte de la persona sanada. Estimulando su metabolismo y potenciándolo es capaz de cerrar profundas heridas en cuestión de segundos, aunque no es capaz de regenerar miembros perdidos ni tampoco críticos de amputación o rotura, únicamente los de dolor. La única limitación de este poder es que únicamente puede usarse 1 vez al día sobre la misma persona y 3 veces a la semana como máximo. De otro modo el desgaste físico sería tan grande para el objetivo que tendría efectos adversos a los deseados.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 5"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 3"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "40 PVs / -10 a críticos causados por dolor / -1 Cansancios"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "100 PVs / -30 a críticos causador por dolor / -2 Cansancios"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "150 PVs / -50 a críticos causados por dolor / -2 Cansancio"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "200 PVs / -80 a críticos causados por dolor / -3 Cansancio"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "300 PVs / -120 a críticos causados por dolor / -3 Cansancio"
                }
            ]
        },
        {
            "id": "terremoto",
            "nombre": "Terremoto",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "El psíquico es capaz de controlar a tal nivel la tierra a su alrededor que es capaz de mover dos placas tectónicas y hacerlas chocar entre ellas, creando unas fuertes sacudidas capaces de hacer temblar todo a su alrededor y derribar estructuras a la vez que a cualquiera que se encuentre en su interior. Dependiendo del nivel alcanzado de poder los afectados dentro del área tendrán que superar un control de agilidad o verse derribados. Además, cualquier estructura con una barrera de daño inferior a la indicada es automáticamente destruida.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 8"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Agilidad 10 // Barrera 40 // 10m de radio"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Agilidad 12 // Barrera 60 // 25m de radio"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Agilidad 14 // Barrera 80 // 25m de radio"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Agilidad 16 // Barrera 100 // 50m de radio"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Agilidad 18 // Barrera 120 // 80m de radio"
                }
            ]
        },
        {
            "id": "golemancia",
            "nombre": "Golemancia",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "El psíquico es capaz de crear mediante el control elemental un constructo de menor o mayor complejidad dependiendo del grado del conjuro, así como ordenar pequeñas tareas las cuales el gólem realiza de manera autónoma. A efectos de juego el psíquico puede crear un ser entre mundos, elemental de tierra y constructo, el cual tendrá una fuerza y constitución indicadas por el nivel alcanzado del poder que seguirás las órdenes que el mentalista le ordene. Esto no significa que el mentalista tenga capacidad de comunicarle de manera innata las órdenes.\n\nEl constructo se considera una criatura de nivel y gnosis 0 de acumulación cuyas características jamás podrán superar el 5, a excepción de Fuerza y Constitución, las cuales están indicadas en el nivel alcanzado del poder. Nunca podrá tener habilidades que requieran conocimiento y su habilidad de ataque jamás podrá superar el 50. Por cada punto de Constitución, el gólem obtendrá 100 Puntos de Vida, que no podrá recuperar de ninguna manera. Si por algún casual sus PV descendieran hasta 0, el gólem se haría polvo y volvería a formar rocas y tierra en el suelo. Exactamente lo mismo que ocurre al dejar de mantener el poder psíquico.\n\nEl constructo jamás podrá realizar una tarea que requiera una secundaria mayor que la otorgada por su creador en el momento de su creación.\n\nDependiendo del grado alcanzado, irá perdiendo fuerza y niveles a un ritmo de 1 grado por minuto hasta que finalmente obtenga su tamaño y nivel equivalentes al mantenimiento innato del psíquico.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Constitución y Fuerza 7 // Barrera de daño 60"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Constitución y Fuerza 9 // Barrera de daño 60"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Constitución y Fuerza 11 // Barrera de daño 80 // Nivel 1"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Constitución y Fuerza 13 // Barrera de daño 80 // Nivel 2"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Constitución y Fuerza 15 // Barrera de daño 120 // Nivel 3"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Constitución y Fuerza 18 // Barrera de daño 140 // Nivel 5"
                }
            ]
        },
        {
            "id": "fortificacion",
            "nombre": "Fortificación",
            "nivel": "2",
            "accion": "Pasiva",
            "mantenimiento": "Sí",
            "descripcion": "Acumulando tierra, metales y minerales alrededor del cuerpo del psíquico, es capaz de crear capas artificiales con las cuales amortiguar los golpes. Gracias a esto el psíquico o quién este designe necesita realizar defensa alguna, depende únicamente de su capacidad de absorber daño. Los puntos de vida son artificiales y no pueden ser usados cómo pago de vida o sacrificio vital para hechizos, legados, técnicas de Ki o cualquier clase de sistema sobrenatural. Aunque no aplica penalizador al turno, la armadura cuenta como una capa adicional siguiendo las normas generales. En caso de no poder mantener el poder en la dificultad alcanzada, los puntos de vida temporales se irán reduciendo a un ritmo de 20 por turno hasta llegar al mínimo capaz de mantenerse. Las TA’s y barrera de daño y reducción de daño se verán reducidas inmediatamente.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 8"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "200 PVs // TA 4"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "400 PVs // TA 4"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "600 PVs // TA 5 // Barrera de daño 80 // Reduce en 10 el daño base recibido"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "800 PVs // TA 5 // Barrera de daño 100 // Reduce en 20 el daño base recibido"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "1200 PVs // TA 6 // Barrera de daño 120 // Reduce en 30 el daño base recibido"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "1500 Pvs // TA 8 // Barrera de daño 140 // Reduce en 40 el daño base recibido"
                }
            ]
        },
        {
            "id": "construccion",
            "nombre": "Construcción",
            "nivel": "3",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "Gracias a la experta manipulación de los elementos y de su entorno, el psíquico es capaz no solo de hacer que la tierra tome la forma que quiera, si no de crear también complejas edificaciones e incluso grandes infraestructuras en altos niveles, permitiéndole con tan solo su capacidad mental, construir cualquier edificación que sea capaz de imaginar. Como norma opcional, el DJ podría requerir un control de la secundaria Arte (Arquitectura), para poder manifestar completamente las capacidades de este poder. En caso de no poder mantener el poder en el grado alcanzado, la tierra comenzará a desmoronarse, evitando completar así la obra o construcción, ya que necesita varios minutos para formarse completamente.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 10"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 8"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Permite crear edificaciones como casas, caserones y pequeños casoplones."
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Permite crear edificaciones como mansiones, pequeñas fortificaciones, puentes de grandes dimensiones y monumentos."
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Permite crear edificaciones como castillos, puentes de decenas de metros, acueductos y grandes monumentos."
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Permite crear cualquier edificación imaginable, de hasta 5 KM de radio y 1 KM de altura."
                }
            ]
        },
        {
            "id": "ragnarok",
            "nombre": "Ragnarok",
            "nivel": "3",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "Aclamando a la ira de la tierra, el mentalista forma una enorme masificación de tierra, metal y minerales, los cuales toman el aspecto de una enorme espada solidificada capaz de atravesar con gran facilidad cualquier cosa que se anteponga a ella. La espada puede atacar en la TA de FILo o PENetrante.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 8"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Daño 120 // -2 TA"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Daño 180 // -3 TA"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Daño 240 // -4 TA"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Daño 300 // -5 TA"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Daño 400 // -6 TA"
                }
            ]
        },
        {
            "id": "bendicion-de-gaia",
            "nombre": "Bendición de Gaia",
            "nivel": "3",
            "accion": "Pasiva",
            "mantenimiento": "Sí",
            "descripcion": "Implorando a la tierra y concentrando sus poderes al máximo, el mentalista es capaz de reforzar el cuerpo y los tejidos de una persona, haciendo que estos, aunque no se regeneren, no terminen de desgastarse o destruirse, uniéndolos de manera psíquica y evitando que el sujeto entre en el estado de la vida y la muerte, superándola automáticamente además aumentar la cantidad de puntos de vida en negativo en los que puede estar antes de fallecer. En caso de utilizarse las normas de entre la vida y la muerte de la pantalla del director, otorgará un bono a la RF para superar el control. Una vez el efecto termine, el sujeto tendrá que superar un control de RF para ver si queda o no inconsciente.\n\nCabe destacar que estos bonos pueden sumarse a otros obtenidos de ventajas, legados u otros métodos, aumentando así la cantidad que estos pueden aguantar de por sí. Por ejemplo, alguien con el Legado de Sangre Eterna podría aumentar su nivel de vida negativa en Constitución x30 en el grado imposible, 20 por el legado y 10 por alcanzar el grado imposible. Lo mismo ocurre con el bono a la RF.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": ""
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 10"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 3"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Constitución x10 // +40 RF"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Constitución x15 // +80 RF"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Constitución x20 // +120 RF"
                }
            ]
        }
    ]
});

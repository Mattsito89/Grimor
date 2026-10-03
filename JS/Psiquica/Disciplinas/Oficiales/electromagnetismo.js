import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Electromagnetismo
export const disciplinaElectromagnetismo = crearDisciplinaPsiquica({
    id: "electromagnetismo",
    nombre: "Electromagnetismo",
    color: "#38bdf8",
    descripcion: "Esta disciplina permite controlar el magnetismo y la electricidad que genera. Modificador: En ambientes ionizados el psíquico obtiene un +20 a su potencial, mientras que en aquellos sin fuerza magnética, aplica un -20.",
    modificador: "En ambientes ionizados el psíquico obtiene un +20 a su potencial, mientras que en aquellos sin fuerza magnética, aplica un -20.",
    poderes: [
        {
            id: "percibir-electricidad",
            nombre: "Percibir Electricidad",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Detecta cualquier intensidad de electricidad en un radio de acción. Puede percibirse incluso a través de paredes y obstáculos, siempre que no se traten de elementos aislantes a la electricidad. En grados mayores es posible incluso detectar fuentes de vida que usen impulsos eléctricos en su organismo, aunque únicamente puede determinar su tamaño aproximado. Para evitar la detección, es necesario superar una RF.",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 2"
            },
            {
                "dificultad": "Medio",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Difícil",
                "resultado": "10 Metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "25 Metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "50 Metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "100 Metros de radio / RF 120"
            },
            {
                "dificultad": "Imposible",
                "resultado": "500 Metros de radio / RF 140"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "1 Kilómetro de radio / RF 160"
            },
            {
                "dificultad": "Zen",
                "resultado": "5 Kilómetros de radio / RF 180"
            }
        ]
        },
        {
            id: "crear-electricidad",
            nombre: "Crear Electricidad",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Crea intensidades de electricidad.",
            efectos: [
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
                "resultado": "1 Intensidad"
            },
            {
                "dificultad": "Difícil",
                "resultado": "3 Intensidades"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "5 Intensidades"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "7 Intensidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "10 Intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "13 Intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "16 Intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "20 Intensidades"
            }
        ]
        },
        {
            id: "controlar-electricidad",
            nombre: "Controlar Electricidad",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Controla la dirección y el comportamiento de las intensidades alcanzadas por el poder. Podría hacer saltar la electricidad a un objeto y evitar que se disipe o alterar la dirección de un rayo dirigiéndolo con su Proyección Psíquica contra un objetivo. Si se usa sobre un ser elemental de electricidad, este puede resistirse superando la RF contra la dificultad indicada.",
            efectos: [
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
                "resultado": "4 Intensidad / 80 RF"
            },
            {
                "dificultad": "Difícil",
                "resultado": "6 Intensidades / 100 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "8 Intensidades / 120 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "12 Intensidades / 140 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "16 Intensidades / 160 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "20 Intensidades / 180 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "25 Intensidades / 200 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "30 Intensidades / 240 RF"
            }
        ]
        },
        {
            id: "manipulaci-n-magn-tica",
            nombre: "Manipulación magnética",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico obtiene la capacidad de manejar las fuerzas magnéticas de los objetos a su alcance y desplazarlos a voluntad. El peso máximo están determinados por la dificultad alcanzada. El psíquico también puede mover dichos objetos por el aire, pero en tal caso, el peso que mueve queda reducido a la mitad.",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 2"
            },
            {
                "dificultad": "Medio",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Difícil",
                "resultado": "1 Kilogramo"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "5 Kilogramos"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "10 Kilogramos"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "25 Kilogramos"
            },
            {
                "dificultad": "Imposible",
                "resultado": "50 Kilogramos"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "100 Kilogramos"
            },
            {
                "dificultad": "Zen",
                "resultado": "500 Kilogramos"
            }
        ]
        },
        {
            id: "escudo-magn-tico",
            nombre: "Escudo Magnético",
            nivel: "2",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Crea un escudo magnético que defiende a su usuario contra elementos metálicos y otros ataques eléctricos. Cualquier ataque realizado mediante un medio completamente metálico aplica un -20 a su habilidad ofensiva. A ciertos grados, el potencial es tal que es posible parar cualquier cosa física, incluso si no es de metal.",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 2"
            },
            {
                "dificultad": "Medio",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Difícil",
                "resultado": "600 PV"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "800 PV"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "1.200 PV"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "1.800 PV / Permite parar cualquier clase de ataque físico"
            },
            {
                "dificultad": "Imposible",
                "resultado": "2.500 PV / Permite parar cualquier clase de ataque físico"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "4.000 PV / Permite parar cualquier clase de ataque físico"
            },
            {
                "dificultad": "Zen",
                "resultado": "6.000 PV / Permite parar cualquier clase de ataque físico"
            }
        ]
        },
        {
            id: "leer-impulsos-el-ctricos",
            nombre: "Leer Impulsos Eléctricos",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Mediante el control de este poder el psíquico es capaz de notar pequeñas alteraciones en los campos eléctricos e incluso leer los impulsos que utilizan los músculos de los seres vivos para realizar sus movimientos, de manera que el psíquico puede preveer cuales serán sus acciones y obtener un bono de +30 a todas las acciones físicas enfrentadas en su contra (en el caso de ser una criatura basada en electricidad, este bono se incrementa a +60). Para resistirse a este poder es necesario superara una RF contra la dificultad alcanzada.",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 2"
            },
            {
                "dificultad": "Medio",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Difícil",
                "resultado": "100 RF / 10 Metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "120 RF / 25 Metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "140 RF / 50 Metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "160 RF / 100 Metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "180 RF / 150 Metros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "200 RF /250 Metros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "220 RF / 1 Kilómetro de radio"
            }
        ]
        },
        {
            id: "arco-el-ctrico",
            nombre: "Arco Eléctrico",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El psíquico proyecta una descarga eléctrica utilizando su Proyección Psíquica. Este poder ataca en Electricidad y el daño base viene determinado por lo que indique el potencial alcanzado. El ataque es perfectamente visible, incluso por aquellos incapaces de ver matrices.",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 2"
            },
            {
                "dificultad": "Medio",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Daño 60"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Daño 80"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Daño 120"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Daño 140"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Daño 160"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Daño 180"
            },
            {
                "dificultad": "Zen",
                "resultado": "Daño 200"
            }
        ]
        },
        {
            id: "ataque-de-aceleraci-n-magn-tica",
            nombre: "Ataque de Aceleración Magnética",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El psíquico manipula los campos gravitatorios para crear un túnel de aceleración que proyecta objetos metálicos con una fuerza desproporcionada. El daño del ataque es el doble del daño base del objeto utilizado, más un bono determinado por el potencial alcanzado. El ataque no se detiene al alcanzar su blanco, si no que continua en línea hasta una distancia máxima realizando el mismo ataque contra todos los objetivos que encuentre en su trayectoria. Un ataque lineal pone al rojo la munición debido a la fricción producida por la velocidad, por lo que el proyectil se destruye en el proceso si este no supera un control de Rotura. Ataca en Penetrante y en Calor, reduciendo 2 puntos el Tipo de Armadura del defensor.",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 12"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 10"
            },
            {
                "dificultad": "Medio",
                "resultado": "Fatiga 8"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Fatiga 6"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Fatiga 2"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "+20 al Daño / Rotura 14 50 Metros de línea / 500 Gramos"
            },
            {
                "dificultad": "Imposible",
                "resultado": "+40 al Daño / Rotura 18 100 Metros de línea / 1 Kilo"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "+80 al Daño / Rotura 26 150 Metros de línea / 10 Kilos"
            },
            {
                "dificultad": "Zen",
                "resultado": "+120 al Daño / Rotura 30 300 Metros de línea / 100 Kilos"
            }
        ]
        },
        {
            id: "controlar-impulsos-el-ctricos",
            nombre: "Controlar Impulsos Eléctricos",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El control sobre la electricidad que obtiene el psíquico con este poder es tal que puede controlar y redirigir los impulsos eléctricos de forma precisa, interrumpiendo los movimientos de otros seres o incluso, en grados mayores, obteniendo el control de sus acciones. Para evitar sus efectos es necesario superar la RF indicada en la dificultad alcanzada. Naturalmente, sólo afecta a seres físicos.",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 12"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 10"
            },
            {
                "dificultad": "Medio",
                "resultado": "Fatiga 8"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Fatiga 6"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Fatiga 2"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "-40 a toda acción / RF 120."
            },
            {
                "dificultad": "Imposible",
                "resultado": "-80 a toda acción / RF 140."
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Control parcial sobre el cuerpo / RF 160"
            },
            {
                "dificultad": "Zen",
                "resultado": "Control total sobre el cuerpo / RF 180 Teletransporte Esta disciplina controla el espacio así como su entendimiento por parte del mentalista."
            }
        ]
        }
    ]
});

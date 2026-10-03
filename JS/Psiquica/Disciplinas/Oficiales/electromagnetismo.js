import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Electromagnetismo
export const disciplinaElectromagnetismo = crearDisciplinaPsiquica({
    id: "electromagnetismo",
    nombre: "Electromagnetismo",
    color: "#38bdf8",
    descripcion: "permite controlar el magnetismo y la electricidad que genera. potencial, mientras que en aquellos sin fuerza magnética, aplica un -20.",
    modificador: "En ambientes ionizados el psíquico obtiene un +20 a su",
    poderes: [
        {
            id: "percibir-electricidad",
            nombre: "Percibir Electricidad",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Detecta cualquier intensidad de electricidad en un radio de",
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
            descripcion: "Controla la dirección y el comportamiento de las",
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
            descripcion: "El psíquico obtiene la capacidad de manejar las fuerzas",
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
            descripcion: "Crea un escudo magnético que defiende a su usuario",
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
            descripcion: "Mediante el control de este poder el psíquico es capaz",
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
            descripcion: "El psíquico proyecta una descarga eléctrica utilizando",
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
            descripcion: "El psíquico manipula los campos gravitatorios para crear",
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
            descripcion: "El control sobre la electricidad que obtiene el psíquico con",
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

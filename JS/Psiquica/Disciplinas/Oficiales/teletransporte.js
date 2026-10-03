import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Teletransporte
export const disciplinaTeletransporte = crearDisciplinaPsiquica({
    id: "teletransporte",
    nombre: "Teletransporte",
    color: "#14b8a6",
    descripcion: "controla el espacio así como su entendimiento por parte del mentalista.",
    modificador: "",
    poderes: [
        {
            id: "recolocar-objeto",
            nombre: "Recolocar Objeto",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Permite cambiar la localización de un objeto inorgánico",
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
                "resultado": "1 Kilogramo / 1 Metro / RF 60"
            },
            {
                "dificultad": "Difícil",
                "resultado": "2 Kilogramos / 5 Metros / RF 80"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "5 Kilogramos / 100 Metros / RF 100"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "10 Kilogramos / 500 Metros / RF 120"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "25 Kilogramos / 1 Kilómetro / RF 140"
            },
            {
                "dificultad": "Imposible",
                "resultado": "50 Kilogramos / 2 Kilómetros / RF 160"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "100 Kilogramos / 5 Kilómetros / RF 180"
            },
            {
                "dificultad": "Zen",
                "resultado": "500 Kilogramos / 10 Kilómetros / RF 200"
            }
        ]
        },
        {
            id: "autorrecolocaci-n",
            nombre: "Autorrecolocación",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Cambia la posición del psíquico en el mundo. Es necesario",
            efectos: [
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
                "resultado": "1 Metro"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "5 Metros"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "10 Metros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "25 Metros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "50 Metros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "100 Metros"
            },
            {
                "dificultad": "Zen",
                "resultado": "250 Metros"
            }
        ]
        },
        {
            id: "trasporte-defensivo",
            nombre: "Trasporte Defensivo",
            nivel: "1",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Usa la capacidad de transporte del psíquico para, realizando",
            efectos: [
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
                "resultado": "1 Esquiva / 5 Metros"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "2 Esquivas / 10 Metros"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "3 Esquivas / 15 Metros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "4 Esquivas / 25 Metros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "6 Esquivas / 50 Metros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "8 Esquivas / 100 Metros"
            },
            {
                "dificultad": "Zen",
                "resultado": "Esquivas ilimitadas / Nunca sufre el penalizador de área"
            }
        ]
        },
        {
            id: "autorrecolocaci-n-mayor",
            nombre: "Autorrecolocación Mayor",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Versión potencial de la Autorecolocación, que permite al",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 12"
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
                "resultado": "1 Kilómetro"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "10 Kilómetros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "100 Kilómetros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "1.000 Kilómetros"
            },
            {
                "dificultad": "Zen",
                "resultado": "Cualquier lugar del mundo"
            }
        ]
        },
        {
            id: "aleph",
            nombre: "Aleph",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Permite ver todo el espacio en un único punto, observando",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 16"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 12"
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
                "resultado": "10 Kilómetros / Percepción 20 RP 140 o Shock -2"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "100 Kilómetros / Percepción 18 RP 160 o Shock -4"
            },
            {
                "dificultad": "Imposible",
                "resultado": "1.000 Kilómetros / Percepción 16 RP 180 o Shock -6"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "10.000 Kilómetros / Percepción 14 RP 200 o Shock -10"
            },
            {
                "dificultad": "Zen",
                "resultado": "Cualquier Distancia / Percepción 12 RP 240 o Shock -14"
            }
        ]
        },
        {
            id: "recolocar-objeto-mayor",
            nombre: "Recolocar Objeto Mayor",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Este poder es una versión más poderosa de Recolocar",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 24"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 20"
            },
            {
                "dificultad": "Medio",
                "resultado": "Fatiga 16"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Fatiga 12"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Fatiga 8"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "1.000 Toneladas / 1 Kilómetro / RF 140"
            },
            {
                "dificultad": "Imposible",
                "resultado": "10.000 Toneladas / 10 Kilómetros RF 160"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "100.000 Toneladas / 100 Kilómetros RF 180"
            },
            {
                "dificultad": "Zen",
                "resultado": "1.000.000 Toneladas Cualquier lugar del mundo / RF 200"
            }
        ]
        },
        {
            id: "teletrasporte",
            nombre: "Teletrasporte",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Permite al psíquico teletransportar cualquier cosa, orgánica",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 12"
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
                "resultado": "1 Kilómetro / RF 120 / 100 kilogramos"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "10 Kilómetros / RF 140 / 500 kilogramos"
            },
            {
                "dificultad": "Imposible",
                "resultado": "100 Kilómetros / RF 160 / 1 tonelada"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "1.000 Kilómetros / RF 180 / 10 toneladas"
            },
            {
                "dificultad": "Zen",
                "resultado": "10.000 Kilómetros / RF 200 / 100 toneladas Luz Esta disciplina permite al psíquico controla la luz y las materias reflectantes."
            }
        ]
        }
    ]
});

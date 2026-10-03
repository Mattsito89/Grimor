import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Luz
export const disciplinaLuz = crearDisciplinaPsiquica({
    id: "luz",
    nombre: "Luz",
    color: "#fde047",
    descripcion: "permite al psíquico controla la luz y las materias reflectantes.",
    modificador: "",
    poderes: [
        {
            id: "manipular-la-luz",
            nombre: "Manipular la Luz",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Otorga al psíquico la capacidad de controlar la intensidad y",
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
                "resultado": "1 metro de radio / 100 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "5 metros de radio / 120 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "10 metros de radio / 140 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "25 metros de radio / 160 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "50 metros de radio / 180 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "250 metros de radio / 200 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "500 metros de radio / 240 RF"
            }
        ]
        },
        {
            id: "crear-luz",
            nombre: "Crear Luz",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Crea luz a voluntad del psíquico en un radio de acción.",
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
                "resultado": "1 metro de radio"
            },
            {
                "dificultad": "Difícil",
                "resultado": "5 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "10 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "25 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "50 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "100 metros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "250 metros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "500 metros de radio"
            }
        ]
        },
        {
            id: "flash-de-luz",
            nombre: "Flash de Luz",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El psíquico crea un intenso resplandor de luz de una zona",
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
                "resultado": "RF 80 / 5 metros de radio"
            },
            {
                "dificultad": "Difícil",
                "resultado": "RF 100 / 10 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "RF 120 / 15 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "RF 140 / 25 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "RF 160 / 50 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "RF 180 / 75 metros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "RF 200 / 100 metros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "RF 220 / 150 metros de radio"
            }
        ]
        },
        {
            id: "pantalla-de-luz",
            nombre: "Pantalla de Luz",
            nivel: "2",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Alterando la composición de la luz, el psíquico crea",
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
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "500 PV"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "800 PV"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "1.000 PV"
            },
            {
                "dificultad": "Imposible",
                "resultado": "1.500 PV"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "2.000 PV"
            },
            {
                "dificultad": "Zen",
                "resultado": "3.000 PV"
            }
        ]
        },
        {
            id: "holograma",
            nombre: "Holograma",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Manipulando la luz, el psíquico crea imágenes holográficas",
            efectos: [
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
                "resultado": "1 metro cuadrado holográfico"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "5 metro cuadrado holográfico"
            },
            {
                "dificultad": "Imposible",
                "resultado": "10 metro cuadrado holográfico"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "25 metro cuadrado holográfico"
            },
            {
                "dificultad": "Zen",
                "resultado": "50 metro cuadrado holográfico"
            }
        ]
        },
        {
            id: "l-ser",
            nombre: "Láser",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El psíquico comprime la luz creando un destructivo",
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
                "resultado": "Daño Base 160 / -2 TA"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Daño Base 180 / -4 TA"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Daño Base 200 / -6 TA"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Daño Base 220 / -8 TA"
            },
            {
                "dificultad": "Zen",
                "resultado": "Daño Base 240 / -10 TA Hipersensibilidad Esta disciplina es el empleo del poder de la mente sobre los sentidos básicos, aumentándolos y mejorándolos hasta grados imposibles. Modificador: Salvo que se indique lo contrario, se aplican los mismos modificadores que a cualquier habilidad Perceptiva."
            }
        ]
        }
    ]
});

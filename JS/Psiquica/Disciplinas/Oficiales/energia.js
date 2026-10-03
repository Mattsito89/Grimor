import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Energía
export const disciplinaEnerga = crearDisciplinaPsiquica({
    id: "energia",
    nombre: "Energía",
    color: "#facc15",
    descripcion: "Esta disciplina permite al psíquico usar sus poderes para generar energía pura, e influir en menor grado en el calor, el frio y la electricidad. La matriz psíquica se materializa, afectando físicamente al mundo material de muy diversos modos. No tiene ningún modificador.",
    modificador: "",
    poderes: [
        {
            id: "crear-energ-a",
            nombre: "Crear energía",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Crea intensidades de energía o aumenta en la misma cantidad",
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
                "resultado": "1 intensidad"
            },
            {
                "dificultad": "Difícil",
                "resultado": "3 intensidades"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "5 intensidades"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "7 intensidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "10 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "13 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "16 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "20 intensidades"
            }
        ]
        },
        {
            id: "percibir-energ-a",
            nombre: "Percibir energía",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico percibe la energía que se encuentra a su",
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
                "resultado": "10 metros de radio"
            },
            {
                "dificultad": "Difícil",
                "resultado": "50 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "100 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "250 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "500 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "1 kilómetro de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "10 kilómetros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "100 kilómetros de radio"
            }
        ]
        },
        {
            id: "creaci-n-de-energ-a",
            nombre: "Creación de energía",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Crea un único objeto material simple, dándole forma",
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
                "resultado": "1 metro cúbico"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "2 metros cúbicos"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "3 metros cúbicos"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "4 metros cúbicos"
            },
            {
                "dificultad": "Imposible",
                "resultado": "5 metros cúbicos"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "10 metros cúbicos"
            },
            {
                "dificultad": "Zen",
                "resultado": "20 metros cúbicos"
            }
        ]
        },
        {
            id: "descarga-de-energ-a",
            nombre: "Descarga de energía",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Permite al personaje realizar un ataque utilizando su energía psíquica. La descarga es perfectamente visible incluso para aquellos que no sean capaces de ver matrices.",
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
                "resultado": "Daño 50"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Daño 70"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Daño 100"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Daño 120"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Daño 140 / Afecta a seres inmateriales"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Daño 180 / Afecta a seres inmateriales"
            },
            {
                "dificultad": "Zen",
                "resultado": "Daño 220 / Afecta a seres inmateriales"
            }
        ]
        },
        {
            id: "escudo-de-energ-a",
            nombre: "Escudo de energía",
            nivel: "1",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Forma un escudo de energía que protege al psíquico frente a",
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
                "resultado": "300 PV"
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
                "resultado": "1.400 PV"
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
            id: "deshacer-energ-a",
            nombre: "Deshacer energía",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Disminuye varias intensidades de energía, salvo aquellas que",
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
                "resultado": "-1 intensidad / 100 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "-3 intensidades / 120 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "-5 intensidades / 140 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "-8 intensidades / 160 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "-12 intensidades / 180 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "-18 intensidades / 200 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "-24 intensidades / 240 RF"
            }
        ]
        },
        {
            id: "inmunidad",
            nombre: "Inmunidad",
            nivel: "2",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "El psíquico, o la persona designada por este, se vuelve",
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
                "resultado": "10 intensidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "15 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "20 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "30 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "40 intensidades"
            }
        ]
        },
        {
            id: "controlar-energ-a",
            nombre: "Controlar energía",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Otorga al psíquico el control completo de varias intensidades",
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
                "resultado": "4 intensidades / 80 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "6 intensidades / 100 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "8 intensidades / 120 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "12 intensidades / 140 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "16 intensidades / 160 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "20 intensidades / 180 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "25 intensidades / 220 RF"
            }
        ]
        },
        {
            id: "modificar-naturaleza",
            nombre: "Modificar naturaleza",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Este poder permite transformar varias intensidades de",
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
                "resultado": "6 intensidades / 100 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "8 intensidades / 120 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "12 intensidades / 140 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "16 intensidades / 160 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "20 intensidades / 180 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "25 intensidades / 220 RF"
            }
        ]
        },
        {
            id: "c-pula-de-energ-a",
            nombre: "Cúpula de energía",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El psíquico crea una cúpula de energía que destruye todo lo que se pone en contacto con ella. Es perfectamente visible incluso para individuos que no son capaces de ver matrices. El poder",
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
                "resultado": "Daño 100 / 25 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Daño 120 / 50 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Daño 140 / 100 metros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Daño 160 / 200 metros de radio Puede dañar a seres inmateriales"
            },
            {
                "dificultad": "Zen",
                "resultado": "Daño 200 / 500 metros de radio Puede dañar a seres inmateriales"
            }
        ]
        },
        {
            id: "energ-a-mayor",
            nombre: "Energía mayor",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Versión incrementada del poder de primer nivel Crear",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 20"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 16"
            },
            {
                "dificultad": "Medio",
                "resultado": "Fatiga 12"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Fatiga 8"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Fatiga 6"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "25 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "35 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "45 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "55 intensidades TELEMETRÍA La Telemetría es la capacidad mental de percibir los residuos ambientales de tiempos pasados. Ello se debe a que la matriz psíquica de cada persona deja siempre tras de sí cierta energía residual, que depende de su estado de ánimo y de sus pensamientos en cada momento. Un individuo con esta disciplina es capaz de percibir dichos residuos y, consecuentemente, de sentir en mayor o menor grado lo que ha ocurrido en el pasado. Modificador: Siempre que un psíquico utilice uno de sus poderes telemétricos sobre algo con lo que se encuentre en contacto físico (ya sea un objeto o una persona), puede sumar un bonificador de +10 a su potencial."
            }
        ]
        }
    ]
});

import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Piroquinesis
export const disciplinaPiroquinesis = crearDisciplinaPsiquica({
    id: "piroquinesis",
    nombre: "Piroquinesis",
    color: "#f97316",
    descripcion: "Esta disciplina permite al psíquico tener dominio sobre las altas temperaturas y el fuego. Puede controlar su forma o volverse inmune a los efectos del calor. disminuye su potencial de la siguiente manera: Zona helada o ártico -30 Frío intenso -10 Ante una gran hoguera +10 Incendio de grandes proporciones +20 Volcán +30",
    modificador: "El entorno en el que se encuentre el psíquico aumenta o",
    poderes: [
        {
            id: "crear-fuego",
            nombre: "Crear fuego",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Crea intensidades de fuego o aumenta en la misma cantidad",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Fácil",
                "resultado": "1 intensidad"
            },
            {
                "dificultad": "Medio",
                "resultado": "3 intensidades"
            },
            {
                "dificultad": "Difícil",
                "resultado": "5 Intensidades"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "7 intensidades"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "10 intensidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "13 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "16 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "20 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "25 intensidades"
            }
        ]
        },
        {
            id: "mitigar-fuego",
            nombre: "Mitigar fuego",
            nivel: "1",
            accion: "Activo",
            mantenimiento: "No",
            descripcion: "Disminuye varias intensidades de un fuego ya existente. Si se",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Fácil",
                "resultado": "-1 intensidad / 80 RF"
            },
            {
                "dificultad": "Medio",
                "resultado": "-3 intensidades / 100 RF"
            },
            {
                "dificultad": "Difícil",
                "resultado": "-5 intensidades / 120 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "-7 intensidades / 140 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "-10 intensidades / 160 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "-15 intensidades / 180 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "-20 intensidades / 200 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "-30 intensidades / 220 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "-40 intensidades / 260 RF"
            }
        ]
        },
        {
            id: "controlar-el-fuego",
            nombre: "Controlar el fuego",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Controla el crecimiento y el tamaño de un fuego que no",
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
                "resultado": "4 intensidades / 80 RF"
            },
            {
                "dificultad": "Difícil",
                "resultado": "6 intensidades / 100 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "8 intensidades / 120 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "12 intensidades / 140 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "16 intensidades / 160 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "20 intensidades / 180 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "25 intensidades / 200 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "30 intensidades / 240 RF"
            }
        ]
        },
        {
            id: "inmolar",
            nombre: "Inmolar",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El psíquico provoca una explosión de fuego sobre una",
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
                "resultado": "Daño 60 / 5 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Daño 80 / 10 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Daño 100 / 20 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Daño 120 / 30 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Daño 150 / 50 metros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Daño 200 / 100 metros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "Daño 250 / 200 metros de radio"
            }
        ]
        },
        {
            id: "mantenimiento-gneo",
            nombre: "Mantenimiento ígneo",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Mantiene varias intensidades de fuego ardiendo sin",
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
                "resultado": "5 intensidades"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "10 intensidades"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "15 intensidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "20 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "30 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "40 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "50 intensidades"
            }
        ]
        },
        {
            id: "inmunidad-al-fuego",
            nombre: "Inmunidad al fuego",
            nivel: "2",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Permite al psíquico, o al individuo designado por este, ser",
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
                "resultado": "5 intensidades"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "10 intensidades"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "15 intensidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "20 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "30 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "40 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "50 intensidades"
            }
        ]
        },
        {
            id: "barrera-gnea",
            nombre: "Barrera ígnea",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Este poder crea una barrera de fuego en el lugar que",
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
                "resultado": "Daño base 60 / 5 metros de longitud"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Daño base 80 / 10 metros de longitud"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Daño base 120 / 20 metros de longitud"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Daño base 160 / 30 metros de longitud"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Daño base 200 / 40 metros de longitud"
            },
            {
                "dificultad": "Zen",
                "resultado": "Daño base 240 / 50 metros de longitud"
            }
        ]
        },
        {
            id: "aumentar-temperatura-ambiental",
            nombre: "Aumentar temperatura ambiental",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico tiene control sobre la temperatura ambiental",
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
                "resultado": "+5ºC / 1 kilómetro de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "+10ºC / 5 kilómetros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "+15ºC / 10 kilómetros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "+20ºC / 25 kilómetros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "+30ºC / 50 kilómetros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "+40ºC / 100 kilómetros de radio"
            }
        ]
        },
        {
            id: "consumir",
            nombre: "Consumir",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Hace arder internamente un cuerpo, consumiendo su",
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
                "resultado": "120 RF / Daño automático de 80"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "140 RF / Daño automático de 120"
            },
            {
                "dificultad": "Imposible",
                "resultado": "160 RF / Daño automático de 160"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "180 RF / Daño automático de 200"
            },
            {
                "dificultad": "Zen",
                "resultado": "220 RF / Daño automático de 250"
            }
        ]
        },
        {
            id: "nova",
            nombre: "Nova",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Esta disciplina permite al personaje consumir su propia",
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
                "resultado": "10 puntos de vida"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "20 puntos de vida"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "30 puntos de vida"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "40 puntos de vida"
            },
            {
                "dificultad": "Imposible",
                "resultado": "60 puntos de vida"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "80 puntos de vida"
            },
            {
                "dificultad": "Zen",
                "resultado": "120 puntos de vida"
            }
        ]
        },
        {
            id: "fuego-mayor",
            nombre: "Fuego mayor",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Versión amplificada del poder de primer nivel de Crear",
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
                "resultado": "30 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "40 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "50 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "60 intensidades CRIOQUINESIS Al contrario que la Piroquinesis, esta disciplina permite al psíquico controlar las bajas temperaturas y el hielo. Sus poderes pueden congelar a personas o disminuir la temperatura a cientos de metros de distancia. Modificador: Como en la Piroquinesis, el entorno aumenta o disminuye el potencial psíquico al usar esta disciplina, de la siguiente manera: Volcán -30 Incendio de grandes proporciones -10 Terreno frío y lluvioso +10 Frío intenso +20 Zona helada o ártico +30"
            }
        ]
        }
    ]
});

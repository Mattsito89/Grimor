import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Crioquinesis
export const disciplinaCrioquinesis = crearDisciplinaPsiquica({
    id: "crioquinesis",
    nombre: "Crioquinesis",
    color: "#22d3ee",
    descripcion: "Al contrario que la Piroquinesis, esta disciplina permite al psíquico controlar las bajas temperaturas y el hielo. Sus poderes pueden congelar a personas o disminuir la temperatura a cientos de metros de distancia. el potencial psíquico al usar esta disciplina, de la siguiente manera: Volcán -30 Incendio de grandes proporciones -10 Terreno frío y lluvioso +10 Frío intenso +20 Zona helada o ártico +30",
    modificador: "Como en la Piroquinesis, el entorno aumenta o disminuye",
    poderes: [
        {
            id: "inmunidad-al-frio",
            nombre: "Inmunidad al frío",
            nivel: "2",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Permite al psíquico, o al individuo designado por este, ser inmune al efecto de varias intensidades de frío, incluso si se trata de uno de carácter sobrenatural. En el caso de recibir un ataque basado en dicho elemento, cada intensidad a la que es inmune disminuye 5 puntos el daño base del ataque y aumenta en +5 las Resistencias contra sus efectos.",
            efectos: [
                { dificultad: "Rutinario", resultado: "Fatiga 4" },
                { dificultad: "Fácil", resultado: "Fatiga 2" },
                { dificultad: "Medio", resultado: "Fatiga 1" },
                { dificultad: "Difícil", resultado: "5 intensidades" },
                { dificultad: "Muy Difícil", resultado: "10 intensidades" },
                { dificultad: "Absurdo", resultado: "15 intensidades" },
                { dificultad: "Casi imposible", resultado: "20 intensidades" },
                { dificultad: "Imposible", resultado: "30 intensidades" },
                { dificultad: "Inhumano", resultado: "40 intensidades" },
                { dificultad: "Zen", resultado: "50 intensidades" }
            ]
        },

        {
            id: "percibir-temperatura",
            nombre: "Percibir temperatura",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Detecta cualquier variación en la temperatura ambiental",
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
                "resultado": "10 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "50 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "100 metros de radio"
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
            id: "congelar",
            nombre: "Congelar",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Congela cualquier tipo de cuerpo que no supere la RF",
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
                "resultado": "80 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "100 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "120 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "140 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "160 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "180 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "220 RF"
            }
        ]
        },
        {
            id: "crear-fr-o",
            nombre: "Crear frío",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Crea varias intensidades de frío. Si se produce sobre un",
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
                "resultado": "5 intensidades"
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
            id: "eliminar-el-fr-o",
            nombre: "Eliminar el frío",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Disminuye varias intensidades de frío de una zona, ser u",
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
            id: "control-sobre-el-fr-o",
            nombre: "Control sobre el frío",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Controla el frío y el hielo de una zona. Puede modificarlo",
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
            id: "esquirlas-de-hielo",
            nombre: "Esquirlas de hielo",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El psíquico crea esquirlas de hielo, que puede proyectar",
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
                "resultado": "Daño base 80"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Daño base 100"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Daño base 120"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Daño base 160 / Área de 5 metros"
            },
            {
                "dificultad": "Zen",
                "resultado": "Daño base 200 / Área de 25 metros"
            }
        ]
        },
        {
            id: "disminuir-la-temperatura-ambiental",
            nombre: "Disminuir la temperatura ambiental",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico tiene control sobre la temperatura ambiental y",
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
                "resultado": "-5º / 1 kilómetro de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "-10º / 5 kilómetros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "-15º / 10 kilómetros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "-20º / 25 kilómetros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "-30º / 50 kilómetros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "-40º / 100 kilómetros de radio"
            }
        ]
        },
        {
            id: "escudo-de-hielo",
            nombre: "Escudo de hielo",
            nivel: "2",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Crea un escudo de hielo que protege al psíquico contra cualquier",
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
                "resultado": "1.800 PV"
            },
            {
                "dificultad": "Imposible",
                "resultado": "2.500 PV"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "4.000 PV"
            },
            {
                "dificultad": "Zen",
                "resultado": "6.000 PV"
            }
        ]
        },
        {
            id: "cristalizar",
            nombre: "Cristalizar",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Esta habilidad cristaliza cualquier clase de cuerpo que no supere",
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
                "resultado": "120 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "140 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "160 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "180 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "220 RF"
            }
        ]
        },
        {
            id: "un-instante-eterno",
            nombre: "Un instante eterno",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Mediante la manipulación del frío, el psíquico crea a su alrededor",
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
                "resultado": "120 RF / 5 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "140 RF / 10 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "160 RF / 20 metros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "180 RF / 50 metros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "200 RF / 100 metros de radio"
            }
        ]
        },
        {
            id: "cero-absoluto",
            nombre: "Cero absoluto",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico disminuye la temperatura a su alrededor hasta",
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
                "resultado": "5 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "10 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "20 metros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "50 metros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "100 metros de radio"
            }
        ]
        },
        {
            id: "fr-o-mayor",
            nombre: "Frío mayor",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Versión amplificada del poder de primer nivel de Crear frío,",
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
                "resultado": "60 intensidades INCREMENTO FÍSICO La disciplina Incremento físico otorga al psíquico un completo dominio sobre su cuerpo y todas las células que lo componen. De este modo, controla cada parte de su anatomía como si se tratase de una máquina perfecta, aumentando de un modo increible sus capacidades corporales. Sólo es posible emplear una vez un mismo poder sobre un determinado individuo. No tiene ningún modificador."
            }
        ]
        }
    ]
});

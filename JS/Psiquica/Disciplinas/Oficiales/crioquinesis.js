import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Crioquinesis
export const disciplinaCrioquinesis = crearDisciplinaPsiquica({
    id: "crioquinesis",
    nombre: "Crioquinesis",
    color: "#22d3ee",
    descripcion: "Al contrario que la Piroquinesis, esta disciplina permite al psíquico controlar las bajas temperaturas y el hielo. Sus poderes pueden congelar a personas o disminuir la temperatura a cientos de metros de distancia. Modificador: Como en la Piroquinesis, el entorno aumenta o disminuye el potencial psíquico al usar esta disciplina, de la siguiente manera: Volcán -30 Incendio de grandes proporciones -10 Terreno frío y lluvioso +10 Frío intenso +20 Zona helada o ártico +30",
    modificador: "Como en la Piroquinesis, el entorno aumenta o disminuye el potencial psíquico al usar esta disciplina, de la siguiente manera: Volcán -30 Incendio de grandes proporciones -10 Terreno frío y lluvioso +10 Frío intenso +20 Zona helada o ártico +30",
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
            descripcion: "Detecta cualquier variación en la temperatura ambiental dentro de un radio de acción, incluido el calor de un cuerpo vivo. Puede percibirse incluso a través de paredes u obstáculos, si estos no están basados en energía. Si el adversario oculta su Ki o no emite calor, esta habilidad es ineficaz. Este poder no requiere que el personaje utilice su Proyección Psíquica, sino que afecta automáticamente a cualquier individuo que esté dentro del área.",
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
            descripcion: "Congela cualquier tipo de cuerpo que no supere la RF requerida. El individuo afectado sufre un penalizador a toda acción, equivalente a la cantidad por la que no ha superado la Resistencia. Si la diferencia es mayor de 40 puntos, queda congelado y es sometido a Paralización parcial. Puede usarse la TA de Frío como defensa contra este poder. Cualquier individuo afectado tiene derecho a un nuevo control cada cinco asaltos.",
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
            descripcion: "Crea varias intensidades de frío. Si se produce sobre un cuerpo líquido, puede formar hielo.",
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
            descripcion: "Disminuye varias intensidades de frío de una zona, ser u objeto. Si se usa sobre una criatura basada en frío o hielo, recibirá 5 puntos de daño por cada intensidad rebajada si no supera una RF requerida (los seres con acumulación de daño reciben 25 puntos).",
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
            descripcion: "Controla el frío y el hielo de una zona. Puede modificarlo de cualquier manera, quebrándolo o cambiándolo de forma. Si se usa sobre un ser elemental, podrá evitarse este efecto superando una RF contra la dificultad indicada por el valor alcanzado.",
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
            descripcion: "El psíquico crea esquirlas de hielo, que puede proyectar como medio de ataque. Atacan en la TA de Frío o en la de Penetrantes, con un daño base que varía según el potencial alcanzado. Son perfectamente visibles, incluso para individuos que no son capaces de percibir matrices.",
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
            descripcion: "El psíquico tiene control sobre la temperatura ambiental y puede disminuirla dentro de un amplio radio de acción.",
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
            descripcion: "Crea un escudo de hielo que protege al psíquico contra cualquier fuente de ataque no basada en energía, salvo los conjuros de tipo Ataque de luz u oscuridad, los cuales sí se pueden detener. Al contrario que otros poderes, el Escudo de hielo permanece con la misma cantidad de puntos de vida con la que fue creado originariamente, en lugar de mantenerse con el mantenimiento natural del psíquico. Sin embargo, una vez creado pierde 5 puntos de vida por asalto, hasta que llega a la cantidad a la que el psíquico pueda mantener naturalmente el escudo.",
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
            descripcion: "Esta habilidad cristaliza cualquier clase de cuerpo que no supere la RF del poder. Todo lo que se congele de este modo se vuelve excepcionalmente quebradizo, pudiendo romperse con el menor golpe. Un personaje cristalizado está sometido a Paralización menor y, si sufre cualquier tipo de daño, recibe automáticamente un crítico con un penalizador de –40 puntos a su RF. En el caso de que se trate de un ser con acumulación, no sufre un crítico directo pero, a partir de ese momento, todo su cuerpo se considera como un punto vulnerable.",
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
            descripcion: "Mediante la manipulación del frío, el psíquico crea a su alrededor una zona de baja temperatura dentro de la cual, cualquier cuerpo en movimiento salvo el suyo propio, es inmovilizado si no pasa una RF. Si la tirada no es superada por una diferencia de 40, el cuerpo afectado queda completamente congelado y se somete a una Paralización completa. Si la diferencia es menor, el afectado recibirá sólo un penalizador a toda acción, equivalente al nivel de fracaso. Estos negativos duran mientras el poder se mantenga y, mientras el personaje congelado permanezca dentro del área, no tiene derecho a repetir la Resistencia. En el caso de que consiga superarla, debe repetir el control cada 5 asaltos que permanezca en el interior de la zona. Este poder no requiere que el personaje utilice su Proyección Psíquica, sino que afecta automáticamente a cualquier individuo que esté dentro de la zona. 2 2 1",
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
            descripcion: "El psíquico disminuye la temperatura a su alrededor hasta el cero absoluto, destruyendo cualquier cuerpo, orgánico o inorgánico, que se encuentre en su radio. A términos de juego, todo aquel ser u objeto físico que no consiga superar una RF contra 100 cada turno que se encuentre en el interior del área, quedará inmediatamente hecho añicos por el Cero absoluto. Este poder no requiere que el personaje utilice su Proyección Psíquica, sino que afecta automáticamente a cualquier individuo que esté dentro de su radio.",
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
            descripcion: "Versión amplificada del poder de primer nivel de Crear frío, que provoca temperaturas mucho más extremas.",
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

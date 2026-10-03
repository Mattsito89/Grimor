import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Causalidad
export const disciplinaCausalidad = crearDisciplinaPsiquica({
    id: "causalidad",
    nombre: "Causalidad",
    color: "#ef4444",
    descripcion: "También conocida como Caos y Orden, esta disciplina juega con las casualidades y las fuerzas que generan el caos primordial que mueve la realidad. Con ella, aumenta o disminuye los efectos en cadena que provocan los cambios en el mundo de forma limitada. Sus efectos normalmente requieren un gran esfuerzo por parte del psíquico, ya que en realidad esta desplazando con sus matrices las fuerzas más básicas del universo.",
    modificador: "",
    poderes: [
        {
            id: "crear-caos",
            nombre: "Crear Caos",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Este poder concede al psíquico la capacidad de aumentar la ley de la causalidad de forma exponencial, acelerando cualquier proceso en curso en el área afectada. No controla los sucesos en su interior, pero por ejemplo, si una zona hay un volcán inactivo, existe una enorme posibilidad de que entre en erupción, o de que algo poco probable suceda como natural. Afecta a una zona específica delimitada por la dificultad del poder.",
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
                "resultado": "50 Metros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "500 Metros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "1 Kilómetro"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "2 Kilómetros"
            },
            {
                "dificultad": "Zen",
                "resultado": "5 Kilómetros"
            }
        ]
        },
        {
            id: "eliminar-ley-de-la-causalidad",
            nombre: "Eliminar ley de la Causalidad",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico alinea su mente con las pequeñas fluctuaciones de la causalidad y elimina las probabilidades y los ajustes imperceptibles apartándose completamente del factor del azar. Dependiendo de lo fuerte que sea el vínculo puede llegar a acercarse al resultado más óptimo, de forma que el psíquico deja de lanzar dados para cualquier habilidad o control de característica para obtener siempre un valor determinado por la dificultad del poder. Esta capacidad no permite sustituir tiradas de dados de controles de Resistencia, ni aquellas relacionadas con elementos sobrenaturales.",
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
                "resultado": "3 para chequeos / 30 para habilidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "4 para chequeos / 40 para habilidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "5 para chequeos / 50 para habilidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "6 para chequeos / 60 para habilidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "8 para chequeos / 80 para habilidades"
            }
        ]
        },
        {
            id: "alterar-el-clima",
            nombre: "Alterar el Clima",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Alterando las más básicas fluctuaciones en el aire, el psíquico puede provocar un cambio en el ambiente produciendo alteraciones meteorológicas a media escala. Normalmente estos cambios no se realizan de manera automática, y requieren de por lo menos unos minutos (a veces, incluso horas) para que sus efectos se manifiesten debido a una reacción en cadena. Este poder no requiere mantenimiento, ya que es en el momento en el que se activa por primera vez cuando se determina el tipo de clima que el psíquico pretende crear.",
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
                "resultado": "Produce cambios menores y posibles, como alterar ligeramente la temperatura ambiente, aclarar un día nublado o producir una fina lluvia en climas templados / 1 Kilómetro"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Provoca cambios menores aunque raros en esa zona, como tormentas eléctricas o fuertes ráfagas de viento / 2 Kilómetros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Provoca cambios intermedios, poco habituales en la zona en la que tienen lugar / 5 Kilómetros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Provoca cambios mayores, como provocar una tormenta de verano en una zona desértica / 10 Kilómetros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Provoca cambios radicales, como hacer que nieve en pleno verano / 15 Kilómetros"
            },
            {
                "dificultad": "Zen",
                "resultado": "Permite alterar completamente el clima de una zona, como causar una tormenta de nieve en mitad del desierto / 20 Kilómetros"
            }
        ]
        },
        {
            id: "crear-orden",
            nombre: "Crear Orden",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "De forma contraria a Crear Caos, este poder reduce los cambios producidos en su interior de una zona provocando una monotonía continua día tras día sin cambios apreciables. Hay que aclarar que esto no condiciona el comportamiento de la gente, simplemente desaparecen los sucesos azarosos de su vida, produciendo siempre un resultado intermedio y repetitivo. En grados mayores, este poder interfiere con la innaturalidad que supone la magia y la invocación, por lo que aquellos que se encuentren dentro de la zona afectada por este poder sufren automáticamente un negativo a sus habilidades determinado por el potencial alcanzado.",
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
                "resultado": "50 metros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "500 metros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "-10 al ACT / - 20 a Convocatoria / 1 Kilómetro"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "-20 al ACT / - 40 a Convocatoria / 2 Kilómetros"
            },
            {
                "dificultad": "Zen",
                "resultado": "-40 al ACT / - 80 a Convocatoria / 5 Kilómetros"
            }
        ]
        },
        {
            id: "controlar-la-causalidad",
            nombre: "Controlar la Causalidad",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El psíquico controla la casualidad, pudiendo tratar de crear el resultado que desee siempre y cuando, por minúscula que sea la posibilidad, podría llegar a ocurrir. Cuanto más posible sea que algo pase, más fácil le resulta al mentalista provocarlo.",
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
                "resultado": "Fatiga 2"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Sucesos menores y dentro de lo que cabe posibles, como hacer que una silla gastada termine de romperse."
            },
            {
                "dificultad": "Imposible",
                "resultado": "Sucesos intermedios y no tan habituales, como que un pozo medio lleno se seque."
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Sucesos mayores y extraños, como que una presa vieja pero sólida se venga abajo por la presión del agua."
            },
            {
                "dificultad": "Zen",
                "resultado": "Sucesos completamente increíbles, como que un volcán completamente inactivo entre en erupción. Electromagnetismo Esta disciplina permite controlar el magnetismo y la electricidad que genera. Modificador: En ambientes ionizados el psíquico obtiene un +20 a su potencial, mientras que en aquellos sin fuerza magnética, aplica un -20."
            }
        ]
        }
    ]
});

import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Telemetría
export const disciplinaTelemetra = crearDisciplinaPsiquica({
    id: "telemetria",
    nombre: "Telemetría",
    color: "#818cf8",
    descripcion: "La  es la capacidad mental de percibir los residuos ambientales de tiempos pasados. Ello se debe a que la matriz psíquica de cada persona deja siempre tras de sí cierta energía residual, que depende de su estado de ánimo y de sus pensamientos en cada momento. Un individuo con esta disciplina es capaz de percibir dichos residuos y, consecuentemente, de sentir en mayor o menor grado lo que ha ocurrido en el pasado. telemétricos sobre algo con lo que se encuentre en contacto físico (ya sea un objeto o una persona), puede sumar un bonificador de +10 a su potencial. 2 2 5",
    modificador: "Siempre que un psíquico utilice uno de sus poderes",
    poderes: [
        {
            id: "percibir-residuos",
            nombre: "Percibir residuos",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico percibe residuos ambientales de sentimientos",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Una hora"
            },
            {
                "dificultad": "Medio",
                "resultado": "Seis horas"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Un día"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Tres días"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Una semana"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Un mes"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Un año"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Una década"
            },
            {
                "dificultad": "Zen",
                "resultado": "Un siglo"
            }
        ]
        },
        {
            id: "leer-el-pasado",
            nombre: "Leer el pasado",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Permite sentir lo que ha ocurrido en el pasado con un",
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
                "resultado": "Una hora"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Seis horas"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Un día"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Una semana"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Un mes"
            },
            {
                "dificultad": "Zen",
                "resultado": "Un año"
            }
        ]
        },
        {
            id: "erudici-n-humana",
            nombre: "Erudición humana",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Este poder otorga la habilidad de analizar el pasado de un",
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
                "resultado": "Un día / 80 RP"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Una semana / 100 RP"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Un mes / 120 RP"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Un año / 140 RP"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Diez años / 160 RP"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Cincuenta años / 180 RP"
            },
            {
                "dificultad": "Zen",
                "resultado": "Toda su vida / 200 RP"
            }
        ]
        },
        {
            id: "ver-en-la-historia",
            nombre: "Ver en la historia",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Permite proyectar los sentidos hacia el pasado, pudiendo",
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
                "resultado": "Un año"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Diez años"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Un siglo"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Un milenio"
            },
            {
                "dificultad": "Zen",
                "resultado": "Cualquier periodo de tiempo 2 2 6 SENTIENTE Esta disciplina permite al psíquico percibir y controlar los sentimientos y sentidos de otras personas. Como la Telepatía, no tiene ninguna utilidad sobre seres sin mente, como golems o similares. Sentiente tampoco requiere un control de Proyección Psíquica para fijar su blanco (la tirada sigue siendo requerido para determinar el alcance del poder), pero si el psíquico no es capaz de obtener un mínimo de daño 10% en el resultado del asalto, el individuo afectado puede añadir un +60 a su control de RP. Modificador: Siempre que un psíquico utilice uno de sus poderes sentientes sobre un sujeto que se encuentra en contacto físico con él, puede sumar un bonificador de +20 a su potencial psíquico."
            }
        ]
        }
    ]
});

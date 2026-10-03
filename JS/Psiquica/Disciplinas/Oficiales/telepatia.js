import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Telepatía
export const disciplinaTelepata = crearDisciplinaPsiquica({
    id: "telepatia",
    nombre: "Telepatía",
    color: "#a855f7",
    descripcion: "La  es una de las disciplinas más fascinantes que tienen los psíquicos a su disposición: sincronizar las energías de dos matrices psíquicas, permitiendo penetrar a quien la utilice en la mente de otros sujetos. Algunos ejemplos de poderes telépatas serían leer los pensamientos de otros individuos, alterar su percepción o incluso dominar su voluntad. No tiene ninguna utilidad sobre seres sin mente, como golems o similares. Al contrario que otras Disciplinas, no se requiere un control de Proyección Psíquica para fijar su blanco (la tirada sigue siendo requerido para determinar el alcance del poder), pero si el psíquico no es capaz de obtener un mínimo de daño 10% en el resultado del asalto, el individuo afectado puede añadir un +60 a su control de RP. telepáticos sobre un sujeto que se encuentra en contacto físico con él, puede sumar un bonificador de +20 a su potencial.",
    modificador: "Siempre que un psíquico utilice uno de sus poderes",
    poderes: [
        {
            id: "escaneo-de-zona",
            nombre: "Escaneo de zona",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Detecta cualquier mente activa que se encuentre alrededor",
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
                "resultado": "100 RP / 10 metros de radio"
            },
            {
                "dificultad": "Difícil",
                "resultado": "120 RP / 50 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "140 RP / 100 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "160 RP / 250 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "180 RP / 500 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "200 RP / 1 kilómetro de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "220 RP / 10 kilómetros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "260 RP / 100 kilómetros de radio"
            }
        ]
        },
        {
            id: "lectura-mental",
            nombre: "Lectura mental",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Permite al psíquico leer los pensamientos que cruzan",
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
                "resultado": "100 RP"
            },
            {
                "dificultad": "Difícil",
                "resultado": "120 RP"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "140 RP"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "160 RP"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "180 RP"
            },
            {
                "dificultad": "Imposible",
                "resultado": "200 RP"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "220 RP"
            },
            {
                "dificultad": "Zen",
                "resultado": "240 RP"
            }
        ]
        },
        {
            id: "ilusi-n-ps-quica",
            nombre: "Ilusión psíquica",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Altera la percepción de un sujeto, introduciendo imágenes",
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
                "resultado": "80 RP"
            },
            {
                "dificultad": "Difícil",
                "resultado": "100 RP"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "120 RP"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "140 RP"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "160 RP"
            },
            {
                "dificultad": "Imposible",
                "resultado": "180 RP"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "200 RP"
            },
            {
                "dificultad": "Zen",
                "resultado": "220 RP"
            }
        ]
        },
        {
            id: "escudo-ps-quico",
            nombre: "Escudo psíquico",
            nivel: "1",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Aumenta la RP del psíquico. Puede usarse para mejorar la",
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
                "resultado": "+10 RP"
            },
            {
                "dificultad": "Difícil",
                "resultado": "+30 RP"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "+50 RP"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "+80 RP"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "+120 RP"
            },
            {
                "dificultad": "Imposible",
                "resultado": "+160 RP"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "+200 RP"
            },
            {
                "dificultad": "Zen",
                "resultado": "+240 RP"
            }
        ]
        },
        {
            id: "comunicaci-n-mental",
            nombre: "Comunicación mental",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico puede entablar una conversación mental con una",
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
                "resultado": "100 metros"
            },
            {
                "dificultad": "Difícil",
                "resultado": "500 metros"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "1 kilómetro"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "10 kilómetros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "100 kilómetros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "1.000 kilómetros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "5.000 kilómetros"
            },
            {
                "dificultad": "Zen",
                "resultado": "Cualquier distancia"
            }
        ]
        },
        {
            id: "prohibici-n-mental",
            nombre: "Prohibición mental",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico es capaz de imponer mediante esta habilidad",
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
                "resultado": "80 RP"
            },
            {
                "dificultad": "Difícil",
                "resultado": "100 RP"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "120 RP"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "140 RP"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "160 RP"
            },
            {
                "dificultad": "Imposible",
                "resultado": "180 RP"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "200 RP"
            },
            {
                "dificultad": "Zen",
                "resultado": "220 RP"
            }
        ]
        },
        {
            id: "an-lisis-mental",
            nombre: "Análisis mental",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Permite al psíquico indagar en los pensamientos y recuerdos",
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
                "resultado": "100 RP"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "120 RP"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "140 RP"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "160 RP"
            },
            {
                "dificultad": "Imposible",
                "resultado": "180 RP"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "200 RP"
            },
            {
                "dificultad": "Zen",
                "resultado": "240 RP"
            }
        ]
        },
        {
            id: "conexi-n-ps-quica",
            nombre: "Conexión psíquica",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Conecta la mente del psíquico con otra, permitiendo, si ambos",
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
                "resultado": "100 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "500 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "1 kilómetro de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "10 kilómetros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "100 kilómetros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "1.000 kilómetros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "Cualquier distancia"
            }
        ]
        },
        {
            id: "modificaci-n-de-recuerdos",
            nombre: "Modificación de recuerdos",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Permite modificar los recuerdos de la mente de un sujeto,",
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
                "resultado": "100 RP"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "120 RP"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "140 RP"
            },
            {
                "dificultad": "Imposible",
                "resultado": "160 RP"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "180 RP"
            },
            {
                "dificultad": "Zen",
                "resultado": "200 RP"
            }
        ]
        },
        {
            id: "forma-astral",
            nombre: "Forma astral",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico puede desprenderse de su forma física y trasladar",
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
                "resultado": "Hasta 10 kilómetros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Hasta 100 kilómetros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Hasta 500 kilómetros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Hasta 1.000 kilómetros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Hasta 5.000 kilómetros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "Cualquier distancia"
            }
        ]
        },
        {
            id: "asalto-ps-quico",
            nombre: "Asalto psíquico",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Lanza una acometida sobre la mente de un sujeto, debilitando",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 8"
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
                "resultado": "120 RP"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "140 RP"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "160 RP"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "180 RP"
            },
            {
                "dificultad": "Imposible",
                "resultado": "200 RP"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "220 RP"
            },
            {
                "dificultad": "Zen",
                "resultado": "260 RP"
            }
        ]
        },
        {
            id: "localizaci-n-ps-quica",
            nombre: "Localización psíquica",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Localiza la mente de un sujeto determinado que se",
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
                "resultado": "Hasta 10 kilómetros de radio 140 RP"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Hasta 100 kilómetros de radio 160 RP"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Hasta 500 kilómetros de radio 180 RP"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Hasta 1.000 kilómetros de radio 200 RP"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Hasta 5.000 kilómetros de radio 220 RP"
            },
            {
                "dificultad": "Zen",
                "resultado": "Cualquier distancia 260 RP"
            }
        ]
        },
        {
            id: "control-mental",
            nombre: "Control mental",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico obtiene un control absoluto sobre la voluntad de",
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
                "resultado": "100 RP"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "120 RP"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "140 RP"
            },
            {
                "dificultad": "Imposible",
                "resultado": "160 RP"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "180 RP"
            },
            {
                "dificultad": "Zen",
                "resultado": "220 RP"
            }
        ]
        },
        {
            id: "muerte-ps-quica",
            nombre: "Muerte psíquica",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Este poder ataca la mente de una persona, destrozándola",
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
                "resultado": "140 RP"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "160 RP"
            },
            {
                "dificultad": "Imposible",
                "resultado": "180 RP"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "220 RP"
            },
            {
                "dificultad": "Zen",
                "resultado": "240 RP"
            }
        ]
        },
        {
            id: "rea",
            nombre: "Área",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Mientras se mantenga este poder, permite utilizar cualquier",
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
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "10 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "100 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "1 kilómetro de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "10 kilómetros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "100 kilómetros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "500 kilómetros de radio 2 1 6 TELEQUINESIS La Telequinesis es la facultad psíquica de mover objetos con la fuerza mental de un individuo. A mayor nivel, un personaje es incluso capaz de destrozar cosas a distancia o modificar su estructura atómica. Esta disciplina no tiene ningún modificador."
            }
        ]
        }
    ]
});

import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Sentiente
export const disciplinaSentiente = crearDisciplinaPsiquica({
    id: "sentiente",
    nombre: "Sentiente",
    color: "#ec4899",
    descripcion: "Esta disciplina permite al psíquico percibir y controlar los sentimientos y sentidos de otras personas. Como la Telepatía, no tiene ninguna utilidad sobre seres sin mente, como golems o similares.  tampoco requiere un control de Proyección Psíquica para fijar su blanco (la tirada sigue siendo requerido para determinar el alcance del poder), pero si el psíquico no es capaz de obtener un mínimo de daño 10% en el resultado del asalto, el individuo afectado puede añadir un +60 a su control de RP. sentientes sobre un sujeto que se encuentra en contacto físico con él, puede sumar un bonificador de +20 a su potencial psíquico.",
    modificador: "Siempre que un psíquico utilice uno de sus poderes",
    poderes: [
        {
            id: "percibir-sentimientos",
            nombre: "Percibir sentimientos",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Percibe lo que siente un individuo en ese mismo momento.",
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
            id: "detectar-sentimientos",
            nombre: "Detectar sentimientos",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Detecta un sentimiento determinado en cualquier sujeto",
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
                "resultado": "80 RP / 10 metros de radio"
            },
            {
                "dificultad": "Difícil",
                "resultado": "100 RP / 50 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "120 RP / 100 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "140 RP / 250 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "160 RP / 500 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "180 RP / 1 kilómetro de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "200 RP / 10 kilómetros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "220 RP / 100 kilómetros de radio"
            }
        ]
        },
        {
            id: "conectar-sentidos",
            nombre: "Conectar sentidos",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Conecta los sentidos del psíquico con los de otro individuo y",
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
                "resultado": "60 RP / 10 metros de radio"
            },
            {
                "dificultad": "Difícil",
                "resultado": "80 RP / 100 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "100 RP / 500 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "120 RP / 1 kilómetro de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "140 RP / 10 kilómetros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "160 RP / 100 kilómetros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "180 RP / 1.000 kilómetros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "200 RP / cualquier distancia"
            }
        ]
        },
        {
            id: "intensificar-sentimientos",
            nombre: "Intensificar sentimientos",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Intensifica el sentimiento o estado de ánimo principal del individuo",
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
                "resultado": "240 RP Usando sus poderes telemétricos, Angelique"
            }
        ]
        },
        {
            id: "eliminar-sentidos",
            nombre: "Eliminar sentidos",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico hace desaparecer temporalmente alguno de",
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
                "resultado": "220 RP capaz de ver el pasado como si estuviera allí"
            }
        ]
        },
        {
            id: "crear-sentimientos",
            nombre: "Crear sentimientos",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Crea sentimientos nuevos en un individuo. Por ejemplo,",
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
                "resultado": "80 RP"
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
            id: "cargar-con-sentimientos",
            nombre: "Cargar con sentimientos",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Este poder carga un objeto o lugar determinado con un fuerte",
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
                "resultado": "100 RP / área de 5 metros"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "120 RP / área de 10 metros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "140 RP / área de 25 metros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "160 RP / área de 50 metros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "180 RP / área de 100 metros"
            },
            {
                "dificultad": "Zen",
                "resultado": "220 RP / área de 500 metros"
            }
        ]
        },
        {
            id: "trasladar-los-sentidos",
            nombre: "Trasladar los sentidos",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Permite al psíquico proyectar uno de sus sentidos hasta una",
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
                "resultado": "1 kilómetro de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "10 kilómetros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "100 kilómetros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "500 kilómetros de radio"
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
            id: "rea",
            nombre: "Área",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Funciona igual que el poder con el mismo nombre de",
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
                "resultado": "500 kilómetros de radio"
            }
        ]
        },
        {
            id: "destruir-sentimientos",
            nombre: "Destruir sentimientos",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Elimina los sentimientos que el psíquico desee de un",
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
                "resultado": "200 RP LOS PODERES MATRICIALES De modo adicional a las habilidades mentales explicadas, existen cuatro poderes genéricos a los que tienen acceso todos los psíquicos indistintamente. No se encuentran dentro de ninguna disciplina, por lo que cualquiera de ellos puede adquirirse invirtiendo un solo CV, o gastar temporalmente uno para tener un acceso limitado a él. Estos poderes no tienen nivel."
            }
        ]
        },
        {
            id: "sentir-matrices",
            nombre: "Sentir matrices",
            nivel: "NA",
            accion: "Activa",
            mantenimiento: "S",
            descripcion: "El psíquico puede sentir el uso de poderes y notar la",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Fácil",
                "resultado": "10 metros de radio Permite ver matrices psíquicas activas"
            },
            {
                "dificultad": "Medio",
                "resultado": "25 metros de radio Detecta poderes latentes en las personas"
            },
            {
                "dificultad": "Difícil",
                "resultado": "50 metros de radio / Permite reconocer el poder que se esté utilizando"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "100 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "250 metros de radio / Nota las disciplinas a las que es afín un psíquico"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "500 metros de radio Mide el potencial de otro psíquico"
            },
            {
                "dificultad": "Imposible",
                "resultado": "1 kilómetro de radio / Detecta los CV libres que le quedan a otro psíquico"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "5 kilómetros de radio Nota los poderes que posee otro psíquico"
            },
            {
                "dificultad": "Zen",
                "resultado": "100 kilómetros de radio"
            }
        ]
        },
        {
            id: "destruir-matrices",
            nombre: "Destruir matrices",
            nivel: "NA",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Esta habilidad destruye poderes psíquicos activos, siempre",
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
                "resultado": "Poderes de nivel"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Poderes de nivel"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Poderes de nivel"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Poderes de nivel"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Poderes de nivel Casi"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Poderes de nivel"
            },
            {
                "dificultad": "Zen",
                "resultado": "Poderes de nivel"
            }
        ]
        },
        {
            id: "ocultar-matrices",
            nombre: "Ocultar matrices",
            nivel: "NA",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Esconde las habilidades mentales del psíquico contra el poder",
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
                "resultado": "-2 grados de dificultad"
            },
            {
                "dificultad": "Difícil",
                "resultado": "-3 grados de dificultad"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "-4 grados de dificultad"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "-5 grados de dificultad"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "-6 grados de dificultad"
            },
            {
                "dificultad": "Imposible",
                "resultado": "-7 grados de dificultad"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "-8 grados de dificultad"
            },
            {
                "dificultad": "Zen",
                "resultado": "-9 grados de dificultad"
            }
        ]
        },
        {
            id: "conectar-matrices",
            nombre: "Conectar matrices",
            nivel: "NA",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Mediante esta habilidad, el personaje podrá conectar, con",
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
                "resultado": "2 individuos"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "3 individuos"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "4 individuos"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "6 individuos"
            },
            {
                "dificultad": "Imposible",
                "resultado": "8 individuos"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "10 individuos"
            },
            {
                "dificultad": "Zen",
                "resultado": "20 individuos Pazusu utiliza esta habilidad a nivel"
            }
        ]
        }
    ]
});

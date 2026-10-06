import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina Custom: Vacuokinesis — Ad Astra (complemento fanmade)
export const disciplinaVacuokinesis = crearDisciplinaPsiquica({
    "id": "vacuokinesis",
    "nombre": "Vacuokinesis",
    "color": "#7c3aed",
    "descripcion": "La vacuokinesis maneja el control de la nada y el negativo en las leyes físicas del mundo conocido. Permite distorsionar la realidad sutilmente para realizar poderosos ataques y otorgar ventajas tácticas en combate.",
    "modificador": "",
    "poderes": [
        {
            "id": "dimension-partida",
            "nombre": "Dimensión Partida",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "Rompiendo mediante matrices que abren brechas en el vacío el mentalista puede cambiar muy sutilmente las magnitudes de las tres dimensiones espaciales. Esto otorga capacidades especiales a la hora de establecer las distancias de las cosas con respecto al espacio. Por ejemplo, algo a 10 metros de distancia, alcanzando el grado difícil pasaría a estar a 2 u 9 metros, a voluntad del mentalista. Esta habilidad no modifica el espacio en sí, no se pueden mover cosas. Pero al realizar desplazamientos si es perceptible este cambio. Atravesar la brecha creada por el mentalista se considera una acción de movimiento completo, independientemente de la distancia recorrida, pero por las propiedades especificadas se considera una acción pasiva. Únicamente el mentalista puede beneficiarse de estos efectos. En caso de usarse para destrabarse, seguirá teniendo que defenderse de sus agresores, pero no aplicará penalizador alguno por flanco ni ataques adicionales.",
            "efectos": [
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
                    "resultado": "Restablece distancias entre 1 y 4 metros"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Restablece distancias entre 1 y 8 metros"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Restablece distancias entre 1 y 15 metros"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Restablece distancias entre 1 y 20 metros"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Restablece distancias entre 1 y 50 metros"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Restablece distancias entre 1 y 100 metros"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Restablece distancias entre 1 y 200 metros"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Restablece distancias entre 1 y 500 metros"
                }
            ]
        },
        {
            "id": "presion-cerebral",
            "nombre": "Presión Cerebral",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "Generando ondas de vacío en una persona puede impedir que realice funciones mentales correctamente, si no supera una RP puede perder potencial mientras se mantenga. o incluso tener un negativo a todas las acciones mentales.",
            "efectos": [
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
                    "resultado": "RP 60, -10 a todo control de secundarías intelectuales"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "RP 80, -10 a todo control de secundarías intelectuales"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "RP 120, -20 a todo control de secundarías intelectuales"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "RP 140, -30 a todo control de secundarias intelectuales, -10 al potencial"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "RP 160, -30 a todo control de secundarías intelectuales, -20 al potencial"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "RP 180, -50 a todo control de secundarías intelectuales, -20 al potencial, sin concentración."
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "RP 200. -50 a todo control de secundarías intelectuales. Si falla por más de 60 produce inconsciencia automática. -40 al potencial, sin concentración."
                },
                {
                    "dificultad": "Zen",
                    "resultado": "RP 200. -50 a todo control de secundarías intelectuales. Si falla por más de 60 produce inconsciencia automática. -40 al potencial, sin concentración. -1 INTeligencia y PERcepción."
                }
            ]
        },
        {
            "id": "distorsionar",
            "nombre": "Distorsionar",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "El mentalista proyecta una onda que causa una distorsión del vacío en una materia inorgánica, esto se traduce en una tirada de rotura designada por el potencial alcanzado. En caso de utilizarse sobre un ser vivo, este deberá de superar un control de RF o perderá una cantidad de PV’s equivalentes al nivel de fracaso.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 3"
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
                    "resultado": "Rotura 5 // 100 RF"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Rotura 8 // 120 RF"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Rotura 10 // 140 RF"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Rotura 14 // 160 RF"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Rotura 18 // 180 RF"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Rotura 24 // 200 RF"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Rotura 28 // 220 RF"
                }
            ]
        },
        {
            "id": "punto-vacuo",
            "nombre": "Punto Vacuo",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "El mentalista proyecta un punto casi indetectable de vacío, este se mantiene inamovible donde ha sido colocado, concentrando una gran cantidad de fuerza. Si alguien realiza contacto con el punto este succiona el cuerpo que haya entrado en contacto y lo mantiene estático en el lugar. De querer zafarse de la succión realizada por el vacío proyectado, se deberá de superar un control de Fuerza enfrentado determinado por el grado alcanzado, en caso contrario le será imposible escapar de la fuerza de succión. Para ver dicho punto es necesario superar una tirada de advertir designada por el potencial alcanzado.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 10"
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
                    "resultado": "Advertir 240, Impacto de FUE 10"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Advertir 280, Impacto de FUE 12"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Advertir 320, Impacto de FUE 14"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Advertir 440, Impacto de FUE 14"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Imposible de percibir mediante el sentido de la vista, Impacto de FUE 16"
                }
            ]
        },
        {
            "id": "egida-inexistente",
            "nombre": "Égida Inexistente",
            "nivel": "2",
            "accion": "Pasiva",
            "mantenimiento": "Sí",
            "descripcion": "El mentalista genera un escudo que no se puede romper bajo ningún concepto ya que absorbe cualquier impacto físico o basado en intensidades elementales, aunque esto ocasiona que su proyección a la hora de defenderse sea inferior para mantener dicha habilidad. Por sus propiedades especiales, es capaz de utilizarse para detener ataques que fueran a herir a otros que el mentalista sea capaz de ver, pudiendo defenderlos de forma pasiva sin aplicar penalizador adicional que el indicado por el grado que haya alcanzado o tenga mantenido.",
            "efectos": [
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
                    "resultado": "Proyección -40"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Proyección -30"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Proyección -20"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Proyección -10"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Sin penalizador alguno a la proyección"
                }
            ]
        },
        {
            "id": "esfera-de-implosion",
            "nombre": "Esfera de implosión",
            "nivel": "3",
            "accion": "Activa",
            "mantenimiento": "Sí, especial",
            "descripcion": "El mentalista concentra una gran cantidad de matrices en un lugar determinado, al hacerlo genera una apertura en el espacio. Esta atrae absolutamente todo a su núcleo y ejecuta automáticamente una maniobra de aplastar con una fuerza determinada por el potencial alcanzado. Este poder no puede ser mantenido durante más de 10 asaltos. Durante el asalto en el que se proyecta, y en los turnos posteriores, los individuos afectados por el poder deberán de superar un control de AGIlidad para poder escapar. En caso contrario, deberán de resistir el control de aplastamiento.",
            "efectos": [
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
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Área de 5 metros, Control de AGI 10, Aplastar FUE 12"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Área de 10 metros, Control de AGI 12, Aplastar FUE 14"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Área de 25 metros, Control de AGI 14, Aplastar FUE 16"
                }
            ]
        },
        {
            "id": "dimension-partida-nivel-3",
            "nombre": "Dimensión Partida",
            "nivel": "3",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "El mentalista hace chocar dos matrices que generan una gran inestabilidad de vacío entre los átomos que han entrado en contacto, haciendo que toda la energía resultante salga en un arco hacia la dirección deseada. Todos aquellos objetivos dentro del área especificada deberán de superar en caso de ser afectados un control de FUErza para evitar ser derribados. El poder ataca en la TA de FILo y es capaz de dañar energía.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 16"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 14"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 12"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 10"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 8"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Daño 120, área de 25 metros, Derribo con FUE 12, -2 TA"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Daño 160, área de 100 metros, Derribo con FUE 12, - 3 TA"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Daño 200, área de 250 metros, Derribo con FUE 14, -4 TA"
                }
            ]
        }
    ]
});

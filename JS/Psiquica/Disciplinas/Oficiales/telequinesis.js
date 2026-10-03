import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Telequinesis
export const disciplinaTelequinesis = crearDisciplinaPsiquica({
    id: "telequinesis",
    nombre: "Telequinesis",
    color: "#60a5fa",
    descripcion: "La  es la facultad psíquica de mover objetos con la fuerza mental de un individuo. A mayor nivel, un personaje es incluso capaz de destrozar cosas a distancia o modificar su estructura atómica. Esta disciplina no tiene ningún modificador.",
    modificador: "",
    poderes: [
        {
            id: "telequinesis-menor",
            nombre: "Telequinesis menor",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico mueve a distancia una masa inorgánica. El peso y la",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Fácil",
                "resultado": "1 Kg. / Tipo de vuelo 4"
            },
            {
                "dificultad": "Medio",
                "resultado": "2 Kg / Tipo de vuelo 6"
            },
            {
                "dificultad": "Difícil",
                "resultado": "5 Kg / Tipo de vuelo 8"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "10 Kg / Tipo de vuelo 10"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "20 Kg / Tipo de vuelo 12"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "40 Kg / Tipo de vuelo 14"
            },
            {
                "dificultad": "Imposible",
                "resultado": "100 Kg / Tipo de vuelo 16"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "200 Kg / Tipo de vuelo 18"
            },
            {
                "dificultad": "Zen",
                "resultado": "500 Kg / Tipo de vuelo 20"
            }
        ]
        },
        {
            id: "impacto-telequin-tico",
            nombre: "Impacto telequinético",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Proyecta un impacto invisible con potencia variable. Aunque",
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
                "resultado": "Fuerza 8"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Fuerza 10"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Fuerza 12"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Fuerza 14"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Fuerza 15"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Fuerza 16"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Fuerza 18"
            },
            {
                "dificultad": "Zen",
                "resultado": "Fuerza 20"
            }
        ]
        },
        {
            id: "escudo-telequin-tico",
            nombre: "Escudo telequinético",
            nivel: "1",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Crea un escudo telequinético, que defiende a su usuario",
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
                "resultado": "300 PV"
            },
            {
                "dificultad": "Difícil",
                "resultado": "500 PV"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "700 PV"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "1.000 PV"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "1.500 PV / Barrera de daño 60"
            },
            {
                "dificultad": "Imposible",
                "resultado": "2.000 PV / Barrera de daño 80 Detiene energía"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "3.000 PV / Barrera de daño 120 Detiene energía"
            },
            {
                "dificultad": "Zen",
                "resultado": "5.000 PV / Barrera de daño 160 Detiene energía"
            }
        ]
        },
        {
            id: "armadura-telequin-tica",
            nombre: "Armadura telequinética",
            nivel: "1",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Crea una armadura de fuerza sobre el psíquico o el sujeto a",
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
                "resultado": "TA 1"
            },
            {
                "dificultad": "Difícil",
                "resultado": "TA 2"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "TA 4"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "TA 6"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "TA 8"
            },
            {
                "dificultad": "Imposible",
                "resultado": "TA 10"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "TA 12"
            },
            {
                "dificultad": "Zen",
                "resultado": "TA 14"
            }
        ]
        },
        {
            id: "presa-telequin-tica",
            nombre: "Presa telequinética",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Permite utilizar la Proyección Psíquica del personaje para. Este poder no tiene Efecto Añadido.",
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
                "resultado": "Fuerza 6"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Fuerza 8"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Fuerza 10"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Fuerza 12 / Radio de 5 metros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Fuerza 14 / Radio de 10 metros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Fuerza 15 /Rradio de 50 metros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Fuerza 16 / Radio de 100 metros"
            },
            {
                "dificultad": "Zen",
                "resultado": "Fuerza 18 / Radio de 500 metros"
            }
        ]
        },
        {
            id: "bal-stica",
            nombre: "Balística",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Permite al psíquico lanzar con completa precisión objetos empleando su Proyección Psíquica como habilidad de disparo. Cuanto mayor sea su potencial, mayor será su precisión o la cantidad de elementos que será capaz de lanzar simultáneamente (desde una simple daga a cientos de enormes rocas). Dependiendo del Potencial que haya obtenido, el personaje será capaz de incrementar el número de objetos que lanza (cubriendo así un área mucho mayor), o la precisión de este poder. Debe decidir entre obtener un bono a su Proyección si lanza un solo objeto, o arrojar multitud de ellos cubriendo una gran zona. Por ejemplo, a dificultad Absurdo puede elegir entre un +20 a su Proyección lanzando un único elemento, o arrojar una lluvia de objetos que cubran un área de 15 metros. El daño base variará dependiendo de los elementos lanzados y de si se ataca o no en área. Si sólo se proyecta un objeto, su daño dependerá de su naturaleza; las armas producen su daño base natural, aplicando el bono de Voluntad en lugar del de Fuerza. Si se lanzan elementos de escenografía, el daño debe determinarlo el DJ entre 30 y 150. De usarse un ataque en área, el daño base de las armas aumenta un 50%. Un proyectil disparado con esta habilidad queda fuera del control del psíquico; para volver a utilizarlo, deberá primero recuperarlo.",
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
                "resultado": "+0 Proyección / 5 metros"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "+10 Proyección / 10 metros"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "+20 Proyección / 15 metros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "+30 Proyección / 25 metros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "+40 Proyección / 40 metros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "+50 Proyección / 80 metros"
            },
            {
                "dificultad": "Zen",
                "resultado": "+60 Proyección / 150 metros"
            }
        ]
        },
        {
            id: "repulsi-n",
            nombre: "Repulsión",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Crea una barrera que rechaza violentamente cualquier",
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
                "resultado": "Fuerza 6 / Línea de 2 metros"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Fuerza 8 / Línea de 5 metros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Fuerza 10 / Línea de 10 metros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Fuerza 12 / Línea de 20 metros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Fuerza 14 / Línea de 50 metros"
            },
            {
                "dificultad": "Zen",
                "resultado": "Fuerza 18 / Línea de 100 metros"
            }
        ]
        },
        {
            id: "destrozar",
            nombre: "Destrozar",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Este poder destroza un cuerpo, haciéndolo estallar en pedazos",
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
            id: "detecci-n-de-movimiento",
            nombre: "Detección de movimiento",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Dentro del radio de acción de este poder, el psíquico puede. La tirada para evitar sus efectos es una RF, no una RP.",
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
                "resultado": "120 RF / 10 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "160 RF / 50 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "200 RF / 100 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "240 RF / 500 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "280 RF / 1 kilómetro de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "320 RF / 10 kilómetros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "400 RF / 100 kilómetros de radio"
            }
        ]
        },
        {
            id: "vuelo-telequin-tico",
            nombre: "Vuelo telequinético",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico puede moverse libremente por el aire, con el",
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
                "resultado": "Tipo de vuelo 6"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Tipo de vuelo 8"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Tipo de vuelo 10"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Tipo de vuelo 12"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Tipo de vuelo 14"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Tipo de vuelo 16"
            },
            {
                "dificultad": "Zen",
                "resultado": "Tipo de vuelo 18"
            }
        ]
        },
        {
            id: "telequinesis-org-nica",
            nombre: "Telequinesis orgánica",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Es posible mover una masa material, incluso si esta es de",
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
                "resultado": "100 Kg. / Tipo de vuelo 4 / 100 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "250 Kg. / Tipo de vuelo 6 / 120 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "500 Kg. / Tipo de vuelo 8 / 140 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "1.000 Kg. / Tipo de vuelo 10 / 160 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "2.500 Kg. / Tipo de vuelo 12 / 180 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "5.000 Kg. / Tipo de vuelo 14 / 200 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "10.000 Kg. / Tipo de vuelo 16 / 220 RF"
            }
        ]
        },
        {
            id: "telequinesis-mayor",
            nombre: "Telequinesis mayor",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Versión amplificada de la telequinesis simple, que permite",
            efectos: [
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
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "500 toneladas / Tipo de vuelo 4"
            },
            {
                "dificultad": "Imposible",
                "resultado": "10.000 toneladas / Tipo de vuelo 6"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "100.00 toneladas / Tipo de vuelo 8"
            },
            {
                "dificultad": "Zen",
                "resultado": "1.000.000 toneladas / Tipo de vuelo 10"
            }
        ]
        },
        {
            id: "control-del-terreno",
            nombre: "Control del terreno",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Permite al psíquico controlar completamente el terreno o",
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
                "resultado": "10 metros de radio / Barrera de daño 40"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "100 metros de radio / Barrera de daño 60"
            },
            {
                "dificultad": "Imposible",
                "resultado": "250 metros de radio / Barrera de daño 80"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "500 metros de radio / Barrera de daño 100"
            },
            {
                "dificultad": "Zen",
                "resultado": "1 kilómetro de radio / Barrera de daño 140"
            }
        ]
        },
        {
            id: "reestructuraci-n-at-mica",
            nombre: "Reestructuración atómica",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El psíquico puede reconstruir atómicamente cualquier material,",
            efectos: [
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
                "resultado": "140 RF / 100 Kg."
            },
            {
                "dificultad": "Inhumano",
                "resultado": "160 RF / 10 toneladas"
            },
            {
                "dificultad": "Zen",
                "resultado": "200 RF / 100 toneladas PIROQUINESIS Esta disciplina permite al psíquico tener dominio sobre las altas temperaturas y el fuego. Puede controlar su forma o volverse inmune a los efectos del calor. Modificador: El entorno en el que se encuentre el psíquico aumenta o disminuye su potencial de la siguiente manera: Zona helada o ártico -30 Frío intenso -10 Ante una gran hoguera +10 Incendio de grandes proporciones +20 Volcán +30"
            }
        ]
        }
    ]
});

import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Telequinesis
export const disciplinaTelequinesis = crearDisciplinaPsiquica({
    id: "telequinesis",
    nombre: "Telequinesis",
    color: "#60a5fa",
    descripcion: "La Telequinesis es la facultad psíquica de mover objetos con la fuerza mental de un individuo. A mayor nivel, un personaje es incluso capaz de destrozar cosas a distancia o modificar su estructura atómica. Esta disciplina no tiene ningún modificador.",
    modificador: "",
    poderes: [
        {
            id: "telequinesis-menor",
            nombre: "Telequinesis menor",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico mueve a distancia una masa inorgánica. El peso y la velocidad con la que lo hace, dependen de la dificultad que se alcance con el poder. Si se utiliza para atacar a distancia lanzando objetos, el personaje debe reducir a la mitad su Proyección Psíquica, ya que el control que ofrece este poder no está específicamente preparado para ello. Si un luchador con la Tabla de Proyección Psíquica lo domina, puede emplearlo para controlar un arma a distancia y atacar utilizando su Proyección Psíquica en lugar de hacerlo físicamente (es decir, sólo si ha desarrollado por igual su habilidad de ataque como su Proyección Psíquica).",
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
            descripcion: "Proyecta un impacto invisible con potencia variable. Aunque su principal función es empujar, causa un daño equivalente al doble del bono de la Fuerza alcanzada, más el que el DJ considere que puede sufrir por el entorno.",
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
            descripcion: "Crea un escudo telequinético, que defiende a su usuario contra cualquier ataque no inmaterial. Por lo tanto, aunque es capaz de detener el golpe de una espada mágica que daña energía, no para una descarga de magia luminosa. Sólo en el caso de que la barrera sea creada con un nivel de poder superior a Imposible, será capaz de detener efectos y ataques etéreos. A cierto nivel, el escudo gana también la habilidad de barrera de daño. Al contrario que otros poderes, el escudo telequinético mantenido permanece con la misma cantidad de puntos de vida con la que fue creado originariamente. Sin embargo, cada turno posterior pierde 5 puntos de vida, hasta llegar a la cantidad a la que el psíquico puede mantenerlo naturalmente.",
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
            descripcion: "Crea una armadura de fuerza sobre el psíquico o el sujeto a quien este designe. La TA de la coraza protege a su usuario contra todos los tipos de ataque, salvo los de energía. Puede combinarse con cualquier otra protección como capa adicional, pero no causa penalizadores especiales al turno por ello.",
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
            descripcion: "Permite utilizar la Proyección Psíquica del personaje para ejecutar una maniobra de Presa, sin aplicar ningún penalizador a su habilidad al realizarla. La característica empleada por el psíquico es indicada por el nivel de dificultad alcanzado. Existe la posibilidad de que el poder se incremente tanto, que permita apresar a varios individuos dentro de un área determinada. En dicho caso, el psíquico aplica un penalizador de –2 a la Fuerza de la Presa.",
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
            descripcion: "Permite al psíquico lanzar con completa precisión objetos empleando su Proyección Psíquica como habilidad de disparo. Cuanto mayor sea su potencial, mayor será su precisión o la cantidad de elementos que será capaz de lanzar simultáneamente (desde una simple daga a cientos de enormes rocas). Dependiendo del Potencial que haya obtenido, el personaje será capaz de incrementar el número de objetos que lanza (cubriendo así un área mucho mayor), o la precisión de este poder. Es decir, debe de decidir entre obtener un bono a su Proyección (si lanza usa un sólo objeto), o arrojar multitud de ellos cubriendo una gran zona. Por ejemplo, alguien que alcance un nivel de dificultad Absurdo podrá elegir entre un +20 a su Proyección lanzando un único elemento, o arrojar una lluvia de objetos que cubrirían un área de 15 metros. El daño base del ataque variará dependiendo de los elementos que son lanzados y de si se ataca o no en área. Si sólo se proyecta un objeto, su daño dependerá exactamente de su naturaleza; las armas producen su daño base natural, aunque aplicando el bono de Voluntad en lugar del de Fuerza. Si se lanzan elementos de escenografía (rocas, sillas, candelabros…) el daño debe de ser determinado por el DJ entre 30 y 150, dependiendo de aquello que tenga el psíquico a su alcance. De usarse un ataque en área, el daño base de las armas aumenta un 50% a causa de que se proyectan multitud de elementos a la vez. Un proyectil disparado con esta habilidad queda fuera del control del psíquico, por lo que si pretende volverlo a utilizar, deberá primero recuperarlo.",
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
            descripcion: "Crea una barrera que rechaza violentamente cualquier cuerpo físico con el que se ponga en contacto, o trate de atravesarla. Para saber si un individuo es capaz de pasar el campo o no, debe superar un control enfrentado de características, utilizando su Fuerza o su Agilidad contra el atributo que indique el efecto del poder. No es necesario utilizar la Proyección Psíquica para fijar a nadie; Repulsión funciona de manera automática sobre cualquier individuo u objeto que atraviese la barrera. En el momento en el que se crea el poder, no puede utilizarse directamente sobre blancos concretos. La longitud está delimitada por la dificultad del poder alcanzado, aunque el psíquico podrá darle la forma que desee, incluso rodeando completamente su cuerpo.",
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
            descripcion: "Este poder destroza un cuerpo, haciéndolo estallar en pedazos desde dentro. Si el objetivo es un objeto, deberá superar una Resistencia para evitar ser destrozado (los objetos de calidad especial no se rompen automáticamente, sino que pierden un nivel por cada 50 puntos de fracaso). Si es un ser vivo natural, deberá utilizar su RF contra la dificultad requerida, o perderá el doble de puntos de vida por los que no superó el control. Si se trata de un armazón con resistencia estructural o de un ser con acumulación, sufrirá cinco veces el daño que indique el nivel de fracaso. Naturalmente, sólo es posible afectar a seres materiales.",
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
            descripcion: "Dentro del radio de acción de este poder, el psíquico puede detectar cualquier cuerpo en movimiento que no supere la RF requerida. Percibe la velocidad, el tamaño y la dirección que lleva el objeto, pero no distingue su forma. Esta habilidad únicamente funciona contra formas físicas materiales, por lo que las cosas sin sustancia no son detectadas. Este poder no requiere que el personaje utilice su Proyección Psíquica, sino que afecta automáticamente a cualquier individuo que esté dentro del área de acción. La ocultación del Ki funciona contra esta habilidad, otorgando un bono a la RF del modo descrito en el Capítulo 10.",
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
            descripcion: "El psíquico puede moverse libremente por el aire, con el Tipo de vuelo que le indique el poder alcanzado.",
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
            descripcion: "Es posible mover una masa material, incluso si esta es de carácter orgánico, siempre que el individuo afectado no supere la RF requerida. La velocidad depende de la dificultad alcanzada.",
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
            descripcion: "Versión amplificada de la telequinesis simple, que permite mover una masa de peso muy superior.",
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
            descripcion: "Permite al psíquico controlar completamente el terreno o zona en la que se encuentre. Su dominio es total, por lo que puede desde crear un pequeño terremoto a levantar enormes muros de piedra, siempre que sus efectos no excedan el radio indicado. En el caso de que se pretenda afectar a construcciones sólidas, su posible destrucción dependerá de su barrera de daño.",
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
            descripcion: "El psíquico puede reconstruir atómicamente cualquier material, orgánico o inorgánico, transformándolo en sustancia y forma en otro completamente distinto. Por poner un ejemplo, podría convertir a un ser vivo en una estatua de piedra, o la arena en monedas de oro. De todas formas, la capacidad de modelar y forjar está limitada por los conocimientos del personaje en los campos secundarios de Arte y Forja. Sin embargo, dado que puede modificar directamente el material como desee, la dificultad de cualquier creación será de dos niveles menos que el requerido. En lo que respecta a la remodelación de un material, podrá alterar la escala de calidad en más o menos 5 grados, con la única limitación de que no pueden crearse materiales de carácter místico, como malebolgia, iluminati o metal estelar. La masa máxima afectable por esta habilidad y la Resistencia de aquellos que no quieran verse afectados por ella, son delimitadas por el nivel de dificultad que se alcance.",
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

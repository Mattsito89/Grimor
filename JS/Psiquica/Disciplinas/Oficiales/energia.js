import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Energía
export const disciplinaEnerga = crearDisciplinaPsiquica({
    id: "energia",
    nombre: "Energía",
    color: "#facc15",
    descripcion: "Esta disciplina permite al psíquico usar sus poderes para generar energía pura, e influir en menor grado en el calor, el frio y la electricidad. La matriz psíquica se materializa, afectando físicamente al mundo material de muy diversos modos. No tiene ningún modificador.",
    modificador: "",
    poderes: [
        {
            id: "crear-energ-a",
            nombre: "Crear energía",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Crea intensidades de energía o aumenta en la misma cantidad una fuente ya existente. Puede formarse cualquier tipo de energía, desde hogueras a relámpagos, aunque no es posible hacerlo si esta es de origen sobrenatural.",
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
                "resultado": "1 intensidad"
            },
            {
                "dificultad": "Difícil",
                "resultado": "3 intensidades"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "5 intensidades"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "7 intensidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "10 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "13 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "16 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "20 intensidades"
            }
        ]
        },
        {
            id: "percibir-energ-a",
            nombre: "Percibir energía",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico percibe la energía que se encuentra a su alrededor. Detecta su intensidad y naturaleza, aunque no puede hacerlo si esta se halla oculta de algún modo. Este poder no requiere que el personaje utilice su Proyección Psíquica, sino que afecta automáticamente a todo lo que se encuentre dentro del área de acción.",
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
                "resultado": "10 metros de radio"
            },
            {
                "dificultad": "Difícil",
                "resultado": "50 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "100 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "250 metros de radio"
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
            id: "creaci-n-de-energ-a",
            nombre: "Creación de energía",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Crea un único objeto material simple, dándole forma a partir de energía pura, como un cubo de fuerza o una espada. No podrá exceder el metro cúbico de capacidad. El material tiene una Resistencia 25, y estará basado en energía. Si se crea un arma, tendrá un daño base entre de 80 y 120, dependiendo de su tamaño, y una velocidad natural de 10. Dado que es pura energía, no emplea el bono de Fuerza del personaje, pero ataca en la TA de Electricidad.",
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
                "resultado": "1 metro cúbico"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "2 metros cúbicos"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "3 metros cúbicos"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "4 metros cúbicos"
            },
            {
                "dificultad": "Imposible",
                "resultado": "5 metros cúbicos"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "10 metros cúbicos"
            },
            {
                "dificultad": "Zen",
                "resultado": "20 metros cúbicos"
            }
        ]
        },
        {
            id: "descarga-de-energ-a",
            nombre: "Descarga de energía",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Permite al personaje realizar un ataque utilizando su Proyección Psíquica. Este poder actúa en la TA de Electricidad, con el daño base que indique el potencial alcanzado. Si llega a un nivel de dificultad lo suficientemente elevado, la energía es tan pura que daña incluso a seres inmateriales. El ataque es perfectamente visible, incluso para individuos que no son capaces de percibir matrices.",
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
                "resultado": "Daño 50"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Daño 70"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Daño 100"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Daño 120"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Daño 140 / Afecta a seres inmateriales"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Daño 180 / Afecta a seres inmateriales"
            },
            {
                "dificultad": "Zen",
                "resultado": "Daño 220 / Afecta a seres inmateriales"
            }
        ]
        },
        {
            id: "escudo-de-energ-a",
            nombre: "Escudo de energía",
            nivel: "1",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Forma un escudo de energía que protege al psíquico frente a cualquier tipo de ataque, incluyendo los de naturaleza sobrenatural. Al contrario que otros poderes, el escudo de energía permanece con la misma cantidad de puntos de vida con la que fue creado originariamente, en lugar de conservarse con el mantenimiento natural del psíquico. Sin embargo, una vez creado pierde 5 puntos de vida por asalto, hasta que llega a la cantidad en la que el psíquico puede mantener naturalmente el escudo.",
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
                "resultado": "300 PV"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "500 PV"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "800 PV"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "1.000 PV"
            },
            {
                "dificultad": "Imposible",
                "resultado": "1.400 PV"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "2.000 PV"
            },
            {
                "dificultad": "Zen",
                "resultado": "3.000 PV"
            }
        ]
        },
        {
            id: "deshacer-energ-a",
            nombre: "Deshacer energía",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Disminuye varias intensidades de energía, salvo aquellas que tiene origen sobrenatural. Si se usa sobre un ser basado en intensidades de cualquier tipo, recibirá 5 puntos de daño por cada intensidad rebajada, si no supera una RF contra la cifra indicada por el potencial del poder (los seres con acumulación reciben 25 puntos).",
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
                "resultado": "-1 intensidad / 100 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "-3 intensidades / 120 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "-5 intensidades / 140 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "-8 intensidades / 160 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "-12 intensidades / 180 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "-18 intensidades / 200 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "-24 intensidades / 240 RF"
            }
        ]
        },
        {
            id: "inmunidad",
            nombre: "Inmunidad",
            nivel: "2",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "El psíquico, o la persona designada por este, se vuelve inmune al efecto de varias intensidades de un tipo de energía determinada. La inmunidad debe ser hacia una única clase, por lo que si el personaje decide, por ejemplo, no ser afectado por la electricidad, el frío y el fuego seguirán perjudicándole. En el caso de que reciba una agresión a la que es inmune, cada intensidad disminuye 5 puntos el daño base del ataque, y aumenta en +5 las Resistencias contra sus efectos.",
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
                "resultado": "10 intensidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "15 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "20 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "30 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "40 intensidades"
            }
        ]
        },
        {
            id: "controlar-energ-a",
            nombre: "Controlar energía",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Otorga al psíquico el control completo de varias intensidades de energía, ya sea frío, calor o electricidad. El personaje podrá mover y dirigir libremente esas intensidades como le plazca, aunque si las emplea para atacar, reducirá a la mitad su Proyección Psíquica. Si se lanza sobre algo con presencia propia, o un ente vivo, podrá evitar este efecto superando una RF.",
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
                "resultado": "4 intensidades / 80 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "6 intensidades / 100 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "8 intensidades / 120 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "12 intensidades / 140 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "16 intensidades / 160 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "20 intensidades / 180 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "25 intensidades / 220 RF"
            }
        ]
        },
        {
            id: "modificar-naturaleza",
            nombre: "Modificar naturaleza",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Este poder permite transformar varias intensidades de energía de un tipo a otro. Un psíquico puede, por ejemplo, convertir el fuego en hielo o en electricidad. Si dicha energía posee presencia propia, podrá evitar este efecto superando una RF.",
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
                "resultado": "6 intensidades / 100 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "8 intensidades / 120 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "12 intensidades / 140 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "16 intensidades / 160 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "20 intensidades / 180 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "25 intensidades / 220 RF"
            }
        ]
        },
        {
            id: "c-pula-de-energ-a",
            nombre: "Cúpula de energía",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El psíquico crea una cúpula de energía que destruye todo lo que se ponga en contacto con ella. El ataque afecta a una amplia zona, dentro de la cual no es posible designar blancos. Se ejecuta en la TA de Electricidad y su daño depende del nivel de Dificultad del efecto alcanzado. A ciertas dificultades, el poder de la Cúpula es tan elevado y puro que incluso resulta capaz de dañar a seres inmateriales. El ataque es perfectamente visible, incluso para individuos que no son capaces de percibir matrices.",
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
                "resultado": "Daño 100 / 25 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Daño 120 / 50 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Daño 140 / 100 metros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Daño 160 / 200 metros de radio Puede dañar a seres inmateriales"
            },
            {
                "dificultad": "Zen",
                "resultado": "Daño 200 / 500 metros de radio Puede dañar a seres inmateriales"
            }
        ]
        },
        {
            id: "energ-a-mayor",
            nombre: "Energía mayor",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Versión incrementada del poder de primer nivel Crear energía, capaz de provocar efectos mucho más devastadores.",
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
                "resultado": "25 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "35 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "45 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "55 intensidades TELEMETRÍA La Telemetría es la capacidad mental de percibir los residuos ambientales de tiempos pasados. Ello se debe a que la matriz psíquica de cada persona deja siempre tras de sí cierta energía residual, que depende de su estado de ánimo y de sus pensamientos en cada momento. Un individuo con esta disciplina es capaz de percibir dichos residuos y, consecuentemente, de sentir en mayor o menor grado lo que ha ocurrido en el pasado. Modificador: Siempre que un psíquico utilice uno de sus poderes telemétricos sobre algo con lo que se encuentre en contacto físico (ya sea un objeto o una persona), puede sumar un bonificador de +10 a su potencial."
            }
        ]
        }
    ]
});

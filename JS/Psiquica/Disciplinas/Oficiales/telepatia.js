import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Telepatía
export const disciplinaTelepata = crearDisciplinaPsiquica({
    id: "telepatia",
    nombre: "Telepatía",
    color: "#a855f7",
    descripcion: "La Telepatía es una de las disciplinas más fascinantes que tienen los psíquicos a su disposición: sincronizar las energías de dos matrices psíquicas, permitiendo penetrar a quien la utilice en la mente de otros sujetos. Algunos ejemplos de poderes telépatas serían leer los pensamientos de otros individuos, alterar su percepción o incluso dominar su voluntad. No tiene ninguna utilidad sobre seres sin mente, como golems o similares. Al contrario que otras Disciplinas, no se requiere un control de Proyección Psíquica para fijar su blanco (la tirada sigue siendo requerido para determinar el alcance del poder), pero si el psíquico no es capaz de obtener un mínimo de daño 10% en el resultado del asalto, el individuo afectado puede añadir un +60 a su control de RP. Modificador: Siempre que un psíquico utilice uno de sus poderes telepáticos sobre un sujeto que se encuentra en contacto físico con él, puede sumar un bonificador de +20 a su potencial.",
    modificador: "Siempre que un psíquico utilice uno de sus poderes telepáticos sobre un sujeto que se encuentra en contacto físico con él, puede sumar un bonificador de +20 a su potencial.",
    poderes: [
        {
            id: "escaneo-de-zona",
            nombre: "Escaneo de zona",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Detecta cualquier mente activa que se encuentre alrededor del personaje. Puede diferenciarse si se trata de psiques simples como las de animales, o si son mucho más complejas, pero no detectar mentes concretas dentro del radio. Para resistir esta habilidad, debe superarse una RP contra la cifra que indique la dificultad alcanzada. Una vez fallada, el individuo detectado no tiene derecho a ninguna otra Resistencia mientras se encuentre dentro de la zona escaneada. Este poder no requiere que el personaje utilice su Proyección Psíquica, sino que afecta automáticamente a cualquiera que esté dentro del área.",
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
            descripcion: "Permite al psíquico leer los pensamientos que cruzan por la mente de un sujeto en ese mismo momento, aunque no le es posible profundizar en sus recuerdos o sentimientos. Para resistirse a este poder, debe superarse una RP contra la cifra que indique la dificultad alcanzada. Es posible realizar una nueva Resistencia para librarse de la lectura cada 5 asaltos, siempre y cuando el afectado sea de algún modo consciente de que está siendo víctima de este poder. Mientras lea las intenciones de su adversario, el psíquico puede aplicar un bonificador de +30 a las acciones enfrentadas en su contra.",
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
            descripcion: "Altera la percepción de un sujeto, introduciendo imágenes o sonidos ilusorios en su cabeza. Con este poder, un psíquico puede volverse invisible ante un individuo, lanzarle una roca o enfrentarle a un dragón. En el caso de que forme criaturas, atacarán y defenderán usando la Proyección Psíquica del personaje, al igual que lo harán otras ilusiones de ataques (flechazos, conjuros, explosiones...). Para resistirse a este efecto, hay que superar una RP contra la cifra que indique la dificultad alcanzada. Por supuesto, el daño no es real, y si el oponente recibe un impacto, tendrá derecho a una nueva RP. Si se convence de que se trata de una ilusión, podrá hacer un control por asalto.",
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
            descripcion: "Aumenta la RP del psíquico. Puede usarse para mejorar la RP de otros sujetos, pero en dicho caso la progresión se reduce a la mitad.",
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
            descripcion: "El psíquico puede entablar una conversación mental con una persona que tenga localizada a distancia.Por localizada debe entenderse que conozca su posición al menos de manera aproximada. Al contrario que otros poderes, no requiere un control de Proyección Psíquica para fijar su blanco. La distancia máxima a la que es posible hablar, viene indicada por los efectos del poder.",
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
            descripcion: "El psíquico es capaz de imponer mediante esta habilidad una prohibición muy básica, impidiendo al sujeto afectado realizar una acción determinada. Sólo puede prohibirse realizar acciones activas, esto es, que requieran la voluntad consciente del personaje, pero no acciones pasivas que se ejecutan por mera reacción. El afectado puede resistir este efecto superando una RP contra la cifra que indique la dificultad alcanzada, teniendo derecho a una Resistencia adicional cada vez que intente realizar la acción prohibida. Si la prohibición es demasiado genérica o limita extremadamente la libertad del sujeto, puede aplicar un bonificador de +20 a sus controles.",
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
            descripcion: "Permite al psíquico indagar en los pensamientos y recuerdos de un individuo, pudiendo buscar situaciones o pensamientos específicos. Queda a discreción del Director del Juego decidir la cantidad de asaltos necesarios para obtener la información deseada, dependiendo de lo oculta que esté en la memoria del sujeto. El psíquico sólo tendrá acceso a los conocimientos que posea la persona afectada, pero será capaz de penetrar en recuerdos alterados por medios sobrenaturales. El afectado puede resistirse superando una RP contra la cifra que indique la dificultad alcanzada, y tiene derecho a una nueva Resistencia cada 5 asaltos.",
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
            descripcion: "Conecta la mente del psíquico con otra, permitiendo, si ambos lo desean, actuar libremente a uno en el cuerpo del otro y viceversa. En realidad las mentes no cambian de lugar, sino que la conexión a distancia permite tomar el control del otro cuerpo como si se manejara una marioneta. Por ejemplo, un psíquico puede perfectamente conectar su mente con la de un luchador y cederle el control de su cuerpo para realizar un combate. Ya que no se traspasa el alma, un mago no puede lanzar conjuros si introduce su mente en otra forma física. Naturalmente, los personajes que realicen el intercambio conservan las características físicas del individuo en el que se hallen, por lo que sólo se traspasa la habilidad base. Ten en cuenta que esta capacidad es voluntaria, y no se puede obligar a otro personaje a ceder su cuerpo o controlar otro a distancia. Mientras un individuo maneja el cuerpo del otro, pierde temporalmente el dominio del suyo propio. Si muere, la mente del controlador vuelve inmediatamente a su verdadera forma. La distancia máxima que puede alcanzar la conexión está delimitada por la dificultad que se alcance.",
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
            descripcion: "Permite modificar los recuerdos de la mente de un sujeto, eliminándolos completamente o creando nuevos. Es necesario determinar exactamente qué es lo que se pretende crear o borrar. Puede modificarse una hora de recuerdos por cada punto por el que sujeto afectado no supere la RP requerida. Aunque no tiene mantenimiento, el personaje tendrá derecho a una nueva Resistencia contra la RP original del poder, si ve o hace algo que esté lo suficientemente arraigado a sus recuerdos originales como para hacerle recordar.",
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
            descripcion: "El psíquico puede desprenderse de su forma física y trasladar su mente a distancia. Mientras se encuentre en esta condición, será absolutamente intangible ante cualquier cuerpo no basado en energía, e invisible para aquellos que no vean matrices psíquicas. Sólo puede ser atacado por conjuros y habilidades que dañen a seres inmateriales o que afecten a sus Resistencias. Si recibe cualquier tipo de daño, su cuerpo físico también lo sufre y la forma astral desaparece. El cuerpo astral puede moverse con un Tipo de vuelo equivalente a la Voluntad del psíquico. En este estado, el personaje sólo podrá utilizar habilidades mentales. Si su cuerpo real muere, el psíquico queda atrapado en su forma astral hasta que sea destruida, momento en el que él mismo también perece completamente.",
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
            descripcion: "Lanza una acometida sobre la mente de un sujeto, debilitando su resistencia mental. El afectado sufre un penalizador a su RP, equivalente a la diferencia por la que no supere el control que indique la dificultad alcanzada. La Resistencia debilitada se recupera a ritmo de 5 puntos por hora.",
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
            descripcion: "Localiza la mente de un sujeto determinado que se encuentre, como máximo, a la distancia que indique la dificultad del poder. El psíquico debe de conocer la matriz del individuo al que busca, aunque también cabe la posibilidad de que simplemente busque ciertas pautas mentales. Una vez localizado, el psíquico es capaz de mantener esta habilidad sobre el sujeto para saber dónde está en todo momento. Para resistirse a este efecto, debe superarse una RP contra la cifra que indique la dificultad alcanzada. Tiene derecho a un nuevo control cada cinco asaltos, siempre y cuando el afectado sea consciente de que está siendo víctima de esta habilidad. No requiere que el personaje utilice su Proyección Psíquica, ya que funciona de manera automática si el individuo está dentro del área de acción del poder.",
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
            descripcion: "El psíquico obtiene un control absoluto sobre la voluntad de un sujeto si este no supera la RP requerida. El individuo controlado tiene derecho a una nueva Resistencia al día, o si recibe una orden que vaya completamente en contra de su comportamiento. Ante un mandato que ponga su vida en peligro o le obligue a actuar de manera extrema, tendrá derecho a aplicar un bono de +20 a su RP.",
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
            descripcion: "Este poder ataca la mente de una persona, destrozándola completamente desde dentro. Por cada 10 puntos de diferencia por los que el blanco afectado no supere la RP, perderá temporalmente un punto de sus características de Inteligencia y Voluntad. Los puntos perdidos se recuperan a un ritmo de uno por día, aunque si la puntuación de cualquiera de ellas llega a 0, se considera que individuo ha quedado completamente lobotomizado y su mente desaparece del todo. Un cuerpo sin mente no muere, sino que queda en estado vegetal, y puede ser controlado mediante la habilidad de Conexión psíquica u otros poderes similares.",
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
            descripcion: "Mientras se mantenga este poder, permite utilizar cualquier otra habilidad telepática sobre todos los sujetos que se encuentren en el radio que indique la dificultad alcanzada. Es posible designar quiénes sufren los ataques, siempre que se sea consciente de que se encuentra en su interior. Por poner un ejemplo, si se realiza un asalto psíquico mientras se mantiene este poder con nivel Muy Difícil, serán atacados todos los individuos que el psíquico designe y que se encuentren en un área de 10 metros. Sólo se realiza una única tirada para determinar la Proyección Psíquica del poder que se usa en área, incluso si los poderes afectan a multitud de blancos.",
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

import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Sentiente
export const disciplinaSentiente = crearDisciplinaPsiquica({
    id: "sentiente",
    nombre: "Sentiente",
    color: "#ec4899",
    descripcion: "Esta disciplina permite al psíquico percibir y controlar los sentimientos y sentidos de otras personas. Como la Telepatía, no tiene ninguna utilidad sobre seres sin mente, como golems o similares. Sentiente tampoco requiere un control de Proyección Psíquica para fijar su blanco (la tirada sigue siendo requerido para determinar el alcance del poder), pero si el psíquico no es capaz de obtener un mínimo de daño 10% en el resultado del asalto, el individuo afectado puede añadir un +60 a su control de RP. Modificador: Siempre que un psíquico utilice uno de sus poderes sentientes sobre un sujeto que se encuentra en contacto físico con él, puede sumar un bonificador de +20 a su potencial psíquico.",
    modificador: "Siempre que un psíquico utilice uno de sus poderes sentientes sobre un sujeto que se encuentra en contacto físico con él, puede sumar un bonificador de +20 a su potencial psíquico.",
    poderes: [
        {
            id: "percibir-sentimientos",
            nombre: "Percibir sentimientos",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Percibe lo que siente un individuo en ese mismo momento. Para resistirse a los efectos de este poder, se debe superar una RP contra la cifra que indique la dificultad alcanzada. El afectado tiene derecho a una nueva tirada cada 5 asaltos, pero sólo si sospecha que está siendo objeto de este tipo de poder.",
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
            descripcion: "Detecta un sentimiento determinado en cualquier sujeto que se encuentre en el radio de acción del poder. Si por ejemplo se pretende detectar ira, el psíquico hallará a cualquier individuo colérico dentro de su área de influencia. Para resistirse, puede superarse una RP contra el valor alcanzado por la dificultad. Este poder no requiere que el personaje utilice su Proyección Psíquica, sino que afecta automáticamente a cualquier individuo que esté dentro del área.",
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
            descripcion: "Conecta los sentidos del psíquico con los de otro individuo y viceversa, permitiendo a ambos ver y escuchar lo que el otro sienta. Si el psíquico lo desea, puede negar el acceso a sus sentidos, aunque el afectado no tendrá la misma capacidad sobre el creador del lazo, salvo si supera la RP que indique la dificultad alcanzada. Cualquiera que falle el control de Resistencia tiene derecho a una nueva tirada cada cinco asaltos, pero sólo si sospecha que es objeto de ese tipo de poder. La distancia máxima de la conexión depende del potencial.",
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
            descripcion: "Intensifica el sentimiento o estado de ánimo principal del individuo en ese preciso momento. Ten en cuenta que este poder no es capaz de acrecentar una emoción que no exista previamente. Es posible, por ejemplo, hacer que una persona enfadada no sea capaz de contener su rabia, o que alguien triste se hunda en la depresión. Para resistirse hay que superar una RP, con derecho a una nueva tirada cada 5 asaltos si sospecha que está siendo objeto de este tipo de poder.",
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
            descripcion: "El psíquico hace desaparecer temporalmente alguno de los cinco sentidos de un individuo. Puede eliminarse uno adicional por cada 20 puntos por los que el blanco afectado no supere la dificultad requerida. Tiene derecho a un nuevo control cada 5 asaltos, pero sólo puede recuperar un sentido cada vez.",
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
            descripcion: "Crea sentimientos nuevos en un individuo. Por ejemplo, puede hacer que dos personas que no se soportan se enamoren la una de la otra, o que dos amantes sientan repulsión recíproca. Con este poder, el psíquico es capaz de someter a su antagonista a cualquier estado psicológico que desee, como miedo, dolor… Para resistirse, debe superar una RP contra la cifra que indique la dificultad alcanzada. Si los sentimientos que se crean son de naturaleza radicalmente opuesta a los del individuo, podrá aplicar un +20 adicional a su RP. Cualquier afectado tiene derecho a un nuevo control cada 5 asaltos, pero sólo si sospecha que estos sentimientos no son naturales en él.",
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
            descripcion: "Este poder carga un objeto o lugar determinado con un fuerte sentimiento, que invade automáticamente a cualquier individuo que lo toque o entre en él. Si por ejemplo el psíquico carga con ira una espada, cualquiera que la toque sentirá una cólera inmensa. Si se afecta un lugar, el área estará delimitada por el potencial alcanzado. Para resistirse hay que superar una RP, aunque quien no la pase tiene derecho a una nueva tirada cada 5 asaltos, si sospecha que sus sentimientos están siendo alterados de manera innatural. No se requiere utilizar Proyección Psíquica, sino estar en el lugar determinado o tocando el objeto. Fuera del área o sin contacto con el cuerpo cargado, los efectos desaparecen de inmediato.",
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
            descripcion: "Permite al psíquico proyectar uno de sus sentidos hasta una distancia máxima de un kilómetro. Una vez en dicho lugar, podrá utilizar sus habilidades secundarias perceptivas como si estuviera allí. La presencia del psíquico sólo podrá ser detectada por individuos que sean capaces de sentir matrices psíquicas. No es posible atravesar barreras de energía o lugares protegidos mágicamente.",
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
            descripcion: "Elimina los sentimientos que el psíquico desee de un individuo. Es necesario determinar cuál pretende borrar, y si es general o sólo hacia algo en concreto. Para resistirse, hay que superar la RP que indique la dificultad alcanzada, aunque puede aplicar un +20 si la emoción se encuentra muy arraigada en el corazón de ese sujeto. Por cada 20 puntos por los que no consiga superarla, se permite al psíquico eliminar un sentimiento adicional. Si falla la tirada por más de 80 puntos, puede incluso borrar todo sentimiento de la mente del individuo, prácticamente convirtiéndolo en un vegetal.",
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
            descripcion: "El psíquico puede sentir el uso de poderes y notar la presencia de inividuos que posean también estas habilidades. De este modo, el personaje “ve” la energía de las matrices y, por tanto, no aplicará ningún penalizador por ceguera contra las habilidades psíquicas invisibles. Por ejemplo, quien alcance una dificultad Media podrá sentir matrices psíquicas activas y detectar poderes latentes en las personas, todo en un área de 25 metros.",
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
            descripcion: "Esta habilidad destruye poderes psíquicos activos, siempre que no sean superiores al nivel de dificultad que indica los efectos.",
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
            descripcion: "Esconde las habilidades mentales del psíquico contra el poder de “Sentir matrices” de otras personas. Este poder disminuye el potencial de “Sentir matrices” tantos grados de dificultad como indique el efecto alcanzado. Si el potencial de “Sentir matrices” de un tercero disminuye por debajo de su requerimiento base (es decir, de Fácil), los poderes del psíquico estarán ocultos ante esa detección. El poder de “Sentir matrices” sólo se anula con los poderes del psíquico que los oculta, por lo que seguirá funcionando con normalidad contra otros blancos.",
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
            descripcion: "Mediante esta habilidad, el personaje podrá conectar, con la suya propia, las mentes de varios individuos con la capacidad de usar poderes psíquicos. De este modo, uno de los miembros conectados sumará a su potencial psíquico los bonificadores de Voluntad de los otros. Sólo uno podrá utilizar sus habilidades psíquicas mientras estén conectados, ya que el resto utiliza su poder sólo como potenciador. Las personas conectadas deben usar voluntariamente sus poderes con esta finalidad. El número de individuos capaces de conectarse depende del potencial del poder.",
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

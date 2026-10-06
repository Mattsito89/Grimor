import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina Custom: Aquakinesis — Ad Astra (complemento fanmade)
export const disciplinaAquakinesis = crearDisciplinaPsiquica({
    "id": "aquakinesis",
    "nombre": "Aquakinesis",
    "color": "#0ea5e9",
    "descripcion": "Esta disciplina permite al psíquico controlar la humedad ambiental, así como las grandes masas de agua a su alrededor. Sus poderes son capaces de atraer el agua, controlarla o proyectarla a presión para atacar a decenas de metros de distancia.\n\nModificador: Como en otras disciplinas psíquicas, el entorno aumenta o disminuye el potencial psíquico al usar esta disciplina de la siguiente manera:\nLugares secos, calurosos y sin agua: -30\nLugares con poca humedad y calientes: -10\nLugares húmedos: +10\nLugares con mucha cantidad de agua disponible: +20\nEl océano, inundaciones y grandes diluvios: +30",
    "modificador": "Como en otras disciplinas psíquicas, el entorno aumenta o disminuye el potencial psíquico al usar esta disciplina de la siguiente manera:\nLugares secos, calurosos y sin agua: -30\nLugares con poca humedad y calientes: -10\nLugares húmedos: +10\nLugares con mucha cantidad de agua disponible: +20\nEl océano, inundaciones y grandes diluvios: +30",
    "poderes": [
        {
            "id": "atraer-agua",
            "nombre": "Atraer Agua",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "El psíquico es capaz de atraer los líquidos a su alrededor, concretamente aquellos acuosos. El poder surtirá efecto en el área designada dentro del grado indicado por el poder por cada asalto que lo mantenga.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "5 litros // 5 metros de distancia"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "20 litros // 10 metros de distancia"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "50 litros // 30 metros de distancia"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "100 litros // 50 metros de distancia"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "250 litros // 100 metros de distancia"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "500 litros // 200 metros de distancia"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "1000 litros // 500 metros de distancia"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "2000 litros // 750 metros de distancia"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "5000 litros // 1000 metros de distancia"
                }
            ]
        },
        {
            "id": "capacidades-acuaticas",
            "nombre": "Capacidades acuáticas",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "Mediante su control psíquico, el mentalista puede generar corrientes entorno a su cuerpo para mejorar su movimiento, percepción, contrarrestar la presión y crear burbujas de agua en su nariz para respirar libremente.\n\nLa manipulación y el grado que este adquiere, así como los poderes, vienen indicados por el grado del poder alcanzado.",
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
                    "resultado": "Respiración acuática."
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Igual que el anterior pero además puede moverse libremente con la mitad de su TM bajo el agua, sin tener que realizar ningún control de nadar."
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Igual que el anterior, pero además el cuerpo puede aguantar la presión de las profundidades hasta 200 metros."
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Igual que el anterior pero además ahora puedes moverte con plena facilidad bajo el agua, pudiendo utilizar el TM completo."
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Como el anterior, pero además el cuerpo puede aguantar la presión de las profundidades hasta 500 metros."
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Como el anterior pero además ahora puedes aumentar en +2 tu TM bajo el agua. Permite alcanzar Inhumanidad en TM mientras se encuentre nadando."
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Como el anterior pero la distancia máxima que aguantas la presión aumenta a 1 KM metros."
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Como el anterior pero no hay límite de profundidad y puede moverse plenamente con +4 al TM bajo el agua. Adicionalmente puede alcanzar el grado Zen mientras se nade."
                }
            ]
        },
        {
            "id": "burbuja",
            "nombre": "Burbuja",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "Gracias a sus poderes matriciales, el psíquico forma una gran burbuja de líquido la cual es proyectada en contra del oponente. Pese a ser líquido, la tensión que mantiene en la burbuja es suficientemente fuerte para causar daños. A niveles altos es capaz de crear burbujas gigantes que abarquen varios metros o incluso que al explotar estas manden a volar a los enemigos.\n\nAtaca en la TA de CONtundente.",
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
                    "resultado": "Daño 30"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Daño 50"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Daño 60"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Daño 80"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Daño 100 // 3m de radio"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Daño 120 // 5m de radio"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Daño 120 // 10m de radio // Impacto 12"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Daño 140 // 20m de radio // Impacto 14"
                }
            ]
        },
        {
            "id": "jabalina-de-agua",
            "nombre": "Jabalina de agua",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "El psíquico controla una gran masa de agua, la cual lanza a una enorme presión en contra de su enemigo, penetrando fácilmente las armaduras e incluso a varios enemigos en una línea recta.",
            "efectos": [
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
                    "resultado": "Daño 80 // -1 TA // Línea recta de 3 metros"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Daño 80 // -2 TA // Línea recta de 5 metros"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Daño 100 // -2 TA // Línea recta de 5 metros"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Daño 100 // -3 TA // Línea recta de 10 metros"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Daño 120 // -3 TA // Línea recta de 10 metros"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Daño 120 // -4 TA // Línea recta de 15 metros"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Daño 140 // -5 TA // Línea recta de 20 metros"
                }
            ]
        },
        {
            "id": "manipulacion-acuatica",
            "nombre": "Manipulación acuática",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "Controla el caudal, forma y el tamaño de las aguas siempre y cuando no superen los litros designados por el nivel de poder alcanzado. Si se usa sobre un elemental de agua es capaz de controlarlo a menos que este supere una RF indicada en el grado del poder alcanzado.",
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
                    "resultado": "5 litros / 80 RF"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "25 litros / 100 RF"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "100 litros / 120 RF"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "250 litros / 140 RF"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "500 litros / 160 RF"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "1.000 litros / 180 RF"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "2.000 litros / 200 RF"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "5.000 litros / 240 RF"
                }
            ]
        },
        {
            "id": "manantial-de-vida",
            "nombre": "Manantial de vida",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "El psíquico es capaz de utilizar su manipulación y control sobre los líquidos para curar y sanar heridas provocadas por abrasiones de fuego y el frío, regulando la temperatura para contrarrestar los efectos adversos y restaurando los tejidos.\n\nAdicionalmente es capaz de reducir el resultado obtenido en la tabla de En llamas si se utiliza sobre un objetivo ardiendo.",
            "efectos": [
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
                    "resultado": "Fatiga 3"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "50 PVs // Reduce en 50 puntos el resultado de la tabla de En llamas"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "75 PVs // Reduce en 100 puntos el resultado de la tabla de En llamas"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "125 PVs // Reduce en 150 puntos el resultado de la tabla de En llamas"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "250 PVs // Reduce en 200 puntos el resultado de la tabla de En llamas"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "500 PVs // Reduce automáticamente la tabla de En llamas a 0"
                }
            ]
        },
        {
            "id": "restablecer",
            "nombre": "Restablecer",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "El psíquico es capaz de controlar los líquidos y separarlos a nivel atómico para eliminar cualquier anomalía, veneno o impureza que afectase al cuerpo sobre el que se utilice dicho poder, sea una persona o un cuerpo acuoso.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 3"
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
                    "resultado": "Enfermedades y venenos de nivel 40"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Enfermedades y venenos de nivel 50"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Enfermedades y venenos de nivel 60"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Enfermedades y venenos de nivel 70."
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Enfermedades y venenos de nivel 80."
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Cura cualquier enfermedad y veneno natural"
                }
            ]
        },
        {
            "id": "escudo-torbellino",
            "nombre": "Escudo torbellino",
            "nivel": "2",
            "accion": "Pasiva",
            "mantenimiento": "Sí",
            "descripcion": "El psíquico manipula los líquidos a su alrededor para formar una barrera acuosa que no permite pasar nada que intente penetrarla. Pese a que no es capaz de detener ataques que dañen energía, el escudo se mantiene con la cantidad de PVs originales con la que se creó, reduciéndose en 5 PVs por asalto hasta alcanzar el valor mínimo que pueda mantener el psíquico.\n\nLa barrera es especialmente efectiva contra daños de FUEgo, por lo que cualquier daño de este tipo se ve reducido a la mitad. Por contrapartida, debido a la congelación y deterioro sufrido por los daños de FRIo, el daño que recibe de estos ataques se duplica.",
            "efectos": [
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
                    "resultado": "600 PVs"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "800 PVs"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "1200 PVs"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "1800 PVs"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "2500 PVs"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "4000 PVs"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "6000 PVs"
                }
            ]
        },
        {
            "id": "crear-coagulos",
            "nombre": "Crear coágulos",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "El psíquico obtiene la capacidad de crear densos coágulos en el flujo sanguíneo de los afectados. Mientras lo mantenga, ralentizará el pulso, haciéndole sentir mareado, fatigado y confundido, provocándole un negativo a toda acción equivalente al nivel de fracaso a causa del malestar general.",
            "efectos": [
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
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "RF 120"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "RF 140"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "RF 180 // Si no lo supera por una diferencia de 80, el negativo se dobla"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "RF 200 // Como el anterior"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "RF 220 // Como el anterior"
                }
            ]
        },
        {
            "id": "abrir-los-mares",
            "nombre": "Abrir los mares",
            "nivel": "3",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "El mentalista utiliza todo su poder y enfoca sus matrices en abrir una apertura entre dos masas de agua que divide a los laterales. Tras eso, empieza a separarlas y lentamente las masas se abren, un proceso que abarca entre 1 y 5 minutos, dejando un camino a través del cual se puede pasar. La profundidad que puede abarcar es la misma que puede abarcar de largo.\n\nTras finalizar su mantenimiento, las aguas vuelven de manera violenta a su posición, engullendo y aplastando todo lo que hubiera en su interior hasta volver a su estado original. Las consecuencias de quedar atrapado en mitad de este proceso deberán ser determinadas por el DJ en función de la profundidad y la cantidad de agua.",
            "efectos": [
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
                    "resultado": "Fatiga 3"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "100 metros de largo y 20 de ancho."
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "500 metros de largo y 50 de ancho."
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "2 kilómetros de largo y 100 de ancho."
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Cualquier distancia de largo y 200 metros de ancho."
                }
            ]
        },
        {
            "id": "diluvio",
            "nombre": "Diluvio",
            "nivel": "3",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "Reuniendo toda la humedad del ambiente, haciendo acopio incluso de todo lo que haya condensado en la estratosfera, evoca una calamidad digna de mitos y fantasía. Una lluvia torrencial capaz de arrasar con todo a su paso. Los cielos se volverán negros y una incesante lluvia golpeará a todos los que se encuentren en un área indicada por el grado de poder alcanzado, que se verán arrastrados con la lluvia, así como cualquier cosa susceptible de ser arrollada por la misma. Las consecuencias de una lluvia de tal magnitud quedarán a discreción del DJ.",
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
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "100 l/m2 // 500m de radio"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "150 l/m2 // 1Km de radio"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "200 l/m2 // 5Km de radio"
                }
            ]
        }
    ]
});

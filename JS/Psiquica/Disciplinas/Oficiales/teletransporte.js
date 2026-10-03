import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Teletransporte
export const disciplinaTeletransporte = crearDisciplinaPsiquica({
    id: "teletransporte",
    nombre: "Teletransporte",
    color: "#14b8a6",
    descripcion: "Esta disciplina controla el espacio así como su entendimiento por parte del mentalista.",
    modificador: "",
    poderes: [
        {
            id: "recolocar-objeto",
            nombre: "Recolocar Objeto",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Permite cambiar la localización de un objeto inorgánico haciéndolo aparecer en otro lugar. Es necesario saber donde quiere colocarlo, y es imposible hacerlo dentro de materia sólida; de intentarlo, este queda en un lugar aleatorio (decidido por el DJ) cercano. Si el objeto lo sostiene una criatura viva tiene derecho a una tirada de RF para evitar perderlo. Tanto el peso como la distancia máxima a la que puede ser transportado son determinados por el nivel de dificultad del poder.",
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
                "resultado": "1 Kilogramo / 1 Metro / RF 60"
            },
            {
                "dificultad": "Difícil",
                "resultado": "2 Kilogramos / 5 Metros / RF 80"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "5 Kilogramos / 100 Metros / RF 100"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "10 Kilogramos / 500 Metros / RF 120"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "25 Kilogramos / 1 Kilómetro / RF 140"
            },
            {
                "dificultad": "Imposible",
                "resultado": "50 Kilogramos / 2 Kilómetros / RF 160"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "100 Kilogramos / 5 Kilómetros / RF 180"
            },
            {
                "dificultad": "Zen",
                "resultado": "500 Kilogramos / 10 Kilómetros / RF 200"
            }
        ]
        },
        {
            id: "autorrecolocaci-n",
            nombre: "Autorrecolocación",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Cambia la posición del psíquico en el mundo. Es necesario conocer el lugar al que pretende recolocarse y no es posible hacerlo dentro de materia sólida; de intentarlo, el psíquico queda automáticamente inconsciente en un lugar aleatorio (decidido por el DJ) cercano al lugar donde pretendía transportarse.",
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
                "resultado": "1 Metro"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "5 Metros"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "10 Metros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "25 Metros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "50 Metros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "100 Metros"
            },
            {
                "dificultad": "Zen",
                "resultado": "250 Metros"
            }
        ]
        },
        {
            id: "trasporte-defensivo",
            nombre: "Trasporte Defensivo",
            nivel: "1",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Usa la capacidad de transporte del psíquico para, realizando pequeños saltos de un lugar a otro, defenderse de los ataques. Este poder permite al personaje usar su Proyección Psíquica como si fuera Habilidad de Esquiva. Tanto el número máximo de esquivas que el personaje puede realizar por asalto como la distancia que puede moverse para anular los penalizadores de área son determinados por el grado de dificultad alcanzado.",
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
                "resultado": "1 Esquiva / 5 Metros"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "2 Esquivas / 10 Metros"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "3 Esquivas / 15 Metros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "4 Esquivas / 25 Metros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "6 Esquivas / 50 Metros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "8 Esquivas / 100 Metros"
            },
            {
                "dificultad": "Zen",
                "resultado": "Esquivas ilimitadas / Nunca sufre el penalizador de área"
            }
        ]
        },
        {
            id: "autorrecolocaci-n-mayor",
            nombre: "Autorrecolocación Mayor",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Versión potencial de la Autorecolocación, que permite al psíquico teletransportarse a grandes distancias. Es necesario conocer el lugar al que pretende recolocarse y no es posible hacerlo dentro de materia sólida; de intentarlo, el psíquico queda automáticamente inconsciente en un lugar aleatorio (decidido por el DJ) cercano al lugar donde pretendía transportarse.",
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
                "resultado": "1 Kilómetro"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "10 Kilómetros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "100 Kilómetros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "1.000 Kilómetros"
            },
            {
                "dificultad": "Zen",
                "resultado": "Cualquier lugar del mundo"
            }
        ]
        },
        {
            id: "aleph",
            nombre: "Aleph",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Permite ver todo el espacio en un único punto, observando cuanto haya en enormes zonas de terreno desde “todos los ángulos” a la vez. Se trata de un poder tremendamente peligroso para el mentalista: sólo las psiques más poderosas y resistentes son capaces de mirar un aleph y asimilar lo contemplado sin sufrir daño severo. Cada asalto contemplando uno permite realizar un control de Percepción para localizar un lugar, objeto o persona concreto. Esta tirada tiene una dificultad indicada por el resultado del potencial psíquico que generó el Aleph. No importa dónde esté lo que busque, siempre que se encuentre en el área afectada por el aleph, si tiene éxito en el control de Percepción, el psíquico puede llegar a encontrarlo. Cada asalto de búsqueda continuada en un mismo aleph disminuye un punto el siguiente control de Percepción. No obstante, cada turno se debe realizar también un control de RP contra la dificultad indicada por el potencial alcanzado. En caso de fallar, el personaje obtiene un negativo a toda acción equivalente al nivel de fracaso que se recupera a un ritmo de 5 al día. Además pierde permanentemente un punto de INT y VOL por cada 40 puntos por los que se falla la tirada. Si se están empleando las reglas opcionales de Salud Mental de la Pantalla del Director se pueden cambiar los efectos de la RP por un control de Shock.",
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
                "resultado": "10 Kilómetros / Percepción 20 RP 140 o Shock -2"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "100 Kilómetros / Percepción 18 RP 160 o Shock -4"
            },
            {
                "dificultad": "Imposible",
                "resultado": "1.000 Kilómetros / Percepción 16 RP 180 o Shock -6"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "10.000 Kilómetros / Percepción 14 RP 200 o Shock -10"
            },
            {
                "dificultad": "Zen",
                "resultado": "Cualquier Distancia / Percepción 12 RP 240 o Shock -14"
            }
        ]
        },
        {
            id: "recolocar-objeto-mayor",
            nombre: "Recolocar Objeto Mayor",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Este poder es una versión más poderosa de Recolocar objeto e igual que este, es necesario saber donde quieres colocarlo, y es imposible hacerlo dentro de materia sólida; de intentarlo, este queda en un lugar aleatorio (decidido por el DJ) cercano. Si el objeto lo sostiene una criatura viva tiene derecho a una tirada de RF para evitar perderlo. Tanto el peso como la distancia máxima a la que puede ser transportado son determinados por el nivel de dificultad del poder.",
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
                "resultado": "1.000 Toneladas / 1 Kilómetro / RF 140"
            },
            {
                "dificultad": "Imposible",
                "resultado": "10.000 Toneladas / 10 Kilómetros RF 160"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "100.000 Toneladas / 100 Kilómetros RF 180"
            },
            {
                "dificultad": "Zen",
                "resultado": "1.000.000 Toneladas Cualquier lugar del mundo / RF 200"
            }
        ]
        },
        {
            id: "teletrasporte",
            nombre: "Teletrasporte",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Permite al psíquico teletransportar cualquier cosa, orgánica o inorgánica, a grandes distancias. Es necesario conocer el lugar al que pretende trasportar el objeto, y no se puede recolocar dentro de materia sólida; de intentarlo, el objetivo aparece queda automáticamente inconsciente en un lugar aleatorio (decidido por el DJ) cercano al lugar donde pretendía transportarse. En el caso de que el objetivo no quiera ser trasportado, puede evitarlo superando un control de RF. La masa máxima que es posible trasportar es determinada por el nivel de dificultad alcanzado.",
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
                "resultado": "1 Kilómetro / RF 120 / 100 kilogramos"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "10 Kilómetros / RF 140 / 500 kilogramos"
            },
            {
                "dificultad": "Imposible",
                "resultado": "100 Kilómetros / RF 160 / 1 tonelada"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "1.000 Kilómetros / RF 180 / 10 toneladas"
            },
            {
                "dificultad": "Zen",
                "resultado": "10.000 Kilómetros / RF 200 / 100 toneladas Luz Esta disciplina permite al psíquico controla la luz y las materias reflectantes."
            }
        ]
        }
    ]
});

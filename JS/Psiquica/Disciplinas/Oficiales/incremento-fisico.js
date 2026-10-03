import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Incremento Físico
export const disciplinaIncrementoFsico = crearDisciplinaPsiquica({
    id: "incremento-fisico",
    nombre: "Incremento Físico",
    color: "#22c55e",
    descripcion: "La disciplina Incremento físico otorga al psíquico un completo dominio sobre su cuerpo y todas las células que lo componen. De este modo, controla cada parte de su anatomía como si se tratase de una máquina perfecta, aumentando de un modo increible sus capacidades corporales. Sólo es posible emplear una vez un mismo poder sobre un determinado individuo. No tiene ningún modificador.",
    modificador: "",
    poderes: [
        {
            id: "incrementar-fuerza",
            nombre: "Incrementar Fuerza",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Aumenta la característica de Fuerza del psíquico. La progresión de aumento se reduce a la mitad si el atributo incrementado alcanza un valor superior a 10; consecuentemente, necesita aumentar dos puntos para sumar sólo uno por encima de esta cantidad.",
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
                "resultado": "Fuerza +1"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Fuerza +2"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Fuerza +3"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Fuerza +4"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Fuerza +5"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Fuerza +6"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Fuerza +8"
            },
            {
                "dificultad": "Zen",
                "resultado": "Fuerza +10"
            }
        ]
        },
        {
            id: "incrementar-desplazamiento",
            nombre: "Incrementar desplazamiento",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico es capaz de trasladarse a una velocidad muy superior a la que normalmente desarrolla, aumentando su Tipo de movimiento. Si el desplazamiento se incrementa por encima de 10, la progresión de aumento se reduce a la mitad.",
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
                "resultado": "Tipo de movimiento +1"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Tipo de movimiento +2"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Tipo de movimiento +3"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Tipo de movimiento +4"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Tipo de movimiento +5"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Tipo de movimiento +6"
            },
            {
                "dificultad": "Zen",
                "resultado": "Tipo de movimiento +8"
            }
        ]
        },
        {
            id: "incrementar-habilidad",
            nombre: "Incrementar habilidad",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Aumenta la Destreza o Agilidad del psíquico de un modo desproporcionado. Si se modifica la Agilidad, sólo incrementa el nivel de la característica, no el Tipo de movimiento del personaje (es decir, el personaje es mucho más ágil, pero su velocidad de desplazamiento no se incrementa). La progresión se reduce a la mitad si el atributo alcanza un valor superior a 10; por tanto, necesita aumentar dos puntos para sumar sólo uno por encima de 10.",
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
                "resultado": "Destreza o Agilidad +1"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Destreza o Agilidad +2"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Destreza o Agilidad +3"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Destreza o Agilidad +4"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Destreza o Agilidad +5"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Destreza o Agilidad +6"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Destreza o Agilidad +8"
            },
            {
                "dificultad": "Zen",
                "resultado": "Destreza o Agilidad +10"
            }
        ]
        },
        {
            id: "inhumanidad",
            nombre: "Inhumanidad",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico puede alcanzar la dificultad de Inhumano al realizar acciones físicas. Además, mejora todas sus habilidades secundarias del campo atlético aplicando un bonificador a sus tiradas.",
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
                "resultado": "Inhumanidad"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Inhumanidad, +5 a las habilidades atléticas"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Inhumanidad, +10 a las habilidades atléticas"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Inhumanidad, +20 a las habilidades atléticas"
            },
            {
                "dificultad": "Zen",
                "resultado": ", +30 a las habilidades atléticas"
            },
            {
                "dificultad": "Zen",
                "resultado": ", +40 a las habilidades atléticas"
            },
            {
                "dificultad": "Zen",
                "resultado": ", +60 a las habilidades atléticas"
            },
            {
                "dificultad": "Zen",
                "resultado": ", +80 a las habilidades atléticas"
            }
        ]
        },
        {
            id: "incrementar-capacidad-de-salto",
            nombre: "Incrementar capacidad de salto",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico puede saltar extraordinariamente, aumentando con este poder la potencia de su impulso. Suma cierta cantidad a su habilidad secundaria de Saltar y, en algunos casos, puede incluso alcanzar dificultades Inhumanas o de nivel Zen.",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 2"
            },
            {
                "dificultad": "Fácil",
                "resultado": "+10 a Saltar"
            },
            {
                "dificultad": "Medio",
                "resultado": "+20 a Saltar"
            },
            {
                "dificultad": "Difícil",
                "resultado": "+40 a Saltar"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "+80 a Saltar"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "+120 a Saltar / Inhumanidad"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "+180 a Saltar / Inhumanidad"
            },
            {
                "dificultad": "Imposible",
                "resultado": "+220 a Saltar / Inhumanidad"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "+280 a Saltar"
            },
            {
                "dificultad": "Zen",
                "resultado": "+320 a Saltar"
            }
        ]
        },
        {
            id: "incrementar-el-sentido-acrob-tico",
            nombre: "Incrementar el sentido acrobático",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico puede realizar acrobacias y cabriolas realmente sorprendentes, casi sobrenaturales. Por tanto, suma cierta cantidad a su habilidad secundaria de Acrobacias y, en algunos casos, puede incluso alcanzar dificultades Inhumanas o de nivel Zen.",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 2"
            },
            {
                "dificultad": "Fácil",
                "resultado": "+10 a Acrobacias"
            },
            {
                "dificultad": "Medio",
                "resultado": "+20 a Acrobacias"
            },
            {
                "dificultad": "Difícil",
                "resultado": "+40 a Acrobacias"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "+80 a Acrobacias"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "+120 a Acrobacias / Inhumanidad"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "+180 a Acrobacias / Inhumanidad"
            },
            {
                "dificultad": "Imposible",
                "resultado": "+220 a Acrobacias / Inhumanidad"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "+280 a Acrobacias"
            },
            {
                "dificultad": "Zen",
                "resultado": "+320 a Acrobacias"
            }
        ]
        },
        {
            id: "incremento-de-reacci-n",
            nombre: "Incremento de reacción",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Aumentando sus sentidos y su velocidad de reacción, este poder permite al psíquico actuar antes que ninguna persona normal. Por ello, consigue un bonificador especial a su turno para el siguiente asalto.",
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
                "resultado": "+20 al turno"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "+40 al turno"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "+60 al turno"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "+80 al turno"
            },
            {
                "dificultad": "Imposible",
                "resultado": "+120 al turno"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "+160 al turno"
            },
            {
                "dificultad": "Zen",
                "resultado": "+200 al turno"
            }
        ]
        },
        {
            id: "incremento-de-percepci-n",
            nombre: "Incremento de Percepción",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Incrementa la capacidad perceptiva del personaje. A términos de juego, suma puntos a la Percepción del psíquico. La progresión se reduce a la mitad si el atributo alcanza un valor superior a 10.",
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
                "resultado": "Percepción +1"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Percepción +2"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Percepción +3"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Percepción +4"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Percepción +5"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Percepción +6"
            },
            {
                "dificultad": "Zen",
                "resultado": "Percepción +8"
            }
        ]
        },
        {
            id: "incrementar-aguante",
            nombre: "Incrementar aguante",
            nivel: "2",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "El psíquico refuerza la resistencia de su cuerpo controlando sus propias células. De este modo, se prepara para absorber daños y recibir impactos sin sufrir sus consecuencias. Este poder aumenta la RF del personaje en la cantidad que indique el efecto alcanzado.",
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
                "resultado": "+10 a la RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "+20 a la RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "+40 a la RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "+80 a la RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "+120 a la RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "+160 a la RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "+200 a la RF"
            }
        ]
        },
        {
            id: "regeneraci-n",
            nombre: "Regeneración",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Controlando su físico a un nivel muy primario, el psíquico aumenta el ritmo de curación de su cuerpo. Este poder eleva su nivel de Regeneración, aunque no le permite alcanzar un nivel superior a 18.",
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
                "resultado": "+1 nivel de Regeneración"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "+2 niveles de Regeneración"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "+4 niveles de Regeneración"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "+6 niveles de Regeneración"
            },
            {
                "dificultad": "Imposible",
                "resultado": "+8 niveles de Regeneración"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "+10 niveles de Regeneración"
            },
            {
                "dificultad": "Zen",
                "resultado": "+12 niveles de Regeneración"
            }
        ]
        },
        {
            id: "incremento-total",
            nombre: "Incremento total",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El personaje puede incrementar a la vez todas las características de su cuerpo. Este poder otorga un bono a los cuatro atributos físicos (Fuerza, Destreza, Agilidad y Constitución), al igual que a la Percepción. Los efectos de este poder se acumulan a los de cualquier otra incrementación que el personaje mantenga activa. La progresión se reduce a la mitad en los atributos que alcancen un valor superior a 10. 2 2 3",
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
                "resultado": "Características físicas +1"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Características físicas +2"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Características físicas +4"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Características físicas +6"
            },
            {
                "dificultad": "Zen",
                "resultado": "Características físicas +8"
            }
        ]
        },
        {
            id: "eliminaci-n-de-cansancio",
            nombre: "Eliminación de cansancio",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Usando la energía de su matriz, el personaje puede descargar el desgaste físico de su cuerpo, restaurando algunos de sus puntos de Cansancio perdidos. Sin embargo, este poder no permite eliminar el cansancio que haya adquirido a causa de la fatiga psíquica.",
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
                "resultado": "2 puntos de Cansancio recuperados"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "4 puntos de Cansancio recuperados"
            },
            {
                "dificultad": "Imposible",
                "resultado": "6 puntos de Cansancio recuperados"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "10 puntos de Cansancio recuperados"
            },
            {
                "dificultad": "Zen",
                "resultado": "Completamente recuperado"
            }
        ]
        },
        {
            id: "imbuir",
            nombre: "Imbuir",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Permite emplear las habilidades de esta disciplina sobre otros individuos. Los poderes que se imbuyen no pueden tener un efecto de dificultad superior al indicado.",
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
                "resultado": "Poderes de nivel Muy Difícil"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Poderes de nivel Absurdo"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Poderes de nivel Casi Imposible"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Poderes de nivel Imposible"
            },
            {
                "dificultad": "Zen",
                "resultado": "Poderes de nivel Inhumano"
            }
        ]
        }
    ]
});

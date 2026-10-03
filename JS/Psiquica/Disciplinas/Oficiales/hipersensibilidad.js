import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Hipersensibilidad
export const disciplinaHipersensibilidad = crearDisciplinaPsiquica({
    id: "hipersensibilidad",
    nombre: "Hipersensibilidad",
    color: "#c084fc",
    descripcion: "es el empleo del poder de la mente sobre los sentidos básicos, aumentándolos y mejorándolos hasta grados imposibles. modificadores que a cualquier habilidad Perceptiva.",
    modificador: "Salvo que se indique lo contrario, se aplican los mismos",
    poderes: [
        {
            id: "filtrar-sentidos",
            nombre: "Filtrar Sentidos",
            nivel: "1",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Filtra la entrada sensorial, permitiendo evitar sobrecargas",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Hasta -10 / Un sentido"
            },
            {
                "dificultad": "Medio",
                "resultado": "Hasta -20 / Un sentido"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Hasta -30 / Un sentido"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Hasta -40 / Dos sentidos"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Hasta -50 / Dos sentidos"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Hasta -60 / Tres sentidos"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Hasta -70 / Tres sentidos"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Hasta -80 / Cuatro sentidos"
            },
            {
                "dificultad": "Zen",
                "resultado": "Hasta -100 / Todos los sentidos"
            }
        ]
        },
        {
            id: "desplazar-sentidos",
            nombre: "Desplazar Sentidos",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Permite colocar la entrada sensorial de uno de los sentidos",
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
                "resultado": "1 Metro"
            },
            {
                "dificultad": "Difícil",
                "resultado": "5 Metros"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "10 Metros"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "25 Metros"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "50 Metros"
            },
            {
                "dificultad": "Imposible",
                "resultado": "100 Metros"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "250 Metros"
            },
            {
                "dificultad": "Zen",
                "resultado": "500 Metros"
            }
        ]
        },
        {
            id: "sentidos-superiores",
            nombre: "Sentidos Superiores",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Permite crear un nuevo tipo de sentido que permita",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 12"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 10"
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
                "resultado": "Sentir electromagnetismo"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Sentir matrices"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Sentir magia"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Sentir ki"
            },
            {
                "dificultad": "Zen",
                "resultado": "Sentirlo todo"
            }
        ]
        }
    ]
});

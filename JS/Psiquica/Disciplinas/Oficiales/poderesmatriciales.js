import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

export const poderesmatriciales = crearDisciplinaPsiquica({
    id: "poderesmatriciales",
    nombre: "Poderes Matriciales",
    color: "#353436",
    descripcion: "De modo adicional a las habilidades mentales explicadas, existen cuatro poderes genéricos a los que tienen acceso todos los psíquicos indistintamente. No se encuentran dentro de ninguna disciplina, por lo que cualquiera de ellos puede adquirirse invirtiendo un solo CV, o gastar temporalmente uno para tener un acceso limitado a él. Estos poderes no tienen nivel.",
    modificador: "",
    poderes: [
        {
    id: "sentir-matrices",
    nombre: "Sentir Matrices",
    nivel: "NA",
    accion: "Activa",
    mantenimiento: "Sí",
    descripcion: "El psíquico puede sentir el uso de poderes y notar la presencia de inividuos que posean también estas habilidades. De este modo, el personaje “ve” la energía de las matrices y, por tanto, no aplicará ningún penalizador por ceguera contra las habilidades psíquicas invisibles. Por ejemplo, quien alcance una dificultad Media podrá sentir matrices psíquicas activas y detectar poderes latentes en las personas, todo en un área de 25 metros.",
    efectos: [
        {
            "dificultad": "Rutinario",
            "resultado": "Fatiga 1"
        },
        {
            "dificultad": "Fácil",
            "resultado": "10 metros de radio / Permite ver matrices psíquicas activas"
        },
        {
            "dificultad": "Medio",
            "resultado": "25 metros de radio / Detecta poderes latentes en las personas"
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
            "dificultad": "Casi Imposible",
            "resultado": "500 metros de radio / Mide el potencial de otro psíquico"
        },
        {
            "dificultad": "Imposible",
            "resultado": "1 kilómetro de radio / Detecta los CV libres que le quedan al otro psíquico"
        },
        {
            "dificultad": "Inhumano",
            "resultado": "5 kilómetros de radio / Nota los poderes que posee otro psíquico"
        },
        {
            "dificultad": "Zen",
            "resultado": "100 kilómetros de radio"
        },
    ]
        },

        {
    id: "nuevo-poder",
    nombre: "",
    nivel: 1,
    accion: "Activa",
    mantenimiento: "Sí",
    descripcion: ``,
    efectos: [
        {
            "dificultad": "Rutinario",
            "resultado": ""
        },
        {
            "dificultad": "Fácil",
            "resultado": ""
        },
        {
            "dificultad": "Medio",
            "resultado": ""
        },
        {
            "dificultad": "Difícil",
            "resultado": ""
        },
        {
            "dificultad": "Muy Difícil",
            "resultado": ""
        },
        {
            "dificultad": "Absurdo",
            "resultado": ""
        },
        {
            "dificultad": "Casi Imposible",
            "resultado": ""
        },
        {
            "dificultad": "Imposible",
            "resultado": ""
        },
        {
            "dificultad": "Inhumano",
            "resultado": ""
        },
        {
            "dificultad": "Zen",
            "resultado": ""
        },
    ]
        },

        {
    id: "nuevo-poder",
    nombre: "",
    nivel: 1,
    accion: "Activa",
    mantenimiento: "Sí",
    descripcion: ``,
    efectos: [
        {
            "dificultad": "Rutinario",
            "resultado": ""
        },
        {
            "dificultad": "Fácil",
            "resultado": ""
        },
        {
            "dificultad": "Medio",
            "resultado": ""
        },
        {
            "dificultad": "Difícil",
            "resultado": ""
        },
        {
            "dificultad": "Muy Difícil",
            "resultado": ""
        },
        {
            "dificultad": "Absurdo",
            "resultado": ""
        },
        {
            "dificultad": "Casi Imposible",
            "resultado": ""
        },
        {
            "dificultad": "Imposible",
            "resultado": ""
        },
        {
            "dificultad": "Inhumano",
            "resultado": ""
        },
        {
            "dificultad": "Zen",
            "resultado": ""
        },
    ]
        },

        {
    id: "nuevo-poder",
    nombre: "",
    nivel: 1,
    accion: "Activa",
    mantenimiento: "Sí",
    descripcion: ``,
    efectos: [
        {
            "dificultad": "Rutinario",
            "resultado": ""
        },
        {
            "dificultad": "Fácil",
            "resultado": ""
        },
        {
            "dificultad": "Medio",
            "resultado": ""
        },
        {
            "dificultad": "Difícil",
            "resultado": ""
        },
        {
            "dificultad": "Muy Difícil",
            "resultado": ""
        },
        {
            "dificultad": "Absurdo",
            "resultado": ""
        },
        {
            "dificultad": "Casi Imposible",
            "resultado": ""
        },
        {
            "dificultad": "Imposible",
            "resultado": ""
        },
        {
            "dificultad": "Inhumano",
            "resultado": ""
        },
        {
            "dificultad": "Zen",
            "resultado": ""
        },
    ]
        },
    ] 
})

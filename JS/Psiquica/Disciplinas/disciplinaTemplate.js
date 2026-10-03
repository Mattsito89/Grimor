// Plantilla independiente para Disciplina Psíquica.
// No reutiliza el modelo de hechizos de Magia ni el de Metamagia.
export const plantillaPoderPsiquico = {
    plantilla: true,
    id: "nuevo-poder",
    nombre: "",
    nivel: 1,
    accion: "Activa",
    mantenimiento: "Sí",
    descripcion: "",
    efectos: [[
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
    ]]
};

export function crearDisciplinaPsiquica({ id, nombre, color, descripcion = "", modificador = "", poderes = [] }) {
    return {
        id,
        nombre,
        color,
        tipoContenido: "psiquica",
        descripcion,
        modificador,
        poderes: [
            ...poderes,
            { ...plantillaPoderPsiquico, id: `${id}-plantilla-1` },
            { ...plantillaPoderPsiquico, id: `${id}-plantilla-2` },
            { ...plantillaPoderPsiquico, id: `${id}-plantilla-3` }
        ]
    };
}

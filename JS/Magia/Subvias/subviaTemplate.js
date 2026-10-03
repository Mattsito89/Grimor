// =====================================================
// PLANTILLA: SUB-VÍA DE MAGIA
// =====================================================
// Copia este archivo a Magia/Subvias/Custom/ y renómbralo.
// Completa los datos de la sub-vía y añade sus hechizos.
// vias-index.js ignora este archivo automáticamente.

export const SUBVIA_TEMPLATE = Object.freeze({
    plantilla: true,
    id: "nueva-subvia",
    nombre: "",
    color: "#b9a46a",
    hechizos: []
});

export function crearSubvia(datos = {}) {
    const { plantilla: _plantilla, ...base } = SUBVIA_TEMPLATE;
    return {
        ...base,
        ...datos
    };
}

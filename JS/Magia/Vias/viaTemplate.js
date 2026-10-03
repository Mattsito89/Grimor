// =====================================================
// PLANTILLA: VÍA DE MAGIA
// =====================================================
// Copia este archivo a Magia/Vias/Custom/ y renómbralo.
// Completa los datos de la vía y añade sus hechizos.
// vias-index.js ignora este archivo automáticamente.

export const VIA_TEMPLATE = Object.freeze({
    plantilla: true,
    id: "nueva-via",
    nombre: "",
    color: "#b9a46a",
    hechizos: []
});

export function crearVia(datos = {}) {
    const { plantilla: _plantilla, ...base } = VIA_TEMPLATE;
    return {
        ...base,
        ...datos
    };
}

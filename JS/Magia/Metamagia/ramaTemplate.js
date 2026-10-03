// =====================================================
// PLANTILLA: RAMA DE METAMAGIA
// =====================================================
// Copia este archivo a Magia/Metamagia/Custom/ y renómbralo.
// Añade los principios de la rama en `hechizos`.
// vias-index.js ignora este archivo automáticamente.

export const RAMA_METAMAGIA_TEMPLATE = Object.freeze({
    plantilla: true,
    id: "nueva-rama",
    nombre: "",
    color: "#b9a46a",
    tipoContenido: "metamagia",
    hechizos: []
});

export function crearRamaMetamagia(datos = {}) {
    const { plantilla: _plantilla, ...base } = RAMA_METAMAGIA_TEMPLATE;
    return {
        ...base,
        ...datos,
        tipoContenido: "metamagia"
    };
}

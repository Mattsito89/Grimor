// =====================================================
// PLANTILLA DE SUB-VÍA CUSTOM
// =====================================================
// Copia este archivo para crear una nueva sub-vía personalizada.
// Añade los hechizos en el array "hechizos" siguiendo el formato
// de las sub-vías oficiales.

export const subviaCustomEjemplo = {
    id: "subvia-custom-ejemplo",
    nombre: "Sub-vía Custom de Ejemplo",
    color: "#64748b",
    hechizos: [
        {
            plantilla: true,
            nombre: "",
            nivel: 0,
            accion: "Activa",
            tipo: "Efecto",
            efecto: "",
            zeon: { base: 0, intermedio: 0, avanzado: 0, arcano: 0 },
            inteligenciaRequerida: { base: 0, intermedio: 0, avanzado: 0, arcano: 0 },
            grados: { base: "", intermedio: "", avanzado: "", arcano: "" },
            mantenimiento: ""
        }
    ]
};

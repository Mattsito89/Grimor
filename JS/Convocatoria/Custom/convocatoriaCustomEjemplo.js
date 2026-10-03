// Plantilla para una convocatoria CUSTOM.
// Copia este archivo, cambia el contenido y ejecuta:
//   node build-grimorio.mjs

export const convocatoriaCustomEjemplo = {
    id: "convocatoria-custom-ejemplo",
    nombre: "Convocatoria Custom de Ejemplo",
    color: "#f472b6",
    tipoContenido: "convocatoria",
    hechizos: [
        {
            nombre: "Convocación de ejemplo",
            nivel: 1,
            accion: "Activa",
            tipo: "Convocación",
            efecto: "Sustituye este texto por el contenido de tu convocatoria.",
            zeon: { base: 20, intermedio: 40, avanzado: 60, arcano: 80 },
            inteligenciaRequerida: { base: 5, intermedio: 8, avanzado: 10, arcano: 12 },
            grados: {
                base: "Resultado base.",
                intermedio: "Resultado intermedio.",
                avanzado: "Resultado avanzado.",
                arcano: "Resultado arcano."
            },
            mantenimiento: "No"
        }
    ]
};

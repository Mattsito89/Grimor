// Plantilla independiente para ventajas metamágicas.
// A diferencia de la plantilla de Vías/Subvías, los niveles/esferas son opcionales:
// muchos principios son únicos y no tienen progresión por número de esferas.

export const METAMAGIA_TEMPLATE = Object.freeze({
    tipoContenido: "metamagia",
    requerimientoNivel: null,
    descripcion: "",
    efectosJuego: "",
    // `niveles` solo se incluye cuando el PDF/documentación describe una progresión.
    limites: "",
    efectoVisualComun: "",
    nivelMaximo: "",
    variosConjurosEspecialistas: "",
    informacionAdicional: ""
});

export function crearMetamagia(datos = {}, ramaCompleta = "") {
    const entrada = {
        ...METAMAGIA_TEMPLATE,
        ...datos,
        tipoContenido: "metamagia",
        ramaCompleta
    };

    // Nunca renderizar una sección de niveles vacía.
    if (!Array.isArray(entrada.niveles) || entrada.niveles.length === 0) {
        delete entrada.niveles;
    }

    // Los campos opcionales vacíos no necesitan viajar en los datos.
    for (const campo of ["limites", "efectoVisualComun", "nivelMaximo", "variosConjurosEspecialistas", "informacionAdicional"]) {
        if (!String(entrada[campo] ?? "").trim()) delete entrada[campo];
    }

    return entrada;
}

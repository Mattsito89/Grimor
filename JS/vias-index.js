// =====================================================
// CARGADOR AUTOMÁTICO PARA LIVE SERVER
// =====================================================
// No es necesario registrar manualmente cada archivo.
// El navegador lee los listados de carpetas que sirve Live Server,
// importa todos los .js de contenido y construye CATEGORIAS.
//
// Al agregar o eliminar un archivo .js dentro de las carpetas de contenido,
// basta con recargar Live Server. No se genera ningún bundle ni índice.

const CARPETAS = [
    ["magia", "oficiales", "Magia/Vias/"],
    ["magia", "custom", "Magia/Vias/Custom/"],
    ["magia", "subvias", "Magia/Subvias/"],
    ["magia", "subviasCustom", "Magia/Subvias/Custom/"],
    ["magia", "metamagia", "Magia/Metamagia/Ramas/"],
    ["magia", "metamagia", "Magia/Metamagia/Custom/"],
    ["magia", "oficiales", "Magia/LibreAcceso/"],
    ["psiquica", "oficiales", "Psiquica/Disciplinas/Oficiales/"],
    ["psiquica", "custom", "Psiquica/Disciplinas/Custom/"],
    ["ki", "oficiales", "Ki/Tecnicas/Oficiales/"],
    ["ki", "custom", "Ki/Tecnicas/Custom/"],
    ["convocatoria", "oficiales", "Convocatoria/Oficiales/"],
    ["convocatoria", "custom", "Convocatoria/Custom/"]
];

const IGNORAR = new Set([
    "metamagiaTemplate.js",
    "disciplinaTemplate.js",
    "tecnicaTemplate.js",
    "convocatoriaTemplate.js",
    "subviaTemplate.js",
    "viaTemplate.js",
    "ramaTemplate.js"
]);

const ORDER = {
    magiaOficiales: ["luz", "oscuridad", "creacion", "destruccion", "aire", "agua", "fuego", "tierra", "esencia", "ilusion", "necromancia", "libre-acceso"],
    magiaMetamagia: ["bellum", "potestas", "esoteros", "cognos", "precision"],
    magiaSubvias: ["caos", "guerra", "literae", "muerte", "musical", "nobleza", "paz", "pecado", "conocimiento", "sangre", "sue-os", "tiempo", "umbral", "vac-o"],
    psiquicaOficiales: ["telepatia", "telequinesis", "piroquinesis", "crioquinesis", "incremento-fisico", "energia", "telemetria", "sentiente", "causalidad", "electromagnetismo", "teletransporte", "luz", "hipersensibilidad", "poderesmatriciales"]
};

function esContenido(value) {
    return value && typeof value === "object" && !Array.isArray(value) &&
        typeof value.id === "string" && typeof value.nombre === "string" &&
        (Array.isArray(value.hechizos) || Array.isArray(value.poderes));
}

function recolectar(modulo) {
    const resultado = [];
    const ids = new Set();

    for (const valor of Object.values(modulo)) {
        if (!Array.isArray(valor)) continue;
        for (const item of valor) {
            if (esContenido(item) && !ids.has(item.id)) {
                ids.add(item.id);
                resultado.push(item);
            }
        }
    }

    for (const valor of Object.values(modulo)) {
        if (esContenido(valor) && !ids.has(valor.id)) {
            ids.add(valor.id);
            resultado.push(valor);
        }
    }

    return resultado;
}

async function descubrirJS(carpeta) {
    const url = new URL(carpeta, import.meta.url);
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error(`No se pudo leer ${carpeta} (${respuesta.status})`);
    const html = await respuesta.text();
    const documento = new DOMParser().parseFromString(html, "text/html");
    return [...documento.querySelectorAll("a[href]")]
        .map(a => new URL(a.getAttribute("href"), url))
        .filter(u => u.pathname.toLowerCase().endsWith(".js"))
        .filter(u => !IGNORAR.has(u.pathname.split("/").pop()));
}

function ordenar(items, preferidos = []) {
    const prioridad = new Map(preferidos.map((id, i) => [id, i]));
    return [...items].sort((a, b) => {
        const ai = prioridad.has(a.id) ? prioridad.get(a.id) : Number.MAX_SAFE_INTEGER;
        const bi = prioridad.has(b.id) ? prioridad.get(b.id) : Number.MAX_SAFE_INTEGER;
        return ai !== bi ? ai - bi : a.nombre.localeCompare(b.nombre, "es");
    });
}

async function cargarContenido() {
    const buckets = {
        magia: { oficiales: [], metamagia: [], custom: [], subvias: [], subviasCustom: [] },
        psiquica: { oficiales: [], custom: [] },
        ki: { oficiales: [], custom: [] },
        convocatoria: { oficiales: [], custom: [] }
    };
    const ids = new Map();

    for (const [categoria, grupo, carpeta] of CARPETAS) {
        let archivos;
        try {
            archivos = await descubrirJS(carpeta);
        } catch (error) {
            console.warn(`[Grimorio] ${carpeta}: ${error.message}`);
            continue;
        }

        for (const archivo of archivos) {
            try {
                const modulo = await import(archivo.href);
                for (const item of recolectar(modulo)) {
                    const vistos = ids.get(categoria) ?? new Set();
                    if (vistos.has(item.id)) {
                        console.error(`[Grimorio] ID duplicado: ${categoria}/${item.id}`);
                        continue;
                    }
                    vistos.add(item.id);
                    ids.set(categoria, vistos);
                    buckets[categoria][grupo].push(item);
                }
            } catch (error) {
                console.error(`[Grimorio] No se pudo cargar ${archivo.pathname}:`, error);
            }
        }
    }

    buckets.magia.oficiales = ordenar(buckets.magia.oficiales, ORDER.magiaOficiales);
    buckets.magia.metamagia = ordenar(buckets.magia.metamagia, ORDER.magiaMetamagia);
    buckets.magia.subvias = ordenar(buckets.magia.subvias, ORDER.magiaSubvias);
    buckets.magia.custom = ordenar(buckets.magia.custom);
    buckets.magia.subviasCustom = ordenar(buckets.magia.subviasCustom);
    buckets.psiquica.oficiales = ordenar(buckets.psiquica.oficiales, ORDER.psiquicaOficiales);
    buckets.psiquica.custom = ordenar(buckets.psiquica.custom);
    buckets.ki.oficiales = ordenar(buckets.ki.oficiales);
    buckets.ki.custom = ordenar(buckets.ki.custom);
    buckets.convocatoria.oficiales = ordenar(buckets.convocatoria.oficiales);
    buckets.convocatoria.custom = ordenar(buckets.convocatoria.custom);

    return {
        magia: { label: "Magia", tituloPanel: "VÍAS DE MAGIA", tituloSeleccion: "SELECCIONA UNA VÍA", mensajeInicial: "Selecciona una vía de magia", mensajeDetalleVacio: "Selecciona una vía de magia para comenzar.", prefijoTitulo: "LIBRO DE", ...buckets.magia },
        psiquica: { label: "Psíquica", tituloPanel: "DISCIPLINAS PSÍQUICAS", tituloSeleccion: "SELECCIONA UNA DISCIPLINA", mensajeInicial: "Selecciona una disciplina psíquica", mensajeDetalleVacio: "Selecciona una disciplina psíquica para comenzar.", prefijoTitulo: "DISCIPLINA DE", ...buckets.psiquica },
        ki: { label: "Ki", tituloPanel: "TÉCNICAS DE KI", tituloSeleccion: "SELECCIONA UNA TÉCNICA", mensajeInicial: "Selecciona una técnica de Ki", mensajeDetalleVacio: "Selecciona una técnica de Ki para comenzar.", prefijoTitulo: "TÉCNICA DE", ...buckets.ki },
        convocatoria: { label: "Convocatoria", tituloPanel: "CONVOCATORIA", tituloSeleccion: "SELECCIONA UNA INVOCACIÓN", mensajeInicial: "Selecciona una invocación", mensajeDetalleVacio: "Selecciona una invocación para comenzar.", prefijoTitulo: "CONVOCACIÓN DE", ...buckets.convocatoria }
    };
}

export const CATEGORIAS = await cargarContenido();
export function obtenerCategorias() { return CATEGORIAS; }

import { readdir, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = new URL("../", import.meta.url);

const CARPETAS = [
    ["magia", "oficiales", "JS/Magia/Vias/"],
    ["magia", "custom", "JS/Magia/Vias/Custom/"],
    ["magia", "subvias", "JS/Magia/Subvias/"],
    ["magia", "subviasCustom", "JS/Magia/Subvias/Custom/"],
    ["magia", "metamagia", "JS/Magia/Metamagia/Ramas/"],
    ["magia", "metamagia", "JS/Magia/Metamagia/Custom/"],
    ["magia", "oficiales", "JS/Magia/LibreAcceso/"],
    ["psiquica", "oficiales", "JS/Psiquica/Disciplinas/Oficiales/"],
    ["psiquica", "custom", "JS/Psiquica/Disciplinas/Custom/"],
    ["ki", "oficiales", "JS/Ki/Tecnicas/Oficiales/"],
    ["ki", "custom", "JS/Ki/Tecnicas/Custom/"],
    ["convocatoria", "oficiales", "JS/Convocatoria/Oficiales/"],
    ["convocatoria", "custom", "JS/Convocatoria/Custom/"]
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

async function archivosJS(carpetaRelativa) {
    try {
        const nombres = await readdir(new URL(carpetaRelativa, root), { withFileTypes: true });
        return nombres
            .filter((entrada) => entrada.isFile() && entrada.name.toLowerCase().endsWith(".js"))
            .map((entrada) => entrada.name)
            .filter((nombre) => !IGNORAR.has(nombre))
            .sort((a, b) => a.localeCompare(b, "es"));
    } catch {
        return [];
    }
}

const imports = [];
const grupos = [];
let contador = 0;

for (const [categoria, grupo, carpeta] of CARPETAS) {
    const archivos = await archivosJS(carpeta);
    const refs = [];

    for (const archivo of archivos) {
        const rel = join(carpeta, archivo).split(sep).join("/");
        const ref = `modulo${contador++}`;
        imports.push(`import * as ${ref} from "./${rel.replace(/^JS\//, "")}";`);
        refs.push(ref);
    }

    grupos.push({ categoria, grupo, refs });
}

const source = `// AUTO-GENERADO PARA VERCEL. NO EDITAR A MANO.\n// Se regenera con: npm run build\n\n${imports.join("\n")}\n\nconst IGNORAR_IDS = new Set();\n\nfunction esContenido(value) {\n    return value && typeof value === "object" && !Array.isArray(value) &&\n        typeof value.id === "string" && typeof value.nombre === "string" &&\n        (Array.isArray(value.hechizos) || Array.isArray(value.poderes));\n}\n\nfunction recolectar(modulo) {\n    const resultado = [];\n    const ids = new Set();\n    for (const valor of Object.values(modulo)) {\n        if (Array.isArray(valor)) {\n            for (const item of valor) {\n                if (esContenido(item) && !ids.has(item.id)) { ids.add(item.id); resultado.push(item); }\n            }\n        } else if (esContenido(valor) && !ids.has(valor.id)) {\n            ids.add(valor.id); resultado.push(valor);\n        }\n    }\n    return resultado;\n}\n\nfunction ordenar(items, preferidos = []) {\n    const prioridad = new Map(preferidos.map((id, i) => [id, i]));\n    return [...items].sort((a, b) => {\n        const ai = prioridad.has(a.id) ? prioridad.get(a.id) : Number.MAX_SAFE_INTEGER;\n        const bi = prioridad.has(b.id) ? prioridad.get(b.id) : Number.MAX_SAFE_INTEGER;\n        return ai !== bi ? ai - bi : a.nombre.localeCompare(b.nombre, "es");\n    });\n}\n\nconst buckets = {\n    magia: { oficiales: [], metamagia: [], custom: [], subvias: [], subviasCustom: [] },\n    psiquica: { oficiales: [], custom: [] },\n    ki: { oficiales: [], custom: [] },\n    convocatoria: { oficiales: [], custom: [] }\n};\n\nconst ids = new Map();\n\nfunction agregar(categoria, grupo, modulo) {\n    for (const item of recolectar(modulo)) {\n        const vistos = ids.get(categoria) ?? new Set();\n        if (vistos.has(item.id)) continue;\n        vistos.add(item.id);\n        ids.set(categoria, vistos);\n        buckets[categoria][grupo].push(item);\n    }\n}\n\n${grupos.flatMap(({ categoria, grupo, refs }) => refs.map((ref) => `agregar("${categoria}", "${grupo}", ${ref});`)).join("\n")}\n\nbuckets.magia.oficiales = ordenar(buckets.magia.oficiales, ${JSON.stringify(ORDER.magiaOficiales)});\nbuckets.magia.metamagia = ordenar(buckets.magia.metamagia, ${JSON.stringify(ORDER.magiaMetamagia)});\nbuckets.magia.subvias = ordenar(buckets.magia.subvias, ${JSON.stringify(ORDER.magiaSubvias)});\nbuckets.magia.custom = ordenar(buckets.magia.custom);\nbuckets.magia.subviasCustom = ordenar(buckets.magia.subviasCustom);\nbuckets.psiquica.oficiales = ordenar(buckets.psiquica.oficiales, ${JSON.stringify(ORDER.psiquicaOficiales)});\nbuckets.psiquica.custom = ordenar(buckets.psiquica.custom);\nbuckets.ki.oficiales = ordenar(buckets.ki.oficiales);\nbuckets.ki.custom = ordenar(buckets.ki.custom);\nbuckets.convocatoria.oficiales = ordenar(buckets.convocatoria.oficiales);\nbuckets.convocatoria.custom = ordenar(buckets.convocatoria.custom);\n\nexport const CATEGORIAS = {\n    magia: { label: "Magia", tituloPanel: "VÍAS DE MAGIA", tituloSeleccion: "SELECCIONA UNA VÍA", mensajeInicial: "Selecciona una vía de magia", mensajeDetalleVacio: "Selecciona una vía de magia para comenzar.", prefijoTitulo: "LIBRO DE", ...buckets.magia },\n    psiquica: { label: "Psíquica", tituloPanel: "DISCIPLINAS PSÍQUICAS", tituloSeleccion: "SELECCIONA UNA DISCIPLINA", mensajeInicial: "Selecciona una disciplina psíquica", mensajeDetalleVacio: "Selecciona una disciplina psíquica para comenzar.", prefijoTitulo: "DISCIPLINA DE", ...buckets.psiquica },\n    ki: { label: "Ki", tituloPanel: "TÉCNICAS DE KI", tituloSeleccion: "SELECCIONA UNA TÉCNICA", mensajeInicial: "Selecciona una técnica de Ki", mensajeDetalleVacio: "Selecciona una técnica de Ki para comenzar.", prefijoTitulo: "TÉCNICA DE", ...buckets.ki },\n    convocatoria: { label: "Convocatoria", tituloPanel: "CONVOCATORIA", tituloSeleccion: "SELECCIONA UNA INVOCACIÓN", mensajeInicial: "Selecciona una invocación", mensajeDetalleVacio: "Selecciona una invocación para comenzar.", prefijoTitulo: "CONVOCACIÓN DE", ...buckets.convocatoria }\n};\n\nexport function obtenerCategorias() { return CATEGORIAS; }\n`;

await writeFile(new URL("../JS/vias-index.vercel.js", import.meta.url), source, "utf8");
console.log(`[Grimorio] Índice Vercel generado con ${imports.length} archivos de contenido.`);

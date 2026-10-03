// AUTO-GENERADO PARA VERCEL. NO EDITAR A MANO.
// Se regenera con: npm run build

import * as modulo0 from "./Magia/Vias/agua.js";
import * as modulo1 from "./Magia/Vias/aire.js";
import * as modulo2 from "./Magia/Vias/creacion.js";
import * as modulo3 from "./Magia/Vias/destruccion.js";
import * as modulo4 from "./Magia/Vias/esencia.js";
import * as modulo5 from "./Magia/Vias/fuego.js";
import * as modulo6 from "./Magia/Vias/ilusion.js";
import * as modulo7 from "./Magia/Vias/luz.js";
import * as modulo8 from "./Magia/Vias/necromancia.js";
import * as modulo9 from "./Magia/Vias/oscuridad.js";
import * as modulo10 from "./Magia/Vias/tierra.js";
import * as modulo11 from "./Magia/Vias/Custom/cosmos.js";
import * as modulo12 from "./Magia/Subvias/caos.js";
import * as modulo13 from "./Magia/Subvias/conocimiento.js";
import * as modulo14 from "./Magia/Subvias/guerra.js";
import * as modulo15 from "./Magia/Subvias/literae.js";
import * as modulo16 from "./Magia/Subvias/muerte.js";
import * as modulo17 from "./Magia/Subvias/musical.js";
import * as modulo18 from "./Magia/Subvias/nobleza.js";
import * as modulo19 from "./Magia/Subvias/paz.js";
import * as modulo20 from "./Magia/Subvias/pecado.js";
import * as modulo21 from "./Magia/Subvias/sangre.js";
import * as modulo22 from "./Magia/Subvias/suenos.js";
import * as modulo23 from "./Magia/Subvias/tiempo.js";
import * as modulo24 from "./Magia/Subvias/umbral.js";
import * as modulo25 from "./Magia/Subvias/vacio.js";
import * as modulo26 from "./Magia/Subvias/Custom/subviaEjemplo.js";
import * as modulo27 from "./Magia/Metamagia/Ramas/bellum.js";
import * as modulo28 from "./Magia/Metamagia/Ramas/cognos.js";
import * as modulo29 from "./Magia/Metamagia/Ramas/esoteros.js";
import * as modulo30 from "./Magia/Metamagia/Ramas/potestas.js";
import * as modulo31 from "./Magia/LibreAcceso/libreAcceso.js";
import * as modulo32 from "./Psiquica/Disciplinas/Oficiales/causalidad.js";
import * as modulo33 from "./Psiquica/Disciplinas/Oficiales/crioquinesis.js";
import * as modulo34 from "./Psiquica/Disciplinas/Oficiales/electromagnetismo.js";
import * as modulo35 from "./Psiquica/Disciplinas/Oficiales/energia.js";
import * as modulo36 from "./Psiquica/Disciplinas/Oficiales/hipersensibilidad.js";
import * as modulo37 from "./Psiquica/Disciplinas/Oficiales/incremento-fisico.js";
import * as modulo38 from "./Psiquica/Disciplinas/Oficiales/luz.js";
import * as modulo39 from "./Psiquica/Disciplinas/Oficiales/piroquinesis.js";
import * as modulo40 from "./Psiquica/Disciplinas/Oficiales/poderesmatriciales.js";
import * as modulo41 from "./Psiquica/Disciplinas/Oficiales/sentiente.js";
import * as modulo42 from "./Psiquica/Disciplinas/Oficiales/telemetria.js";
import * as modulo43 from "./Psiquica/Disciplinas/Oficiales/telepatia.js";
import * as modulo44 from "./Psiquica/Disciplinas/Oficiales/telequinesis.js";
import * as modulo45 from "./Psiquica/Disciplinas/Oficiales/teletransporte.js";
import * as modulo46 from "./Ki/Tecnicas/Oficiales/tecnicaEjemplo.js";
import * as modulo47 from "./Ki/Tecnicas/Custom/tecnicaCustomEjemplo.js";
import * as modulo48 from "./Convocatoria/Oficiales/convocatoriaEjemplo.js";
import * as modulo49 from "./Convocatoria/Custom/convocatoriaCustomEjemplo.js";

const IGNORAR_IDS = new Set();

function esContenido(value) {
    return value && typeof value === "object" && !Array.isArray(value) &&
        typeof value.id === "string" && typeof value.nombre === "string" &&
        (Array.isArray(value.hechizos) || Array.isArray(value.poderes));
}

function recolectar(modulo) {
    const resultado = [];
    const ids = new Set();
    for (const valor of Object.values(modulo)) {
        if (Array.isArray(valor)) {
            for (const item of valor) {
                if (esContenido(item) && !ids.has(item.id)) { ids.add(item.id); resultado.push(item); }
            }
        } else if (esContenido(valor) && !ids.has(valor.id)) {
            ids.add(valor.id); resultado.push(valor);
        }
    }
    return resultado;
}

function ordenar(items, preferidos = []) {
    const prioridad = new Map(preferidos.map((id, i) => [id, i]));
    return [...items].sort((a, b) => {
        const ai = prioridad.has(a.id) ? prioridad.get(a.id) : Number.MAX_SAFE_INTEGER;
        const bi = prioridad.has(b.id) ? prioridad.get(b.id) : Number.MAX_SAFE_INTEGER;
        return ai !== bi ? ai - bi : a.nombre.localeCompare(b.nombre, "es");
    });
}

const buckets = {
    magia: { oficiales: [], metamagia: [], custom: [], subvias: [], subviasCustom: [] },
    psiquica: { oficiales: [], custom: [] },
    ki: { oficiales: [], custom: [] },
    convocatoria: { oficiales: [], custom: [] }
};

const ids = new Map();

function agregar(categoria, grupo, modulo) {
    for (const item of recolectar(modulo)) {
        const vistos = ids.get(categoria) ?? new Set();
        if (vistos.has(item.id)) continue;
        vistos.add(item.id);
        ids.set(categoria, vistos);
        buckets[categoria][grupo].push(item);
    }
}

agregar("magia", "oficiales", modulo0);
agregar("magia", "oficiales", modulo1);
agregar("magia", "oficiales", modulo2);
agregar("magia", "oficiales", modulo3);
agregar("magia", "oficiales", modulo4);
agregar("magia", "oficiales", modulo5);
agregar("magia", "oficiales", modulo6);
agregar("magia", "oficiales", modulo7);
agregar("magia", "oficiales", modulo8);
agregar("magia", "oficiales", modulo9);
agregar("magia", "oficiales", modulo10);
agregar("magia", "custom", modulo11);
agregar("magia", "subvias", modulo12);
agregar("magia", "subvias", modulo13);
agregar("magia", "subvias", modulo14);
agregar("magia", "subvias", modulo15);
agregar("magia", "subvias", modulo16);
agregar("magia", "subvias", modulo17);
agregar("magia", "subvias", modulo18);
agregar("magia", "subvias", modulo19);
agregar("magia", "subvias", modulo20);
agregar("magia", "subvias", modulo21);
agregar("magia", "subvias", modulo22);
agregar("magia", "subvias", modulo23);
agregar("magia", "subvias", modulo24);
agregar("magia", "subvias", modulo25);
agregar("magia", "subviasCustom", modulo26);
agregar("magia", "metamagia", modulo27);
agregar("magia", "metamagia", modulo28);
agregar("magia", "metamagia", modulo29);
agregar("magia", "metamagia", modulo30);
agregar("magia", "oficiales", modulo31);
agregar("psiquica", "oficiales", modulo32);
agregar("psiquica", "oficiales", modulo33);
agregar("psiquica", "oficiales", modulo34);
agregar("psiquica", "oficiales", modulo35);
agregar("psiquica", "oficiales", modulo36);
agregar("psiquica", "oficiales", modulo37);
agregar("psiquica", "oficiales", modulo38);
agregar("psiquica", "oficiales", modulo39);
agregar("psiquica", "oficiales", modulo40);
agregar("psiquica", "oficiales", modulo41);
agregar("psiquica", "oficiales", modulo42);
agregar("psiquica", "oficiales", modulo43);
agregar("psiquica", "oficiales", modulo44);
agregar("psiquica", "oficiales", modulo45);
agregar("ki", "oficiales", modulo46);
agregar("ki", "custom", modulo47);
agregar("convocatoria", "oficiales", modulo48);
agregar("convocatoria", "custom", modulo49);

buckets.magia.oficiales = ordenar(buckets.magia.oficiales, ["luz","oscuridad","creacion","destruccion","aire","agua","fuego","tierra","esencia","ilusion","necromancia","libre-acceso"]);
buckets.magia.metamagia = ordenar(buckets.magia.metamagia, ["bellum","potestas","esoteros","cognos","precision"]);
buckets.magia.subvias = ordenar(buckets.magia.subvias, ["caos","guerra","literae","muerte","musical","nobleza","paz","pecado","conocimiento","sangre","sue-os","tiempo","umbral","vac-o"]);
buckets.magia.custom = ordenar(buckets.magia.custom);
buckets.magia.subviasCustom = ordenar(buckets.magia.subviasCustom);
buckets.psiquica.oficiales = ordenar(buckets.psiquica.oficiales, ["telepatia","telequinesis","piroquinesis","crioquinesis","incremento-fisico","energia","telemetria","sentiente","causalidad","electromagnetismo","teletransporte","luz","hipersensibilidad","poderesmatriciales"]);
buckets.psiquica.custom = ordenar(buckets.psiquica.custom);
buckets.ki.oficiales = ordenar(buckets.ki.oficiales);
buckets.ki.custom = ordenar(buckets.ki.custom);
buckets.convocatoria.oficiales = ordenar(buckets.convocatoria.oficiales);
buckets.convocatoria.custom = ordenar(buckets.convocatoria.custom);

export const CATEGORIAS = {
    magia: { label: "Magia", tituloPanel: "VÍAS DE MAGIA", tituloSeleccion: "SELECCIONA UNA VÍA", mensajeInicial: "Selecciona una vía de magia", mensajeDetalleVacio: "Selecciona una vía de magia para comenzar.", prefijoTitulo: "LIBRO DE", ...buckets.magia },
    psiquica: { label: "Psíquica", tituloPanel: "DISCIPLINAS PSÍQUICAS", tituloSeleccion: "SELECCIONA UNA DISCIPLINA", mensajeInicial: "Selecciona una disciplina psíquica", mensajeDetalleVacio: "Selecciona una disciplina psíquica para comenzar.", prefijoTitulo: "DISCIPLINA DE", ...buckets.psiquica },
    ki: { label: "Ki", tituloPanel: "TÉCNICAS DE KI", tituloSeleccion: "SELECCIONA UNA TÉCNICA", mensajeInicial: "Selecciona una técnica de Ki", mensajeDetalleVacio: "Selecciona una técnica de Ki para comenzar.", prefijoTitulo: "TÉCNICA DE", ...buckets.ki },
    convocatoria: { label: "Convocatoria", tituloPanel: "CONVOCATORIA", tituloSeleccion: "SELECCIONA UNA INVOCACIÓN", mensajeInicial: "Selecciona una invocación", mensajeDetalleVacio: "Selecciona una invocación para comenzar.", prefijoTitulo: "CONVOCACIÓN DE", ...buckets.convocatoria }
};

export function obtenerCategorias() { return CATEGORIAS; }

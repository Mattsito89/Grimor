import { CATEGORIAS } from "./vias-index.js";

// =====================================================
// ELEMENTOS DEL DOM
// =====================================================

const $ = (selector) => document.querySelector(selector);

const categoriaTitulo = $("#categoria-titulo");
const categoriaBtns = [...document.querySelectorAll(".categoria-btn")];
const tipoViaContainer = $("#tipo-via-container");
const viasContainer = $("#vias-container");
const subviasBloque = $("#subvias-bloque");
const hechizosContainer = $("#hechizos-container");
const detalleHechizo = $("#detalle-hechizo");
const viaTitulo = $("#via-titulo");

// =====================================================
// ESTADO
// =====================================================

let categoriaActiva = "magia";
let tipoViaActivo = "oficiales";
let viaSeleccionada = null;
let hechizoSeleccionado = null;

const COLOR_SUBVIAS_VACIO = "#4b5163";
const GRADOS = ["base", "intermedio", "avanzado", "arcano"];

// =====================================================
// SEGURIDAD / UTILIDADES
// =====================================================

function escapeHTML(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function escapeMultiline(value) {
    return escapeHTML(value).replaceAll("\n", "<br>");
}

function colorValido(color) {
    return typeof color === "string" && /^#[0-9a-f]{6}$/i.test(color);
}

function esPlantilla(entrada) {
    // `plantilla: true` es la forma explícita.
    // Un nombre vacío también se considera plantilla como red de seguridad,
    // para que un bloque futuro olvidado no aparezca como contenido real.
    return entrada?.plantilla === true || !String(entrada?.nombre ?? "").trim();
}

function entradasPublicadas(via) {
    const fuente = via?.tipoContenido === "psiquica" ? via.poderes : via?.hechizos;
    return Array.isArray(fuente)
        ? fuente.filter((entrada) => !esPlantilla(entrada))
        : [];
}

function costoTotalEsferas(esfera) {
    return (esfera?.niveles || []).reduce(
        (total, nivel) => total + (Number(nivel?.costoEsferas) || 0),
        0
    );
}

function obtenerConfigCategoria() {
    return CATEGORIAS[categoriaActiva];
}

function obtenerViasActivas() {
    const config = obtenerConfigCategoria();

    if (tipoViaActivo === "custom") return config.custom || [];
    if (tipoViaActivo === "metamagia") return config.metamagia || [];
    return config.oficiales || [];
}

// =====================================================
// VALIDACIÓN DE DATOS
// =====================================================

function validarRegistro() {
    const errores = [];

    for (const [idCategoria, config] of Object.entries(CATEGORIAS)) {
        const grupos = [
            ["oficiales", config.oficiales],
            ["custom", config.custom],
            ["metamagia", config.metamagia || []],
            ["subvias", config.subvias || []],
            ["subviasCustom", config.subviasCustom || []]
        ];
        const idsGlobales = new Set();

        for (const [grupo, elementos] of grupos) {
            if (!Array.isArray(elementos)) {
                errores.push(`${idCategoria}.${grupo} debe ser un array.`);
                continue;
            }

            const ids = new Set();

            for (const elemento of elementos) {
                if (!elemento?.id || !elemento?.nombre) {
                    errores.push(`${idCategoria}.${grupo}: falta id o nombre.`);
                    continue;
                }

                if (ids.has(elemento.id) || idsGlobales.has(elemento.id)) {
                    errores.push(`${idCategoria}: id duplicado "${elemento.id}" entre grupos de contenido.`);
                }
                ids.add(elemento.id);
                idsGlobales.add(elemento.id);

                if (!colorValido(elemento.color)) {
                    errores.push(`${elemento.id}: color inválido.`);
                }

                if (elemento.tipoContenido === "psiquica") {
                    if (!Array.isArray(elemento.poderes)) {
                        errores.push(`${elemento.id}: debe tener un array "poderes".`);
                        continue;
                    }
                    for (const poder of elemento.poderes) {
                        if (esPlantilla(poder)) continue;
                        const ruta = `${elemento.id}.${poder?.nombre || "(sin nombre)"}`;
                        if (poder?.nivel === undefined || !poder?.accion || !poder?.descripcion || !poder?.mantenimiento) {
                            errores.push(`${ruta}: faltan campos obligatorios.`);
                        }
                        if ((!Array.isArray(poder?.efectos) || poder.efectos.length === 0) && !poder?.fuentePendiente) {
                            errores.push(`${ruta}: faltan efectos.`);
                        }
                    }
                    continue;
                }

                if (!Array.isArray(elemento.hechizos)) {
                    errores.push(`${elemento.id}: debe tener un array "hechizos".`);
                    continue;
                }

                // Las ramas de metamagia tienen un modelo propio.
                if (elemento.tipoContenido === "metamagia") {
                    for (const esfera of elemento.hechizos) {
                        if (esPlantilla(esfera)) continue;
                        if (esfera.requerimientoNivel === undefined) {
                            errores.push(`${elemento.id}.${esfera.nombre}: falta requerimientoNivel.`);
                        }
                    }
                    continue;
                }

                for (const hechizo of elemento.hechizos) {
                    if (esPlantilla(hechizo)) continue;

                    const ruta = `${elemento.id}.${hechizo?.nombre || "(sin nombre)"}`;

                    if (
                        hechizo?.nivel === undefined ||
                        !hechizo?.accion ||
                        !hechizo?.tipo ||
                        !hechizo?.efecto ||
                        !hechizo?.mantenimiento
                    ) {
                        errores.push(`${ruta}: faltan campos obligatorios.`);
                    }

                    for (const grado of GRADOS) {
                        if (hechizo?.zeon?.[grado] === undefined) {
                            errores.push(`${ruta}: falta Zeon de grado ${grado}.`);
                        }
                        if (hechizo?.inteligenciaRequerida?.[grado] === undefined) {
                            errores.push(`${ruta}: falta Int. R. de grado ${grado}.`);
                        }
                        if (!hechizo?.grados?.[grado]) {
                            errores.push(`${ruta}: falta descripción del grado ${grado}.`);
                        }
                    }
                }
            }
        }
    }

    if (errores.length) {
        console.error("Errores de validación del Grimorio:\n- " + errores.join("\n- "));
    }

    return errores;
}

validarRegistro();

// =====================================================
// CATEGORÍAS
// =====================================================

function seleccionarCategoria(categoria) {
    if (!CATEGORIAS[categoria]) return;

    categoriaActiva = categoria;
    tipoViaActivo = "oficiales";
    viaSeleccionada = null;
    hechizoSeleccionado = null;

    categoriaBtns.forEach((btn) => {
        btn.classList.toggle("activo", btn.dataset.categoria === categoria);
    });

    categoriaTitulo.textContent = obtenerConfigCategoria().tituloPanel;

    renderTipoViaSelector();
    renderVias();
    renderSubviasBloque();
    limpiarSeleccion();
}

// =====================================================
// SELECTOR DE TIPO
// =====================================================

function renderTipoViaSelector() {
    const config = obtenerConfigCategoria();
    const tipos = [{ id: "oficiales", label: "Oficiales" }];

    if (Array.isArray(config.metamagia) && config.metamagia.length) {
        tipos.push({ id: "metamagia", label: "Metamagia" });
    }

    tipos.push({ id: "custom", label: "Custom" });

    tipoViaContainer.replaceChildren();

    for (const tipo of tipos) {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = `tipo-via-btn ${tipo.id === tipoViaActivo ? "activo" : ""}`;
        boton.dataset.tipoVia = tipo.id;
        boton.textContent = tipo.label;
        boton.setAttribute("role", "tab");
        boton.setAttribute("aria-selected", String(tipo.id === tipoViaActivo));
        boton.addEventListener("click", () => seleccionarTipoVia(tipo.id));
        tipoViaContainer.appendChild(boton);
    }
}

function seleccionarTipoVia(tipo) {
    const config = obtenerConfigCategoria();
    const permitido = ["oficiales", "custom", ...(config.metamagia?.length ? ["metamagia"] : [])];

    if (!permitido.includes(tipo)) return;

    tipoViaActivo = tipo;
    renderTipoViaSelector();
    renderVias();
    renderSubviasBloque();
    limpiarSeleccion();
}

// =====================================================
// VÍAS / SUBVÍAS
// =====================================================

function renderVias() {
    viasContainer.replaceChildren();

    const vias = obtenerViasActivas();

    if (!vias.length) {
        mostrarEstadoVacio(viasContainer, "No hay contenido registrado en esta sección.");
        return;
    }

    for (const via of vias) {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "via-btn";
        boton.dataset.via = via.id;
        boton.title = via.nombre;

        const indicador = document.createElement("span");
        indicador.className = "via-indicador";
        indicador.style.backgroundColor = colorValido(via.color) ? via.color : COLOR_SUBVIAS_VACIO;

        const nombre = document.createElement("span");
        nombre.className = "via-nombre";
        nombre.textContent = via.nombre;

        const flecha = document.createElement("span");
        flecha.className = "via-flecha";
        flecha.textContent = "›";

        boton.append(indicador, nombre, flecha);
        boton.addEventListener("click", () => seleccionarVia(via));
        viasContainer.appendChild(boton);
    }
}

function renderSubviasBloque() {
    const config = obtenerConfigCategoria();
    const esCustom = tipoViaActivo === "custom";
    const subvias = esCustom ? (config.subviasCustom || []) : (config.subvias || []);
    const corresponde = categoriaActiva === "magia" && ((tipoViaActivo === "oficiales" && subvias.length > 0) || (esCustom && subvias.length > 0));

    subviasBloque.hidden = !corresponde;
    subviasBloque.replaceChildren();

    if (!corresponde) return;

    const fila = document.createElement("div");
    fila.className = "via-btn subvia-fila";
    fila.id = "subvia-fila";

    const indicador = document.createElement("span");
    indicador.className = "via-indicador";
    indicador.id = "subvia-indicador";
    indicador.style.backgroundColor = COLOR_SUBVIAS_VACIO;

    const select = document.createElement("select");
    select.className = "subvia-select";
    select.id = "subvias-select";
    select.setAttribute("aria-label", "Sub-vías");

    const inicial = document.createElement("option");
    inicial.value = "";
    inicial.textContent = esCustom ? "Sub-vías Custom" : "Sub-vías";
    select.appendChild(inicial);

    if (!subvias.length && esCustom) {
        const vacio = document.createElement("option");
        vacio.value = "";
        vacio.textContent = "Sin sub-vías custom registradas";
        vacio.disabled = true;
        select.appendChild(vacio);
    }

    for (const subvia of subvias) {
        const option = document.createElement("option");
        option.value = subvia.id;
        option.textContent = subvia.nombre;
        select.appendChild(option);
    }

    const flecha = document.createElement("span");
    flecha.className = "via-flecha";
    flecha.textContent = "›";

    fila.append(indicador, select, flecha);
    subviasBloque.appendChild(fila);

    select.addEventListener("change", manejarCambioSubvia);
    fila.addEventListener("click", (evento) => {
        if (evento.target !== select) manejarCambioSubvia();
    });
}

function manejarCambioSubvia() {
    const select = $("#subvias-select");
    const indicador = $("#subvia-indicador");
    const fila = $("#subvia-fila");
    if (!select) return;

    const config = obtenerConfigCategoria();
    const lista = tipoViaActivo === "custom" ? (config.subviasCustom || []) : (config.subvias || []);
    const subvia = lista.find((item) => item.id === select.value);

    if (!subvia) {
        indicador.style.backgroundColor = COLOR_SUBVIAS_VACIO;
        fila?.classList.remove("activo");
        return;
    }

    indicador.style.backgroundColor = colorValido(subvia.color) ? subvia.color : COLOR_SUBVIAS_VACIO;
    seleccionarVia(subvia);
}

// =====================================================
// SELECCIÓN Y LISTA DE HECHIZOS
// =====================================================

function seleccionarVia(via) {
    if (!via) return;

    viaSeleccionada = via;
    hechizoSeleccionado = null;

    document.querySelectorAll(".via-btn").forEach((btn) => btn.classList.remove("activo"));

    const botonActivo = [...document.querySelectorAll(".via-btn")].find(
        (btn) => btn.dataset.via === via.id
    );
    botonActivo?.classList.add("activo");

    const subSelect = $("#subvias-select");
    const config = obtenerConfigCategoria();
    const listaSubviasActiva = tipoViaActivo === "custom" ? (config.subviasCustom || []) : (config.subvias || []);
    const esSubvia = listaSubviasActiva.some((item) => item.id === via.id);

    if (subSelect && !esSubvia) {
        subSelect.value = "";
        const indicador = $("#subvia-indicador");
        if (indicador) indicador.style.backgroundColor = COLOR_SUBVIAS_VACIO;
    }

    $("#subvia-fila")?.classList.toggle("activo", esSubvia);

    viaTitulo.textContent = `${config.prefijoTitulo} ${via.nombre.toUpperCase()}`;

    renderHechizos(via);
    mostrarDetalleVacio();
}

function renderHechizos(via) {
    hechizosContainer.replaceChildren();

    const entradas = entradasPublicadas(via);

    if (!entradas.length) {
        mostrarEstadoVacio(
            hechizosContainer,
            "No hay contenido publicado todavía. La plantilla de hechizos se conserva en el archivo de datos para futuras entradas."
        );
        return;
    }

    entradas.forEach((hechizo, index) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "hechizo-btn";
        boton.dataset.index = String(index);

        // La lista tiene siempre tres columnas: nivel, nombre y flecha.
        // Mantener una estructura fija evita que el texto se desplace o
        // se apile cuando cambia el contenido de un hechizo.
        const nivel = document.createElement("span");
        nivel.className = "hechizo-nivel";
        if (via.tipoContenido === "metamagia") {
            nivel.textContent = hechizo.requerimientoNivel !== undefined ? String(hechizo.requerimientoNivel) : "—";
        } else if (hechizo.nivel !== undefined && hechizo.nivel !== null) {
            nivel.textContent = String(hechizo.nivel);
        } else {
            nivel.textContent = "—";
        }

        const nombre = document.createElement("span");
        nombre.className = "hechizo-nombre";
        nombre.textContent = hechizo.nombre;

        const flecha = document.createElement("span");
        flecha.className = "hechizo-flecha";
        flecha.setAttribute("aria-hidden", "true");
        flecha.textContent = "›";

        boton.append(nivel, nombre, flecha);
        boton.addEventListener("click", () => seleccionarHechizo(via, hechizo, boton));
        hechizosContainer.appendChild(boton);
    });
}

function renderInfoDisciplina(disciplina) {
    const descripcion = String(disciplina.descripcion ?? "").trim();

    // El modificador forma parte del texto descriptivo de la disciplina.
    // No se muestra como un apartado independiente.
    if (!descripcion) return null;

    const bloque = document.createElement("section");
    bloque.className = "disciplina-info";

    const titulo = document.createElement("h3");
    titulo.textContent = "Descripción de la disciplina";

    const texto = document.createElement("p");
    texto.innerHTML = escapeMultiline(descripcion);

    bloque.append(titulo, texto);
    return bloque;
}

function seleccionarHechizo(via, hechizo, boton) {
    hechizoSeleccionado = hechizo;

    hechizosContainer.querySelectorAll(".hechizo-btn").forEach((btn) => btn.classList.remove("activo"));
    boton.classList.add("activo");

    if (via.tipoContenido === "metamagia") {
        renderDetalleMetamagia(hechizo);
    } else if (via.tipoContenido === "psiquica") {
        renderDetallePsiquica(hechizo, via);
    } else {
        renderDetalle(hechizo);
    }
}

// =====================================================
// DETALLES
// =====================================================

function renderDetalle(hechizo) {
    const grado = hechizo.grados || {};
    const zeon = hechizo.zeon || {};
    const intReq = hechizo.inteligenciaRequerida || {};

    const gradosHtml = GRADOS.map((nombreGrado) => `
        <div class="grado">
            <strong>${escapeHTML(capitalizar(nombreGrado))}</strong>
            <p>${escapeMultiline(grado[nombreGrado] ?? "—")}</p>
            <small>
                Zeon: ${escapeHTML(zeon[nombreGrado] ?? "—")}
                · Int. R.: ${escapeHTML(intReq[nombreGrado] ?? "—")}
            </small>
        </div>
    `).join("");

    detalleHechizo.innerHTML = `
        <div class="detalle-header">
            <div class="detalle-nivel">NIVEL ${escapeHTML(hechizo.nivel ?? "—")}</div>
            <h1>${escapeHTML(hechizo.nombre)}</h1>
            <div class="detalle-subtitulo">
                <span>${escapeHTML(hechizo.accion ?? "—")}</span>
                <span>${escapeHTML(hechizo.tipo ?? "—")}</span>
            </div>
        </div>

        <div class="detalle-seccion">
            <h3>Efecto</h3>
            <p>${escapeMultiline(hechizo.efecto ?? "—")}</p>
        </div>

        <div class="detalle-seccion">
            <h3>Grados</h3>
            <div class="grados">${gradosHtml}</div>
        </div>

        <div class="detalle-seccion mantenimiento">
            <h3>Mantenimiento</h3>
            <p>${escapeMultiline(hechizo.mantenimiento ?? "—")}</p>
        </div>

        ${hechizo.libreAcceso || hechizo.viasCerradas || hechizo.vinculosCerrados ? `
            <div class="detalle-seccion">
                <h3>Restricciones y acceso</h3>
                ${hechizo.libreAcceso ? `<p><strong>Libre acceso:</strong> ${escapeMultiline(hechizo.libreAcceso)}</p>` : ""}
                ${hechizo.viasCerradas ? `<p><strong>Vías cerradas:</strong> ${escapeMultiline(hechizo.viasCerradas)}</p>` : ""}
                ${hechizo.vinculosCerrados ? `<p><strong>Vínculos cerrados:</strong> ${escapeMultiline(hechizo.vinculosCerrados)}</p>` : ""}
            </div>
        ` : ""}
    `;
}

function renderDetallePsiquica(poder, disciplina = null) {
    const DIFICULTADES_PSIQUICAS = {
        "Rutinario": 20,
        "Fácil": 40,
        "Medio": 80,
        "Difícil": 120,
        "Muy Difícil": 140,
        "Absurdo": 180,
        "Casi imposible": 240,
        "Imposible": 280,
        "Inhumano": 320,
        "Zen": 440
    };

    const efectosHtml = (poder.efectos || []).map((efecto) => {
        const dificultad = String(efecto.dificultad ?? "—");
        const numero = DIFICULTADES_PSIQUICAS[dificultad];
        const etiqueta = numero !== undefined
            ? `${numero} · ${dificultad}`
            : dificultad;

        return `
        <div class="psiquico-efecto">
            <strong>${escapeHTML(etiqueta)}</strong>
            <p>${escapeMultiline(efecto.resultado ?? "—")}</p>
        </div>
    `;
    }).join("");

    const detalleHtml = `
        <div class="detalle-header">
            <div class="detalle-nivel">NIVEL ${escapeHTML(poder.nivel ?? "—")}</div>
            <h1>${escapeHTML(poder.nombre)}</h1>
            <div class="detalle-subtitulo">
                <span>${escapeHTML(poder.accion ?? "—")}</span>
                <span>MANTENIMIENTO: ${escapeHTML(poder.mantenimiento ?? "—")}</span>
            </div>
        </div>

        ${seccionOpcional("Descripción", poder.descripcion)}

        <div class="detalle-seccion">
            <h3>Efectos</h3>
            <div class="psiquico-efectos">
                ${efectosHtml || '<p>No hay efectos registrados.</p>'}
            </div>
        </div>
    `;

    detalleHechizo.replaceChildren();
    const info = disciplina ? renderInfoDisciplina(disciplina) : null;
    if (info) detalleHechizo.appendChild(info);

    const detalle = document.createElement("div");
    detalle.innerHTML = detalleHtml;
    detalleHechizo.appendChild(detalle);
}

function renderDetalleMetamagia(esfera) {
    const niveles = Array.isArray(esfera.niveles) && esfera.niveles.length
        ? esfera.niveles
        : [];

    const nivelesHtml = niveles.map((nivel) => `
        <div class="grado">
            <strong>
                ${escapeHTML(nivel.nombreNivel ?? "Nivel")}
                ${nivel.costoEsferas !== undefined
                    ? `(${escapeHTML(nivel.costoEsferas)} ${Number(nivel.costoEsferas) === 1 ? "esfera" : "esferas"})`
                    : ""}
            </strong>
            <p>${escapeMultiline(nivel.texto ?? "—")}</p>
        </div>
    `).join("");

    const seccionNiveles = niveles.length ? `
        <div class="detalle-seccion">
            <h3>Progresión por esferas</h3>
            <div class="grados">${nivelesHtml}</div>
        </div>
    ` : "";

    detalleHechizo.innerHTML = `
        <div class="detalle-header">
            <div class="detalle-nivel">
                METAMAGIA · ${escapeHTML(esfera.ramaCompleta ?? "")}
            </div>
            <h1>${escapeHTML(esfera.nombre)}</h1>
            <div class="detalle-subtitulo">
                <span>REQUERIMIENTO DE NIVEL: ${escapeHTML(esfera.requerimientoNivel ?? "—")}</span>
            </div>
        </div>

        ${seccionOpcional("Descripción", esfera.descripcion)}
        ${seccionOpcional("Efectos de juego", esfera.efectosJuego)}
        ${seccionNiveles}
        ${seccionOpcional("Límites", esfera.limites)}
        ${seccionOpcional("Efecto Visual Común", esfera.efectoVisualComun)}
        ${seccionOpcional("Nivel Máximo", esfera.nivelMaximo)}
        ${seccionOpcional("Varios Conjuros Especialistas", esfera.variosConjurosEspecialistas)}
        ${seccionOpcional("Información adicional", esfera.informacionAdicional)}
    `;
}

function seccionOpcional(titulo, contenido, clase = "") {
    if (!String(contenido ?? "").trim()) return "";
    return `
        <div class="detalle-seccion ${clase}">
            <h3>${escapeHTML(titulo)}</h3>
            <p>${escapeMultiline(contenido)}</p>
        </div>
    `;
}

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// =====================================================
// ESTADOS VACÍOS
// =====================================================

function mostrarEstadoVacio(contenedor, mensaje) {
    const elemento = document.createElement("div");
    elemento.className = "mensaje-inicial";
    elemento.textContent = mensaje;
    contenedor.appendChild(elemento);
}

function limpiarSeleccion() {
    const config = obtenerConfigCategoria();

    viaSeleccionada = null;
    hechizoSeleccionado = null;
    viaTitulo.textContent = config.tituloSeleccion;

    hechizosContainer.replaceChildren();
    mostrarEstadoVacio(hechizosContainer, config.mensajeInicial);
    mostrarDetalleVacio();
}

function mostrarDetalleVacio() {
    const config = obtenerConfigCategoria();
    const seleccionado = Boolean(viaSeleccionada);

    detalleHechizo.replaceChildren();

    // En Psíquica, la descripción y el modificador pertenecen al panel de
    // detalle de la derecha, igual que en la referencia del grimorio clásico.
    if (seleccionado && viaSeleccionada?.tipoContenido === "psiquica") {
        const info = renderInfoDisciplina(viaSeleccionada);
        if (info) detalleHechizo.appendChild(info);
    }

    const vacio = document.createElement("div");
    vacio.className = "detalle-vacio";
    vacio.innerHTML = `
        <div class="detalle-icono">✦</div>
        <h2>${seleccionado ? "Selecciona un poder" : "Grimorio"}</h2>
        <p>${escapeHTML(
            seleccionado
                ? "Selecciona un poder de la lista para consultar sus propiedades."
                : config.mensajeDetalleVacio
        )}</p>
    `;
    detalleHechizo.appendChild(vacio);
}

// =====================================================
// INICIALIZACIÓN
// =====================================================

categoriaBtns.forEach((btn) => {
    btn.addEventListener("click", () => seleccionarCategoria(btn.dataset.categoria));
});

seleccionarCategoria(categoriaActiva);

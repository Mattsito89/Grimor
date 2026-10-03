// Ventajas metamágicas oficiales extraídas de Metamagias.pdf.
import { crearMetamagia } from "../metamagiaTemplate.js";

export const ramaBellum = {
    id: "bellum",
    nombre: "Bellum",
    color: "#ef4444",
    tipoContenido: "metamagia",
    ramaCompleta: "Bellum Domini Archanum",
    hechizos: [
        crearMetamagia({
            "nombre": "Escudos Potenciados",
            "requerimientoNivel": 3,
            "descripcion": "Este principio permite al brujo gobernar cada una de las fibras sobrenaturales de sus escudos, incrementando exponencialmente el aguante de los mismos frente a cualquier clase de ataque.",
            "efectosJuego": "Los escudos incrementan su resistencia, aumentando considerablemente la cantidad de puntos de daño que soportan sin que el hechicero haya de invertir una mayor cantidad de puntos de Zeon. Dependiendo del número de esferas que el brujo domine, el aguante puede doblar o triplicar su valor originario.",
            "niveles": [
                {
                    "nombreNivel": "Básico",
                    "texto": "El aguante de los escudos se dobla.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "El aguante de los escudos se triplica.",
                    "costoEsferas": 2
                }
            ],
            "efectoVisualComun": "No suele haber cambios a nivel visual en los escudos, salvo que estos parecen más resistentes y recios."
        }, "Bellum Domini Archanum"),
        crearMetamagia({
            "nombre": "Precisión Mística",
            "requerimientoNivel": 2,
            "descripcion": "Este principio representa que el hechicero puede hacer cálculos matemáticos avanzados para guiar sus sortilegios ofensivos con una precisión milimétrica.",
            "efectosJuego": "",
            "niveles": [
                {
                    "nombreNivel": "Inicial",
                    "texto": "Los conjuros de ataque del brujo obtienen la regla de Preciso. No tiene efecto sobre conjuros de ataque en área.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "Como el anterior, pero los conjuros en área también obtienen la regla de preciso, pudiendo designar blancos específicos diferentes en cada objetivo.",
                    "costoEsferas": 2
                }
            ],
            "efectoVisualComun": "En algunas ocasiones, al usar este poder aparece una marca determinada en el punto exacto donde el ataque va a ser proyectado."
        }, "Bellum Domini Archanum"),
        crearMetamagia({
            "nombre": "Incremento Destructivo",
            "requerimientoNivel": 3,
            "descripcion": "Esta Ventaja Metamágica permite al lanzador incrementar exponencialmente la capacidad destructiva de sus conjuros.",
            "efectosJuego": "El daño base que producen los sortilegios de ataque de un personaje se incrementa en una cantidad determinada por el número de ventajas dominadas.",
            "niveles": [
                {
                    "nombreNivel": "Inicial",
                    "texto": "El daño base de los conjuros del personaje se incrementa en +10 en grado base, +20 en grado intermedio, +30 en grado avanzado y +40 en sortilegios de grado arcano.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "Como el anterior, salvo que el daño se incrementa en +20 en grado base, +40 en grado intermedio, +60 en grado avanzado y +80 en sortilegios de grado arcano.",
                    "costoEsferas": 2
                }
            ],
            "limites": "Este poder no modifica el daño de los sortilegios que permiten realizar varios ataques, como Esfera de Destrucción o Espina de la Tierra. En estos casos, únicamente uno de los ataques (elegido por el lanzador) obtendría el bono.",
            "efectoVisualComun": "Ninguno, salvo que el conjuro aparenta ser más poderoso de lo que es en realidad."
        }, "Bellum Domini Archanum"),
        crearMetamagia({
            "nombre": "Área Potenciada",
            "requerimientoNivel": 3,
            "descripcion": "El brujo domina la capacidad de forzar el espacio que ocupa su magia cuando es proyectada a través de un conjuro, lo que le permite incrementar exponencialmente el área de efecto de sus sortilegios. Gracias a ello, abarca enormes zonas de terreno, muy por encima de lo que habitualmente podría hacer.",
            "efectosJuego": "Al lanzar un conjuro que tiene un área determinada, ya sea de Efecto, Anímico o un Ataque en área, el personaje que lo usa incrementa la distancia que cubre el sortilegio dependiendo de cuantas esferas domine. Es importante puntualizar que el brujo no aumenta en ningún caso el alcance máximo de sus sortilegios, que sigue estando fijado por su Proyección mágica, sino únicamente las áreas de los mismos.",
            "niveles": [
                {
                    "nombreNivel": "Básico",
                    "texto": "El área de efecto de los conjuros se incrementa un 50%.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "El área de efecto se dobla.",
                    "costoEsferas": 2
                }
            ],
            "efectoVisualComun": "Ninguno es especial, salvo los que tuvieran las áreas de los conjuros lanzados.",
            "informacionAdicional": "Un hechicero que tuviera Nivel Básico de este principio y lanzase un sortilegio con un área de 50 metros la incrementaría hasta 75, ya que aumenta en un 50% el área de efecto de cualquier conjuro que use."
        }, "Bellum Domini Archanum"),
        crearMetamagia({
            "nombre": "Eliminar Protección",
            "requerimientoNivel": 2,
            "descripcion": "Este principio otorga al brujo la capacidad de potenciar sus conjuros ofensivos eliminando cualquier clase de protección o armadura que les impida alcanzar sus blancos. Así pues, cuanto mayor sea el gasto zeónico, más disminuye la protección de sus contrincantes.",
            "efectosJuego": "A la hora de lanzar un conjuro de Ataque o Anímico, el brujo puede invertir Zeon extra para disminuir el Tipo de Armadura del defensor en una cantidad equivalente a 1 punto de TA cada 10 puntos de Zeon. Es decir, si invirtiese 20 puntos por encima del valor zeónico de un sortilegio de Descarga de Luz, al usarlo el rayo disminuiría dos puntos la TA de Energía de su objetivo.",
            "niveles": [
                {
                    "nombreNivel": "Básico",
                    "texto": "El personaje puede gastar hasta 20 puntos de Zeon adicionales para reducir el Tipo de Armadura de su objetivo.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Avanzado",
                    "texto": "Igual que el anterior, salvo porque el límite máximo de Zeon que se puede invertir se incrementa hasta +40.",
                    "costoEsferas": 2
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "Como los anteriores, salvo porque el límite máximo de Zeon es de +60.",
                    "costoEsferas": 3
                }
            ],
            "efectoVisualComun": "De un modo muy parecido a lo que ocurre en la Erudición Ofensiva, este efecto va creando runas de potenciación. No obstante, por lo general se dibujan en mitad del aire alrededor del lugar que el personaje utiliza para lanzar el conjuro (su mano, boca, pecho…) en lugar de directamente sobre su cuerpo. Cada 10 puntos que gaste con este fin forma una runa."
        }, "Bellum Domini Archanum"),
        crearMetamagia({
            "nombre": "Erudición Defensiva",
            "requerimientoNivel": 5,
            "descripcion": "La Erudición Defensiva permite al brujo usar su magia para incrementar la protección que le brindan sus conjuros defensivos. Así pues, con el poder añadido que emplea aumenta su Proyección equivalentemente al Zeon invertido; cuanto mayor sea el gasto zeónico, mayor será su habilidad de defensa.",
            "efectosJuego": "A la hora de lanzar un Escudo el brujo puede invertir Zeon extra para obtener un bono equivalente a dicho gasto. Es decir, si invirtiese 25 puntos por encima del valor zeónico del sortilegio, al usarlo obtendría un +25 a su Proyección Mágica defensiva. Este bono se conserva durante todo el tiempo en el que dicho conjuro está activo, por lo que mientras el escudo se mantenga, todas las defensas que el personaje ejecute con él obtendrán su beneficio. El límite de Zeon que alguien puede emplear para incrementar su Proyección mágica está determinado por el número de esferas de Erudición Defensiva que posea.",
            "niveles": [
                {
                    "nombreNivel": "Básico",
                    "texto": "El personaje puede gastar hasta 20 puntos de Zeon adicionales para incrementar su Proyección Mágica hasta +20.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Avanzado",
                    "texto": "Igual que el anterior, salvo porque el límite máximo de Zeon que se puede invertir se incrementa hasta 40.",
                    "costoEsferas": 2
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "Como los anteriores, salvo porque el límite máximo de Zeon es de 60. Límite: Los bonos de este principio no se acumulan con los del conjuro de Libre Acceso Erudición Defensiva.",
                    "costoEsferas": 3
                }
            ],
            "efectoVisualComun": "Este efecto suele dibujar runas en el cuerpo del hechicero (por lo general, en uno de sus brazos o en ambas manos), las cuales se iluminan según va acumulando Zeon. Cada 5 puntos que gaste con este fin dibuja una marca en su cuerpo."
        }, "Bellum Domini Archanum"),
        crearMetamagia({
            "nombre": "Erudición Ofensiva",
            "requerimientoNivel": 4,
            "descripcion": "Este principio Metamágico otorga al brujo la capacidad de usar su energía para incrementar la precisión y velocidad de los conjuros. De ese modo, gracias al potencial añadido que emplea, aumenta su Proyección mágica en una cantidad equivalente al Zeon invertido; cuanto mayor sea el gasto zeónico, mayor será su habilidad.",
            "efectosJuego": "A la hora de lanzar un conjuro de Ataque o Anímico, el brujo puede invertir Zeon extra para obtener un bono igual a dicho gasto. Es decir, si invirtiese 25 puntos por encima del valor zeónico del sortilegio, al usarlo obtendría un +25 a su Proyección mágica ofensiva. El límite de Zeon que alguien puede emplear para incrementar su Proyección Mágica está determinado por el número de esferas de Erudición Ofensiva que posea.",
            "niveles": [
                {
                    "nombreNivel": "Básico",
                    "texto": "El personaje puede gastar hasta 20 puntos de Zeon adicionales para incrementar su Proyección mágica hasta +20.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Avanzado",
                    "texto": "Igual que el anterior, salvo porque el límite máximo de Zeon que se puede invertir se incrementa hasta +40.",
                    "costoEsferas": 2
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "Como los anteriores, salvo porque el límite máximo de Zeon es de +60. Límite: Los bonos de este principio no se acumulan con los del conjuro de Libre Acceso Erudición Ofensiva.",
                    "costoEsferas": 3
                }
            ],
            "efectoVisualComun": "Este efecto suele dibujar runas en el cuerpo del hechicero (por lo general, en uno de sus brazos o en ambas manos), las cuales se iluminan según va acumulando Zeon. Cada 5 puntos que gaste con este fin dibuja una marca en su cuerpo.",
            "informacionAdicional": "Un hechicero que tuviera dos esferas y usase una Descarga de Oscuridad usando 80 puntos de Zeon (50 puntos para el conjuro en grado base y 30 para incrementar su Proyección), lanzaría el conjuro con un +30 a su Proyección Mágica. METAMAGISTER:"
        }, "Bellum Domini Archanum"),
        crearMetamagia({
            "nombre": "Doble Daño",
            "requerimientoNivel": 10,
            "descripcion": "Al dominar este principio, el brujo tiene semejante dominio sobre la magia que es capaz de convertir su energía mágica directamente en poder destructivo; incluso a nivel básico, uno sólo de sus conjuros es una fuerza destructiva incomparable.",
            "efectosJuego": "El daño base de todos los conjuros ofensivos se dobla.",
            "limites": "Los bonos adicionales que el personaje pudiera recibir al daño base de sus sortilegios, ya sea por otras ventajas Metamágicas, objetos o conjuros de potenciación, no se ven afectados por esta habilidad.",
            "efectoVisualComun": "Todos los conjuros ofensivos del personaje alteran su aspecto original, adoptando una apariencia mucho más viva y poderosa."
        }, "Bellum Domini Archanum")
    ]
};

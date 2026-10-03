// Ventajas metamágicas oficiales extraídas de Metamagias.pdf.
import { crearMetamagia } from "../metamagiaTemplate.js";

export const ramaEsoteros = {
    id: "esoteros",
    nombre: "Esoteros",
    color: "#22c55e",
    tipoContenido: "metamagia",
    ramaCompleta: "Esoteros Archanum",
    hechizos: [
        crearMetamagia({
            "nombre": "Seguridad Defensiva",
            "requerimientoNivel": 0,
            "descripcion": "Este principio permite al hechicero usar defensas sobrenaturales como una acción innata para él, sin que su lanzamiento suponga la misma complejidad que otros conjuros.",
            "efectosJuego": "Aunque el brujo obtenga un resultado de Pifia en el momento en el que lanza un escudo mágico, el conjuro sigue siendo activado, independientemente del nivel de Pifia obtenido. En estos casos, simplemente se resta el valor de la Pifia a la habilidad defensiva del personaje, igual que si la hubiera obtenido en una defensa convencional.",
            "efectoVisualComun": "En el momento en el que el hechicero lanza el conjuro el escudo se rodea de sellos mágicos enlazados entre sí."
        }, "Esoteros Archanum"),
        crearMetamagia({
            "nombre": "Magia Vital",
            "requerimientoNivel": 3,
            "descripcion": "El mago tiene la capacidad de incrementar las capacidades sanadoras de sus conjuros.",
            "efectosJuego": "Los conjuros que permiten al hechicero curar Puntos de Vida ven incrementados el poder de sus Efectos Añadidos en la cantidad indicada por el número de esferas dominadas.",
            "niveles": [
                {
                    "nombreNivel": "Inicial",
                    "texto": "La curación se incrementa en +20 PV en grado base, +40 PV en grado intermedio, +60 PV en grado avanzado y +80 PV en sortilegios de grado arcano.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "La curación se incrementa en +40 PV en grado base, +80 PV en grado intermedio, +120 PV en grado avanzado y +160 PV en sortilegios de grado arcano.",
                    "costoEsferas": 2
                }
            ],
            "limites": "Este principio no tiene efecto sobre aquellos sortilegios que curen cantidades porcentuales de Puntos de Vida.",
            "efectoVisualComun": "Generalmente no hay ningún efecto visual en la ejecución de este principio."
        }, "Esoteros Archanum"),
        crearMetamagia({
            "nombre": "Sentir la Magia",
            "requerimientoNivel": 0,
            "descripcion": "Un brujo con este principio percibe los rastros y las emanaciones sobrenaturales que produce cualquier fuente de magia. En consecuencia, le resulta mucho más fácil percibir el uso de sortilegios y su acumulación de Zeon.",
            "efectosJuego": "El brujo incrementa automáticamente un grado cualquier control de Valoración Mágica para detectar personas con el Don o para tratar de detectar conjuros que sean lanzados cerca de ella. Del mismo modo, de tener éxito en el control, puede sentir además quien es el blanco del conjuro y que finalidad tiene dicho sortilegio.",
            "efectoVisualComun": "Al usar este principio los ojos del personaje pueden llegar a cambiar levemente."
        }, "Esoteros Archanum"),
        crearMetamagia({
            "nombre": "Magia Oculta",
            "requerimientoNivel": 0,
            "descripcion": "Un brujo con este principio tiene un completo dominio sobre los rastros y las emanaciones sobrenaturales que producen sus conjuros. En consecuencia, le resulta mucho más fácil ocultar el uso de sortilegios y su acumulación de Zeon.",
            "efectosJuego": "Este principio tiene dos efectos. Para empezar, el brujo disminuye a la mitad los penalizadores que sufre su Valoración Mágica para ocultar sortilegios cuando acumula Zeon. Es decir, si tuviera acumulado 100 puntos de Zeon, sólo aplicaría un -50 en lugar de -100. En segundo lugar, hace que cualquiera que trate de detectar si posee o no habilidades sobrenaturales aplique un penalizador de -120 a su Valoración Mágica.",
            "efectoVisualComun": "Obviamente, por la naturaleza intrínseca de este principio no suele haber ningún efecto visual."
        }, "Esoteros Archanum"),
        crearMetamagia({
            "nombre": "Bucle Existencial",
            "requerimientoNivel": 6,
            "descripcion": "Un Bucle Existencial es un principio que otorga la capacidad de crear una alteración en el continuo de la realidad. Durante unos instantes, el personaje se aparta del fluir del espacio y el tiempo, siendo capaz de recitar largos ensalmos, lanzar numerosos conjuros o prepararse libremente sin que nadie sea capaz de evitarlo.",
            "efectosJuego": "Este principio permite al personaje consumir grandes cantidades de magia para encerrarse en un bucle que lo aísla unos instantes de la realidad y del fluir del tiempo. Aunque de forma limitada, durante ese breve lapso el tiempo sólo pasa para él y es, por tanto, el único capaz de actuar. Dependiendo del nivel alcanzado en este principio el brujo puede permanecer en el interior del bucle entre dos y cinco asaltos, durante los cuales es completamente libre de preparar conjuros, acumular magia o realizar cualquier acción. Sin embargo, esos turnos sólo cuentan para él, mientras que el resto de personas que lo rodean se quedan completamente paralizadas, aisladas en un tiempo diferente. Desgraciadamente, mientras está en el bucle la capacidad del brujo de interactuar con el mundo es muy limitada. Mientras se encuentre en su interior, el personaje no es capaz de moverse más de un metro de su posición actual (ni siquiera usando conjuros de transporte u otros poderes similares) o tocar su entorno. Si intentase hacerlo saldría inmediatamente del bucle perdiendo todas las ventajas obtenidas, el Zeon acumulado y los conjuros preparados. Un personaje puede lanzar conjuros en el interior del Bucle, siempre y cuando se tenga a si mismo como blanco o las consecuencias de dichos conjuros no afecten a nadie más que a él mismo. De ese modo, sería capaz de usar un conjuro de Luz o Erudición Ofensiva, pero no un hechizo de Recuperar sobre otra persona o un sortilegio de Perdición, ya que estos dos últimos sí vinculan a otros individuos externos al lanzador. Naturalmente, eso no significa que el brujo no pueda preparar conjuros Anímicos o de Ataque en el interior de un bucle y lanzarlos en el turno en el que sale de él. La activación del bucle es una acción activa. Cuando finalmente sale de su interior, el tiempo de todo cuando le rodea se reactiva, “regresando” al mismo instante exacto en el entró en él. Después de haber usado un Bucle, el personaje ha de esperar al menos tantos asaltos como estuvo en el interior de él antes de poder volverlo a emplear de nuevo. Es decir, si estuvo tres asaltos en el interior de uno, tras salir deberá esperar otros tres antes de volver a crear otro bucle. Cada asalto que un personaje permanece en el interior de un Bucle Existencial consume 100 de sus puntos de Zeon, que se restan automáticamente de su reserva sin la necesidad de acumularlos.",
            "niveles": [
                {
                    "nombreNivel": "Inicial",
                    "texto": "El Bucle Existencial puede mantenerse hasta dos asaltos.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "El Bucle Existencial puede mantenerse hasta cinco asaltos.",
                    "costoEsferas": 2
                }
            ],
            "limites": "Este poder no tiene efectos sobre entidades cuyo Gnosis sea 40 o mayor, a menos que quien usa el bucle tenga a su vez un Gnosis superior.",
            "efectoVisualComun": "Al activar este principio, las personas que se encuentran alrededor del personaje perciben que el mundo entero se detiene y se oscurece, como si el tiempo mismo acabase de congelarse. Sólo el brujo sigue moviéndose, preparando los ensalmos del conjuro que se dispone a lanzar."
        }, "Esoteros Archanum"),
        crearMetamagia({
            "nombre": "Control del Espacio",
            "requerimientoNivel": 6,
            "descripcion": "El dominio del personaje sobre la forma y espacio de sus conjuros es absoluto. Eso le permite alterar su estructura a voluntad, pudiendo afectar únicamente a aquellos blancos que desee con sus sortilegios ofensivos.",
            "efectosJuego": "Esta habilidad permite al mago elegir que blancos que recibirán el ataque dentro del área de efecto de sus sortilegios ofensivos, incluso en aquellos conjuros que explícitamente indican lo contrario, como una Bola de Fuego o una Cúpula de Destrucción. No es posible evitar que reciban el ataque los objetivos de los que no se tiene constancia, como aquellos que estén ocultos para el personaje. Hacer uso de esta habilidad tiene un coste añadido de 10 puntos de Zeon al valor del conjuro lanzado.",
            "efectoVisualComun": "No hay una forma determinada de representar este principio, pues varía dependiendo del conjuro y de la voluntad del lanzador. Es posible que un inmenso meteoro se convierta en una selecta lluvia de rocas espaciales o una bola de fuego se torne en decenas de columnas ígneas que sólo abrasan aquello que elija el brujo."
        }, "Esoteros Archanum"),
        crearMetamagia({
            "nombre": "Control de la Energía",
            "requerimientoNivel": 0,
            "descripcion": "Un brujo que domine este principio controla la materia sobrenatural de sus conjuros. Su poder sobre la fina línea que separa el plano material del espiritual es tal que es capaz de dotar de energía mística todos sus sortilegios, incluso aquellos que están basados en fuerzas terrenales y no resultan generalmente efectivos contra seres inmateriales.",
            "efectosJuego": "El hechicero puede invertir 10 puntos de Zeon en el lanzamiento de cualquiera de sus conjuros de Ataque para hacer que dicho sortilegio sea capaz de dañar energía. Así pues, incluso una Cuchilla de Aire o una Espina de la Tierra tendrían la suficiente presencia mística para afectar a seres inmateriales o inmunes a ataques no basados en energía. Del mismo modo, puede gastar 10 puntos de Zeon durante el lanzamiento de cualquier conjuro de defensa para hacer que su escudo mágico pueda detener energía, incluso cuando dicho conjuro no lo permite.",
            "efectoVisualComun": "Las descargas o escudos suelen cambiar su color cuando su poder se incrementa para que dañen energía. Por ejemplo, es posible que las llamas de un conjuro de Bola de Fuego se tornen verdosas o azuladas, en contra del color que tuvieran originalmente."
        }, "Esoteros Archanum"),
        crearMetamagia({
            "nombre": "Aguante al Daño Sobrenatural",
            "requerimientoNivel": 3,
            "descripcion": "El dominio de esta capacidad permite al personaje usar su energía mágica como protección, escudándose en ella para absorber parcialmente un Daño provocado por otros conjuros.",
            "efectosJuego": "Cuando el brujo es blanco de un ataque mágico puede elegir sufrir la mitad del daño recibido en puntos de Zeon en lugar de perderlos todos en Puntos de Vida. Esta habilidad sólo funciona contra efectos sobrenaturales basados por base en magia, y no en otras capacidades sobrenaturales. Es decir, esta capacidad podría transformar el Daño provocado por una Descarga de Luz o la Cúpula Destructora de un Hecatondies, pero no una Técnica de Ki o un tajo propinado por una espada con poderes arcanos. Este principio también funciona contra Daños producidos por efectos que obliguen a superar controles de Resistencia, siempre y cuando estos sean de carácter místico. Esta habilidad es completamente voluntaria; si lo prefiere, el personaje puede sufrir únicamente Daño físico en lugar de peder puntos de Zeon.",
            "limites": "Esta habilidad no permite paliar el daño recibido por un Ataque sobrenatural procedente de una entidad con 20 puntos de Gnosis por encima del que posee el personaje.",
            "efectoVisualComun": "Al recibir un ataque mágico que produzca daños al personaje, líneas sobrenaturales brillan en su cuerpo unos instantes, como si hubiera sido afectado tanto espiritual como físicamente.",
            "informacionAdicional": "Algol lanza una descarga de magia contra Éxodo, provocándole un Daño total de 80 puntos. Dado que Éxodo posee el principio Aguante al Daño Sobrenatural, puede elegir perder 40 Puntos de Vida y 40 de Zeon."
        }, "Esoteros Archanum"),
        crearMetamagia({
            "nombre": "Transmisión de Magia",
            "requerimientoNivel": 3,
            "descripcion": "Este principio permite a un hechicero transmitir y recibir Zeon a distancia, sin la necesidad de que haya contacto físico entre él y el individuo con quien lo comparte.",
            "efectosJuego": "A la hora de absorber o transmitir Zeon con otra persona, el brujo no requiere estar tocándolo; basta con que no estén a más de su Presencia en metros para pasarse mutuamente energías mágicas.",
            "efectoVisualComun": "Generalmente, al usar este principio la energía mágica forma un vínculo de unión entre ambos personajes, aunque sólo es posible percibirlo por aquellos que ven magia."
        }, "Esoteros Archanum"),
        crearMetamagia({
            "nombre": "Forzar Velocidad",
            "requerimientoNivel": 2,
            "descripcion": "El hechicero posee unas acumulaciones de energía tan superiores que puede gastar cantidades adicionales de Zeon para ejecutar sus conjuros más velozmente.",
            "efectosJuego": "El personaje puede gastar Zeon antes de determinar su iniciativa para obtener un bono a su Turno equivalente a los puntos invertidos. Este gasto cuenta como parte de la acumulación de un conjuro determinado, declarado en el momento en el que se inicia la acumulación del sortilegio, y por tanto, el hechicero está obligado a lanzar dicho sortilegio.",
            "niveles": [
                {
                    "nombreNivel": "Inicial",
                    "texto": "El personaje puede gastar hasta 20 puntos de Zeon.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Intermedio",
                    "texto": "El personaje puede gastar hasta 40 puntos de Zeon.",
                    "costoEsferas": 2
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "El personaje puede gastar hasta 60 puntos de Zeon.",
                    "costoEsferas": 3
                }
            ],
            "limites": "Este principio sólo puede hacerse valer si la primera acción que el personaje declara es un conjuro determinado. Una vez que ha hecho uso de ella, incluso si no lo desea deberá lanzar el sortilegio que ha declarado usar en el instante en el que le corresponda actuar.",
            "efectoVisualComun": "Normalmente, en el momento en el que el personaje activa el sortilegio se dibujan en el aire símbolos similares a un reloj moviéndose a toda velocidad. Éxodo, que tiene un ACT de 80 puntos y el principio metamágico Forzar Velocidad a Nivel Arcano, declara que quiere lanzar un conjuro de Descarga de Luz antes de lanzar los dados. Gasta 50 puntos en el conjuro y los 30 restantes en potenciar su turno, obteniendo un +30 en su iniciativa para usar su descarga."
        }, "Esoteros Archanum"),
        crearMetamagia({
            "nombre": "Doble Conjuro Innato",
            "requerimientoNivel": 7,
            "descripcion": "El dominio de las energías ambientales del personaje le capacita a realizar varios conjuros innatos de manera encadenada.",
            "efectosJuego": "En contra de las reglas generales, en lugar de uno el personaje es capaz de lanzar dos conjuros innatos diferentes por asalto. Límite: Esta habilidad no modifica el número de conjuros innatos que un personaje puede mantener sin tener que pagar su mantenimiento; sigue estando limitado a sólo uno.",
            "efectoVisualComun": "Cuando usa dos conjuros innatos, el hechicero pronuncia verbalmente los ensalmos de uno de ellos mientras gesticula para hacer el otro. METAMAGISTER:"
        }, "Esoteros Archanum"),
        crearMetamagia({
            "nombre": "Mantenimiento Añadido",
            "requerimientoNivel": 10,
            "descripcion": "Los conjuros mantenidos son algo completamente natural para el personaje; atándolos a su propia alma, es capaz de mantenerlos activos sin que ello suponga un gasto adicional para él.",
            "efectosJuego": "Los conjuros con mantenimiento dejan a tener coste por Asalto y pasan a pagarse cada 5 turnos. Al mismo tiempo, los conjuros diarios se convierten en semanales y sólo hace falta mantenerlos una vez cada siete días para que sigan funcionando.",
            "limites": "Esta habilidad está limitada a un conjuro por cada dos puntos de Poder del personaje. Es decir, un individuo con Poder 12 podría aprovechase de este principio en seis conjuros mantenidos a la vez, mientras que el resto se seguiría rigiendo por las reglas tradicionales.",
            "efectoVisualComun": "No hay ningún efecto visual."
        }, "Esoteros Archanum")
    ]
};

// Ventajas metamágicas oficiales extraídas de Metamagias.pdf.
import { crearMetamagia } from "../metamagiaTemplate.js";

export const ramaCognos = {
    id: "cognos",
    nombre: "Cognos",
    color: "#06b6d4",
    tipoContenido: "metamagia",
    ramaCompleta: "Cognos Archanum",
    hechizos: [
        crearMetamagia({
            "nombre": "Concentración Mística",
            "requerimientoNivel": 0,
            "descripcion": "El brujo desarrolla la capacidad de acumular magia como una acción natural, independiente de su concentración o condición física. Por ello, tiene gran facilidad para seguir acumulando magia incluso si sufre daños que le desconcentren.",
            "efectosJuego": "El personaje disminuye a la mitad la Dificultad del control de Resistir el Dolor que debe realizar cuando sufre daño para mantener el Zeon acumulado. Es decir, si por ejemplo sufriera un ataque que le causase 80 puntos de daño, requería superar un control de Resistir el Dolor contra 80 para mantener el Zeon acumulado o contra 40 para no perder completamente dichos puntos (Ver el Capítulo 11 de Anima Beyond Fantasy).",
            "efectoVisualComun": "No suele haber ningún efecto visual en este principio."
        }, "Cognos Archanum"),
        crearMetamagia({
            "nombre": "Conjuro Especialista",
            "requerimientoNivel": 2,
            "descripcion": "El hechicero se ha especializando o tiene un talento único lanzando un determinado tipo de conjuro, lo que le permite incrementar los efectos de dicho sortilegio de un modo innato.",
            "efectosJuego": "Al dominar alguna esfera de Conjuro Especialista el personaje debe elegir un sortilegio determinado que conozca. Desde ese momento, cada vez que declare que quiere preparase para lanzar ese conjuro incrementa +10 su ACT y aplica un +1 a su Inteligencia para calcular el Grado de conjuro en el que puede lanzarlo.",
            "efectoVisualComun": "Esta esfera no suele tener ningún efecto visual.",
            "nivelMaximo": "A lo largo de árbol de ventajas Metamágicas hay varias esferas de Conjuro Especialista con un nivel señalado. Ese límite indica cual es el nivel Máximo de conjuro que el personaje puede elegir como Especialista dominando esa esfera en concreto. Es decir, si indicase Nivel 40, el personaje podría escoger cualquier sortilegio cuyo nivel se encontrase entre 2 y 40, pero no uno de nivel superior.",
            "variosConjurosEspecialistas": "Un personaje puede dominar varias veces esta esfera en el árbol Metamágico. En tal caso, es libre de escoger cada vez diferentes conjuros (especializándose en diversos sortilegios), o incrementar la especialización que ya tiene en un mismo conjuro. Si escoge potenciar un sólo hechizo, cada esfera adicional incrementa en +10 su ACT al lanzar dicho sortilegio y otorga otro +1 a su Inteligencia. Es decir, de tener tres especializaciones en un mismo conjuro, este sería lanzado con +30 al ACT y +3 a su Inteligencia."
        }, "Cognos Archanum"),
        crearMetamagia({
            "nombre": "Romper Resistencias",
            "requerimientoNivel": 2,
            "descripcion": "El brujo emplea su habilidad proyectando conjuros para penetrar a través de las defensas espirituales de sus objetivos y hacer así mucho más difícil resistirse a sus efectos.",
            "efectosJuego": "Al lanzar cualquier conjuro Anímico el personaje incrementa la dificultad de la RM a superar dependiendo del resultado del asalto obtenido. Cada 50% de daño que obtenga aumenta en 5 o 10 puntos el valor de la RM de su hechizo.",
            "niveles": [
                {
                    "nombreNivel": "Inicial",
                    "texto": "El personaje incrementa la dificultad de la RM de sus conjuros Anímicos 5 puntos por cada 50% de daño obtenido.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "Como el anterior, salvo que la dificultad de las RM se incrementa en 10 puntos por cada 50% de daño obtenido.",
                    "costoEsferas": 2
                }
            ],
            "limites": "Esta habilidad no tiene efectos especiales contra criaturas con acumulación de daño.",
            "efectoVisualComun": "Generalmente no hay ningún efecto visual en la ejecución de esta esfera. Éxodo lanza un conjuro de Destrozar con RM 120 contra",
            "informacionAdicional": "Algol, superando la defensa de este y obteniendo un resultado de 120% de daño. Si tuviera una esfera, incrementaría la RM 10 puntos (a 130 RM), mientras que si lo tuviera a nivel Arcano, la aumentaría en 20 (a 140 RM)."
        }, "Cognos Archanum"),
        crearMetamagia({
            "nombre": "Distancia Incrementada",
            "requerimientoNivel": 0,
            "descripcion": "El mago tiene la capacidad de incrementar el alcance de sus conjuros.",
            "efectosJuego": "Los conjuros incrementan la distancia indicada por la Proyección Mágica del lanzador (Recuadro X de Anima Beyond Fantasy).",
            "niveles": [
                {
                    "nombreNivel": "Inicial",
                    "texto": "El alcance de un conjuro dobla lo que indique el valor obtenido por la Proyección Mágica del lanzador.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "El alcance de los conjuros se cuadriplica.",
                    "costoEsferas": 2
                }
            ],
            "limites": "Este principio no tiene efecto sobre aquellos sortilegios que tengan distancias determinadas en su descripción, en lugar de por su Proyección Mágica.",
            "efectoVisualComun": "Generalmente no hay ningún efecto visual en la ejecución de este principio.",
            "informacionAdicional": "Un brujo con una esfera de Distancia Incrementada que obtuviera una dificultad Media en su control de Proyección Mágica llegaría hasta 50 metros."
        }, "Cognos Archanum"),
        crearMetamagia({
            "nombre": "Enlazar Conjuros",
            "requerimientoNivel": 8,
            "descripcion": "Esta esfera permite al brujo entrelazar dos conjuros diferentes creando como resultado uno completamente nuevo mucho más poderoso que cualquiera de sus componentes por separado.",
            "efectosJuego": "Para combinarlos, el personaje debe tan solo acumular Zeon suficiente para usar cada uno de los conjuros, pero declarando que quiere lanzarlos de manera enlazada. Al hacerlo, sólo realiza una tirada de Proyección Mágica, ejecutándolos ambos como una unidad. Los efectos de un sortilegio combinado son muy variables dependiendo de los conjuros que lo formen. Habitualmente, sólo pueden combinarse los de tipo Anímico y de Ataque, ya que los resultados de enlazar otra clase de sortilegios son siempre caóticos e inestables. Para hacerlo, deben seguirse las siguientes pautas; • De tratarse de dos conjuros de tipo Ataque, para calcular el Daño Base de los mismos se toma el más elevado de los dos y se le suma la mitad del menor. Es decir, un conjuro de Daño 80 y otro de Daño 60 se combinarían en uno de Daño 110 (80 del primero más 30 del segundo). Además, el sortilegio resultante absorbe las mejores características de cada uno individualmente, quedándose con la mayor área, Tipo de Ataque más apropiado y todos los efectos especiales que tengan por separado. • Si se combina dos conjuros Anímicos, la RM de cada efecto se lanza por separado, pero es el brujo quien decide el orden en el que el blanco del sortilegio debe de realizar los Controles de Resistencia. • De tratarse de un conjuro de tipo Ataque y otro Anímico, en caso de producir daño el objetivo debe simplemente realizar la RM propia del conjuro Anímico para saber si es o no afectado por él. • Cuando se combina un conjuro Anímico que afecta a un único blanco con un conjuro de Ataque o con otro Anímico que tiene área, el brujo tiene dos posibilidades; o bien seguir afectando a un sólo blanco (dentro del área prefijada), elegido en el momento del lanzamiento del conjuro, o rebajar 50 puntos la RM del conjuro, pero afectando a todos aquellos que estén dentro del área del conjuro y sean alcanzados por este.",
            "efectoVisualComun": "No hay un efecto determinado, ya que la combinación de conjuros siempre da como resultado un sortilegio de aspecto diferente al de cualquiera de sus componentes por separado."
        }, "Cognos Archanum"),
        crearMetamagia({
            "nombre": "Maximización de Conjuros",
            "requerimientoNivel": 5,
            "descripcion": "Un brujo con esta esfera es capaz de maximizar el potencial de sus conjuros hasta un nivel superior al que le permite su inteligencia.",
            "efectosJuego": "El personaje obtiene un +1 a Inteligencia a la hora de calcular el requisito de los conjuros.",
            "efectoVisualComun": "Generalmente no hay ningún efecto visual en la ejecución de esta esfera."
        }, "Cognos Archanum"),
        crearMetamagia({
            "nombre": "Doble Conjuro",
            "requerimientoNivel": 7,
            "descripcion": "Utilizando a máximo rendimiento su poder sobrenatural y su capacidad de concentración, el hechicero es capaz de preparar y lanzar dos conjuros diferentes al unísono a cambio de consumir grandes cantidades de Zeon.",
            "efectosJuego": "Durante un mismo asalto el personaje es capaz de lanzar dos conjuros diferentes usando el doble de su ACT. Ninguno de ambos sortilegios puede, individualmente, superar el ACT base del personaje; a todos los efectos es como si dispusiera de su ACT pleno dos asaltos consecutivos para lanzar, en un mismo turno, un conjuro diferente. El coste en Zeon de lanzar dos conjuros de este modo es equivalente al doble del que hubieran tenido dichos sortilegios usados de manera independiente. Límite: Únicamente los conjuros que un personaje sea capaz de ejecutar con su ACT base (sin aplicar nunca ninguna clase de modificador, ni siquiera por objetos mágicos u otros conjuros) pueden ser lanzados con esta habilidad. Además, cuando activa esta esfera, el brujo está limitado a lanzar como máximo dos conjuros, incluso si su ACT sobrante le permitiera ejecutar más.",
            "efectoVisualComun": "El hechicero parece desdoblarse, entonando dos ensalmos a la vez y gesticulando a una velocidad indescriptible. Por lo general, en el momento de la ejecución de los conjuros cada una de sus manos se llena de crepitante energía de diferente color, en representación a los dos sortilegios que se prepara a lanzar. Éxodo, quien posee ACT 90, declara que quiere hacer uso de ésta esfera para lanzar dos conjuros diferentes. El primero es un Escudo de Luz en grado base (50 de Zeon), mientras que el segundo es un sortilegio de Armadura de Luz en grado intermedio (90 de Zeon). Ya que ninguno de los dos supera el ACT base de Éxodo, el warlock no tiene problema para ejecutarlos. Como el uso de ambos conjuros le costaría 140 puntos de Zeon, lanzarlos con esta esfera le consume 280."
        }, "Cognos Archanum"),
        crearMetamagia({
            "nombre": "Conjuro Innato Superior",
            "requerimientoNivel": 9,
            "descripcion": "La magia ambiental responde a los pensamientos del archimago, quien la maneja de manera casi inconsciente maleándola como conjuros innatos mientras él prepara sortilegios más poderosos.",
            "efectosJuego": "El personaje puede lanzar conjuros innatos mientras acumula Zeon. Límite: Si bien es capaz de lanzar conjuros innatos mientras acumula magia, esta esfera no le permite hacerlo mientras está lanzando un conjuro de manera natural.",
            "efectoVisualComun": "El archimago ni siquiera parece emplear conjuros innatos; la magia meramente brota de él de manera natural adoptando la forma de conjuros mientras él sigue gesticulando y preparando su verdadero sortilegio. METAMAGISTER:"
        }, "Cognos Archanum"),
        crearMetamagia({
            "nombre": "Alta Magia",
            "requerimientoNivel": 10,
            "descripcion": "El archimago posee la capacidad de lanzar conjuros existenciales superiores.",
            "efectosJuego": "Al poseer esta esfera, el personaje puede usar conjuros de Alta Magia, sin la necesidad de tener Gnosis 25 o superior. No obstante, el lanzamiento de dichos sortilegios se logra invirtiendo cantidades desiguales de poder, muy por encima del valor real del conjuro. Por ello, en el momento de realizar un conjuro de Alta Magia el brujo pierde una cantidad de Zeon equivalente al valor zeónico invertido, y el coste de mantenimiento se dobla. Es decir, al lanzar un conjuro de valor zeónico 200 el personaje perdería 400 de total. Límite: Esta ventaja sólo funciona al lanzar un conjuro determinado, y no acumulando magia pura.",
            "efectoVisualComun": "Generalmente, al preparar un conjuro de Alta Magia gracias a esta esfera el archimago comienza a rodearse de runas esféricas con simbología siempre cambiante."
        }, "Cognos Archanum")
    ]
};

// Ventajas metamágicas oficiales extraídas de Metamagias.pdf.
import { crearMetamagia } from "../metamagiaTemplate.js";

export const ramaPotestas = {
    id: "potestas",
    nombre: "Potestas",
    color: "#f59e0b",
    tipoContenido: "metamagia",
    ramaCompleta: "Potestas Archanum",
    hechizos: [
        crearMetamagia({
            "nombre": "Magia Combinada",
            "requerimientoNivel": 3,
            "descripcion": "El hechicero es capaz de sincronizar su magia con la de otras personas, lo que le permite lanzar conjuros junto a otros brujos.",
            "efectosJuego": "Los personajes que poseen este principio pueden combinar sus energías mágicas para ejecutar un sortilegio con otros brujos. Eso significa que dos o más hechiceros aúnan esfuerzos para lanzan un mismo conjuro entre todos, que lógicamente será mucho más poderoso que si cada uno lo hubiera lanzado individualmente. Cuando lo hacen, los brujos suman el Zeon que cada uno ha acumulado para calcular el valor zeónico final del conjuro, y emplean la Proyección Mágica más elevada de cuantos lo lanzan para proyectarlo. Para calcular el grado máximo que puede alcanzar el sortilegio, se utiliza el valor de Inteligencia más elevado del grupo, más una cantidad determinada por el número de personas que lancen el conjuro, tal y como se indica en la Tabla 10. El hechicero que tiene el Atributo de Poder más elevado es quien tiene el control final del conjuro, a menos naturalmente que prefiera dejar que otro lo haga por él. En caso de ser un conjuro Activo, para determinar el momento de su lanzamiento se emplea siempre el turno más lento de sus lanzadores. Lamentablemente, lanzar un conjuro entre dos o más personas tiene también muchos requisitos. En primer lugar, todos los componentes han de estar cerca entre si y deben conocer el conjuro que desean emplear, o no podrán utilizarlo. En segundo, cada uno ha de acumular por lo menos la mitad del coste del sortilegio en grado base, o las energías que aportan no son suficientemente fuertes para unirse a las del conjunto.",
            "limites": "No puede existir entre los brujos una diferencia en su Proyección Mágica superior a 100 puntos. De haberla, el hechicero con mayor habilidad debe de rebajarla hasta que sólo haya 100 puntos de diferencia entre la suya y el que posee la menor.",
            "efectoVisualComun": "Los hechiceros realizan ensalmos de manera independiente, pero en el momento de la ejecución del conjuro, todos desencadenan diferentes fragmentos del conjuro que se unen para completar el sortilegio final.",
            "informacionAdicional": "Tabla 10: Magia Combinada Componentes Bono a la Inteligencia 2 +0 3 a 4 +1 5 a 6 +2 7 +3 8 a 11 +4 12 +5 13 a 20 +6 21 +7 22 a 100 +8 101+ +9 Un círculo de magia formado por cuatro hechiceros (tres adeptos llamados A, B y C y un archimago) deben de enfrentarse cara a cara con un Señor de las Tinieblas que avanza hacia ellos. El archimago se prepara para lanzar sobre la criatura una Descarga de Luz y pide a sus discípulos que le apoyen con el conjuro. El ACT de los cuatro brujos es 60, 40, 30 y 20, pero sólo tienen un turno para acumular. Normalmente, el valor zeónico del conjuro sería de 150, pero como uno de ellos es incapaz de llegar tan siquiera a la mitad del valor zeónico base del mismo (que es de 25 puntos, ya que coste base de una Descarga de Luz en grado base es 50), su Zeon no puede sumarse al total del grupo. Por ello, los magos tendrán a su disposición hasta 130 puntos de Zeon para lanzar el conjuro. Combinación con Enlazar Conjuro Si dos personajes que poseen este principio dominan también de Enlazar Conjuro, pueden combinar dos hechizos diferentes para forma uno nuevo siguiendo las reglas descritas en dicha ventaja Metamágica. Básicamente cada uno prepara un sortilegio independientemente y, en el momento de su lanzamiento, los combinan creando uno nuevo. Para determinar el momento del lanzamiento, siempre se emplea el turno más lento de ambos personajes."
        }, "Potestas Archanum"),
        crearMetamagia({
            "nombre": "Efectos Persistentes",
            "requerimientoNivel": 3,
            "descripcion": "Este principio permite al brujo reforzar el tiempo que un conjuro permanece anclado a la esencia de sus objetivos.",
            "efectosJuego": "Cualquier conjuro Anímico que permita a los afectados volver a repetir el control de RM cada 5 asaltos para librarse de sus consecuencias pasa a ser cada 10 asaltos.",
            "efectoVisualComun": "En aquellos conjuros anímicos que tienen efectos visuales para quienes pueden ver magia, los hechizos del brujo hacen surgir cadenas o lazos místicos alrededor de los cuerpos de los afectados."
        }, "Potestas Archanum"),
        crearMetamagia({
            "nombre": "Proyección Mágica Determinada",
            "requerimientoNivel": 3,
            "descripcion": "Esta ventaja representa que el personaje usa directamente la magia como guía para sus conjuros, en lugar de proyectarlos con su propia habilidad. De este modo, no requiere tener Proyección Mágica para usar sortilegios, ya que puede emular su uso empleando Zeon.",
            "efectosJuego": "El personaje puede optar por gastar cierta cantidad de Zeon para hacer que sus conjuros, ya sean de ataque o defensa, en lugar de emplear su propia Proyección Mágica usen una habilidad final determinada. Es decir, el brujo ya no lanza los dados y suma el resultado a su Proyección, sino que emplea un valor prefijado que depende del número de esferas que posea y de la cantidad de Zeon que gaste. Naturalmente, un personaje que posea varias de estas esferas no está en absoluto obligado a emplear siempre el valor más alto. Dependiendo de sus necesidades, puede decidir emplear una Proyección menor para consumir así menos puntos de Zeon. El valor zeónico que se consume al utilizar este principio se descuenta directamente de la reserva del personaje, sin la necesidad de acumular previamente dicha cantidad.",
            "niveles": [
                {
                    "nombreNivel": "Difícil",
                    "texto": "Al lanzar un conjuro, el personaje puede optar por consumir 10 puntos de Zeon para que su hechizo sea proyectado directamente con una Habilidad Final de 120.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Muy Difícil",
                    "texto": "El personaje puede consumir 20 puntos de Zeon para que su hechizo sea proyectado directamente con una Habilidad Final de 140.",
                    "costoEsferas": 2
                },
                {
                    "nombreNivel": "Absurdo",
                    "texto": "El personaje puede consumir 40 puntos de Zeon para que su hechizo sea proyectado directamente con una Habilidad Final de 180.",
                    "costoEsferas": 3
                },
                {
                    "nombreNivel": "Casi Imposible",
                    "texto": "El personaje puede optar por consumir 60 puntos de Zeon para que su hechizo sea proyectado directamente con una Habilidad Final de 240.",
                    "costoEsferas": 4
                },
                {
                    "nombreNivel": "Imposible",
                    "texto": "El personaje puede optar por consumir 80 puntos de Zeon para que su hechizo sea proyectado directamente con una Habilidad Final de 280.",
                    "costoEsferas": 5
                },
                {
                    "nombreNivel": "Inhumano",
                    "texto": "El personaje puede optar por consumir 100 puntos de Zeon para que su hechizo sea proyectado directamente con una Habilidad Final de 320.",
                    "costoEsferas": 6
                },
                {
                    "nombreNivel": "Zen",
                    "texto": "El personaje puede optar por consumir 200 puntos de Zeon para que su hechizo sea proyectado directamente con una Habilidad Final de 440.",
                    "costoEsferas": 7
                }
            ],
            "limites": "La habilidad final determinada de este principio no admite modificadores especiales, y siempre emplea como resultado final el valor prefijado. De ese modo, un personaje no obtendría el bono de una Bendición o los de una Erudición Ofensiva.",
            "efectoVisualComun": "Cada nivel de dificultada tiene un efecto visual determinado, que suele representarse formando alas sobrenaturales en la espalda o en las manos del lanzador. Cuanto más elevada es la habilidad alcanzada, más alas se forman."
        }, "Potestas Archanum"),
        crearMetamagia({
            "nombre": "Explotación de la energía física",
            "requerimientoNivel": 3,
            "descripcion": "El personaje puede agotar su cuerpo para incrementar especialmente su velocidad de sus acumulaciones mágicas.",
            "efectosJuego": "Cuando el personaje gasta un punto de Cansancio con el objetivo de incrementar su ACT, obtiene un bono especial a su acumulación superior al +15 habitual. El valor exacto de dicho modificador depende del número de esferas dominadas.",
            "niveles": [
                {
                    "nombreNivel": "Inicial",
                    "texto": "El brujo obtiene un +25 al ACT por punto de Cansancio invertido.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "El brujo obtiene un +40 al ACT por punto de Cansancio invertido.",
                    "costoEsferas": 2
                }
            ],
            "efectoVisualComun": "Generalmente no hay ningún efecto visual en la ejecución de este principio."
        }, "Potestas Archanum"),
        crearMetamagia({
            "nombre": "Regeneración Zeónica Avanzada",
            "requerimientoNivel": 5,
            "descripcion": "El brujo puede sintonizar mejor su esencia con las energías sobrenaturales que le rodean, incrementando considerablemente su capacidad para recuperar sus reservas de Zeon.",
            "efectosJuego": "El mago incrementa su Regeneración zeonica base en la cantidad indicada por el número de esferas que posea. Este bono se suma antes de aplicar ninguna otro modificador adicional, como la Ventaja Regeneración superior de magia.",
            "niveles": [
                {
                    "nombreNivel": "Inicial",
                    "texto": "El personaje incrementa su Regeneración zeónica base 10 puntos.",
                    "costoEsferas": 1
                },
                {
                    "nombreNivel": "Intermedio",
                    "texto": "El personaje incrementa su Regeneración zeónica base 20 puntos.",
                    "costoEsferas": 2
                },
                {
                    "nombreNivel": "Arcano",
                    "texto": "El personaje incrementa su Regeneración zeónica base 30 puntos.",
                    "costoEsferas": 3
                }
            ],
            "efectoVisualComun": "Generalmente no hay ningún efecto visual en el uso de este principio.",
            "informacionAdicional": "Un personaje con ACT 40 y este principio en Nivel Intermedio (+20 a su Regeneración Zeónica) que además tuviera la ventaja Regeneración superior de magia en primer grado recuperaría 120 puntos de Zeon al día."
        }, "Potestas Archanum"),
        crearMetamagia({
            "nombre": "Elevación",
            "requerimientoNivel": 6,
            "descripcion": "El personaje puede entrar a voluntad en un estado de elevación espiritual para incrementar su ritmo de regeneración de magia.",
            "efectosJuego": "Mientras esté activando este principio el personaje permanece en un trance similar a un sueño, durante el cual aplica los mismos penalizadores perceptivos que si estuviera dormido (-200 a Advertir). Como beneficio, el tiempo que está en trance cuenta como el doble a la hora de contabilizar cuanto Zeon recupera. Es decir, medio día contaría como uno entero a la hora de determinar su regeneración zeónica. Salir de este estado de un modo abrupto tiene serias consecuencias; pierde la mitad de sus puntos de cansancio actuales o, en caso de ser una criatura incansable, aplica un penalizador a toda acción de -60 que se recupera a un ritmo de 5 por asalto. Tras salir de un estado de elevación espiritual, voluntaria o abruptamente, el personaje debe de esperar al menos un día antes de poder volver a entrar en él.",
            "efectoVisualComun": "Cada individuo usa este principio de diferentes maneras, pero por lo general, representa quedarse completamente inmóvil en una pose determinada. Aquellos que sean capaces de ver o sentir magia, pueden notar como su cuerpo atrae y absorbe la energía sobrenatural que hay en el ambiente."
        }, "Potestas Archanum"),
        crearMetamagia({
            "nombre": "Avatar",
            "requerimientoNivel": 9,
            "descripcion": "El archimago rompe las cadenas del mundo real para convertirse en un avatar de la propia magia; una crepitante masa de pura energía sobrenatural.",
            "efectosJuego": "El personaje se convierte en una criatura intangible que aplica las reglas de acumulación de Daño, sustituyendo sus PV actuales por sus puntos Zeon. Es decir, al recibir daños pierde puntos de Zeon, en lugar de PV. Mientras esté en este estado, también obtiene un bono de +50 a su ACT y un +20 a todas sus Resistencias (RF, RM, RP, RV, RE). Al activar Avatar el personaje que lo usa gasta la mitad los Puntos de Zeon que le quedan en su reserva de Zeon.",
            "limites": "Un personaje sólo puede permanecer en Avatar un número de asaltos equivalente a su atributo de Poder. Después, sale de dicho estado y, para volver a entrar, debe de volver a gastar la mitad de sus Puntos de Zeon actuales.",
            "efectoVisualComun": "El cuerpo del archimago estalla, exteriorizando una forma monstruosa hecha de pura magia. Tanto la apariencia como el color predominante dependen de la naturaleza y el alma del personaje, y puede ser cualquier cosa imaginable, desde un ser demoniaco hasta uno angelical. METAMAGISTER:"
        }, "Potestas Archanum"),
        crearMetamagia({
            "nombre": "Zeon Ilimitado",
            "requerimientoNivel": 10,
            "descripcion": "El absoluto control del Zeon del que goza el personaje le permite minimizar los gastos de sus conjuros de un modo extraordinario, lo que le permite prácticamente doblar sus reservas de energía sobrenatural.",
            "efectosJuego": "Cuando lanza un conjuro, el brujo gasta únicamente la mitad del Zeon total que cuesta dicho sortilegio. Es importante puntualizar que eso no significa que el personaje tenga que acumular la mitad de Zeon para ejecutar los conjuros. Sigue necesitando acumular su valor zeónico pleno; simplemente, en el momento de su ejecución sólo gasta la mitad. Es decir, incluso si acumulara 200 puntos de Zeon para lanzar un sortilegio, a la hora de lanzar dicho conjuro sólo costaría 100 puntos para él, recuperando automáticamente los otros 100 puntos en su reserva.",
            "efectoVisualComun": "No hay ningún efecto visual."
        }, "Potestas Archanum")
    ]
};

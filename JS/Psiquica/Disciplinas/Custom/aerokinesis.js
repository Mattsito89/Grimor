import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina Custom: Aerokinesis — Ad Astra (complemento fanmade)
export const disciplinaAerokinesis = crearDisciplinaPsiquica({
    "id": "aerokinesis",
    "nombre": "Aerokinesis",
    "color": "#94a3b8",
    "descripcion": "En esta disciplina, el psíquico obtiene la capacidad de controlar el aire, así como en cierta medida los rayos y las tormentas a su alrededor, siendo capaz de conjurarlas en altos grados o crear desastres como huracanes y torbellinos.",
    "modificador": "",
    "poderes": [
        {
            "id": "crear-brisa",
            "nombre": "Crear brisa",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "Concentrando sus matrices, el psíquico es capaz de presionar el aire de manera que este forme una corriente de aire que sale a una velocidad indicada por el nivel alcanzado. La longitud de la brisa será 10 veces su anchura.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "5 Km/h // 5 metros de ancho"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "10 Km/h // 10 metros de ancho"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "15 Km/h // 15 metros de ancho"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "20 Km/h // 25 metros de ancho"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "40 Km/h // 30 metros de ancho"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "60 Km/h // 50 metros de ancho"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "80 Km/h // 70 metros de ancho"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "100 Km/h // 100 metros de ancho"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "120 Km/h // 120 metros de ancho"
                }
            ]
        },
        {
            "id": "paso-ligero",
            "nombre": "Paso ligero",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "El mentalista imbuye con sus poderes psíquicos las plantas de sus pies, recubriéndolos y haciéndolos más livianos, otorgándole a cualquiera que trate de rastrearle un negativo en la secundaria de Rastrear equivalente al grado indicado. En grado avanzados otorga también un bono a acrobacias para calcular el daño por caídas.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "-20 en rastrear"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "-30 en rastrear"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "-40 en rastrear"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "-60 en rastrear // Obtiene la capacidad de correr por superficies sin que la gravedad le afecte"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Como el anterior, pero -70 en rastrear y obtiene un +40 a sus acrobacias para aterrizar."
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Como el anterior, pero -80 en rastrear y obtiene un +60 en acrobacias."
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Como el anterior, pero -100 en rastrear y +80 en acrobacias."
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Como el anterior, pero -120 en rastrear y +100 en acrobacias."
                }
            ]
        },
        {
            "id": "corte-de-viento",
            "nombre": "Corte de viento",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "El psíquico es capaz de concentrar una sólida ráfaga de aire, capaz de atravesar a sus enemigos. Ataca en la TA de FILo.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Daño 50"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Daño 60"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Daño 80"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Daño 100"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Daño 100 // 3m de ancho"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Daño 120 // 5m de ancho"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Daño 120 // 10m de ancho"
                }
            ]
        },
        {
            "id": "desplazar",
            "nombre": "Desplazar",
            "nivel": "1",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "Mediante la presión del aire que el psíquico ejerce, es capaz de mover objetos que no superen el peso indicado por el nivel de poder. Cabe resaltar que, aunque los desplace gracias a las corrientes de aire, estos no pueden flotar o volar de manera mística, sino que son empujados por la presión del aire. A efectos de juego, recibirán un impacto de fuerza determinado por el grado, aunque como máximo podrá desplazar cuerpos con un peso inferior al determinado por el grado alcanzado.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "10Kg // Impacto de fuerza 4"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "20Kg // Impacto de fuerza 6"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "40Kg // Impacto de fuerza 8"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "60Kg // Impacto de fuerza 10"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "120Kg // Impacto de fuerza 12"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "200Kg // Impacto de fuerza 14"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "300Kg // Impacto de fuerza 16"
                }
            ]
        },
        {
            "id": "control-aereo",
            "nombre": "Control aéreo",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "Controla la dirección, forma y el poder del viento de una zona. Puede modificarlo como este desee, aunque nunca superar la velocidad que esta tenía anteriormente. Si se utiliza sobre un ser basado en elemento de aire tendrá control sobre este en caso de fallar una RF indicada por el valor alcanzado.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "10m3 // 80 RF"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "25m3 // 100 RF"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "50m3 // 120 RF"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "100m3 // 140 RF"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "200m3 // 160 RF"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "275m3 // 180 RF"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "350m3 // 200 RF"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "500m3 // 240 RF"
                }
            ]
        },
        {
            "id": "fogonazo",
            "nombre": "Fogonazo",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "Manipulando las corrientes de aire, el mentalista comienza a generar estática, concentrándola en una nube y dándole una carga positiva y negativa que van saltando de un lado a otro, generando lentamente electricidad hasta que finalmente es liberada y un rayo es lanzado en contra del objetivo seleccionado. Ataca en la TA ELEctrica.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Daño 60"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Daño 80"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Daño 100"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Daño 120 // 5m de radio"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Daño 140 // 10m de radio"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Daño 200// 20m de radio"
                }
            ]
        },
        {
            "id": "nube-embudo",
            "nombre": "Nube embudo",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "Formando fuertes ráfagas de viento en la parte inferior del objetivo, una nube de alta densidad y viento controlado es capaz de elevar al personaje que esté situado en el epicentro de la misma, otorgándole la capacidad de controlarlo y poder volar místicamente.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 8"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Vuelo 8"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Vuelo 10"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Vuelo 12"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Vuelo 14"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Vuelo 16"
                }
            ]
        },
        {
            "id": "siroco",
            "nombre": "Siroco",
            "nivel": "2",
            "accion": "Activa",
            "mantenimiento": "No",
            "descripcion": "Acumulando ráfagas de aire afilado, crea un viento muy cálido y fuerte que es invisible a menos que se supere una tirada de advertir o de buscar contra el grado indicado. El ataque atraviesa TAs en función del grado alcanzado y ataca en la TA de FILo.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 8"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Daño 60 // 140 advertir o 80 buscar // -1 TA"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Daño 80 // 180 advertir o 120 buscar // -1 TA"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Daño 100 // 240 advertir o 140 buscar// -2 TA"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Daño 120 // 280 advertir o 180 buscar// -2 TA"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Daño 140 // 320 o 240 buscar// -3 TA"
                }
            ]
        },
        {
            "id": "propulsion",
            "nombre": "Propulsión",
            "nivel": "3",
            "accion": "Pasiva",
            "mantenimiento": "Sí",
            "descripcion": "El cuerpo del afectado se recubre con una ligera capa de viento invisible que constantemente está moviéndose a rápidas velocidades, aumentando muchísimo la velocidad del portador haciendo que este se vea impulsado y además no sufra fricción alguna, lo cual hace que pueda moverse a más distancia aún. En caso de superar los 200 de turno, el bono otorgado se reduce a la mitad.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 12"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 8"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "+80 al turno // +2 TM"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "+120 al turno // +3 TM"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "+140 al turno // +4 TM"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "+200 al turno // +6 TM"
                }
            ]
        },
        {
            "id": "impulsar-proyectil",
            "nombre": "Impulsar proyectil",
            "nivel": "3",
            "accion": "Pasiva",
            "mantenimiento": "No",
            "descripcion": "Acumulando una presión extremadamente alta el psíquico puede decidir cuándo liberarla en las cercanías de un proyectil para impulsarla, otorgándole muchísima más distancia a la vez que un bono a la tirada de ataque.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 12"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 8"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "+40 a la tirada // Duplica la distancia máxima del proyectil"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "+60 a la tirada // Triplica la distancia máxima del proyectil"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "+80 a la tirada // Triplica la distancia máxima del proyectil"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "+120 a la tirada // Cuadruplica la distancia máxima del proyectil"
                }
            ]
        },
        {
            "id": "huracan",
            "nombre": "Huracán",
            "nivel": "3",
            "accion": "Activa",
            "mantenimiento": "Sí",
            "descripcion": "El psíquico genera tempestuosos vientos que empiezan a formarse a partir de un núcleo, un centro desde le cual todo el aire a su alrededor comienza a azuza de forma violenta, rechazando a cualquiera que se encuentre en su paso y generando un enorme torbellino que arrasa con todo. Cualquier ente que entre en contacto con el torbellino o esté en su camino cuando este se desplace sufre automáticamente un impacto de fuerza indicada en el poder. Además de esto el huracán se desplaza a voluntad del mentalista con el TM y el área especificada. El ojo del huracán será el propio mentalista, quién se tendrá que desplazar junto con este o de otro modo se verá afectado también por su propio poder.",
            "efectos": [
                {
                    "dificultad": "Rutinario",
                    "resultado": "Fatiga 16"
                },
                {
                    "dificultad": "Fácil",
                    "resultado": "Fatiga 12"
                },
                {
                    "dificultad": "Medio",
                    "resultado": "Fatiga 8"
                },
                {
                    "dificultad": "Difícil",
                    "resultado": "Fatiga 6"
                },
                {
                    "dificultad": "Muy Difícil",
                    "resultado": "Fatiga 4"
                },
                {
                    "dificultad": "Absurdo",
                    "resultado": "Fatiga 2"
                },
                {
                    "dificultad": "Casi imposible",
                    "resultado": "Fatiga 1"
                },
                {
                    "dificultad": "Imposible",
                    "resultado": "Fuerza 14 // TM 10 // 25m de radio"
                },
                {
                    "dificultad": "Inhumano",
                    "resultado": "Fuerza 16 // TM 12 // 50m de radio"
                },
                {
                    "dificultad": "Zen",
                    "resultado": "Fuerza 18 // TM 14 // 100m de radio"
                }
            ]
        }
    ]
});

import { crearDisciplinaPsiquica } from "../disciplinaTemplate.js";

// Disciplina oficial: Piroquinesis
export const disciplinaPiroquinesis = crearDisciplinaPsiquica({
    id: "piroquinesis",
    nombre: "Piroquinesis",
    color: "#f97316",
    descripcion: "Esta disciplina permite al psíquico tener dominio sobre las altas temperaturas y el fuego. Puede controlar su forma o volverse inmune a los efectos del calor. Modificador: El entorno en el que se encuentre el psíquico aumenta o disminuye su potencial de la siguiente manera: Zona helada o ártico -30 Frío intenso -10 Ante una gran hoguera +10 Incendio de grandes proporciones +20 Volcán +30",
    modificador: "El entorno en el que se encuentre el psíquico aumenta o disminuye su potencial de la siguiente manera: Zona helada o ártico -30 Frío intenso -10 Ante una gran hoguera +10 Incendio de grandes proporciones +20 Volcán +30",
    poderes: [
        {
            id: "crear-fuego",
            nombre: "Crear fuego",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Crea intensidades de fuego o aumenta en la misma cantidad una llama ya existente. Si se produce sobre un cuerpo capaz de prender, no es necesario mantener el poder para que siga ardiendo. En caso contrario, el mantenimiento permite a la llama arder sin consumir nada, incluso en el aire (aunque no impide que sea apagada).",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Fácil",
                "resultado": "1 intensidad"
            },
            {
                "dificultad": "Medio",
                "resultado": "3 intensidades"
            },
            {
                "dificultad": "Difícil",
                "resultado": "5 Intensidades"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "7 intensidades"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "10 intensidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "13 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "16 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "20 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "25 intensidades"
            }
        ]
        },
        {
            id: "mitigar-fuego",
            nombre: "Mitigar fuego",
            nivel: "1",
            accion: "Activo",
            mantenimiento: "No",
            descripcion: "Disminuye varias intensidades de un fuego ya existente. Si se usa sobre un ser basado en calor, recibirá 5 puntos de daño por cada intensidad rebajada si no supera una RF (los seres con acumulación, reciben 25 puntos). Ten en cuenta que si un fuego no desaparece completamente, puede recobrar su potencia en el siguiente asalto.",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 1"
            },
            {
                "dificultad": "Fácil",
                "resultado": "-1 intensidad / 80 RF"
            },
            {
                "dificultad": "Medio",
                "resultado": "-3 intensidades / 100 RF"
            },
            {
                "dificultad": "Difícil",
                "resultado": "-5 intensidades / 120 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "-7 intensidades / 140 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "-10 intensidades / 160 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "-15 intensidades / 180 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "-20 intensidades / 200 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "-30 intensidades / 220 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "-40 intensidades / 260 RF"
            }
        ]
        },
        {
            id: "controlar-el-fuego",
            nombre: "Controlar el fuego",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Controla el crecimiento y el tamaño de un fuego que no tenga más de las intensidades indicadas por el nivel de poder alcanzado. Por ejemplo, el personaje puede dirigir el crecimiento de un incendio en un poblado hacia un lugar concreto, ignorando las cabañas que no quiere ver quemadas. También permite modelar la forma y el color de las llamas. Si se usa sobre un fuego con presencia propia o una criatura elemental, podrá evitarse este efecto superando una RF contra la dificultad indicada por el valor alcanzado.",
            efectos: [
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
                "resultado": "4 intensidades / 80 RF"
            },
            {
                "dificultad": "Difícil",
                "resultado": "6 intensidades / 100 RF"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "8 intensidades / 120 RF"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "12 intensidades / 140 RF"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "16 intensidades / 160 RF"
            },
            {
                "dificultad": "Imposible",
                "resultado": "20 intensidades / 180 RF"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "25 intensidades / 200 RF"
            },
            {
                "dificultad": "Zen",
                "resultado": "30 intensidades / 240 RF"
            }
        ]
        },
        {
            id: "inmolar",
            nombre: "Inmolar",
            nivel: "1",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "El psíquico provoca una explosión de fuego sobre una amplia zona, que causa un daño base variable. A todos los efectos, se trata de un ataque en la TA de Calor. No es posible seleccionar blancos en el interior del área, e incluso el propio psíquico puede ser afectado si no tiene cuidado cuando estalla. El ataque es perfectamente visible, incluso para individuos que no son capaces de percibir matrices, ya que habitualmente toma la forma de una bola de fuego.",
            efectos: [
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
                "resultado": "Daño 60 / 5 metros de radio"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Daño 80 / 10 metros de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Daño 100 / 20 metros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Daño 120 / 30 metros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Daño 150 / 50 metros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Daño 200 / 100 metros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "Daño 250 / 200 metros de radio"
            }
        ]
        },
        {
            id: "mantenimiento-gneo",
            nombre: "Mantenimiento ígneo",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Mantiene varias intensidades de fuego ardiendo sin que pueda apagarse. No existe ningún medio natural de extinguir un fuego mantenido de esa manera, incluso lanzando sobre él agua o arena. De hecho, ni siquiera necesita consumir ningún tipo de material para seguir ardiendo.",
            efectos: [
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
                "resultado": "5 intensidades"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "10 intensidades"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "15 intensidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "20 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "30 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "40 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "50 intensidades"
            }
        ]
        },
        {
            id: "inmunidad-al-fuego",
            nombre: "Inmunidad al fuego",
            nivel: "2",
            accion: "Pasiva",
            mantenimiento: "Sí",
            descripcion: "Permite al psíquico, o al individuo designado por este, ser inmune al efecto de varias intensidades de calor, incluso si se trata de uno de carácter sobrenatural. En el caso de que se reciba un ataque basado en fuego, cada intensidad a la que es inmune disminuye 5 puntos el daño base del ataque, y aumenta en +5 las Resistencias contra sus efectos.",
            efectos: [
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
                "resultado": "5 intensidades"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "10 intensidades"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "15 intensidades"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "20 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "30 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "40 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "50 intensidades"
            }
        ]
        },
        {
            id: "barrera-gnea",
            nombre: "Barrera ígnea",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Este poder crea una barrera de fuego en el lugar que el psíquico decida. Cualquiera que trate de atravesarla recibirá, de manera automática, un ataque con la habilidad de Proyección Psíquica de su creador. La agresión tiene un daño base variable y emplea la TA de Calor. La longitud máxima de la barrera depende la dificultad que se alcance, pero el psíquico puede darle la forma que desee. Al igual que la repulsión telequinética, no puede lanzarse directamente sobre los blancos.",
            efectos: [
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
                "resultado": "Daño base 60 / 5 metros de longitud"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Daño base 80 / 10 metros de longitud"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "Daño base 120 / 20 metros de longitud"
            },
            {
                "dificultad": "Imposible",
                "resultado": "Daño base 160 / 30 metros de longitud"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "Daño base 200 / 40 metros de longitud"
            },
            {
                "dificultad": "Zen",
                "resultado": "Daño base 240 / 50 metros de longitud"
            }
        ]
        },
        {
            id: "aumentar-temperatura-ambiental",
            nombre: "Aumentar temperatura ambiental",
            nivel: "2",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "El psíquico tiene control sobre la temperatura ambiental y puede aumentarla considerablemente en un amplio radio. Tanto la zona afectable como la cantidad de tempera ruta que se puede alterar depende de la dificultad alcanzada.",
            efectos: [
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
                "resultado": "+5ºC / 1 kilómetro de radio"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "+10ºC / 5 kilómetros de radio"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "+15ºC / 10 kilómetros de radio"
            },
            {
                "dificultad": "Imposible",
                "resultado": "+20ºC / 25 kilómetros de radio"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "+30ºC / 50 kilómetros de radio"
            },
            {
                "dificultad": "Zen",
                "resultado": "+40ºC / 100 kilómetros de radio"
            }
        ]
        },
        {
            id: "consumir",
            nombre: "Consumir",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "No",
            descripcion: "Hace arder internamente un cuerpo, consumiendo su sustancia y reduciéndolo a cenizas. No importa que se trate de cosas inorgánicas (como espadas, ropas, piedras...) o de seres vivos; nada material puede evitar ser destruido por esta habilidad. Si un personaje es afectado por ella, debe superar una RF para no ser consumido. En el caso de que no la supere, recibirá automáticamente el daño que indica la dificultad alcanzada. Si se trata de un ser con acumulación de daño, esta cantidad se multiplica por 5. No existe TA que proteja contra esta habilidad, ni siquiera la de calor, ya que afecta directamente al interior de los cuerpos. Si se lanza contra un objeto y no supera la Resistencia, es destruido directamente, salvo en el caso de los de calidad excepcional, que sólo pierden un grado.",
            efectos: [
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
                "resultado": "120 RF / Daño automático de 80"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "140 RF / Daño automático de 120"
            },
            {
                "dificultad": "Imposible",
                "resultado": "160 RF / Daño automático de 160"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "180 RF / Daño automático de 200"
            },
            {
                "dificultad": "Zen",
                "resultado": "220 RF / Daño automático de 250"
            }
        ]
        },
        {
            id: "nova",
            nombre: "Nova",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Esta disciplina permite al personaje consumir su propia energía vital para aumentar sus capacidades psíquicas. A términos de juego, puede intercambiar sus puntos de vida a cambio de conseguir un bono a su potencial. Cada punto que consuma, le permite aumentar dos su potencial psíquico durante ese asalto (en el caso de los seres con acumulación, se aplica a esta cantidad su Múltiplo de acumulación para determinar la cantidad de PV que tiene que invertir). La máxima cantidad de vida sacrificable por turno depende de la dificultad alcanzada, aunque naturalmente el personaje puede invertir menos PV si quiere. El daño sufrido se considera causado por fuego, y se regenera a la mitad de velocidad que las heridas convencionales, incluso mediante medios sobrenaturales y conjuros.",
            efectos: [
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
                "resultado": "10 puntos de vida"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "20 puntos de vida"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "30 puntos de vida"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "40 puntos de vida"
            },
            {
                "dificultad": "Imposible",
                "resultado": "60 puntos de vida"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "80 puntos de vida"
            },
            {
                "dificultad": "Zen",
                "resultado": "120 puntos de vida"
            }
        ]
        },
        {
            id: "fuego-mayor",
            nombre: "Fuego mayor",
            nivel: "3",
            accion: "Activa",
            mantenimiento: "Sí",
            descripcion: "Versión amplificada del poder de primer nivel de Crear fuego, que permite crear temperaturas y llamas mucho mayores del modo que indique el grado de dificultad alcanzado.",
            efectos: [
            {
                "dificultad": "Rutinario",
                "resultado": "Fatiga 20"
            },
            {
                "dificultad": "Fácil",
                "resultado": "Fatiga 16"
            },
            {
                "dificultad": "Medio",
                "resultado": "Fatiga 12"
            },
            {
                "dificultad": "Difícil",
                "resultado": "Fatiga 8"
            },
            {
                "dificultad": "Muy Difícil",
                "resultado": "Fatiga 6"
            },
            {
                "dificultad": "Absurdo",
                "resultado": "Fatiga 4"
            },
            {
                "dificultad": "Casi imposible",
                "resultado": "30 intensidades"
            },
            {
                "dificultad": "Imposible",
                "resultado": "40 intensidades"
            },
            {
                "dificultad": "Inhumano",
                "resultado": "50 intensidades"
            },
            {
                "dificultad": "Zen",
                "resultado": "60 intensidades CRIOQUINESIS Al contrario que la Piroquinesis, esta disciplina permite al psíquico controlar las bajas temperaturas y el hielo. Sus poderes pueden congelar a personas o disminuir la temperatura a cientos de metros de distancia. Modificador: Como en la Piroquinesis, el entorno aumenta o disminuye el potencial psíquico al usar esta disciplina, de la siguiente manera: Volcán -30 Incendio de grandes proporciones -10 Terreno frío y lluvioso +10 Frío intenso +20 Zona helada o ártico +30"
            }
        ]
        }
    ]
});

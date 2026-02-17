
import { Module, Resource, JourneyPoint } from '../types';

export const JOURNEY_POINTS: JourneyPoint[] = [
  {
    id: 1,
    name: "Ramsés",
    x: 11, y: 65,
    title: "La Partida (Egipto)",
    description: "Israel sale de Ramsés, en el Delta del Nilo, después de la décima plaga. Es el inicio de la redención física.",
    biblicalRef: "Éxodo 12:37"
  },
  {
    id: 2,
    name: "Mar Rojo",
    x: 12, y: 68,
    title: "El Paso del Mar",
    description: "Dios abre las aguas en la región de Suez. El evento fundacional donde el ejército egipcio es derrotado.",
    biblicalRef: "Éxodo 14"
  },
  {
    id: 3,
    name: "Mara y Elim",
    x: 36, y: 58,
    title: "Aguas Amargas y Oasis",
    description: "Costa este del Golfo de Suez. Dios sana las aguas en Mara y provee descanso en el oasis de Elim.",
    biblicalRef: "Éxodo 15:22-27"
  },
  {
    id: 4,
    name: "Desierto de Sin",
    x: 44, y: 70,
    title: "El Maná del Cielo",
    description: "Situado entre Elim y el Sinaí. Dios provee el Maná por primera vez ante la queja del pueblo.",
    biblicalRef: "Éxodo 16"
  },
  {
    id: 5,
    name: "Refidim",
    x: 52, y: 80,
    title: "Agua de la Roca",
    description: "Cerca del macizo montañoso. Moisés golpea la roca y Josué derrota a Amalec mientras Moisés ora.",
    biblicalRef: "Éxodo 17"
  },
  {
    id: 6,
    name: "Monte Sinaí",
    x: 58, y: 88,
    title: "La Entrega de la Ley",
    description: "En el corazón de la península. Dios desciende con fuego y entrega el Decálogo y el diseño del Tabernáculo.",
    biblicalRef: "Éxodo 19-20"
  },
  {
    id: 7,
    name: "Taberá",
    x: 64, y: 65,
    title: "Fuego de YHWH",
    description: "Ruta norte hacia Parán. El juicio de Dios cae sobre los quejosos en los bordes del campamento.",
    biblicalRef: "Números 11"
  },
  {
    id: 8,
    name: "Cades-barnea",
    x: 70, y: 45,
    title: "El Informe de los Espías",
    description: "Oasis estratégico al sur de Canaán. La incredulidad causa el castigo de 40 años en el desierto.",
    biblicalRef: "Números 13-14"
  },
  {
    id: 9,
    name: "Ezion-geber",
    x: 78, y: 62,
    title: "Peregrinaje del Desierto",
    description: "Puerto en el Golfo de Aqaba. Israel rodea la tierra de Edom durante décadas de disciplina.",
    biblicalRef: "Números 33:35"
  },
  {
    id: 10,
    name: "Monte Hor",
    x: 82, y: 48,
    title: "Muerte de Aarón",
    description: "En la frontera de Edom. Aarón el Sumo Sacerdote muere y entrega el cargo a su hijo Eleazar.",
    biblicalRef: "Números 20:22-29"
  },
  {
    id: 11,
    name: "Ar de Moab",
    x: 88, y: 32,
    title: "Serpiente de Bronce",
    description: "Subida por el este del Mar Muerto. Dios provee sanidad a través de la fe al mirar el bronce.",
    biblicalRef: "Números 21:4-9"
  },
  {
    id: 12,
    name: "Llanuras de Moab",
    x: 92, y: 22,
    title: "El Umbral del Jordán",
    description: "Frente a Jericó. Punto final del Pentateuco. Balaam bendice y Moisés da sus últimos discursos.",
    biblicalRef: "Números 22-36"
  }
];

export const RESOURCES: Resource[] = [];

export const MODULES: Module[] = [
  {
    id: "module4",
    title: "Módulo 4: Números - El Camino en el Desierto",
    lessons: [
      {
        id: "lesson9",
        title: "4.1 Cuando el Camino revela el Corazón",
        subtitle: "Introducción a Números y Diagnóstico Espiritual",
        duration: "20 min",
        icon: "fa-mountain-sun",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/2942c565-be22-49e3-8b27-5bded2abf106_rw_1920.jpg?h=42b7640f2fd65b8e6a26fc23ea1fd109",
        blocks: [
          { type: 'video', src: 'https://www.youtube.com/embed/7mU32Mgr9ys?si=9h4uracpOQFzIPJ9' },
          { type: 'heading', level: 2, text: 'Números: El Desierto como Antropología Espiritual' },
          { type: 'paragraph', text: '¿Qué sucede cuando Dios cumple su parte del pacto, pero el pueblo no está preparado para vivir a la altura de la promesa? El libro de Números se sitúa en un punto incómodo: entre la liberación y la herencia.' },
          { type: 'note', text: 'Números no es solo un registro de censos; es un diagnóstico espiritual que muestra cómo una comunidad puede estar objetivamente cerca de la promesa y, sin embargo, subjetivamente lejos de ella.' },
          { type: 'heading', level: 3, text: 'El Peligro de la Erosión Interna' },
          { type: 'paragraph', text: 'A diferencia de Génesis (origen) o Éxodo (liberación), en Números la fe se pone a prueba en el tiempo. El mayor peligro no es el enemigo externo, sino el olvido, la queja y la resistencia a confiar.' }
        ]
      },
      {
        id: "lesson10",
        title: "4.2 Repaso Secuencial y Marco Histórico",
        subtitle: "De la Promesa Patriarcal a la Santidad de Vida",
        duration: "35 min",
        icon: "fa-history",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/94e2183c-f5bb-4e22-a9fa-f8989157b430_rw_1920.jpg?h=a1d814568af0ef8f43b27103d0685e65",
        blocks: [
          { type: 'heading', level: 2, text: '1) Génesis: Promesa y Linaje' },
          { type: 'paragraph', text: 'Marco histórico: Los Patriarcas se sitúan aproximadamente entre el 2000 y 1700 a.C. Es fundamental entender que el libro de Génesis cubre siglos de historia, no una sola escena estática.' },
          { type: 'table', headers: ['Referencia', 'Concepto', 'Enfoque Teológico'], rows: [
            ['Génesis 12:1–3', 'Promesa Programática', 'Tierra, descendencia y bendición universal.'],
            ['Génesis 15:13–16', 'Profecía de Aflicción', 'Estancia de "400 años" como cifra teológica redondeada.'],
            ['Génesis 50:24–25', 'Memoria Futura', 'José asegura: "Dios ciertamente os visitará".']
          ]},
          { type: 'note', text: 'Nota académica: El problema clásico de los "400 vs 430 años" se resuelve al reconocer distintos modos de cómputo (redondeo profético vs. cifra cronológica exacta) y la complejidad de la transmisión textual.' },
          
          { type: 'heading', level: 2, text: '2) Éxodo: Liberación y Pacto' },
          { type: 'table', headers: ['Modelo', 'Fecha Aprox.', 'Defensores', 'Base Argumental'], rows: [
            ['Fecha Temprana', 'ca. 1446 a.C.', 'Yamauchi, Kitchen, Kaiser, Archer', '1 Reyes 6:1 (480 años hasta Salomón).'],
            ['Fecha Tardía', 'Siglo XIII a.C.', 'John Bright, Finkelstein, Dever', 'Toponimia ("Ramsés") y Ramsés II.']
          ]},
          { type: 'note', text: '📌 Nivel Maestría: Ninguna fecha invalida la estructura teológica del relato. La discusión es de carácter histórico, no doctrinal.' },

          { type: 'heading', level: 2, text: '3) Levítico: Santidad como Arquitectura de Vida' },
          { type: 'paragraph', text: 'Israel ya ha sido liberado; ahora debe aprender a convivir con la presencia de un Dios Santo en el centro de su campamento.' },
          
          { type: 'heading', level: 2, text: 'Trivia de Repaso: El Hilo del Pentateuco' },
          { type: 'quiz', 
            question: "¿Cuál es la promesa 'no negociable' que atraviesa todo el Pentateuco?", 
            options: [
              { text: "La construcción del Tabernáculo", isCorrect: false },
              { text: "La promesa de Dios a Abraham (Tierra, Descendencia, Bendición)", isCorrect: true },
              { text: "Las leyes sobre la lepra", isCorrect: false }
            ], 
            explanation: "Respuesta: La promesa de Dios a Abraham sostiene toda la historia, incluso cuando Israel fracasa bajo la ley." 
          },
          { type: 'quiz', 
            question: "¿Por qué el Éxodo convierte la salvación en un evento ritualizado (Pascua) y no solo en un recuerdo mental?", 
            options: [
              { text: "Porque la memoria humana es frágil y selectiva", isCorrect: true },
              { text: "Para mantener ocupados a los sacerdotes", isCorrect: false },
              { text: "Porque era una ley egipcia antigua", isCorrect: false }
            ], 
            explanation: "Respuesta: La Biblia entiende que la memoria frágil requiere actos pedagógicos. La salvación se inscribe en el cuerpo y el tiempo." 
          },
          { type: 'quiz', 
            question: "¿Qué problema teológico fundamental resuelve Levítico que Éxodo deja abierto?", 
            options: [
              { text: "Cómo cruzar el desierto sin brújula", isCorrect: false },
              { text: "Cómo un pueblo pecador puede convivir con un Dios santo sin ser destruido", isCorrect: true },
              { text: "Cómo organizar las doce tribus militarmente", isCorrect: false }
            ], 
            explanation: "Respuesta: Éxodo responde cómo Dios libera. Levítico responde cómo vivir con Él mediante el sacrificio y la santidad." 
          }
        ]
      },
      {
        id: "lesson11",
        title: "4.3 Del Orden al Ciclo de Rebelión",
        subtitle: "La Geografía de la Fe y la Disciplina del Desierto",
        duration: "45 min",
        icon: "fa-map-location-dot",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/e28b3219-2647-4cbe-93d0-880bf7b49e11_rw_1920.jpg?h=90eb9f80be26d2e5e76d28621406037c",
        blocks: [
          { type: 'heading', level: 2, text: 'Introducción a Números: Una Nación bajo Estrés' },
          { type: 'paragraph', text: 'Tema central: Una nación en formación bajo estrés. Pregunta guía: ¿Qué destruye más a un pueblo: un enemigo externo o un corazón dividido?' },
          
          { type: 'heading', level: 3, text: 'Estructura Macro del Libro' },
          { type: 'table', headers: ['Sección', 'Capítulos', 'Enfoque'], rows: [
            ['1. Organización en Sinaí', 'Núm 1–10', 'Preparación y orden sagrado.'],
            ['2. Ruptura en el camino', 'Núm 11–14', 'Crisis de fe y el informe de espías.'],
            ['3. Desierto largo', 'Núm 15–21', 'Disciplina, muerte de la vieja generación y provisión.'],
            ['4. Balaam y Balac', 'Núm 22–25', 'Intento de maldición y corrupción moral.'],
            ['5. Nueva generación', 'Núm 26–36', 'Preparación final para la entrada a la Tierra.']
          ]},

          { type: 'heading', level: 2, text: 'Trazos Geográficos: El Mapa Teológico' },
          { type: 'paragraph', text: 'Haz clic en cada etapa del viaje para explorar la geografía sagrada y su implicación teológica.' },
          { type: 'timeline', timelineItems: [
            { 
              year: "Fase 1", 
              title: "Egipto → Mar Rojo → Sinaí", 
              description: "El punto de partida de la redención y la consolidación del pacto.",
              biblicalCitation: "Éxodo / Levítico / Núm 1-10",
              detailedContent: "Israel llega al Sinaí y permanece allí aproximadamente un año. Este no es solo un lugar físico, es el 'laboratorio de santidad'. Aquí se recibe la Ley, se construye el Tabernáculo y se organiza el campamento. La estancia prolongada subraya que la libertad sin ley es anarquía, y la ley sin presencia es solo moralismo.",
              commentary: "El Sinaí representa la transición de una multitud de esclavos a una nación de sacerdotes. Es el lugar donde Dios 'desciende' para habitar formalmente con el hombre."
            },
            { 
              year: "Fase 2", 
              title: "Sinaí → Parán → Cades-barnea", 
              description: "El umbral de la promesa y el fracaso de la confianza.",
              biblicalCitation: "Núm 10–14",
              detailedContent: "Cades-barnea es geográficamente el 'salón de espera' de Canaán. Es el punto más cercano a la frontera sur. Desde aquí se envían los 12 espías. El informe mayoritario (10 de 12) no es un error de observación, sino una crisis de interpretación: vieron gigantes, pero olvidaron al Dios que venció a Egipto. El resultado: una sentencia de 40 años.",
              commentary: "Cades es el lugar donde la amnesia espiritual se convierte en rebelión política. Israel prefiere la seguridad de la esclavitud recordada a la aventura de la fe prometida."
            },
            { 
              year: "Fase 3", 
              title: "El Largo Desierto (Cades / Arabá / Edom)", 
              description: "38 años de disciplina, purificación y provisión ininterrumpida.",
              biblicalCitation: "Núm 15–21; Deut 1–2",
              detailedContent: "Esta es la etapa 'silenciosa'. El texto no narra el día a día, sino los eventos de crisis (Coré, Meribá). Geográficamente es un desplazamiento complejo por el Arabá y el entorno de Edom, evitando conflictos frontales y siguiendo la Nube. No son 'círculos' sin sentido, sino una caminata pedagógica hasta que la vieja generación 'increyente' sea consumida por el tiempo.",
              commentary: "El desierto no es un castigo vacío; es una purificación. Dios permite que el hombre viejo muera para que el hombre nuevo (la nueva generación) entre a la herencia."
            },
            { 
              year: "Fase 4", 
              title: "Rodeo por Edom → Llanuras de Moab", 
              description: "La marcha triunfal hacia la frontera final.",
              biblicalCitation: "Núm 20–36",
              detailedContent: "Israel debe rodear Edom al negárseles el paso. Avanzan hacia el norte por el lado oriental del Mar Muerto hasta llegar a las llanuras de Moab, frente a Jericó. Aquí ocurre el episodio de Balaam y el censo de la nueva generación. Están listos para el Jordán. La geografía aquí ya huele a tierra prometida, pero el peligro cambia: de la queja a la asimilación moral.",
              commentary: "Terminan frente al Jordán, en el límite exacto entre la promesa y la posesión. Aquí Moisés entrega sus últimos discursos (Deuteronomio)."
            }
          ]},

          { type: 'heading', level: 2, text: 'A) Fase de Orden: Dios no solo libera, Forma (Cap. 1-10)' },
          { type: 'accordion', items: [
            { title: '1. Ofrendas y Unidad (Núm 7)', content: 'Los líderes traen ofrendas iguales. No es relleno; es una liturgia de unidad tribal alrededor del culto común. Evita que cada tribu sea su propia religión.' },
            { title: '2. Luz y Continuidad (Núm 8:1-4)', content: 'Aarón orienta las lámparas. La luz comunica presencia y vigilancia. Conecta con la "memoria institucional": el culto sostiene la identidad.' },
            { title: '3. Mediación de los Levitas (Núm 8:5-26)', content: 'Un "cinturón de mediación" entre la santidad divina y la fragilidad comunitaria. Dios habita en medio, pero requiere orden.' },
            { title: '4. Memoria Litúrgica (Núm 9:1-14)', content: 'Celebración de la Pascua. Se abre una "segunda Pascua" para los impuros. Dios regula la memoria pero abre espacio para no excluir injustamente.' },
            { title: '5. Presencia Guiadora (Núm 9:15-23)', content: 'Nube de día, fuego de noche. No era un problema de GPS; era del corazón. Tenían guía, pero el corazón quería otra cosa.' },
            { title: '6. Trompetas de Plata (Núm 10:1-10)', content: 'Memorial delante de Dios. El sonido como memoria pública para convocar, marchar o alarmar en guerra.' }
          ]},

          { type: 'heading', level: 3, text: 'Pausa Interactiva: Nombres del Orden Sagrado' },
          { type: 'wordGame' },

          { type: 'heading', level: 2, text: 'B) Fase de Crisis: El Ciclo de Rebelión (Cap. 11-21)' },
          { type: 'accordion', items: [
            { title: '7. Codornices y Nostalgia (Núm 11)', content: 'Memoria falsa: recuerdan el menú, olvidan los látigos. Incredulidad que exige controlar a Dios. Dios provee 70 ancianos para aliviar a Moisés.' },
            { title: '8. Miriam y Aarón (Núm 12)', content: 'Tensión de liderazgo. Miriam queda leprosa por liderar la crítica. Aarón es preservado por su rol cultual, pero su suplicio valida la autoridad de Moisés.' },
            { title: '9. Rebelión de Coré (Núm 16-17)', content: 'Ataque a la estructura mediadora. La tierra traga a Datán y Abiram; fuego consume a los 250 hombres. Juicio severo para proteger la santidad del pueblo.' },
            { title: '10. La Vara que Florece (Núm 17)', content: 'Validación del sacerdocio mediante un signo de vida (almendras). Dios confirma y vigila su institución.' },
            { title: '11. Sostenimiento y Ética (Núm 18)', content: 'Levitas viven del diezmo. Principio: el culto requiere sostén comunitario.' },
            { title: '12. Meribá: El Error de Moisés (Núm 20)', content: 'Moisés golpea la roca con ira. Problema representacional: debía mostrar santidad/confianza, no fuerza humana. Se le prohíbe entrar a la tierra.' },
            { title: '13. Serpiente de Bronce (Núm 21)', content: 'Juicio y remedio. Mirar para vivir. Tipología neotestamentaria: la salvación viene por la obediencia confiada al remedio de Dios (Jn 3:14-15).' }
          ]},

          { type: 'note', text: '📌 Nivel Maestría - El Diezmo: El NT no ordena el "diezmo levítico" como ley mecánica (1 Co 9:13-14), pero retiene la ética del sostenimiento proporcional, voluntario y gozoso del ministerio (2 Co 9:6-8).' },

          { type: 'heading', level: 3, text: 'Síntesis: El Ciclo Completo' },
          { type: 'paragraph', text: 'El trayecto directo de Egipto a Canaán pudo ser corto. No fallaron por falta de información o de guía (la nube estaba allí), sino por amnesia espiritual y un corazón dividido.' }
        ]
      },
      {
        id: "lesson12",
        title: "4.4 Crisis de Autoridad y Fe",
        subtitle: "Conflictos de Liderazgo y el Juicio de la Desconfianza",
        duration: "30 min",
        icon: "fa-users-slash",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/015631a6-ad94-4409-99e1-3d9f51938ae2_rw_1920.jpg?h=fdde7ded77e62fff2ea73058d218794f",
        blocks: [
          { type: 'heading', level: 2, text: 'Miriam y la Singularidad de Moisés (Núm 12)' },
          { type: 'paragraph', text: 'El cuestionamiento al liderazgo de Moisés termina con el castigo de Miriam. Se subraya que Moisés es un profeta distinto: Dios habla con él "cara a cara".' },
          { type: 'heading', level: 3, text: 'La Rebelión de Coré (Núm 16-17)' },
          { type: 'paragraph', text: 'Un ataque a la estructura mediadora. La tierra traga a los rebeldes políticos (Datán y Abiram) y el fuego consume a los que ofrecían incienso ilegítimo.' },
          { type: 'note', text: 'Los hijos de Coré NO mueren (Núm 26:11). El juicio no es exterminio automático; de ellos nacerán los salmistas.' },
          { type: 'heading', level: 2, text: 'La Serpiente de Bronce (Núm 21)' },
          { type: 'paragraph', text: 'Un evento histórico con peso tipológico. La vida viene por la obediencia confiada al remedio provisto por Dios.' },
          { type: 'quiz', question: "¿Cuál fue el núcleo del problema de Moisés en Meribá al golpear la roca?", options: [
            { text: "No salió suficiente agua", isCorrect: false },
            { text: "No creyó para santificar a Dios ante el pueblo", isCorrect: true },
            { text: "Se le olvidó la vara", isCorrect: false }
          ], explanation: "Núm 20:12 indica que el pecado fue representacional: Moisés no reflejó la santidad y confianza en Dios." }
        ]
      },
      {
        id: "lesson13",
        title: "4.5 Balaam: Perfil Histórico–Teológico",
        subtitle: "El Vidente de Mesopotamia y la Doctrina de la Corrupción",
        duration: "45 min",
        icon: "fa-eye",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/7e385752-9cdc-4f01-a4d9-9fae629ab20a_rw_1920.jpg?h=365f26f0a794c2206685737d3de88f7d",
        blocks: [
          { type: 'heading', level: 2, text: '1) ¿Quién era Balaam y de dónde salió?' },
          { type: 'paragraph', text: 'Balaam aparece principalmente en Números 22–25; 31, y luego es reinterpretado en otros textos bíblicos.' },
          { type: 'list', items: [
            'Origen geográfico: Llamado desde Petor, junto al río (probablemente el Éufrates). Región de Mesopotamia septentrional.',
            'Identidad: Balaam no pertenece al pacto de Israel. Es un adivino/profeta profesional del mundo semita, reconocido por su eficacia.'
          ]},
          { type: 'heading', level: 2, text: '2) ¿Era Balaam un “falso profeta”?' },
          { type: 'paragraph', text: 'Balaam sí habla con YHWH (Núm 22:9, 18; 23:5). No inventa oráculos: cuando habla, dice lo que Dios le permite.' },
          { type: 'note', text: 'Punto clave: Su motivación es ambigua y finalmente corrupta. No es falso en el sentido de que Dios no le hable; es falso en el sentido de instrumentalizar lo sagrado.' },
          
          { type: 'heading', level: 2, text: '3) ¿Por qué Balac lo contrata?' },
          { type: 'paragraph', text: 'Números 22:6: “Sé que al que tú bendices, bendito es; y al que maldices, maldito.” La guerra en el Antiguo Cercano Oriente no era solo militar, era espiritual y ritual. Un especialista como Balaam era un arma estratégica.' },

          { type: 'heading', level: 2, text: '4) El conflicto central: Balaam no puede maldecir' },
          { type: 'paragraph', text: 'Números 22:12: “No maldecirás al pueblo, porque bendito es”. Cuatro oráculos poéticos (Núm 23-24) transforman cada intento de maldición en una bendición.' },
          { type: 'note', text: 'Teología central: La bendición abrahámica (Gén 12) es irreversible por magia, política o ritual. “¿Cómo maldeciré yo al que Dios no maldice?” (Núm 23:8)' },

          { type: 'heading', level: 2, text: '5) La burra y el ángel (Números 22:22–35)' },
          { type: 'paragraph', text: 'Este episodio no es folclore, tiene una función literaria y teológica:' },
          { type: 'list', items: [
            'Balaam, el “vidente”, no ve.',
            'El animal ve antes que él.',
            'Dios ridiculiza la pretensión de control espiritual.'
          ]},
          { type: 'note', text: 'Mensaje: El problema no es el don, es la ceguera moral.' },

          { type: 'heading', level: 2, text: '6) La profecía de la “estrella” (Números 24:17–19)' },
          { type: 'paragraph', text: '“Saldrá estrella de Jacob… se levantará cetro de Israel…”' },
          { type: 'table', headers: ['Nivel', 'Interpretación', 'Contexto'], rows: [
            ['Histórico', 'Monarquía davídica. David somete Moab y Edom.', '2 Samuel 8'],
            ['Mesiánico', 'Judaísmo posterior y Cristianismo primitivo: la esperanza del Mesías real.', 'Canón Biblico'],
          ]},
          { type: 'note', text: 'Nivel maestría: Balaam no controla el alcance de su profecía. El texto lo supera. Él habla mejor de lo que vive.' },

          { type: 'heading', level: 2, text: '7) El verdadero pecado de Balaam: Números 25' },
          { type: 'paragraph', text: 'Balaam no pudo destruir a Israel desde afuera, así que lo hizo desde adentro. “Por consejo de Balaam, los hijos de Israel prevaricaron...” (Núm 31:16).' },
          { type: 'note', text: 'Estrategia balaámica: Si no puedes romper la promesa, rompe la fidelidad del pueblo. Esto es crucial para entender Apocalipsis 2:14.' },

          { type: 'heading', level: 2, text: '8) Balaam en el resto de la Biblia' },
          { type: 'list', items: [
            'AT: Josué 13:22 (Balaam muere como adivino).',
            'NT: 2 Pedro 2:15–16 (Amor al lucro religioso).',
            'NT: Judas 11 (Codicia disfrazada de espiritualidad).',
            'NT: Apocalipsis 2:14 (“Doctrina de Balaam”).'
          ]},
          { type: 'note', text: 'Balaam se convierte en tipo: fe instrumental, espiritualidad negociable y acomodación ética.' },

          { type: 'heading', level: 2, text: '9) Testimonio extrabíblico: Deir ‘Alla' },
          { type: 'paragraph', text: 'Inscripción hallada en Jordania (siglo VIII a.C.) que menciona a “Balaam hijo de Beor” como vidente famoso.' },
          { type: 'note', text: 'Dato académico: Confirma que Balaam existía en la memoria cultural fuera de la Biblia. No es invención tardía; es figura conocida del mundo semita.' },

          { type: 'heading', level: 2, text: '10) ¿Qué enseñó Balaam? (La Advertencia)' },
          { type: 'paragraph', text: 'Su “doctrina” consiste en: 1. Separar palabra correcta de vida corrupta. 2. Usar a Dios sin someterse a Él. 3. Convertir la gracia en permiso.' },
          
          { type: 'heading', level: 2, text: '11) Síntesis teológica' },
          { type: 'list', items: [
            'Balaam muestra que revelación no equivale a transformación.',
            'Dios puede hablar incluso por medio de agentes moralmente ambiguos.',
            'El mayor peligro no siempre es la persecución, sino la acomodación moral.',
            'El pecado más destructivo es el que se disfraza de consejo “sabio”.'
          ]}
        ]
      },
      {
        id: "lesson14",
        title: "4.6 Bonus y Cierre",
        subtitle: "Frases de Memoria y Conclusión Teológica del Módulo",
        duration: "15 min",
        icon: "fa-star",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/de67de38-cfa1-48bc-936b-b55c659379f8_rw_1920.jpg?h=19615d3882dca935913d783ae2cd27d9",
        blocks: [
          { type: 'heading', level: 2, text: 'Bonus: Frases Recurrentes en Números' },
          { type: 'accordion', items: [
            { title: 'Del Pueblo: "¿Por qué nos sacaste de Egipto?"', content: 'La liberación reinterpretada como un error. Nostalgia de la esclavitud y memoria selectiva.' },
            { title: 'De Moisés: "¿Acaso concebí yo a este pueblo?"', content: 'Liderazgo honesto que reconoce que el pueblo le pertenece a Dios, no al líder. Expresión de agotamiento humano ante la rebelión.' },
            { title: 'De Dios: "No me han creído"', content: 'El núcleo del problema: no es una conducta aislada, es incredulidad persistente a pesar de las señales.' }
          ]},
          { type: 'heading', level: 2, text: 'Síntesis Teológica del Módulo' },
          { type: 'paragraph', text: 'El trayecto directo de Egipto a Canaán pudo ser mucho más corto… no fue un problema de GPS; fue un problema del corazón. Israel tenía la nube y el fuego, pero su mirada seguía anclada en el pasado.' },
          { type: 'note', text: 'Balaam no negó a Dios; lo administró. Y ese es el tipo de advertencia que Jesús retoma en Apocalipsis: la tentación de usar lo sagrado para fines profanos.' },
          { type: 'heading', level: 3, text: 'Cierre del Módulo 4' },
          { type: 'paragraph', text: 'Hemos visto cómo Dios forma una nación bajo estrés. A pesar de las fallas, la fidelidad de Dios garantiza que la promesa de Abraham seguirá adelante con la nueva generación.' }
        ]
      }
    ]
  }
];

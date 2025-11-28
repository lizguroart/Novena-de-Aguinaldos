"use client";

import { useState } from "react";

// --- SECCIONES PRINCIPALES ---

const SECTIONS = [
  { id: "intro", title: "Oración para todos los días", icon: "/paso_1.png" },
  { id: "day", title: "Consideración del día", icon: "/paso_2.png" },
  { id: "virgin", title: "Oración a la Virgen", icon: "/paso_3.png" },
  { id: "joseph", title: "Oración a San José", icon: "/paso_4.png" },
  { id: "joys", title: "Gozos", icon: "/paso_5.png" },
  { id: "baby", title: "Oración al Niño Jesús", icon: "/paso_6.png" },
  { id: "villancicos", title: "Villancicos", icon: "/paso_7.png" },
];

// --- TEXTOS ---

const PRAYERS = {
  intro:{ 
    text: "Benignísimo Dios de infinita caridad, que tanto amasteis a los hombres, que les disteis en vuestro Hijo la mejor prenda de vuestro amor, para que hecho hombre en las entrañas de una Virgen, naciese en un pesebre para nuestra salud y remedio; yo, en nombre de todos los mortales, os doy infinitas gracias por tan soberano beneficio."  + "\n\n" + 
    "En retorno de él, os ofrezco la pobreza, humildad y demás virtudes de vuestro Hijo humanado, suplicándoos por sus divinos méritos, por las incomodidades con que nació y por las tiernas lágrimas que derramó en su pesebre, que dispongáis nuestros corazones con humildad profunda, con amor encendido, con tal desprecio de todo lo terreno, para que Jesús recién nacido tenga en ellos su cuna y more eternamente." + "\n\n" +  "Amén.",
    footer: "Se reza tres veces el Gloria al Padre",
  },
  virgin:{ 
    text: "Soberana María, que por vuestras grandes virtudes y especialmente por vuestra humildad, merecisteis que todo un Dios os escogiese por madre suya, os suplico que vos misma preparéis y dispongáis mi alma, y la de todos los que en este tiempo hiciesen esta novena, para el nacimiento espiritual de vuestro adorado Hijo."+ "\n\n" + "¡Oh dulcísima madre!, comunicadme algo del profundo recogimiento y divina ternura con que lo aguardasteis vos, para que nos hagáis menos indignos de verle, amarle y adorarle por toda la eternidad." + "\n\n" + " Amén.",
    footer: "Se reza tres veces el Ave María",
  },
  joseph:{ 
    text:"¡Oh santísimo José, esposo de María y padre putativo de Jesús! Infinitas gracias doy a Dios porque os escogió para tan altos ministerios y os adornó con todos los dones proporcionados a tan excelente grandeza." + "\n\n" + "Os ruego, por el amor que tuvisteis al Divino Niño, me abracéis en fervorosos deseos de verle y recibirle sacramentalmente, mientras le veo y le gozo en el cielo." + "\n\n" + " Amén.",
    footer: "Se reza Padre Nuestro, Ave María y Gloria al Padre",
  },
  baby:{
    text:"Acordaos, ¡oh dulcísimo Niño Jesús!, que dijisteis a la venerable Margarita del Santísimo Sacramento, y en persona suya a todos vuestros devotos, estas palabras tan consoladoras para nuestra pobre humanidad agobiada y doliente." + "\n\n" + " Todo lo que queráis pedir, pedidlo por los méritos de mi infancia y nada os será negado." + "\n\n" + "Llenos de confianza en vos, ¡oh Jesús!, que sois la misma verdad, venimos a exponeros toda nuestra miseria." + "\n\n" + "Ayúdanos a llevar una vida santa, para conseguir una eternidad bienaventurada." + "\n\n" + "Concédenos, por los méritos infinitos de vuestra encarnación y de vuestra infancia, la gracia de la cual necesitamos tanto." + "\n\n" + "Amén.",
    footer: "",
  },
} as const;

const DAILY_REFLECTIONS = [
  {
    day: 16,
    title: "Día Primero",
    content:
      "En el principio de los tiempos el Verbo reposaba en el seno de su Padre en lo más alto de los cielos; allí era la causa, a la par que el modelo de toda la creación." + "\n\n" + "En esas profundidades de una incalculable eternidad permanecía el Niño de Belén antes de que se dignara bajar a la tierra y tomar visiblemente posesión de la gruta de Belén." + "\n\n" + "Allí es donde debemos buscar sus principios que jamás han comenzado; de allí debemos datar la genealogía de lo eterno, que no tiene antepasados, y contemplar la vida de complacencia infinita que allí llevaba." + "\n\n" + "La vida del Verbo Eterno en el seno de su Padre era una vida maravillosa; y sin embargo, misterio sublime, busca otra morada, una mansión creada." + "\n\n" + "No era porque en su mansión eterna faltase algo a su infinita felicidad, sino porque su misericordia infinita anhelaba la redención y la salvación del género humano, que sin Él no podría verificarse." + "\n\n" + "El pecado de Adán había ofendido a un Dios y esa ofensa infinita no podría ser condonada sino por los méritos del mismo Dios." + "\n\n" + "La raza de Adán había desobedecido y merecido un castigo eterno; era, pues, necesario para salvarla y satisfacer su culpa, que Dios, sin dejar el cielo, tomase la forma del hombre sobre la tierra y con la obediencia a los designios de su Padre, expiase aquella desobediencia,ingratitud y rebeldía." + "\n\n" + "Era necesario en las miras de su amor,que tomase la orma, las debilidades e ignorancia inconcientes de la infancia, para expiar las debilidades e ignorancia sistemáticas del hombre; que creciese para darle crecimiento espiritual; que sufriese, para enseñarle a morir a sus pasiones y a su orgullo y por eso el Verbo Eterno ardiendo en deseos de salvar al hombre resolvió hacerse hombre también y así redimir al culpable."
      },
  {
    day: 17,
    title: "Día Segundo",
    content:
      "El Verbo Eterno se halla a punto de tomar su naturaleza creada en la santa casa de Nazaret, en donde moraban María y José." + "\n\n" + "Cuando la sombra del secreto divino vino a deslizarse sobre ella, María estaba sola y engolfada en la oración." + "\n\n" + " Pasaba las silenciosas horas de la noche en la unión más estrecha con Dios y mientras oraba, el Verbo tomó posesión de su morada creada." + "\n\n" + " Sin embargo, no llegó inopinadamente; antes de presentarse, envió un mensajero que fue el Arcángel San Gabriel, para pedir a María de parte de Dios su consentimiento para la encarnación." + "\n\n" + " El Creador no quiso efectuar este gran misterio sin la aquiescencia de su criatura. " + "\n\n" + "Aquel momento fue muy solemne: era potestativo en María el rehusar… con qué adorables delicias, con qué inefable complacencia aguardaría la Santísima Trinidad a que María abriese los labios y pronunciase el fiat que debió de ser suave melodía para sus oídos, y con el cual se conformaba su profunda humildad a la omnipotente voluntad divina." + "\n\n" + " La Virgen inmaculada ha dado su asentimiento. El Arcángel ha desaparecido. " + "\n\n" + " Dios se ha revestido de una naturaleza creada; la voluntad eterna está cumplida y la creación completa. " + "\n\n" + " En las regiones del mundo angélico estallaba un júbilo inmenso, pero la Virgen María ni lo oía, ni hubiera prestado atención a él." + "\n\n" + " Tenía inclinada la cabeza y su alma estaba sumida en un silencio que se asemejaba al de Dios." + "\n\n" + " El Verbo se había hecho carne y aunque todavía invisible para el mundo, habitaba ya entre los hombres a quienes su inmenso amor había venido a rescatar." + "\n\n" + " No era ya sólo el Verbo Eterno, era el Niño Jesús, revestido de la apariencia humana y justificando ya el elogio que de Él han hecho todas las generaciones al llamarle: el máshermoso de los hijos de los hombres. ",
  },
  { 
    day: 18, 
    title: "Día Tercero", 
    content: "Así había comenzado su vida encarnada el Niño Jesús." + "\n\n" + " Consideremos el alma gloriosa y el santo cuerpo que había tomado, adorándolos profundamente." + "\n\n" + " Admirando en primer lugar el alma de ese divino Niño,consideremos en ella la plenitud de su gracia santificadora, la de su ciencia beatífica y por la cual, desde el primer momento de su vida vio la divina Esencia más claramente que todos los ángeles y leyó lo pasado y lo porvenir con todos sus arcanos conocimientos." + "\n\n" + " No supo nunca por adquisición voluntaria nada que no supiese por infusión desde el primer momento de su ser; pero Él adoptó todas las enfermedades de nuestra naturaleza a que dignamente podía someterse aún cuando no fuesen necesarias para la grande obra que debía cumplir." + "\n\n" + " Pidámosle que sus divinas facultades suplan la debilidad de las nuestras y les dé nueva energía; que su memoria nos enseñe a recordar sus beneficios; su entendimiento a pensar en Él, a no hacer sino su voluntad, lo que Él quiere y en servicio suyo." + "\n\n" + " Del alma del Niño Jesús pasemos ahora a su cuerpo, que era un mundo de maravillas, una obra maestra de la mano de Dios." + "\n\n" + " No era, como el nuestro, una traba para el alma, era, por el contrario, un nuevo elemento de santidad." + "\n\n" + " Quiso que fuese pequeño y débil como el de todos los niños y sujeto a todas las incomodidades de la infancia, para asemejarse más a nosotros y participar en nuestras humillaciones." + "\n\n" + " El Espíritu Santo formó ese cuerpecito con tal delicadeza y tal capacidad de sentir, que pudiese sufrir hasta el exceso para cumplir la grande obra de nuestra Redención." + "\n\n" + " La belleza de ese cuerpo del Divino Niño fue superior a cuanto se ha imaginado jamás; y la divina sangre que por sus venas empezó a circular desde el momento de su Encarnación, es la que lava todas las manchas del mundo culpable." + "\n\n" + " Pidámosle que lave las nuestras en el sacramento de la penitencia, para que el día de su dichosa Navidad nos encuentre purificados perdonados y dispuestos a recibirle con amor y provecho espiritual. " 
  },
  { 
    day: 19, 
    title: "Día Cuarto", 
    content: "Desde el seno de su Madre comenzó el Niño Jesús a poner en práctica su eterna sumisión a Dios, que continuó sin la menor interrupción durante toda su vida." + "\n\n" + "Adoraba a su Eterno Padre, le amaba, se sometía a su voluntad; aceptaba con resignación el estado en que se hallaba, conociendo toda su debilidad, toda su humillación, todas sus incomodidades." + "\n\n" + " ¿Quién de nosotros quisiera retroceder a un estado semejante con el pleno goce de la razón y de la reflexión? ¿Quién pudiera sostener a sabiendas un martirio tan prolongado, tan penoso de todas maneras? " + "\n\n" + "Por ahí entró el Divino Niño en su dolorosa y humillante carrera; así empezó a anonadarse delante de su Padre; a enseñarnos lo que Dios merece por parte de su criatura; a expiar nuestro orgullo, origen de todos nuestros pecados y hacernos sentir toda la criminalidad y el desorden de este orgullo. " + "\n\n" + " ¿Deseamos hacer una verdadera oración? Empecemos por formarnos de ella una exacta idea, contemplando al Niño en el seno de su Madre. El Divino Niño ora del modo más excelente. " + "\n\n" + "No habla, no medita, ni se deshace en tiernos afectos. Su mismo estado, aceptado con la intención de honrar a Dios en su oración: y en ese estado expresa altamente todo lo que Dios merece, y de qué modo quiere ser adorado por nosotros." + "\n\n" + " Unámonos a las adoraciones del Niño Dios en el seno de María; unámonos a su profundo abatimiento, y sea éste el primer efecto de nuestro sacrificio a Dios, no para ser algo como lo pretende continuamente nuestra vanidad, sino para ser nada, para quedar eternamente consumidos y anonadados, para renunciar a la estimación de nosotros mismos, a todo cuidado de nuestra grandeza, aunque sea espiritual; a todo movimiento de vanagloria. Desaparezcamos a nuestros propios ojos, y que Dios sólo sea todo para nosotros." 
  },
  { 
    day: 20, 
    title: "Día Quinto", 
    content: "Ya hemos visto la vida que llevaba el Niño Jesús en el seno de su purísima Madre; veamos hoy también la vida que llevaba también María, durante el mismo espacio de tiempo." + "\n\n" + " Necesidad hay de que nos detengamos en ella si queremos comprender, en cuanto es posible a nuestra limitada capacidad, los sublimes misterios de la Encarnación y el modo como hemos de corresponder a ellos." + "\n\n" + " María no cesaba de suspirar por el momento en que gozaría de esa visión beatífica terrestre: la faz de Dios encarnado." + "\n\n" + " Estaba a punto de ver aquella faz humana que debía iluminar el cielo durante toda la eternidad. Iba a leer el amor filial en aquellos mismos ojos cuyos rayos debían esparcir para siempre la felicidad en millones de elegidos." + "\n\n" + " Iba a ver aquel rostro todos los días, a todas horas, cada instante durante muchos años. Iba a verle en la ignorancia aparente de la infancia, en los encantos particulares de la juventud y en la serenidad reflexiva de la edad madura." + "\n\n" + " Haría todo lo que quisiese de aquella faz divina: podría estrecharla contra la suya con toda la libertad del amor materno; cubrir de besos los labios que debían pronunciar la sentencia a todos los hombres; contemplarla a su gusto durante su sueño o despierto hasta que la hubiese aprendido de memoria. ¡Cuán ardientemente deseaba ese día!" + "\n\n" + " ¡Tal era la vida de expectativa de María! Era inaudita en sí misma, más no por eso dejaba de ser el tipo magnífico de toda vida cristiana." + "\n\n" + " No nos contentemos con admirar a Jesús residiendo en María, sino que pensemos que en nosotros también reside por esencia, potencia y presencia." + "\n\n" + " Si Jesús nace continuamente en nosotros y de nosotros por las buenas obras que nos hacen capaces de cumplir, y por nuestra cooperación a la gracia; por manera que el alma del que se halla en gracia es un seno perpetuo de María, un Belén interior sin fin." + "\n\n" + " Después de la comunión, Jesús habita en nosotros, durante algunos instantes, real y sustancialmente como Dios y como hombre, porque el mismo Niño que estaba en María está también en el Santísimo Sacramento." + "\n\n" + " ¿Qué es todo eso sino una participación de la vida de María durante esos maravillosos meses y una expectativa tan llena de delicias como la suya?" 
  },
  { 
    day: 21, 
    title: "Día Sexto", 
    content: "Jesús había sido concebido en Nazaret, domicilio de José y María, y allí era de creerse que había de nacer, según todas las probabilidades." + "\n\n" + "Más Dios lo tenía dispuesto de otra manera y los profetas habían anunciado que el Mesías nacería en Belén de Judá, ciudad de David." + "\n\n" + "Para que se cumpliera esta predicción, Dios se sirvió de un medio que no parecía tener ninguna relación con este objeto, a saber: la orden dada por el emperador Augusto de que todos los súbditos del imperio romano se empadronasen en el lugar de donde eran originarios." + "\n\n" + "María y José, como descendientes que eran de David, no estaban dispensados de ir a Belén; y ni la situación de la Virgen Santísima, ni la necesidad en que estaba José del trabajo diario que le aseguraba la subsistencia, pudo eximirles de este largo y penoso viaje, en la estación más rigurosa e incómoda del año." + "\n\n" + " No ignoraba Jesús en qué lugar debía nacer, e inspira a sus padres que se entreguen a la Providencia, y que de esta manera concurran inconcientemente a la ejecución de sus designios." + "\n\n" + " Almas interiores: observad este manejo del Divino Niño, porque es el más importante de la vida espiritual: aprended que quien se haya entregado a Dios ya no ha de pertenecerse a sí mismo, ni ha de querer a cada instante sino lo que Dios quiera para él, siguiéndole ciegamente aún en las cosas exteriores, tales como el cambio de lugar donde quiera que le plazca conducirle." + "\n\n" + " Ocasión tendréis de observar esta dependencia y esta fidelidad inviolable en toda la vida de Jesucristo y este es el punto sobre el cual se han esmerado en imitarle los santos y las almas verdaderamente interiores, renunciando absolutamente a su propia voluntad." 
  },
  { 
    day: 22, 
    title: "Día Séptimo", 
    content: "Representémonos el viaje de María y José hacia Belén, llevando consigo, aún no nacido, al creador del Universo, hecho hombre." + "\n\n" + "Contemplemos la humildad y la obediencia de ese Divino Niño, que aunque de raza judía y habiendo amado durante siglos a su pueblo con una predilección inexplicable obedece así a un príncipe extranjero que forma el censo de población de su provincia, como si hubiese para él en esa circunstancia algo que le halagase, y quisiese apresurarse a aprovechar la ocasión de hacerse empadronar oficial y auténticamente como súbdito en el momento en que venía al mundo." + "\n\n" + " ¿No es extraño que la humillación, que causa tan invencible repugnancia a la criatura, parezca ser la única cosa creada que tenga atractivos para el Creador? ¿No nos enseñará la humildad de Jesús a amar esa hermosa virtud? " + "\n\n" + "¡Ah! Que llegue el momento en que aparezca el deseado de las naciones, porque todo clama por ese feliz acontecimiento. El mundo sumido en la oscuridad y en el malestar, buscando y no encontrando el alivio de sus males, suspira por su libertador." + "\n\n" + "El anhelo de José y la expectativa de María, son cosas que no pueden explicar el lenguaje humano." + "\n\n" + "El Padre Eterno se halla, si nos es lícito emplear esta expresión, adorablemente impaciente por dar a su hijo único al mundo y verle ocupar su puesto entre las criaturas visibles." + "\n\n" + "El Espíritu Santo arde en deseos de presentar a la luz del día esa santa humanidad tan bella y que Él mismo ha formado con tan especial y divino esmero. En cuanto al Divino Niño, objeto de tantos anhelos, recordemos que hacia nosotros avanza lo mismo que hacia Belén." + "\n\n" + "Apresuremos con nuestro deseo el momento de su llegada; purifiquemos nuestras almas para que sean su mística morada y nuestros corazones para que sean su mansión terrenal; que nuestros actos de mortificación y desprendimiento “preparen los caminos del Señor y hagan rectos sus senderos”" 
  },
  { 
    day: 23, 
    title: "Día Octavo", 
    content: "Llegan a Belén José y María, buscando hospedaje en los mesones; pero no lo encuentran, ya por hallarse todos ocupados, ya porque se les desechase a causa de su pobreza." + "\n\n" + "Empero, nada puede turbar la paz interior de los que están fijos en Dios." + "\n\n" + "Si José experimentaba tristeza cuando era rechazado de casa en casa, porque pensaba en María y en el Niño, sonreíase también con santa tranquilidad cuando fijaba la mirada en su casta esposa." + "\n\n" + "El Niño, aún no nacido, regocijábase de aquellas negativas, que eran el preludio de sus humillaciones venideras." + "\n\n" + "Cada voz áspera, el ruido de cada puerta que se cerraba ante ellos, era una dulce melodía para sus oídos. Eso era lo que había venido a buscar." + "\n\n" + "El deseo de esas humillaciones era lo que había contribuido a hacerle tomar la forma humana." + "\n\n" + "¡Oh Divino Niño de Belén! Esos días que tantos han pasado en fiestas y diversiones o descansando muellemente en cómodas y ricas mansiones, han sido para vuestros padres un día de fatiga y vejaciones de toda clase." + "\n\n" + "¡Ay! el espíritu de Belén es el de un mundo que ha olvidado a Dios. ¿Cuántas veces no ha sido también el nuestro? ¿No cerramos continuamente con ruda ignorancia la puerta a los llamamientos de Dios que nos solicita a convertirnos, o a santificarnos o a conformarnos con su voluntad? ¿No hacemos mal uso de nuestras penas, desconociendo su carácter celestial, aunque cada uno a su modo lo lleva grabado en sí? Dios viene a nosotros muchas veces en la vida, pero no conocemos su faz. No le conocemos sino cuando nos vuelve la espalda y se aleja después de nuestra negativa." + "\n\n" + "Pónese el sol del 24 de diciembre detrás de los tejados de Belén y sus últimos rayos doran la cima de las rocas escarpadas que le rodean." + "\n\n" + "Hombres groseros codean rudamente al Señor en las calles de aquella aldea oriental y cierran sus puertas al ver a su Madre. La bóveda de los cielos aparece purpurina por encima de aquellas colinas frecuentadas por los pastores." + "\n\n" + "Las estrellas van apareciendo una tras otra. Algunas horas más y aparecerá el Verbo Eterno." 
  },
  { 
    day: 24, 
    title: "Día Noveno", 
    content: "La noche ha cerrado del todo en las campiñas de Belén" + "\n\n" + "Desechados por los hombres y viéndose sin abrigo, María y José han salido de la inhospitalaria población y se han refugiado en una gruta que se encontraba al pié de la colina." + "\n\n" + "Seguía a la Reina de los ángeles el jumento que les había servido de humilde cabalgadura durante el viaje y en aquella cueva hallaron un manso buey, dejado allí probablemente por alguno de los caminantes que habían ido a buscar hospedaje en la ciudad." + "\n\n" + "El Divino Niño, desconocido por sus criaturas racionales, va a tener que acudir a las irracionales para que calienten con su tibio aliento la atmósfera helada de esa noche de invierno y le manifiesten con esto su humilde actitud, el respeto y la adoración que le había negado Belén." + "\n\n" + " La rojiza linterna que José tenía en la mano iluminaba tenuemente ese pobrísimo recinto, ese pesebre lleno de paja, que es figura profética de las maravillas del altar y de la íntima y prodigiosa unión eucarística que Jesús ha de contraer con los hombres." + "\n\n" + "María está en adoración en medio de la gruta, y así van pasando silenciosamente las horas de esa noche llena de misterio." + "\n\n" + "Pero ha llegado la media noche y de repente vemos dentro de ese pesebre poco antes vacío, al Divino Niño esperado, vaticinado, deseado durante cuatro mil años con tan inefables anhelos." + "\n\n" + " A sus pies se postra su Santísima Madre en los transportes de una adoración de la cual nada puede dar idea. José también se le acerca y le rinde el homenaje con que inaugura su misterioso e imponderable oficio de padre putativo del Redentor de los hombres." + "\n\n" + "La multitud de ángeles que descienden del cielo a contemplar esa maravilla sin par, deja estallar su alegría y hace vibrar en los aires las armonías de ese Gloria in excelsis, que es el eco de adoración que se produce en torno del trono del Altísimo, hecha perceptible por un instante a los oídos de la pobre tierra." + "\n\n" + " Convocados por ellos, vienen en tropel los pastores de la comarca a adorar al “recién nacido” y a presentarle sus humildes ofrendas." + "\n\n" + "Ya brilla en Oriente la misteriosa estrella de Jacob; y ya se pone en marcha hacia Belén la caravana espléndida de los Reyes Magos, que dentro de pocos días vendrán a depositar a los pies del Divino Niño el oro, el incienso y la mirra, que son símbolos de la caridad, de la oración y de la mortificación." + "\n\n" + "¡Oh, adorable Niño! Nosotros también, los que hemos hecho esta novena, para prepararnos al día de vuestra Navidad, queremos ofreceros nuestra pobre adoración; ¡no la rechacéis!, venid a nuestras almas, venid a nuestros corazones llenos de amor. " + "\n\n" + "Encended en ellos la devoción a vuestra santa infancia, no intermitente y sólo circunscrita al tiempo de vuestra Navidad, sino siempre y en todos los y celosamente propagada, nos conduzca a la vida eterna, librándonos del pecado y sembrando en nosotros todas las virtudes cristianas. " 
  }
];

const GOZOS = [
  "Dulce Jesús mío, mi niño adorado, ¡Ven a nuestras almas! ¡Ven no tardes tanto!",
  "¡Oh Sapiencia suma del Dios soberano, que a infantil alcance te rebajas sacro! ¡Oh Divino Niño, ven para enseñarnos la prudencia que hace verdaderos sabios!",
  "¡Oh Adonai potente que Moisés hablando, de Israel al pueblo diste los mandatos! ¡Ah, ven y líbranos, como a nuestros padres, de manos que oprimen y del pecado!",
  "¡Oh raíz sagrada de Jesé que en lo alto presentas al orbe tu fragante nardo! ¡Dulcísimo Niño que has sido llamado Lirio de los Valles, Bella flor del campo!",
  "¡Llave de David que abre al desterrado las cerradas puertas de regio palacio! ¡Sácanos. Oh Niño con tu blanca mano, de la cárcel triste que labró el pecado!",
  "¡Oh Lumbre de Oriente, sol de eternos rayos, que entre las tinieblas tu esplendor veamos! ¡Niño tan precioso, dicha del cristiano, luzca la sonrisa de tus dulces labios!",
  "¡Espejo sin mancha, santo de los santos, sin igual imagen del Dios soberano! ¡Borra nuestras culpas, salva al desterrado y en forma de niño, da al mísero amparo!",
  "¡Rey de las naciones, Emmanuel preclaro, De Israel anhelo Pastor del rebaño! ¡Niño que apacientas con suave cayado ya la oveja arisca, ya el cordero manso!",
  "¡Ábranse los cielos y llueva de lo alto bienhechor rocío como riego santo! ¡Ven hermoso Niño, ven Dios humanado! ¡Luce, hermosa estrella, brota, flor del campo!",
  "¡Ven, que ya María previene sus brazos, do su niño vean, en tiempo cercano! ¡Ven, que ya José, con anhelo sacro, se dispone a hacerse de tu amor sagrario!",
  "¡Del débil auxilio, del doliente amparo, consuelo del triste, luz del desterrado! ¡Vida de mi vida, mi dueño adorado, mi constante amigo, mi divino hermano!",
  "¡Ven ante mis ojos, de ti enamorados! ¡Bese ya tus plantas! ¡Bese ya tus manos! ¡Prosternado en tierra, te tiendo los brazos, y aún más que mis frases, te dice mi llanto!",
  "Dulce Jesús mío, mi niño adorado, ¡Ven a nuestras almas! ¡Ven no tardes tanto!"
];

const PRAYER_SECTION_IDS = ["intro", "virgin", "joseph", "baby"] as const;
type PrayerId = (typeof PRAYER_SECTION_IDS)[number]; // "intro" | "virgin" | "joseph" | "baby"
//type VillancicoId = keyof typeof VILLANCICOS;
type VillancicoId = "anton" | "campana" | "burrito"  | "burrito" | "nanita" | "tutaina";

type Villancico = {
  title: string
  text: string
  audioUrl: string
}
const VILLANCICOS: Record<VillancicoId, Villancico> = {
  anton:{ 
    title: "Anton Tiruliruliru",
    text: "Anton tiruliruliru, Anton tirulirurá" + "\n" + "Anton tiruliruliru, Anton tirulirulá" + "\n" + "Jesús al pesebre, vamos a adorar" + "\n" + "Jesús al pesebre, vamos a adorar" + "\n\n" + "Duérmete, niño chiquito" + "\n" + "Que la noche viene ya" + "\n" + "Cierra pronto tus ojitos" + "\n" + "Que el viento te arrullará" + "\n\n" + "Anton tiruliruliru, Anton tirulirurá" + "\n" + "Anton tiruliruliru, Anton tirulirulá" + "\n" + "Jesús al pesebre, vamos a adorar" + "\n" + "Jesús al pesebre, vamos a adorar" + "\n\n" + "Duérmete, niño chiquito" + "\n" + " Que tu madre velará" + "\n" + "Cierra pronto tus ojitos" + "\n" + "Porque la entristecerás" + "\n\n" + "Anton tiruliruliru, Anton tirulirurá" + "\n" + "Anton tiruliruliru, Anton tirulirulá" + "\n" + "Jesús al pesebre, vamos a adorar" + "\n" + "Jesús al pesebre, vamos a adorar" + "\n\n" + "Ya dormido en el regazo" + "\n" + "De María, El Salvador" + "\n" + "Va soñando dulcemente" + "\n" + "Música y cantos de amor"+ "\n\n" + "Anton tiruliruliru, Anton tirulirurá" + "\n" + "Anton tiruliruliru, Anton tirulirulá" + "\n" + "Jesús al pesebre, vamos a adorar" + "\n" + "Jesús al pesebre, vamos a adorar",
    audioUrl:"/Sounds/Anton_tiruliru_liru.mp3"
  },
  tutaina:{ 
    title: "Tutaina",
    text: "Tutaina tuturuma" + "\n" + "Tutaina tuturumaina" + "\n" + "Tutaina tuturuma turuma" + "\n" + "Tutaina tuturumaina" + "\n\n" + "Los pastores de Belén" + "\n" + "Vienen a adorar al niño" + "\n" + "La Virgen y San José" + "\n" + "Los reciben con cariño" + "\n\n" + "Tutaina tuturuma" + "\n" + "Tutaina tuturumaina" + "\n" + "Tutaina tuturuma turuma" + "\n" + "Tutaina tuturumaina" + "\n\n" + "Tres reyes vienen también" + "\n" + "Con incienso, mirra y oro" + "\n" + "A ofrendar a Dios su bien" + "\n" + "Con el más grande tesoro" + "\n\n" + "Tutaina tuturuma" + "\n" + "Tutaina tuturumaina" + "\n" + "Tutaina tuturuma turuma" + "\n" + "Tutaina tuturumaina" + "\n\n" + "Vamos todos a cantar" + "\n" + "Con amor y alegría" + "\n" + "Porque acaba de llegar" + "\n" + "De los cielos el Mesías" + "\n\n" + "Tutaina tuturuma" + "\n" + "Tutaina tuturumaina" + "\n" + "Tutaina tuturuma turuma" + "\n" + "Tutaina tuturumaina",
    audioUrl:"/Sounds/Tutaina.mp3"
  },
  nanita:{ 
    title: "La Nanita Nana",
    text: "A la nanita, nana" + "\n" + "Nanita, nana, nanita ea" + "\n" + "Mi Jesús tiene sueño" + "\n" + "Bendito sea, bendito sea (x2)" + "\n\n" +"Fuentecilla que corres clara y sonora" + "\n" + "Ruiseñor que en en la selva cantando lloras" + "\n" + "Callad mientras la cuna se balancea" + "\n" + "A la nanita nana, nanita ea" + "\n\n" + "A la nanita, nana" + "\n" + "Nanita, nana, nanita ea" + "\n" + "Mi Jesús tiene sueño" + "\n" + "Bendito sea, bendito sea (x2)" + "\n\n" +"Manojito de rosas y de alelíes" + "\n" + "Qué es lo que estás soñando que te sonríes" + "\n" + "Cuáles son tus ensueños, dilo alma mía más" + "\n" + "Qué es lo que murmuras Eucaristía" + "\n\n" +"A la nanita, nana" + "\n" + "Nanita, nana, nanita ea" + "\n" + "Mi Jesús tiene sueño" + "\n" + "Bendito sea, bendito sea (x2)" + "\n\n" +"Pajaritos y fuentes, auras y brisas" + "\n" + "Respetad ese sueño y esas sonrisas" + "\n" + "Callad mientras la cuna se balancea" + "\n" + "Que el niño está soñando, bendito sea" , 
    audioUrl: "/Sounds/A_la_nanita_nana.mp3"
  },
  burrito:{
    title: "Burrito Sabanero",
    text:"Con mi burrito sabanero, voy camino de Belén" + "\n" + "Con mi burrito sabanero, voy camino de Belén" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n\n" +"El lucerito mañanero ilumina mi sendero" + "\n" + "El lucerito mañanero ilumina mi sendero" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n\n" +"Con mi cuatrico, voy cantando, mi burrito va trotando" + "\n" + "Con mi cuatrico voy cantando, mi burrito va trotando" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n" + "Si me ven, si me ven, voy camino de Belén " + "\n\n" +"Tuki tuki tuki tuki, tuki tuki tuki ta" + "\n" + "Apúrate, mi burrito, que ya vamos a llegar" + "\n" + "Tuki tuki tuki tuki, tuki tuki tuki tu" + "\n" + "Apúrate, mi burrito, vamos a ver a Jesús " + "\n\n" +"El lucerito mañanero ilumina mi sendero" + "\n" + "El lucerito mañanero ilumina mi sendero" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n\n" + "Con mi cuatrico, voy cantando, mi burrito va trotando" + "\n" + "Con mi cuatrico voy cantando, mi burrito va trotando" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n\n" +"Tuki tuki tuki tuki, tuki tuki tuki ta" + "\n" + "Apúrate, mi burrito, que ya vamos a llegar" + "\n" + "Tuki tuki tuki tuki, tuki tuki tuki tu" + "\n" + "Apúrate, mi burrito, vamos a ver a Jesús " + "\n\n" +"Con mi burrito sabanero, voy camino de Belén" + "\n" + "Con mi burrito sabanero, voy camino de Belén" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n" + "Si me ven, si me ven, voy camino de Belén " + "\n\n" +"Si me ven, si me ven, voy camino de Belén" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n" + "Si me ven, si me ven, voy camino de Belén" + "\n" + "Si me ven, si me ven, voy camino de Belén",
    audioUrl:"/Sounds/Mi_burrito_sabanero.mp3"
  },
  campana:{
    title: "Campana sobre campana",
    text:"Campana sobre campana" + "\n" + "Y sobre campana una" + "\n" + "Asómate a la ventana" + "\n" + "Verás el niño en la cuna" + "\n\n" + "Belén, campanas de Belén" + "\n" + "Que los ángeles tocan" + "\n" + "¿Qué nuevas me traéis? " + "\n\n" + "Recogido tu rebaño" + "\n" + "¿A dónde vas, pastorcito?" + "\n" + "Voy a llevar al portal" + "\n" + "Requesón, manteca y vino " + "\n\n" + " Belén, campanas de Belén" + "\n" + "Que los ángeles tocan" + "\n" + "¿Qué nuevas me traéis? " + "\n\n" + "Campana sobre campana" + "\n" + "Y sobre campana dos" + "\n" + "Asómate a la ventana" + "\n" + "Porque está naciendo Dios",
    audioUrl:"/Sounds/Campana_sobre_campana.mp3"
  },
};

function isPrayerSection(id: string): id is PrayerId {
  return PRAYER_SECTION_IDS.includes(id as PrayerId);
}

export default function Home() {
  const [currentSectionId, setCurrentSectionId] = useState("intro");
  const [selectedDay, setSelectedDay] = useState<(typeof DAILY_REFLECTIONS)[number] | null>(null);
  const [selectedVillancicoId, setSelectedVillancicoId] = useState<VillancicoId | null>(null)

  const currentSection = SECTIONS.find((s) => s.id === currentSectionId) ?? SECTIONS[0];

  return (
    <div className="relative min-h-screen w-full bg-[#fdfbf7] overflow-hidden">
      {/* Fondo GIF */}
      <img
        src="/fondo-novena.gif"
        alt="Fondo navideño"
        className="absolute inset-0 m-auto max-w-full max-h-full object-fill w-full h-full pointer-events-none"
      />
      <main className="relative z-10 flex flex-col items-center px-4 py-8">
        <header className="max-w-2xl w-full text-center mb-6">
          <h1 className="text-3xl md:text-3xl font-bold text-pink-500 mb-2">
              <span className="text-2xl">🎄</span> 
              Novena de Aguinaldo 
              <span className="text-2xl">🎄</span>
          </h1>
          <p className="text-sm text-gray-600">
            Sigue cada paso y reza  en familia!✨
          </p>
        </header>

        {/* NAV DE SECCIONES */}
        <nav className="max-w-2xl w-full mb-6 flex flex-wrap gap-2 justify-center">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setCurrentSectionId(section.id);
                setSelectedDay(null);
              }}
              className={`w-20 h-20 overflow-hidden border-2 
                ${currentSectionId === section.id ? 'border-pink-400 scale-110' : 'border-white'}
              `}
              >
                <img
                  src={section.icon}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
            </button>
          ))}
        </nav>

        {/* TARJETA PRINCIPAL */}
        <section className="max-w-2xl w-full bg-white rounded-3xl shadow-lg border border-pink-100 p-5 md:p-6">
          <h2 className="text-xl font-bold text-green-800 mb-3 text-center">
            {currentSection.title}
          </h2>

          {/* CONTENIDO SEGÚN SECCIÓN */}
          <div className="space-y-4 text-gray-700 text-[16px] leading-relaxed max-h-[420px] overflow-y-auto pr-1">
            {/* CONSIDERACIÓN DEL DÍA → calendario */}
            {currentSection.id === "day" && !selectedDay && (
              <div>
                <p className="text-center text-sm text-gray-500 mb-3">
                  Selecciona un día de la novena:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {DAILY_REFLECTIONS.map((day) => (
                    <button
                      key={day.day}
                      onClick={() => setSelectedDay(day)}
                      className="aspect-square rounded-2xl bg-pink-50 border border-pink-100 flex flex-col items-center justify-center hover:bg-pink-100 transition"
                    >
                      <span className="text-[10px] font-semibold text-pink-500">
                        DIC
                      </span>
                      <span className="text-2xl font-bold text-gray-800">
                        {day.day}
                      </span>
                      <span className="text-[10px] text-gray-500 mt-1">
                        {day.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CONSIDERACIÓN DEL DÍA → día específico */}
            {currentSection.id === "day" && selectedDay && (
              <div>
                <button
                  onClick={() => setSelectedDay(null)}
                  className="mb-3 text-sm text-pink-500 hover:underline"
                >
                  ← Volver al calendario
                </button>
                <h3 className="font-bold text-pink-600 mb-2">
                  {selectedDay.title} –  {selectedDay.day} de diciembre
                </h3>
                <p className="text-justify whitespace-pre-line">{selectedDay.content}</p>
              </div>
            )}

            {/* GOZOS */}
            {currentSection.id === "joys" && (
              <div className="space-y-3">
                <p className="text-center text-sm text-gray-500">
                  Repetir el estribillo después de cada gozo:
                </p>
                <div className="bg-yellow-100 border border-yellow-200 rounded-2xl p-3 text-center font-semibold text-yellow-800">
                  {GOZOS[0]}
                </div>
                {GOZOS.slice(1).map((g, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-3"
                  >
                    🎵 {g}
                  </div>
                ))}
              </div>
            )}

            {/* ORACIONES SIMPLES */}
            {isPrayerSection(currentSection.id) && (
              <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4">
                <p className="text-center whitespace-pre-line">
                  {PRAYERS[currentSection.id].text}
                </p>
                <p className="mt-4 text-pink-600 font-semibold text-center">
                  {PRAYERS[currentSection.id].footer}
                </p>
              </div>
            )}
            {/* VILLANCICOS */}
            {currentSection.id === "villancicos" && (
              <div className="space-y-4">
                <p className="text-center text-sm text-gray-500">
                  Selecciona un villancico para cantar:
                </p>

                <div className="flex-col md:flex-row gap-4">
                  {/* Selector vertical */}
                  <div className="flex flex-col gap-2 w-full overflow-x-auto md:overflow-visible">
                    {Object.entries(VILLANCICOS).map(([id, song]) => (
                      <button
                        key={id}
                        onClick={() => setSelectedVillancicoId(id as VillancicoId)}
                        className={`w-full px-3 py-2 rounded-2xl border text-sm text-center transition
                          ${
                            selectedVillancicoId === id
                              ? "bg-pink-100 border-pink-300 text-pink-800 font-semibold"
                              : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                          }
                        `}
                      >
                        🎵 {song.title}
                      </button>
                    ))}
                  </div>

                  {/* Letra del villancico */}
                  <div className="flex-1 bg-pink-50 border border-pink-100 rounded-2xl p-4 mt-4">
                    {selectedVillancicoId && (
                      <>
                          {/* 🎧 Audio del villancico */}
                        <audio
                          controls
                          className="w-full mt-4"
                          src={VILLANCICOS[selectedVillancicoId].audioUrl}
                        >
                          Tu navegador no soporta el elemento de audio.
                        </audio>
                        <h3 className="text-center font-bold text-pink-700 mb-2 text-[20px]">
                          {VILLANCICOS[selectedVillancicoId].title}
                        </h3>
                        <p className="text-sm text-[16px] whitespace-pre-line text-center">
                          {VILLANCICOS[selectedVillancicoId].text}
                        </p>
                  
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}


          </div>
        </section>

        <footer className="mt-4 text-xs text-gray-400 bg-pink-50 rounded-full px-4 py-2">
          Hecho por Diana Gutierrez 💕
        </footer>
      </main>
    </div>
  );
}

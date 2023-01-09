function obtener_dia() {

    let dia = 0;

    while (dia === 0) {
        dia = prompt("Ingresa tu día de Nacimiento en número");

        if (dia > 0 && dia < 31) {

            console.log("El dia de tu nacimiento es el " + dia);
            alert("El dia de tu nacimiento es el " + dia);
        }

        else {
            alert("Numero de dia incorrecto, probá de nuevo.");
            dia = 0;
        }

    }

    return dia;

}

function obtener_mes() {

    let mes = 0;

    while (mes === 0) {
        mes = Number(prompt("Ingresa el número de tu mes de nacimiento"));

        switch (mes) {
            case 1:
                alert("Naciste en el mes de Enero");
                break;
            case 2:
                alert("Naciste en el mes de Febrero");
                break;
            case 3:
                alert("Naciste en el mes de Marzo");
                break;
            case 4:
                alert("Naciste en el mes de Abril");
                break;
            case 5:
                alert("Naciste en el mes de Mayo");
                break;
            case 6:
                alert("Naciste en el mes de Junio");
                break;
            case 7:
                alert("Naciste en el mes de Julio");
                break;
            case 8:
                alert("Naciste en el mes de Agosto");
                break;
            case 9:
                alert("Naciste en el mes de Septiembre");
                break;
            case 10:
                alert("Naciste en el mes de Octubre");
                break;
            case 11:
                alert("Naciste en el mes de Noviembre");
                break;
            case 12:
                alert("Naciste en el mes de Diciembre");
                break;
            default:
                alert("No es un número de mes válido");
                mes = 0;
        }
    }

    return mes;
}

function zodiaco(dia, mes) {

    console.log("dia y mes= " + dia + "-" + mes);

    let signo = "";

    if (mes === 1) {
        if (dia < 21) {
            signo = "Capricornio";
        } else {
            signo = "Acuario";
        }
    } else if (mes === 2) {
        if (dia < 21) {
            signo = "Acuario";
        } else {
            signo = "Piscis";
        }
    } else if (mes === 3) {
        if (dia < 21) {
            signo = "Piscis";
        } else {
            signo = "Aries";
        }
    } else if (mes === 4) {
        if (dia < 21) {
            signo = "Aries";
        } else {
            signo = "Tauro";
        }
    } else if (mes === 5) {
        if (dia < 23) {
            signo = "Tauro";
        } else {
            signo = "Géminis";
        }
    } else if (mes === 6) {
        if (dia < 21) {
            signo = "Géminis";
        } else {
            signo = "Cáncer";
        }
    } else if (mes === 7) {
        if (dia < 21) {
            signo = "Cáncer";
        } else {
            signo = "Leo";
        }
    } else if (mes === 8) {
        if (dia < 21) {
            signo = "Leo";
        } else {
            signo = "Virgo";
        }
    } else if (mes === 9) {
        if (dia < 21) {
            signo = "Virgo";
        } else {
            signo = "Libra";
        }
    } else if (mes === 10) {
        if (dia < 21) {
            signo = "Libra";
        } else {
            signo = "Escorpio";
        }
    } else if (mes === 11) {
        if (dia < 21) {
            signo = "Escorpio";
        } else {
            signo = "Sagitario";
        }
    } else if (mes === 12) {
        if (dia < 23) {
            signo = "Sagitario";
        } else {
            signo = "Capricornio";
        }
    }

    return signo;
}

function horoscopo(signo) {

    let horoscopo = "";

    if (signo === "Aries") {
        horoscopo ="Horóscopo de hoy:\n Iniciarás tu jornada a todo motor con muchas actividades planeadas para hoy. No te pases del límite.\nAmor:\n Te será imposible no ceder ante la insistencia de tu pareja para pasar la jornada de hoy fuera del hogar. Disfrútala al máximo.\nRiqueza:\n Tendrás una jornada bastante tranquila a nivel laboral en el día de hoy. Aprovéchala para adelantar cuanto trabajo puedas.\nBienestar:\n No caigas en el carpe diem a nivel económico o podrás llegar a tener graves consecuencias en un futuro cercano. Planifica en detalle.";
    
    } else if (signo === "Tauro") {
        horoscopo ="Horóscopo de hoy:\n La diosa de la fortuna te sonreirá el día de hoy. Muéstrate confiado a la hora de iniciar proyectos de toda índole en lo personal.\nAmor:\n No busques perfección total a la hora de encontrar una pareja. Te será imposible llenar cada expectativa que tengas.\nRiqueza:\n Cuentas con las herramientas para sobresalir, pero el cansancio extremo y las frustraciones están opacando tu presencia.\nBienestar:\n Tendrás una jornada llena de traspiés y dificultades. Esto te presentará un problema pues estás acostumbrado a lo fácil y a tener éxito siempre.";

    } else if (signo === "Géminis") {
        horoscopo ="Horóscopo de hoy:\n El cambio de actitud frente a la vida puede servir para quitarte malestares de encima. Renuévate encontrando otro camino.\nAmor:\n Estás pasando por un momento de soledad a punto de terminar. Prepárate con la mejor predisposición para conocer el amor.\nRiqueza:\n Sé realista en las metas que te impones, el no alcanzarlas provoca frustraciones innecesarias que pueden frenar tu desempeño.\nBienestar:\n Tu resistencia natural te ayudará a luchar contra enfermedades y afecciones. Lograrás gozar de una salud sin altibajos y equilibrada.";

    } else if (signo === "Cáncer") {
        horoscopo = "Horóscopo de hoy:\n Los reencuentros y los festejos entre parientes serán oportunos en este momento, donde no todo es color de rosa en el núcleo familiar.\nAmor:\n El trabajo y la rutina están trayendo problemas en tu pareja, no permitas que esto pase. Acércate y demuéstrale tu amor.\nRiqueza:\n La adaptabilidad es una cualidad de gran importancia a la hora de nuevos emprendimientos. Sé proactivo al cambio.\nBienestar:\n Busca el bienestar en las cosas simples de la vida. La familia, los amigos y los seres queridos te lo brindarán con el corazón y sin retaceos.";
    } else if (signo === "Leo") {
        horoscopo = "Horóscopo de hoy:\n Lograrás entender, no a través de las mejores experiencias, lo importante de proyectar una imagen socialmente aceptable.\nAmor:\n Te sentirás completamente incomprendido debido a ciertas actitudes por parte de tu pareja en el día de hoy. Demuéstralo.\nRiqueza:\n Preocúpate de tus asuntos y evita ser arrastrado a grupos laborales que sabes no traerán nada positivo a tu carrera.\nBienestar:\n No permitas ser sobrepasado por ningún tipo de situación. Asegúrate de mantener la mente serena y lograrás salir de cualquier aprieto.";

    } else if (signo === "Virgo") {
        horoscopo = "Horóscopo de hoy:\n Evita sacar a relucir viejos errores solo para demostrar que tienes razón en las discusiones con amigos de antaño.\nAmor:\n Te sorprenderán gratamente ciertas actitudes por parte de tu pareja. Notarás que nunca llegas a conocer a alguien completamente.\nRiqueza:\n No temas tomar el crédito que te has ganado por tu esfuerzo y dedicación. No permitas que se abusen de tu tranquilidad.\nBienestar:\n Tu capacidad de escoger las palabras adecuadamente te será de increíble ayuda en el ámbito laboral. Procura utilizarla en cada ocasión que tengas.";

    } else if (signo === "Libra") {
        horoscopo = "Horóscopo de hoy:\n No contarás con el apoyo de los astros durante la jornada de hoy. Evita tomar decisiones a largo plazo, o medítalas en detalle.\nAmor:\n La vida no siempre da lugar para sueños de amor perfecto. Deberás aprender que la tolerancia es el secreto del éxito.\nRiqueza:\n Debes aprender a usar tus habilidades en tu beneficio de mejor manera. Conócete a fondo y lograrás maravillas.\nBienestar:\n El estrés y el cansancio de una rutina agotadora acabarán por provocar un paro total en tus actividades cuando tu cuerpo diga basta. Precaución.";

    } else if (signo === "Escorpio") {
        horoscopo = "Horóscopo de hoy:\n Finalmente será tu turno de enfrentar las responsabilidades por acciones tuyas del pasado. Que el orgullo no se interponga.\nAmor:\n No a todas las personas les agrada que les digan que hacer a cada paso del camino. Dale a tu pareja la libertad que necesita.\nRiqueza:\n Aprende a compartir tus conocimientos con aquellos pares laborales con los que tengas afinidad. Esto mejorará tu entorno.\nBienestar:\n No cedas ante la presión de encajar correctamente en la sociedad, renunciando a tu personalidad única e irrepetible. Desarrolla tu personalidad.";

    } else if (signo === "Sagitario") {
        horoscopo = "Horóscopo de hoy:\n Estarás propenso a vivir vicisitudes durante el día de hoy. Chequea todo dos veces y no dejes nada librado al azar.\nAmor:\n La familia no es algo que uno pueda elegir, así que no culpes a tu pareja por los defectos de su entorno familiar.\nRiqueza:\n Limítate en los gastos superfluos e innecesarios, porque no siempre puedes darte los gustos. Aprende a ser más ahorrativo.\nBienestar:\n Investiga detenidamente el lugar en el cual depositarás tus ahorros. Evalúa todas las posibilidades y sólo entonces decide.";

    } else if (signo === "Capricornio") {
        horoscopo = "Horóscopo de hoy:\n No intentes ser tú el que desarrolle y abarque todas las tareas del hogar. Haz notar las responsabilidades de cada uno.\nAmor:\n Tu pasividad en la relación está haciendo que tu pareja pierda el respeto hacia ti. Deberás procurar poner un alto a esto.\nRiqueza:\n Deberás tomar una determinación, o modificas tu manera de trabajar o cambias de trabajo. No puedes continuar así.\nBienestar:\n No permitas que los impulsos tomen control de ti y te haga actuar tontamente. Debes aprender a dominarte más efectivamente o tendrás problemas.";

    } else if (signo === "Acuario") {
        horoscopo = "Horóscopo de hoy:\n No podrás alcanzar tus metas de la vida sentado en tu sillón. Utiliza el día de hoy para replantearte tus conductas de vida.\nAmor:\n Discusiones esporádicas vivirás hoy junto a tu pareja. Simplemente parecerán sintonizar frecuencias diferentes. Paciencia.\nRiqueza:\n No habrá vuelta atrás de las determinaciones que pretendes tomar en el día de hoy. Piensa dos veces antes de hacerlo.\nBienestar:\n No subestimes el valor de ser invaluable para tus superiores. Solo así tendrás grandes posibilidades de no ser afectado por reformas laborales.";

    } else {
        horoscopo = "Horóscopo de hoy:\n Deberás pasar por un momento muy difícil el día de hoy. Afortunadamente podrás contar con el apoyo incondicional de seres amados.\nAmor:\n Son pocas las opciones que tu pareja te está dejando a la hora de tomar una determinación acerca del destino de la relación.\nRiqueza:\n La posibilidad de montar el negocio propio nunca estuvo tan cerca. No cejes, continua hacia delante con voluntad de acero.\nBienestar:\n Busca el momento adecuado para poner ciertos temas en la pareja sobre la mesa. No siempre podrás contar con una buena predisposición.";
    }

    return horoscopo;
}

let dia = obtener_dia();
let mes = obtener_mes();
let signo = zodiaco(dia, mes);
alert("Tu signo del zodíaco es " + zodiaco(dia, mes));


function obtener_horoscopo(signo) {

    let recibir_horoscopo = "";

    while (recibir_horoscopo === "") {

        recibir_horoscopo = prompt("¿Deseas recibir tu horoscopo? Si/No");

        if (recibir_horoscopo.toLowerCase() === "si") {
            alert(horoscopo(signo));
        } else if (recibir_horoscopo.toUpperCase() === "NO") {
            alert("Gracias");
        } else {
            alert("los datos son incorrectos, ingrese nuevamente la opción deseada");
            recibir_horoscopo = "";
        }

    }
}

obtener_horoscopo(signo);



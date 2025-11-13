var respuesta_seccion,respuesta_seccion1,respuesta_seccion2; 
respuesta_seccion=Number(prompt("La presentación de este taller esta dividida en 2 puntos:\n\nPunto 1: En esta sección se encuentran todos los ejercicios con sus figurar geométricas correspondientes. \nPunto 2: En esta sección están los ejercicios basados en la vida real."));
//--switch 1 - Elegir la sección de ejercicios correspondiente
switch (respuesta_seccion) {
    case 1:
            //--switch 2 - Elegir el ejercicio correspondiente de la sección 1
            respuesta_seccion1=Number(prompt("Usted está en el punto 1. \n\n¿Qué ejercicio desea ver?\nLas opciones son: \n\n1. Ejercicio a: Calcule la base de un rectángulo \n2. Ejercicio b: Calcule el área de un rombo \n3. Ejercicio c: Calcule el área de un trapecio escaleno \n4. Ejercicio d: Calcule el área de un hexágono (figura de 6 lados) \n5. Ejercicio e: Calcule la apotema de un octágono (figura de 8 lados)"));
switch (respuesta_seccion1) {
    case 1:
            //--Solución del ejercicio A--
            solucion_ejercicioA();
        break;
    case 2:
            //--Solución del ejercicio B--
            solucion_ejercicioB();
        break;
    case 3:
            //--Solución del ejercicio C--
            solucion_ejercicioC();
        break;
    case 4:
            //--Solución del ejercicio D--
            solucion_ejercicioD();
        break;
    case 5:
            //--Solución del ejercicio E--
            solucion_ejercicioE();
        break;
    default:
            //--En caso de que digiten otro número--
            alert("El número digitado no es válido"); 
        break;
}
        break;
    case 2:
            //--switch 2 - Elegir el ejercicio correspondiente de la sección 1
            respuesta_seccion2=Number(prompt("Usted está en el punto 2. \n\n¿Qué ejercicio desea ver?\nLas opciones son: \n\n1. Ejercicio a: La rueda de un camión tiene 90 cm de radio... \n2. Ejercicio b: Un trabajador de la construcción... \n3. Ejercicio c: Un vaso de icopor tiene la forma de un tronco... \n4. Ejercicio d: Elija un objeto cotidiano... \n5. Ejercicio e: Consulte y de respuesta a la siguiente pregunta..."));
            switch (respuesta_seccion2) {
                case 1:
                        //--Solución del ejercicio A seccion 2--
                        ejercicio1_seccion2();
                    break;
                case 2:
                        //--Solución del ejercicio B seccion 2--
                        ejercicio2_seccion2();
                    break;
                case 3:
                        //--Solución del ejercicio C seccion 2--
                        ejercicio3_seccion2();
                    break;
                case 4:
                        //--Solución del ejercicio D seccion 2--
                        ejercicio4_seccion2();
                    break;
                    case 5:
                            //--Solución del ejercicio E seccion 2--
                            ejercicio5_seccion2();
                        break;
                default:
                        //--En caso de que digiten otro número--
                        alert("El número digitado no es válido"); 
                    break;
            }
        break;
    default:
            //--En caso de que digiten otro número--
            alert("El número digitado no es válido");
        break;
}
//--Funciones de los ejercicios --
function solucion_ejercicioA() {
    //--Formula b=a/h
    var a = 20, h = 5, b = 0;
    b=a/h;
    alert("Usted a seleccionado el ejercicio A \n\na) Calcule la base de un rectángulo que tiene un área de "+a+" cm y su altura mide "+h+" cm \n\nEl área es de: " + a + "\nLa altura es de: "+h+ "\nEl resultado de la base es de: "+b);
}
function solucion_ejercicioB() {
    //--Formula a=D*d/2
    var dMayor = 15, dMenor = 11, a = 0;
    a=(dMayor*dMenor)/2;
    alert("Usted a seleccionado el ejercicio B \n\nb) Calcule el área de un rombo cuyas diagonales miden "+dMayor+" m y "+dMenor+"m.\n\nDiagonal Mayor es de: " + dMayor + "\nDiagonal Menor es de: " + dMenor+ "\nEl resultado del Área es de: " + a);
}
function solucion_ejercicioC() {
    //--Formula a=(B+b)*h/2
    var B = 17, b = 12.5, h = 9.5, a = 0;
    a = (B + b) * h / 2;
    alert("Usted a seleccionado el ejercicio C \n\nc) Calcule el área de un trapecio escaleno de "+h+" de altura si sus bases miden "+B+"m y "+b+"m.\nLa Base Mayor es de: " + B + "\nLa Base Menor es de: " + b + "\n\nEl resultado del Área es de: " + a);
}
function solucion_ejercicioD() {
    //--Formulas (Debemos allár el perimetro y el área)
    //--P = 6 * l
    //--A = (P * a) / 2 
    var l = 4.7, apo = 4.05, p = 0, a = 0;
    p = 6 * l;
    a = (p * apo) / 2;
    alert("Usted a seleccionado el ejercicio D \n\nd) Calcule el área de un hexágono (figura de 6 lados) regular que mide "+l+"m porlado y "+apo+"m de apotema.\nLos Lados tienen un valor de: " + l + "\nLa Apotema tiene un valor de: " + apo + "\n\nEl resultado del Perímetro es de: " + p + "\nEl resultado del Área es de: " + a);
}
function solucion_ejercicioE() {
    //--Formulas (Debemos allár el perimetro, el área para con esta ultima poder allar la apotema)
    //--P = nL * l 
    //--A = (P * a) / 2 || a = (2A) / P
    var A = 3168, L = 300, nL = 8, P = 0, a = 0;
    P = nL * L;
    a = (2 * A) / P;
    alert("Usted a seleccionado el ejercicio D \n\ne) Calcule la apotema de un octágono (figura de 8 lados) regular que tiene "+A+"m2 de área y su lado mide "+L+"m.\n\nLos Lados tienen un valor de: " + L + "\nEl número de lados es de: " + nL + "\nEl resultado del Área es de: " + A + "\nEl Resultado del Perímetro es de: " + P + "\n\nEl resultado de la Apotema es de: " + a + " m");
}
//-- Funciones sección 2 --
function ejercicio1_seccion2() {
    //--Formulas para el ejercicio--
    //--C = 2pi*r
    //--D = n * 2pi*r
    var r = 90, nV = 100, D = 0;
    D = (nV * (2*3.1416) * r) / 100;
    alert("Usted a seleccionado el ejercicio A \n\na) La rueda de un camión tiene 90 cm de radio. ¿Cuánto ha recorrido el camión cuando la rueda ha dado 100 vueltas? Entregue la respuesta en metros.\n\nRadio tiene un valor de: " + r + "\nEl número de vueltas es de: " + nV + "\n\nEl resultado de la Distacia total recorrida es de: " + D + " metros");
}
function ejercicio2_seccion2() {
    //--Formulas--
    var L = 18.7, A_cocina, A_cubrir, L_azulejo = 0.1, A_azulejo = 0, N_azulejos = 0;
    //--Área total de la cocina:
    A_cocina = Math.pow(L,2);
    //--Área a cubrir:
    A_cubrir = (1/3) * A_cocina;
    //--Área de cada azulejo:
    A_azulejo = Math.pow(L_azulejo,2);
    //--Número de azulejos necesarios:
    N_azulejos = A_cubrir / A_azulejo;
    alert("Usted a seleccionado el ejercicio B \n\nb) Un trabajador de la construcción debe calcular el área de una cocina cuadrada que mide 18.7 m por lado. Si se desea colocar azulejo solo en un tercio de la cocina y cada azulejo mide 10 cm por lado, ¿cuántos azulejos se van a utilizar? Tener en cuenta: El área de la cocina está en metros (m) y cada azulejo esta en centímetros(cm), para aplicar la fórmula se debe convertir a metros los centímetros.\n\nTeniendo en cuenta que un lado de la cocina mide "+L+", se necesitan "+N_azulejos+" azulejos de "+(L_azulejo*100)+" cm por lado para cubrir un tercio del área de la cocina.");
}   
function ejercicio3_seccion2(){
    //--Formula--
    // at = pi * g * (R + r) + pi* Math.pow(R,2) + pi * Math.pow(r,2)
    var R = 3.7, r = 2.1, g = 9.2, at = 0, pi = 3.1416, h = 0, v = 0, oz = 0;
    //--El área total del vaso (tronco de cono) / El volumen máximo (capacidad de agua, luego convertido a onzas)
    at = pi * g * (R + r) + pi* Math.pow(R,2) + pi * Math.pow(r,2)
    //--Calcular la altura del troco del vaso 
    // h = Math.sqrt(Math.pow(g,2)-Math.pow(R-r,2))
    h = Math.sqrt(Math.pow(g,2)-Math.pow(R-r,2));
    //--Ahora ya podemos allar el volumen--
    // v = (1/3) * pi * h * (Math.pow(R,2)+R*r+Math.pow(r,2));
    v = (1/3) * pi * h * (Math.pow(R,2)+R*r+Math.pow(r,2));
    //--Se convierte el volumen a onzas--
    // 1 onza = 29.574 cm cubico
    // oz = (v/29.574);
    oz = (v/29.574);
    alert("Usted a seleccionado el ejercicio C \n\nc) Un vaso de icopor tiene la forma de un tronco de cono. El radio mayor mide 3,7 cm; el radio menor, 2,1 cm, y la generatriz, 9,2 cm. Calcule el área total del vaso y las onzas máximas de agua que puede contener el vaso. \n\nEl resultado de la altura es: " + h + "\nEl resultado del volumen es de: " + v + "\n\nEl vaso tiene un área total de " +at+ " cm² y puede contener aproximadamente " +oz+ " onzas de agua.");
}
function ejercicio4_seccion2() {
    var r = 3.4, h = 11.8, pi = 3.1416, At = 0, v = 0;
    //--Formulas--
    // At = 2*pi*r*(h+r);
    // v = pi*Math.pow(r,2)*h;
    At = 2*pi*r*(h+r);
    v = pi*Math.pow(r,2)*h;
    alert("Usted a seleccionado el ejercicio D \n\nd) Elija un objeto cotidiano (vaso, caja, dado, lata, pirámide) y modele sus dimensiones para aplicar la fórmula del área y volumen. \n\nEl Área total del cilindro es de: " + At + "\nEl Volumen del cilindro es de: " + v);
}   
function ejercicio5_seccion2() {
    var respuesta_ver_ejercicio;
    //-- Respuesta al ejercicio --
    alert("Usted a seleccionado el ejercicio E \n\ne) Consulte y de respuesta a la siguiente pregunta: ¿si tuviera un sólido irregular, qué método utilizaría para calcular el volumen? Agregue la imagen de dicho solido irregular. \n \nSi tuviera un sólido irregular, el método más apropiado para calcular su volumen sería el método de desplazamiento de agua o principio de Arquímedes. \nEste método consiste en: \n\n1. Llenar una probeta o recipiente con agua hasta un nivel conocido. \n2. Introducir completamente el objeto irregular en el agua (sin que toque las paredes ni el fondo). \n3. Medir cuánto aumenta el nivel del agua. \n4. El aumento del volumen de agua corresponde exactamente al volumen del sólido irregular. \n\nLa fórmula es: \nV_solido = V_final - V_inicial");
    respuesta_ver_ejercicio=Number(prompt("¿Desea ver un ejemplo del ejercicio? \n\n1. Para ver el ejemplo. \n2. Para salir del sistema."));
    switch (respuesta_ver_ejercicio) {
        case 1:
            var V_final = 165, V_inicial = 120, V_solido = 0;
            //--Ejercicio explicación del “método de desplazamiento de agua volumen piedra probeta”
            //-- Un estudiante quiere calcular el volumen de una piedra irregular.
            //-- Para ello, llena una probeta con agua hasta los 120 mL.
            //-- Luego introduce la piedra con cuidado y observa que el nivel del agua sube hasta 165 mL.
            // Fórmula
            // V_inicial = 120 ml
            // V_final = 165 ml
            V_solido = V_final - V_inicial;
            alert("Un estudiante quiere calcular el volumen de una piedra irregular. \nPara ello, llena una probeta con agua hasta los 120 mL. \nLuego introduce la piedra con cuidado y observa que el nivel del agua sube hasta 165 mL. \n\nRespuesta: \nEl Volumen de la priedra es de: " + V_solido + " ml, lo que equivale a " + V_solido + " cm³.");
            break;
        case 2:
            alert("Saliendo del sistema...");
            break;
        default:
            alert("Usted digitó un opción no válida");
            break;
    }

}
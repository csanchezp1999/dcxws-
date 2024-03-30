
        const cuestionario = [
            { pregunta: '1 - ¿Cual es la molécula más numerosa (en %) la atmósfera?', respuestaA: 'A - Hidrógeno', respuestaB: 'B - Oxigeno', respuestaC: 'C - Nitrogeno', correcta: 3 },
            { pregunta: '2 - ¿Se conserva la energía en todas las reacciones?', respuestaA: 'A - Si, siempre se conservan', respuestaB: 'B - Si, a excepción de las reacciones nucelares', respuestaC: 'C - No, siempre se pierde energía siempre en el proceso', correcta: 2},
            {pregunta: '3 - Soy limpiador en un laboratorio que investiga las propiedades del mercurio, pero, una vez terminada mi jornada, me ha desaparecido mi alianza, ¿Qué ha pasado?', respuestaA: 'A - La he perdido', respuestaB: 'B - En realidad no estoy casado asi que nunca tuve la alianza', respuestaC: 'C - El mercurio genera vapores que reaccionan para crear una sustancia llamada "amalgama" con el oro ', correcta: 3 }
        ];
        let preguntaActual = 0;
        let acertadas = 0;
        const preguntaElement = document.getElementById('pregunta');
        const opcionA = document.getElementById('A');
        const opcionB = document.getElementById('B');
        const opcionC = document.getElementById('C');
        const botonNext = document.getElementById('next');
        const resultadoFinal = document.getElementById('Resultado');
        const Corregir = document.getElementById('corregir');
     



        function cargarPregunta() {
            const preguntaEnPantalla = cuestionario[preguntaActual];
            preguntaElement.textContent = preguntaEnPantalla.pregunta;
            opcionA.innerHTML = preguntaEnPantalla.respuestaA;
            opcionB.innerHTML = preguntaEnPantalla.respuestaB;
            opcionC.innerHTML = preguntaEnPantalla.respuestaC;
        }

        function Respuesta(respuestaPulsada, param) {
            if (respuestaPulsada === cuestionario[preguntaActual].correcta) {
                acertadas = acertadas + 1;
                document.getElementById('resultado').innerHTML = acertadas;
                
            }
        }

        function siguientePregunta() {
            preguntaActual = preguntaActual + 1;

            if (preguntaActual < cuestionario.length) {
                cargarPregunta();
            } else {
              mostrarRes();
              Correcion();
            }
        }

        function mostrarRes(){
          resultadoFinal.style.display="block";
          Corregir.style.display="block";
        }


        cargarPregunta();
        // botonNext.addEventListener('click', nextQuestion);
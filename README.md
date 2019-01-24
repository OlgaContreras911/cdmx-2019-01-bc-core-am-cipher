# Cifrado César (Proyecto 1)
El cifrado César es una de las técnicas de codificación más básicas que existen utilizando el método por sustitución, sin embargo es una excelente e interesante forma de iniciarse en el mundo del cifrado. En su forma original consiste en trasladar las palabras del texto a cifrar un número determinado de posiciones (desplazamientos) en el alfabeto. Este número de posiciones es la clave que más adelante se necesita para descifrar nuestro mensaje.
Cipher es un programa que te permite probar esta técnica, al codificar y descodificar mensajes bajo el método antes mencionado. 
![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:
- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

## Pre-requisitos e instalación
1. Antes que nada, asegúrate de tener un editor de texto en
   condiciones, algo como [Atom](https://atom.io/), 
   [Visual Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com) o cualquier otro de tu preferencia.
2. Para ejecutar los comandos a continuación necesitarás una
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar GNU/Linux como tu Sistema Operativo.
3. Haz tu propio [fork](https://help.github.com/articles/fork-a-repo/)
   de [ este repositorio](https://github.com/OlgaContreras911/cdmx-2019-01-bc-core-am-cipher)
4. [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm run test`.
##Consideraciones técnicas
Este proyecto está desarrollado con:
- EMS6 JavaScriptpuro [JSVanilla](https://medium.com/laboratoria-developers/vanillajs-vs-jquery-31e623bbd46e).
-CSS3
-HTML5
- Se realizaron [pruebas unitarias]() para validar la funcionalidad de codificación y decodificación. Estos test se implementaron con [Mocha](https://mochajs.org/) y assertion library de [Chai](https://www.chaijs.com/).
- Como gestor de proyecto de utilizó NPM (Node Package Manager).
## Pruebas
Las pruebas automatizadas para este sistema requieren de una instalación simple a través del comando npm install. Los tests verifican que regrese una letra acorde a la posición ingresada en el offset. Analiza que la función  cifrar retorne "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33; y que la función decifrar retorne retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33. No cifra caracteres especiales y espacios (" !@" debería retornar  " !@"', ).

## Autores
-Olga Guadalupe Contreras Monsivais
## Expresiones de gratitud
Agradezco el apoyo de mi squad "Guacacoders" y Laboratoria. 
# UX-UI
## Antecedentes
Por medio de encuestas, identifique a los usuarios mas interesados en una aplicación que ofrezca los servicios de un cifrado César. El grupo al que le pareció mas útil fue a personas de entre 20 y 30 años de edad, interesados en proteger cierta información privada en el ámbito personal y profesional.
## Cliente Modelo
Mario Salgado es un hombre de 25 años al cuál simpre le ha interesado la tecnología y las aplicaciones que le ofrezcan algo con lo cual innovar su entorno. Últimamente  esta interesado en una forma de mandar cierta información a sus contactos personales y de trabajo. Se encuentra con varios problemas al querer realizar esto; en su trabajo muchas veces utilizan su computadora sin pedir permiso y cuando le llegan correos o mensajes con temas personales o profesiolnales delicados, han logrado tener acceso a ellos; en su celular encuentra un problema similar, cuando llega a prestar su teléfono, alguien en su entorno lo toma o simplemente llegan a leer el mensaje desde la distancia.
Al utilizar Ceasar Code Message Mario ha logrado evitar esto,  pues no solo ha logrado proteger sus mensajes, además ha tenido un buen momento gracias a su interés por aplicaciones que le ofrezcan cosas útile y novedosas.
## Usabilidad
El ususario puede ingresar el mensaje que necesite transformar, este puede incluir números, mayúsculas, minúsculas y espacios; además de esto, puede elegir el número de posiciones a las que desee desplazar su mensaje.
## Boceto
Al utilizar el boceto, los usuarios se sintieron confundidos con el uso de las cajas, pues olvidaban poner el número de desplazamiento (offset) al momento de intentar decifrar/cifrar el mensaje; también expresaron sentir que los botones eran muy pequeños y por lo tanto difíciles de utilizar, en este sentido, les gustaría poder tener un botón que no solo finalíce la aplicación y los retorne al inicio, si  no también un botón que les permita limpiar los campos para poder empezar de nuevo sin tener que regresar o borrar los mensajes manualmente; expresaron agrado por el detalle de ver su nombre impreso en pantalla, pues les hizo sentir cierto grado de personalización y confianza; por último expresaron gran aceptación por el fondo utilizado en la primer pantalla, sin embargo los encabezados y el color de fondo en las otras dos pantallas no fueron del agrado visual, expresando que no les hacia sentir que estaban utilizando una aplicación dedicada a cifrar mensajes.  Si deseas consultar físicamente ingresa al siguiente link: (https://marvelapp.com/8204i2d/screen/52336642).

## Resultado Final
<a href="https://ibb.co/bdvdbVG"><img src="https://i.ibb.co/0J9JsLz/hihih.png" alt="hihih"></a>



Para obtener este proyecto, entra a este link....
ESte proyecto trabaja con npm....
Como instalar...
ejecución de las pruebas....test y sus descripciones
prueba de estipos y decodificación
Constuido con... lo que usaste para construirlo
porque decidieron hacer ciertos cambios y como quedo
explica quienes son los usuarios, que problema, contexto, como soluciona problemas a los usiarios
modelo de negocio como extra
Para conocer el proceso de diseño de este proyecto puede ir a este link



var panorama, viewer, container, infospot;

container = document.querySelector('#container_principal');


panorama = new PANOLENS.ImagePanorama('imagenes/habitacion360.jpg');




//1. piano

var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(-239 ,-447 , -500);
infospot1.addHoverText('Un audio MP3 multimedial...', -60);
infospot1.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio1.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot1);


//2. escultura
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(500 ,-236 , -440);
infospot2.addHoverText('>Esta escultura abstracta, creada por un artista local de un pueblo montañés, representa un rostro humano estilizado inspirado en las leyendas de la región, que hablan de espíritus guardianes de las montañas, cada pieza refleja la conexión entre la humanidad y la naturaleza.', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(99, 58, 5, 0.9); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 300px;">Esta escultura abstracta, creada por un artista local de un pueblo montañés, representa un rostro humano estilizado inspirado en las leyendas de la región, que hablan de espíritus guardianes de las montañas, cada pieza refleja la conexión entre la humanidad y la naturaleza.</div>';
panorama.add(infospot2);

//3. cuadro mueble
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(500 ,22 , 69);
infospot3.addHoverText('La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.', -60);
infospot3.element.innerHTML = `
    <div class="" style="">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/e-lQYKYbOtI"></iframe>        
    </div>`;
panorama.add(infospot3);

//4. silla blanca
var infospot4 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
var infospot4 = new PANOLENS.Infospot(200, 'imagenes/info.png');
infospot4.position.set(360 ,-257 , 499);
infospot4.addHoverText('Una máquina que obedece órdenes para efectuar cálculos y operaciones lógicas en poco tiempo. Es un dispositivo que puede recibir, almacenar, procesar información y generar resultados o respuestas.', -60);
infospot4.element.innerHTML = '<img src="imagenes/logo.png" width="320px" height="240"><div style="background-color: rgba(69, 148, 208, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 320px;">Una máquina que obedece órdenes para efectuar cálculos y operaciones lógicas en poco tiempo. Es un dispositivo que puede recibir, almacenar, procesar información y generar resultados o respuestas.</div>';
panorama.add(infospot4);

//5.Lampara
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(443 ,16 , -500);
infospot5.addHoverText('Esta lámpara de pared, con un diseño minimalista en madera reciclada, emite una luz suave que crea una atmósfera cálida y acogedora, complementando perfectamente la decoración rústica de la habitación.', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(99, 58, 5, 0.9); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 300px;"> Esta lámpara de pared, con un diseño minimalista en madera reciclada, emite una luz suave que crea una atmósfera cálida y acogedora, complementando perfectamente la decoración rústica de la habitación. </div>';
panorama.add(infospot5);

//6. Cuadro piano

var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-450 ,144 , -500);
infospot6.addHoverText('Este cuadro abstracto, con su marco dorado, invita a la reflexión con su enigmático diseño. El cuadrado en el centro parece ser un portal hacia lo desconocido, evocando una sensación mística y espiritual. La mezcla de texturas y sombras crea un aura de misterio, transformando la habitación en un espacio donde lo visible y lo invisible se encuentran.', -60);
infospot6.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 300px;">Este cuadro abstracto, con su marco dorado, invita a la reflexión con su enigmático diseño. El cuadrado en el centro parece ser un portal hacia lo desconocido, evocando una sensación mística y espiritual. La mezcla de texturas y sombras crea un aura de misterio, transformando la habitación en un espacio donde lo visible y lo invisible se encuentran.</div>';
panorama.add(infospot6);

//7.Alfombra

var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
//var infospot7 = new PANOLENS.Infospot(50,'imagenes/info.png');
infospot7.position.set(500 ,-467 , 172);
infospot7.addHoverText('Click para entrar al PDF', 100);
infospot7.element.innerHTML = '<div style="background-color: rgba(99, 58, 5, 0.9); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 300px;">Click para entrar al PDF. <br><br>Alfombra Vintage de Felpa: Un Toque de Lujo y Confort en la Habitación de Montaña</div>';


infospot7.addEventListener('click', function() {
    window.open("pdf/alfombra.pdf", "_blank");
});
panorama.add(infospot7);

//8.Sillon

var infospot8 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot8.position.set(3 ,-284 , 500);
infospot8.addHoverText('Netflix videos', -60);
infospot8.element.innerHTML = `
    <div class="" style="">
   <iframe width="560" height="315" src="https://www.youtube.com/embed/h-2LIjOt0rA?si=wUR9UljqghvIgUzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>       
    </div>
`;
panorama.add(infospot8);


viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);


//9 .Guitarra
var infospot9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot9.position.set(-400 ,-500 , 365);
infospot9.addHoverText('Un audio MP3 multimedial...', -60);
infospot9.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio1.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot9);


//10. Mueble
var infospot10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot10.position.set(500 ,-219 , 265);
infospot10.addHoverText('Un video beam o proyector es un dispositivo electrónico que recibe una señal de video desde una fuente externa (como un computador, un reproductor de DVD, un celular o una consola de videojuegos) y la convierte en luz para proyectarla en una pantalla o superficie plana.', -60);
infospot10.element.innerHTML = '<div style="background-color: rgba(99, 58, 5, 0.9); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 300px;"> Este mueble de madera rústica en tonos cálidos de marrón y beige añade un toque natural y acogedor a la habitación. Su diseño elegante y funcional complementa perfectamente el ambiente de montaña, creando una atmósfera cálida y armoniosa.</div>';
panorama.add(infospot10);

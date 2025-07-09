
var panorama, viewer, container, infospot;

container = document.querySelector('#container_principal');


panorama = new PANOLENS.ImagePanorama('imagenes/habitacion360.jpg');




//1. piano
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(-239 ,-447 , -500);
infospot1.addHoverText('Un televisor 4K es un televisor con resolución 4K. Esto significa que el televisor tiene 3840 píxeles horizontales y 2160 píxeles verticales, lo que representa un total de aproximadamente 8.3 millones de píxeles. En las especificaciones de los televisores, las resoluciones generalmente se muestran como “3840 x 2160” para televisores 4K.', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Un televisor 4K es un televisor con resolución 4K. Esto significa que el televisor tiene 3840 píxeles horizontales y 2160 píxeles verticales, lo que representa un total de aproximadamente 8.3 millones de píxeles. En las especificaciones de los televisores, las resoluciones generalmente se muestran como “3840 x 2160” para televisores 4K.</div>';
panorama.add(infospot1);


//2. escultura
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(500 ,-236 , -440);
infospot2.addHoverText('Una impresora es un dispositivo periférico de salida del ordenador que permite producir una gama permanente de textos o gráficos de documentos almacenados en un formato electrónico, imprimiéndolos en medios físicos, normalmente en papel, utilizando cartuchos de tinta o tecnología láser (con tóner).', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Una impresora es un dispositivo periférico de salida del ordenador que permite producir una gama permanente de textos o gráficos de documentos almacenados en un formato electrónico, imprimiéndolos en medios físicos, normalmente en papel, utilizando cartuchos de tinta o tecnología láser (con tóner).</div>';
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
infospot5.addHoverText('Un video beam o proyector es un dispositivo electrónico que recibe una señal de video desde una fuente externa (como un computador, un reproductor de DVD, un celular o una consola de videojuegos) y la convierte en luz para proyectarla en una pantalla o superficie plana.', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(127, 17, 224, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> Un video eam o proyector es un dispositivo electrónico que recibe una señal de video desde una fuente externa (como un computador, un reproductor de DVD, un celular o una consola de videojuegos) y la convierte en luz para proyectarla en una pantalla o superficie plana. </div>';
panorama.add(infospot5);

//6. Cuadro piano
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-450 ,144 , -500);
infospot6.addHoverText('Un audio MP3 multimedial...', -60);
infospot6.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio1.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot6);


//7.Alfombra

var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
//var infospot7 = new PANOLENS.Infospot(50,'imagenes/info.png');
infospot7.position.set(500 ,-467 , 172);
infospot7.addHoverText('Entrar al PDF', 100);
infospot7.element.innerHTML = '<div style="background-color: rgba(0, 0, 255, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Entrar al PDF. El proceso de creacion de un sitio web, una aplicación o un softwarer</div>';


infospot7.addEventListener('click', function() {
    window.open("pdf/tour.pdf", "_blank");
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
infospot10.element.innerHTML = '<div style="background-color: rgba(127, 17, 224, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> Un video eam o proyector es un dispositivo electrónico que recibe una señal de video desde una fuente externa (como un computador, un reproductor de DVD, un celular o una consola de videojuegos) y la convierte en luz para proyectarla en una pantalla o superficie plana. </div>';
panorama.add(infospot10);

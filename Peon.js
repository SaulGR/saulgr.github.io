var anilloForma = new THREE.RingGeometry( 1, 5, 32 );
var esferaForma = new THREE.SphereGeometry(.65);
esferaForma.translate(0,2,0);

var anilloMalla = new THREE.Mesh(anilloForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var arbolForma = new THREE.Geometry();
peonForma.merge(anilloMalla.geometry, anilloMalla.matrix);
peonForma.merge(esferaMalla.geometry, esferaMalla.matrix);

var material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var peonMalla = new THREE.Mesh(peonForma, material);

var escena = new THREE.Scene();
escena.add(peonMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

var iluminacion = new THREE.AmbientLight(0xFFFFFF);

var forma = new THREE.SphereGeometry(1);
var material = new THREE.MeshLambertMaterial({color: "#00c00"});
var malla  = new THREE.Mesh(forma, material);

var escena = new THREE.Scene()
escena.add(malla);
escena.add(iluminacion);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);


renderer.render(escena, camara);

var camara = new THREE.OrthographicCamera();

camara.left = window.innerWidth / -2;
camara.right = window.innerWidth / 2;
camara.top = window.innerHeight / 2;
camara.bottom = window.innerHeight / -2;
camara.near =  0.1;
camara.far = 1000;
camara.updateProjectionMatrix();

camara.position.z = 100;

var cubo = new THREE.Mesh( new THREE.BoxGeomtery(30, 30, 30);
                           new THREE

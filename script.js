const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / 500,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("dancerCanvas"),
  alpha: true,
  antialias: true,
});
renderer.setSize(window.innerWidth, 500);

const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
scene.add(light);

// Optional: Add a ground plane
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({ color: 0x0f766e, side: THREE.DoubleSide })
);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1.5;
scene.add(plane);

// Load GLTF model (replace with your actual model URL)
const loader = new THREE.GLTFLoader();
loader.load(
  "https://models.readyplayer.me/64fa261501b2f7603c66b97d.glb", // 🔁 Replace with your Kathak model
  function (gltf) {
    const model = gltf.scene;
    model.scale.set(1.5, 1.5, 1.5);
    model.position.y = -1.5;
    scene.add(model);
  },
  undefined,
  function (error) {
    console.error("Error loading GLTF model:", error);
  }
);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

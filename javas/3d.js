import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const class_Event = document.getElementById('threeDModelContainer')//добавь сюда див, в котором будет 3д

// Сцена
const scene = new THREE.Scene();
scene.background = new THREE.Color('#9400CA'); // Задайте нужный цвет или используйте текстуру

// Камера
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Рендерер
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.LinearToneMapping; // Установка toneMapping
renderer.toneMappingExposure = 1; // Установка exposure
class_Event.appendChild(renderer.domElement);

// Освещение
// Ambient light (непрямое освещение)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // ambientIntensity = 0.3
scene.add(ambientLight);

// Directional light (прямое освещение)
const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5); // directIntensity = 2.5
directionalLight.position.set(1, 1, 1); // Позиция источника света
scene.add(directionalLight);

// Загрузка модели
const loader = new GLTFLoader();
let model = null;

loader.load(
    './3ds/LUNGS1.glb', // Путь к модели
    (gltf) => {
        model = gltf.scene;
        model.position.set(1, 1, 1); // Устанавливаем позицию модели
        model.scale.set(3, 3, 3); // Масштабируем модель
        scene.add(model);
    },
    undefined,
    (error) => {
        console.error('Ошибка загрузки модели:', error);
    }
);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Плавность вращения
controls.dampingFactor = 0.01;
controls.minDistance = 1; // Минимальное приближение камеры
controls.maxDistance = 10; // Максимальное удаление камеры
controls.target.set(0, 0, 0);
// Анимация
function animate() {
    requestAnimationFrame(animate);

    // Вращение модели
    if (model) {
        model.rotation.y += 0.001; // Вращение вокруг оси Y
        model.rotation.x -= 0.001; // (опционально) вращение вокруг оси X
        model.rotation.z -= 0.001;
    }

    renderer.render(scene, camera);
}

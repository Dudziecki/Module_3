let images = [
    {name: "Закат в горах", src: "https://picsum.photos/seed/img1/600/400"},
    {name: "Океан", src: "https://picsum.photos/seed/img2/600/400"},
    {name: "Лесная тропа", src: "https://picsum.photos/seed/img3/600/400"},
    {name: "Город ночью", src: "https://picsum.photos/seed/img4/600/400"},
    {name: "Пустыня", src: "https://picsum.photos/seed/img5/600/400"},
    {name: "Водопад", src: "https://picsum.photos/seed/img6/600/400"},
    {name: "Озеро", src: "https://picsum.photos/seed/img7/600/400"},
    {name: "Снежные вершины", src: "https://picsum.photos/seed/img8/600/400"},
    {name: "Цветочное поле", src: "https://picsum.photos/seed/img9/600/400"},
    {name: "Старинный мост", src: "https://picsum.photos/seed/img10/600/400"}
];

let loadedCount = 0;
const batchSize = 6;
let activeIndex = -1;
let observer = null;
let draggedCard = null;
let droppedIntoPreview = false;

const gallery = document.getElementById('gallery');
const cardGrid = document.getElementById('card-grid');
const preview = document.getElementById('preview');
const resizeBar = document.getElementById('resize-bar');
const scrollTopBtn = document.getElementById('scroll-top');
const dragCoords = document.getElementById('drag-coords');

const nameInput = document.getElementById('image-name');
const fileInput = document.getElementById('image-file');
const addBtn = document.getElementById('add-btn');

init();

function init() {
    setupIntersectionObserver();
    resetGallery();
    setupResize();
    setupForm();
    setupKeyboard();
    setupDragEvents();
}

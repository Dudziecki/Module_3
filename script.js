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

function resetGallery() {
    if (observer) observer.disconnect();
    loadedCount = 0;
    cardGrid.innerHTML = '';
    loadBatch();
    activeIndex = -1;
    clearPreview();
}

function loadBatch() {
    const fragment = document.createDocumentFragment();
    const end = Math.min(loadedCount + batchSize, images.length);
    for (let i = loadedCount; i < end; i++) {
        fragment.appendChild(createCard(i));
    }
    cardGrid.appendChild(fragment);
    loadedCount = end;

    if (loadedCount < images.length) {
        const last = cardGrid.lastElementChild;
        if (last) observer.observe(last);
    } else {
        toggleScrollTop();
    }
}

function setupIntersectionObserver() {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                if (loadedCount < images.length) loadBatch();
            }
        });
    }, {root: gallery, threshold: 0.5});
}

function createCard(index) {
    const imgData = images[index];
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = String(index);
    card.draggable = true;

    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.name;
    img.loading = 'lazy';

    const name = document.createElement('div');
    name.className = 'card-name';
    name.textContent = imgData.name;

    card.appendChild(img);
    card.appendChild(name);

    card.addEventListener('click', () => setActive(index));

    card.addEventListener('dragstart', (e) => {
        draggedCard = card;
        droppedIntoPreview = false;
        card.classList.add('dragging');
        e.dataTransfer.setData('text/plain', String(index));
        e.dataTransfer.effectAllowed = 'move';
        dragCoords.classList.add('visible');
    });

    card.addEventListener('dragend', (e) => {
        card.classList.remove('dragging');
        draggedCard = null;
        dragCoords.classList.remove('visible');
        dragCoords.textContent = '';
    });

    return card;
}

function setActive(index) {
    if (index < 0 || index >= images.length) return;
    document.querySelectorAll('.card.active').forEach(c => c.classList.remove('active'));
    activeIndex = index;
    const card = cardGrid.querySelector(`.card[data-index="${index}"]`);
    if (card) card.classList.add('active');
    renderPreview(images[index], index);
    updateNavButtons();
}

function renderPreview(imgData, index) {
    preview.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'preview-image-container';

    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.name;

    const close = document.createElement('div');
    close.className = 'close-btn';
    close.textContent = '╳';
    close.addEventListener('click', clearPreview);

    container.appendChild(img);
    container.appendChild(close);
    preview.appendChild(container);

    const nav = createNavButtons(index);
    preview.appendChild(nav);
}

function createNavButtons(index) {
    const wrapper = document.createElement('div');
    wrapper.className = 'nav-buttons';

    const prev = document.createElement('button');
    prev.className = 'nav-btn';
    prev.textContent = '←';
    prev.disabled = index === 0;
    prev.addEventListener('click', () => setActive(activeIndex - 1));

    const next = document.createElement('button');
    next.className = 'nav-btn';
    next.textContent = '→';
    next.disabled = index === images.length - 1;
    next.addEventListener('click', () => setActive(activeIndex + 1));

    wrapper.appendChild(prev);
    wrapper.appendChild(next);
    return wrapper;
}

function updateNavButtons() {
    if (activeIndex === -1) return;
    const [prev, next] = preview.querySelectorAll('.nav-btn');
    if (prev) prev.disabled = activeIndex === 0;
    if (next) next.disabled = activeIndex === images.length - 1;
}

function clearPreview() {
    activeIndex = -1;
    document.querySelectorAll('.card.active').forEach(c => c.classList.remove('active'));
    preview.innerHTML = '<div class="placeholder">Выберите изображение</div>';
}

gallery.addEventListener('scroll', () => {
    toggleScrollTop();
});

function toggleScrollTop() {
    const reachedEnd = loadedCount >= images.length;
    const scrolled = gallery.scrollTop > 80;
    scrollTopBtn.classList.toggle('visible', reachedEnd && scrolled);
}

scrollTopBtn.addEventListener('click', () => {
    gallery.scrollTo({top: 0, behavior: 'smooth'});
});

let isResizing = false;

function setupResize() {
    resizeBar.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizeBar.classList.add('active');
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        const container = document.querySelector('.main-container');
        const rect = container.getBoundingClientRect();
        const total = rect.width;
        let leftWidth = e.clientX - rect.left;
        const minLeft = total * 0.3; // 30%
        const minRight = total * 0.2; // 20%

        if (leftWidth < minLeft) leftWidth = minLeft;
        if (total - leftWidth < minRight) leftWidth = total - minRight;

        const leftPercent = (leftWidth / total) * 100;
        const rightPercent = 100 - leftPercent;

        document.querySelector('.gallery').style.flexBasis = leftPercent + '%';
        document.querySelector('.preview').style.flexBasis = rightPercent + '%';
    });

    document.addEventListener('mouseup', () => {
        if (isResizing) {
            isResizing = false;
            resizeBar.classList.remove('active');
        }
    });
}

function setupForm() {
    addBtn.addEventListener('click', addImage);
    fileInput.addEventListener('change', autoFillName);
}

function autoFillName() {
    const f = fileInput.files && fileInput.files[0];
    if (!f) return;
    const name = f.name.split('.').slice(0, -1).join('.') || f.name;
    nameInput.value = name;
}

function addImage() {
    const file = fileInput.files && fileInput.files[0];
    const name = nameInput.value.trim();
    if (!file || !name) {
        alert('Введите имя и выберите файл');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        images.unshift({name, src: e.target.result});
        resetGallery();
        setTimeout(() => setActive(0), 50);
        nameInput.value = '';
        fileInput.value = '';
    };
    reader.onerror = () => alert('Ошибка чтения файла');
    reader.readAsDataURL(file);
}
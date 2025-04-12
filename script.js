const images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg'
];

let currentIndex = 0;

function showImage(index) {
  const main = document.getElementById('mainImage');
  main.src = images[index];
  currentIndex = index;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

window.onload = function () {
  const container = document.getElementById('thumbnailContainer');
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Thumb " + (index + 1);
    img.onclick = () => showImage(index);
    container.appendChild(img);
  });

  showImage(0);
};

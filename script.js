// En array med länkar till bilder
const imageUrls = [
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/3.png?v=1739960063174',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/4.png?v=1739960063174',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/5.png?v=1739960063174',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/7.png?v=1739960067734',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/9.jpg?v=1739960072123',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/10.jpg?v=1739960076816',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/11.jpg?v=1739960088464',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/12.jpg?v=1739960088464',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/13.png?v=1739960095492',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/14.png?v=1739960095492',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/15.png?v=1739960095492',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/16.jpg?v=1739960102680',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
    'https://cdn.glitch.global/7060d213-3a40-4945-ab89-daac3678a11f/2.jpg?v=1739960059538',
];

const gallery = document.querySelector('.gallery');


// Skapa 50 bilder
for (let i = 0; i < 50; i++) {
    const img = document.createElement('img');
    img.src = imageUrls[i % imageUrls.length]; // Använder en bild från listan
    img.alt = 'Bild ' + (i + 1);
    gallery.appendChild(img);
}



// Lägg till eventlistener för musrörelse
document.addEventListener('mousemove', (e) => {
    // Hämta musens position på skärmen
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    // Använd musens position för att skapa en förflyttningseffekt
    // Flytta griden lite beroende på musens position
    const moveX = (mouseX - 0.5) * 10;  // Justera styrkan på rörelsen här (20 är styrkan)
    const moveY = (mouseY - 0.5) * 10;  // Justera styrkan på rörelsen här (20 är styrkan)

    // Applicera transformation på griden
    gallery.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


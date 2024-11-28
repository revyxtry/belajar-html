// toggel class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klick
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }else{}
});


document.addEventListener("DOMContentLoaded", () => {
    const zoomOverlay = document.getElementById("zoomOverlay");
    const zoomedImage = document.getElementById("zoomedImage");
    const zoomableImages = document.querySelectorAll(".zoomable");
  
    // Tambahkan event listener ke setiap gambar
    zoomableImages.forEach((img) => {
      img.addEventListener("click", () => {
        zoomedImage.src = img.src; // Set sumber gambar yang diklik
        zoomOverlay.style.display = "flex"; // Tampilkan overlay
      });
    });
  
    // Klik overlay untuk menutup gambar zoom
    zoomOverlay.addEventListener("click", () => {
      zoomOverlay.style.display = "none"; // Sembunyikan overlay
    });
  });
  
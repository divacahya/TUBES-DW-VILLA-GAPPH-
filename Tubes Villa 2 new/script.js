document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(".animate-fade-in");
    
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0"; // Start hidden
  
      setTimeout(() => {
        element.style.transition = "opacity 1.5s ease-in-out";
        element.style.opacity = "1"; // Fade in effect
      }, 100); // Delay before starting animation
    });
  });

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const heroImage = document.getElementById("hero-image");
    const overlay = heroImage.previousElementSibling; // Mengambil overlay hitam
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ketika gambar terlihat di layar
            heroImage.classList.add("animate-fade-in-up"); // Menambahkan animasi fade-in-up
            heroImage.classList.remove("opacity-0"); // Menghapus opacity 0
  
            // Animasi untuk overlay hitam
            overlay.classList.add("opacity-0"); // Mengurangi opacity overlay hitam
            overlay.classList.remove("opacity-50"); // Menghapus transparansi
  
            observer.unobserve(heroImage); // Menghentikan pengamatan setelah animasi dipicu
          }
        });
      },
      { threshold: 0.1 } // Ketika 10% dari gambar terlihat di layar
    );
  
    observer.observe(heroImage); // Memulai pengamatan terhadap gambar
  });
  
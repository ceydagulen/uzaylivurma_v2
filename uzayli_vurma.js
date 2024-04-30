

const baslatButon = document.getElementById("baslat");
const uzaylilar = document.querySelectorAll(".uzaylı");
const hareketSuresi = 3000; // Hareket süresi (ms)

let skor = 0;
let siradakiUzayliIndex = 0;

baslatButon.addEventListener("click", startGame);

function rastgeleSüre(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function yukarı(uzayli) {
  const uzayliSüresi = rastgeleSüre(750, 1250);
  uzayli.classList.add("secilen");
  setTimeout(() => {
    uzayli.classList.remove("secilen");
    siradakiUzayliIndex++;
    if (siradakiUzayliIndex < uzaylilar.length) {
      yukarı(uzaylilar[siradakiUzayliIndex]);
    }
  }, uzayliSüresi);
}

function startGame() {
  siradakiUzayliIndex = 0;
  skor = 0;
  uzaylilar.forEach((uzayli) => {
    yukarı(uzayli);
  });
}
function vur(e) {
    if (e.target.classList.contains("uzaylı") && !süreDoldu) {
      skor++;
      e.target.classList.remove("uzaylı");
      skorText.textContent = "Skor: " + skor;
    }
  }
  
function detectCountry() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Puedes hacer alguna lógica aquí para inferir el país a partir de las coordenadas
        console.log("Latitud:", latitude, "Longitud:", longitude);
        // Aquí podrías mapear las coordenadas a un país
      },
      (error) => {
        console.error("Error obteniendo la geolocalización:", error);
      },
    );
  } else {
    console.log("Geolocalización no soportada en este navegador.");
  }
}

function detectDevice() {
  const userAgent = navigator.userAgent;
  const isMobile = /mobile/i.test(userAgent);
  console.log(userAgent);

  if (isMobile) {
    const desktopContent = document.getElementById("desktop-content");
    desktopContent.style.display = "none";
    document.getElementById("mobile-content").style.display = "block";
  } else {
    document.getElementById("desktop-content").style.display = "block";
    setTimeout(() => {
      document.getElementById("download-link").click();
    }, 1000);
  }
}

detectDevice();

detectCountry();

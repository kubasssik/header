export function geoFindMe() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");
  
    mapLink.href = "";
    mapLink.textContent = "";
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
    }
  
    function error() {
      status.textContent = "Невозможно получить ваше местоположение";
    }
  
    if (!navigator.geolocation) {
      status.textContent = "Geolocation не поддерживается вашим браузером";
    } else {
      status.textContent = "Определение местоположения…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  
  
  
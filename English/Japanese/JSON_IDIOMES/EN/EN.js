const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);

if (urlParams.get('lang')) {
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  // Guardar el idioma en la URL
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  // Obtener el archivo JSON correspondiente
  const response = await fetch(`./i18n/${lang}.json`);
  const data = await response.json();


  // Cambiar los textos
  document.getElementById('main-title').textContent = data[lang].title;
  document.getElementById('main-content').textContent = data[lang].content;
}




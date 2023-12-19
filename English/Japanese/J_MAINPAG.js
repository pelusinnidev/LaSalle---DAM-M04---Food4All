// Definim una funció que s'executarà quan l'usuari escriu a la barra de cerca.
function search() {
    // Obtenim el terme de cerca introduït a la barra de cerca.
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
    // Obtenim tots els elements de paràgraf (p) a la pàgina.
    var paragraphs = document.getElementsByTagName('p');
  
    // Obtenim l'element on mostrarem els resultats de la cerca.
    var searchResultsContainer = document.getElementById('searchResults');
  
    // Creem un array per emmagatzemar els resultats de la cerca.
    var results = [];
  
    // Recorrem tots els elements de paràgraf.
    for (var i = 0; i < paragraphs.length; i++) {
      // Obtenim el text de cada paràgraf i el convertim a minúscules per a una cerca no sensible a majúscules/minúscules.
      var paragraphText = paragraphs[i].textContent.toLowerCase();
  
      // Comprovem si el terme de cerca apareix al paràgraf.
      if (paragraphText.includes(searchTerm)) {
        // Si sí, afegim el text del paràgraf als resultats.
        results.push({
          text: paragraphs[i].textContent,
          location: getLocation(paragraphs[i]) // Afegim la ubicació del paràgraf
        });
      }
    }
  
    // Limitem el nombre de resultats a mostrar a un màxim de 3.
    var limitedResults = results.slice(0, 3);
  
    // Cridem a la funció per mostrar els resultats de la cerca.
    displaySearchResults(limitedResults);
  }
  
  // Aquesta funció mostra els resultats de la cerca a l'element HTML designat.
  function displaySearchResults(results) {
    // Obtenim l'element on mostrarem els resultats de la cerca.
    var searchResultsContainer = document.getElementById('searchResults');
  
    // Borrem qualsevol resultat existent abans de mostrar els nous resultats.
    searchResultsContainer.innerHTML = '';
  
    // Comprovem si hi ha resultats.
    if (results.length === 0) {
      // Si no hi ha resultats, mostrem un missatge indicant-ho.
      searchResultsContainer.innerHTML = '<p>No s\'han trobat resultats.</p>';
    } else {
      // Si hi ha resultats, afegim cada resultat com a un nou element de paràgraf a l'element on mostrarem els resultats.
      for (var i = 0; i < results.length; i++) {
        var resultElement = document.createElement('p');
        
        // Creem un enllaç amb la ubicació del resultat.
        var linkElement = document.createElement('a');
        linkElement.href = results[i].location;
        linkElement.textContent = results[i].text;
        resultElement.appendChild(linkElement);
  
        searchResultsContainer.appendChild(resultElement);
      }
    }
  }
  
  // Aquesta funció retorna la ubicació d'un element en format de cadena.
  function getLocation(element) {
    var path = [];
    while (element) {
      var nodeName = element.nodeName.toLowerCase();
      var parent = element.parentNode;
  
      if (nodeName !== 'html' && nodeName !== 'body') {
        var tagId = element.id ? '#' + element.id : '';
        var tagClass = element.className ? '.' + element.className.replace(/\s+/g, '.') : '';
        path.unshift(nodeName + tagId + tagClass);
      }
  
      element = parent;
    }
  
    return path.join(' > ');
  }
  
//Aquest sistema de búsqueda és una modificació del sistema de búsqueda de la pàgina web https://www.digitalocean.com/community/tutorials/how-to-add-search-functionality-to-a-website-with-javascript


//ES PER FER SCROLL I CAMBIAR DE COLOR
// Selecciona el elemento del menú de navegación
 /*const nav = document.querySelector('nav');

// Registra un evento de desplazamiento en la ventana
window.addEventListener('scroll', () => {
    // Verifica si el desplazamiento vertical es mayor que 100px (puedes ajustar este valor)
    if (window.scrollY > 100) {
        // Si es mayor, agrega la clase 'nav-scrolled'
        nav.classList.add('nav-scrolled');
    } else {
        // Si es menor, quita la clase 'nav-scrolled'
        nav.classList.remove('nav-scrolled');
    }
});*/

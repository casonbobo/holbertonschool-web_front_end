function createElement(data){
    var element = document.getElementById('body');
    var paragraph = document.createElement('p');
    paragraph.textContent = data;
    element.appendChild(paragraph);
        
}

function queryWikipedia(callback) {
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  
    const web = new XMLHttpRequest();
    web.open("GET", url, true);
    callback(extract);  
    web.send();
}

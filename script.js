// Encadrés déjà ouvert au lancement de la page

new WinBox("Window", {
    border: "0.3em",
    width: "30%",
    height: "30%", 
    x: "center",
    y: "center",
    mount: document.getElementById("window_title").cloneNode(true)
    
});

new WinBox("Window Icon", {
    border: "0.3em",
    width: "18%",
    height: "40%", 
    x : "80%", 
    y : "10%",
    mount: document.getElementById("window_iconn").cloneNode(true)

});
new WinBox("Window_présentation.txt", {
    border: "0.3em",
    width: "30%",
    height: "40%", 
    x : "4%", 
    y : "10%",
    mount: document.getElementById("window_description").cloneNode(true)

});

new WinBox("Buttons", {
  border: "0.3em",
  width: "35%",
  height: "18%",
  x: "60%",
  y: "80%",
  mount: document.getElementById("window_menu").cloneNode(true)
});


// Fonction permettant d'ouvrir les encadrés (seulement les 2 premiers sont utilisés)

function openavengtage() {
  new WinBox("Aventage", {
    border: "0.3em",
    width: "35%",
    height: "34%", 
    x: "40%",
    y: "20%",
    mount: document.getElementById("Aventage").cloneNode(true)
  });
}

function openinvonvégant() {
  new WinBox("Inconvéniant", {
    border: "0.3em",
    width: "30%",
    height: "40%", 
    x: "20%", 
    y: "70%",
    mount: document.getElementById("inconvégant").cloneNode(true)
  });
}

function openwindows() {
  new WinBox("Window", {
  border: "0.3em",
  width: "30%",
  height: "30%", 
  x: "center",
  y: "center",
  mount: document.getElementById("window_title").cloneNode(true)
  
  });
}

function openicon() {
  new WinBox("Window Icon", {
    border: "0.3em",
    width: "18%",
    height: "40%", 
    x : "80%", 
    y : "10%",
    mount: document.getElementById("window_iconn").cloneNode(true)

  });
}

function opendescription() {
  new WinBox("Window_présentation.txt", {
    border: "0.3em",
    width: "30%",
    height: "40%", 
    x : "4%", 
    y : "4%",
    mount: document.getElementById("window_description").cloneNode(true)

  });
}

function opengreenred() {
  new WinBox("Buttons", {
      border: "0.3em",
      width: "35%",
      height: "18%",
      x: "60%",
      y: "80%",
      mount: document.getElementById("window_menu").cloneNode(true)
  });
}


// Vous pensiez vraiment trouver quelchose d'interessant ici ? À part quelques lignes de codes il n'y a rien d'intéressant
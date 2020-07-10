var options = {

    // Set this false to deactivate alert
    enableAlert: true, 

    // Customize this to change alert text
    alertText: "Mouse right click is disabled!" 
    
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
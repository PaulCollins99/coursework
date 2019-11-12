function populateOptions() {
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).substring(0, 9) == "saveFile:") {
            const option = document.createElement("option")
            option.value = localStorage.key(i).substring(9);
            option.textContent = localStorage.key(i).substring(9);
            document.getElementById("openSelect").appendChild(option);
        }
    }
}

function navigate () {
    location.href = "editor.html";
}

function boot() {
    window.openButton.addEventListener('click', navigate);
    populateOptions();
}

window.addEventListener('load', boot);
/*Index Page*/

function startTimer(){
    window.setTimeout("einblenden()", 500);

}

function einblenden(){
    var obj = document.getElementById("background");
    obj.style.display = "inherit";
}

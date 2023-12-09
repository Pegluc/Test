function verification () {
    document.querySelector("#overlay").style.display = "flex";
    document.querySelector("body").style.overflow = "hidden";
}

function off() {
    document.querySelector("#overlay").style.display = "none";
    document.querySelector("body").style.overflow = "revert";
  }
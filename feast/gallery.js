const galleryToggles = document.querySelectorAll(".gallery_toggle");
const galleryModalBcg = document.getElementById("gallery_slider_bcg");
const galleryModal = document.getElementById("gallery_slider_holder");
let GMOn = false;

for (let i = 0; i < galleryToggles.length; i++) {
    galleryToggles[i].addEventListener("click", () =>{
        if(!GMOn){
            GMOn = true;
            galleryModalBcg.classList.add("on");
            galleryModal.classList.add("on");
        }
        else{
            GMOn = false;
            galleryModalBcg.classList.remove("on");
            galleryModal.classList.remove("on");
        }
    })
}
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
        GMOn = false;
        galleryModalBcg.classList.remove("on");
        galleryModal.classList.remove("on");
    }
});
class galleryItem{
    constructor(url){
        this.url = url;
    }
}
let galleryItems = [
    new galleryItem("images/home/home_hero.webp"),
    new galleryItem("images/events/private_dining/private_dining_1.webp"),
    new galleryItem("images/events/wedding/wedding_1.webp"),
    new galleryItem("images/events/gala/gala_1.webp"),
    new galleryItem("images/events/awards/awards_1.webp"),
    new galleryItem("images/events/wedding/wedding_1.webp"),
    new galleryItem("images/home/home_hero.webp"),
    new galleryItem("images/events/private_dining/private_dining_1.webp"),
    new galleryItem("images/events/wedding/wedding_1.webp"),
    new galleryItem("images/events/gala/gala_1.webp"),
    new galleryItem("images/events/awards/awards_1.webp"),
    new galleryItem("images/events/wedding/wedding_1.webp")
];
//manager variables
const blankGI = document.getElementById("blank_gi");
const galleryContent = document.getElementById("gallery_content");
const newGIBtn = document.getElementById("new_gi_btn");
const newGIImg = document.getElementById("ngi_img");
let GIClientLoadingDone = false;
//client variables
const GMSlidesClient = document.getElementById("gallery_slides");
const gallerySection = document.getElementById("gallery");
const blankGalleryImg = document.getElementById("black_gallery_img");

//create new elements from creation form
function createNewGi(){
    let newGIObj = new galleryItem()
    updateGIManagerList();
    updateGIClientList();
}
if(newGIBtn != null){
    newGIBtn.addEventListener("click", () =>{createNewGi();})
}

//update the list in the manager page
function updateGIManagerList(){
    if(blankGI != null){
        //delete all preexisting elements
        let GIEls = document.querySelectorAll(".gallery_item");
        GIEls.forEach(element => {
            if(element.id != "blank_gi"){
                element.remove();
            }
        });
        //create new element
        for (let i = 0; i < galleryItems.length; i++){
            //clone the blank element and remove the blank ID
            let newGIObj = blankGI.cloneNode(true);
            newGIObj.id = "";
            //retrieve the needed elements from the cloned element
            let newGIObjImg = newGIObj.querySelector("img");
            newGIObjImg.src = galleryItems[i].url;
            //append the new element to the list
            galleryContent.append(newGIObj);
        }
    }
}

//update the list in the menu page
function updateGIClientList(){   
    for (let i = 0; i < 9; i++){
        //update carousel
        let clientGIEl = blankGalleryImg.cloneNode(true);
        clientGIEl.id = "";
        let clientGIElImg = clientGIEl.querySelector("img");
        clientGIElImg.src = galleryItems[i].url;
        gallerySection.append(clientGIEl);
    }
    for (let i = 0; i < galleryItems.length; i++){
        //update slider
        let clientGIObj = document.createElement("img");
        clientGIObj.src = galleryItems[i].url;
        GMSlidesClient.append(clientGIObj);
    }
    GIClientLoadingDone = true;
}

window.addEventListener("load", ()=>{
    updateGIManagerList();
    updateGIClientList();
})
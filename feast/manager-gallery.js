let galleryItemObjs = []
//edit variables
const GalleryEditModal = document.getElementById("gallery_edit_modal");
const GEMSrc = document.getElementById("gi_edit_src");
const GEMAlt = document.getElementById("gi_edit_alt");
const GEMConfirm = document.getElementById("gi_edit_confirm");
const GEMCancel = document.getElementById("gi_edit_cancel");
let GEMOn = false;
//manager variables
const blankMnGI = document.getElementById("blank_mn_gi");
const mnGalleryContent = document.getElementById("gallery_mn_content");
let MnGIEls = document.querySelectorAll(".gallery_item");
//client variables
const clGalleryContent = document.getElementById("gallery");
const clGalleryAmount = 6;
const blankClGI = document.getElementById("black_gallery_img");
const gallerySliderContent = document.getElementById("gallery_slides");
let GIClLoaded = false;
//load variables
let GIDoneLoading = false;

//save
function saveGI(){
    galleryItemObjs = JSON.stringify(galleryItemObjs);
    localStorage.setItem("galleryItems.json", galleryItemObjs);
}

//load
function loadGI(){
    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // Define the file path
    let file = 'galleryItems.json';
    // Open the file
    xhr.open('GET', file, true);
    // Set the response type to JSON
    xhr.responseType = 'json';
    // When the file is loaded successfully
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Parse the JSON response
            galleryItemObjs = xhr.response;
            displayGI();
            saveGI();
        }
        else {
            // Error handling
            console.error('Failed to load JSON file:', xhr.status);
        }
    };
    // If an error occurs during the request
    xhr.onerror = function() {
      console.error('Error occurred while reading the file.');
    };
    // Send the request
    xhr.send();
}

//display
function displayGalleryManager(){
    if(mnGalleryContent != null){
        //delete preexisting elements
        for (let i = 0; i < MnGIEls.length; i++) {
            if(MnGIEls[i].id != "blank_mn_gi")
                mnGalleryContent.removeChild(MnGIEls[i]);   
        }
        //create new elements
        for (let i = 0; i < galleryItemObjs.length; i++) {
            let currentGIObj = galleryItemObjs[i];
            //create and remove id
            let newMnGI = blankMnGI.cloneNode(true);
            newMnGI.id = "";
            //fetch needed elements
            let newMnGIImg = newMnGI.querySelector("img");
            let newMNGIDel = newMnGI.querySelector(".gi_delete_btn");
            let newMNGIEdit = newMnGI.querySelector(".gi_edit_btn");
            //assign functions
            newMNGIDel.addEventListener("click", () =>{
                toggleDM(mnGalleryContent, newMnGI, galleryItemObjs, currentGIObj);
                saveGI();
            });
            newMNGIEdit.addEventListener("click", () =>{
                toggleGIEdit(currentGIObj);
            })
            //assign values
            newMnGIImg.src = currentGIObj.src;
            //append
            mnGalleryContent.append(newMnGI);
        }
        MnGIEls = document.querySelectorAll(".gallery_item");
    }
}
function displayGalleryCarousel(){
    if(blankClGI != null){
        //fill carousel
        for (let i = 0; i < clGalleryAmount; i++){
            let currentGIObj = galleryItemObjs[i];
            //create and remove id
            let newClGI = blankClGI.cloneNode(true);
            newClGI.id = "";
            //fetch needed elements
            let newClGIImg = newClGI.querySelector("img");
            //assign values
            newClGIImg.src = currentGIObj.src;
            //append
            clGalleryContent.append(newClGI);
        }
        GIClLoaded = true;
        //fill slider
        for (let i = 0; i < galleryItemObjs.length; i++){
            let currentGIObj = galleryItemObjs[i];    
            //create element
            let newSlImg = document.createElement("img");
            newSlImg.src = currentGIObj.src;
            gallerySliderContent.append(newSlImg);
        }
    }
}
function displayGI(){
    displayGalleryManager();
    displayGalleryCarousel();  
}
window.addEventListener("load", () =>{loadGI();})
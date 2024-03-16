let galleryItemObjs = []
//edit variables
const GalleryEditModal = document.getElementById("gallery_edit_modal");
const GEMSrc = document.getElementById("gi_edit_src");
const GEMAlt = document.getElementById("gi_edit_alt");
const GEMConfirm = document.getElementById("gi_edit_confirm");
const GEMCancel = document.getElementById("gi_edit_cancel");
let GEMOn = false;
//create variables
const GICreateSrc = document.getElementById("ngi_src");
const GICreateAlt = document.getElementById("ngi_alt");
const GICreateBtn = document.getElementById("new_gi_btn");
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

//edit
function toggleGIEdit(GIObj){
    if(!GEMOn){
        GEMOn = true;
        GalleryEditModal.classList.add("on");

        GEMSrc.value = GIObj.src;
        GEMAlt.value = GIObj.alt;

        GEMConfirm.addEventListener("click", () =>{
            GIObj.src = GEMSrc.value;
            GIObj.alt = GEMAlt.value;
            saveGI();
            loadGI();
                
            GEMOn = false;
            GalleryEditModal.classList.remove("on");
        })
        GEMCancel.addEventListener("click", () =>{                
            GEMOn = false;
            GalleryEditModal.classList.remove("on");
        })
    }
    else{
        GEMOn = false;
        GalleryEditModal.classList.remove("on");
    }
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
            console.log(galleryItemObjs)
            displayGalleryManager();
            //displayGI();
            //saveGI();
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


//save
function saveGI(){
    //console.log(galleryItemObjs)
    galleryItemObjs = JSON.stringify(galleryItemObjs);
    //console.log(galleryItemObjs)
    localStorage.setItem("galleryItems", galleryItemObjs);
    console.log(JSON.parse(localStorage.getItem("galleryItems")))
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

window.addEventListener("load", () =>{
    loadGI();
})
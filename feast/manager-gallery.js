class galleryItem{
    constructor(url, alt, elementImg){
        this.url = url;
        this.alt = alt;
        this.elementImg = elementImg;
    }

    updateElementImg(){
        this.elementImg.src = this.url;
        this.elementImg.alt = this.alt;
    }
}
let galleryItemObjs = [
    new galleryItem("images/home/home_hero.webp","abcd", ""),
    new galleryItem("images/events/private_dining/private_dining_1.webp","lkjb", ""),
    new galleryItem("images/events/wedding/wedding_1.webp","§Mkljn", ""),
    new galleryItem("images/events/gala/gala_1.webp","qezfe", ""),
    new galleryItem("images/events/awards/awards_1.webp","2768468", ""),
    new galleryItem("images/home/home_hero.webp","abcd", ""),
    new galleryItem("images/events/private_dining/private_dining_1.webp","lkjb", ""),
    new galleryItem("images/events/wedding/wedding_1.webp","§Mkljn", ""),
    new galleryItem("images/events/gala/gala_1.webp","qezfe", ""),
    new galleryItem("images/events/awards/awards_1.webp","2768468", ""),
    new galleryItem("images/home/home_hero.webp","abcd", ""),
    new galleryItem("images/events/private_dining/private_dining_1.webp","lkjb", ""),
    new galleryItem("images/events/wedding/wedding_1.webp","§Mkljn", ""),
    new galleryItem("images/events/gala/gala_1.webp","qezfe", ""),
    new galleryItem("images/events/awards/awards_1.webp","2768468", "")
]

//manager display variables
const blankGI = document.getElementById("blank_gi");
const MnGalleryContent = document.getElementById("gallery_content");
let MnGIEls = document.querySelectorAll(".gallery_item");
//client display variables
const gallerySlides = document.getElementById("gallery_slides");
const gallerySection = document.getElementById("gallery");
const blankGIEl = document.getElementById("black_gallery_img");
let ClGIEls;
let GILoadingFinished = false;
//creation variables
const NGIPath = document.getElementById("ngi_img");
const NGIAlt = document.getElementById("ngi_alt");
const NGISubmit = document.getElementById("new_gi_btn");
//editing variables
const GIEditModal = document.getElementById("gallery_edit_modal");
const GIEditPath = document.getElementById("gi_edit_path");
const GIEditAlt = document.getElementById("gi_edit_alt");
const GIEditConfirm = document.getElementById("gi_edit_confirm");
const GIEditCancel = document.getElementById("gi_edit_cancel");
let GIEditOn = false;

//display elements
function GIDisplayManager(){
    if(blankGI != null){
        //delete previous elements
        for (let i = 0; i < MnGIEls.length; i++) {
            MnGIEls = document.querySelectorAll(".gallery_item");
            if(MnGIEls[i].id != "blank_gi"){
                MnGalleryContent.removeChild(MnGIEls[i]);
            }
        }
        //create new elements
        for (let i = 0; i < galleryItemObjs.length; i++) {
            let GIObj = galleryItemObjs[i];
            //create the new element and fetch the wanted child elements
            let newGIEl = blankGI.cloneNode(true);
            let newGIElImg = newGIEl.querySelector("img");
            let newGIElEdit = newGIEl.querySelector(".gi_edit_btn");
            let newGIElDelete = newGIEl.querySelector(".gi_delete_btn");
            //append
            MnGalleryContent.append(newGIEl);
            //do attributions (functions)
            newGIElDelete.addEventListener("click", () =>{
                toggleDM(MnGalleryContent,newGIEl);
            })
            newGIElEdit.addEventListener("click", () =>{
                editGIObj(GIObj);
            })
            //do attributions (values)
            GIObj.elementImg = newGIElImg;
            newGIEl.id = "";
            newGIElImg.src = GIObj.url;
            newGIElImg.alt = GIObj.alt;
        }
        MnGIEls = document.querySelectorAll(".gallery_item");
    }
}
function GIDisplayClient(){
    if(blankGIEl != null){
        //delete previous elements
        ClGIEls = gallerySection.querySelectorAll(".gallery_img")
        for (let i = 0; i < ClGIEls.length; i++) {
            if(ClGIEls[i].id != "black_gallery_img"){
                gallerySection.removeChild(ClGIEls[i]);
            }
        }
        //create new elements
        for (let i = 0; i < 6; i++) {    
            let GIObj = galleryItemObjs[i];
            
            //update slider
            let newGIImg = document.createElement("img");
            newGIImg.src = GIObj.url;
            newGIImg.alt = GIObj.alt;
            gallerySlides.append(newGIImg);

            //create the new element and fetch the wanted child elements
            let newClGIEl = blankGIEl.cloneNode(true);
            let newClGIElImg = newClGIEl.querySelector("img");
            //append
            gallerySection.append(newClGIEl);
            //do attributions (values)
            newClGIEl.id = "";
            newClGIElImg.src = GIObj.url;
            newClGIElImg.alt = GIObj.alt;
        }
        GILoadingFinished = true;
    }
}
window.addEventListener("load", () =>{
    GIDisplayManager();
    GIDisplayClient();
});

//create new gallery object
function newGIObj(){
    let GIObj = new galleryItem(NGIPath.value, NGIAlt.value);
    galleryItemObjs.push(GIObj);

    GIDisplayManager();
}
if(NGISubmit != null){NGISubmit.addEventListener("click", () =>{newGIObj();})}

//edit gallery object
function editGIObj(GIObj){
    if(!GIEditOn){
        GIEditOn = true;
        GIEditModal.classList.add("on");
        GIEditPath.value = GIObj.url;
        GIEditAlt.value = GIObj.alt;

        GIEditConfirm.addEventListener("click", () =>{
            GIObj.url = GIEditPath.value;
            GIObj.alt = GIEditAlt.value;
            GIObj.updateElementImg();
            
            setTimeout(() => {
                GIEditOn = false;
                GIEditModal.classList.remove("on");                 
            }, 100);
        })
        GIEditCancel.addEventListener("click", () =>{
            GIEditOn = false;
            GIEditModal.classList.remove("on");            
        })
    }
    else{
        GIEditOn = false;
        GIEditModal.classList.remove("on");
    }
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 27) {
            GIEditOn = false;
            GIEditModal.classList.remove("on");
        }
    });
}
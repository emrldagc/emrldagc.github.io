class menuItem{
    constructor(name, category, price, image, description, ingredients, element){
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
        this.description = description;
        this.ingredients = ingredients;
        this.element = element;
    }

    updateMI(){
        let MIElImg = this.element.querySelector("img");
        let MIElName = this.element.querySelector(".mi_name");
        let MIElCategory = this.element.querySelector(".mi_category");
        let MIElPrice = this.element.querySelector(".mi_price");
        let MIElDesc = this.element.querySelector(".mi_desc");
        let MIElIng = this.element.querySelector(".mi_ing");
        
        MIElImg.src = this.image;
        MIElName.innerHTML = this.name;
        MIElCategory.innerHTML = this.category;
        MIElPrice.innerHTML = "$" + this.price;
        MIElDesc.innerHTML = this.description;
        MIElIng.innerHTML = this.ingredients;
    }
}
let menuItemObjs = [
    new menuItem("biscuits","appetizer","14.99","images/home/menu/apetizers.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    new menuItem("biscuits","appetizer","14.99","images/home/menu/apetizers.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    new menuItem("biscuits","appetizer","14.99","images/home/menu/apetizers.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    new menuItem("biscuits","appetizer","14.99","images/home/menu/apetizers.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    new menuItem("biscuits","appetizer","14.99","images/home/menu/apetizers.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    new menuItem("biscuits","appetizer","14.99","images/home/menu/apetizers.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    
    new menuItem("something","lunch","44.99","images/home/menu/lunch.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    new menuItem("something","lunch","44.99","images/home/menu/lunch.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    new menuItem("something","lunch","44.99","images/home/menu/lunch.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    new menuItem("something","lunch","44.99","images/home/menu/lunch.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    new menuItem("something","lunch","44.99","images/home/menu/lunch.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    new menuItem("something","lunch","44.99","images/home/menu/lunch.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?", ""),
    
    new menuItem("steak","dinner","74.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?",""),
    new menuItem("steak","dinner","74.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?",""),
    new menuItem("steak","dinner","74.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?",""),
    new menuItem("steak","dinner","74.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?",""),
    new menuItem("steak","dinner","74.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?",""),
    new menuItem("steak","dinner","74.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?",""),
    
    new menuItem("whino","drink","44.99","images/home/menu/drinks.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?",""),
    new menuItem("whino","drink","44.99","images/home/menu/drinks.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?",""),
    new menuItem("whino","drink","44.99","images/home/menu/drinks.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?",""),
    new menuItem("whino","drink","44.99","images/home/menu/drinks.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?",""),
    new menuItem("whino","drink","44.99","images/home/menu/drinks.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?",""),
    new menuItem("whino","drink","44.99","images/home/menu/drinks.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?","")
];

//manager display variables
const blankMI = document.getElementById("blank_mi");
const MnMenuContent = document.getElementById("menu_content");
let MnMIEls = document.querySelectorAll(".menu_item");
let MILoadingFinished = false;
//client display variables
const appetizerPage = document.getElementById("appetizer_page");
const lunchPage = document.getElementById("lunch_page");
const dinnerPage = document.getElementById("dinner_page");
const drinkPage = document.getElementById("drink_page");
const blankClMi = document.getElementById("blank_cl_mi");
const ClMenuPages = document.getElementById("menu_pages");
let ClMIEls;
//creation variables
const NMIName = document.getElementById("nmi_name");
const NMICategory = document.getElementById("nmi_ctg");
const NMIPrice = document.getElementById("nmi_price");
const NMIImage = document.getElementById("nmi_img");
const NMIDesc = document.getElementById("nmi_desc");
const NMIIng = document.getElementById("nmi_ing");
const NMISubmit = document.getElementById("new_mi_btn");
//editing variables
const MIEditModal = document.getElementById("menu_edit_modal");
const MIEditName = document.getElementById("mi_edit_name");
const MIEditPrice = document.getElementById("mi_edit_price");
const MIEditCategory = document.getElementById("mi_edit_category");
const MIEditImage = document.getElementById("mi_edit_img");
const MIEditDesc = document.getElementById("mi_edit_desc");
const MIEditIng = document.getElementById("mi_edit_ing");
const MIEditConfirm = document.getElementById("mi_edit_confirm");
const MIEditCancel = document.getElementById("mi_edit_cancel");
let MIEditOn = false;

//display elements
function MIDisplayManager(){
    if(blankMI != null){
        //delete previous elements
        for (let i = 0; i < MnMIEls.length; i++) {
            MnMIEls = document.querySelectorAll(".menu_item");
            if(MnMIEls[i].id != "blank_mi"){
                MnMenuContent.removeChild(MnMIEls[i]);
            }
        }
        //create new elements
        for (let i = 0; i < menuItemObjs.length; i++) {
            let MIObj = menuItemObjs[i];
            //create the new element and fetch the wanted child elements
            let newMIEl = blankMI.cloneNode(true);
            MIObj.element = newMIEl;
            newMIEl.id = "";
            let newMIElImg = newMIEl.querySelector("img");
            let newMIElName = newMIEl.querySelector(".mi_name");
            let newMIElCategory = newMIEl.querySelector(".mi_category");
            let newMIElPrice = newMIEl.querySelector(".mi_price");
            let newMIElDesc = newMIEl.querySelector(".mi_desc");
            let newMIElIng = newMIEl.querySelector(".mi_ing");
            let newMIElEdit = newMIEl.querySelector(".mi_edit");
            let newMIElDelete = newMIEl.querySelector(".mi_delete");
            //append
            MnMenuContent.append(newMIEl);
            //do attributions (functions)
            newMIElEdit.addEventListener("click", () =>{editMIObj(MIObj);})
            newMIElDelete.addEventListener("click", () =>{toggleDM(MnMenuContent, newMIEl);})
            //do attributions (values)
            MIObj.updateMI();
        }
        MnMIEls = document.querySelectorAll(".menu_item");
    }
}
function MIDisplayClient(){
    if(blankClMi != null){
        //delete previous elements
        ClMIEls = ClMenuPages.querySelectorAll(".menu_item");
        for (let i = 0; i < ClMIEls.length; i++) {
            if(ClMIEls[i].id != "blank_cl_mi"){
                ClMenuPages.removeChild(ClMIEls[i]);
            }
        }
        //create new elements
        for (let i = 0; i < menuItemObjs.length; i++) {    
            let MIObj = menuItemObjs[i];
            //create new element
            let newMIEl = blankClMi.cloneNode(true);
            newMIEl.id = "";
            let newMIElImage = newMIEl.querySelector("img");
            let newMIElName = newMIEl.querySelector(".mi_name");
            let newMIElPrice = newMIEl.querySelector(".mi_price");
            let newMIElBtn = newMIEl.querySelector(".mi_btn");
            //add functions
            newMIElBtn.addEventListener("click", () =>{
                MMDisplay(MIObj)
            })
            //add values
            newMIElImage.src = MIObj.image;
            newMIElName.innerHTML = MIObj.name;
            newMIElPrice.innerHTML = "$"+MIObj.price;
            //append
            if(MIObj.category == "appetizer"){
                appetizerPage.append(newMIEl);
            }
            else if(MIObj.category == "lunch"){
                lunchPage.append(newMIEl);                
            }
            else if(MIObj.category == "dinner"){
                dinnerPage.append(newMIEl);                
            }
            else if(MIObj.category == "drink"){
                drinkPage.append(newMIEl);                
            }
        }
        GILoadingFinished = true;
    }
}
window.addEventListener("load", () =>{
    MIDisplayManager();
    MIDisplayClient();
    MILoadingFinished = true;
});

//create new gallery object
function newMIObj(){
    let MIObj = new menuItem(NMIName.value, NMICategory.value, NMIPrice.value, NMIImage.value, NMIDesc.value, NMIIng.value);
    menuItemObjs.push(MIObj);

    MIDisplayManager();
}
if(NMISubmit != null){NMISubmit.addEventListener("click", () =>{newMIObj();})}

//edit gallery object
function editMIObj(MIObj){
    if(!MIEditOn){
        MIEditOn = true;
        MIEditModal.classList.add("on");
        MIEditName.value = MIObj.name;
        MIEditPrice.value = MIObj.price;
        MIEditCategory.value = MIObj.category;
        MIEditImage.value = MIObj.image;
        MIEditDesc.value = MIObj.description;
        MIEditIng.value = MIObj.ingredients;

        MIEditConfirm.addEventListener("click", () =>{
            MIObj.name = MIEditName.value;
            MIObj.image = MIEditImage.value;
            MIObj.category = MIEditCategory.value;
            MIObj.price = MIEditPrice.value;
            MIObj.description = MIEditDesc.value;
            MIObj.ingredients = MIEditIng.value;
            MIObj.updateMI();
            
            setTimeout(() => {
                MIEditOn = false;
                MIEditModal.classList.remove("on");                 
            }, 100);
        })
        MIEditCancel.addEventListener("click", () =>{
            MIEditOn = false;
            MIEditModal.classList.remove("on");            
        })
    }
    else{
        MIEditOn = false;
        MIEditModal.classList.remove("on");
    }
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 27) {
            MIEditOn = false;
            MIEditModal.classList.remove("on");
        }
    });
}
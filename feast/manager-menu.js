class menuItem{
    constructor(name, category, price, image, description, ingredients){
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
        this.description = description;
        this.ingredients = ingredients;
    }
}
let menuItemObjs = [
    new menuItem("biscuits","appetizer","14.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?"),
    new menuItem("something","lunch","44.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?"),
    new menuItem("steak","lunch","74.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?"),
    new menuItem("whino","drink","44.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?"),
    new menuItem("champaino","drink","44.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?")
];
const blankMI = document.getElementById("blank_mi");
const menuCreator = document.getElementById("menu_creator");
const menuContent = document.getElementById("menu_content");
const newMIBtn = document.getElementById("new_mi_btn");
//new mi inputs
const newMIName = document.getElementById("nmi_name");
const newMICategory = document.getElementById("nmi_ctg");
const newMIPrice = document.getElementById("nmi_price");
const newMIImg = document.getElementById("nmi_img");
const newMIDesc = document.getElementById("nmi_desc");
const newMIIng = document.getElementById("nmi_ing");
//create new elements from creation form
function createNewMi(){
    let newMIObj = new menuItem(newMIName.value, newMICategory.value, newMIPrice.value, newMIImg.value, newMIDesc.value, newMIIng.value);
    menuItemObjs.push(newMIObj);

    updateMIManagerList();
    updateMIClientList();
}
if(newMIBtn != null)
    newMIBtn.addEventListener("click", () =>{createNewMi();})

//update the list in the manager page
function updateMIManagerList(){
    if(blankMI != null){
        //delete all preexisting elements
        let MIEls = document.querySelectorAll(".menu_item");
        MIEls.forEach(element => {
            if(element.id != "blank_mi"){
                element.remove();
            }
        });
        //create new element
        for (let i = 0; i < menuItemObjs.length; i++) {
            //clone the blank element and remove the blank ID
            let newMIObj = blankMI.cloneNode(true);
            newMIObj.id = "";
            //retrieve the needed elements from the cloned element
            let newMIObjName = newMIObj.querySelector(".mi_name");
            let newMIObjPrice = newMIObj.querySelector(".mi_price");
            let newMIObjCtg = newMIObj.querySelector(".mi_category")
            let newMIObjImg = newMIObj.querySelector(".mi_img");
            let newMIObjDesc = newMIObj.querySelector(".mi_desc");
            let newMIObjIng = newMIObj.querySelector(".mi_ing"); 
            //assign the correct values to the retrieved elements
            newMIObjName.innerHTML = menuItemObjs[i].name;
            newMIObjPrice.innerHTML = menuItemObjs[i].price;
            newMIObjCtg.innerHTML = menuItemObjs[i].category;
            newMIObjImg.src = menuItemObjs[i].image;
            newMIObjDesc.innerHTML = menuItemObjs[i].description;
            newMIObjIng.innerHTML = menuItemObjs[i].ingredients;
            //append the new element to the list
            menuContent.append(newMIObj)
        }
    }
}
window.onload = updateMIManagerList();

//update the list in the menu page
function updateMIClientList(){

}
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
const menuItems = [
    new menuItem("biscuits","appetizer","14.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?"),
    new menuItem("something","lunch","44.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?"),
    new menuItem("steak","lunch","74.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?"),
    new menuItem("whino","drink","44.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?"),
    new menuItem("champaino","drink","44.99","images/home/menu/dinner.webp","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente! Consectetur harum, ratione sed ducimus quibusdam incidunt quidem exercitationem fugiat tenetur tempora quaerat ab quam quod doloremque pariatur iure. Ullam?","Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quae provident voluptatem fugiat delectus ad suscipit? Nisi laborum, distinctio blanditiis ullam quo repellendus quis, deleniti beatae, numquam molestias nemo dolor?")
];
const blankMI = document.getElementById("blank_mi");
const menuCreator = document.getElementById("menu_creator");
const menuContent = document.getElementById("menu_content");
//creation form elements

function updateMIManagerList(){
    for (let i = 0; i < menuItems.length; i++) {
        //clone the blank element and remove the blank ID
        let newMIEl = blankMI.cloneNode(true);
        newMIEl.id = "";
        //retrieve the needed elements from the cloned element
        let newMIElName = newMIEl.querySelector(".mi_name");
        let newMIElPrice = newMIEl.querySelector(".mi_price");
        let newMIElCtg = newMIEl.querySelector(".mi_category")
        let newMIElImg = newMIEl.querySelector(".mi_img");
        let newMIElDesc = newMIEl.querySelector(".mi_desc");
        let newMIElIng = newMIEl.querySelector(".mi_ing"); 
        //assign the correct values to the retrieved elements
        newMIElName.innerHTML = menuItems[i].name;
        newMIElPrice.innerHTML = menuItems[i].price;
        newMIElCtg.innerHTML = menuItems[i].category;
        newMIElImg.src = menuItems[i].image;
        newMIElDesc.innerHTML = menuItems[i].description;
        newMIElIng.innerHTML = menuItems[i].ingredients;
        //append the new element to the list
        menuContent.append(newMIEl)
    }
    //console.log(menuContent.querySelectorAll(".menu_item"))
}
window.onload = updateMIManagerList();
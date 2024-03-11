class menuItem{
    constructor(name, price, image, description, ingredients){
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.ingredients = ingredients;
    }

    editMI(){

    }

    deleteMI(){

    }
}
const menuItems = [];
const menuCreator = document.getElementById("menu_creator");
//creation form elements
const CFName = document.getElementById("new_menu_name");
const CFPrice = document.getElementById("new_menu_price");
const CFImage = document.getElementById("new_menu_img");
const CFDesc = document.getElementById("new_menu_description");
const CFIngredients = document.getElementById("new_menu_ingredients");

function createMI(){
    if(menuCreator != null){
        let newMI = new menuItem(CFName.value, CFPrice.value, CFImage.value, CFDesc.value, CFIngredients.value);
    }
    updateMIDisplay();
}

function updateMIManagerList(){

}

function updateMIDisplay(){

}
updateMIDisplay();
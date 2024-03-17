/*menu manager - start*/
let menuItemObjs = [
    {
        name : "Golden Caviar Blini",
        img : "images/menu_items/appetizers/golden_caviar_blini.webp",
        category : "appetizer",
        price : "94.99",
        desc : "Delicate blini topped with premium golden caviar, offering a burst of exquisite flavors in every bite.",
        ingr : "Golden caviar, blini, crème fraîche, chives."
    },
    {
        name : "Truffle Arancini",
        img : "images/menu_items/appetizers/truffle_arcancini.webp",
        category : "appetizer",
        price : "64.99",
        desc : "Crispy, golden arancini infused with the earthy aroma of black truffles, served with a velvety truffle aioli.",
        ingr : "Arborio rice, black truffles, parmesan cheese, truffle oil, breadcrumbs."
    },
    {
        name : "Foie Gras Pâté",
        img : "images/menu_items/appetizers/fois_gras_pate.webp",
        category : "appetizer",
        price : "84.99",
        desc : "Silky smooth foie gras pâté, delicately seasoned and served with toasted brioche points for a luxurious start to your meal.",
        ingr : "Foie gras, butter, shallots, cognac, spices, brioche."
    },
    {
        name : "Lobster Bisque",
        img : "images/menu_items/appetizers/lobster_brisque.webp",
        category : "appetizer",
        price : "109.99",
        desc : "A rich and creamy bisque infused with the essence of succulent lobster meat, finished with a hint of brandy and served with artisanal bread.",
        ingr : "Lobster meat, cream, brandy, vegetables, herbs, spices."
    },
    {
        name : "Wagyu Beef Tartare",
        img : "images/menu_items/appetizers/wagyu_beef_tartare.webp",
        category : "appetizer",
        price : "119.99",
        desc : "Finely diced Wagyu beef, hand-mixed with capers, shallots, and a hint of Dijon mustard, served with quail egg yolk and crispy crostini.",
        ingr : "Wagyu beef, capers, shallots, Dijon mustard, quail egg yolk, crostini."
    },
    {
        name : "Oysters Rockefeller",
        img : "images/menu_items/appetizers/oyster_rockefeller.webp",
        category : "appetizer",
        price : "99.99",
        desc : "Plump oysters topped with a rich blend of spinach, herbs, and Pernod liqueur, baked to perfection and served on a bed of rock salt.",
        ingr : "Oysters, spinach, Pernod liqueur, herbs, breadcrumbs."
    },
    
    {
        name : "lunch item",
        img : "images/home/menu/lunch.webp",
        category : "lunch",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "lunch item",
        img : "images/home/menu/lunch.webp",
        category : "lunch",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "lunch item",
        img : "images/home/menu/lunch.webp",
        category : "lunch",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "lunch item",
        img : "images/home/menu/lunch.webp",
        category : "lunch",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "lunch item",
        img : "images/home/menu/lunch.webp",
        category : "lunch",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "lunch item",
        img : "images/home/menu/lunch.webp",
        category : "lunch",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    
    {
        name : "dinner item",
        img : "images/home/menu/dinner.webp",
        category : "dinner",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "dinner item",
        img : "images/home/menu/dinner.webp",
        category : "dinner",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "dinner item",
        img : "images/home/menu/dinner.webp",
        category : "dinner",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "dinner item",
        img : "images/home/menu/dinner.webp",
        category : "dinner",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "dinner item",
        img : "images/home/menu/dinner.webp",
        category : "dinner",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "dinner item",
        img : "images/home/menu/dinner.webp",
        category : "dinner",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    
    {
        name : "drink item",
        img : "images/home/menu/drinks.webp",
        category : "drink",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "drink item",
        img : "images/home/menu/drinks.webp",
        category : "drink",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "drink item",
        img : "images/home/menu/drinks.webp",
        category : "drink",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "drink item",
        img : "images/home/menu/drinks.webp",
        category : "drink",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "drink item",
        img : "images/home/menu/drinks.webp",
        category : "drink",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "drink item",
        img : "images/home/menu/drinks.webp",
        category : "drink",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    }
]
//manager variables
const blankClMI = document.getElementById("blank_cl_mi");
const appetizerPage = document.getElementById("appetizer_page");
const dinnerPage = document.getElementById("dinner_page");
const lunchPage = document.getElementById("lunch_page");
const drinkPage = document.getElementById("drink_page");
let MILoadingFinished = false;
//reservation variables
const blankRfMI = document.getElementById("blank_rf_mi");
const appetizerRfPage = document.getElementById("appetizer_rf_page");
const dinnerRfPage = document.getElementById("dinner_rf_page");
const lunchRfPage = document.getElementById("lunch_rf_page");
const drinkRfPage = document.getElementById("drink_rf_page");

//display
function displayMenuClient(){
    //add menu carousel elements
    if(blankClMI != null){
        for (let i = 0; i < menuItemObjs.length; i++){
            let currentMIObj = menuItemObjs[i];
            let newMIEl = blankClMI.cloneNode(true);
            newMIEl.id = '';
            //get important elements
            let newMIElImg = newMIEl.querySelector("img");
            let newMIElName = newMIEl.querySelector(".mi_name");
            let newMIElPrice = newMIEl.querySelector(".mi_price");
            let newMIElBtn = newMIEl.querySelector("button");
            //assign values
            newMIElBtn.addEventListener("click", () =>{MMDisplay(currentMIObj);})
            newMIElImg.src = currentMIObj.img;
            newMIElName.innerHTML = currentMIObj.name;
            newMIElPrice.innerHTML = "$" + currentMIObj.price;
            if(currentMIObj.category == "appetizer")
                appetizerPage.append(newMIEl);
            else if(currentMIObj.category == "lunch")
                lunchPage.append(newMIEl);
            else if(currentMIObj.category == "dinner")
                dinnerPage.append(newMIEl);
            else if(currentMIObj.category == "drink")
                drinkPage.append(newMIEl);
        }
    }
    //add reservation elements
    for (let i = 0; i < menuItemObjs.length; i++){
        let currentMIObj = menuItemObjs[i];
        let newMIEl = blankRfMI.cloneNode(true);
        newMIEl.id = '';
        //get important elements
        let newMIElImg = newMIEl.querySelector("img");
        let newMIElName = newMIEl.querySelector(".rf_mi_name");
        let newMIElPrice = newMIEl.querySelector(".rf_mi_price");
        let newMIElDesc = newMIEl.querySelector(".rf_mi_description");
        let newMIElBtn = newMIEl.querySelector(".mi_btn");
        //assign values
        newMIElBtn.addEventListener("click", () =>{MMDisplay(currentMIObj);})
        newMIElImg.src = currentMIObj.img;
        newMIElName.innerHTML = currentMIObj.name;
        newMIElPrice.innerHTML = "$" + currentMIObj.price;
        newMIElDesc.innerHTML = currentMIObj.desc;
        if(currentMIObj.category == "appetizer")
            appetizerRfPage.append(newMIEl);
        else if(currentMIObj.category == "lunch")
            lunchRfPage.append(newMIEl);
        else if(currentMIObj.category == "dinner")
            dinnerRfPage.append(newMIEl);
        else if(currentMIObj.category == "drink")
            drinkRfPage.append(newMIEl);
    }
    MILoadingFinished = true;
}
window.addEventListener("load", () =>{
    displayMenuClient();
})
/*menu manager - start*/
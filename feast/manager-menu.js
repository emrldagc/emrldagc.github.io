/*menu manager - start*/
let menuItemObjs = [
    {
        name : "appetizer item",
        img : "images/home/menu/apetizers.webp",
        category : "appetizer",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "appetizer item",
        img : "images/home/menu/apetizers.webp",
        category : "appetizer",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "appetizer item",
        img : "images/home/menu/apetizers.webp",
        category : "appetizer",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "appetizer item",
        img : "images/home/menu/apetizers.webp",
        category : "appetizer",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "appetizer item",
        img : "images/home/menu/apetizers.webp",
        category : "appetizer",
        price : "24.99",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quaerat voluptas accusantium unde repellat sapiente officia quasi nisi fuga provident minus porro, libero facere animi? Dignissimos amet quam nulla similique.",
        ingr : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur tenetur delectus obcaecati suscipit illum expedita hic, error, neque repudiandae officiis sapiente. Veniam est voluptates modi nemo? Maxime, suscipit eaque."
    },
    {
        name : "appetizer item",
        img : "images/home/menu/apetizers.webp",
        category : "appetizer",
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
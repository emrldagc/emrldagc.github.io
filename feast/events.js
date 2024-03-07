/*nav bar - start*/
navScrollThreshold = document.querySelector("header").clientHeight - navBar.clientHeight;
/*nav bar - end*/

/*event sliders - start*/
class eventSlider{
    constructor(eventSlides, eventNav, currentId, idBaseline, currentMargin){
        this.eventSlides = eventSlides;
        this.eventNav = eventNav;
        this.currentId = currentId;
        this.idBaseline = idBaseline;
        this.currentMargin = currentMargin;
    }
    setMargin(){
        this.currentMargin = -this.currentId * 100;
        this.eventSlides.style.marginLeft = this.currentMargin + "%";
    }
    selectBullet(){
        console.log("selectBullet");
        let ESNBullets = this.eventNav.querySelectorAll(".esn_bullet");
        let ENSBulletsArr = Array.from(ESNBullets);
        
        console.log(this.currentId);
        console.log(this.idBaseline)

        let baseline = this.idBaseline+1;
        if(this.currentId >= baseline){
            console.log(">=")
            //select the correct bullet
            ESNBullets[this.currentId - baseline].classList.add("current");
            //deselect the other bullets
            let unselectedESNBullets = ENSBulletsArr.filter((x, i) =>{
                return i != (this.currentId - baseline);
            })
            unselectedESNBullets.forEach(element => {
                element.classList.remove("current");
            });
        }
        else{
            console.log("<")
            //select the correct bullet
            ESNBullets[this.currentId].classList.add("current");
            //deselect the other bullets
            let unselectedESNBullets = ENSBulletsArr.filter((x, i) =>{
                return i != this.currentId;
            })
            unselectedESNBullets.forEach(element => {
                element.classList.remove("current");
            });            
        }
        console.log("----------------------")
    }
}
const eventSliders = document.querySelectorAll(".event_slider");
const eventSlidersObjs = [];
let ESTransition = 1;//in seconds

function setupEventSliders(){
    //create a new object for each event slider and push it to the appropriate array
    for (let i = 0; i < eventSliders.length; i++) {
        //set the baseline
        let baseline = eventSliders[i].querySelectorAll("img").length-1;
        //create and push the object to the objects array
        let ESObj = new eventSlider(eventSliders[i].querySelector(".event_slides"), eventSliders[i].querySelector(".event_slider_nav"), baseline, baseline, 0);
        eventSlidersObjs.push(ESObj);        
    }
    for (let i = 0; i < eventSlidersObjs.length; i++) {
        //get necessary elements from the object
        let ESImgs = eventSlidersObjs[i].eventSlides.querySelectorAll("img");
        let baseline = eventSlidersObjs[i].idBaseline;
        
        for (let l = 0; l < baseline+1; l++){
            //duplicate and append all slides
            let firstClone = ESImgs[l].cloneNode(true);
            eventSlidersObjs[i].eventSlides.append(firstClone);
            //duplicate and prepend all slides
            let lastClone = ESImgs[baseline-l].cloneNode(true);
            eventSlidersObjs[i].eventSlides.prepend(lastClone);
        }
        selectEventSlide(baseline+1, eventSlidersObjs[i])
    }
}
setupEventSliders();

//select the appropriate slide from a set event slider object
function selectEventSlide(id, eventSliderObj){
    //set the id
    eventSliderObj.currentId = id;
    //set the margin
    eventSliderObj.setMargin();
    eventSliderObj.selectBullet();
}

//select the appropriate slide from a set event slider object according to which bullet is pressed
for (let i = 0; i < eventSlidersObjs.length; i++){
    let bullets = eventSlidersObjs[i].eventNav.querySelectorAll(".esn_bullet");
    for (let l = 0; l < bullets.length; l++) { 
        bullets[l].addEventListener("pointerdown", () =>{
            eventSlidersObjs[i].currentId = eventSlidersObjs[i].idBaseline + 1 + l;
            eventSlidersObjs[i].setMargin();
            eventSlidersObjs[i].selectBullet();
        })       
    }
    setTimeout(() => {
        eventSlidersObjs[i].eventSlides.style.transition = ESTransition + "s";        
    }, 1);
}

//clamp the value of the slide id at the end of each transition
for (let i = 0; i < eventSlidersObjs.length; i++) {
    eventSlidersObjs[i].eventSlides.addEventListener("transitionend", () =>{
        if(eventSlidersObjs[i].currentId > (eventSlidersObjs[i].baseline * 2 + 1)){
            
        }
        else if(eventSlidersObjs[i].currentId < (eventSlidersObjs[i].baseline +1)){

        }
    })
}
/*event sliders - end*/
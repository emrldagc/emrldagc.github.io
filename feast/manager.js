/*general - start*/
const MngSelectors = document.querySelectorAll(".mn_page_selector");
const MngSelectorsArr = Array.from(MngSelectors);
const MngSlider = document.getElementById("mn_slider");
const MngSlides = document.querySelectorAll(".mn_slide");
const MngTransition = 1.25; //in seconds
const MngSlideWidth = MngSlides[0].clientWidth;
let currentMngMargin = 0;
let currentMngPageId = 0;
//touch variables
let MngTouchInteracting = false;
let MngSlideLeft = null;
let MngStartX;
let MngDeltaX;
let MngTouchMargin;

//page selection
function selectMngPage(){
    //clamp current id value
    if(currentMngPageId > MngSlides.length)
        currentMngPageId = MngSlides.length;
    else if(currentMngPageId < 0)
        currentMngPageId = 0;

    //select the correct manager selector
    MngSelectors[currentMngPageId].classList.add("current");
    //deselect the other manager selectors
    let unselectedMngSelectors = MngSelectorsArr.filter((x, i) =>{
        return i != currentMngPageId;
    })
    unselectedMngSelectors.forEach(element => {
        element.classList.remove("current");
    });

    //move the slider element
    currentMngMargin = -currentMngPageId * MngSlideWidth;
    MngSlider.style.marginLeft = currentMngMargin + "px";
    MngSlider.style.transition = MngTransition + "s";

    MngTouchMargin = currentMngMargin;
}
selectMngPage();
for (let i = 0; i < MngSelectors.length; i++) {
    MngSelectors[i].addEventListener("click", () =>{
        currentMngPageId = i;
        selectMngPage();
    })
}

//touch interaction
function startMngTouch(){
    if(!MngTouchInteracting){
        let e = window.event;
        MngTouchInteracting = true;
        //define initial pointer x position
        MngStartX = e.pageX;

        MngSlider.style.transition = "0s";
    }
}
function endMngTouch(){
    if(MngTouchInteracting){
        if(MngSlideLeft != null){
            if(MngSlideLeft)
                currentMngPageId += Math.round(MngDeltaX/MngSlideWidth);
            else
                currentMngPageId -= Math.round(MngDeltaX/MngSlideWidth);
        }
        MngSlideLeft = null;
        MngSlider.style.transition = MngTransition/2 + "s";
        selectMngPage();
        MngTouchInteracting = false;
    }
}
function handleMngTouch(){
    if(MngTouchInteracting){
        let e = window.event;
        //calculate the difference between initial and current pointer x position
        MngDeltaX = Math.abs(MngStartX - e.pageX)

        if(MngDeltaX > 10){
            //determine the sliding direction
            if(MngStartX > e.pageX)
                MngSlideLeft = true;
            else if(MngStartX < e.pageX)
                MngSlideLeft = false;
            //adjust the touch margin according to the sliding direction
            if(MngSlideLeft){
                MngTouchMargin = currentMngMargin - MngDeltaX;
                MngSlider.style.marginLeft = MngTouchMargin + "px";
            }
            else{
                MngTouchMargin = currentMngMargin + MngDeltaX;
                MngSlider.style.marginLeft = MngTouchMargin + "px";                
            }
        }
    }
}
MngSlider.addEventListener("pointerdown", () =>{startMngTouch();})
window.addEventListener("pointerup", () => {endMngTouch();})
window.addEventListener("pointermove", () => {handleMngTouch();})
/*general - end*/

/*new elements - start*/
class newElementEl{
    constructor(NEElement){
        this.NEElement = NEElement;
        this.NEHeader = this.NEElement.querySelector(".ne_header");
        this.NEContentHolder = this.NEElement.querySelector(".ne_content_holder");
        this.NEContent = this.NEElement.querySelector(".ne_content");
        this.NEDeployed = true;
    }
    toggleNE(){
        if(!this.NEDeployed){
            this.NEDeployed = true;
            this.NEHeader.classList.add("on");
            this.NEContentHolder.style.height = this.NEContent.clientHeight + "px";
        }
        else{
            this.NEDeployed = false;
            this.NEHeader.classList.remove("on");
            this.NEContentHolder.style.height = 0 + "px";
        }
        this.NEContentHolder.style.transition = NEContentTransition + "s";
    }
}
const NEEls = [];
const newElements = document.querySelectorAll(".new_element");
let NEContentTransition = 0.5; //in seconds

for (let i = 0; i < newElements.length; i++) {
    //create the a new object for each new element element
    let el = newElements[i];
    let NE = new newElementEl(el);
    //assign the toggle function for each created object
    NE.toggleNE();
    NE.NEHeader.addEventListener("click", () =>{NE.toggleNE();})
}
/*new elements - end*/
/*nav bar - start*/
navScrollThreshold = document.querySelector("header").clientHeight - navBar.clientHeight;
/*nav bar - end*/


/*staff section - start*/
const staffMembers = document.querySelectorAll(".staff_member");
staffMembers.forEach(element => {
    let SMImg = element.querySelector("img");
    if(SMImg.clientHeight > SMImg.clientWidth){
        SMImg.style.width = "100%";
    }
    else if(SMImg.clientWidth > SMImg.clientHeight){
        SMImg.style.height = "100%";
    }
    else{}
});
/*staff section - end*/


/*info section - start*/
const sectionTxtElements = document.querySelectorAll(".info_txt");
STETransitionIncrement = 0.25; //in seconds
for (let i = 0; i < sectionTxtElements.length; i++) {
    sectionTxtElements[i].style.transitionDelay = STETransitionIncrement * i +"s";
}
/*info section - end*/
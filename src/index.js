const card = document.getElementById("card");
const desc = document.getElementById("desc");
const headingContainer = document.getElementById("headingContainer");

const openCard =()=>{
    if(desc.classList.contains("off")){
        card.classList.add("incWidth");
        card.classList.remove("decWidth");
        headingContainer.classList.add("changePos");
        headingContainer.classList.remove("changeBackPos");
        desc.classList.remove("off");
        desc.classList.add("fade");
        

    }else{
        card.classList.remove("incWidth");
        card.classList.add("decWidth");
        headingContainer.classList.add("changeBackPos");
        headingContainer.classList.remove("changePos");
        desc.classList.add("off");
        desc.classList.remove("fade");

    }
}

card.addEventListener("click", openCard);
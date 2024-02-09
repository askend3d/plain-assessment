

const selectSkinCard = document.getElementById("select-skin-card");
const selectEyesCard = document.getElementById("select-eyes-card");
const selectMouthCard = document.getElementById("select-mouth-card")


selectSkinCard.addEventListener("click", (event) => {
    if (event.target.tagName === "I") {
        selectSkinCard.style.display = "none";
        selectEyesCard.style.display = "block";
    }   
    const skinChange = document.getElementById("skin")
    if (event.target.id === "yellow-skin") {
        skinChange.setAttribute("src", "./assets/skin/yellow.png")
        selectSkinCard.style.display = "none";
        selectEyesCard.style.display = "block";
        
    }
    if (event.target.id === "green-skin") {
        skinChange.setAttribute("src", "./assets/skin/green.png")
        selectSkinCard.style.display = "none";
        selectEyesCard.style.display = "block";
    }
    if (event.target.id === "red-skin") {
        skinChange.setAttribute("src", "./assets/skin/red.png")
        selectSkinCard.style.display = "none";
        selectEyesCard.style.display = "block";
    }
})

selectEyesCard.addEventListener("click", (event) => {

    if (event.target.id === "show-mouth-card") {
        selectMouthCard.style.display = "block";
        selectEyesCard.style.display = "none";
    }

    if (event.target.id === "show-skin-card") {
        selectSkinCard.style.display = "block";
        selectEyesCard.style.display = "none";
    }

    const eyesChange = document.getElementById("eyes");

    if (event.target.id === "eye-normal") {
        eyesChange.setAttribute("src", "./assets/eyes/normal.png")
        selectMouthCard.style.display = "block";
        selectEyesCard.style.display = "none";
    }
    if (event.target.id === "eye-closed") {
        eyesChange.setAttribute("src", "./assets/eyes/closed.png")
        selectMouthCard.style.display = "block";
        selectEyesCard.style.display = "none";
    }
    if (event.target.id === "eye-long") {
        eyesChange.setAttribute("src", "./assets/eyes/long.png")
        selectMouthCard.style.display = "block";
        selectEyesCard.style.display = "none";
    }
    if (event.target.id === "eye-laughing") {
        eyesChange.setAttribute("src", "./assets/eyes/laughing.png")
        selectMouthCard.style.display = "block";
        selectEyesCard.style.display = "none";
    }
    if (event.target.id === "eye-rolling") {
        eyesChange.setAttribute("src", "./assets/eyes/rolling.png")
        selectMouthCard.style.display = "block";
        selectEyesCard.style.display = "none";
    }
    if (event.target.id === "eye-winking") {
        eyesChange.setAttribute("src", "./assets/eyes/winking.png")
        selectMouthCard.style.display = "block";
        selectEyesCard.style.display = "none";
    }
})

selectMouthCard.addEventListener("click", (event) => {
    if (event.target.tagName === "I") {
        selectEyesCard.style.display = "block";
        selectMouthCard.style.display = "none";
    }

    const mouthChange = document.getElementById("mouth");
    console.log(event.target.id)
    if (event.target.id === "mouth-open") {
        mouthChange.setAttribute("src", "./assets/mouth/open.png")
    }
    if (event.target.id === "mouth-smiling") {
        mouthChange.setAttribute("src", "./assets/mouth/smiling.png")
    }
    if (event.target.id === "mouth-straight") {
        mouthChange.setAttribute("src", "./assets/mouth/straight.png")
    }
    if (event.target.id === "mouth-sad") {
        mouthChange.setAttribute("src", "./assets/mouth/sad.png")
    }
    if (event.target.id === "mouth-teeth") {
        mouthChange.setAttribute("src", "./assets/mouth/teeth.png")
    }
})
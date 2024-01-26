


const selectSkinCard = document.getElementById("select-skin-card");

selectSkinCard.addEventListener("click", (event) => {
    const skinChange = document.getElementById("skin")
    if (event.target.id === "yellow-skin") {
        skinChange.setAttribute("src", "./assets/skin/yellow.png")
    }
    if (event.target.id === "green-skin") {
        skinChange.setAttribute("src", "./assets/skin/green.png")
    }
    if (event.target.id === "red-skin") {
        skinChange.setAttribute("src", "./assets/skin/red.png")
    }
})
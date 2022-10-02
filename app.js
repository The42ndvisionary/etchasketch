const containerDiv = document.querySelector("#container");

function makeGrid(rows,coloumns) {

    while (document.querySelector("button") !== null) {
        document.querySelector("button").remove();
    }

    containerDiv.style.setProperty("--grid-rows",rows);
    containerDiv.style.setProperty("--grid-coloumns",coloumns);
    containerDiv.style.width = "auto";
    containerDiv.style.overflow = "hidden";
for (i=0;i < (rows * coloumns); i++) {
    let cell =document.createElement("div");
    cell.style.minHeight="0";
    cell.style.minWidth="0";
   

    containerDiv.appendChild(cell).className="grid-item";
    cell.addEventListener("mouseover",(event) =>    {
        event.target.style.backgroundColor="purple";
    })
}
createbutton();
}


function createbutton() {
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetbuttom = document.createElement("button");
    resetbuttom.innerText="Reset Grid";
    resetbuttom.style.margin = "20px";
    resetbuttom.style.padding = "50px";
buttonDiv.appendChild(resetbuttom);


resetbuttom.addEventListener("click", () => {
document.querySelectorAll(".grid-item").forEach(e => e.remove());
let usergridinput = prompt("enter a number below 100");
if (usergridinput < 0 || usergridinput > 100) {
    alert("pls enter a number between 1 and 100 only");
    return;
}
rows = usergridinput;
coloumns =usergridinput;
makeGrid(rows,coloumns)
})
}


makeGrid(16,16)

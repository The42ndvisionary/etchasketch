const containerDiv = document.querySelector("#container");

function makeRows(rows,coloumns) {
    containerDiv.style.setProperty("--grid-rows",rows);
    containerDiv.style.setProperty("--grid-coloumns",coloumns);
for (i=0;i < (rows * coloumns); i++) {
    let cell =document.createElement("div");
    
    containerDiv.appendChild(cell).className="grid-item";
};
};

makeRows(16,16);
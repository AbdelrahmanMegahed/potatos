function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas"); // storing the table
    let grid = '';

    // loop over each row
    for (let i = 0; i <= height; i++) {
        grid += '<tr class="row-' + i + '">';
        // loop for each cell
        for (let j = 0; j <= width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid into table element
    document.getElementById("pixelCanvas").innerHTML = grid; // display the grid

    // Add click event to grid cells once the table grid has been created
    addClickEventToCells();
}

// gets values for height and width from form and uses them to call makrGrid()
function formSubmission() {
    event.preventDefault();
    const mainHeight = document.getElementById('inputHeight').value; // store height
    const mainWidth = document.getElementById('inputWidth').value; // store width
    makeGrid(mainHeight, document.getElementById('inputWidth').value); // taking inputs to make the grid
}

// add click events to all cells
function addClickEventToCells() {
    // on color selection return color:
    const colorPicker = document.getElementById("colorPicker"); // storing the color picker ( NOT THE VALUE ) (3 hours to relise the error LOL)
    const cells = document.getElementsByClassName('cell');
    // loop for each cell
    for (let i = 0; i < document.getElementsByClassName('cell').length; i++) {
        document.getElementsByClassName('cell')[i].addEventListener("click", function(event) {
            let clickedCell = event.target;
            event.target.style.backgroundColor = document.getElementById("colorPicker").value;
        });
    }
}

// on submit of form #sizePicker:
document.getElementById('sizePicker').onsubmit = function() {
    formSubmission(); // submitting the information about the grid ("height", "width") from the form O:
    putBorder() // Bug fixed (" border button not working => you have to click 2 times, sometimes!")
};

// default grid Enjoy :D
makeGrid(12, 12);

// remove the border
function removeBorder() {
    $(document).ready(function() {
        $(`td`).addClass(`noBorder`);
        $(`tr`).addClass(`noBorder`);
        $(`table`).addClass(`noBorder`);
        $(`button`).removeAttr(`onClick`);
        $(`button`).attr(`onClick`, `putBorder()`);
    });
}

// add the border
function putBorder() {
    $(document).ready(function() {
        $(`td`).removeClass(`noBorder`);
        $(`button`).removeAttr(`onClick`);
        $(`button`).attr(`onClick`, `removeBorder()`);
    });
}
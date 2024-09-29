    //lists
    let section = ['north' , 'south' , ' east', 'west'];
    let halls = ['ER' , 'imaging' , 'lab', 'surgery', 'pediatric', 'adult', 'pediatric waiting', 'adult/inpatient waiting', 'inpatient area'];
    let arrayOfCarts = [];
    //instance variables here
    const addCartButton = document.getElementById("submit");
    var cartID = document.getElementById("cartID");
    var cartLoc = document.getElementById("location");
    var cartStat = document.getElementById("status");
    var cartSec = document.querySelector("#hallSection").value;

    //impliment method that selects data from the 'carts' page for cart ID (Place here)

    function template() {
            cartID = document.querySelector('#cartId').value;
            cartLoc = document.querySelector("#location").value;
            cartSec = document.querySelector("#hallSection").value;
            cartStat = document.querySelector("#status").value;
            cartTable = document.querySelector("#cartTable");
            if (!arrayOfCarts.includes(cartID) && cartID !== '') {
                var row = cartTable.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = cartID;
                cell2.innerHTML = cartLoc + ', ' + cartSec; 
                cell3.innerHTML = lastActivity();
                cell4.innerHTML = cartStat;
                document.querySelector('#cartId').value = '';
                arrayOfCarts.push(cartID);
                addDot(cartLoc, cartSec, cartStat);
            } else {
                cartTable = document.querySelector("#cartTable");
                for (var i = 0, row; row = cartTable.rows[i]; i++) {
                    if (row.cells[0].innerHTML === cartID) {
                        row.cells[1].innerHTML = cartLoc + ', ' + cartSec; 
                        row.cells[2].innerHTML = lastActivity();
                        row.cells[3].innerHTML = cartStat;         
                        //update dot color on map when updating row info
                        var dots = document.querySelectorAll(".dot");
                        for (var i = 0; i < dots.length; i++) {
                            if (dots[i].style.left === (calculatePosition(cartLoc, cartSec).x + 'px') && dots[i].style.top === (calculatePosition(cartLoc, cartSec).y + 'px')) {
                                dots[i].style.backgroundColor = (cartStat === "full") ? "green" : (cartStat === "limited") ? "yellow" : "red";
                                break;
                            }
                        } 
                        break;
                    }
                }
            }
            
            //Changes the color of status dependent on full, limited, or empty for quicker identification
            if (cartStat === "full"){
                row.cells[3].style.backgroundColor = "green";
                row.cells[3].style.color = "white";
            } else if (cartStat === "limited"){
                row.cells[3].style.backgroundColor = "yellow";
                row.cells[3].style.color = "black";
            } else if (cartStat === "empty"){
                row.cells[3].style.backgroundColor = "red";
                row.cells[3].style.color = "black";
            }
        
    }

    //on event that the 'submit' button is pressed, it gets the data that is inside each box. (ID, Location, Status)

    function getCartIDs() {
        addCartButton.addEventListener("click" , template);
    };
    
//impliment halls into html stuff
function sectionList(){
    for(var i = 0; i < section.length; i++){
        var option = document.createElement('option');
        option.value = section[i]; 
        option.text = section[i];
        document.querySelector('#hallSection').appendChild(option);  
    }
};

function hallList(){
    for(var i = 0; i < halls.length; i++){
        var option = document.createElement('option');
        option.value = halls[i]; 
        option.text = halls[i];
        document.querySelector('#location').appendChild(option);  
    }
};


//impliment method that pulls from computer's clock and when a cart is interacted with to display last instance of cart activity. (Place here)
function lastActivity(){
    var now = new Date();
    var months = now.getMonth();
    var days = now.getDate();
    return time = months + "/" + days + " at " + now.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit'
    });;
}

const imageContainer = document.getElementById('image-container');

function addDot(cartLoc, cartSec, cartStat) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    const{x, y} = calculatePosition(cartLoc, cartSec);
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    if (cartStat === "full"){
        dot.style.backgroundColor = "green";
    } else if (cartStat === "limited"){
        dot.style.backgroundColor = "yellow";
    } else if (cartStat === "empty"){
        dot.style.backgroundColor = "red";
    }

    imageContainer.appendChild(dot);

}

function calculatePosition(location, section) {
    let x = 0;
    let y = 0;  
    switch (section) { 
        case "north":
            switch (location) {
                case "ER":
                    x = 440;
                    y = -670;
                    break;
                case "imaging":
                    x = 420;
                    y = -590;
                    break;
                case "lab":
                    x = 420;
                    y = -280;
                    break;
                case "surgery":
                    x = 720;
                    y = -600;
                    break;
                case "pediatric":
                    x = 595; 
                    y = -400;
                    break;
                case "adult":
                    x = 860; 
                    y = -420;
                    break;
                case "pediatric waiting":
                    x = 555; 
                    y = -180;
                    break;
                case "adult/inpatient waiting":
                    x = 855; 
                    y = -180;
                    break;
                case "inpatient area":
                    x = 1175; 
                    y = -240;
                    break;
            }
            break;
        case "south":   
            switch (location) {  
                case "ER":
                    x = 440;
                    y = -670;
                    break;
                case "imaging":
                    x = 420;
                    y = -400;
                    break;
                case "lab":
                    x = 420;
                    y = -300;
                    break;
                case "surgery":
                    x = 720;
                    y = -465;
                    break;
                case "pediatric":
                    x = 595; 
                    y = -300;
                    break;  
                case "adult":
                    x = 860; 
                    y = -300;
                    break;
                case "pediatric waiting":
                    x = 555; 
                    y = -180;
                    break;
                case "adult/inpatient waiting":
                    x = 855; 
                    y = -180;
                    break;
                case "inpatient area":
                    x = 1175; 
                    y = -140;
                    break;
            }
            break;  
        case "east":
            switch (location) {
                case "ER":
                    x = 1020-450;
                    y = 720+670;
                    break;
                case "imaging":
                    x = 1020-430;
                    y = 720+490;
                    break;
                case "lab":
                    x = 1020-420;
                    y = 720+300;
                    break;
                case "surgery":
                    x = 1020+100;
                    y = 720+100;
                    break;
                case "pediatric":
                    x = 1020-635; 
                    y = 720+350;
                    break;
                case "adult":
                    x = 1020-840; 
                    y = 720+350;
                    break;
                case "pediatric waiting":
                    x = 1020-635; 
                    y = 720+350;
                    break;
                case "adult/inpatient waiting":
                    x = 1020-635; 
                    y = 720+350;
                    break;
                case "inpatient area":
                    x = 1020-635; 
                    y = 720+350;
                    break;
            }
            break;  
        case "west":
            switch (location) {
                case "ER":
                    x = 430;
                    y = -670;
                    break;
                case "imaging":
                    x = 420;
                    y = -470;
                    break;
                case "lab":
                    x = 410;
                    y = -300;
                    break;
                case "surgery":
                    x = 550;
                    y = -495;
                    break;
                case "pediatric":
                    x = 535; 
                    y = -350;
                    break;
                case "adult":
                    x = 800; 
                    y = -350;
                    break;
                case "pediatric waiting":
                    x = 555; 
                    y = -180;
                    break;
                case "adult/inpatient waiting":
                    x = 855; 
                    y = -180;
                    break;
                case "inpatient area":
                    x = 1050; 
                    y = -190;
                    break;
            }
            break;
    }   
    return {x, y};
}   
/*
## How we built it
    We built this project by using HTML, CSS, and JavaScript. We created a template for the website and then used CSS to style the website. We used JavaScript to add functionality to the website such as adding carts, updating the table, and adding dots to the map. We also used JavaScript to add the dropdown menus and the buttons to the website.

## Challenges we ran into
    We ran into a few challenges while working on this project. One of the biggest challenges was trying to get the dots to appear on the map. We had to figure out how to calculate the position of the dots based on the location of the carts. We also had to figure out how to update the table when a cart was added or updated.

## Accomplishments that we're proud of
    We are proud of the fact that we were able to complete the project. We are also proud of how the website turned out. We were able to add a lot of functionality to the website and make it look good.

## What we learned
    We learned a lot while working on this project. We learned how to use JavaScript to add functionality to a website. We also learned how to use CSS to style a website. We also learned how to use HTML to create the structure of a website. We also learned how to work together as a team and how to communicate with each other effectively.
*/
//impliment methods here
getCartIDs();
sectionList();
hallList();


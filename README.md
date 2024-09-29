# CartTracker
Web App made for HackGT11


## Inspiration
I was inspired by a problem solved by a medical doctor in a medical TV show I watched previously in the past. The problem was a lack of supplies in crash carts, leading to higher patient deaths due to the unnecessary time required to find carts with the correct medicine in them. While watching, I felt another way to reduce patient error was to know in advance whether the cart was full and where it was in the hospital.

## What it does
Track hospital crash carts by ID, location, section, and status.
This project is a web application that allows hospital employees to track the crash carts in 
their hospital, as well as the status, location, and when it was last updated by another user.
Right now there's just a template hospital, with various wings and areas, as well as general sections for each area of the hospital.
To use, input the cart ID, location, hall section, and status of the cart you want to track.
To update an existing cart, simply use the same cart ID that was used to add the cart, and change the information to match!
When a cart is added, a colored dot representing the cart appears on the map, with the color of the dot representing the status of the cart (full is green, limited is yellow, empty is red).
These dots are also updated in status and color when the entry is updated!

## How we built it
We built this project by using HTML, CSS, and JavaScript. We created a template for the website and then used CSS to style the website. We used JavaScript to add functionality to the website such as adding carts, updating the table, and adding dots to the map. We also used JavaScript to add the dropdown menus and the buttons to the website.

## Challenges we ran into
 We ran into a few challenges while working on this project. One of the biggest challenges was trying to get the dots to appear on the map. We had to figure out how to calculate the position of the dots based on the location of the carts. We also had to figure out how to update the table with new information when a cart was added or updated. Another big challenge was to get all the information from the input form to put into a new row in the table. It ended up requiring querySelector() instead of getElementByID. A challenge we could not overcome was implementing a backend, as our developer tools and computers were incapable of successfully downloading the required software.

## Accomplishments that we're proud of
 We are proud of the fact that we were able to complete the project with its core functionlity. We are also proud of the simple yet understandable design that we used. We were able to add a lot of the desired functionality to the website and make it look good.

## What we learned
We learned a lot while working on this project. We learned how to use JavaScript to search for previously added information in the DOM in order to update it. We learned there are various methods to get HTML elements and their contents, some less prone to errors than others. We learned how to use various useful JavaScript libraries like Date, along with creating graphical elements in JavaScript and how to update their CSS.

## What's next for CrashLocator
Implementing a database and backend using Node.js so that the information in the table and map can be stored in a web server. Adapting it to work on any floor plan of a hospital instead of a sample one, likely with A.I image recognition/mapping. Using RFID tags or Bluetooth to track carts and status instead of manually inputting/updating. 

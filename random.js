// Create an array of available images. In this example they are in a subdirectory so the path includes the folder name before the file name:


// Generate a random number based on the number of images in the array:


// Get the image from the array based on that random number:


// Go into the HTML and find the element with the id of "randomImage":


// Add the randomly chosen image's source (src) info to that element:






/*///////////////////////////////
// How does this script work?
////////////////////////////////

The first part creates an array of the images I want it to pick from. An array is a collection (or list) of data that can be accessed by an index (number).

The second part gets a random item from the array. Math.random() is a function that returns a random number between 0 and 1. Math.floor() is a function that rounds down a number to the nearest integer. So, Math.floor(Math.random() * imageList.length) will return a random integer between 0 and imageList.length - 1, which is the range of valid indexes for the array.

The third part gets the image source from the array using the random index. For example, if the random index is 2, then randomImage will be the third image in the list. Why did the random number 2 pick the third image and not the second image? It's because in JS the first number is 0 not 1, so 2 is the third number. 

The fourth part gets the image element from the HTML. This is done with the code document.getElementById(). In JS, document refers to the web page itself and getElementById() tells it to look through the HTML and find the element that has the id attribute that matches what is defined inside the (). 

For example, if the image element has an id of “randomImage”, then document.getElementById(“randomImage”) will get that element. An id is similar to a class. The difference is that classes can be applied to multiple elements, but each id can only be used once per page. 

The fifth part goes into the HTML and adds a value to the source attribute (src="") of the element chosen in the previous step. For example, imgElement.src = randomPick will set the image source to "example2.png" if that was the random image that was chosen.

This JS code will run every time the webpage is loaded, so it will display a different image each time you visit the page or hit refresh on the browser. 


////////////////////////////////
// Vaiables used in this script: 
////////////////////////////////

imageList - An array (list) of all the images it can choose from

randomizer - A random number within the number of items in the array

randomPick - The information taken from the randomly chosen item in the array

imgElement - The HTML element that has been given the id name of "randomImage"

/////////////////////////////*/

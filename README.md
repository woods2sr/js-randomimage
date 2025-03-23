# Pick a Random Image with JavaScript

As you advance your skills as a web developer, you'll need to incorporate the three essential web languages: **HTML**, **CSS**, and **JavaScript**. While this class has been concentrating on HTML and CSS to create structure and style, adding a splash of JavaScript can add some additional functionality to your pages. 

* **HTML** lays the groundwork by structuring web content. It defines the bones of a webpage—the headings, paragraphs, images, and links. Think of it as the architectural blueprint for your digital space.

* **CSS** steps in to add style and aesthetics. It paints the walls, arranges the furniture, and ensures a visually pleasing experience. With CSS, we transform raw HTML into a polished, user-friendly interface.

* **JavaScript**, however, can be a dynamic force that adds more dynamic elements into our static web pages. When users click buttons, submit forms, or change the content, JavaScript orchestrates the show.

---
<br>

**In this coding exercise you will write some basic JavaScript that will show a random image each time a page is loaded. This is surprisingly complicated when compared to adding an image with HTML.**

## Here's how this JavaScript works: 

### Vaiables used in this script:

* imageList - An array (list) of all the images it can choose from
* randomizer - A random number between 0 and the number of items in the array -1
* randomPick - The information taken from the randomly chosen item in the array
* imgElement - The HTML element that has been given the id name of "randomImage"


1. The first part creates an array of image sources. An array is a list of data that can be accessed by in a variety of different ways. In this example the array has been given the name of "images":

```javascript
var imageList = [
   "example1.jpg",
   "example2.jpg",
   "example3.jpg"
];
```
<br>
2. The second part generates a random number based on the number of items listed in the array. `Math.random()` returns a random number between 0 and 1. `Math.floor()` rounds down a number to the nearest integer. So, `Math.floor(Math.random() * images.length)` will return a random integer between 0 and images.length - 1, which is the range of valid indexes for the array. 

```javascript
var randomizer = Math.floor(Math.random() * images.length);
```

<br>
3. The third part picks the item from the array that corresponds with the randomly generated number.

```javascript
var randomPick = images[randomizer];
```

<br>
4. The fourth part goes into the HTML page and finds an &lt;img&gt; element that has a specified id attribute. For example, if the image element has an id of “randomImage”, then `document.getElementById(“randomImage”)` will get that element.

```javascript
var imgElement = document.getElementById("randomImage");
```

<br>
5. The fifth part sets that chosen image's `src=""` attribute to the file name of the randomly chosen file from the array. For example, `imageElement.src = randomImage` will set the image source to “example3.jpg” if that was the random image.

```javascript
imgElement.src = randomPick;
```

<br>
6. Adding the script to an HTML file will make this code run every time the webpage is loaded, so it will display a different image each time. Adding the `defer` attribute to the script tag tells it not to run the script until after all of the HTML is done loading. 

```html
<script src="random.js" defer></script>
```


function upDate(previewPic){
    /* In this function you should 
    1) Change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text of the div with the id = "image" 
    to the alt text of the preview image */
  
    // Get the div with id "image"
    var imageDiv = document.getElementById("image");

    // Set the background image and text based on the hovered image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo(){
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the original image. You can use the css code to see what that original URL was
    
    2) Change the text of the div with the id = "image" 
    back to the original text. You can use the html code to see what that original text was */
    
    // Get the div with id "image"
    var imageDiv = document.getElementById("image");

    // Reset the background image and text to default values
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
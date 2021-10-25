// Get the modal 
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
var imgs = document.getElementsByName('item');
modalImg = document.getElementById("img01");

for (var i=0; i < imgs.length; i++){
    imgs[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
} 

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}
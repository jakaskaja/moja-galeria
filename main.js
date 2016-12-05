var $images = document.querySelectorAll("#photos img")
var $zoom = document.querySelector("div#zoom")
$images.forEach(function print_image(image){
    console.log(image)
    image.addEventListener("click",function clickHandler(e){
        var $image = document.createElement("img");
        $image.src = image.parentNode.href;
        $zoom.innerHTML = " ";
        $zoom.appendChild($image);
        e.preventDefault();
    });
})

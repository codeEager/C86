var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 function newImage() {
    fabric.Image.fromURL("new_year.gif", function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(450);
        block_image_object.scaleToHeight(450);
        block_image_object.set({ top:0, left:0 });

        canvas.add(block_image_object);
    });
}

function playSound () {
    x.play();
}
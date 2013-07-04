JSGameUtils
===========
Initialize each javascript file to make sure that it works with 

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
//canvas.width = 512; //you can change these values if you want.
//canvas.height = 512; //
document.body.appendChild(canvas); //be sure that this is within the <body> of the document. Else you'll get an error.


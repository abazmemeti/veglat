var input = document.querySelectorAll("input");

for(var i = 0; i < input.length; i++){
	input[i].addEventListener("input", function(){
		var red = document.getElementById("red").value,
			  green = document.getElementById("green").value,
			  blue = document.getElementById("blue").value;

    function toHex(d) {
      return  ("0" + (Number(d).toString(16))).slice(-2).toUpperCase()
    }

    var hexRed = toHex(red);
    var hexGreen = toHex(green);
    var hexBlue = toHex(blue);

    document.getElementById("display").style.background = `rgb(${red},${green},${blue})`;
        
    document.getElementById("dec").innerText = `rgb(${red},${green},${blue})`;
    document.getElementById("hex").innerText = "#" + hexRed + hexGreen + hexBlue;

    document.getElementById("txt-red").innerText = red;
    document.getElementById("hex-red").innerText = hexRed;
    document.getElementById("txt-green").innerText = green;
    document.getElementById("hex-green").innerText = hexGreen;
    document.getElementById("txt-blue").innerText = blue;
    document.getElementById("hex-blue").innerText = hexBlue;

    var dec = document.getElementById("dec");
    var hex = document.getElementById("hex");

    if(Number(red) + Number(green) + Number(blue) > 384) {
      dec.style.color = "black";
      hex.style.color = "black";
    } else {
      dec.style.color = "white";
      hex.style.color = "white";
    }
  });
}
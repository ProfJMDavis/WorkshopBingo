    document.onclick = hideMenu;
    document.oncontextmenu = rightClick;
      
    function hideMenu() {
        document.getElementById("contextMenu")
                contextMenu.style.display = "none"
    }
  
    function rightClick(event) {
        event.preventDefault();
        if (document.getElementById("contextMenu")
	    let contextMenu = document.getElementById("contextMenu");
            contextMenu.style.display = 'block';
            hideMenu();
        else{
            let contextMenu = document.getElementById("contextMenu");
            contextMenu.style.display = 'block';
            contextMenu.style.left = event.pageX + "px";
            contextMenu.style.top = event.pageY + "px";
        }
    }
	function MarkSquare(){
	let string = varName;
	if(document.getElementById(varName)){
		switch(varName) {
		case "G1":
				document.getElementById("G1").src = "Green_Torch.png";
				break;
		case "B1":
				document.getElementById("B1").src = "Blue_Torch.png";
				break;
   		case "R1": 
				document.getElementById("R1").src = "Red_Torch.png";
				break;
		case "P1": 
				document.getElementById("P1").src = "Purple_Torch.png";
				break;
		case "G12":
				document.getElementById("G12").src = "Green_Torch.png";
				break;
		case "B2":
				document.getElementById("B2").src = "Blue_Torch.png";
				break;
   		case "R2": 
				document.getElementById("R2").src = "Red_Torch.png";
				break;
		case "P2": 
				document.getElementById("P2").src = "Purple_Torch.png";
				break;
		case "G2":
				document.getElementById("G2").src = "Green_Torch.png";
				break;
		case "B22":
				document.getElementById("B22").src = "Blue_Torch.png";
				break;
   		case "R3": 
				document.getElementById("R3").src = "Red_Torch.png";
				break;
		case "P3": 
				document.getElementById("P3").src = "Purple_Torch.png";
				break;
		case "G3":
				document.getElementById("G3").src = "Images/Green_Torch.png";
				break;
		case "B3":
				document.getElementById("B3").src = "Blue_Torch.png";
				break;
   		case "R4": 
				document.getElementById("R4").src = "Red_Torch.png";
				break;
		case "P4": 
				document.getElementById("P4").src = "Purple_Torch.png";
		case "G4":
				document.getElementById("G4").src = "Green_Torch.png";
				break;
		case "B4":
				document.getElementById("B4").src = "Blue_Torch.png";
				break;
   		case "R42": 
				document.getElementById("R42").src = "Red_Torch.png";
				break;
		case "P5": 
				document.getElementById("P5").src = "Purple_Torch.png";
				break;
		case "G5":
				document.getElementById("G5").src = "Green_Torch.png";
				break;
		case "P52": 
				document.getElementById("P52").src = "Purple_Torch.png";
				break;
		case "B5":
				document.getElementById("B5").src = "Blue_Torch.png";
				break;
		case "R5": 
				document.getElementById("R5").src = "Red_Torch.png";
				break;
        alert('Square Marked');
       	break;

   		default: 
			    alert('Default case');
				break;
			}
		}
	}
		function UnMarkSquare(){
			let string = varName;
			if(document.getElementById(varName)){
				switch(varName) {
					case "G1":
						document.getElementById("G1").src = "Green_Square.png";
						break;
					case "B1":
						document.getElementById("B1").src = "Blue_Square.png";
						break;
					case "R1": 
						document.getElementById("R1").src = "Red_Square.png";
						break;
					case "P1":
						document.getElementById("P1").src = "Purple_Square.png";
						break;
					case "G12":
						document.getElementById("G12").src = "Green_Square.png";
						break;
					case "B2":
						document.getElementById("B2").src = "Blue_Square.png";
						break;
					case "R2": 
						document.getElementById("R2").src = "Red_Square.png";
						break;
					case "P2": 
						document.getElementById("P2").src = "Purple_Square.png";
						break;
					case "G2":
						document.getElementById("G2").src = "Green_Square.png";
						break;
					case "B22":
						document.getElementById("B22").src = "Blue_Square.png";
						break;
					case "R3": 
						document.getElementById("R3").src = "Red_Square.png";
						break;
					case "P3": 
						document.getElementById("P3").src = "Purple_Square.png";
					case "G3":
						document.getElementById("G3").src = "Green_Square.png";
						break;
					case "B3":
						document.getElementById("B3").src = "Blue_Square.png";
						break;
   					case "R4": 
						document.getElementById("R4").src = "Red_Square.png";
						break;
					case "P4": 
						document.getElementById("P4").src = "Purple_Square.png";
						break;
					case "G4":
						document.getElementById("G4").src = "Green_Square.png";
						break;
					case "B4":
						document.getElementById("B4").src = "Blue_Square.png";
						break;
   					case "R42": 
						document.getElementById("R42").src = "Red_Square.png";
						break;
					case "P5": 
						document.getElementById("P5").src = "Purple_Square.png";
						break;
					case "G5":
						document.getElementById("G5").src = "Green_Square.png";
						break;
					case "P52": 
						document.getElementById("P52").src = "Purple_Square.png";
						break;
					case "B5":
						document.getElementById("B5").src = "Blue_Square.png";
						break;
					case "R5": 
						document.getElementById("R5").src = "Red_Square.png";
						break;
        				alert('Square Unmarked');
       					break;

   					default: 
			    		alert('Default case');
						break;
					}
				}
			}
        }
        function VoucherSourcetoPrint(source) {
            return "<html><head><script>function step1(){\n" +
                    "setTimeout('step2()', 10);}\n" +
                    "function step2(){window.print();window.close()}\n" +
                    "</scri" + "pt></head><body onload='step1()'>\n" +
                    "<img src='" + source + "' /></body></html>";
        }
        function CardPrint() {
           var divContents = document.getElementById("photo").innerHTML;
            Pagelink = "about:blank";
            var pwa = window.open(Pagelink, "_new");
            pwa.document.write('<html>');
            pwa.document.write('<body > <h1>Div contents are <br>');
            pwa.document.write(divContents);
            pwa.document.write('</body></html>');
            pwa.document.close();
            pwa.print();
        }
	    function ChangeTextIL(){
		document.getElementById("divElement").innerHTML="Information Literacy: 1) Finding Scholarly Resources Effectively, 2) Fake News & Evaluating Information, 3) Plagiarism. Right-click to add Code from a completed workshop.";
	}
	    function ChangeTextDL(){
		document.getElementById("divElement").innerHTML="Digital Literacy: 1) Your Wake Tech Accounts & Using Office 365 Apps, 2) Using NC Live & Library Databases. Right-click to add Code from a completed workshop.";
	}
	    function ChangeTextAD(){
		document.getElementById("divElement").innerHTML="Adulting Life Skills: 1) Adulting 101, 2) Meal Planning 101, 3) Talking via Tech: Social Media Etiquette. Right-click to add Code from a completed workshop.";
	}
	    function ChangeTextCR(){
		document.getElementById("divElement").innerHTML="Crafts: 1) Wish Bracelets, 2) Woven Bowls. Right-click to add Code from a completed workshop.";
	}
            function ChangeTextFR(){
		document.getElementById("divElement").innerHTML="This block does not need to be filled by a program or workshop.";
	}

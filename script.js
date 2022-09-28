    document.onclick = hideMenu;
    document.oncontextmenu = rightClick;
      
    function hideMenu() {
        document.getElementById("contextMenu")
                .style.display = "none"
    }
  
    function rightClick(e) {
        e.preventDefault();
  
        if (document.getElementById("contextMenu")
                .style.display == "block")
            hideMenu();
        else{
            var menu = document.getElementById("contextMenu")
  
            menu.style.display = 'block';
            menu.style.left = e.pageX + "px";
            menu.style.top = e.pageY + "px";
        }
    }
	function MarkSquare(){
	let string = varName;
	if(document.getElementById(varName)){
		switch {
		case "G1":
				document.getElementById("G1").src = "Images/Green_Torch.png";
		case "B1":
				document.getElementById("B1").src = "Images/Blue_Torch.png";
   		case "R1": 
				document.getElementById("R1").src = "Images/Red_Torch.png";
		case "P1": 
				document.getElementById("P1").src = "Images/Purple_Torch.png";
		case "G12":
				document.getElementById("G12").src = "Images/Green_Torch.png";
		case "B2":
				document.getElementById("B2").src = "Images/Blue_Torch.png";
   		case "R2": 
				document.getElementById("R2").src = "Images/Red_Torch.png";
		case "P2": 
				document.getElementById("P2").src = "Images/Purple_Torch.png";
		case "G2":
				document.getElementById("G2").src = "Images/Green_Torch.png";
		case "B22":
				document.getElementById("B22").src = "Images/Blue_Torch.png";
   		case "R3": 
				document.getElementById("R3").src = "Images/Red_Torch.png";
		case "P3": 
				document.getElementById("P3").src = "Images/Purple_Torch.png";
		case "G3":
				document.getElementById("G3").src = "Images/Green_Torch.png";
		case "B3":
				document.getElementById("B3").src = "Images/Blue_Torch.png";
   		case "R4": 
				document.getElementById("R4").src = "Images/Red_Torch.png";
		case "P4": 
				document.getElementById("P4").src = "Images/Purple_Torch.png";
		case "G4":
				document.getElementById("G4").src = "Images/Green_Torch.png";
		case "B4":
				document.getElementById("B4").src = "Images/Blue_Torch.png";
   		case "R42": 
				document.getElementById("R42").src = "Images/Red_Torch.png";
		case "P5": 
				document.getElementById("P5").src = "Images/Purple_Torch.png";
		case "G5":
				document.getElementById("G5").src = "Images/Green_Torch.png";
		case "P52": 
				document.getElementById("P52").src = "Images/Purple_Torch.png";
		case "B5":
				document.getElementById("B5").src = "Images/Blue_Torch.png";
		case "R5": 
				document.getElementById("R5").src = "Images/Red_Torch.png";
        alert('Square Marked');
       	break;

   		default: 
			    alert('Default case');
			}
		}
	}
		function UnMarkSquare(){
			string varName;
			if(document.getElementById(varName)){
				switch {
					case "G1":
						document.getElementById("G1").src = "Images/Green_Square.png";
					case "B1":
						document.getElementById("B1").src = "Images/Blue_Square.png";
					case "R1": 
						document.getElementById("R1").src = "Images/Red_Square.png";
					case "P1":
						document.getElementById("P1").src = "Images/Purple_Square.png";
					case "G12":
						document.getElementById("G12").src = "Images/Green_Square.png";
					case "B2":
						document.getElementById("B2").src = "Images/Blue_Square.png";
					case "R2": 
						document.getElementById("R2").src = "Images/Red_Square.png";
					case "P2": 
						document.getElementById("P2").src = "Images/Purple_Square.png";
					case "G2":
						document.getElementById("G2").src = "Images/Green_Square.png";
					case "B22":
						document.getElementById("B22").src = "Images/Blue_Square.png";
					case "R3": 
						document.getElementById("R3").src = "Images/Red_Square.png";
					case "P3": 
						document.getElementById("P3").src = "Images/Purple_Square.png";
					case "G3":
						document.getElementById("G3").src = "Images/Green_Square.png";
					case "B3":
						document.getElementById("B3").src = "Images/Blue_Square.png";
   					case "R4": 
						document.getElementById("R4").src = "Images/Red_Square.png";
					case "P4": 
						document.getElementById("P4").src = "Images/Purple_Square.png";
					case "G4":
						document.getElementById("G4").src = "Images/Green_Square.png";
					case "B4":
						document.getElementById("B4").src = "Images/Blue_Square.png";
   					case "R42": 
						document.getElementById("R42").src = "Images/Red_Square.png";
					case "P5": 
						document.getElementById("P5").src = "Images/Purple_Square.png";
					case "G5":
						document.getElementById("G5").src = "Images/Green_Square.png";
					case "P52": 
						document.getElementById("P52").src = "Images/Purple_Square.png";
					case "B5":
						document.getElementById("B5").src = "Images/Blue_Square.png";
					case "R5": 
						document.getElementById("R5").src = "Images/Red_Square.png";
        				alert('Square Unmarked');
       					break;

   					default: 
			    		alert('Default case');
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
        function VoucherPrint(source) {
            Pagelink = "about:blank";
            var pwa = window.open(Pagelink, "_new");
            pwa.document.open();
            pwa.document.write(VoucherSourcetoPrint(source));
            pwa.document.close();
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

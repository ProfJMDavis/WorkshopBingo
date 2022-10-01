 
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
		document.getElementById("divElementCaption").innerHTML="Information Literacy: 1) Finding Scholarly Resources Effectively, 2) Fake News & Evaluating Information, 3) Plagiarism. Right-click to add Code from a completed workshop.";
	}
	    function ChangeTextDL(){
		document.getElementById("divElementCaption").innerHTML="Digital Literacy: 1) Your Wake Tech Accounts & Using Office 365 Apps, 2) Using NC Live & Library Databases. Right-click to add Code from a completed workshop.";
	}
	    function ChangeTextAD(){
		document.getElementById("divElementCaption").innerHTML="Adulting Life Skills: 1) Adulting 101, 2) Meal Planning 101, 3) Talking via Tech: Social Media Etiquette. Right-click to add Code from a completed workshop.";
	}
	    function ChangeTextCR(){
		document.getElementById("divElementCaption").innerHTML="Crafts: 1) Wish Bracelets, 2) Woven Bowls. Right-click to add Code from a completed workshop.";
	}
            function ChangeTextFR(){
		document.getElementById("divElementCaption").innerHTML="This block does not need to be filled by a program or workshop.";
	}

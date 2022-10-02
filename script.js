
function changeText() {
  if (this.innerText === "O") { // check if text inside is "O"
    this.innerText == "COURSE TAKEN";    // If so, change to "Course Taken"
  } else {
    this.innerText == "O";
  }
}

function printPage() {
      window.print();
    }

    function ChangeTextIL() {
      document.getElementById("divElementCaption").innerHTML = "Information Literacy: 1) Finding Scholarly Resources Effectively, 2) Fake News & Evaluating Information, 3) Plagiarism. Right-click to add Code from a completed workshop.";
    }

    function ChangeTextDL() {
      document.getElementById("divElementCaption").innerHTML = "Digital Literacy: 1) Your Wake Tech Accounts & Using Office 365 Apps, 2) Using NC Live & Library Databases. Right-click to add Code from a completed workshop.";
    }

    function ChangeTextAD() {
      document.getElementById("divElementCaption").innerHTML = "Adulting Life Skills: 1) Adulting 101, 2) Meal Planning 101, 3) Talking via Tech: Social Media Etiquette. Right-click to add Code from a completed workshop.";
    }

    function ChangeTextCR() {
      document.getElementById("divElementCaption").innerHTML = "Crafts: 1) Wish Bracelets, 2) Woven Bowls. Right-click to add Code from a completed workshop.";
    }

    function ChangeTextFR() {
      document.getElementById("divElementCaption").innerHTML = "This block does not need to be filled by a program or workshop.";
    }

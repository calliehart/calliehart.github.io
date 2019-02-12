//Changing words on home page

const descriptive = ["DESIGNER", "FRONT-END DEVELOPER", "RESEARCHER", "CREATOR"];
let counter = 1;

function descriptiveLoop() {
    if (counter < descriptive.length) {
        $("#changingTitles").empty();
        $("#changingTitles").append(descriptive[counter]);
        counter++;
        if (counter === descriptive.length) {
            counter = 0;
        }
    };
};

$("#changingTitles").append(descriptive[0]);
setInterval(descriptiveLoop, 2000);

//Menu selection

$("#portfolioMenu").on("click", function(){
    $("#portfolioMenu").addClass("active");
    $("#homeMenu").removeClass("active");
    $("#contactMenu").removeClass("active");
    $("#hamburger").trigger("click");
});

$("#contactMenu").on("click", function(){
    $("#contactMenu").addClass("active");
    $("#homeMenu").removeClass("active");
    $("#portfolioMenu").removeClass("active");
    $("#hamburger").trigger("click");
});

$("#homeMenu").on("click", function(){
    $("#homeMenu").addClass("active");
    $("#portfolioMenu").removeClass("active");
    $("#contactMenu").removeClass("active");
    $("#hamburger").trigger("click");
});

$("#logoBtn").on("click", function(){
    $("#homeMenu").addClass("active");
    $("#portfolioMenu").removeClass("active");
    $("#contactMenu").removeClass("active");
});

//Switching between the two portfolios

$("#projWrapper").show();
$("#uxWrapper").hide();

$("#UXBtn").on("click", function(){
  $("#projWrapper").hide();
  $("#uxWrapper").show();
  $("#UXBtn").addClass("clickedBtn");
  $("#WebBtn").removeClass("clickedBtn");
  $("#whichPortfolioViewing").empty();
  $("#whichPortfolioViewing").append("UX Portfolio");
});


$("#WebBtn").on("click", function(){
  $("#projWrapper").show();
  $("#uxWrapper").hide();
  $("#UXBtn").removeClass("clickedBtn");
  $("#WebBtn").addClass("clickedBtn");
  $("#whichPortfolioViewing").empty();
  $("#whichPortfolioViewing").append("Web Dev Portfolio");

});

//Slide Shows

var slideIndex = [1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

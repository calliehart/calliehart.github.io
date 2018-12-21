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

$("#projWrapper").show();

$("#UXBtn").on("click", function(){
  $("#projWrapper").hide()

});


$("#WebBtn").on("click", function(){
  $("#projWrapper").show()

});

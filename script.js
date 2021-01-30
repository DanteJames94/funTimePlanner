







//create date under header 
function todaysDate() { 
    var currentDate = moment().format("MMM Do, YYYY");
    $("#currentDay").text(currentDate);
}

todaysDate();

$(".saveBtn").on("click", function(){
    var userInput = $(this).siblings("textarea").val();

    var hourTime = $(this).siblings(".hour").text();
    console.log(hourTime)

    localStorage.setItem(hourTime, userInput)
    
})


$(".time-block").each(function() {

    var hourClass = $(this).children(".hour").text()
    console.log(hourClass)
    // localStorage.getItem(hourClass)
    $(this).children("textarea").val(localStorage.getItem(hourClass));
})

function colorHours () {
    var whatHour = moment().hour(); // Number
    console.log(whatHour)
    $(".time-block").each(function() {
        var timeBlockHour = parseInt($(this).children("textarea").attr("id"))
            console.log(timeBlockHour)

            if(timeBlockHour < whatHour){
                $(this).addClass("past")
            }
            else if (timeBlockHour = whatHour){
                $(this).removeClass("past")
                $(this).addClass("present")
            }
            else if (timeBlockHour > whatHour) {
                $(this).removeClass("present")
                $(this).addClass("future")
            }

                
    }) 
    
}   
    
colorHours()





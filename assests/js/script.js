var localeSettings ={};
dayjs.locale(localeSettings);

var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM DD'));
var timeBlockEl = $(".time-block");
var currentHour = dayjs().format("H");
var hourEl = $("#hour");
var saveBtnEl = $(".saveBtn")
var descriptionEl = $(".description")

    $(function (){

       
    
    
    function blockColor(){
    $(".time-block").each(function(){
    console.log('time is for')
    var currentHour = dayjs().format("H");
    var currentBlock = parseInt(this.id)
    if(currentBlock == currentHour){
        $(this).removeClass("past future").addClass("present");
    }
    else if(currentBlock < currentHour){
        $(this).removeClass("present future").addClass("past");
    }
    else{
        $(this).removeClass("past present").addClass("future");
    }
    })
    }
    
    
    $(".time-block").each(function(){
    
    
    })
    function textEntry() {
    $(".saveBtn").on('click', function() {
        var key = $(this).parent().attr("id");
        var value = $(this).siblings(".description").val()
        localStorage.setItem(key , value);
    })
    }
    
    
    
        $(".time-block").each(function(){
            var key = $(this).attr('id');
            var value = localStorage.getItem(key)
            $(this).children('.description').val(value);
    
        })
        blockColor()
        
        textEntry()
    
    
    
     
    
    
    
    
    

    })
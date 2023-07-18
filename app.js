//single click
$("#btn-1").click(function(){
    $("#btn-1").append("I love you tomtom")
})

//double click

$("#btn-2").dblclick(function(){
    
    $("#btn-2").append("I love you tomtom")

})

//Mouse Over and Mouse Out


$("#btn-3").mouseover(function(){
    $("#btn-3").val("Inside button")
    
})

$("#btn-3").mouseout(function(){
    $("#btn-3").val("mouse removed")
    
})


//hover()

$("#btn-4").hover(
    $("#btn-4").mouseover(function(){
        $("#btn-4").val("Inside button")
        console.log("Mouse in");
    }),
    
    $("#btn-4").mouseout(function(){
        $("#btn-4").val("mouse removed")
        console.log("Mouse out");
        
    })

)

$(document).ready(function () {
    $(".main.who").show();

    $("#whoForm").validate({
        rules: {
            name : {
                required: true,
                minlength: 3,
            }
        },
        messages: {
            name : {
                required: "Dit veld is verplicht",
                minlength: "Vul tenminste 3 characters in",
            }
        }
    });

    $("#educationForm").validate({
        rules: {
            studentEducation : {
                required: true,
            }
        },
    });

    $("#vmboForm").validate({
        rules: {
            vmboLevel : {
                required: true,
            },
            vmboSector : {
                required: true,
            },
            mviYesOrNo : {
                required: true,     
            },
        },
        messages: {
            vmboLevel : {
                required: "Dit veld is verplicht",
            },
            vmboSector : {
                required: "Dit veld is verplicht",
            },
            mviYesOrNo : {
                required: "Dit veld is verplicht",     
            },
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "mviYesOrNo" ) {
                error.insertAfter("#mviError");
            } else if (element.attr("name") == "vmboLevel") {
                error.insertAfter("#levelError")
            } else {
                error.insertAfter(element);
            }
        }
                
        
        
    });


    $("#who-button-next").click(function () {
        if ($("#whoForm").valid() == true) {
            $(".main.who").hide()
            $(".main.study").show()
        } 
    });

    $("#studentEducation").change(function () {
        $whatEducation = $("#studentEducation option:selected").text();        

        if ($("#educationForm").valid() == true)  {
            if ($whatEducation == 'VMBO') {
                $(".havo, .vwo, .mbo, .other").hide();
                $(".vmbo").show();
            } else if ($whatEducation == 'HAVO') {
                $(".vmbo, .vwo, .mbo, .other").hide();
                $(".havo").show();
            } else if ($whatEducation == 'VWO') {
                $(".vmbo, .havo, .mbo, .other").hide();
                $(".vwo").show();
            } else if ($whatEducation == 'MBO') {
                $(".vmbo, .havo, .vwo, .other").hide();
                $(".mbo").show();
            } else if ($whatEducation == 'Anders') {
                $(".vmbo, .havo, .vwo, .mbo").hide();
                $(".other").show();
            };
        };

    });

    $("#vmboButton").click(function () {
        if ($("#vmboForm").valid() == true) {
            $(".main.study").hide();
            $(".main.impression").show();
        }
    });

    $("#mviYesOrNo input").change(function () {
        $mviValue = $('input[name=mviYesOrNo]:checked', '#mviYesOrNo').val();
        if ($mviValue == '2') {
            $(".mviIfYes").show();
        } else if ($mviValue == '1') {
            $(".mviIfYes").hide();
        }
        });

   

    $("#posture-button-next").click(function () {
        $(".posture").hide();
        $(".attitude").show();
    });

    $("#attitude-button-next").click(function () {
        $(".attitude").hide();
        $(".skills").show();
    });

    $("#skills-button-next").click(function () {
        $(".main.impression").hide();
        $(".main.special").show();
        $(".restrictionOne").show();
    });

    $("#restrictionOne-button-next").click(function () {
        $(".restrictionOne").hide();
        $(".restrictionTwo").show();
    });

    $("#otherCareForm input").change(function () {
        $otherCareValue = $('input[name=otherCareYesNo]:checked', '#otherCareForm').val();
        if ($otherCareValue == '1') {
            $(".otherCare").show();
        } else if ($otherCareValue == '2') {
            $(".otherCare").hide();
        }
    });

    $("#restrictionTwo-button-next").click(function () {
        $(".main.special").hide()
        $(".main.you").show()
    });

    $("#send-button").click(function ( ) {   
        $("#snackbar").addClass("show");
        setTimeout(function() { $("#snackbar").removeClass("show") }, 3000);
        setTimeout(function() { 
            $(".main.you").hide();
            $(".main.who").show(); 
        }, 2000);
        
    });
    
});


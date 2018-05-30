
$(document).ready(function () {
    
    
    $(".education-button-back").click(function () {
            $(".main.who").show();
            $(".main.study").hide();
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

});


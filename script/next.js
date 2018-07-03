
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
            lwoo : {
                required: true,
            },
            mviYesOrNo : {
                required: true,     
            },
            mviIfYes : {
                required: function(element) {
                    if($("#mviChoice option:selected").text() == 'Ja') {
                        return true;
                    } else {
                        return false;
                    }
                } 
            },
        },
        messages: {
            vmboLevel : {
                required: "Dit veld is verplicht",
            },
            vmboSector : {
                required: "Dit veld is verplicht",
            },
            lwoo : {
                required: "Dit veld is verplicht",
            },
            mviYesOrNo : {
                required: "Dit veld is verplicht",     
            },
            mviIfYes : {
                required: "Dit veld is verplicht",
            },
        },
    });

    $("#havoForm").validate({
        rules: {
            transitionHavo : {
                required: true,
            },
        },
        messages: {
            transitionHavo : {
                required: "Dit veld is verplicht",
            },
        },
    });

    $("#vwoForm").validate({
        rules: {
            transitionVwo : {
                required: true,
            },
        },
        messages: {
            transitionVwo : {
                required: "Dit veld is verplicht",
            },
        },
    });

    $("#mboForm").validate({
        rules: {
            studentEducationLevel : {
                required: true,
            },
            studentEducationRoad : {
                required: true,
            },
        },
        messages: {
            studentEducationLevel : {
                required: "Dit veld is verplicht",
            },
            studentEducationRoad : {
                required: "Dit veld is verplicht",
            },
        },
    });

    $("#otherForm").validate({
        rules: {
            studentEducationOther : {
                required: true,
            },
        },
        messages: {
            studentEducationOther : {
                required: "Dit veld is verplicht",
            },
        },
    });

    $("#postureForm").validate({
        rules: {
            studentPostureConc : {
                required: true,
            },
            studentPostureTempo : {
                required: true,
            },
            studentPostureSelf : {
                required: true,
            }
        },
        messages: {
            studentPostureConc : {
                required: "Dit veld is verplicht",
            },
            studentPostureTempo : {
                required: "Dit veld is verplicht",
            },
            studentPostureSelf : {
                required: "Dit veld is verplicht",
            },
        },
    });

    $("#attitudeForm").validate({
        rules: {
            studentAttitudeMotiv : {
                required: true,
            },
            studentAttitudeEndur : {
                required: true,
            },
        },
        messages: {
            studentAttitudeMotiv : {
                required: "Dit veld is verplicht",
            },
            studentAttitudeEndur : {
                required: "Dit veld is verplicht",
            },
        },
    });

    $("#skillsForm").validate({
        rules: {
            studentSkillsCom : {
                required: true,
            },
            studentSkillsSocial : {
                required: true,
            },
        },
        messages: {
            studentSkillsCom : {
                required: "Dit veld is verplicht",
            },
            studentSkillsSocial : {
                required: "Dit veld is verplicht",
            },
        },
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

    $("#havoButton").click(function () {
        if ($("#havoForm").valid() == true) {
            $(".main.study").hide();
            $(".main.impression").show();
        }
    });

    $("#vwoButton").click(function () {
        if ($("#vwoForm").valid() == true) {
            $(".main.study").hide();
            $(".main.impression").show();
        }
    });

    $("#mboButton").click(function () {
        if ($("#mboForm").valid() == true) {
            $(".main.study").hide();
            $(".main.impression").show();
        }
    });

    $("#otherButton").click(function () {
        if ($("#otherForm").valid() == true) {
            $(".main.study").hide();
            $(".main.impression").show();
        }
    });

    $("#mviChoice").change(function () {
        $mviValue = $("#mviChoice option:selected").text();
        if ($mviValue == 'Ja') {
            $(".mviIfYes").show().validate();
        } else if ($mviValue == 'Nee') {
            $(".mviIfYes").hide();
        }
    });

    $("#posture-button-next").click(function () {
        if ($("#postureForm").valid() == true) {
            $(".posture").hide();
            $(".attitude").show();
        }
    });

    $("#attitude-button-next").click(function () {
        if ($("#attitudeForm").valid() == true) {
            $(".attitude").hide();
            $(".skills").show();
        }
    });

    $("#skills-button-next").click(function () {
        if ($("#skillsForm").valid() == true) {
            $(".main.impression").hide();
            $(".main.special").show();
            $(".restrictionOne").show();
        }
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


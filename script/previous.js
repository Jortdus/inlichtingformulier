
$(document).ready(function () {

    $(".education-button-back").click(function () {
        $(".main.who").show();
        $(".main.study").hide();
    });

    $("#posture-button-back").click(function () {
        $(".main.impression").hide();
        $(".main.study").show();
    });

    $("#attitude-button-back").click(function () {
        $(".attitude").hide();
        $(".posture").show();
    });

    $("#skills-button-back").click(function () {
        $(".skills").hide();
        $(".attitude").show();
    });

    $("#restrictionOne-button-back").click(function () {
        $(".main.impression").show();
        $(".main.special").hide();
        $(".restrictionOne").hide();
    });

    $("#restrictionTwo-button-back").click(function () {
        $(".restrictionOne").show();
        $(".restrictionTwo").hide();
    });
});


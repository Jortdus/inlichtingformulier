$(document).ready(function () {
    
    $("#button-1").click(function() {
        $("#permittedShowcase-1").append("<option>" + $("#permissionInput-1").val() + "</option>");
        $("#permissionInput-1").val('')
    });

    $("#button-2").click(function() {
        $("#permittedShowcase-2").append("<option>" + $("#permissionInput-2").val() + "</option>");
        $("#permissionInput-2").val('')
    });

    $("#button-3").click(function() {
        $("#permittedShowcase-3").append("<option>" + $("#permissionInput-3").val() + "</option>");
        $("#permissionInput-3").val('')
    });

});
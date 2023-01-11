$(document).ready(function() {
    $('#l1').click(function() {
        $('#1').hide().fadeIn(800);
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
     });

    $('#l2').click(function() {
        $('#2').hide().fadeIn(800);;
        $('#1').hide();
        $('#3').hide();
        $('#4').hide();
        $('#5').hide();
    });
    $('#l3').click(function() {
        $('#3').hide().fadeIn(800);
        $('#1').hide();
        $('#2').hide();
        $('#4').hide();
        $('#5').hide();
    });
    $('#l4').click(function() {
        $('#4').hide().fadeIn(800);
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#5').hide();
    });
    $('#l5').click(function() {
        $('#5').hide().fadeIn(800);
        $('#1').hide();
        $('#2').hide();
        $('#3').hide();
        $('#4').hide();
    });
});

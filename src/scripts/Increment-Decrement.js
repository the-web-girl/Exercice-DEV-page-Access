let total = 0;

$(document).ready(function() {
    //Pour décocher les cases à l'actualisation de la page
    console.log('ready!'); 

    $('.checkbox').prop('checked', true);
    $('.checkbox').prop('checked', false);

    //Incrémentation/Désincrémentation du compteur quand case cocher ou  décocher
    $('.checkbox').on('change', function() {
        $('.total').html(total += this.checked ? 1 : -1);
    });
});
/* Top Products section - bottom border animation */

$(document).ready(function(ev) {
    $('#custom-carousel').on('slide.bs.carousel', function(evt) {
        $('#custom-carousel .controls li.active').removeClass('active');
        $('#custom-carousel .controls li:eq(' + $(evt.relatedTarget).index() + ')').addClass('active');
    })
});
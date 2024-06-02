$(document).ready(function() {
    $('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-dialog').removeClass('slideInUp').addClass('slideInUp'); /* Add animation class */
    });

    $('#exampleModal').on('hide.bs.modal', function (e) {
        $(this).find('.modal-dialog').removeClass('slideInUp'); /* Clean up animation class */
    });
});


$(document).ready(function () {
    // Function to truncate text to 70 words
    function truncateText(text, limit) {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    }

    // Apply truncation to each carousel text
    $('.carousel-text').each(function () {
        const fullText = $(this).text();
        const truncatedText = truncateText(fullText, 15);
        $(this).data('full-text', fullText);
        $(this).text(truncatedText);
    });

    // Handle click event on Read More button
    $(".read-more-text").click(function () {
        const fullText = $(this).siblings('.carousel-text').data('full-text');
        $("#exampleModal .modal-body").text(fullText);
    });
});

function attachEvents() {
    $('a.button').on('click', buttonClicked);

    function buttonClicked() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else{
            $('a.button').removeClass('selected');
            $(this).addClass('selected');
        }
       
        
        // "this" is the event source (the hyperlink clicked)
    }

}
//global variables
const jobRole = $('#title');
const colorOptions = $('#color').children();
const designOptions = $('#design');
const activityCheckbox = $(':checkbox');


//set focus on page load
refreshFocus = () => {
    $('#name').focus();
    $('#other-title').hide()
    $('#colors-js-puns').hide()
};
refreshFocus();


//make other text box conditional
jobRole.on('change', function (){
    if(jobRole.val() === 'other'){
        $('#other-title').show();
        }else {
        $('#other-title').hide()
}
});

//add classes to color options based on index position
colorOptions.each(function(index, element){
    
if (index <= 2) {
    $(this).addClass('JS_Pun_Colors');
} else if(index >= 3){
    $(this).addClass('Love_JS_Colors');
}
});

//change color options based on design selection
designOptions.on('change', function (){
    $('#colors-js-puns').show()
 if (designOptions.val() ===  'js puns'){
     $('#color').val('cornflowerblue');
     $('.Love_JS_Colors').hide();
     $('.JS_Pun_Colors').show();
 } else if(designOptions.val() === 'heart js'){
    $('#color').val('tomato'); 
    $('.JS_Pun_Colors').hide();
    $('.Love_JS_Colors').show();
 }
});


activityCheckbox.on('click', function () {
    const clicked = $(event.target);
    const clickedAttr = $(this).attr('name');
    
    
    if (clicked.is(':checked')) {
        switch (clickedAttr) {
            case 'js-frameworks':
            $("[name='express']").attr('disabled', true)
            $("[name='express']").parent().wrap('<strike>')
                break;
            case 'express':
            $("[name='js-frameworks']").attr('disabled', true)
            $("[name='js-frameworks']").parent().wrap('<strike>')
                break;
            case 'js-libs':
            $("[name='node']").attr('disabled', true)
            $("[name='node']").parent().wrap('<strike>')
                break;
            case 'node':
            $("[name='js-libs']").attr('disabled', true)
            $("[name='js-libs']").parent().wrap('<strike>')
                break;
            default:
                break;
        }
    }

    if (clicked.prop('checked')===false) {
        console.log('unchecked');
        switch (clickedAttr) {
            case 'js-frameworks':
            $("[name='express']").attr('disabled', false)
                break;
            case 'express':
            $("[name='js-frameworks']").attr('disabled', false)
                break;
            case 'js-libs':
            $("[name='node']").attr('disabled', false)
                break;
            case 'node':
            $("[name='js-libs']").attr('disabled', false)
                break;
            default:
                break;
        }
    }
    
})

// if (clickedAttr === 'js-frameworks' && clicked.is(':checked')===true) {
    //     $("[name='express']").attr('disabled', true);
    // }


//global variables
const jobRole = $('#title');
const colorOptions = $('#color').children();
const designOptions = $('#design');
const activityCheckbox = $(':checkbox');
let total = 0;



//set focus on page load
refreshFocus = () => {
    $('#name').focus();
    $('#other-title').hide()
    //$('#colors-js-puns').hide()
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

// if(designOptions.val() === 'Select Theme'){

// };

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
            case 'all':
            total += 200
            $("label:last-child").text('$' + total);
                break;
            case 'js-frameworks':
            $("[name='express']").attr('disabled', true)
            $("[name='express']").parent().css({'color': 'maroon'})
            total += 100
            $("label:last-child").text('$' + total);
            
                break;
            case 'express':
            $("[name='js-frameworks']").attr('disabled', true)
            $("[name='js-frameworks']").parent().css({'color': 'maroon'})
            total += 100
            $("label:last-child").text('$' + total);
                break;
            case 'js-libs':
            $("[name='node']").attr('disabled', true)
            $("[name='node']").parent().css({'color': 'maroon'})
            total += 100
            $("label:last-child").text('$' + total);
                break;
            case 'node':
            $("[name='js-libs']").attr('disabled', true)
            $("[name='js-libs']").parent().css({'color': 'maroon'})
            total += 100
            $("label:last-child").text('$' + total);
                break;
            case 'build-tools':
            total += 100
            $("label:last-child").text('$' + total);
                break;
            case 'npm':
            total += 100
            $("label:last-child").text('$' + total);
                break;
            default:
                break;
        }
    }

    if (clicked.prop('checked')===false) {
        switch (clickedAttr) {
            case 'all':
            total -= 200
            $("label:last-child").text('$' + total);
                break;
            case 'js-frameworks':
            $("[name='express']").attr('disabled', false)
            $("[name='express']").parent().css({'color': 'black'})
            total -= 100
            $("label:last-child").text('$' + total);
                break;
            case 'express':
            $("[name='js-frameworks']").attr('disabled', false)
            $("[name='js-frameworks']").parent().css({'color': 'black'})
            total -= 100
            $("label:last-child").text('$' + total);
                break;
            case 'js-libs':
            $("[name='node']").attr('disabled', false)
            $("[name='node']").parent().css({'color': 'black'})
            total -= 100
            $("label:last-child").text('$' + total);
                break;
            case 'node':
            $("[name='js-libs']").attr('disabled', false)
            $("[name='js-libs']").parent().css({'color': 'black'})
            total -= 100
            $("label:last-child").text('$' + total);
                break;
            case 'build-tools':
            total -= 100
            $("label:last-child").text('$' + total);
                break;
            case 'npm':
            total -= 100
            $("label:last-child").text('$' + total);
                break;
            default:
                break;
            
        }
    }
    
})


function createTotal () {
    const parentActivities = $('.activities');
    parentActivities.append('<label>Total:</label>')
    parentActivities.append('<label></label>')
    
};

createTotal();
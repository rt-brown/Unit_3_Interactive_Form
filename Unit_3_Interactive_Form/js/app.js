//global variables
const jobRole = $('#title');
const colorOptions = $('#color').children();
const designOptions = $('#design');
const activityCheckbox = $(':checkbox');
let total = 0;
const paymentOptions = $('#payment');
const creditCardinfo = $('#credit-card');
const paymentInfo = $('fieldset').eq(3);
const payPaltext = $('#paypal');
const bitCointext = $('#bitcoin');



//set focus on page load
refreshFocus = () => {
    $('#name').focus();
    $('#other-title').hide()
    $('#color').val('select theme');
    //$('#colors-js-puns').hide()
    // if(designOptions.val() ===  'Select Theme'){
    //     $('#color').html('<option>Please select a T-shirt theme</option>');
    // }
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
$('#color').prepend('<option>Please select a T-shirt theme</option>');
$('#color').children().first().attr('value', 'select theme');
$('#design').children().first().attr('value', 'select design');
if(designOptions.val() ===  'select design'){
    $('#color').hide();
}
designOptions.on('change', function (){
    $('#colors-js-puns').show()
    $('#color').show();
    if(designOptions.val() ===  'select design'){
        $('#color').val('select theme');
        $('.Love_JS_Colors').hide();
        $('.JS_Pun_Colors').hide();
    }
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

// make activity checkboxes interactive on clicks
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

//working on payment section

paymentOptions.eq(1).attr('selected', true);
paymentInfo.addClass('payment');
$('.payment div').eq(4).attr('id', 'paypal');
$('.payment div').eq(5).attr('id', 'bitcoin');

paymentOptions.on('change', function () {
    if (paymentOptions.val() === 'credit card') {
        // $('#paypal').hide();
        // $('#bitcoin').hide();

    }
});
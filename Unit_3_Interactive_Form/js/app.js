//global variables
const jobRole = $('#title');
const colorOptions = $('#color').children();
const designOptions = $('#design');
const activityCheckbox = $(':checkbox');
let total = 0;
const paymentOptions = $('#payment').children();
const creditCardinfo = $('#credit-card');
const paymentSelection = $('#payment');
const payPaltext = $('#payment').next().next();
const bitCointext = payPaltext.next();
const submitButton = $('button');



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
payPaltext.hide();
bitCointext.hide();

paymentSelection.on('change', function () {
    if (paymentSelection.val() === 'credit card') {
        payPaltext.hide();
        bitCointext.hide();
        creditCardinfo.show();
    } else if (paymentSelection.val() === 'paypal') {
        creditCardinfo.hide();
        bitCointext.hide();
        payPaltext.show();
        } else if (paymentSelection.val() === 'bitcoin'){
        creditCardinfo.hide();
        payPaltext.hide();
        bitCointext.show();
    }
});

//form validation on submit handler
submitButton.on('click', function(){
    let validName = function () {
        const regex = /^[a-z ,.'-]+$/i;
        const nameInput = $('#name').val();
        return(regex.test(nameInput));
      }

    let validEmail = function (){
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const emailInput = $('#mail').val();
        return(regex.test(emailInput));
    }

    let validActivities = function () {
        if ($('input:checked').length >= 1) {
            return true
        } else {
            return false
        }
    }
    
    let validCreditnumber = function () {
        if (paymentSelection.val() != 'credit card') {
            return true
        } else if (paymentSelection.val() === 'credit card') {
            const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
            const cardNumberinput = $('#cc-num').val()
            return(regex.test(cardNumberinput));
        } 
    }

    let validZip = function () {
        if (paymentSelection.val() != 'credit card') {
            return true
        } else if (paymentSelection.val() === 'credit card') {
            const regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
            const zipInput = $('#zip').val()
            return(regex.test(zipInput));
        } 
    }

    let validCvv = function () {
        if (paymentSelection.val() != 'credit card') {
            return true
        } else if (paymentSelection.val() === 'credit card') {
            const regex = /^[0-9]{3,4}$/
            const cvvInput = $('#cvv').val()
            return(regex.test(cvvInput));
        } 
    }

    let checkInputs = function () {
        const outputs = [
            validName(),
            validEmail(),
            validActivities(),
            validCreditnumber(),
            validZip(),
            validCvv()
        ];
        const alerts = [
            'Please update your name',
            'Please input a valid email address',
            'Please select at least 1 activity',
            'Please input a valid credit card number',
            'Please input a valid zip code',
            'Please input a valid CVV number'
        ];
        function removeAlert() {
            $('.alerts').remove();
        }
        removeAlert();
        let testArrayvalue = outputs.every(testArray);
        function testArray(currentElement) {
             if(currentElement === true){
                 return true
             }else{
                 return false
             };
        }

        if(testArrayvalue === true){
            removeAlert();
            alert('Thanks for your submission!').delay(5000);
        }else {
        for (let index = 0; index < outputs.length; index++) {
            if (outputs[index] === false) {
                event.preventDefault();
                createAlert(alerts[index]);
            } 
        }
        }
        
        function createAlert (alert) {
            let alerts = $('button').after('<p>' + alert + '</p>');
            alerts.next().css({'color': 'maroon'}).addClass('alerts');
        }
       
       
    }
    checkInputs();
});



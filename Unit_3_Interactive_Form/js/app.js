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



//methods for initial load
refreshFocus = () => {
    $('#name').focus();
    $('#other-title').prop('placeholder', 'Your Job Role')
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
$('#color').children().first().attr('value', 'select_theme').addClass('select_theme');

$('#design').children().first().attr('value', 'select design');
if(designOptions.val() ===  'select design'){
    $('#color').hide();
}
designOptions.on('change', function (){
    $('#colors-js-puns').show()
    $('#color').show();
    if(designOptions.val() ===  'select design'){
       
        $('#color').val('select_theme');
        $('.Love_JS_Colors').hide();
        $('.JS_Pun_Colors').hide();
    }
 if (designOptions.val() ===  'js puns'){
     $('#color').val('cornflowerblue');
     $('.Love_JS_Colors').hide();
     $('.select_theme').hide();
     $('.JS_Pun_Colors').show();
 } else if(designOptions.val() === 'heart js'){
    $('#color').val('tomato'); 
    $('.JS_Pun_Colors').hide();
    $('.select_theme').hide();
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

//create total cost element
function createTotal () {
    const parentActivities = $('.activities');
    parentActivities.append('<label>Total:</label>')
    parentActivities.append('<label></label>')
    
};

createTotal();

//initial payment methods
paymentOptions.eq(1).attr('selected', true);
paymentOptions.eq(0).hide();
payPaltext.hide();
bitCointext.hide();

//conditionality on payment selection 
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
    //functions to return boolean against regex
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
    //function to check inputs
    let checkInputs = function () {
        //store booleans in array
        const outputs = [
            validName(),
            validEmail(),
            validActivities(),
            validCreditnumber(),
            validZip(),
            validCvv()
        ];
        //store properties of alerts in array
        const alerts = [
            {
                inputType: 'input',
                selector: $('#name'),
                message:'Please update your name'
            },
            {
                inputType: 'input',
                selector: $('#mail'),
                message: 'Please input a valid email address'
            },
            {
                inputType: 'checkbox',
                selector: $('.activities'),
                message: 'Please select at least 1 activity'
            },
            {
                inputType: 'input',
                selector: $('#cc-num'),
                message: 'Invalid credit card number'
            },
            {
                inputType: 'input',
                selector: $('#zip'),
                message:'Invalid zip code'
            },
            {
                inputType: 'input',
                selector: $('#cvv'),
                message: 'Invalid CVV'
            },
            
        ];
        let alertSelector = alert.selector;
        
        //function to remove alerts if checkInput == true
        function removeAlert(alert) {
            let inputType = alert.inputType;
            let alertSelector = alert.selector;
            alertSelector.removeAttr('placeholder').removeAttr('style');
            if (inputType === 'checkbox'){
                $(".activities p").remove();
            }
            //
        }
        //test to see if all ouput array elements are true. in case initial form submissions doesn't have errors no need to check for false values
        let testArrayvalue = outputs.every(testArray);
        function testArray(currentElement) {
             if(currentElement === true){
                 return true
             }else{
                 return false
             };
        }
        //start checking inputs. loops through arrays to find which ones are true and which are false
        if(testArrayvalue === true){
            alert('Thanks for your submission!');
            
        }else {
        for (let index = 0; index < outputs.length; index++) {
            if (outputs[index] === false) {
                event.preventDefault();
                createAlert(alerts[index]);
                
            } else if(outputs[index]=== true){
                removeAlert(alerts[index]);
                
            }
        }
        }
        //function that takes on the alert index as a param to build the alert messages depending on which is false. Includes the selector to add messages to proper element that is false
        function createAlert (alert) {
            let inputType = alert.inputType;
            let alertSelector = alert.selector;
            if (inputType === 'checkbox'){
                $(".activities p").remove();
                let alerts = alertSelector.prepend('<p>' + alert.message + '</p>');
                $('.activities').children().eq(0).css({"color": "#e60000"});
                
            }else{
            let alerts = alertSelector.attr("placeholder", alert.message);
            }
            alertSelector.css({"border-color": "red"});
            
        }
        
       
    }
    checkInputs();
});



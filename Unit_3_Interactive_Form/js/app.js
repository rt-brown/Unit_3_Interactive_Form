refreshFocus = () => {
    $('#name').focus();
    $('#other-title').hide()
};
refreshFocus();

const jobRole = $('#title');

jobRole.on('change', function (){
    if(jobRole.val() === 'other'){
        $('#other-title').show();
        }else {
        $('#other-title').hide()
}
});
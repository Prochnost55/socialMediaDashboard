$(document).ready(function(){
    var lightMode
    $('input[name="themeToggler"]').click(function(){
        lightMode = $('input[name="themeToggler"]:checked').length
        
        if(lightMode == 0){
            $('*.light').addClass('dark').removeClass('light')
        }else if(lightMode == 1){
           $('*.dark').addClass('light').removeClass('dark')
        }
    })
    
})
// var atLeastOneIsChecked = $('#checkArray:checkbox:checked').length > 0;
//constractor function
function validator(options){
    var formElement = document.querySelector(options.form);
    if(formElement){
       options.rules.forEach( function (rules){
        console.log(rules.selector);
       })
    }
}
//định nghĩa các rules
validator.isRequired = function (selector){
    return {
        selector: selector,
        test: function (){

        }
    }
}
validator.isEmail = function (selector){
    return {
        selector: selector,
        test: function (){

        }
    }
}
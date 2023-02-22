//constractor function
function validator(options){

    function validate(inputElement,rules){
         //lấy value của ô input:inputElement.value;
                //test function : rules.test;
                var errorMessage = rules.test(inputElement.value);
                //lấy ra thẻ cha của nó từ thẻ con:inputElement.parentElement,
                //lấy ra  đúng phần tử con của thẻ to mà mình muốn lấy:
                //inputElement.parentElement.querySelector('form-message');
                if(errorMessage){
                 errorElement.innerText = errorMessage;
                 errorElement.parentElement.classList.add('invalid');
                }else{
                 errorElement.innerText = " ";
                 errorElement.parentElement.classList.remove('invalid');
                }
    }
    var formElement = document.querySelector(options.form);
    var errorElement = inputElement.parentElement.querySelector('.form-message');
    if(formElement){
       options.rules.forEach( function (rules){
        var inputElement = formElement.querySelector(rules.selector);
        if(inputElement){
            inputElement.onblur = function(){
               validate(inputElement,rules);
            }
        }
       })
    }
}
//định nghĩa các rules
//nguyên tắc của các rules:
//1.khi có lỗi thì trả ra message lỗi
//2.khi hợp lệ thì clear lỗi
validator.isRequired = function (selector){
    return {
        selector: selector,
        test: function (value){
            return value.trim() ? undefined : "Vui lòng nhập trường này";
        }
    }
}
validator.isEmail = function (selector){
    return {
        selector: selector,
        test: function (value){

        }
    }
}
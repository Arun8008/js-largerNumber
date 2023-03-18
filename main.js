let form = document.querySelector('form');
form.addEventListener('submit',function(e){
	e.preventDefault();
let numb1=parseInt(document.querySelector("#number1").value);
let numb2=parseInt(document.querySelector("#number2").value);
let numb3=parseInt(document.querySelector("#number3").value);
let result = document.querySelector('#result');

    if((numb1>numb2)&& (numb1>numb3)){
        result.innerHTML=`${numb1} large Number`;
    }
    else if((numb2>numb3)&& (numb2>numb1)){
        result.innerHTML=`${numb2} large Number`;
    }
    else if((numb3>numb2)&& (numb3>numb1)){
        result.innerHTML=`${numb3} large Number`;
    }
    else{
        result.innerHTML="Enter The Number";
    }
});
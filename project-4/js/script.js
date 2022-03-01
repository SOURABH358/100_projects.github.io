const themes = document.querySelectorAll('.numbers p');
const display = document.querySelector('.display');
const store = document.querySelector('.store');
let num1;
let num2;
let operation;

themes.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        if(index === 0){
            document.body.classList.remove('theme1');
            document.body.classList.remove('theme2');
        }        
        else if(index === 1){
            document.body.className = 'theme1';
        }
        else{
            document.body.className = 'theme2';
        }
    });
});

const keys = document.querySelectorAll('.keys div');

keys.forEach(item=>{
    item.addEventListener('click',(e)=>{
        if(parseInt(e.target.id)>=0||parseInt(e.target.id)<=9||e.target.id==='decimal'){
            const text = display.value;
            display.value = parseInt(text)===0?e.target.innerHTML:text + e.target.innerHTML;
        }
        else if(e.target.id === 'reset'){
            display.value = '0';
        }
        else if(e.target.id === 'del'){
            display.value = display.value.slice(0,display.value.length-1);
            if(display.value.length===0){
                display.value = '0';
            }
        }
        else if(e.target.id==='add'||e.target.id === 'subtract'||e.target.id === 'divide'||e.target.id === 'multiply'){
            num1 = parseFloat(display.value);
            store.innerHTML = String(num1) + e.target.innerHTML;
            display.value = '0';
            operation = e.target.id;
        }
        else if(e.target.id === 'equal'){
            num2 = parseFloat(display.value);
            if(operation === 'add'){
                display.value = "" + (num1+num2);
            }
            else if(operation === 'subtract'){
                display.value = ""+ (num1-num2);
            }
            else if(operation === 'divide'){
                display.value = ''+ (num1/num2);
            }
            else if(operation === 'multiply'){
                display.value = ''+ (num1*num2);
            }
            store.innerHTML = '';
        }
    })
})
window.addEventListener('keypress',(e)=>{
    if(parseInt(e.key)>=0||parseInt(e.key)<=9||e.key==='.'){
        const text = display.value;
        display.value = parseInt(text)===0?e.key:text + e.key;
    }
    else if(e.key === 'backspace'){
        display.value = display.value.slice(0,display.value.length-1);
            if(display.value.length===0){
                display.value = '0';
            }
    }
    else if(e.key === '+'||e.key==='-'||e.key === '/' || e.key === '*'){
        num1 = parseFloat(display.value);
            store.innerHTML = String(num1) + e.key;
            display.value = '0';
            operation = e.key;
    }
    else if(e.key === 'Enter'){
        num2 = parseFloat(display.value);
            if(operation === '+'){
                display.value = "" + (num1+num2);
            }
            else if(operation === '-'){
                display.value = ""+ (num1-num2);
            }
            else if(operation === '/'){
                display.value = ''+ (num1/num2);
            }
            else if(operation === '*'){
                display.value = ''+ (num1*num2);
            }
            store.innerHTML = '';
    }
})
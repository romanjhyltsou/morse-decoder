const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let num;
    let count = 0;
    let str = '';
    let result = '';

    for(let i = 0; i < expr.length/10; i++){
        arr.push(expr.substr(count , 10));
        count += 10;
        num = arr[i].indexOf(1);
    }

    for(let j = 0; j < arr.length; j++){
        if(isNaN(parseInt(arr[j]))){
            arr2.push('**');
        }else{
            arr2.push(String(parseInt(arr[j])));
        }
    }

    console.log(arr2);

    for(let i = 0; i < arr2.length; i++){

        for(let j = 0; j < arr2[i].length; j++){
            str += arr2[i][j];
            if(str.length === 2){
                if(str === '10'){
                    arr3.push('.');
                }else if(str === '11'){
                    arr3.push('-');
                }else if(str === '**'){
                    arr3.push(' ');
                }
                str = '';
            }
        }
        
    }
    console.log(arr3);

    for(let i = 0; i < arr2.length; i++){
        arr4.push(arr3.splice(0, arr2[i].length / 2).join(''));
    }
    console.log(arr4);

    for(let key in arr4){
       if(MORSE_TABLE[arr4[key]] === undefined){
        result += ' ';
       }else{
        result += MORSE_TABLE[arr4[key]];
       }
        
    }
    return result;  

}

module.exports = {
    decode
};

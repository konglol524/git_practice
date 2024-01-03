
function randomize(ar){
    let idx = Math.floor(Math.random() * ar.length);
    return ar[idx];
}


let posi_num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let luck_level = ["very lucky", "lucky", "not so lucky", 
"haunted by misfortunes", "super lucky", "in danger", "having a stroke of bad luck"];

let luck_quote = ['“Everyone fails sometimes and life isn’t supposed to be fair, much less bend to your every whim.”',
'“You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.”',
'“The most important conversations you’ll ever have are the ones you’ll have with yourself.”',
'“You want to be uncommon amongst uncommon people. Period.”',
'“If you’re willing to suffer, and I mean suffer, your brain and body once connected together, can do anything.”',
'“When you think that you are done, you’re only 40% into what your body’s capable of doing. That’s just the limits that we put on ourselves.”',
' “I was the sum total of the obstacles I’d overcome.”',
]

let lot_num = '';
for(let i = 0; i < 6; i++){
    lot_num += randomize(posi_num);
}

console.log(`Your Thai lottery number: ${lot_num}.`);
console.log(`Today you are ${randomize(luck_level)}.`);
console.log(`Your lucky quote is: ${randomize(luck_quote)}.`);
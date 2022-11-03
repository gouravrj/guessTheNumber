const random = Math.floor((Math.random() * 100) + 1);
let gueses = []
// console.log(random)
function play(){

    let n = document.getElementById("numberInput").value;
    displayResult(n)
    displayHistory()
}
function displayResult(n)
{
    if(random==n)
    {
        document.getElementById("result").innerHTML = 'Awesome, You Guessed Right'
    }
    else if(n>random)
    {
        document.getElementById("result").innerHTML = 'Number is too High'
        gueses.push(n);


    }else{
        document.getElementById("result").innerHTML = 'Number is too Low'
        gueses.push(n);
    }
}
function displayHistory(){
    let dialog=''
    for(let i=gueses.length-1;i>=0;i--)
        dialog += '<ul> You Guessed '+gueses[i]+'</ul>'
    console.log(dialog)
    document.getElementById("history").innerHTML = dialog;
    
}
function yo(){
    console.log(gueses)
}
let random = Math.floor((Math.random()*100)+1)
console.log(random);
let history=[]


function reset(){
    random = Math.floor((Math.random()*100)+1)
    console.log(random);
    document.getElementById("result").innerHTML=''
    history = [];
    showHistory()
}


function play(){

    let n = document.getElementById("inputNumber").value
    showResult(n)
    showHistory()

}

function showResult(n){

    history.push(n)
    if(n==random)
        dialog = 'Awesome, You Guessed Right ....'
    else if(n>random)
        dialog = 'Too High'
    else
        dialog = 'Too Low'
    document.getElementById("result").innerHTML = dialog
}

function showHistory(){

    let dialog = ''
    for(let i=history.length-1;i>=0;i--)
        dialog+='<ul> You Guessed '+history[i]+'</ul>'
    document.getElementById("history").innerHTML = dialog
    
}
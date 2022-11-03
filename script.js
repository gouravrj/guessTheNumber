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
        dialog = '<div class="alert alert-info" role="alert">'+'Awesome, You Guessed Right ....'+'</div>'
    else if(n>random)
        dialog = '<div class="alert alert-danger" role="alert">'+'Too High'+'</div>'
    else
        dialog = '<div class="alert alert-danger" role="alert">'+'Too Low'+'</div>'
    document.getElementById("result").innerHTML = dialog
}

function showHistory(){

    let dialog = ''
    for(let i=history.length-1;i>=0;i--)
        dialog+= '<div class="alert alert-primary" role="alert">' +'You Guessed '+history[i]+'</div>'
    document.getElementById("history").innerHTML = dialog
    
}
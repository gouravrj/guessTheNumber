let n = Math.floor((Math.random()*100) + 1)
console.log(n);
var h=[]

function play(){
    let input = document.getElementById("user-input").value
    h.push(input);
    result(input)
    history();
}
function reset(){
    n = Math.floor((Math.random()*100) + 1);
    h = [];
    document.getElementById("result").innerHTML = "";
    history();
}

function result(input){
    var text=""
    if(input==n)
    {
        document.getElementById("result").innerHTML = `<div class="alert alert-primary" role="alert">Awesome, You Guessed Right !</div>`;
    }
    else if(input<n)
        document.getElementById("result").innerHTML = `<div class="alert alert-primary" role="alert">U Guessed Too Low</div>`
    else
        document.getElementById("result").innerHTML = `<div class="alert alert-primary" role="alert">U Guessed Too High</div>`

}

function history(){
    let text = ""
    for(let i=h.length-1;i>=0;i--)
        text+=`<li class="list-group-item list-group-item-secondary">You Guessed ${h[i]}</li>`
    document.getElementById("history").innerHTML = text;
}

function disp(val)
{
    document.getElementById("result").value+=val
}

function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

function clr()
{
    document.getElementById("result").value = ""
}

function del() {
    var number = document.getElementById("result");
    var remove = number.value;
    remove = remove.slice(0,remove.length-1);
    number.value= remove;
}

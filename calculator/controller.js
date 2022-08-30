let val;
function takeInput(x)
{
    document.getElementById('input').value += x;
}

function answer()
{
    var value = document.getElementById('input').value.toString();

    var ans = eval(value);
    val = document.getElementById('input').value += ` = ${ans}`;
}

function clear()
{    if(val)
    {
        document.getElementById('input').value = '';
    }
}
window.addEventListener('load',bindEvents);

function bindEvents(){
    document.getElementById('compute').addEventListener('click', doCalc);
}
function doCalc(){
    let basicSalary = document.getElementById('salary').value;
    salaryOperations.basicSalary = basicSalary;

    for(let key in salaryOperations){
        if(key == 'basicSalary')
        {
            continue;
        }
        document.getElementById('output').appendChild(createPTag(key, salaryOperations[key]()));
    }
}

function createPTag(key, val)
{
    const pTag = document.createElement('p');
    pTag.innerText = `${key} is ${val}`;

    return pTag;
    
}
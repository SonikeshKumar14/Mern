function compute()
{
    var basicSalary = parseInt(document.getElementById('salary').value);
    var hra = basicSalary *  0.50;
    var da = basicSalary * 0.20;
    var ta = basicSalary * 0.30;
    var ma = basicSalary * 0.40;
    var pf = basicSalary * 0.05;
    var gs = basicSalary + hra + da + ta;
    var ns = gs - pf;
    document.getElementById('Hra').innerText = hra;
    document.getElementById('Da').innerText = da;
    document.getElementById('Ta').innerText = ta;
    document.getElementById('Ma').innerText = ma;
    document.getElementById('Pf').innerText = pf;
    document.getElementById('Gs').innerText = gs;
    document.getElementById('Ns').innerText = ns;
    console.log('compute...');
} 
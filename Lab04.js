const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const table = document.querySelector('table');
table.addEventListener('click',swap);
function swap(){
    if(a.classList.contains('black'))
    {
        a.classList.remove('black');
        d.classList.remove('black');
        b.classList.remove('white');
        c.classList.remove('white');
        a.classList.add('white');
        d.classList.add('white');
        b.classList.add('black');
        c.classList.add('black');
    }
    else
    {
        a.classList.remove('white');
        d.classList.remove('white');
        b.classList.remove('black');
        c.classList.remove('black');
        a.classList.add('black');
        d.classList.add('black');
        b.classList.add('white');
        c.classList.add('white');
    }
}

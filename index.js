document.addEventListener('DOMContentLoaded', function (){

    const subhero1 = document.getElementById('subhero1')
    const subhero2 = document.getElementById('subhero2')
    const tarea = document.getElementById('tarea')

    function submitbtnfun(){
        if (tarea.value != '' ){
            subhero1.classList.add('disoff')
            subhero2.classList.remove('disoff')
        }

        else{
            alert('Please enter a comment before submitting')
        }
    }

    function closebtnfun(){
            subhero1.classList.remove('disoff')
            subhero2.classList.add('disoff')
    }

    document.getElementById('submitbtn').onclick = submitbtnfun
    document.getElementById('closebtn').onclick = closebtnfun
});
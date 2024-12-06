document.addEventListener('DOMContentLoaded', function(){
    var btn_add = document.getElementById('btn-add-local')
    var window_add = document.getElementById('main-add-local')
    var btn_close = document.getElementById('close-window-add')

    btn_add.onclick = function(){
        window_add.style.display = 'block';
    }

    btn_close.onclick = function(){
        window_add.style.display = 'none';
    }

    let btn_red = document.querySelectorAll('#btn-red-local')
    let window_red = document.querySelector('#main-red-local')
    let btn_close_red = document.querySelectorAll('#btn-close-red')
    console.log(btn_red)

    for(let i = 0; i< btn_red.length; i++)
    {
        console.log(btn_red[i])
        btn_red[i].addEventListener('click', function(){
            window_red.style.display = 'block';
        })
    }

    btn_close_red.onclick = function(){
        window_red.style.display = 'none';
    }
})

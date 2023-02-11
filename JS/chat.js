// window.onload = function() {
//     let preloader = document.getElementById('preloader');
//     preloader.classList.add('hide-preloader');
//     setInterval(function() {
//         preloader.classList.add('preloader-hidden');
//     }, 1000);
// }
//
// $(document).ready(function() {
//     $('#preloader').fadeOut(400);
// });


let socket = new WebSocket("wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self");

socket.onopen = function (e) {
    console.log("[open] Соединение установлено");
    console.log("Отправляем данные на сервер");
    socket.send('qeijfpewjpigjpewig');
};

socket.onmessage = function (event) {
    let div = document.querySelector('#smsdiv')
    let creat = document.createElement('p')
    let input = document.querySelector('.mainuser-form_input').value
    if(true){
        // socket.send(input)
        creat.innerHTML += event.data
    }

    console.log(div);
    // console.log(`[message] Данные получены с сервера: ${div += creat}`);

    div.appendChild(creat)
};



function massage() {
    document.getElementById('massageuser').addEventListener("click", (e) => {
        document.getElementById('mainuser-form').classList.add('mainuser-form_show')
    })

    document.getElementById('mainuser-from_closed').addEventListener("click", (e) =>{

        document.getElementById('mainuser-form').classList.remove('mainuser-form_show')
    })

    document.getElementById('mainuser-form').addEventListener("submit", (e) => {
        e.preventDefault()

    })









}

function createUser() {
    document.getElementById('usermore').addEventListener("click", (e) => {
        document.getElementById('create_user').classList.add('creat_user-show')
    })
    document.getElementById('creat_user-closed').addEventListener("click", (e) => {
        document.getElementById('create_user').classList.remove("creat_user-show" )

    })

    document.getElementById('create_user').addEventListener("submit", (e) => {
        e.preventDefault()
    })


}


 function push() {
    let div = document.querySelector('#smsdiv')
    let creat = document.createElement('p')
    let input = document.querySelector('.mainuser-form_input').value
    if(true){
        socket.send(input)

        div.innerHTML += creat
    }


     div.appendChild(creat)

 }











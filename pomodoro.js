
let session_time = 25;
let break_time = 5;
let modo = "";
let iniciar_status;
let intervalo;

// demonstrativo
let seconds = 0;

//real

let min = session_time;
let seconds_real = 60;

// Evento do Temporizador
const _temp_min = window.document.querySelector("[id='min']");

const _temp_seg = window.document.querySelector("[id='seg']");

// Valores iniciais do timer
_temp_min.textContent = `${session_time}`;
_temp_seg.textContent = `${seconds}0`;

// valores do tempo

const _session = window.document.querySelector("[name='session']");

const _break = window.document.querySelector("[name='break']");

// Botão Start
const btn_start = document.querySelector(".start");

btn_start.addEventListener("click", iniciar)

// Botão Reset
const btn_reset = document.querySelector(".reset");

btn_reset.addEventListener("click", resetar)

// botão de Sessão

const more_time_session_1 = window.document.querySelector('button[name="more-time"][value="session_1"]');

more_time_session_1.addEventListener('click', mais);

const minus_time_session_2 = window.document.querySelector('button[name="minus-time"][value="session_2"]');

minus_time_session_2.addEventListener('click', menos);

// botão de Break

const more_time_break_1 = window.document.querySelector('button[name="more-time"][value="break_1"]');

more_time_break_1.addEventListener('click', mais);

const minus_time_break_2 = window.document.querySelector('button[name="minus-time"][value="break_2"]');

minus_time_break_2.addEventListener('click', menos);

// Funções

function mais(e){

    const botaoClicado = e.target;

    if (botaoClicado.value == "session_1"){
        session_time++;
        _session.textContent = session_time;

        modo = "session";
    }
    else if (botaoClicado.value == "break_1"){
        break_time++;
        _break.textContent = break_time;
        let min = break_time;

        modo = "break";
    }

    tempo();
}

function menos(e){
    // e = evento do objeto (addEventListener -> adicionar um evento(e))
    const botaoClicado = e.target;

    if (botaoClicado.value == "session_2" && session_time > 1){
        session_time--;
        _session.textContent = session_time;

        modo = "session";
    }
    else if (botaoClicado.value == "break_2" && break_time > 1){
        break_time--;
        _break.textContent = break_time;
        let min = break_time;

        modo = "break";
    }

    tempo();
}

function iniciar(){
    btn_start.classList.toggle("iniciar")

    btn_reset.classList.remove("resetar")

    if (btn_start.classList.contains("iniciar")) {
        btn_start.textContent = "Pause"

        iniciar_tempo();
    } else {
        btn_start.textContent = "Start"

        pausar_tempo();
    }

    /* 
    
    NÃO tem a classe ".iniciar" : ele adiciona (.iniciar);

    JÁ tem a classe ".iniciar" : ele remove (.iniciar);
    
    */
}

function resetar(){
    btn_reset.classList.toggle("resetar")

    btn_start.classList.remove("iniciar")
    btn_start.textContent = "Start"

    resetar_tempo();

    intervalo = setInterval(() => {
        btn_reset.classList.remove("resetar")
        return;
    }, 2000);
    /* 
    
    NÃO tem a classe ".resetar" : ele adiciona (.resetar);

    JÁ tem a classe ".resetar" : ele remove (.resetar);
    
    */
}

function tempo(){

    if (modo === "session"){
        _temp_min.textContent = session_time;
        min = session_time;
    }

    else if (modo === "break"){
        _temp_min.textContent = break_time;
        min = break_time;
    }

    _temp_seg.textContent = `${seconds}0`;
    seconds_real = 60;
}

function iniciar_tempo(){

        clearInterval(intervalo); // garante que não duplicará os timers cada vez que executar e para o contador

        intervalo = setInterval(() => {

            seconds_real--;

            if (seconds_real == 59){
                min--;
            }

            if (seconds_real < 0){
                seconds_real = 59;
                min--;
            }

            if (min < 0){
                clearInterval(intervalo);
                btn_start.classList.remove("iniciar")
                btn_start.textContent = "Start"
                return;
            }

            _temp_min.textContent = min;

            if (seconds_real < 10){
                _temp_seg.textContent = `0` + seconds_real;
            }
            else{
                _temp_seg.textContent = seconds_real;
            }

        }, 1000);
}

function pausar_tempo(){
    clearInterval(intervalo);
    _temp_min.textContent = min;
    _temp_seg.textContent = seconds_real;
}

function resetar_tempo(){
    clearInterval(intervalo);
    if (modo === "session"){
        _temp_min.textContent = session_time;
        min = session_time;
    }

    else if (modo === "break"){
        _temp_min.textContent = break_time;
        min = break_time;
    }

    _temp_seg.textContent = `${seconds}0`;
    seconds_real = 60;
}

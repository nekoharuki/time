const button = document.querySelector('#put');
const result = document.querySelector('#result');

function calculation() {
    const go_to_bed = document.querySelector('#go_to_bed').value;
    const get_up = document.querySelector('#get_up').value;

    const step = new Date(`2030-12-12T${go_to_bed}`);
    const goal = new Date(`2030-12-12T${get_up}`);
    let time = (goal - step) / (1000 * 60 * 60); // 分ではなく時間で計算する

    if (time < 0) {
        time = time + 24;
    }

    if(time<6){
        result.textContent=`あなたの睡眠時間は${time.toFixed(2)}時間です.もう少し寝ましょう`;
    }
    else if(time>8){
        result.textContent=`あなたの睡眠時間は${time.toFixed(2)}時間です.よく寝れていますね`;
    }
    else{
    result.textContent = `あなたの睡眠時間は${time.toFixed(2)}時間です`;
}
}

button.addEventListener('click', calculation);

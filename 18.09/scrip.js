let marka = document.getElementById("Marka");
let model = document.getElementById("Model");
let markaS = ['Bmw', 'Mercedes', 'Audi'];
let modelS = [
    ['M3', 'M4', 'M5', 'M8'],
    ['E63S', 'CLS63', 'GT63S', 'MAYBACH'],
    ['Q7', 'A6', 'RS3', 'RS7']
]
let data = `<option value="">Markani secin</option>`
for (let i = 0; i < markaS.length; i++) {
    data += `<option value="${i}">${markaS[i]}</option>`

}
marka.innerHTML = data;
function Secim() {
    let val = marka.value
    let data = `<option value="">Modeli secin</option>`
    for (let i = 0; i < modelS[val].length; i++) {
        data += `<option value="${i}">${modelS[val][i]}</option>`;
    }
    model.innerHTML = data;
}

let pictures = [
    ['img src="img/m3.jpg"', 'img/m4.jpg', 'img/m5.jpg', 'img/m8.jpg'],
    ['img/e63s.jpg', 'img/cls63.jpg', 'img/gt63', 'img/maybach'],
    ['img/q7.jpg', 'img/a6.jpg', 'img/rs3.jpg', 'img/rs7.jpg']
]


let first = marka.value;
let second = model.value;

function Shekil() {
    let show = document.getElementById('show');
    let text = document.getElementById('text');
    show.innerHTML = `img src="img/m3.jpg"`
    text.innerHTML = `Siz ${markaS[first]}-nin ${modelS[first][second]} modelini secdiniz.`;
    let data = `<option value="">Markani secin</option>`
    for (let i = 0; i < markaS[first].length; i++) {
        data += `<option value="${i}">${markaS[second][i]}</option>`;
        console.log(data);
    }
    marka.innerHTML = data;

}


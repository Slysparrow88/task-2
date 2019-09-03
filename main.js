var addText = document.querySelector('#create');

var removeText = document.querySelector('#delete');

var nameText = document.querySelector('#text');

var result = document.querySelector('#result');

var andPro = '';

addText.onclick = function () {

    andPro = andPro + nameText.value + '<br>';

    result.innerHTML = andPro;

    nameText.value = '';
}

removeText.onclick = function () {

    result.innerHTML = '';
}
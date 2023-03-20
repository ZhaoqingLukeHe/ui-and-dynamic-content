let ui = document.getElementById('userinput');

let ab = document.getElementById('addbutton');

let sl = document.getElementById('shoppinglist');

let fb = document.getElementById('feedback');

function addItem() {
    let newItem = document.createElement('li');
    if (ui.value) {
        newItem.textContent = ui.value;
        sl.appendChild(newItem);
        fb.textContent = '';
        ui.textContent = '';
        ui.focus();
    } else {
        fb.textContent = 'Nothing entered.';
    }
}

ab.addEventListener('click', addItem);

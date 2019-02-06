'use strict';


let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
if (!indexedDB) {
    window.alert('Your browser dont support the stable version of IndexedDB.');
}

// window.indexedDB.deleteDatabase('TodoListDatabase');


let main = document.getElementById('main');
let form = document.getElementById('form');
let itemName = document.getElementById('item_name');
let itemSave = document.getElementById('item_save');
let removeItemSaveAdd;
let count = 4;
let arr = [];
let obj = {
    tdID: 'value',
    name: 'value'
};

let defItem = document.querySelectorAll('.default');
for (let i = 0; i < defItem.length; i++) {
    defItem[i].addEventListener('click', () => {
        if (defItem[i].checked) {
            defItem[i].nextElementSibling.style.textDecoration = 'line-through';
        } else {
            defItem[i].nextElementSibling.style.textDecoration = 'none';
        }
    });
}

let addItem = document.getElementById('add');
addItem.addEventListener('click', () => {
    itemName.value = '';
    main.style.opacity = '0';
    main.style.transition = 'opacity 0.1s';
    form.style.display = 'block';
    itemSave.addEventListener('click', removeItemSaveAdd = (e) => {
        e.preventDefault();
        getInfoFromForm();
        text(arr);
        form.style.display = 'none';
        e.currentTarget.removeEventListener(e.type, removeItemSaveAdd);
        main.style.opacity = '1';
        main.style.transition = 'opacity 0.1s';
    });
});

let getInfoFromForm = () => {
    let itemName = document.getElementById('item_name').value;
    obj.tdID = count++;
    obj.name = itemName;
    arr.push(obj);
    OpenAddDB(obj);
};

let text = (array) => {
    for (let i = array.length - 1; i < array.length; i++) {
        let outer = document.createElement('div');
        outer.classList.add('outer');
        main.insertBefore(outer, main.lastElementChild);
        let inpCheckItem = document.createElement('input');
        inpCheckItem.setAttribute('type', 'checkbox');
        outer.appendChild(inpCheckItem);
        inpCheckItem.addEventListener('click', () => {
            if (inpCheckItem.checked) {
                inpCheckItem.nextElementSibling.style.textDecoration = 'line-through';
                OpenDeleteDB(inpCheckItemLabel.innerHTML);
            } else {
                inpCheckItem.nextElementSibling.style.textDecoration = 'none';
                let obj = {tdID: count++, name: inpCheckItemLabel.innerHTML};
                OpenAddDB(obj);
            }
        });
        let inpCheckItemLabel = document.createElement('label');
        inpCheckItemLabel.innerHTML = array[i].name;
        outer.appendChild(inpCheckItemLabel);
        inpCheckItem.id = 'inp_item ' + count;
        inpCheckItemLabel.setAttribute('for', inpCheckItem.id);
    }
};


//save data

const dbName = 'TodoListDatabase';
let db;

let OpenGetDB = () => {
    // console.log('Open get DB...');
    let request = indexedDB.open(dbName, 1);

    request.onerror = (error) => {
        alert('There was an error in Open get DB: ' + error);
    };
    request.onsuccess = (e) => {
        // console.log('success to open get DB: ' + dbName);
        db = e.currentTarget.result;
        getData();
    };
    request.onupgradeneeded = (e) => {
        e.currentTarget.result.createObjectStore('TodoStore', {keyPath: 'name'});
    };
};

let OpenAddDB = (arg) => {
    // console.log('Open add DB...');
    let request = indexedDB.open(dbName, 1);

    request.onerror = (error) => {
        alert('There was an error in Open add DB: ' + error);
    };
    request.onsuccess = (e) => {
        // console.log('success to open add DB: ' + dbName);
        db = e.currentTarget.result;
        addData(arg);
    };
    request.onupgradeneeded = (e) => {
        e.currentTarget.result.createObjectStore('TodoStore', {keyPath: 'name'});
    };
};

let OpenDeleteDB = (arg) => {
    // console.log('Open delete DB...');
    let request = indexedDB.open(dbName, 1);

    request.onerror = (error) => {
        alert('There was an error in Open delete DB: ' + error);
    };
    request.onsuccess = (e) => {
        // console.log('success to open delete DB: ' + dbName);
        db = e.currentTarget.result;
        deleteData(arg);
    };
    request.onupgradeneeded = (e) => {
        e.currentTarget.result.createObjectStore('TodoStore', {keyPath: 'name'});
    };
};

let addData = (arg) => {
    let transaction = db.transaction(['TodoStore'], 'readwrite');

    transaction.oncomplete = (e) => {
        console.log('transaction addData complete');
    };
    transaction.onerror = (error) => {
        alert('There was an error in addData: ' + error + ' Probably You cant add data because its already exist in storage.');
    };

    let objectStore = transaction.objectStore('TodoStore');

    let objectStoreRequest = objectStore.add(arg);

    objectStoreRequest.onsuccess = (e) => {
        console.log('request addData success');
    };
};
let getData = () => {
    let transaction = db.transaction(['TodoStore'], 'readwrite');

    transaction.oncomplete = (e) => {
        console.log('transaction getData complete');
    };
    transaction.onerror = (error) => {
        alert('There was an error in getData: ' + error);
    };

    let objectStore = transaction.objectStore('TodoStore');

    objectStore.openCursor().onsuccess = (e) => {
        console.log('request getData success');
        let cursor = e.target.result;
        if (cursor) {
            let outer = document.createElement('div');
            outer.classList.add('outer');
            main.insertBefore(outer, main.lastElementChild);
            let inpCheckItem = document.createElement('input');
            inpCheckItem.setAttribute('type', 'checkbox');
            outer.appendChild(inpCheckItem);
            let inpCheckItemLabel = document.createElement('label');
            inpCheckItemLabel.innerHTML = cursor.value.name;
            outer.appendChild(inpCheckItemLabel);
            inpCheckItem.addEventListener('click', () => {
                if (inpCheckItem.checked) {
                    inpCheckItem.nextElementSibling.style.textDecoration = 'line-through';
                    OpenDeleteDB(inpCheckItemLabel.innerHTML);
                } else {
                    inpCheckItem.nextElementSibling.style.textDecoration = 'none';
                    let obj = {tdID: count++, name: inpCheckItemLabel.innerHTML};
                    OpenAddDB(obj);
                }
            });
            inpCheckItem.id = 'inp_item' + count++;
            inpCheckItemLabel.setAttribute('for', inpCheckItem.id);
            cursor.continue();
        }
    }
};

let deleteData = (arg) => {
    let transaction = db.transaction(['TodoStore'], 'readwrite');

    transaction.oncomplete = (e) => {
        console.log('transaction deleteData complete');
    };
    transaction.onerror = (error) => {
        alert('There was an error in deleteData: ' + error);
    };

    let objectStore = transaction.objectStore('TodoStore');

    let objectStoreRequest = objectStore.delete(arg);

    objectStoreRequest.onsuccess = (e) => {
        console.log('request deleteData success');
    };
};

OpenGetDB();
'use strict';


fetch('./data.json')
    .then(function(result) {
        return result.json()
    })
    .then(function(response) {
        return text(response);
    });

let main = document.getElementById('main');
let table = document.getElementById('table');
let form = document.getElementById('form');
let orderSave = document.getElementById('order_save');
let count = 1;
let removeOrderSaveAdd, removeOrderSaveEdit;
let arr = [];
let obj = {
    id: 'value',
    name: 'value',
    created_date: 'value',
    description: 'value'
};
let text = (array) => {
    for (let i = 0; i < array.length; i++) {
        let trTable = document.createElement('tr');
        trTable.id = count++;
        table.appendChild(trTable);
        let tdTableId = document.createElement('td');
        tdTableId.id = 'id' + trTable.id;
        tdTableId.innerHTML = trTable.id;
        trTable.appendChild(tdTableId);
        let tdTableName = document.createElement('td');
        tdTableName.id = 'name' + trTable.id;
        tdTableName.innerHTML = array[i].name;
        trTable.appendChild(tdTableName);
        let tdTableDate = document.createElement('td');
        tdTableDate.id = 'date' + trTable.id;
        tdTableDate.innerHTML = array[i].created_date;
        trTable.appendChild(tdTableDate);
        let tdTableDescript = document.createElement('td');
        tdTableDescript.id = 'description' + trTable.id;
        tdTableDescript.innerHTML = array[i].description;
        trTable.appendChild(tdTableDescript);
        let tdTableControl = document.createElement('td');
        tdTableControl.id = 'control' + trTable.id;
        trTable.appendChild(tdTableControl);
        let control = document.getElementById('control' + trTable.id);
        let butEdit = document.createElement('button');
        butEdit.id = trTable.id;
        butEdit.innerHTML = 'edit';
        control.appendChild(butEdit);
        butEdit.addEventListener('click', () => {
            let nameThis = document.getElementById('name' + butEdit.id).innerHTML;
            let descriptThis = document.getElementById('description' + butEdit.id).innerHTML;
            let inputName = document.getElementById('order_name');
            inputName.value = nameThis;
            let inputDescript = document.getElementById('order_description');
            inputDescript.value = descriptThis;
            main.style.opacity = '0';
            main.style.transition = 'opacity 0.1s';
            form.style.display = 'block';
            orderSave.addEventListener('click', removeOrderSaveEdit = (e) => {
                e.preventDefault();
                tdTableName.innerHTML = document.getElementById('order_name').value;
                tdTableDate.innerHTML = new Date().toUTCString();
                tdTableDescript.innerHTML = document.getElementById('order_description').value;
                form.style.display = 'none';
                e.currentTarget.removeEventListener(e.type, removeOrderSaveEdit);
                main.style.opacity = '1';
                main.style.transition = 'opacity 0.1s';
            })
        });
        let butDelete = document.createElement('button');
        butDelete.id = trTable.id;
        butDelete.innerHTML = 'delete';
        control.appendChild(butDelete);
        butDelete.addEventListener('click', () => {
            let butThis = document.getElementById(butDelete.id);
            butThis.remove();
        });
    }
    return arr = [];
};
let addOrder = document.getElementById('add');
addOrder.addEventListener('click', () => {
    main.style.opacity = '0';
    main.style.transition = 'opacity 0.1s';
    form.style.display = 'block';
    orderSave.addEventListener('click', removeOrderSaveAdd = (e) => {
        e.preventDefault();
        getInfoFromForm();
        text(arr);
        form.style.display = 'none';
        e.currentTarget.removeEventListener(e.type, removeOrderSaveAdd);
        main.style.opacity = '1';
        main.style.transition = 'opacity 0.1s';
    });
});
let getInfoFromForm = () => {
    let orderName = document.getElementById('order_name').value;
    let orderDescript = document.getElementById('order_description').value;
    obj.id = '';
    obj.name = orderName;
    obj.created_date = new Date().toUTCString();
    obj.description = orderDescript;
    arr.push(obj);
};
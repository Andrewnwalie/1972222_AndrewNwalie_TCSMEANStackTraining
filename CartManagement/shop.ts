class items {

    constructor(public name: string, public price: number, public amount = 0) {

    }
}
var obj = [];
var i = 0, i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, total = 0;
let obj1 = new items("Laptop", 1000);
let obj2 = new items("Phone", 500);
let obj3 = new items("Shirt", 50);
let obj4 = new items("Backpack", 75);
let obj5 = new items("Shoe", 200);
let obj6 = new items("Bottle", 30);
let obj7 = new items("keyboard", 300);

function store() {
    sessionStorage.setItem("add" + i, JSON.stringify(obj));
    i++;
    document.getElementById('csize').innerHTML = "Cart: " + i;
}

function saveprice() {
    sessionStorage.setItem("sum", JSON.stringify(total));
}

function add(buttonName: string) {
    if (buttonName == 'b1') {
        i1++;
        obj1.amount = i1;
        obj.push(obj1);
        total = total + obj1.price;
    }
    if (buttonName == 'b2') {
        i2++;
        obj2.amount = i2;
        obj.push(obj2)
        total = total + obj2.price;
    }
    if (buttonName == 'b3') {
        i3++;
        obj3.amount = i3;
        obj.push(obj3);
        total = total + obj3.price;
    }
    if (buttonName == 'b4') {
        i4++;
        obj4.amount = i4;
        obj.push(obj4);
        total = total + obj4.price;
    }
    if (buttonName == 'b5') {
        i5++;
        obj5.amount = i5;
        obj.push(obj5);
        total = total + obj5.price;
    }
    if (buttonName == 'b6') {
        i6++;
        obj6.amount = i6;
        obj.push(obj6)
        total = total + obj6.price;
    }
    if (buttonName == 'b7') {
        i7++;
        obj7.amount = i7;
        obj.push(obj7)
        total = total + obj7.price;
    }


    store();
    obj = [];
}

function disp() {

    let temp = document.getElementById('list');
    total = parseInt(JSON.parse(sessionStorage.getItem('sum')));
    sessionStorage.removeItem('sum');
    i = sessionStorage.length;
    if (sessionStorage.length > 1) {
        for (var count = 0; count < i; count++) {
            let newNode = document.createElement('div');
            newNode.className = 'row';
            let newNode2 = document.createElement('div');
            newNode2.className = 'col-2';
            newNode2.style.marginLeft = "80px";
            newNode2.style.padding = "10px";
            newNode2.style.padding = "10px";
            let newNode3 = document.createElement('div');
            newNode3.className = 'col-2';
            newNode3.style.padding = "10px";
            let newNode4 = document.createElement('div');
            newNode4.className = 'col-2';
            newNode4.style.padding = "10px";

            let info = JSON.parse(sessionStorage.getItem('add' + count));
            console.log(info[0].name);
            newNode2.innerHTML = info[0].name;
            newNode3.innerHTML = info[0].price;
            newNode4.innerHTML = info[0].amount;
            newNode.appendChild(newNode2);
            newNode.appendChild(newNode3);
            newNode.appendChild(newNode4);
            temp.prepend(newNode);


        }
    }
    let totalNode = document.getElementById('list');
    let totalNode1 = document.createElement('div');
    let totalNode2 = document.createElement('div');
    let totalNode3 = document.createElement('div');
    totalNode1.className = 'row';
    totalNode2.className = 'col-10'
    totalNode3.className = 'col'
    totalNode2.innerHTML = "Total"
    totalNode2.style.marginLeft = "90px";
    var temp2 = total;
    var temp3 = temp2.toString();
    totalNode3.innerHTML = temp3;
    totalNode1.appendChild(totalNode2);
    totalNode1.appendChild(totalNode3);
    totalNode.appendChild(totalNode1);
    sessionStorage.setItem("sum", JSON.stringify(total));
}

function startpage() {
    i = sessionStorage.length - 1;
    if (i < 0)
        i++;
    if (sessionStorage.getItem('sum') != null) {
        total = parseInt(JSON.parse(sessionStorage.getItem('sum')));
        sessionStorage.removeItem('sum');
    }
    document.getElementById('csize').innerHTML = "Cart:  " + i;
}



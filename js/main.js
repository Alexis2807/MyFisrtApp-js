//alert();

let taReview = document.getElementById('taReview');
let radiousLT = document.getElementById('radiousLT');
let inputLT = document.getElementById('inputLT');
let inputLB = document.getElementById('inputLB');
let inputRB = document.getElementById('inputRB');
let inputRT = document.getElementById('inputRT');
let allRadious = document.getElementById('allRadious');
let widthBorder = document.getElementById('widthBorder');
let border1 = document.getElementById('border1');
let borderDotted = document.getElementById('borderDotted');
let borderColor = document.getElementById('borderColor');
let borderDashed = document.getElementById('borderDashed');
let borderDouble = document.getElementById('borderDouble');
let borderGroove = document.getElementById('borderGroove');
let borderRidge = document.getElementById('borderRidge');
let borderInset = document.getElementById('borderInset');
let borderOutset = document.getElementById('borderOutset');
let borderHidden = document.getElementById('borderHidden');
let borderNone = document.getElementById('borderNone');
let alphaBorder = document.getElementById('alphaBorder');
let all = document.getElementById('all')
let top = document.getElementById('top')
let ridge = document.getElementById('ridge')
let bottom = document.getElementById('bottom')
let left = document.getElementById('left')

radiousLT.oninput = function (e) {
    inputLT.value = radiousLT.value;

    if (allRadious.checked) {
        taReview.style.borderRadius = radiousLT.value + 'px';
        inputLB.value = radiousLT.value;
        inputRB.value = radiousLT.value;
        inputRT.value = radiousLT.value;
    }

    else {
        taReview.style.borderTopLeftRadius = radiousLT.value + 'px';
    }

};

allRadious.oninput = function (e) {
    if (!allRadious.checked) {
        taReview.style.borderRadius = '0px 0px 0px';
        inputLB.value = 0;
        inputRB.value = 0;
        inputRT.value = 0;
    }
};

widthBorder.oninput = function (e) {
    taReview.style.borderWidth = widthBorder.value + 'px';
};

border1.onclick = function (e) {
    taReview.style.borderWidth = '1px';
    widthBorder.value = 1;
};

borderDotted.onclick = function (e) {
    taReview.style.borderStyle = 'dotted';
};

borderDashed.onclick = function (e) {
    taReview.style.borderStyle = 'dashed';
};

borderDouble.onclick = function (e) {
    taReview.style.borderStyle = 'double';
};

borderGroove.onclick = function (e) {
    taReview.style.borderStyle = 'groove';
};

borderRidge.onclick = function (e) {
    taReview.style.borderStyle = 'ridge';
};

borderInset.onclick = function (e) {
    taReview.style.borderStyle = 'inset';
};

borderOutset.onclick = function (e) {
    taReview.style.borderStyle = 'ouset';
};

borderHidden.onclick = function (e) {
    taReview.style.borderStyle = 'hidden';
};

borderNone.onclick = function (e) {
    taReview.style.borderStyle = 'none';
};

borderColor.oninput = function (e) {
    taReview.style.borderColor = borderColor.value;
};

alphaBorder.oninput = function (e) {
    taReview.style.opacity = alphaBorder.value / 100;

    /* color.value + (transparencia.value.toString(16).toUpperCase()); */

};

all.onclick = function (e) {
    taReview.style.borderStyle = 'border: 4px solid #1C6EA4';
};

top.onclick = function (e) {
    taReview.style.borderStyle = 'border-top: 4px solid #1C6EA4';
};

ridge.onclick = function (e) {
    taReview.style.borderStyle = 'border-right: 4px solid #1C6EA4';
};

bottom.onclick = function (e) {
    taReview.style.borderStyle = 'border-bottom: 4px solid #1C6EA4';
};

left.onclick = function (e) {
    taReview.style.borderStyle = 'border-left: 4px solid #1C6EA4';
};




/* radiousLT.addEventListener('input', function (e) {

    taReview.style.borderTopLeftRadius = radiousLT.value;
}); */

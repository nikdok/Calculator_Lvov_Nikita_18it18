function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

function sqrt(num) {
    var num = document.form.textview.value;
    document.form.textview.value = Math.sqrt(num);
}

function sin(num) {
    var num = document.form.textview.value;
    document.form.textview.value = Math.sin(num);
}

function cos(num) {
    var num = document.form.textview.value;
    document.form.textview.value = Math.cos(num);
}

function tan(num) {
    var num = document.form.textview.value;
    document.form.textview.value = Math.tan(num);
}

function sqr(num) {
    var num = document.form.textview.value;
    document.form.textview.value = Math.pow(num, 2);
}
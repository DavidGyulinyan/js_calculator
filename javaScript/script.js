function insert(num) {
    document.form.textveiw.value = document.form.textveiw.value + num;
}

function clean() {
    document.form.textveiw.value = "";
}

function back() {
    var exp = document.form.textveiw.value;
    document.form.textveiw.value = exp.substring(0, exp.length-1);
}

function equal() {
    var exp = document.form.textveiw.value;
    if(exp) {
        document.form.textveiw.value = eval(exp);
    }
}
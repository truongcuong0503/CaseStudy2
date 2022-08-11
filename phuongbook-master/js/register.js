
function checkName() {
    let regxp = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
    let yourName = document.getElementById('name').value;
    if(regxp.test(yourName)) {
        return true;
    } else {
        return false;
    }
}

function checkPhone() {
    let regxp = /^(0[3|5|7|8|9][0-9]{8}|1[8|9]00[0-9]{4})$/;
    let yourPhone = document.getElementById('phone').value;
    if(regxp.test(yourPhone)) {
        return true;
    } else {
        return false;
    }
}

function checkEmail() {
    let regxp = /^(0[3|5|7|8|9][0-9]{8}|1[8|9]00[0-9]{4})$/;
    let yourEmail = document.getElementById('email').value;
    if(regxp.test(yourEmail)) {
        return true;
    } else {
        return false;
    }
}

checkName()
checkPhone()
checkEmail() 
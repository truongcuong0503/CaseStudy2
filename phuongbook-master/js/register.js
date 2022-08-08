let yourName = document.getElementById('name').value;
let yourPhone = document.getElementById("phone")
let yourEmail = document.getElementById('email').value;
let yourAddress = document.getElementById('address').value;




function checkName(name) {
    let regxp = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
    if(regxp.test(name)) {
        return true;
    } else {
        return false;
    }
}
checkName(yourName)


function checkPhone() {
    let regxp = /^(0[3|5|7|8|9][0-9]{8}|1[8|9]00[0-9]{4})$/;
    let yourPhone = document.getElementById('phone').value;
    if(regxp.test(yourPhone)) {
        return true;
    } else {
        return false;
    }
}
checkPhone()
function signin() {
    window.location = "registration.html";
}

function signup() {
    window.location = "login.html";
}

function back1() {
    window.location = "index.html";
}




function submit() {
    var inputdata2 = document.getElementById('date').value;
    var inputdata = document.getElementById('fname').value;

    var hai = '<div class="row" id="data' + counter + '" style="margin-bottom:15px;">' +
        '<div class="col-md-3 col-sm-6 col-xs-5">' +
        '<input type="text" class="form-control" value="' + inputdata + '" disabled>' + '</div>' +
        '<div class="col-md-3 col-sm-6 col-xs-5">' +
        '<input type="text" class="form-control" value="' + inputdata2 + '" disabled>' + '</div>' +
        '<div class="col-md-2 col-sm-4 col-xs-4">' +
        '<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit' + counter + '">Edit</button>' +
        '</div>' +
        '<div class="col-md-2 col-sm-4 col-xs-4">' +
        '<button type="button" class="btn btn-success" onclick="update(this.id)" id="update' + counter + '">Update</button>' +
        '</div>' +
        '<div class="col-md-2 col-sm-4 col-xs-4">' +
        '<button type="button" class="btn btn-danger" onclick="remove(this.id)" id="remove' + counter + '">Remove</button>' +
        '</div>' +
        '</div>';


    document.getElementById('userList').insertAdjacentHTML('beforeend', hai);
    counter++;


}

function edit(editId) {
    var parent = document.getElementById(editId).parentNode.parentNode;
    var child = parent.firstChild.firstChild;
    child.removeAttribute('disabled');
    console.log("child");

}

function update(updateId) {
    var parent = document.getElementById(updateId).parentNode.parentNode;
    var child = parent.firstChild.firstChild;
    child.setAttribute("disabled", 'disabled');
    console.log("child");

}

function remove(deleteId) {
    var parent = document.getElementById(deleteId).parentNode.parentNode;
    parent.remove();
    console.log("parent");

}
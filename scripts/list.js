// Question 2
var list = document.getElementById('demo');
var entry = document.getElementById('formAddName');
entry.onsubmit = function (evt) {
    evt.preventDefault();
    var firstName = document.getElementById('firstName').value;
    if (firstName !== "") {
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(firstName));
        list.appendChild(entry);
    }
    document.getElementById('firstName').value = ""
}
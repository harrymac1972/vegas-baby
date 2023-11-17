

function storageGetObject() {    
    var storageObjString = localStorage.getItem("storageObj");
    var storageObj = JSON.parse(storageObjString);
    return storageObj;
}


var storageObj = storageGetObject();

console.log(storageObj);
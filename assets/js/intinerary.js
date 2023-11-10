

function storageGet() {    
    var storageObjString = localStorage.getItem("storageObj");
    var storageObj = JSON.parse(storageObjString);
    return storageObj;
}


var storageObj = storageGet();

console.log(storageObj);
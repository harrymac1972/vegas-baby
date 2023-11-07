
function init(){
    var nameLbl = $("<h4>");
    nameLbl.attr("id","name-lbl");
    nameLbl.attr("for","name-inp");
    nameLbl.text("Full Name");
    $("#form-con").append(nameLbl);

    var nameInp = $('<input type="text">');
    nameInp.attr("id","name-inp");
    $("#form-con").append(nameInp);
}

init();
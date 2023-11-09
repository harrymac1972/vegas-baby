
function init() {
    var nameLbl = $("<h4>");
    nameLbl.attr("id","name-lbl");
    nameLbl.attr("class","lbl");
    nameLbl.attr("for","name-inp");
    nameLbl.text("Full Name:");

    var nameInp = $('<input type="text">');
    nameInp.attr("id","name-inp");

    var nameCon = $('<div>');
    nameCon.attr("id","name-con");
    nameCon.attr("class","input-set");
    nameCon.append(nameLbl);
    nameCon.append(nameInp);
    $("#form-con").append(nameCon);

    var emailLbl = $("<h4>");
    emailLbl.attr("id","email-lbl");
    emailLbl.attr("class","lbl");
    emailLbl.attr("for","email-inp");
    emailLbl.text("email:");

    var emailInp = $('<input type="text">');
    emailInp.attr("id","email-inp");

    var emailCon = $('<div>');
    emailCon.attr("id","email-con");
    emailCon.attr("class","input-set");
    emailCon.append(emailLbl);
    emailCon.append(emailInp);
    $("#form-con").append(emailCon);

    renderQuestions();
}

function getInterestsObjArr() {
    return [{
        lbl:"Gambling?",
        type:"check",
        default:"off"
    },{
        lbl:"Nightclubs?",
        type:"check",
        default:"off"
    },{
        lbl:"Concerts / Shows?",
        type:"check",
        default:"off"
    },{
        lbl:"Shopping?",
        type:"check",
        default:"off"
    },{
        lbl:"Out of Town Excursions?",
        type:"check",
        default:"off"
    },{
        lbl:"Motor Sports?",
        type:"check",
        default:"off"
    },{
        lbl:"Water Sports?",
        type:"check",
        default:"off"
    }]
}

function renderQuestions() {
    var interestsArr = getInterestsObjArr();
    for (var i=0; i<interestsArr.length;i++) {
        console.log(interestsArr[i]);
        
        var lbl = $("<h4>");
        var id_v = "quest-" + i;
        lbl.attr("id",id_v);
        lbl.attr("class","quest-lbl");
        lbl.text(interestsArr[i]["lbl"]);
        $("#form-con").append(lbl);
    }
}

init();
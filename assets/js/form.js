
function init() {
    var nameLbl = $("<h4>");
    nameLbl.attr("id","name-lbl");
    nameLbl.attr("class","lbl");
    nameLbl.attr("for","name-inp");
    nameLbl.text("Full Name:");
    $("#form-con").append(nameLbl);

    var nameInp = $('<input type="text">');
    nameInp.attr("id","name-inp");
    $("#form-con").append(nameInp);

    var emailLbl = $("<h4>");
    emailLbl.attr("id","email-lbl");
    emailLbl.attr("class","lbl");
    emailLbl.attr("for","email-inp");
    emailLbl.text("email:");
    $("#form-con").append(emailLbl);

    var emailInp = $('<input type="text">');
    emailInp.attr("id","email-inp");
    $("#form-con").append(emailInp);

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
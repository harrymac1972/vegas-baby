
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
}

function initInterestQuestObj() {
    interestsObjArr = [{
        lbl:"Water Sports?",
        type:"check",
        default:"off"
    },{
        lbl:"Gambling?",
        type:"check",
        default:"off"
    },{
        lbl:"Dancing?",
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
    } 
    ]
}

init();
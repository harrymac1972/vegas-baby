
function init() {
    var nameLbl = $("<h4>");
    nameLbl.attr("id","name-lbl");
    nameLbl.attr("class","lbl");
    nameLbl.attr("for","name-inp");
    nameLbl.text("Full Name:");

    var nameInp = $('<input type="text">');
    nameInp.attr("id","name-inp");

    var nameDiv = $('<div>');
    nameDiv.attr("id","name-div");
    nameDiv.attr("class","input-set");
    nameDiv.append(nameLbl);
    nameDiv.append(nameInp);
    $("#form-div").append(nameDiv);

    var emailLbl = $("<h4>");
    emailLbl.attr("id","email-lbl");
    emailLbl.attr("class","lbl");
    emailLbl.attr("for","email-inp");
    emailLbl.text("email:");

    var emailInp = $('<input type="text">');
    emailInp.attr("id","email-inp");

    var emailDiv = $('<div>');
    emailDiv.attr("id","email-div");
    emailDiv.attr("class","input-set");
    emailDiv.append(emailLbl);
    emailDiv.append(emailInp);
    $("#form-div").append(emailDiv);

    var interestsArr = renderQuestions();

    renderButtons(interestsArr);


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

function renderButtons(interestsArr) {
    var resetBtn = $("<button>");
    resetBtn.attr("id","reset-btn");
    resetBtn.text("Reset");
    resetBtn.on("click",function() {
        resetQuestions(interestsArr);
    })
    
    var submitBtn = $("<button>");
    submitBtn.attr("id","submit-btn");
    submitBtn.text("Submit");
    submitBtn.on("click",function() {
        submitQuestions(interestsArr);
    })

    var btnDiv = $('<div>');
    btnDiv.attr("class","btn-set");
    btnDiv.append(resetBtn);
    btnDiv.append(submitBtn);
    $("#form-div").append(btnDiv);

}

function renderQuestions() {
    var interestsArr = getInterestsObjArr();
    for (var i=0; i<interestsArr.length;i++) {
        var lbl = $("<h4>");
        var id = "quest-" + i;
        lbl.attr("id",id);
        lbl.attr("class","quest-lbl");
        lbl.text(interestsArr[i]["lbl"]);
          
        var chk = $("<input type='checkbox'>");
        var id = "input-" + i;
        chk.attr("id",id);
        chk.attr("class","quest-input");

        var questDiv = $('<div>');
        questDiv.attr("class","quest-set");
        questDiv.append(chk);
        questDiv.append(lbl);
        $("#form-div").append(questDiv);
    }
    return interestsArr;
}

function resetQuestions(interestsArr) {

}

function submitQuestions(interestsArr) {
    for (var i=0; i<interestsArr.length; i++) {
        var id = "#input-" + i;
        console.log(id);
        // console.log($(id).val());
        if ($(id).is(":checked")) {
            var bool = 1;
        } else {
            var bool = 0;
        }
        console.log(bool);
    }
}

init();

// $('#chk').val();
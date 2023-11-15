
function _init() {
    var packageType = localStorage.getItem("packageType");
    if (packageType != "basic" && packageType != "premium") {
        localStorage.setItem("packageType","basic");
        var packageType = localStorage.getItem("packageType");
    }
    console.log(packageType);
    if (packageType === "premium") {
        $("#main-div").attr("class","main-premium-div");
    } else {
        $("#main-div").attr("class","main-basic-div");
    }

    var detailsDiv = $('<div>');
    detailsDiv.attr("id","details-div");
    $("#form-div").append(detailsDiv);

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
    detailsDiv.append(nameDiv);

    var emailLbl = $("<h4>");
    emailLbl.attr("id","email-lbl");
    emailLbl.attr("class","lbl");
    emailLbl.attr("for","email-inp");
    emailLbl.text("E-mail:");

    var emailInp = $('<input type="text">');
    emailInp.attr("id","email-inp");
    
    
    var emailDiv = $('<div>');
    emailDiv.attr("id","email-div");
    emailDiv.attr("class","input-set");
    emailDiv.append(emailLbl);
    emailDiv.append(emailInp);
    detailsDiv.append(emailDiv);

    var basicInterestsArr = renderBasicQuestions();
    if (packageType === "premium") {
        var premiumInterestsArr = renderPremiumQuestions();
    }

    buttonsRender(basicInterestsArr,premiumInterestsArr);
}

function buttonsRender(basicInterestsArr,premiumInterestsArr) {
    var resetBtn = $("<button>");
    resetBtn.attr("id","reset-btn");
    resetBtn.text("Reset");
    resetBtn.on("click",function() {
        formReset(basicInterestsArr);
    })
    
    var submitBtn = $("<button>");
    submitBtn.attr("id","submit-btn");
    submitBtn.text("Submit");
    submitBtn.on("click",function() {
        formSubmit(basicInterestsArr);
    })

    var btnDiv = $('<div>');
    btnDiv.attr("id","btn-div");
    btnDiv.attr("class","btn-set");
    btnDiv.append(resetBtn);
    btnDiv.append(submitBtn);
    $("#form-div").append(btnDiv);

}

function formReset(basicInterestsArr) {
    $("#name-inp").val("");
    $("#email-inp").val("");
    for (var i=0; i<basicInterestsArr.length; i++) {
        var id = "#input-" + i;
        $(id).prop('checked', false);
    }
}

function formSubmit(basicInterestsArr) {
    storageObj = {};
    storageObj["fullName"] = $("#name-inp").val();
    storageObj["email"] = $("#email-inp").val();
    storageObj["questionsObj"] = {};
    for (var i=0; i<basicInterestsArr.length; i++) {
        var id = "#input-" + i;
        if ($(id).is(":checked")) {
            var bool = 1;
        } else {
            var bool = 0;
        }
        storageObj["questionsObj"][basicInterestsArr[i]["lbl"]] = bool;
    }
    console.log(storageObj);
    storageSet(storageObj);
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
        lbl:"Sporting Events?",
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
    },{
        lbl:"Hotels?",
        type:"check",
        default:"off"
    },{
        lbl:"Restaurants?",
        type:"check",
        default:"off"
    }]
};


function renderBasicQuestions() {

    var questionsDiv = $("<div>");
    questionsDiv.attr("id","questions-div");
    $("#form-div").append(questionsDiv);

    var questionsOneDiv = $('<div>');
    questionsOneDiv.attr("id","questions-one-div");
    questionsOneDiv.attr("class","questions-group");
    questionsDiv.append(questionsOneDiv);

    var questionsTwoDiv = $('<div>');
    questionsTwoDiv.attr("id","questions-two-div");
    questionsOneDiv.attr("class","questions-group");
    questionsDiv.append(questionsTwoDiv);

    var premiumDiv = $('<div>');
    premiumDiv.attr("id","premium-div");
    questionsOneDiv.attr("class","questions-group");
    questionsDiv.append(premiumDiv);

    var upgradeBtn = $("<button>");
    upgradeBtn.attr("id","upgrade-btn");
    upgradeBtn.text("PREMIUM OPTIONS!");
    premiumDiv.append(upgradeBtn);    
    upgradeBtn.on("click",function() {
        upgradeOptions();
    })

    var basicInterestsArr = getInterestsObjArr();
    for (var i=0; i<basicInterestsArr.length;i++) {
        var lbl = $("<h4>");
        var id = "quest-" + i;
        lbl.attr("id",id);
        lbl.attr("class","quest-lbl");
        lbl.text(basicInterestsArr[i]["lbl"]);
          
        var chk = $("<input type='checkbox'>");
        var id = "input-" + i;
        chk.attr("id",id);
        chk.attr("class","quest-input");

        var questDiv = $('<div>');
        questDiv.attr("class","quest-set");
        questDiv.append(chk);
        questDiv.append(lbl);

        if (i < Math.round(basicInterestsArr.length / 2)) {
            questionsOneDiv.append(questDiv);
        } else {
            questionsTwoDiv.append(questDiv);
        }
    }
    return basicInterestsArr;
}

function renderPremiumQuestions() {
    premiumInterestsArr = "[FLESH OUT LATER]";
    return premiumInterestsArr;
}

function storageGet() {
    var storageObjString = localStorage.getItem("storageObj");
    var storageObj = JSON.parse(storageObjString);
    return storageObj;
}

function storageSet(storageObj) {
    var storageObjString = JSON.stringify(storageObj);
    localStorage.setItem("storageObj",storageObjString);
}

function upgradeOptions() {    
    localStorage.setItem("packageType","premium");
    $("#main-div").attr("class","main-premium-div");
    $("#upgrade-btn").remove();
}

_init();

// console.log(storageGet());


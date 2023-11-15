
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

    var interestsArr = renderBasicQuestions(packageType);
    buttonsRender(interestsArr);

    setVisibilities();
}

function buttonsRender(interestsArr) {
    var resetBtn = $("<button>");
    resetBtn.attr("id","reset-btn");
    resetBtn.text("Reset");
    resetBtn.on("click",function() {
        formReset(interestsArr);
    })
    
    var submitBtn = $("<button>");
    submitBtn.attr("id","submit-btn");
    submitBtn.text("Submit");
    submitBtn.on("click",function() {
        formSubmit(interestsArr);
    })

    var btnDiv = $('<div>');
    btnDiv.attr("id","btn-div");
    btnDiv.attr("class","btn-set");
    btnDiv.append(resetBtn);
    btnDiv.append(submitBtn);
    $("#form-div").append(btnDiv);
}

function formReset(interestsArr) {
    localStorage.setItem("packageType","basic");
    $("#main-div").attr("class","main-basic-div");
    $("#name-inp").val("");
    $("#email-inp").val("");
    for (var i=0; i<interestsArr.length; i++) {
        var id = "#input-" + i;
        $(id).prop('checked', false);
    }
    setVisibilities();
}

function formSubmit(interestsArr) {
    storageObj = {};
    storageObj["fullName"] = $("#name-inp").val();
    storageObj["email"] = $("#email-inp").val();
    storageObj["questionsObj"] = {};
    for (var i=0; i<interestsArr.length; i++) {
        var id = "#input-" + i;
        if ($(id).is(":checked")) {
            var bool = 1;
        } else {
            var bool = 0;
        }
        storageObj["questionsObj"][interestsArr[i]["lbl"]] = bool;
    }
    console.log(storageObj);
    storageSet(storageObj);
}

function getAmountBasicQuestions(interestsArr) {
    var basicAmt = 0;
    for (var i = 0; i<interestsArr.length; i++) {
        if (interestsArr[i]["type"] === "basic") {
            basicAmt++;
        }
    }
    return basicAmt;
}

function getInterestsObjArr() {
    return [{
        lbl:"Gambling?",
        type:"basic",
    },{
        lbl:"Nightclubs?",
        type:"basic",
    },{
        lbl:"Concerts / Shows?",
        type:"basic",
    },{
        lbl:"Shopping?",
        type:"basic",
    },{
        lbl:"Out of Town Excursions?",
        type:"basic",
    },{
        lbl:"Sporting Events?",
        type:"basic",
    },{
        lbl:"Motor Sports?",
        type:"basic",
    },{
        lbl:"Water Sports?",
        type:"basic",
    },{
        lbl:"Hotels?",
        type:"basic",
    },{
        lbl:"Restaurants?",
        type:"basic",
    },{
        lbl:"Private Security?",
        type:"premium",
    },{
        lbl:"Limousine + Butler?",
        type:"premium",
    },{
        lbl:"Helicopter Tours?",
        type:"premium",
    },{
        lbl:"High Stakes Gambling?",
        type:"premium",
    },{
        lbl:"Celebrity Meets?",
        type:"premium",
    }]
};

function makeUpgradeBtn(questionsDiv) {
    var upgradeBtn = $("<button>");
    upgradeBtn.attr("id","upgrade-btn");
    upgradeBtn.text("PREMIUM OPTIONS!");
    questionsDiv.append(upgradeBtn);    
    upgradeBtn.on("click",function() {
        upgradeOptions();
    })
}

function renderBasicQuestions(packageType) {
    var questionsDiv = $("<div>");
    questionsDiv.attr("id","questions-div");
    $("#form-div").append(questionsDiv);

    var questionsOneDiv = $('<div>');
    questionsOneDiv.attr("id","questions-one-div");
    questionsOneDiv.attr("class","questions-group");
    questionsDiv.append(questionsOneDiv);

    var questionsTwoDiv = $('<div>');
    questionsTwoDiv.attr("id","questions-two-div");
    questionsTwoDiv.attr("class","questions-group");
    questionsDiv.append(questionsTwoDiv);

    var premiumDiv = $('<div>');
    premiumDiv.attr("id","premium-div");
    premiumDiv.attr("class","questions-group");
    questionsDiv.append(premiumDiv);

    if (packageType === "basic") {
        makeUpgradeBtn(questionsDiv);
    }

    var interestsArr = getInterestsObjArr();
    var basicAmt = getAmountBasicQuestions(interestsArr);
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

        if (interestsArr[i]["type"] === "basic") {
            if (i < Math.round(basicAmt / 2)) {
                questionsOneDiv.append(questDiv);
            } else {
                questionsTwoDiv.append(questDiv);
            }
        } else {
                premiumDiv.append(questDiv);
        }
    }
    return interestsArr;
}

function setVisibilities() {
    var packageType = localStorage.getItem("packageType");
    console.log(packageType);
    if (packageType === "basic") {
        $("#premium-div").attr("class","questions-group hid");
        $("#upgrade-btn").attr("class","");
    } else {
        $("#upgrade-btn").attr("class","hid");
        $("#premium-div").attr("class","");
    }
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
    setVisibilities();
}

_init();

// console.log(storageGet());


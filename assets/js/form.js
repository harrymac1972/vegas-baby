// Initialization function
function _init() {
    // Retrieve the package type from local storage
    var packageType = localStorage.getItem("packageType");

    // Check if the package type is not 'basic' or 'premium', set it to 'basic'
    if (packageType != "basic" && packageType != "premium") {
        localStorage.setItem("packageType","basic");
        packageType = localStorage.getItem("packageType");
    }

    // Log the current package type to the console
    console.log(packageType);

    // Set the class of the main-div based on the package type
    if (packageType === "premium") {
        $("#main-div").attr("class","main-premium-div");
    } else {
        $("#main-div").attr("class","main-basic-div");
    }

    // Create detailsDiv and append it to form-div
    var detailsDiv = $('<div>');
    detailsDiv.attr("id","details-div");
    $("#form-div").append(detailsDiv);

    // Create nameLbl, nameInp, nameDiv and append them to detailsDiv
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

    // Create emailLbl, emailInp, emailDiv and append them to detailsDiv
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

    // Get the array of interests based on the package type
    var interestsArr = renderBasicQuestions(packageType);

    // Render buttons based on interestsArr
    buttonsRender(interestsArr);

    // Set visibilities based on the package type
    setVisibilities();
}

// Function to render reset and submit buttons
function buttonsRender(interestsArr) {
    var resetBtn = $("<button>");
    resetBtn.attr("id","reset-btn");
    resetBtn.text("Reset");
    resetBtn.on("click",function() {
        formReset(interestsArr);
    });

    var submitBtn = $("<button>");
    submitBtn.attr("id","submit-btn");
    submitBtn.text("Submit");
    submitBtn.on("click",function() {
        // Uncomment the line below to show an alert when the submit button is clicked
        //alert("clicked submit");
        formSubmit(interestsArr);
    });

    // Create btnDiv, append resetBtn and submitBtn, and append it to form-div
    var btnDiv = $('<div>');
    btnDiv.attr("id","btn-div");
    btnDiv.attr("class","btn-set");
    btnDiv.append(resetBtn);
    btnDiv.append(submitBtn);
    $("#form-div").append(btnDiv);
}

// Function to reset the form
function formReset(interestsArr) {
    // Set packageType to 'basic'
    localStorage.setItem("packageType","basic");

    // Set the class of main-div to 'main-basic-div'
    $("#main-div").attr("class","main-basic-div");

    // Clear the input values and uncheck checkboxes
    $("#name-inp").val("");
    $("#email-inp").val("");
    for (var i=0; i<interestsArr.length; i++) {
        var id = "#input-" + i;
        $(id).prop('checked', false);
    }

    // Set visibilities based on the package type
    setVisibilities();
}

// Function to handle form submission
function formSubmit(interestsArr) {
    // Create a storage object and populate it with form data
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

    // Log the storage object to the console
    console.log(storageObj);

    // Call the storageSet function with the storage object
    storageSet(storageObj);
}

// Function to get the count of basic questions in interestsArr
function getAmountBasicQuestions(interestsArr) {
    var basicAmt = 0;
    for (var i = 0; i<interestsArr.length; i++) {
        if (interestsArr[i]["type"] === "basic") {
            basicAmt++;
        }
    }
    return basicAmt;
}

// Function to get an array of interest objects
function getInterestsObjArr() {
    return [{
        lbl:"Concerts?",
        type:"basic",
    },{
        lbl:"Shows?",
        type:"basic",
    },{
        lbl:"Sporting Events?",
        type:"basic",
    },{
        lbl:"Motor Sports?",
        type:"basic",
    },{
        lbl:"Flights?",
        type:"basic",
    },{
        lbl:"Hotels?",
        type:"basic",
    },{
        lbl:"Restaurants?",
        type:"basic",
    },{
        lbl:"Helicopter Tours?",
        type:"premium",
    },{
        lbl:"High Stakes Gambling?",
        type:"premium",
    },{
        lbl:"Backstage Passes?",
        type:"premium",
    }]
};



// Function to create and handle the upgrade button
function makeUpgradeBtn(questionsDiv) {
    // Create an upgrade button element
    var upgradeBtn = $("<button>");
    upgradeBtn.attr("id","upgrade-btn");
    upgradeBtn.text("PREMIUM OPTIONS!");
    questionsDiv.append(upgradeBtn);

    // Add click event listener to the upgrade button
    upgradeBtn.on("click",function() {
        upgradeOptions();
    });
}

// Function to render basic questions based on the package type
function renderBasicQuestions(packageType) {
    // Create a container div for questions
    var questionsDiv = $("<div>");
    questionsDiv.attr("id","questions-div");
    $("#form-div").append(questionsDiv);

    // Create divs for organizing questions
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

    // If the package type is 'basic', create the upgrade button
    if (packageType === "basic") {
        makeUpgradeBtn(questionsDiv);
    }

    // Get an array of interest objects
    var interestsArr = getInterestsObjArr();

    // Get the count of basic questions
    var basicAmt = getAmountBasicQuestions(interestsArr);

    // Loop through interestsArr and create checkboxes and labels
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

        // Organize questions into different divs based on type
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

// Function to set visibilities based on the package type
function setVisibilities() {
    var packageType = localStorage.getItem("packageType");
    console.log(packageType);

    // Adjust visibility of premium options and upgrade button
    if (packageType === "basic") {
        $("#premium-div").attr("class","questions-group hid");
        $("#upgrade-btn").attr("class","vis");
    } else {
        $("#upgrade-btn").attr("class","hid");
        $("#premium-div").attr("class","questions-group");
    }
}

// Function to retrieve data from local storage
function storageGet() {
    var storageObjString = localStorage.getItem("storageObj");
    var storageObj = JSON.parse(storageObjString);
    return storageObj;
}

// Function to store data in local storage
function storageSet(storageObj) {



    var storageObjString = JSON.stringify(storageObj);
    localStorage.setItem("storageObj",storageObjString);
}

// Function to handle upgrading to premium options
function upgradeOptions() {
    // Set the package type to 'premium'
    localStorage.setItem("packageType","premium");

    // Change the class of main-div to 'main-premium-div'
    $("#main-div").attr("class","main-premium-div");

    // Adjust visibilities based on the package type
    setVisibilities();
    $("#submit-btn").on('click', () => {
        window.location.replace("./premium.html");
    });
}

// Initialize the form and related elements
_init();



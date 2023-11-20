

// Select the HTML element with the ID 'customize-btn' and store it in the 'customizeBtn' variable
var customizeBtn = $("#customize-btn");

// Attach a click event listener to the 'customizeBtn' element
customizeBtn.on("click", setBasic);

// Select the HTML element with the ID 'customize-btn' and store it in the 'customizeBtn' variable
var customizeLink = $("#customize-link");

// Attach a click event listener to the 'customizeLink' element
customizeLink.on("click", setBasic);

function setBasic() {
    // When the button is clicked, set a value in the local storage with the key 'packageType' and value 'basic'
    localStorage.setItem("packageType", "basic");
}






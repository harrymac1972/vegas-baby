

// Select the HTML element with the ID 'customize-btn' and store it in the 'customizeBtn' variable
var customizeBtn = $("#customize-btn");

// Attach a click event listener to the 'customizeBtn' element
customizeBtn.on("click", function () {
    // When the button is clicked, set a value in the local storage with the key 'packageType' and value 'basic'
    localStorage.setItem("packageType", "basic");
});





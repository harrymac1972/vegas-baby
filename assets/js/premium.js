$(document).ready(() => {
    var storageObj;
    var cardTemplate = `
    <div class="card">
    <div class="thefront" id="ten"></div>
    <div class="card-back">
      <div class="card-img"></div>
      <div class="card-description">
        <h2 id="visit-header"><a href="https://taogroup.com/venues/hakkasan-nightclub-las-vegas/">Visit Hakasan Nightclub</a></h2>
        <p class="card-description-text">Hakkasan Nightclub in Las Vegas, located at the MGM Grand Hotel & Casino, is a world-renowned nightlife destination famous for hosting top-tier DJs and performers. With its opulent design, cutting-edge sound systems, and energetic atmosphere, Hakkasan offers a premier nightlife experience in the heart of the Las Vegas entertainment scene.</p>
      </div>
      <button id="booknowbtn"><a href="https://taogroup.com/venues/hakkasan-nightclub-las-vegas/">More Options</a></button>
    </div>
    </div>
    `;
    
    function _init() {
        storageObj = JSON.parse(localStorage.getItem("storageObj"));
        console.log(storageObj);
        var questions = storageObj.questionsObj;
        console.log(questions);
        var questionEntries = Object.entries(questions);
        questionEntries.forEach(entry => {
            if (entry[0] === 'Concerts?' && entry[1] !== 0) {
                console.log('you selected concerts');
                console.log('you selected flights');
                var thisTemplate = cardTemplate;
                var parsed = $.parseHTML(thisTemplate);
                $(parsed[1]).children(".card-back").children(".card-description").children("#visit-header").children("a").text("Fly Air Canada!");
                $(parsed[1]).children(".card-back").children(".card-description").children("#visit-header").children("a").attr("href", "https://www.aircanada.com/ca/en/aco/home.html");
                $(parsed[1]).children(".thefront").css('background-image', 'url("./assets/imgs/A-S.png")');
                var target = $(parsed[1]).children(".card-back").children(".card-img").css('background-image', 'url("./assets/imgs/lasvegascollage.jpg")');
                $(".card-container").append(target['context']);
            } 
            if (entry[0] === 'Flights?' && entry[1] !== 0) {
                console.log('you selected flights');
                var thisTemplate = cardTemplate;
                var parsed = $.parseHTML(thisTemplate);
                $(parsed[1]).children(".card-back").children(".card-description").children("#visit-header").children("a").text("Fly Air Canada!");
                $(parsed[1]).children(".card-back").children(".card-description").children("#visit-header").children("a").attr("href", "https://www.aircanada.com/ca/en/aco/home.html");
                $(parsed[1]).children(".thefront").css('background-image', 'url("./assets/imgs/A-S.png")');
                var target = $(parsed[1]).children(".card-back").children(".card-img").css('background-image', 'url("./assets/imgs/lasvegascollage.jpg")');
                $(".card-container").append(target['context']);
            }
            if (entry[0] === 'Hotels?' && entry[1] !== 0) {
                console.log('you selected hotels');
                var thisTemplate = cardTemplate;
                var parsed = $.parseHTML(thisTemplate);
                $(parsed[1]).children(".card-back").children(".card-description").children("#visit-header").children("a").text("Visit The Hotel");
                $(parsed[1]).children(".thefront").css('background-image', 'url("./assets/imgs/K-S.png")');
                var target = $(parsed[1]).children(".card-back").children(".card-img").css('background-image', 'url("./assets/imgs/hotels/venetian.jpg")');
                $(".card-container").append(target['context']);
            }
        });
    }
    
    _init();
    
});
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
      questionEntries.forEach((entry) => {
        if (entry[0] === "Concerts?" && entry[1] !== 0) {
          var thisTemplate = cardTemplate;
          var parsed = $.parseHTML(thisTemplate);
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .text("Let's Party");
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .attr("href", "https://2023.vegas/concerts/");
          $(parsed[1])
            .children(".thefront")
            .css("background-image", 'url("./assets/imgs/A-S.png")');
          var target = $(parsed[1])
            .children(".card-back")
            .children(".card-img")
            .css(
              "background-image",
              'url("./assets/imgs/concert for premium.jpg")'
            );
          $(".card-container").append(target["context"]);
        }
        if (entry[0] === "Flights?" && entry[1] !== 0) {
          var thisTemplate = cardTemplate;
          var parsed = $.parseHTML(thisTemplate);
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .text("Fly Air Canada!");
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .attr("href", "https://www.aircanada.com/ca/en/aco/home.html");
          $(parsed[1])
            .children(".thefront")
            .css("background-image", 'url("./assets/imgs/2-H.png")');
          var target = $(parsed[1])
            .children(".card-back")
            .children(".card-img")
            .css("background-image", 'url("./assets/imgs/air plane.jpg")');
          $(".card-container").append(target["context"]);
        }
        if (entry[0] === "Hotels?" && entry[1] !== 0) {
          var thisTemplate = cardTemplate;
          var parsed = $.parseHTML(thisTemplate);
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .text("The Place You Might Rest At!!!!");
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .attr("href", "https://www.venetianlasvegas.com/");
          $(parsed[1])
            .children(".thefront")
            .css("background-image", 'url("./assets/imgs/3-D.png")');
          var target = $(parsed[1])
            .children(".card-back")
            .children(".card-img")
            .css("background-image", 'url("./assets/imgs/hotels/venetian.jpg")');
          $(".card-container").append(target["context"]);
        }
        if (entry[0] === "Shows?" && entry[1] !== 0) {
          var thisTemplate = cardTemplate;
          var parsed = $.parseHTML(thisTemplate);
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .text("Ready To Be Amazed");
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .attr("href", "https://www.vegas.com/shows/magic/");
          $(parsed[1])
            .children(".thefront")
            .css("background-image", 'url("./assets/imgs/4-S.png")');
          var target = $(parsed[1])
            .children(".card-back")
            .children(".card-img")
            .css("background-image", 'url("./assets/imgs/magic baby.jpg")');
          $(".card-container").append(target["context"]);
        }
        if (entry[0] === "Sporting Events?" && entry[1] !== 0) {
          var thisTemplate = cardTemplate;
          var parsed = $.parseHTML(thisTemplate);
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .text("Let's Get Ready To RUMBLE");
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .attr("href", "https://www.vegas.com/shows/");
          $(parsed[1])
            .children(".thefront")
            .css("background-image", 'url("./assets/imgs/5-D.png")');
          var target = $(parsed[1])
            .children(".card-back")
            .children(".card-img")
            .css("background-image", 'url("./assets/imgs/hotels/lets get rdy to rumble.jpg")');
          $(".card-container").append(target["context"]);
        }
        if (entry[0] === "Motor Sports?" && entry[1] !== 0) {
          var thisTemplate = cardTemplate;
          var parsed = $.parseHTML(thisTemplate);
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .text("Start Your Engines");
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .attr("href", "https://www.lvms.com/");
          $(parsed[1])
            .children(".thefront")
            .css("background-image", 'url("./assets/imgs/6-C.png")');
          var target = $(parsed[1])
            .children(".card-back")
            .children(".card-img")
            .css("background-image", 'url("../assets/imgs/hotels/Drag Racing.jpg")');
          $(".card-container").append(target["context"]);
        }
        if (entry[0] === "Restaurants?" && entry[1] !== 0) {
          var thisTemplate = cardTemplate;
          var parsed = $.parseHTML(thisTemplate);
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .text("Bon Appetit");
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .attr("href", "https://www.fourqueens.com/dining/hugos_cellar/index.php");
          $(parsed[1])
            .children(".thefront")
            .css("background-image", 'url("./assets/imgs/7-H.png")');
          var target = $(parsed[1])
            .children(".card-back")
            .children(".card-img")
            .css("background-image", 'url("./assets/imgs/hotels/hugo cellar.jpg")');
          $(".card-container").append(target["context"]);
        }
        if (entry[0] === "Helicopter Tours?" && entry[1] !== 0) {
          var thisTemplate = cardTemplate;
          var parsed = $.parseHTML(thisTemplate);
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .text("Now That's a Fucking View");
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .attr("href", "https://www.viator.com/Las-Vegas-tourism/d684-r1113888466-s41479136?mcid=33953&tsem=true&supci=1292040582&supag=1113888466&supsc=kwd-19344210627&supai=76691011437918&supdv=c&supnt=o&supkw=las%20vegas%20helicopter%20tours&supti=kwd-19344210627&suplp=124753&supli=58999&m=33953&supag=1113888466&supsc=kwd-19344210627&supai=76691011437918&supdv=c&supnt=nt:o&suplp=124753&supli=58999&supti=kwd-19344210627&tsem=true&supci=kwd-19344210627&supkw=las%20vegas%20helicopter%20tours&msclkid=6a96c3d4b36a1e5dd09fa68e2c8e1c6b");
          $(parsed[1])
            .children(".thefront")
            .css("background-image", 'url("./assets/imgs/8-S.png")');
          var target = $(parsed[1])
            .children(".card-back")
            .children(".card-img")
            .css("background-image", 'url("./assets/imgs/hotels/Drag Racing.jpg")');
          $(".card-container").append(target["context"]);
        }
        if (entry[0] === "Motor Sports?" && entry[1] !== 0) {
          var thisTemplate = cardTemplate;
          var parsed = $.parseHTML(thisTemplate);
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .text("Start Your Engines");
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .attr("href", "https://www.lvms.com/");
          $(parsed[1])
            .children(".thefront")
            .css("background-image", 'url("./assets/imgs/3-D.png")');
          var target = $(parsed[1])
            .children(".card-back")
            .children(".card-img")
            .css("background-image", 'url("./assets/imgs/hotels/Drag Racing.jpg")');
          $(".card-container").append(target["context"]);
        }
        if (entry[0] === "Motor Sports?" && entry[1] !== 0) {
          var thisTemplate = cardTemplate;
          var parsed = $.parseHTML(thisTemplate);
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .text("Start Your Engines");
          $(parsed[1])
            .children(".card-back")
            .children(".card-description")
            .children("#visit-header")
            .children("a")
            .attr("href", "https://www.lvms.com/");
          $(parsed[1])
            .children(".thefront")
            .css("background-image", 'url("./assets/imgs/3-D.png")');
          var target = $(parsed[1])
            .children(".card-back")
            .children(".card-img")
            .css("background-image", 'url("./assets/imgs/hotels/Drag Racing.jpg")');
          $(".card-container").append(target["context"]);
        }
      });
    }
    _init();
  });
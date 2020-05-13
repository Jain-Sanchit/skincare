var firebaseConfig = {
    apiKey: "AIzaSyC6n20O3vip1h8lXgw1P16-75r1YPUnFYI",
    authDomain: "fir-eb0a3.firebaseapp.com",
    databaseURL: "https://fir-eb0a3.firebaseio.com",
    projectId: "fir-eb0a3",
    storageBucket: "fir-eb0a3.appspot.com",
    messagingSenderId: "617696298136",
    appId: "1:617696298136:web:24b70ab170132b499b7ced",
    measurementId: "G-1LS33L4ZTJ",
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//gallery

var storageRef = firebase.storage().ref("gallery");

storageRef
  .listAll()
  .then(function (result) {
    result.items.forEach(function (imageRef) {
      displayImage(imageRef);
      //console.log(imageRef);
    });
  })
  .catch(function (error) {
    // Handle any errors
  });

function displayImage(imageRef) {
  imageRef
    .getDownloadURL()
    .then(function (url) {
      //console.log(url);
      var x = document.createElement("IMG");
      x.setAttribute("src", url);

      x.setAttribute("alt", "gallery img");

      //document.body.appendChild(x);

      // document.body.appendChild(divi);
      document.getElementById("gal-img").appendChild(x);
    })
    .catch(function (error) {
      // Handle any errors
    });
}


$(".header a").on("click", function (e) {
    console.log(this.hash);
    if (this.hash !== "" && (window.location.pathname == "/" || window.location.pathname == "index.html")) {
        e.preventDefault();
        const hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});





var zikahtml = "<h1 class='cover-heading'>Zika Virus.</h1><p class='lead'>This disease is the latest to threaten to spread throughout the entire world. What is currently happening with the virus? </p><p class='lead'><a href='#' class='btn btn-lg btn-default' id='learn-more'>Learn more</a></p>";
document.getElementById("home-content").innerHTML= zikahtml;
document.getElementById("learn-more").onclick =function(){initMap()};
$("#home-content").show();
$("#map-content").hide();
$("#news-content").hide();
$("#social-content").hide();
$("#images-content").hide();
$("#home").hide();


document.getElementById("home").onclick= function() {zikaVirus()};


function zikaVirus(){

  document.getElementById("home-content").innerHTML= zikahtml;
  $("#home-content").show();
  $("#map-content").hide();
  $("#news-content").hide();
  $("#social-content").hide();
  $("#images-content").hide();
  $("#home").hide();

}








document.getElementById("social-media").onclick= function() {createMedia()};
document.getElementById("news").onclick= function() {createNews()};
document.getElementById("images").onclick= function() {createImages()};
document.getElementById("news").onclick= function() {createNews()};










function createMedia(){
document.getElementById("social-content").innerHTML = "<div class='iframe-container'><iframe allowtransparency='true' style='background: #FFFFFF;' src='http://meggiecruser.com/static/twitter' width='500' height ='500'></iframe></div>"; //#333 is the gray background color
$("#home-content").hide();
$("#map-content").hide();
$("#news-content").hide();
$("#images-content").hide();
$("#social-content").show();
$("#home").show();


}

function createNews(){
  var html = ""  // string to hold data before writing to page
  //use any of the flickr api endpoints
  var apiurl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=zika&begin_date=20160101&sort=newest&api-key=c7198a8ed45c84aac2f2d2c55c9249cf%3A6%3A72829696"
  $(document).ready(function(){
          console.log("document ready")
          $.getJSON(apiurl,function(json){ //in this case, the object is caled json, but it could be called anything

              console.log(json);
              //code for outside loop

              $.each(json.response.docs, function(i, dataItem){ //dataItem is the current photo object were looking at (the current json item)
                console.log(dataItem);
                console.log(dataItem.lead_paragraph);
                  //is the problem with dataItem variable?

                var web_url= dataItem.web_url;
                html += "<a href= '" + dataItem.web_url + "'><p>" + dataItem.headline.main + '</a>';
                html += '<br>' + dataItem.byline.original;

                html += '<br>' + dataItem.lead_paragraph + '</p>'; //display the photos and also link them to the flickr site
                //the target part opens a new tab


              });
              //after loop code
              document.getElementById("news-content").innerHTML = html;
          });


  });
$("#home-content").hide();
$("#map-content").hide();
$("#news-content").show();
$("#social-content").hide();
$("#images-content").hide();
$("#home").show();
}

var htmlPage1= ""
function createImages(){
  var html = ""  // string to hold data before writing to page
  //use any of the flickr api endpoints

var button=""
  var apiurl = "https://api.flickr.com/services/feeds/photos_public.gne?tags=zika&format=json&jsoncallback=?"
  $(document).ready(function(){
          console.log("document ready")
          $.getJSON(apiurl,function(json){ //in this case, the object is caled json, but it could be called anything

              console.log(json);
              //code for outside loop

              $.each(json.items, function(i, dataItem){ //dataItem is the current photo object were looking at (the current json item)
                console.log(dataItem);
                console.log(dataItem.author_id);
                console.log(dataItem.author);
                console.log(dataItem.title);
                console.log(dataItem.media.m); //we went another level deeper into the tree

                if (i <= 3){
                  html += '<a href ="' + dataItem.link + '" target= "_blank"><img class = "photo" src="' + dataItem.media.m + '"></a>'; //display the photos and also link them to the flickr site

                }
                document.getElementById("images-content").innerHTML = html;

                if (i > 3 && i<8){
                  console.log("its happening")
                  htmlPage1 += '<a href ="' + dataItem.link + '" target= "_blank"><img class = "photo" src="' + dataItem.media.m + '"></a>'; //display the photos and also link them to the flickr site

                }



                //display the photos and also link them to the flickr site
                //the target part opens a new tab

              });
              //after loop code
              //THIS WONT WORK BECUASE THE BUTTON ISNT DONE UNTIL THE VERY END. IT NEEDS TO BE SEPARATE FROM THE HTML



              console.log("button done");

          });


  });

$("#home-content").hide();
$("#map-content").hide();
$("#news-content").hide();
$("#social-content").hide();
$("#images-content").show();
$("#home").show();

}
document.getElementById("image-button").onclick = document.getElementById("images-content").innerHTML= htmlPage1;
console.log("button pressed");

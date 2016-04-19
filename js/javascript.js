


var zikahtml = "<h1 class='cover-heading'>Zika Virus.</h1><p class='lead'>This disease is the latest to threaten to spread throughout the entire world. What is currently happening with the virus? </p><p class='lead'><a href='#' class='btn btn-lg btn-default'>Learn more</a></p>";
document.getElementById("home-content").innerHTML= zikahtml;

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









function createMedia(){
document.getElementById("social-content").innerHTML = "<iframe allowtransparency='true' style='background: #FFFFFF;' src='http://meggiecruser.com/static/twitter' width='500' height ='500'></iframe>";
$("#home-content").hide();
$("#map-content").hide();
$("#news-content").hide();
$("#images-content").hide();
$("#social-content").show();
$("#home").show();


}

function createNews(){
document.getElementById("news-content").innerHTML = "IM BACK";
$("#home-content").hide();
$("#map-content").hide();
$("#news-content").show();
$("#social-content").hide();
$("#images-content").hide();
$("#home").show();
}

function createImages(){
  var html = ""  // string to hold data before writing to page
  //use any of the flickr api endpoints
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

                html += '<a href ="' + dataItem.link + '" target= "_blank"><img class = "photo" src="' + dataItem.media.m + '"></a>'; //display the photos and also link them to the flickr site
                //the target part opens a new tab

              });
              //after loop code
              document.getElementById("images-content").innerHTML = html;
          });


  });

$("#home-content").hide();
$("#map-content").hide();
$("#news-content").hide();
$("#social-content").hide();
$("#images-content").show();
$("#home").show();
}

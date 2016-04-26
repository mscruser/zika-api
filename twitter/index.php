<html>
<style>

@import url(//fonts.googleapis.com/css?family=Open+Sans);

@font-face {
  font-family: Oswald;
  src: url(oswald/Oswald-Light.ttf);
}


@font-face {
  font-family: Oswald Regular;
  src: url(oswald/Oswald-Regular.ttf);
}

.tweets{
  border-bottom-color:#A9B5BF;
  border-bottom-width:.4px;
  border-bottom-style:solid;
  padding-bottom:10px;
  margin-bottom:10px;
}

.twitter-media{
  border-bottom-color: #A9B5BF;
  border-bottom-width:.4px;
  border-bottom-style:solid;
  padding-bottom:10px;
  margin-bottom:10px;
}



.get-font1{
  font-family: 'Oswald';
  margin-left:3px;
  color:green;
  font-size:19px;

}
.get-font2{
  font-family: 'Open Sans';
  margin-left:3px;
  color:#50473e;

}
.get-font3{
  font-family: 'Open Sans';
  font-size: 14px;
  color:#50473e;
}

.screen-name{
  font-size:10px;
  color:grey;

}






</style>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="tweetLinkIt/tweetLinkIt.js"></script>

<script>

    function pageComplete(){
        $('.tweets').tweetLinkify();
    }
</script>



<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php'); //including this code. linking to it

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "1573344817-0bq7v9LoxMrJAjfqrXkPIjsXGgg7ZvGweeEomFH",
    'oauth_access_token_secret' => "L135T0ryyWNyHSmgoI1HWj486Ml91xTzsjpLKTX06KTSn",
    'consumer_key' => "2eZSQ61jln2XcDkbmIK4rQCtw",
    'consumer_secret' => "mR6PMdZTg6rFXXE19pVn6KsQr6UARUiJQD02nrE753zEmb9B0O"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
$url = 'https://api.twitter.com/1.1/blocks/create.json';
$requestMethod = 'POST';

/** POST fields required by the URL above. See relevant docs as above **/
$postfields = array(
    'screen_name' => 'usernameToBlock',
    'skip_status' => '1'
);

/** Perform a POST request and echo the response **/
// $twitter = new TwitterAPIExchange($settings);
// echo $twitter->buildOauth($url, $requestMethod)
//              ->setPostfields($postfields)
//              ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=%23zika';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
// echo $twitter->setGetfield($getfield)
//              ->buildOauth($url, $requestMethod)
//              ->performRequest();


$tweetData= json_decode($twitter->setGetfield($getfield)
            ->buildOauth($url, $requestMethod)
            ->performRequest(), $assoc= TRUE);

foreach($tweetData['statuses'] as $items)
{
  $entitiesArray= $items['entities']; //store the entities in an array
  echo "<img class=' profile-image' src ='" . $items['user']['profile_image_url']. "'>";
  echo "<span class='user-name get-font1'>" . $items['user']['name'] . "</span>";
  echo "<span class=' screen-name get-font2'>". "@". $items['user']['screen_name'] . "</span>". "</br>";

if (!(isset($entitiesArray['media']))){
  echo "<div class='tweets get-font3'>" . $items['text'] . "</div>";
}
else {
  echo "<span class='get-font3'>". $items['text'] . "</span>";
}

  //echo $items['created_at'] . "</br>";
  //echo "Where: " . $items['location'] . "</br>";


  if (isset($entitiesArray['media'])){ //is there a photo? if not it moves on
      $mediaArray = $entitiesArray['media'];
      $tweetMedia = $mediaArray[0];
      echo "<a target ='_blank' href='" . $tweetMedia['expanded_url'] . "'><img class ='twitter-media' style='max-width:100%' target ='_blank' src='" . $tweetMedia['media_url']. "'></a>";
  }

}
echo "<script>pageComplete();</script>"
?>

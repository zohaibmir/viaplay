<?php

$imdb = substr($_GET['imdb'],2);
$upcoming = simplexml_load_file("http://api.traileraddict.com/?imdb=$imdb");
$response = array();
foreach ($upcoming->trailer as $x => $updates) {
    $response["success"] = 1;
    $response["trailer_id"] = $updates->trailer_id;    
}

echo json_encode($response);

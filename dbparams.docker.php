<?php

  function getDbParams() {
    $db_host = $_ENV["DB_HOST"];
    $db_name = $_ENV["DB_NAME"];
    $db_user = $_ENV["DB_USER"];
    $db_pass = $_ENV["DB_PASSWORD"];
    $db_port = $_ENV["DB_PORT"];
    return ("host=" . $db_host . " dbname=" . $db_name . " user=" . $db_user . " password=" . $db_pass . " port=" . $db_port);

  }

?>

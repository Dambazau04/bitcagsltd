<?php
$conn = new mysqli("localhost", "root", "", "payroll_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $price = $_POST['price'];

    $sql = "INSERT INTO services (name, price) VALUES ('$name', '$price')";

    if ($conn->query($sql) === TRUE) {
        header("Location: admin.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>

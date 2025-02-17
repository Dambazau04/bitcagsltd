<?php
$conn = new mysqli("localhost", "root", "", "payroll_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $conn->query("DELETE FROM services WHERE id=$id");
    header("Location: admin.html");
}
?>

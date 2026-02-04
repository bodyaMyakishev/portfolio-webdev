<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = htmlspecialchars($_POST["name"] ?? "");
    $phone    = htmlspecialchars($_POST["phone"] ?? "");
    $service  = htmlspecialchars($_POST["service"] ?? "");
    $date     = htmlspecialchars($_POST["date"] ?? "");

    if (empty($name) || empty($phone) || empty($date)) {
        echo "<h2>Ошибка</h2>";
        echo "<p>Пожалуйста, заполните все обязательные поля.</p>";
        exit;
    }

    // Здесь можно добавить отправку на почту или в базу
    // Например:
    // mail("admin@carwash.ru", "Новая заявка", "Имя: $name\nТелефон: $phone\nУслуга: $service\nДата: $date");

    echo "<h2>Спасибо за заявку!</h2>";
    echo "<p>Мы свяжемся с вами по телефону <strong>$phone</strong> для подтверждения записи.</p>";
} else {
    header("Location: index.html");
    exit;
}
?>

function formatDate(date) {
    // Получаем название месяца
    const monthNames = [
        "января", "февраля", "марта",
        "апреля", "мая", "июня", "июля",
        "августа", "сентября", "октября",
        "ноября", "декабря"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Добавляем нули перед однозначными числами
    day = ("0" + day).slice(-2);
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);

    return `${day} ${monthNames[monthIndex]} ${year} г. ${hours}:${minutes}`;
}
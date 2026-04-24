var testScore = Number(prompt("Введите баллы за тест (0-50):"));
var homeworkScore = Number(prompt("Введите баллы за домашку (0-30):"));
var attendanceScore = Number(prompt("Введите баллы за посещаемость (0-20):"));

if (isNaN(testScore) || isNaN(homeworkScore) || isNaN(attendanceScore)) {
    console.log("Ошибка: Введите число");
} else if (testScore < 0 || testScore > 50 || homeworkScore < 0 || homeworkScore > 30 || attendanceScore < 0 || attendanceScore > 20) {
    console.log("Ошибка: Неверные баллы");
} else {
    var totalScore = testScore + homeworkScore + attendanceScore;
    var grade = "";

    if (totalScore >= 90) {
        grade = "Отлично";
    } else if (totalScore >= 75) {
        grade = "Хорошо";
    } else if (totalScore >= 60) {
        grade = "Удовлетворительно";
    } else {
        grade = "Неудовлетворительно";
    }

    console.log("Общий балл: " + totalScore);
    console.log("Итоговая оценка: " + grade);
}

    console.log("Общий балл: " + totalScore);
    console.log("Итоговая оценка: " + grade);

var numbers = [5, 12, 8, 130, 44, 2, 9];

var sum = 0;
var max = numbers[0];
var min = numbers[0];
var countMoreThanTen = 0;

console.log("Числа больше 10:");

for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];

    if (numbers[i] > 10) {
        console.log(numbers[i]);
        countMoreThanTen = countMoreThanTen + 1;
    }

    if (numbers[i] > max) {
        max = numbers[i];
    }

    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("Сумма всех чисел: " + sum);
var maxMinResult = "Максимальное: " + max + ", Минимальное: " + min;
console.log(maxMinResult);
console.log("Количество чисел больше 10: " + countMoreThanTen);
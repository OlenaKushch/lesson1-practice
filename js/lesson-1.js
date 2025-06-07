// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

/* const result = prompt('Введіть число від 1 до 10'); */

/* const number = Number(prompt('Введіть число від 1 до 10'));
if (number === 10) {
    alert('Вірно')
}
    else {
    alert('Невірно')
    } */
    
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

/* const min = Math.floor(Math.random() * (59 - 0) + 0);

if (min >= 0 && min <= 14) {
    alert(`${min} входить в першу чверть`);
}
else if (min >= 15 && min <= 29) {
    alert(`${min} входить в другу чверть`);
}
else if (min >= 30 && min <= 44) {
    alert(`${min} входить в третю чверть`);
}
else if (min >= 45 && min <= 59) {
    alert(`${min} входить в четверту чверть`);
}
 */

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples


const userAnswer = Number(prompt('Введіть кількість хвилин для форматування'));

const result = formatTime(userAnswer);

console.log(result);
function formatTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const modifiedHours = String(hours).padStart(2, "0");
    const minutes = totalMinutes % 60;
    const modifiedMinutes = String(minutes).padStart(2, "0");

    return `${modifiedHours}:${modifiedMinutes}`
    
}
Модуль по React.js

Опис проекту
Ваше додаток отримує json, як у sdks.json (додається), і заповнює його у вигляді, подібне
до наступного макета. Вам не потрібно реалізувати HTTP-завантаження, просто
розробляйте навколо sdks.json, як є.

1. Вид має 2 окремі панелі: панель фільтра ліворуч та результати фільтрування
справа. Кожна панель прокручується.
2. На лівій панелі є 3 види фільтрів:
(а) фільтр пошуку, якщо вибрано, відображатимуться лише результати з
заголовком, що містить пошукові терміни. Результати оновлюються при кожному
натисканні клавіші.
(б) "усі", коли вони обрані, відображаються всі результати
(в) теги, згруповані з sdks.json та сортуються за алфавітом, коли вони обрані, у
результатах відображаються тільки sdks з цим тегом
3. Фільтри є ексклюзивними, вибрати один з них скасовує вибір інших
4. Кожен елемент результату містить назву та групу міток. Вони відображаються в
правій панелі в алфавітному порядку.

Вимоги
1. Основна документація
2. Використовуйте React 16.4
3. Використовуйте мову попередньої обробки CSS
4. Великий плюс тестування з Jest та Enzyme
5. Це має бути написано в ES6
6. Це повинен бути проект npm, (webpack) create-react-app
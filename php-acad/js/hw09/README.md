1. Создать документ с 3 элементами div, а у каждого элемента еще по 2 дочерних элемента (должны присутствовать p, ul, li, комментарии и текст).
    Написать код, который: получит элемент HEAD, получит UL, получит все дочерние элементы P, получит соседние узлы комментариев.
2. В документе table.html (https://deutsche-it-schule.com.ua/webroot/uploads/p/p18/task/table.html) найти (получить в переменную):
    Все элементы label внутри таблицы. Должно быть 3 элемента.
    Первую ячейку таблицы (со словом "Возраст").
    Вторую форму в документе.
    Форму с именем search, без использования её позиции в документе.
    Элемент input в форме с именем search. Если их несколько, то нужен первый.
    Элемент с именем info[0], без точного знания его позиции в документе.
    Элемент с именем info[0], внутри формы с именем search-person.
3. Напиcать функцию showNotification(options), которая показывает уведомление, пропадающее через 2 сек.
    * Показывает уведомление, пропадающее через 2 сек:
    * @param options.top {number} вертикальный отступ, в px
    * @param options.right {number} правый отступ, в px
    * @param options.сolor {string} строка цвета
    * @param options.className {string} CSS-класс
    * @param options.html {string} HTML-текст для показа
4. Дан узел DOM(в хтмл создать div). Сделать функции hasClass(node, klass), addClass(node, klass), removeClass(node, klass), которые позволяют проверить, есть ли у элемента заданный CSS-класс, добавить к нему класс (если его еще нет) и удалить класс. Если удалены все классы, то удалять аттрибут class="" не надо, пусть остается.
5. Сделать таблицу 10х10 только JSом.
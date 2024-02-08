// Задача 1: Сортировка объектов по возрастанию свойства
// Текст задачи: У вас есть массив объектов, каждый из которых представляет собой человека с полями "имя" и "возраст". Напишите функцию на TypeScript, которая сортирует этот массив по возрастанию возраста.
const humans = [
    { name: 'Эмма', age: 21 },
    { name: 'Оливия', age: 5 },
    { name: 'София', age: 18 },
    { name: 'Ава', age: 19 },
    { name: 'Изабелла', age: 10 }
];
function sortByAge(people) {
    return people.sort((a, b) => a.age - b.age);
}
console.log(sortByAge(humans));
// Задача 2: Фильтрация объектов по условию
// Текст задачи: У вас есть массив объектов, представляющих товары в интернет-магазине. Напишите функцию, которая фильтрует товары по заданной цене (например, все товары, дешевле 50 долларов).
const products = [
    { id: 1, title: 'MacBook Pro', price: 1299.99 },
    { id: 2, title: 'iPhone 13', price: 799.00 },
    { id: 3, title: 'Sony WH-1000XM4', price: 349.99 },
    { id: 6, title: 'Wireless Mouse', price: 24.99 },
    { id: 7, title: 'Smart Plug', price: 19.99 }
];
function allCheapProducts(product) {
    return product.filter((prod) => prod.price < 50);
}
console.log(allCheapProducts(products));
// Задача 3: Поиск объекта по значению свойства
//Текст задачи: У вас есть массив объектов, представляющих книги. Напишите функцию, которая находит книгу по её названию.
const library = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
];
function bookByAuthor(author) {
    return library.filter(book => book.author === author);
}
console.log(bookByAuthor('Jane Austen'));
// Задача 4: Вычисление суммы значений свойства объектов
// Текст задачи: У вас есть массив объектов, представляющих продукты с полем "цена". Напишите функцию, которая вычисляет общую сумму цен продуктов.
const shop = [
    { id: 1, title: 'milk', price: 1 },
    { id: 2, title: 'bread', price: 2 },
    { id: 3, title: 'eggs', price: 3 },
    { id: 4, title: 'cheese', price: 4 },
    { id: 5, title: 'yogurt', price: 2.5 }
];
function sumAllProducts(products) {
    let totalPrice = 0;
    for (let produt of products) {
        totalPrice += produt.price;
    }
    return totalPrice;
}
console.log(sumAllProducts(shop));
// Задача 5: Обновление значения свойства объекта
// Текст задачи: У вас есть массив объектов, представляющих студентов с полями "имя" и "оценка". Напишите функцию, которая обновляет оценку студента по его имени. Функция получает в качестве аргументов имя студента и новую оценку.
const school = [
    { name: 'John', grade: 12 },
    { name: 'Alice', grade: 11 },
    { name: 'Michael', grade: 10 },
    { name: 'Emily', grade: 9 },
    { name: 'David', grade: 11 }
];
function updateGradeOfStudent(name, newGrade) {
    for (let student of school) {
        if (student.name === name) {
            student.grade === newGrade;
        }
    }
    return;
}
console.log('David', 5);
// Задача 6: Подсчет количества объектов по условию
// Текст задачи: У вас есть массив объектов, представляющих заказы с полем "статус" (например, "в обработке" или "доставлено"). Напишите функцию, которая подсчитывает количество заказов с определенным статусом.
const orders = [
    { id: 1, title: 'milk', status: 'delivered' },
    { id: 2, title: 'bread', status: 'processing' },
    { id: 3, title: 'eggs', status: 'delivered' },
    { id: 4, title: 'cheese', status: 'processing' },
    { id: 5, title: 'yogurt', status: 'delivered' }
];
function statusTheProducts(array) {
    let totalDelivered = 0;
    let totalProcessing = 0;
    for (let order of array) {
        if (order.status === 'delivered') {
            totalDelivered++;
        }
        if (order.status === 'processing') {
            totalProcessing++;
        }
    }
    return { totalDelivered, totalProcessing };
}
console.log(statusTheProducts(orders));
// Задача 7: Поиск максимального значения свойства объекта
// Текст задачи: У вас есть массив объектов, представляющих товары с полем "цена". Напишите функцию, которая находит товар с максимальной ценой. Если таких товаров несколько, верните первый.
const myOrder = [
    { id: 1, title: 'milk', price: 1 },
    { id: 2, title: 'bread', price: 2 },
    { id: 3, title: 'eggs', price: 3 },
    { id: 4, title: 'cheese', price: 4 },
    { id: 5, title: 'yogurt', price: 2.5 }
];
function maxPrice(products) {
    let maxPrice = 0;
    for (let product of products) {
        if (product.price > maxPrice) {
            maxPrice = product.price;
        }
    }
    return maxPrice;
}
console.log(maxPrice(myOrder));
// Задача 8: Фильтрация объектов по нескольким условиям
// Текст задачи: У вас есть массив объектов, представляющих автомобили с полями "марка" и "год выпуска". Напишите функцию, которая фильтрует автомобили по марке и году выпуска.
const cars = [
    { id: 1, brand: 'Toyota', year: 2018 },
    { id: 2, brand: 'Honda', year: 2019 },
    { id: 3, brand: 'Ford', year: 2020 },
    { id: 4, brand: 'BMW', year: 2017 },
    { id: 5, brand: 'Mercedes', year: 2021 }
];
function filterCarByBrandAndYear(brand, year) {
    return cars.filter(car => car.brand === brand && car.year === year);
}
console.log(filterCarByBrandAndYear('Mercedes', 2021));
// Задача 9: Объединение двух массивов объектов
// Текст задачи: У вас есть два массива объектов с одинаковой структурой. Напишите функцию, которая объединяет эти массивы в один.
const dadOrder = [
    { id: 1, title: 'milk', price: 1 },
    { id: 2, title: 'bread', price: 2 }
];
const momOrder = [
    { id: 3, title: 'eggs', price: 3 },
    { id: 4, title: 'cheese', price: 4 },
    { id: 5, title: 'yogurt', price: 2.5 }
];
function mergeArrays(array1, array2) {
    return array1.concat(array2);
}
console.log(mergeArrays(dadOrder, momOrder));
export {};

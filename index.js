// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let htmlDiv = document.createElement('div');
htmlDiv.setAttribute('class', 'wrap collapse alpha beta');
document.body.append(htmlDiv);
htmlDiv.style.height = '100px';
htmlDiv.style.width = '500px';
htmlDiv.style.background = 'green';
htmlDiv.innerText = '^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v^v';
document.body.append(htmlDiv.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let Arr = ['Main','Products','About us','Contacts'];
for (const index of Arr){
    const elementsMenu = document.getElementsByClassName('menu');
    let htmlli = document.createElement('li');
    htmlli.innerText = index;
    document.appendChild(htmlli);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const element of coursesAndDurationArray){
 let div = document.createElement('div');
    div.innerHTML = `${element}`;
 }

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const element of coursesAndDurationArray2){
    let div = document.createElement('div');
    div.className = 'item';
    let htmlHeadingElement = document.createElement('h1');
    htmlHeadingElement.className = 'heading';
    htmlHeadingElement.innerText = element.title;
    let htmlParagraphElement = document.createElement('p');
    htmlParagraphElement.className = 'description';
    htmlParagraphElement.innerText = element.monthDuration;
}
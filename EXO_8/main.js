let student = {
    name: 'Ugo',
    favoriteFood: 'Duck',
    city: 'La Heunière'
};

let number = student.name.length + student.favoriteFood.length + student.city.length;

if (number%2==0) {
    console.log('pair');
} else {
    console.log('impair');
};
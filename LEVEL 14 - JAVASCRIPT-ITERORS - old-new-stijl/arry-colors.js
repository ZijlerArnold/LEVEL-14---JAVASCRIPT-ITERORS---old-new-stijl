console.log('');
console.log('            Iterators - oude en nieuwe stijl');
console.log('           ====================================');
console.log('');
console.log('Oude stijl loops:');
console.log('');
//==================== Opdracht: Iterators - oude en nieuwe stijl ================================
const colors = ['yellow', 'blue', 'red', 'orange'];
i = 0;

// While Loop
console.log('- While loop');

while (i < colors.length) {
    console.log(colors[i]);
    i++;
}
console.log('');

// For Loop
console.log('- For loop');

for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    console.log(element);
}
console.log('===========================');
console.log('');
console.log('array methods:');
console.log('');
console.log('- forEach');

colors.forEach(color => console.log(color));
console.log('');

// Both the While and the for loop takes 3 lines, ForEch takes only one line of code.
console.log('Both the While and the for loop takes 3 lines, ForEch only takes one line of code.');
console.log('I find ForEach easy to read');
console.log('');
console.log('Looping through the properties of an object:');
console.log('');

// Object gieForce
const gieForce = [
    {
        rang: 1,
        name: 'Mark',
        gender: 'Male',
        rol: 'Commandor of Gie-Force'
    },
    {
        rang: 2,
        name: 'Jason',
        gender: 'Male',
        rol: 'Seccond Commandor of Gie_Force'
    },
    {
        rang: 3,
        name: 'Princess',
        gender: 'Female',
        rol: 'Third Commandor of Gie-Force'
    },
    {
        rang: 4,
        name: 'Keyop',
        gender: 'Male',
        rol: 'Youngest member of Gie-Force'
    },
    {
        rang: 5,
        name: 'Tiny',
        gender: 'Male',
        rol: 'Pilot of Gie-Force'
    }
];

gieForce.forEach(gUnit => console.log(gUnit));
console.log('');



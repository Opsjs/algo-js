let a = 'Jean';
let b = 'Paul';

function CheckNames(Name1, Name2) {
    if (Name1==Name2) {
        return true;
    } else {
        return false;
    };
};
let result = CheckNames(a, b);
console.log(result)
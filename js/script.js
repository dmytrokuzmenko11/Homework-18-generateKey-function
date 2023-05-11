

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


// function

function generateKey(length, characters) {
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters[getRandom(0, characters.length - 1)];
    };

    return result;
}

// function 

function getRandom(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));   
}


///////////// 
const key = generateKey(5, characters);
///////////// 


console.log(key);

document.write(`
    <div class = 'wrapper'>
        <p>${key}</p>
    </div>
`);
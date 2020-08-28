document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    let input = document.querySelector("#input") 
    let submit = document.querySelector("#submit") 

    submit.addEventListener('click', (event) => {
        event.preventDefault()
        almostPalindrome(input.value)
        input.value = ''
    });
    
});

function reverseString(string) {
    return string.split("").reverse().join("")
}

function almostPalindrome(string) {

    let reversedString = reverseString(string)

    if (string == reversedString) {
        return printAnswer(true)
    }

    let i = 0
    let missedChar = 0

    console.log(`string: ${string}, rString: ${reversedString}`)

    while (i < string.length) {
        console.log(string[i] + ":" + reversedString[i])
        if (string[i] != reversedString[i]) {  // if they don't match
            missedChar += 1 
            console.log(missedChar) 
        }
    i++
    }

    // return missedChar == 1 || missedChar == 0

    console.log(missedChar)

    if (missedChar <= 1) {
        return printAnswer(true)
    } else {
        printAnswer(false)
    }

}

function printAnswer(answer) {
    let result = document.querySelector("#result")
    result.innerText = answer
}
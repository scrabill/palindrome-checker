document.addEventListener('DOMContentLoaded', (event) => {

    let input = document.querySelector("#input") 
    let submit = document.querySelector("#submit") 

    submit.addEventListener('click', (event) => {
        event.preventDefault()
        if (input.value == "") {
            alert("You did not enter any text. Try again.")
        } else {
            isPalindrome(input.value)
            input.value = ''
        }
    });
    
});

function reverseString(string) {
    return string.split("").reverse().join("")
}

function isPalindrome(string) {

    let reversedString = reverseString(string)

    if (string == reversedString) {
        return printAnswer(string, true)
    } else {
        return printAnswer(string, false)
    }

}

function printAnswer(string, answer) {
    let result = document.querySelector("#result")
    let output = `${answer}: ${string} is `
    
    if (answer == true) {
        output += "a palindrome"
    } else {
        output += "not a palindrome"
    }
    result.innerText = output
}
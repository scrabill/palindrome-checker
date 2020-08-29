# palindrome checker

I was recently working on an palindrome problem when it occured to me that my approach was off.

For those who may not know, a palindrome is a word or sentence that reads the same backwards in forwards. Some common, simple examples are "racecar" "lion oil" and my personal favorite "tacocat". 

Writing a function to confirm if a given string is a palidrome is relatively straight forward. 

The following function will return `true`, if the string is a palindrome and `false` if it is not.

```javascript

function isPalindrome(string) {
    return string === string.split("").reverse().join("")
}

```
With the above code, `isPalindrome("tacocat")` is expected to return `true`. While `isPalindrome("pizzacat")` would return false. 

Cool. 

But what makes a string *almost* a palidrome?

In this case, if removing exactly *one* character from a given string makes it a palidrome, then an `almostPalidrome` function should return `true`. Both `tacocats` and `tacoscat` are almost palindromes, since the `s` can be removed in either case to make it a true palidrome. But, `xtacocats` would be `false` since the `x` and `s` would have to be removed.

Initally, I had the thought that if I compared the charcters at the end and beginning of the string to each other, if they did not match, *more than one time* then the string is not an `almostPalidrome`. 

My pseudocode looks something like this:

```javascript
while i is smaller than the length of the input string 
    start looking at each character, starting at the either end
    if the characters DO NOT match
        increment missed char by 1
when the entire string has been evaluated, return true, if missed char is <= 1
    else return false
```

Depending on the characters in the string and where the unmatched characters are, even if more than one pair does not match, it could still be a `almostPalidrome`. Here's a quick example:

If our string is `abcxcbxa`, with each pass of the while loop, it's comparing the following characters. 

```javascript

`a` == `a` // matches!
`b` != `x` // 1st unmatched character pair
`c` != `b` // 2nd unmatched character pair
`x` != `c` // 3rd unmatched character pair

```
It happens to work out, that even though `abcxcbxa` has 3 unmatched character pairs. If the second `x` is removed (the character located at index `7`), the string `abcxcba` is a palidrome!

At this point, while my approach is on the right track, it's not entirely accurate. It returns the correct result in most cases (likely, common palidromes using dictionary words) but not *all* cases.

To build on what I already have, my next thought is to write a function that looks at the given string, *minus* either of the unmatched characters, to see if the remainder could be a palidrome. If this additional check returns `true` the whole string should be an almost palidrome. If it returns `false`, I'll likely have to look at the next unmatched pair (if there is one) and repeat the process. This also has me thinking if a string with one unmatched character pair will *always* be a palidrome. 

I am currently experimenting to see if my thoughts on this are correct and if can be done recursively. It's a balance between finding the right edge cases to account for and having code that maintainable and easy to read. 

In the meantime, enjoy this very simple webpage that confirm if the input string is a true palindrome or not. 

> [shannoncrabill.com/palindrome-checker/](http://shannoncrabill.com/palindrome-checker/)

![Screenshot of palindrome checker](/palindrome-checker-preview.png)
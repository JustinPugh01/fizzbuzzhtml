function input(n) {
    const number = new FormData(n)
    const num = number.get("Number")
    sequence=[]

    for (let i = 1; i <= num; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            renderresult("FizzBuzz")

        }
        else if (i % 3 === 0) {
            renderresult("Fizz")

        }
        else if (i % 5 === 0) {
            renderresult("Buzz")

        }
        else {
            renderresult(i)
        }
    }

}
let sequence = [];

function renderresult(value) {

    let addvalue = sequence.push(value)

    const resultmessage = document.getElementById("result")
    resultmessage.innerHTML = sequence.join()
}




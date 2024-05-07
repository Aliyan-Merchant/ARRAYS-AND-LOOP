let tableOf = +prompt("Enter a number to show its multiplication table")
let tablelength = +prompt("Enter length of multiplication table")

document.write(`Multiplication table of ${tableOf} <br>
Length ${tablelength} <br> 
<br>`)

for (var i = 0; i <= tablelength; i++) {
    document.write(`${tableOf} X ${i} = ${tableOf * i} <br>`)
    }



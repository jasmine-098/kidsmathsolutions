var question = prompt(` Which one would you like to choose?
 1) FORWARD COUNTING
 2) BACKWARD COUNTING
 3) TABLES `)

 if(question.toLowerCase() === 'forward counting'){

    var startno = +prompt("Enter the start number?");
    var endno = +prompt("Enter the end number?");

    for (var i = startno; i <= endno; i += 10) {
          for (var j = i; j < i + 10; j++) {
            document.write("     " + j + "     ")
        }
        document.write("</br>")
    }
}

if(question.toLowerCase() === 'backward counting'){

    var startno = +prompt("Enter the start number?");
    var endno = +prompt("Enter the end number?");

    for (var i = startno; i >= endno; i -= 10) {
          for (var j = i; j > i - 10 && j >= endno; j--) {
            document.write("     " + j + "     ")
        }
        document.write("</br>")
    }
}

if(question.toLowerCase() === 'tables'){
    var tableof = +prompt("Which table do you want?")

    for (var i = 1; i < 11; i++) {
        document.write(tableof + "  X  " + i + " = " + (tableof * i) + "</br>")
    }
}





 
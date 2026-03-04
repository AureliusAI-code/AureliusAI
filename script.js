const lines = [

"> Initializing Aurelius Core...",
"> Loading philosophical reasoning modules...",
"> Connecting stoic inference engine...",
"> Wisdom layer activated",
"",
"> Query: What defines intelligence?",
"",
"Aurelius:",
"Intelligence without wisdom is noise.",
"Understanding requires patience.",
"Clarity requires reflection.",
"",
"Aurelius ready."

]

let i = 0
let j = 0

const speed = 35

const output = document.getElementById("terminal-output")

function type(){

if(i < lines.length){

if(j < lines[i].length){

output.innerHTML += lines[i].charAt(j)

j++

setTimeout(type,speed)

}else{

output.innerHTML += "<br>"

j = 0

i++

setTimeout(type,400)

}

}

}

type()

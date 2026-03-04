const canvas = document.getElementById("network")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,

vx:(Math.random()-0.5)*0.6,
vy:(Math.random()-0.5)*0.6

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x+=p.vx
p.y+=p.vy

if(p.x<0||p.x>canvas.width) p.vx*=-1
if(p.y<0||p.y>canvas.height) p.vy*=-1

ctx.beginPath()

ctx.arc(p.x,p.y,2,0,Math.PI*2)

ctx.fillStyle="#d4af37"

ctx.fill()

})

for(let i=0;i<particles.length;i++){

for(let j=i+1;j<particles.length;j++){

let dx=particles[i].x-particles[j].x
let dy=particles[i].y-particles[j].y

let dist=Math.sqrt(dx*dx+dy*dy)

if(dist<120){

ctx.strokeStyle="rgba(212,175,55,0.15)"

ctx.beginPath()

ctx.moveTo(particles[i].x,particles[i].y)
ctx.lineTo(particles[j].x,particles[j].y)

ctx.stroke()

}

}

}

requestAnimationFrame(draw)

}

draw()



/* TERMINAL */

const lines=[

"> Initializing Aurelius Core...",
"> Loading philosophical reasoning modules...",
"> Connecting stoic inference engine...",
"> Wisdom layer activated",
"",
"Aurelius ready."

]

let i=0
let j=0

const output=document.getElementById("terminal-output")

function type(){

if(i<lines.length){

if(j<lines[i].length){

output.innerHTML+=lines[i].charAt(j)

j++

setTimeout(type,35)

}else{

output.innerHTML+="<br>"

j=0
i++

setTimeout(type,400)

}

}

}

type()

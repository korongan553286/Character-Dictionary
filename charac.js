let characters = JSON.parse(localStorage.getItem("characters")) || []

let editingIndex = null

const list = document.getElementById("characterList")
const modal = document.getElementById("modal")

const nameInput = document.getElementById("name")
const powerInput = document.getElementById("power")
const groupInput = document.getElementById("group")

const modalTitle = document.getElementById("modalTitle")

function saveToStorage(){
localStorage.setItem("characters", JSON.stringify(characters))
}

function render(){

list.innerHTML=""

characters.forEach((char,index)=>{

let card=document.createElement("div")
card.className="character-card"

card.innerHTML=`

<div class="character-info">
<h3>${char.name}</h3>
<p>${char.power}</p>
<span>${char.group}</span>
</div>

<div>
<button onclick="editCharacter(${index})">Edit</button>
<button onclick="deleteCharacter(${index})">Delete</button>
</div>

`

list.appendChild(card)

})

}

document.getElementById("createBtn").onclick=()=>{

editingIndex=null

modalTitle.innerText="Create Character"

nameInput.value=""
powerInput.value=""
groupInput.value=""

modal.style.display="flex"

}

document.getElementById("cancelBtn").onclick=()=>{
modal.style.display="none"
}

document.getElementById("saveBtn").onclick=()=>{

let name=nameInput.value
let power=powerInput.value
let group=groupInput.value

if(name==="") return

let character={
name:name,
power:power,
group:group
}

if(editingIndex===null){

characters.push(character)

}else{

characters[editingIndex]=character

}

saveToStorage()
render()

modal.style.display="none"

}

function deleteCharacter(index){

characters.splice(index,1)

saveToStorage()
render()

}

function editCharacter(index){

editingIndex=index

let char=characters[index]

nameInput.value=char.name
powerInput.value=char.power
groupInput.value=char.group

modalTitle.innerText="Edit Character"

modal.style.display="flex"

}

render()
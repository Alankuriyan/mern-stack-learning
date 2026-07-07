

function addnote(){
 const note = document.createElement('div')
 note.className = " note"
 note.textContent = "";
 const conatainer = document.getElementById("note-container")
 conatainer.append(note)
 const textarea =  document.createElement('input')
 textarea.id = "inputfeild"
 textarea.placeholder = "write here"
 note.appendChild(textarea)
 const save = document.createElement('button')
 save.textContent="save"
 save.onclick = savefunction;
 note.appendChild(save)
 function savefunction(){
   
   
    const obj ={
        id :  Date.now(),
        message : textarea.value
    }

   const arr = JSON.parse(localStorage.getItem("mess")) ||[]
    arr.push(obj);
   localStorage.setItem("mess", JSON.stringify(arr))

   let output = ""
   for(let x of arr)
   {
        console.log(x.message,x.id)
           output += x.id + x.message + "<br>";
           note.className = "note";

    note.dataset.id = x.id;
   }
    
   document.getElementById('display').innerHTML = output
       
       
}
 

}
function loadnote (){
   
    const conatainer = document.getElementById("note-container");
    const arra = JSON.parse(localStorage.getItem("mess")) || [];
    for(let x of arra){
       const oldnote =  document.createElement("div")
       oldnote.className ="note"
       oldnote.dataset.id = x.id
        const inp = document.createElement("input")
        inp.value = x.message
        const save2 = document.createElement('button')
 save2.textContent="save"

 
        conatainer.append(oldnote)
    oldnote.appendChild(inp)
    oldnote.appendChild(save2)
    }
    
}
loadnote()



function addnote(){
 const note = document.createElement('div')
 note.className = " note"
 note.textContent = "note"
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
}
 
}

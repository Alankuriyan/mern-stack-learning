
const inp = document.getElementById("inp1")
inp.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
    additem();
}
})
function additem(text){

  const temp = text|| document.getElementById("inp1").value
  if (temp.trim() === ""){ return}
  const list = document.createElement("li")
  list.textContent = temp
  const deletebtn = document.createElement("button")
  deletebtn.textContent="delete"
  deletebtn.onclick=dele
  
  document.getElementById("listitems").appendChild(list)
  list.appendChild(deletebtn)
function dele(){
     document.getElementById("listitems").removeChild(list) 
     save();
  };
  document.getElementById("inp1").value = "";
  save();
}

function save(){
const memory=[];

    const loc = document.querySelectorAll("li")
    for(let i=0 ; i<loc.length;i++)
    {
        let items = loc[i]
        memory.push(items.textContent.replace(/delete$/,""));
    }
localStorage.setItem("tasks",JSON.stringify(memory))
}
function getdata(){
const saveddata = localStorage.getItem("tasks")
if ( saveddata != null){
    let temp2 = JSON.parse(saveddata)
        for(let i=0;i<temp2.length;i++){
    
        additem(temp2[i])
}
    

}
}
getdata();
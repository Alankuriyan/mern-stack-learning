function clearDisplay(){
    document.getElementById('inp1').value = ""
    
}
function appendValue(n){
    document.getElementById('inp1').value+= n;
}

function calculate(){
    try{
     let con = document.getElementById("inp1").value
     let  result  = new Function("return " + con )()
     document.getElementById("result").textContent = result;
    }
    catch{
    console.log("error")
}
}
 function slicea() {
    let temp = document.getElementById("inp1").value
    let newt = temp.slice(0,-1)
    document.getElementById("inp1").value = newt
 } 



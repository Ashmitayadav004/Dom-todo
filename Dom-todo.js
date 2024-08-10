let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    console.log(inp.value);
    inp.value = "";
});

// let dlbtns=document.querySelectorAll(".delete");
// for(dlbtn of dlbtns){
//     dlbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

ul.addEventListener("click",function(event){
    console.log(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});











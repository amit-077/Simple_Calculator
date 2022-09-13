let data = ""

document.querySelectorAll(".btn").forEach(function(btn){
  btn.addEventListener("click",function(e){
    if(e.target.innerHTML == "x"){
      data=data+"*";
    }
    else if (e.target.innerHTML == "=") {
      data = eval(data)
      console.log(data);
    }
    else{
    data = data + (e.target.innerHTML);
  }
    document.getElementById("display").value = data;
  })
})

document.addEventListener("keypress",function(evt){
  let pressed = evt.key;
  console.log(pressed);
  for(let i=0;i<10;i++){
    if(pressed == i){
      document.querySelector(".btn-"+i).click();
    }
  }


})

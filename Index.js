
let ran

let btn = document.getElementById("btn")



btn.addEventListener("click",function(){
 ran =Math.floor(Math.random()*11)
 console.log(ran) 
 let foo = document.getElementById("Viwe")
 foo.textContent = ""


 for (let i=1 ; i<=ran ; i++ ){
// //  foo3.innerHTML = `<img src ="img2.png" width="60px">`
//  foo.appendChild(foo3.innerHTML =`<img src ="img2.png" width="60px">`)
let img = document.createElement('img')
img.className="dump"
img.src =`img2.png`
img.style.width = "80px"
document.getElementById("Viwe").appendChild(img)
}
})

let answerOne = document.getElementsByTagName("button")
answerOne[0].addEventListener("click",function(){
  if ( ran === 0){
    window.alert("せいかい‼‼")
  }else{
    window.alert("ちがうよ！")
  }
})

answerOne[1].addEventListener("click",function(){
  if ( ran === 1){
    window.alert("せいかい‼‼")
  }else{
    window.alert("ちがうよ！")
  }
})

answerOne[2].addEventListener("click",function(){
  if ( ran === 2){
    window.alert("せいかい‼‼")
  }else{
    window.alert("ちがうよ！")
  }
})

answerOne[3].addEventListener("click",function(){
  if ( ran === 3){
    window.alert("せいかい‼‼")
  }else{
    window.alert("ちがうよ！")
  }
})

answerOne[4].addEventListener("click",function(){
  if ( ran === 4){
    window.alert("せいかい‼‼")
  }else{
    window.alert("ちがうよ！")
  }
})

answerOne[5].addEventListener("click",function(){
  if ( ran === 5){
    window.alert("せいかい‼‼")
  }else{
    window.alert("ちがうよ！")
  }
})

answerOne[6].addEventListener("click",function(){
  if ( ran === 6){
    window.alert("せいかい‼‼")
  }else{
    window.alert("ちがうよ！")
  }
})

answerOne[7].addEventListener("click",function(){
  if ( ran === 7){
    window.alert("せいかい‼‼")
  }else{
    window.alert("ちがうよ！")
  }
})

answerOne[8].addEventListener("click",function(){
  if ( ran === 8){
    window.alert("せいかい‼‼")
  }else{
    window.alert("ちがうよ！")
  }
})

answerOne[9].addEventListener("click",function(){
  if ( ran === 9){
    window.alert("せいかい‼‼")
  }else{
    window.alert("ちがうよ！")
  }
})

answerOne[10].addEventListener("click",function(){
  if ( ran === 10){
    window.alert("せいかい‼‼")
  }else{
    window.alert("ちがうよ！")
  }
})

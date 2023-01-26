const qopte = document.getElementById("qupte")

async function next(){
    
    const response = await fetch("https://api.quotable.io/random")
    const data = await response.json()
    console.log(data)
    qopte.innerHTML = ` 
    <div class="qu"><span>&#8220;</span>
    ${data.content}<span>&#8221;</span>
    </div>
    <div class="aut"> ~ ${data.author}</div> `
}
next()
function pilihanComp(){

    let nRandom = Math.round(Math.random() * 2)
    if(nRandom === 0) return 'gunting'
    if(nRandom === 1) return 'batu'
    if(nRandom === 2) return 'kertas'
}

let pilihanUser = document.querySelectorAll('.img-user img')
let imgComp = document.querySelector('.img-comp img')
let hasil = document.querySelector('.hasil')
let cScore = document.querySelector('.comp-score')
let uScore = document.querySelector('.user-score')
let userScore = 1
let compScore = 1


function gambarPutar(){
    let i = 0
    let gambar = ['gunting', 'batu', 'kertas']
    let waktu = new Date().getTime()
    setInterval(function(){
        if(new Date().getTime() - waktu > 1000){
            clearInterval
            return;
        }
        imgComp.setAttribute('src', `img/${gambar[i++]}.png`)
        if(i === 3){
            i = 0
        }
    

    },100)
}


pilihanUser.forEach(function(e){
    e.addEventListener('click',function(){
        let pilihan = this.className
        let comp = pilihanComp()
        gambarPutar()
        
        setTimeout(function(){
            imgComp.setAttribute('src', `img/${comp}.png`)

            if(pilihan === 'gunting'){
                if(comp === 'gunting'){
                   hasil.innerHTML = "SERI!!!"
                }else if(comp === 'kertas'){
                    hasil.innerHTML = "MENANG!!"
                    uScore.innerHTML = userScore++
                }else if(comp === 'batu'){
                    hasil.innerHTML = "KALAH!!"
                    cScore.innerHTML = compScore++
                }
            }
            else if(pilihan === 'batu'){
                if(comp === 'gunting'){
                    hasil.innerHTML = "MENANG!!!"
                    uScore.innerHTML = userScore++
                 }else if(comp === 'kertas'){
                     hasil.innerHTML = "KALAH!!"
                     cScore.innerHTML = compScore++
                 }else if(comp === 'batu'){
                     hasil.innerHTML = "SERI!!"
                 }
            }else if(pilihan === 'kertas'){
                if(comp === 'gunting'){
                    hasil.innerHTML = "KALAH!!!"
                    cScore.innerHTML = compScore++
                 }else if(comp === 'kertas'){
                     hasil.innerHTML = "SERI!!"
                 }else if(comp === 'batu'){
                     hasil.innerHTML = "MENANG!!"
                     uScore.innerHTML = userScore++
                 }
            }
        },1000)
            
    })
})

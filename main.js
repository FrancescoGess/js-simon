const dataDomani = new Date("jan 20, 2024 09:30:00").getTime()

console.log( dataDomani )

const countDown = setInterval ( function(){
    //data oggi
    const data = new Date().getTime()
    console.log ( data )

    let tempoMancante = dataDomani - data

    console.log ( tempoMancante )


    let ore = Math.floor(( tempoMancante % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) )
    let minuti = Math.floor(( tempoMancante % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) )
    let secondi = Math.floor(( tempoMancante % ( 1000 * 60 ) ) /  1000 )

    console.log ("ore: " + ore, "minuti: ", "secondi: " + secondi)

    if (tempoMancante < 0 ){
        clearInterval(countDown)
    }

}, 1000)
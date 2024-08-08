function generateQuote(){
    fetch('https://api.quotable.io/random').then (responce => responce.json()).then(data =>{
        const quote = `${data.content} - ${data.content}`
        document.getElementById('quote').innerHTML = quote
    })
}

generateQuote()
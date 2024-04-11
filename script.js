let wageInEur = 20
let exchangeRate = 24.55
let wageInCzk = Math.round(wageInEur * exchangeRate)

document.body.innerHTML =  "<h1>Mzda v korunách: " + wageInCzk + " Kč"
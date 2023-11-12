const temperature= 29
const velocidad= 5
const TWC= 35.74+(0.6215*temperature)-(35.75*velocidad+0.16)+(0.4215*temperature*velocidad+0.16)

document.getElementById('Clima').textContent=TWC
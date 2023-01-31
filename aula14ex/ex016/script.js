function contar() {
   var ini = document.getElementById('ini') 
   var fim = document.getElementById('fim')
   var passo = document.getElementById('pas')
   var res = document.getElementById('res')

   var i = Number(ini.value)
   var f = Number(fim.value)
   var p = Number(passo.value)

   for (var c = i; c <= f; c += p) {
    res.innerHTML += `${c} `
   }
}


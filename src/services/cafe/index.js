
export default function cafeMinimo (n,l,d){

d = d/1000    
let precisa = n * d
let qtd = 0
let a = 0

while (qtd <= precisa) {
    qtd = qtd + l
}
a = qtd
return a
}

let a =cafeMinimo( 2 , 1 ,20)
console.log(a)

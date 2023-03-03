function towerBuilder(f){

let c = 'o'
let o = ''
for(let i = 1; i <= f; i++){
    o = c.repeat(f - i);
    console.log(o)
}
return o
}
towerBuilder(3)


//f = 3; [1] = 'oo'
function towerBuilder(nFloors){
let t = '*'
let n = '**'
let resultt = [];
for(let i = 1; i <= nFloors; i++){
    if(i === 1){
        resultt.push(t);
    }else{
       t = t + n
       resultt.push(t);
    }
}
let c = ' '
let o = ''
let resulto = []
for(let i = 1; i <= nFloors; i++){
    o = c.repeat(nFloors - i);
    resulto.push(o);
}
let ot = ''
let result = [];
for(let i = 0; i < nFloors; i++){
    ot = resulto[i] + resultt[i] + resulto[i];
    result.push(ot)
}
return result

}
console.log(towerBuilder(3));
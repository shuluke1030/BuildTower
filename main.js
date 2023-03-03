function towerBuilder(nFloors) {
let t = '*'
let n = '**'
let result = [];
for(let i = 1; i <= nFloors; i++){
    if(i === 1){
        result.push(t);
    }else{
       t = t + n
       result.push(t);
    }
    
}
return result;
}

console.log(towerBuilder(3));
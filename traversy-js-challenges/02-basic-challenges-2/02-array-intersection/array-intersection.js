function arrayIntersection(ar1,ar2) {
    let arr=[]
    for(let i=0;i<ar1.length;i++){
        for(let y=0;y<ar2.length;y++){
            if(ar1[i]==ar2[y]){
                arr.push(ar1[i])
            }
        }
    }
    return arr
}

module.exports = arrayIntersection;

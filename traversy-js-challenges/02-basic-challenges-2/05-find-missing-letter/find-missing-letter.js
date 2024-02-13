function findMissingLetter() {
    for(let i=0;i<=len;i++){
        for(let j=0;j<=len;j++){
            if(arr[i]==arr[j]){
                for(x=0;x<=len;x++){
                    if(arr[i]==arr2[x]){
                        arr2[x]=0
                    }
                }
            }
        }
    }
            
            
        
}

module.exports = findMissingLetter;

function findMissingLetter() {
    len = arr.length
    let arr2=[]
    for(let x=0;x<=len;x++){
        arr2[x]=x+1
    }
    x=0
    
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
    for( x=0;x<=len;x++){
        if(arr2[x]!=0){
            return arr2[x]
        }
    }
            
            
        
}

module.exports = findMissingLetter;

function fizzBuzzArray(num) {
    let ar=[];
    let fb="";
    for(let i=1;i<=num;i++){
        if(i%3==0 && i%5==0){
            fb+="fizzbuzz"
            ar[i-1]=fb
        }
        else if(i%3==0){
            fb+="fizz"
            ar[i-1]=fb
        }
        else if(i%5==0){
            fb+="buzz"
            ar[i-1]=fb
        }
        else{
            ar[i-1]=i
        }
        
        fb = ""
    }
    return ar
}

module.exports = fizzBuzzArray;

function displayLikes(names) {

    len=names.length
    if(len==0){
        return "no one likes this"
    }
    else if(len==1){
        return `${names[0]} likes this`
    }
    else if(len==2){
        return `${names[0]} and ${names[1]}  likes this`
    }
    else if(len==3){
        return `${names[0]} , ${names[1]} and ${names[2]}  likes this`
    }
    else{
        return `${names[0]} , ${names[1]} and ${len-2}  likes this`
    }
}

module.exports = displayLikes;

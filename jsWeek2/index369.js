function sam(i){
    if(i % 3 == 0){
    console.log('박수')
    }
    else{
        console.log('통과')
    }
}

function upsam(i){
    if(i % 9 === 0){
        console.log('박수')
        console.log('박수')
    }
    else if(i % 3 === 0){
    console.log('박수')
    }
    else{
        console.log('통과')
    }
}

function eduWill(a,b){
    if(a<40 || b<40){
        console.log("과락")
    }
    else if(a+b >= 120){
        console.log("합격")
    }
    else{
        console.log("불합격")
    }
}
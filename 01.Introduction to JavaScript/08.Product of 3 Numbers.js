function productOfThreeNumbers(args) {

    let count = 0;

    for (let index = 0; index < args.length; index++) {
        if (Number(args[index]) < 0) {
            count++;         
        }
        if (Number(args[index]) === 0){
            return "Positive";
            return;
        }
        else{
            continue;
        }       
    }

    if (count % 2 === 0) {
        return "Positive";
    }
    else {
        return "Negative";
    }

}

console.log(productOfThreeNumbers(["-3", "-4", "5"]));
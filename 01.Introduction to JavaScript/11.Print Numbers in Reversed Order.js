function printInReversedOrder(args) {
    for (let index = args.length-1;index >=0; index--) {
        
        console.log(Number(args[index]));
    }
}

printInReversedOrder(["10", "15", "20"]);
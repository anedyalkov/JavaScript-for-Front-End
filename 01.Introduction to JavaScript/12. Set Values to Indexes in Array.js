function setValuesToIndexesOfArray(args) {

    var length = args[0];
    var array = [];
    for (let i = 0; i < length; i++) {
        array.push(0);
    }

    args.shift();
    for (let element of args) {
        var params = element.split(" ").map(x => x.trim());
        var index = Number(params[0]);
        var value = params[2];
        array[index] = value;
    }

    console.log(array.join("\n"));
}

setValuesToIndexesOfArray(["3", "0 - 5", "1 - 6", "2 - 7"]);
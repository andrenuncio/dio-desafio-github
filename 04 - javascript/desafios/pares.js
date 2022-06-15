function substituiPar(array) {
    if(!array) return -1;

    for (let i= 0; i < array.length; i++) {
        if(array[i] % 2 === 0) array[i] = 0;
    }
    return array;
}
console.log(substituiPar([1,2,3,4,5,6,7]))
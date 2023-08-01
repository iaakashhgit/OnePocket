const sumArrayInteger = (arr) => {
    let sum = 0
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

const res = sumArrayInteger([1, 2, 3, 4, 5])
console.log({ totalSum: res })
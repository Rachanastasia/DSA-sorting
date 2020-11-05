function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    console.log(start === middle ? `Checked against self ${array[start]} at arr[${start}]` : `Sort from ${array[start]} at arr[${start}] to ${array[middle]} at arr[${middle}]`)
    array = quickSort(array, start, middle);
    console.log(start === middle ? `Checked against self ${array[end]} at arr[${end}]` : `Sort from ${array[middle + 1]} at arr[${middle + 1}] to ${array[end]} at arr[${end}]`)
    array = quickSort(array, middle + 1, end)
    return array;
}

function partition(array, start, end) {
    const swap = (arr, s, e) => {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;

        return arr;
    }

    const pivot = array[end - 1];

    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {

            swap(array, i, j);
            j++
        }
    }
    console.log(`Compare ${array[j]} with pivot ${pivot}  at arr[${j}]`)
    swap(array, end - 1, j);
    console.log('array:', array)
    console.log('           ')

    return j;
}

module.exports = quickSort;
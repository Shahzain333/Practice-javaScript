function InsertionSort(arr) {

    for (let i = 0; i < array.length; i++) {
        let key = arr[i];  // 1
        let j = i-1;       // 0

        // 10 > 1
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];  // 1 = 10
            j = j-1;            // 0
            
            //console.log(j);

        }
        arr[j+1] = key;  // 0 = 1
    }
    return arr
}


const array = [10,1,50,7,2,45,3,76,4]

console.log("Sorted array:", InsertionSort(array));



















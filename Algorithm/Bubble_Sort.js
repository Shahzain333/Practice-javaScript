function bubbleSort(array){
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            if(array[j] > array[j + 1]){
                let temp;
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

        }
        
    }
    return array
}

const arr = [10,1,50,7,2,45,3,76,4]

console.log("Sorted array:", bubbleSort(arr));






















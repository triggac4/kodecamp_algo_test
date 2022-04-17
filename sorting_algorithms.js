function bubbleSort(arr){
    //loop through the array O(n)
    for(var i = 0; i < arr.length; i++){
        //nexted loop through the array O(n^2)
        //this has to be a O(n^2) because it's nested inside the outer loop
        for(var j = 0; j < arr.length - 1; j++){
            //if the element is greater than the next element swap them
            //and continues to the next element
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        //since no way to check to see if the array is sorted it continues looping...i can actually check if it's sorted
        //by adding like a boolean changed which is default false then change it to true when the array elements swaps
        //if it doesn't swap then it's sorted i break out of the loop
        //but it's not the best way to do it .... O(n^2) for this one
    }
    return arr;
}


function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    else{
        //constant time
        var mid=Math.floor(arr.length/2);
        //linear time but i'll call it constant time
        var left=arr.slice(0,mid);
        var right=arr.slice(mid);

        //lets go to merge function to know what time it takes 
        return merge(mergeSort(left.length?left:[]),mergeSort(right.length?right:[]));
        //after going through the merge function i give this a O(nlog(n))
    }
}

function merge(arr1,arr2){

    //only runs if the two array is not empty
    if(arr1.length&&arr2.length){
        let continueMerge=true;
        let result=[];
    //goes through all members of the shorter array O(n/2) at the initial then it reduces as the the array is divided further
        while(continueMerge){
            if(arr1[0]<arr2[0]){
                result.push(arr1.shift());
            }
            else{
                result.push(arr2.shift());
            }
            if(!arr1.length||!arr2.length){
                continueMerge=false;
            }
        }
        //ADDS THE REMAINING ELEMENTS
        //concat spreads the remaining elements so i'll give it about O(log(n))
        //one of this if statements won't run remember that
        if(arr1.length){
            result=result.concat(arr1);
        }
        if(arr2.length){
            result=result.concat(arr2);
        }
        return result;
    }
    else {
        //this is returning the none empty array
        return arr1.length?arr1:arr2;
    }
}
test1=[ 234, 43, 555, 63, 5, 6, 235, 547 ];




function quicksort(arr){

    //this stops the recursion if the array has 1 or less elements very important
    if(arr.length<2){
        return arr;
    }

    else{
    //pick a pivot so because we dont actually know the length of the array we only know it's 
    //length is greater than 1 so it's best to pick either 0 or the last element arr.length-1
        var pivot=arr[0];

    //created left and right arrays to store the elements that are less than the pivot and greater than the pivot
        var left=[];
        var right=[];
    
        for(var i=1;i<arr.length;i++){ //this alone is O(n)
    //if the element is less than the pivot push it to the left array
            if(arr[i]<pivot){
                left.push(arr[i]);
            }
    //if the element is greater than the pivot push it to the right array
            else{
                right.push(arr[i]);
            }
        }
    //keep sorting the left and right arrays by recursively calling quicksort
    // until elements are less than 2
    //this breaks the list into 2 and then through the half arrays combines all in all it won't reach n^2 i'll give it O(2n) 
    //because it's goes through the half array removing the pivot and then it's maybe O(2nlog(n)) not sure about this one
        return quicksort(left).concat(pivot,quicksort(right));  //this breaks the list into 2 and then
    }
}
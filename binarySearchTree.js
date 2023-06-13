function binarySearch (arr,target){
    leftIndex= 0
    rightIndex = arr.length-1
    while(leftIndex <= rightIndex ){
     let  middleIndex = Math.floor((leftIndex + rightIndex)/2)
    
  
      if(target === arr[middleIndex]){
        return middleIndex
      }
      if(target < arr[middleIndex] ){
        rightIndex = middleIndex - 1
      }else{
        
        leftIndex = middleIndex +1
      }
      
    }
    return -1
    
  }
  
  
  console.log(binarySearch([3,5,6,10,32],10))
  console.log(binarySearch([4,6,9,20,52],32))
  console.log(binarySearch([78,88,98,108,320],320))
class Heap {
    constructor() {
      this.arr = [];
    }
  
    heapify(arr, n, i) {
      let largest = i;
  
      let left = 2 * i + 1;
      let right = 2 * i + 2;
  
      if (left < n && arr[largest] < arr[left]) {
        largest = left;
      }
  
      if (right < n && arr[largest] < arr[right]) {
        largest = right;
      }
  
      if (largest != i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        this.heapify(arr, n, largest);
      }
    }
  
    insert(data) {
      this.arr.push(data);
      let i = this.arr.length - 1;
  
      while (i > 0) {
        let parent = Math.floor((i - 1) / 2);
  
        if (this.arr[parent] > this.arr[i]) {
          break;
        }
        let temp = this.arr[i];
        this.arr[i] = this.arr[parent];
        this.arr[parent] = temp;
  
        i = parent;
      }
    }
  
    remove() {
      let n = this.arr.length;
      if (n === 0) {
        return null;
      }
      let max = this.arr[0];
      this.arr[0] = this.arr[n - 1];
      this.arr.pop();
      this.heapify(this.arr, n, 0);
  
      return max;
    }
  
    heapSort() {
      const n = this.arr.length;
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.heapify(this.arr, n, i);
      }
  
      for (let i = n - 1; i > 0; i--) {
        let temp = this.arr[0];
        this.arr[0] = this.arr[i];
        this.arr[i] = temp;
        this.heapify(this.arr, i, 0);
      }
      return this.arr;
    }
  
    display() {
      console.log(this.arr);
    }
  }
  
  const heap = new Heap();
  
  heap.insert(23);
  
  heap.display();
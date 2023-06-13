class hashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total;
    for (let i = 0; i < key.length; i++) {
      total = key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);

  
   let bucket = this.table[index];
  
    if (!bucket) {
     
        this.table[index] = [[key, value]];
      
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return (sameKeyItem[1] = value);
      } else {
        bucket.push([key, value]);
      }
    }
   
  }

  get(key) {
    const index = this.hash(key);
    const bucket=this.table[index]
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    } else {
      return undefined;
    }
  }

  remove(key) {
    const index = this.hash(key);
    const bucket=this.table[index]
    if (bucket) {
      const findIndex = bucket.findIndex((item) => item[0] === key);
      if (findIndex) {
        bucket.splice(findIndex, 1);
      }
    }
  }

  display() {
    for (let i = 0; i <= this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new hashTable(40);

table.set("name", "munavir");
table.set("mane", "eeeeeeeee");
table.set("age", "12");
table.set("subject", "mathematic");

table.remove("mane")
console.log(table.get("mane"));

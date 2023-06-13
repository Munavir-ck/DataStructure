class Graph{
    constructor(){
       this.adjacentList={} 
    }


    addVertex(vertex){
      if (!this.adjacentList[vertex]) {
        this.adjacentList[vertex]=new Set()
      }
    }

    display(){
      for (const vertex in this.adjacentList) {
       console.log(vertex+"->"+[...this.adjacentList[vertex]]);
      }
    }

    addEdges(vertex1,vertex2){
        if (!this.adjacentList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacentList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacentList[vertex1].add(vertex1)
        this.adjacentList[vertex2].add(vertex2)

    }

    bfs(start){
        let queue=[]
        let visited=new Set()
        const result=[]
        queue.push(start)
        visited.add(start)

        while (queue.length!==0) {
            console.log(11111111);
            let dequeue=queue.shift()
            result.push(dequeue)
           
            let neighbors=this.adjacentList[dequeue]

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor)
                    visited.add(neighbor)
                }
            }

        }

        return result

    }
    dfs(s){
        let visited={}
        let stack=[]
        stack.push(s)
        while (stack.length>0) {
          let curr=stack.pop()
          if(!visited.has(curr)){
            visited.add(curr)
          }
    
          for(let neighbor of this.list[curr] ){
            if(!visited.has(neighbor)){
              stack.push(neighbor)
            }
    
          }
        }
      }
      bfs(a){
        let visited={}
        let queue=[]
        queue.push(s)
        while (queue.length>0) {
          let curr=queue.shift()
          for(let neighbor of this.list[curr]){
           if (!visited.has()) {
             visited.add(neighbor)
             queue.push(neighbor)
           }
          }
        }
      }
}

const graph=new Graph()
graph.addVertex("a")
graph.addEdges("a","b")
graph.display()

console.log(graph.bfs());
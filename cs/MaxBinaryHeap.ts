/**
 * Max Binary Heap
 *
 * - A Binary Heap is a tree that can be represented as an array
 *   - For each "node", a node's value is greater than all nodes in its left and right child trees
 *   - It's always a "Complete Binary Tree"
 *     - Meaning all children of each node are as full as they can be and left children are filled out first
 *   - For an array index n, its left child is stored at 2n + 1 and its right child at 2n + 2
 *     - e.g. For second node at index 1, its left child is at index 3 and its right at 4.
 * - Uses:
 *   - Easily/quickly find the node with the largest value
 *     - There are also Min Heaps which work for the smallest value
 *   - Implementing Priority Queues
 * - Time Complexities:
 *   - Removing an item: O(1)
 * - Resources:
 *   - https://btholt.github.io/four-semesters-of-cs-part-two/heap-sort/
 */

interface HeapNode<T> {
  value: T,
}

class MaxBinaryHeap<T> {
  // Start at middle of array and loop down to beginning
  //   Get child indexes
  //     If one or both child indexes are out-of-bounds, skip them
  //     If one or both child indexes are in-bounds
  //       Swap current node's value with child node whose value is greatest
  //       Then, recursively heapify the child index of the greatest child
  static build<T>(elements: T[]): MaxBinaryHeap<T> {
    const nodes = elements.map((element) => ({ value: element }))
    const numNodes = nodes.length
    const midIndex = Math.floor(numNodes / 2)

    for (let i = midIndex; i >= 0; i--) {
      this.heapify(nodes, i)
    }

    return new MaxBinaryHeap<T>(nodes)
  }

  private static heapify<T>(nodes: HeapNode<T>[], index: number, numNodes = nodes.length): void {
    const leftChildIndex = (2 * index) + 1
    const rightChildIndex = (2 * index) + 2
    const greatestChildIndex = [index, leftChildIndex, rightChildIndex]
      .filter((index) => index < numNodes)
      .sort((index1, index2) => nodes[index1].value > nodes[index2].value ? 1 : -1)
      .pop()

    if (greatestChildIndex !== undefined && greatestChildIndex !== index) {
      const currentNode = nodes[index]
      nodes[index] = nodes[greatestChildIndex]
      nodes[greatestChildIndex] = currentNode
      this.heapify(nodes, greatestChildIndex, numNodes)
    }
  }

  private constructor(
    private nodes: HeapNode<T>[],
  ) {}

  // Loop from end of nodes down to beginning
  //   Swap first node and current end node
  //   Call heapify on first node
  heapSort(): T[] {
    const nodes = this.nodes.slice()

    for (let i = (nodes.length - 1); i > 0; i--) {
      const lastNode = nodes[i]
      nodes[i] = nodes[0]
      nodes[0] = lastNode
      MaxBinaryHeap.heapify(nodes, 0, i)
    }

    return nodes.map((node) => node.value)
  }

  toArray(): T[] {
    return this.nodes.map((node) => node.value)
  }
}

export default MaxBinaryHeap

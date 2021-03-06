/**
 * Tree Traversals
 */

import BinarySearchTree, { BstNode } from './BinarySearchTree'
import Queue from './Queue'

/**
 * Depth-First, Preorder
 *
 * - Steps:
 *   - Process current node
 *   - Process left subtree
 *   - Process right subtree
 * - Good for making a deep copy of a tree (keeps it in order)
 */
export const traverseDepthFirstPreorder = <T>(
  tree: BinarySearchTree<T>,
  operationFn: (value: T) => void,
): void => {
  if (!tree.root) {
    return
  }

  const processNode = (node: BstNode<T>) => {
    operationFn(node.value)

    if (node.left) {
      processNode(node.left)
    }

    if (node.right) {
      processNode(node.right)
    }
  }

  processNode(tree.root)
}

/**
 * Depth-first, In Order
 *
 * - Steps:
 *   - Process left subtree
 *   - Process current node
 *   - Process right subtree
 * - Good for getting flat list of tree values in sorted order.
 */
export const traverseDepthFirstInOrder = <T>(
  tree: BinarySearchTree<T>,
  operationFn: (value: T) => void,
): void => {
  if (!tree.root) {
    return
  }

  const processNode = (node: BstNode<T>) => {
    if (node.left) {
      processNode(node.left)
    }

    operationFn(node.value)

    if (node.right) {
      processNode(node.right)
    }
  }

  processNode(tree.root)
}

/**
 * Depth-first, Post Order
 *
 * - Steps:
 *   - Process left subtree
 *   - Process right subtree
 *   - Process self
 * - Good for deleting all nodes in a tree
 *   - Since you process all children before current node
 */
export const traverseDepthFirstPostOrder = <T>(
  tree: BinarySearchTree<T>,
  operationFn: (value: T) => void,
): void => {
  if (!tree.root) {
    return
  }

  const processNode = (node: BstNode<T>) => {
    if (node.left) {
      processNode(node.left)
    }

    if (node.right) {
      processNode(node.right)
    }

    operationFn(node.value)
  }

  processNode(tree.root)
}

/**
 * Breadth-first
 *
 * - Steps:
 *   - Process node
 *   - Add node's children to queue
 *   - Repeat for each node in queue until queue is empty
 * - Good for pathfinding
 */
export const traverseBreadthFirst = <T>(
  tree: BinarySearchTree<T>,
  operationFn: (value: T) => void,
) => {
  if (!tree.root) {
    return
  }

  const queue = new Queue<BstNode<T>>()
  queue.enqueue(tree.root)

  while (queue.length > 0) {
    const nextNode = queue.dequeue()!
    operationFn(nextNode.value)
    if (nextNode.left) {
      queue.enqueue(nextNode.left)
    }
    if (nextNode.right) {
      queue.enqueue(nextNode.right)
    }
  }
}

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let leaf1 = new Node(1);
let leaf4 = new Node(4);
let node3 = new Node(3, leaf1, leaf4);
let node8 = new Node(8);
let root = new Node(5, node3, node8);
/*
        5
      /   \
     3     8
    / \
   1   4

*/

function sumTree(root) {
    if (root === null) return 0;
    return root.value + sumTree(root.left) + sumTree(root.right);
}

console.log("Tree sum: ", sumTree(root));

// Find the tree's max depth. I'm using Math.max() here, to evaluate left vs right side of tree.
function maxDepth(root) {
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
console.log("Max depth of tree: ", maxDepth(root));

// Count tree's nodes.
function countNodes(root) {
    if (root === null) return 0;
    return 1 + countNodes(root.left) + countNodes(root.right);
}
console.log("Count nodes: ", countNodes(root));

function contains(root, target) {
    if (root === null) return false;
    if (root.value === target) return true;
    console.log("root.value", root.value);
    return contains(root.left, target) || contains(root.right, target);
}

console.log("Tree contains: ", contains(root, 9));

// Write a fn that returns the minimum depth of a binary tree. The min depth is the number of
// nodes along the shortest path from the root down to the nearest leaf node. Where leaf is a
// node with no children
/*

  3
 / \
9  20
  /  \
 15   7
 minDepth(root) should return 2 (path 3 -> 9)
*/

console.log("Is leaf: ", isLeaf(leaf1));
console.log("Is leaf !node: ", isLeaf(null));

const root2 = new Node(3);
root2.left = new Node(9);
root2.right = new Node(20);
root2.right.left = new Node(15);
root2.right.right = new Node(7);

console.log("root2", root2);
console.log("Is root2(9) a leaf: ", isLeaf(root2.left));

// function minDepth(root) {
//     if (root === null) return 0;
//     if (!root) throw new Error("errrrr");
//     return 1 + Math.min(minDepth(root.left), minDepth(root.right));
// }

function minDepth(root) {
    // Base case: empty tree has depth 0 (no path to leaf)
    if (root === null) return 0;

    // Leaf node: depth 1
    if (root.left === null && root.right === null) return 1;

    // If left child is missing, we MUST use the right subtree
    if (root.left === null) return 1 + minDepth(root.right);

    // If right child is missing, we MUST use the left subtree
    if (root.right === null) return 1 + minDepth(root.left);

    // Both children exist: take the minimum of the two depths
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

console.log("Min Depth: ", minDepth(root2));

console.log("------------------------------");

function isLeaf(node) {
    if (!node) return;

    if (node.left === null && node.right === null) return true;
    else return false;
}

function sumOfLeftLeaves(root) {
    if (root === null) return 0;
    let sum = 0;
    // If LEFT is a child
    if (
        root.left !== null &&
        root.left.left === null &&
        root.left.right === null
    ) {
        sum += root.left.value;
    }

    sum += sumOfLeftLeaves(root.left);
    sum += sumOfLeftLeaves(root.right);

    return sum;
}
console.log("sumOfLeftLeaves: ", sumOfLeftLeaves(root2));

// find target
function findT(root, t) {
    if (root === null) return false;
    if (root.value !== null && root.value === t) return true;
    console.log(root.value, t);
    return findT(root.left, t) || findT(root.right, t);
}
console.log("findT: ", findT(root, 15));

console.log("--------------------------------");
const sTree1 = new Node(1, new Node(2), new Node(3));
const sTree2 = new Node(1, new Node(2), new Node(3));
console.log(sTree1, sTree2);
console.log("--------------------------------");

function isSame(root1, root2) {
    if (root1 === null && root2 !== null) return false;
    if (root1 !== null && root2 === null) return false;
    if (root1 === null && root2 === null) return true;
    if (root1.value !== root2.value) return false;
    console.log(root1.value, root2.value);
    return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
}

console.log("isSame: ", isSame(sTree1, sTree2));

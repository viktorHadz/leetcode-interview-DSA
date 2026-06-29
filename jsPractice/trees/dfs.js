class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Test Tree 1: Full binary tree
//        1
//       / \
//      2   3
//     / \ / \
//    4  5 6  7
const tree1 = new Node(
    1,
    new Node(2, new Node(4), new Node(5)),
    new Node(3, new Node(6), new Node(7)),
);

// Test Tree 2: Skewed tree (all left)
//        1
//       /
//      2
//     /
//    3
//   /
//  4
const tree2 = new Node(1, new Node(2, new Node(3, new Node(4))));

// Test Tree 3: Mixed tree
//        1
//       / \
//      2   3
//     /     \
//    4       5
//     \     /
//      6   7
const tree3 = new Node(
    1,
    new Node(2, new Node(4, null, new Node(6))),
    new Node(3, null, new Node(5, new Node(7))),
);

// Test Tree 4: Mixed
/*
           10
          /  \
         6    3
        /      \
       3        4
        \      /
         2    7
*/
const tree4 = new Node(
    10,
    new Node(6, new Node(3, null, new Node(2))),
    new Node(3, null, new Node(4, new Node(7))),
);

// DFS has 3 main variations - with the main difference in where you process the node
// 1 Pre-order
function dfsPreOrder(node) {
    if (!node) return;
    console.log("Pre-order: ", node.value);
    dfsPreOrder(node.left);
    dfsPreOrder(node.right);
}

// 2 In-order
function dfsInOrder(node) {
    if (!node) return;
    dfsInOrder(node.left);
    console.log("In-order: ", node.value);
    dfsInOrder(node.right);
}
// 3 Post-order
function dfsPostOrder(node) {
    if (!node) return;
    dfsPostOrder(node.left);
    dfsPostOrder(node.right);
    console.log("Post-order: ", node.value);
}

// Level 1 Traversing tree and collecting values

// Expected for tree1: [1, 2, 4, 5, 3, 6, 7]
function preorderCollect(node, result = []) {
    if (node === null) return; // base condition

    result.push(node.value); // do work

    preorderCollect(node.left, result); // recursive branch 1
    preorderCollect(node.right, result); // recursive branch 2

    return result; // after work is done the function returns result normally
}

console.log("PreorderCollect: ", preorderCollect(tree1));

// Expected for tree1: [4, 2, 5, 1, 6, 3, 7]
function inOrderCollect(node, result = []) {
    if (node === null) return;

    inOrderCollect(node.left, result);
    result.push(node.value);
    inOrderCollect(node.right, result);

    return result;
}

console.log("InorderCollect: ", inOrderCollect(tree1));

// Expected for tree1: [4, 5, 2, 6, 7, 3, 1]
function postOrderCollect(node, result = []) {
    if (node === null) return;

    postOrderCollect(node.left, result);
    postOrderCollect(node.right, result);
    result.push(node.value);
    return result;
}

console.log("PostorderCollect: ", postOrderCollect(tree1));

// Level 2 Search & Find

// Return true if target exists false otherwise
function dfsFind(node, target) {
    if (node === null) return false;

    if (target === node.value) return true;

    return dfsFind(node.left, target) || dfsFind(node.right, target);
}

console.log("dfsFind: ", dfsFind(tree1, 5));

// Return the first node with that value
function dfsFindFirst(node, target) {
    if (node === null) return;

    if (target === node.value) return node;

    return dfsFindFirst(node.left, target) || dfsFindFirst(node.right, target);
}

console.log("dfsFindFirst: ", dfsFindFirst(tree1, 5));

// Return array of values from root to target
// dfsPath(tree1, 5) → [1, 2, 5]
// dfsPath(tree1, 7) → [1, 3, 7]

function dfsPath(node, target, path = []) {
    if (node === null) return null;

    // On Enter => add to path
    console.log("Enter: ", node.value);
    path.push(node.value);

    dfsPath(node.left, target, path);
    dfsPath(node.right, target, path);

    // On Exit && if node.value !== target => remove from path
    console.log("Exit: ", node.value);
    if (path[path.length - 1] !== target) path.pop();
    else return path;
}
console.log("dfsPath: ", dfsPath(tree1, 7));

// Level 3 Computing things

// Return the height of a tree  (the max depth)
function dfsHeight(node) {
    if (node === null) return 0;

    return 1 + Math.max(dfsHeight(node.left), dfsHeight(node.right));
}

console.log("dfsHeight: ", dfsHeight(tree2));

// Count internal nodes (nodes that have at least one child)
function dfsCountInternal(node) {
    if (
        (node.left === null && node.right !== null) ||
        (node.right === null && node.left !== null)
    )
        return 1;

    return 1 + dfsCountInternal(node.left) + dfsCountInternal(node.right);
}

console.log("dfsCountInternal: ", dfsCountInternal(tree1));

// Return the smallest value in the tree
function dfsMin(node) {
    if (!node) return Infinity;

    let minValue = node.value;

    if (node.left) {
        minValue = Math.min(minValue, dfsMin(node.left));
    }
    if (node.right) {
        minValue = Math.min(minValue, dfsMin(node.right));
    }

    return minValue;
}
console.dir(tree4, { depth: null });
console.log("dfsMin", dfsMin(tree1));

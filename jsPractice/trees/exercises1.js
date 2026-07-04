class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const tree1 = new Node("A");
tree1.left = new Node("B");
tree1.left.left = new Node("D");
tree1.left.right = new Node("E");
tree1.right = new Node("C");
tree1.right.left = new Node("F");

/*
        A
      /   \
     B     C
    / \   /
   D   E F
*/
console.log("tree1", tree1);

// Ex. 1 Print Tree DFS style
function printTree(node) {
    if (node === null) return;

    console.log(node.value);

    return printTree(node.left) || printTree(node.right);
}

console.log(printTree(tree1));

// Ex. 2 Print Tree Node
function printValue(node) {
    if (!node) return null;

    return node.value;
}

console.log("Tree root", printValue(tree1));
console.log("Root.left", printValue(tree1.left));
console.log("Root.left.left", printValue(tree1.left.left));
console.log("Root.right.left", printValue(tree1.right.left));

// Ex. 3 Check if node is a leaf
function isLeaf(node) {
    if (!node || typeof node !== "object") return null;

    if (node.left === null && node.right === null) return true;
    else return false;
}

console.log("Is leaf: ", isLeaf("A"));
console.log("Is leaf: ", isLeaf(tree1));
console.log("Is leaf: ", isLeaf(tree1.left));
console.log("Is leaf: ", isLeaf(tree1.left.left));

// Ex. 4 Check is node has any children
function hasAnyChild(node) {
    if (!node || typeof node !== "object") return null;

    return node.left !== null || node.right !== null;
}

console.log("Has any children: ", hasAnyChild(tree1)); // true
console.log("Has any children: ", hasAnyChild(tree1.left.left)); // false
console.log("Has any children: ", hasAnyChild(tree1.right)); // true

// Ex. 5 Count children
function countNodeChildren(node) {
    if (!node || typeof node !== "object") return null;

    if (node.left !== null && node.right !== null) return 2;
    else if (node.left === null && node.right !== null) return 1;
    else if (node.right === null && node.left !== null) return 1;
    else return 0;
}

console.log("countNodeChildren: ", countNodeChildren(tree1));
console.log("countNodeChildren: ", countNodeChildren(tree1.left));
console.log("countNodeChildren: ", countNodeChildren(tree1.left.left));
console.log("countNodeChildren: ", countNodeChildren(tree1.right));

// Ex. 6 print tree nodes in array
function preOrderArray(node, ans = []) {
    if (node === null) return;

    ans.push(node.value);

    const left = preOrderArray(node.left, ans);
    const right = preOrderArray(node.right, ans);

    return ans;
}

console.log("preOrderArray: ", preOrderArray(tree1));

function inOrderArray(node, ans = []) {
    if (node === null) return;

    inOrderArray(node.left, ans);
    ans.push(node.value);
    inOrderArray(node.right, ans);
    return ans;
}

console.log("inOrderArray: ", inOrderArray(tree1));

function postOrderArray(node, ans = []) {
    if (node === null) return;

    postOrderArray(node.left, ans);
    postOrderArray(node.right, ans);
    ans.push(node.value);
    return ans;
}

console.log("postOrderArray: ", postOrderArray(tree1));

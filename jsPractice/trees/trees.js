// Create a tree from scratch
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Node("A");
console.log(root);
root.left = new Node("B");
root.right = new Node("C");

root.left.left = new Node("D");
root.left.right = new Node("E");
root.right.left = new Node("F");

function printRoot(root) {
    console.log("root.value: ", root.value);
}

function printChildren(root) {
    if (root.left !== null) console.log("Child: ", root.left.value);
    if (root.right !== null) console.log("Child: ", root.right.value);
}

printRoot(root);
printChildren(root);

function isLeaf(node) {
    if (!node.left && !node.right) return true;
    else return false;
}

console.log(isLeaf(root.left));
console.log(isLeaf(root.left.left));

function hasLeftChild(node) {
    if (!node) return false;
    console.log("Checking if ", node.value, "has left child");
    if (!node.left) return false;
    else return true;
}

function hasRightChild(node) {
    if (!node) return false;

    console.log("Checking if ", node.value, "has right child");
    if (!node.right) return false;
    else return true;
}

console.log(hasLeftChild(root));
console.log(hasLeftChild(root.left));
console.log(hasLeftChild(root.left.left));
console.log(hasRightChild(root));
console.log(hasRightChild(root.right));
console.log(hasRightChild(root.right.left));

function countChildren(node) {
    if (!node) return;
    if (node.left && node.right) return 2;
    else if ((node.left && !node.right) || (!node.left && node.right)) return 1;
    else return 0;
}
console.log("Count children: ", countChildren(root));

function printNodeType(node) {
    if (!node) return;

    if (node.left && node.right) {
        console.log("Two children");
    } else if ((node.left && !node.right) || (!node.left && node.right)) {
        console.log("One child");
    } else {
        console.log("Leaf");
    }
}
printNodeType(root.right);

function printChildrenValues(node) {
    if (!node) return;

    if (node.left) {
        console.log("Left:", node.left.value);
    }

    if (node.right) {
        console.log("Right:", node.right.value);
    }

    if (!node.left && !node.right) {
        console.log("Node is leaf and has no children");
    }
}

printChildrenValues(root.left);

function manualDFS(root) {
    console.log(root.value); // A
    console.log(root.left.value); // B
    console.log(root.left.left.value); // D
    console.log(root.left.right.value); // E
    console.log(root.right.value); // C
    console.log(root.right.left.value); // F
}

manualDFS(root);

function manualDFSWithComments(root) {
    // Visit A
    console.log(root.value);
    // Visit B
    console.log(root.left.value);
    // Visit D
    console.log(root.left.left.value);
    // Visit E
    console.log(root.left.right.value);

    // => come back to A
    // Visit C
    console.log(root.right.value);
    // Visit F
    console.log(root.right.left.value);
}
manualDFSWithComments(root);

function dfsWithFinish(node) {
    if (!node) return;

    console.log("Enter:", node.value);

    dfsWithFinish(node.left);
    dfsWithFinish(node.right);

    console.log("Finish:", node.value);
}
dfsWithFinish(root);

function dfsExplain(node) {
    if (!node) {
        console.log("Hit null, stop");
        return;
    }

    console.log("Enter node:", node.value);

    console.log("Going left from:", node.value);
    dfsExplain(node.left);

    console.log("Going right from:", node.value);
    dfsExplain(node.right);

    console.log("Finished node:", node.value);
}

dfsExplain(root);

function preorderArray(node, result = []) {
    if (!node) return result;

    result.push(node.value);

    preorderArray(node.left, result);
    preorderArray(node.right, result);

    return result;
}

console.log(preorderArray(root));

function countNodes(node) {
    if (!node) return 0;

    const leftCount = countNodes(node.left);
    const rightCount = countNodes(node.right);

    return 1 + leftCount + rightCount;
}
console.log(countNodes(root));

function countLeaves(node) {
    if (!node) return 0;

    if (!node.left && !node.right) return 1;

    const leftLeaves = countLeaves(node.left);
    const rightLeaves = countLeaves(node.right);

    return leftLeaves + rightLeaves;
}
console.log(countLeaves(root));
console.log(countLeaves(root.right.left));

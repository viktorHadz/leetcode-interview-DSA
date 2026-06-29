class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(root) {
        this.root = new Node(root);
    }

    insertNode(root = this.root, node) {
        if (root.left === null) {
            root.left = new Node(node);
            return root.left;
        }

        if (root.right === null) {
            root.right = new Node(node);
            return root.right;
        }

        return (
            this.insertNode(root.left, node) ||
            this.insertNode(root.right, node)
        );
    }
}

const root = new Node(1, new Node(2), new Node(3));
console.log(root);

const tree = new Tree(1);
console.log(tree);

tree.insertNode(tree, 2);
tree.insertNode(tree, 3);
console.log("Insert node: ", tree);

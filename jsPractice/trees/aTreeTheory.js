/*
    What's a tree - a tree is a structure made of nodes
    where each node can point to other nodes
    Ex:
             A
           /   \
          B     C
         / \     \
        D   E     F

        - A is the top node. That is called the root.

        - B and C are children of A.

        - D and E are children of B.

        - F is child of C.

    * A tree is one thing connected to smaller things, which are connected to smaller things yet and so on.
        - that is why it fits recursion so well.
        - a tree is recursively shaped by nature

    * A tree is:
        - empty
    or
        - a node with smaller trees attached to it

    * Vocabulary
        Root       = top node
        Node       = one item in the tree
        Child      = node below another node
        Parent     = node above another node
        Leaf       = node with no children
        Edge       = connection between two nodes
        Subtree    = smaller tree inside the big tree
        Depth      = how far a node is from the root
        Height     = longest path down from a node

    Types of tree
    * General tree
         A
      /  |  \
     B   C   D
        / \
       E   F

       In code:
       {
           value: "A",
           children: [...]
       }
    * Binary Tree
        - Each node has at most two children:
          A
        /   \
       B     C

       In code:
       {
           value: "A",
           left: ...,
           right: ...
       }
       - left values are smaller
       - right values are larger

    Most common problems I'm likely to see in interviews:
        - Print all nodes
        - Count all nodes
        - Sum all values
        - Find max value
        - Find if tree contains a target
        - Find max depth / height
        - Invert a binary tree
        - Compare two trees
        - Level-order traversal
        - Find min value in BST
        - Insert into BST
        - Validate BST
 */

// 1. How to code a tree from scratch
// A binary tree node needs three things
//     - value
//     - left child
//     - right child

// This creates one node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// example:
const root = new TreeNode("A");
// console.log("root of tree: ", root);
// TreeNode { value: 'A', left: null, right: null }

// Adding children manually
root.left = new TreeNode("B");
root.right = new TreeNode("C");

// console.log(root);

root.left.left = new TreeNode("D");
root.left.right = new TreeNode("E");
root.right.right = new TreeNode("F");
/*
             A
           /   \
          B     C
        /  \     \
       D    E     F
*/

// Final tree
console.log("Full tree: ", root);

class Node {
    constructor (value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value){
        let node = new Node(value);
        if(this.root === null) {
            this.root = node;
            return this;
        }

        let currentNode = this.root;
        while(true) {
            if(value === currentNode.value) return this;
            if(value < currentNode.value) {
                // left
                if(!currentNode.left) {
                    currentNode.left = node;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                // right
                if(!currentNode.right) {
                    currentNode.right = node;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    lookup(value){
        if(this.root === null) {
            return false;
        }

        let found = false;
        let currentNode = this.root;
        while(true) {
            if(value === currentNode.value) return true;
            if(value < currentNode.value) {
                // left
                if(!currentNode.left) {
                    return false;
                }
                if(currentNode.left.value === value) {
                    return true;
                }
                currentNode = currentNode.left;
            } else {
                // right
                if(!currentNode.right) {
                    return false;
                }
                if(currentNode.right.value === value) {
                    return true;
                }
                currentNode = currentNode.right;
            }
        }
    }

    remove(value){
    }
}

const tree = new BST();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(JSON.stringify(traverse(tree.root), 0, 2));

function traverse(node) {
    if(!node) return;
    const tree = {
        value: node.value
    };

    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);

    return tree;
};
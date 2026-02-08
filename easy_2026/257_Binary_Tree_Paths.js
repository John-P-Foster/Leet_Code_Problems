// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = []
    const stack = [[root, []]]; 

    while(stack.length > 0){
        let [cur, path] = stack.pop()

        path.push(cur.val); 

        if(!cur.left && !cur.right){
            paths.push(path.join(`->`));
            continue; 
        }
        
        if(cur.right){
            stack.push([cur.right, [...path]])
        }
        if(cur.left){
            stack.push([cur.left, [...path]])
        }
    }

    return paths; 
};

console.log(binaryTreePaths('root')); 
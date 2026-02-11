// Given the root of a binary tree with unique values and the values of two different nodes of the
//  tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, 
//  or false otherwise.

// Two nodes of a binary tree are cousins if they have the same depth with different parents.

// Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at
//  the depth k + 1.

 

// Example 1:


// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false
// Example 2:


// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true
// Example 3:


// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [2, 100].
// 1 <= Node.val <= 100
// Each node has a unique value.
// x != y
// x and y are exist in the tree.


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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xDepth = -1;
    let xParent = null; 
    let yDepth = -1; 
    let yParent = null
    let stack = [[root, 0, null]];
    
    while(stack.length > 0){
        let[currNode, currDepth, prevNode] = stack.pop(); 
        if(currNode.val === x){
            xDepth = currDepth; 
            xParent = prevNode; 
            if(yDepth != -1) break;    
        }
        if(currNode.val === y){
            yDepth = currDepth; 
            yParent = prevNode; 
            if(xDepth != -1) break; 
        }

        if(currNode.right) stack.push([currNode.right, currDepth + 1, currNode]);
        if(currNode.left) stack.push([currNode.left, currDepth + 1, currNode]); 
    }

    return xDepth === yDepth && xParent != yParent
};


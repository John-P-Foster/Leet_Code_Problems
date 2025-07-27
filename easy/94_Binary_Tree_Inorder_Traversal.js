// Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,3,2]

// Explanation:



// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [4,2,6,5,7,1,3,9,8]

// Explanation:



// Example 3:

// Input: root = []

// Output: []

// Example 4:

// Input: root = [1]

// Output: [1]

/** Definition for a binary tree node.*/
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

  function buildTree(arr) {
    if (!arr.length) return null;
    
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift();

        if (arr[i] !== null && i < arr.length) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (arr[i] !== null && i < arr.length) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}
 
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let current = root;
    if(root === undefined){return root}; 
    while(current != null || stack.length > 0){
        while(current != null){
            stack.push(current); 
            current = current.left; 
        }
        let parent = stack.pop(); 
        result.push(parent.val);
        current = parent.right; 
        
    }

    return result;
};

const testCases =[
 [[1,null,2,3], [1,3,2]],
 [[1,2,3,4,5,null,8,null,null,6,7,9],[4,2,6,5,7,1,3,9,8]],
 [[],[]],
 [[1], [1]],
 [[2, null, 3, null, 4], [2, 3, 4]]
]

for(let [input, expected] of testCases){
    const treeRoot = buildTree(input);
    let result = inorderTraversal(treeRoot);
    result = result.toString() === expected.toString() ? `Passed with: ${result}` : `Failed: Got ${result}, Expected ${expected}`; 
    console.log(result);
}
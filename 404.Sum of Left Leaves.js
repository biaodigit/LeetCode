let sumOfLeftLeaves = function(root) {
    if(!root){
        return 0
    }
    let sum = 0;
    if(root.left && !root.left.left && !root.left.right) sum += root.left.val
    return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};
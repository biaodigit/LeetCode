let invertTree = function(root) {
    if(!root){
        return null
    }
    let node = root.left
    root.left = root.right
    root.right = node
    if(root.left){
        invertTree(root.left)
    }
    if(root.right){
        invertTree(root.right)
    }
    return root
};
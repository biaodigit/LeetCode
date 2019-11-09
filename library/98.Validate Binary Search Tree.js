let isValidBST = function(root) {
    return isValid(root,null,null)
};
let isValid = function(root,minVal,maxVal) {
    if(root === null) return true
    if(minVal !== null && root.val <= minVal ) return false
    if(maxVal !== null && root.val >= maxVal) return false
    return isValid(root.left,minVal,root.val) && isValid(root.right,root.val,maxVal)
}
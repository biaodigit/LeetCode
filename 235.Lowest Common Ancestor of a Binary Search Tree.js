let lowestCommonAncestor = function(root, p, q) {
    if(!root || !p || !q) return null
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left,p,q)
    }
    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right,p,q)
    }
    return root
};
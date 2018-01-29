let binaryTreePaths = (root) => {
    let res = [],
        str = "";
    let DFS = (root,arr,str) => {
        if(!root) return null
        if(!root.left && !root.right) arr.push(str+root.val)
        DFS(root.left,arr,str+root.val+"->")
        DFS(root.right,arr,str+root.val+"->")
    }
    DFS(root,res,str)
    return res
};
const zigzagLevelOrder = function(root) {
    if(!root){
        return []
    }
    let res = [],
        queue = [],
        count = 1;
    queue.push(root)
    while(queue.length){
        let size = queue.length,
            temp = [];
        for(let i=0;i<size;i++){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            if(count % 2 === 0){
                temp.unshift(node.val)
            }else{
                temp.push(node.val)
            }
        }
        count++
        res.push(temp)
    }
    return res
};
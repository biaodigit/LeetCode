let flatten = function(root) {
   let cur = root,
       prev = null;
   while(cur){
       if(cur.left){
           prev = cur.left;
           while(prev.right){
               prev = prev.right
           }
           prev.right = cur.right;
           cur.right = cur.left;
           cur.left = null;
       }
       cur = cur.right
   }
};

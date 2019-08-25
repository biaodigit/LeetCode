let recoverTree = function (root) {
    let curr = root,
        p1 = null,
        p2 = null,
        prev = null,
        temp = null;

    while (curr) {
        if (curr.left) {
            temp = curr.left;
            while (temp.right && temp.right !== curr) {
                temp = temp.right
            }
            if (!temp.right) {
                temp.right = curr;
                curr = curr.left
            } else {
              if(prev && curr.val < prev.val){
                  p1 = curr;
                  if(!p2) p2 = prev
              }
              temp.right = null;
              prev = curr;
              curr = curr.right
            }
        } else {
            if (prev && curr.val < prev.val) {
                p1 = curr;
                if (!p2) p2 = prev
            }
            prev = curr;
            curr = curr.right
        }
    }


    temp = p1.val;
    p1.val = p2.val;
    p2.val = temp
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
    // 求合集 I
    let [set, res] = [{}, []];
    for(let i=0;i<nums1.length;i++){
        set[nums1[i]] = true
    }
    for(let i=0;i<nums2.length;i++){
        if(set[nums2[i]]){
            set[nums2[i]] = false;
            res.push(nums2[i])
        }
    }
    return res
};
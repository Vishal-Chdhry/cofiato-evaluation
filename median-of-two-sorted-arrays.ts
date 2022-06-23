function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    let size1 = nums1.length
    let size2 = nums2.length
    let left = 0
    let right = size1
    
    while(left <= right) {
        let cut1 = Math.floor((right + left) / 2)
        let cut2 = Math.floor((size1 + size2 + 1) / 2 - cut1)
        
        let left1 = cut1 === 0? -1e9 : nums1[cut1 - 1]
        let left2 = cut2 === 0? -1e9 : nums2[cut2 - 1]
        let right1 = cut1 === size1? 1e9 : nums1[cut1]
        let right2 = cut2 === size2? 1e9 : nums2[cut2]
        
        if(left1 <= right2 && left2 <= right1){
            if((size1 + size2) % 2 === 0 ){
                return (Math.min(right1, right2) + Math.max(left1, left2)) / 2.0
            } else {
                return Math.max(left1, left2)
            }
        } else if (left1 > right2) {
            right = cut1 - 1
        } else {
            left = cut1 + 1
        }
    }
    return 0.0
};
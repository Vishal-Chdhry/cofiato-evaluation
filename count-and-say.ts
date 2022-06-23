function countAndSay(n: number): string {
    let ans = "1";
    for(let i = 1; i< n; i++){
        let current: string = ""
        let count = 1
        let j = 0
        for(j = 0; j< ans.length - 1 ; j++){
            if(ans.charAt(j) !== ans.charAt(j+1) || j+ 1 >= ans.length){
                current = `${current}${count}${ans.charAt(j)}`
                count = 1
            } else {
                count++
            }
        }
        current = `${current}${count}${ans.charAt(j)}`
        ans = current
    }
    return ans
};
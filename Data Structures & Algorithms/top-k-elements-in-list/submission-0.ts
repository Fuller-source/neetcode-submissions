class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let numsMap = new Map()
        for (let num of nums){
            if (!numsMap.has(num)){
                numsMap.set(num, 1)
            } else {
                numsMap.set(num, numsMap.get(num) + 1)
            }
        }
        const sNumsMap = new Map([...numsMap].sort((a, b) => b[1] - a[1]))
        return Array.from({ length: k}, (_, i) => [...sNumsMap.keys()][i])
    }
}

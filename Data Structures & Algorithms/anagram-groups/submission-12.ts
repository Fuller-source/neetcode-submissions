class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let strBuckets = new Map()
        for (let str of strs){
            const stringS = str.split('').sort().join('')
            if (!strBuckets.has(stringS)){
                strBuckets.set(stringS, [])
            }
            strBuckets.get(stringS).push(str)
        }
        
        return Array.from(strBuckets.values())
    }
}

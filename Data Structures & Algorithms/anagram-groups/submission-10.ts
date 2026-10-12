class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let answer = []
        let strBuckets = new Map()
        for (let str of strs){
            const stringS = str.split('').sort().join('')
            if (!strBuckets.has(stringS)){
                strBuckets.set(stringS, [])
            }
            strBuckets.get(stringS).push(str)
        }
        
        for (const key of strBuckets.keys()){
            answer.push(strBuckets.get(key))
        }
        return answer;
    }
}

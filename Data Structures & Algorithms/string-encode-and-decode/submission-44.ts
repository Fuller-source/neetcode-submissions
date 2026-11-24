class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((i) => `#${i.length}#${i}`).join("")

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const Str: string[] = []
        for (let i = 0; i < str.length; i++){
            let j = i;
            let sLen = "";
            if (str[i] === '#'){
                j++
                while (str[j] !== '#'){
                    sLen += str[j]
                    j++
                }
                Number(sLen)
                Str.push(str.slice(j+1, j + 1 + Number(sLen)))
            }
            i = j + Number(sLen)
        }
        
        return Str
    }
}

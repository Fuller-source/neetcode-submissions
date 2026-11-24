class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let Str = "";
        for (const s of strs){
            Str = Str + `#${s.length}#${s}`
        }
        return Str
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
                
                Str.push(str.slice(j+1, j + 1 + Number(sLen)))
            }
            i = j + Number(sLen)
            // console.log(str.slice(i))
            // console.log()
        }
        
        return Str
    }
}

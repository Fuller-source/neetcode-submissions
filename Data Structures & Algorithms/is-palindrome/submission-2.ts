class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let palindrome = true
        let left = ""
        let right = ""
        if (cleaned.length % 2 == 1){
            console.log(`${cleaned.length} / 2 = ${Math.trunc(cleaned.length/2)}`)
            left = cleaned.slice(0, Math.trunc(cleaned.length/2))
            right = cleaned.slice(Math.trunc(cleaned.length/2) + 1)

            console.log(`left: ${left} right: ${right}`)
        } else {
            console.log(`${cleaned.length} / 2 = ${cleaned.length/2}`)
            left = cleaned.slice(0, Math.trunc(cleaned.length/2))
            right = cleaned.slice(Math.trunc(cleaned.length/2))
        }

        for (let i = 0; i < left.length; i++){
            if (left[left.length - 1 - i] !== right[i]) return false
        }

        return true
    }
}

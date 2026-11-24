class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let left = cleaned.slice(0, Math.trunc(cleaned.length/2))
        let right = (cleaned.length % 2 == 1) ? 
            cleaned.slice(Math.trunc(cleaned.length/2) + 1) :
            cleaned.slice(Math.trunc(cleaned.length/2))

        for (let i = 0; i < left.length; i++){
            if (left[left.length - 1 - i] !== right[i]) return false
        }

        return true
    }
}

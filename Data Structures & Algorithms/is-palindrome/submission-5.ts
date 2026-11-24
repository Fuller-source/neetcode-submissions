class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        for (let i = 0; i < Math.trunc(cleaned.length / 2); i++){
            if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) return false
        }

        return true
    }
}

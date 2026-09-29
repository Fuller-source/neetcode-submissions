class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        return t.split('').sort().join('') === s.split('').sort().join('');
    }
}

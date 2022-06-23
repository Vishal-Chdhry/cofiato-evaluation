function strStr(haystack: string, needle: string): number {
    const s : string[] = haystack.split(needle);
    const k : number = s.reduce((acc, str) => acc + str.length, 0)
    if(haystack.length === k) return -1;
    else return s[0].length
};
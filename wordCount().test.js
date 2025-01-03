const wordCount = require('./wordCount()');

test('4', () => {
    const result = wordCount(' Mata Kuliah Software Testing'); 
    expect(result).toBe(4); 
});

test('0', () => {
    const result = wordCount(''); 
    expect(result).toBe(0);
});

test('5', () => {
    const result = wordCount('UIN Suska Pekanbaru Riau Indonesia'); 
    expect(result).toBe(5); 
});

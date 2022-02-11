//maps (hash maps)
const firstMap = new Map

firstMap.set(1, 'Liam')
firstMap.set(false, 'a boolean')
firstMap.set('nice', 'a string')
firstMap.delete('nice')
firstMap.size

//sets
const s = new Set

s.add(10)
s.add(20)
s.add(10) //already exists, values must be unique
s.size //2 

//or
const s2 = new Set([3,1,4,1,2,1,5])
s2.has(10) //false
s.delete(1)
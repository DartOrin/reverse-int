module.exports = function reverse (n) {
  let arr = String(n).split('')
  if(arr[0] === '-'){
    arr = arr.slice(1)
  }
  arr.reverse()
  return arr.join('')
}

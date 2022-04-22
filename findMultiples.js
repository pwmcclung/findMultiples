function findMultiples(integer, limit) {
  let newArr = []
  let sum = 0
  while ((sum + integer) <= limit)
  {
    newArr.push(sum += integer)
    if (sum === limit){
      break;
    }
  }
  return newArr
}

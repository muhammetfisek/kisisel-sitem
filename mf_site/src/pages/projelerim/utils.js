// chunkArray: Bir diziyi belirli boyutlarda parçalara böler.
// Örneğin: [1,2,3,4,5,6], 3 => [[1,2,3],[4,5,6]]
// Projelerim sayfasında her satırda 3 kutu olacak şekilde gruplama için kullanılır.

export function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
} 
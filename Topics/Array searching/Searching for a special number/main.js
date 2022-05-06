function search(numbers) {
   return numbers.find(x => x % 11 === 0);
}
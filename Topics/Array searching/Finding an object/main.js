function search(objects) {
 return objects.findIndex(x => x.name === "John" && x.age === 30);
}
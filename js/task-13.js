// function slugify(title) {
//   let slug;
//   const toLowerCaseTitle = title.toLowerCase();
//   const splitedTitle = toLowerCaseTitle.split(" ");

//   slug = splitedTitle.join("-");
//   return slug;
// }

function slugify(title) {
  let slug = title.toLowerCase().split(" ").join("-");

  return slug;
}

console.log(slugify("Массивы для новичков"));
console.log(slugify("Английский для разработчика"));

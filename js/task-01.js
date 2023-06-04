const categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);

categories.forEach((category) => {
    const nameOfCategory = category.querySelector("h2");
    const itemsOfCategory = category.querySelectorAll("li");

    console.log("Category: ", nameOfCategory.textContent);
    console.log("Elements: ", itemsOfCategory.length)
})
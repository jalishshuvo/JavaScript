// 15 . creating a object with these propertis and make a function
// street
// city
// zipCode
// showAddress(address)

const address = {
  street: "string",
  city: "Dhaka",
  zipcode: 1710,
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

// 16.CREATE FACTORY AND CONSTRUCTOR FUNCTION

const thikana = createAddress("a", "b", "c");

console.log("Thikana", thikana);

function createAddress(street, city, zipcode) {
  return {
    street: street,
    city,
    zipcode,
  };
}

// CONSTRUCTOR Function

function CreateAddress(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

const constructorAddress = new CreateAddress("e", "f", 1230);
const constructorAddress2 = new CreateAddress("e", "f", 1230);

console.log("Constructor Function Address", constructorAddress);

// 17. OBJECT EQUALITY
// Create a function to check the properties of two constructor address
// are equal or not
function areEqual(constructorAddress, constructorAddress2) {
  const equalityCheck =
    constructorAddress.street === constructorAddress2.street &&
    constructorAddress.city === constructorAddress2.city &&
    constructorAddress.zipcode === constructorAddress2.zipcode;
  return equalityCheck;
}

console.log(areEqual(constructorAddress, constructorAddress2));
// are reference the same object or not
function areSame(constructorAddress, constructorAddress2) {
  const same = constructorAddress === constructorAddress2;
  console.log(same);
}
areSame(constructorAddress, constructorAddress2);

// 18. BLOG POST OBJECT
// title
// body
// author
// views
// comments
//    author,body
// isLive
const blogPost = {
  title: "blog post",
  body: "description of blog",
  author: "shuvo",
  views: 150,
  comments: [
    {
      author: "jalish",
      body: "this is a comment",
    },
    {
      author: "jalish",
      body: "this is another comment",
    },
  ],
  isLive: true,
};
console.log(blogPost);
// 19. ex-5 CONSTRUCTOR FUNCTION

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
const post1 = new Post("blog post", "description of blog", "shuvo");
console.log(post1);

// PRICE RANGE OBJECT

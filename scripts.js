// const blogs = [
//   { title: "april's best moments", likes: 10 },
//   { title: "the best day of my life", likes: 20 },
// ];

// console.log(blogs)

let user = {
  name: "joe",
  age: 43,
  email: "joe@gmail.com",
  location: "London, UK",
  blogs: [
    { title: "april's best moments", likes: 10 },
    { title: "the best day of my life", likes: 20 },
  ],
  friends: [
    { name: "joe", age: 43, email: "joe@email.com"},
    { name: "bill", age: 32, email: "bill@email.com"},
  ],
  logBlogs() {
		console.log("See the following blogs");
		this.blogs.forEach(blog => {
			console.log(blog.title, blog.likes);
		})
	}
};

user.logBlogs();
// user.logFriends();
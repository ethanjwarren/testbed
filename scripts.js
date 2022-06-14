let user = {
  name: "Joe Bloggs",
  age: 43,
  email: "joebloggs@gmail.com",
  location: "London, UK",
  blogs: ["april's best moments", "the best day of my life"],
  logBlogs: function () {
    console.log("this user has written the following blogs:");
    this.blogs.forEach((blog) => {
      console.log(blog);
    });
  },
};

user.logBlogs();

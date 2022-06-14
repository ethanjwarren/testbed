let user = {
  name: "Ethan",
  age: 22,
  email: "ethan.warren10@gmail.com",
  location: "Witney, Oxfordshire",
  blogs: ["why mac and cheese rules", "10 things to make with marmite"],
  login: function () {
    console.log("User logged in");
  },
  logout: function () {
    console.log("User logged out");
  },
  logBlogs: function () {
    console.log(this.blogs);
  },
};

user.logout();
user.login();

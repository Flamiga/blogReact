module.exports = (mongoose) => {
  const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    like: [],
    comments: [{ comment: String, date: Date }]
  });

  const blogModel = mongoose.model('blog', blogSchema);

  async function getBlogs() {
    try {
      return await blogModel.find();
    } catch (error) {
      console.error("getBlog:", error.message);
      return {};
    }
  }

  async function getBlog(id) {
    try {
      return await blogModel.findById(id);
    } catch (error) {
      console.error("getBlog:", error.message);
      return {};
    }
  }

  async function createBlog(title, desc, date) {
    const blog = new kittenModel({ title: title, description: desc, date: date });
    return blog.save();
  }

  async function bootstrap(count = 10) {
    let l = (await getBlogs()).length;
    console.log("Blog collection size:", l);

    if (l === 0) {
      this.createBlog("blog 1", "desc 1", date.Date);
      this.createBlog("blog 2", "desc 2", date.Date);
      this.createBlog("blog 3", "desc 3", date.Date);
    }
  }

  return {
    getBlogs,
    getBlog,
    createBlog,
    bootstrap
  }
}
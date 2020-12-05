module.exports = (blogDB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get('/', async (req, res) => {
    const blogs = await blogDB.getBlogs(); 
    res.json(blogs);
  });

  router.get('/:id', async (req, res) => {
    const blog = await blogDB.getBlog(req.params.id);
    res.json(blog);
  });

  router.post('/', async (req, res) => {
    // TODO: Implement!
    res.json({msg: "Not implemented :("});
  });

  return router;
}

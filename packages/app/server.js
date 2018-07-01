const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/curator/:curator", (req, res) => {
      const actualPage = "/";
      const queryParams = { curator: req.params.curator };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/tag/:tag", (req, res) => {
      const actualPage = "/";
      const queryParams = { tag: req.params.tag };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/curator/:curator/:goal", (req, res) => {
      const { goal, curator } = req.params;
      const actualPage = "/course";
      const queryParams = { goal, curator };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

const express = require("express");
const app = express();
const history = require("connect-history-api-fallback");

const staticFileMiddleware = express.static(__dirname + "/dist");
app.use(staticFileMiddleware);
app.use(
   history({
      disableDotRule: true,
      verbose: true,
   })
);

app.use(staticFileMiddleware);

app.listen(5500, () => {
   console.log("app listening on port 5100");
});

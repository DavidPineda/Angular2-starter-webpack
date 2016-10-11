import * as express from "express";
import {ng2engine} from "angular2-universal-preview";

let app = express();

import {AppComponent} from "./src/app/app.component";

app.engine(".ng2.html", ng2engine);
app.set("views", __dirname);
app.set("view engine", "ng2.html");

app.use(express.static(__dirname));

app.use("/", function(req, res) {
   res.render("index", {AppComponent}); 
});

app.liste(3000, () => {
    console.log("Listen on http://localhost:3000");
})
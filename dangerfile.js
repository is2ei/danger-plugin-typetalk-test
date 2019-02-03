const typetalk = require("danger-plugin-typetalk").default;

message("Hello, World!");
warn("You have not included a CHANGELOG entry.")
fail(`ESLint has failed.`)

typetalk();

import Test from "./index.marko";

Test.renderSync({
    name: "Gerard"
}).appendTo(document.body);
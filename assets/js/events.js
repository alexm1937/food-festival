require("bootstrap");
const createEl = require("./domMethods");
const createLoremIpsum = require("./helpers");

$(document).ready( function() {
    const currentEvent = JSON.parse(localStorage.getItem("currentEvent")) || {
        title: "Title Placeholder",
        subtitle: "",
        description: ""
    };
})
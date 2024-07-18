/**
 * @Scenario
 * Get the API response
 *
 */


const fetchUrl = require("fetch").fetchUrl

fetchUrl("https://api.github.com/users/github", function(err, meta, body) {
    console.log(body.toString());
})

"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// set the url 
var url = 'http://jsonplaceholder.typicode.com/todos/1';
// use axios to get the data from the url
// then log the response into a console log in your terminal
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});

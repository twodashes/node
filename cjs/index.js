'use strict';

var http = require('http');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var http__default = /*#__PURE__*/_interopDefaultLegacy(http);

/**
 * Parse simple message string from HTTP JSON response, GraphQL, or Error() object
 *    Too many libraries to fetch HTTP requests, too many non-standard response formats.
 *    This handles Axios or standard XMLHTTPRequest, or an Error() object
 *    Supports either convention, of Twitter or Facebook
 *    Supports "non-legacy" format described in: https://www.mediawiki.org/wiki/API:Errors_and_warnings
 *    Response and parsed error can be any type. This will figure it out, with just a few if/else rules.
 *      NOTE:
 *      Unless you don't care about performance, this should NOT be used to detect if a variable is an error,
 *      only to parse the message string from some object/response which you know contains an error message.
 * @param {object} response - response from HTTP request or Error object
 * @returns {string} - nice readable text, meant for an alert popup in your front-end user interface
 */
function parse_error_message(response) {
  if (!response) return "!error";
  //
  // maybe input was a string, which is already an error message,
  // or null/undefined/false, whatever, just output that as is
  if (typeof response !== "object") return response.toString();
  //
  // content from HTTP response:
  let content = response.response
    ? response.response.data
      ? response.response.data
      : response.response
    : response.data || response;
  //
  // error object:
  let error = content;
  if (content.errors) error = content.errors[0] || content.errors;
  else if (content.warnings) error = content.warnings[0] || content.warnings;
  else if (content.error) error = content.error;
  else if (content.warning) error = content.warning;
  //
  // something weird:
  if (typeof error !== "object") return error.toString();
  //
  // JS Error object - cut off extra stuff about files/lines:
  if (error[0] && error[0].length > 3) return error[0];
  //
  // JSON object:
  return error.message || error.toString();
}

/**
 * GET request
 * @param {string} url - including protocol, not including query params
 * @param {object} options - override defaults:
 *    ```
 *    {mode:"cors", cache: "no-cache", redirect: "follow", referrer: "no-referrer", headers: {}}
 *    ```
 * @returns {Promise} - promise will resolve with response data
 */
function http_get(url = ``, options = {}) {
  options = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrer: "no-referrer",
    headers: {},
    ...options
  };
  return fetch(url, {
    method: options.method, // *GET, POST, PUT, DELETE, etc.
    mode: options.cors, // no-cors, cors, *same-origin
    cache: options.cache, // no-cache, reload, force-cache, only-if-cached
    credentials: options.credentials, // include, *same-origin, omit
    headers: options.headers, // {}, {"Content-Type": "application/json; charset=utf-8"}
    redirect: options.redirect, // manual, *follow, error
    referrer: options.referrer // no-referrer, *client
  })
    .then((response) => response.json()) // parses response to JSON
    .then((response) => response.data);
}

/**
 * POST request
 * @param {string} url
 * @param {object} data
 * @returns {Promise}
 */
function http_post(url = ``, data = {}) {
  // Auth
  // url = url;
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then((response) => response.json()); // parses response to JSON
}

/**
 * PUT request
 * @param {string} url
 * @param {object} data
 * @returns {Promise}
 */
function http_put(url = ``, data = {}) {
  // Auth
  // url = url;
  // Default options are marked with *
  return fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then((response) => response.json()); // parses response to JSON
}

/**
 * Universal AJAX request coming soon...
 * @param url
 * @param method
 * @param data
 * @param headers
 * @param options
 * @returns {Promise}
 */
function http_ajax(url, method = "GET", data = undefined, headers = {}, options = {}) {
  data = data || undefined;
  headers = { "Content-Type": "application/json", ...headers };
  if (typeof http__default['default'] === "object") {
    return new Promise(function (resolve) {
      const params = {
        method,
        headers
      };
      http__default['default']
        .request(url, params, (res) => {
          let data = '';
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            // response data
            // format by type
            if (
              data &&
              typeof data === "string" &&
              headers["Content-Type"] === "application/json; charset=utf-8"
            ) {
              data = JSON.parse(data);
            }
            // return
            resolve(data);
          });
          // error?
        })
        .on("error", (err) => {
          console.log("Error: ", err.message);
        });
    });
  }
}

/*
 * PRIVATE FUNCTIONS
 */

var requests = /*#__PURE__*/Object.freeze({
  __proto__: null,
  http_ajax: http_ajax,
  http_get: http_get,
  http_post: http_post,
  http_put: http_put,
  parse_error_message: parse_error_message
});

var index = {
  ...requests,
};

module.exports = index;

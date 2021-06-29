import { getOptions } from "loader-utils";
import {
  defaultNamer,
  defaultHelperNamer,
  getRelativePath,
  removeExtension,
} from "./utils/utils";
import Handlebars from "handlebars";
import Helpers from "./utils/helpers";
import merge from "lodash.merge";
import Partials from "./utils/partials";
import Data from "./utils/data";

let _data = [];
let languages = [];

/**
 * if options.extract is set to false --> object with markup will be returned
 * used if file is not being written (static) - markup can be loaded via JS
 * @type {object}
 */
let resultObject = {};

module.exports = function (source, map) {
  const options = Object.assign(
    {},
    {
      partialNamer: defaultNamer,
      helperNamer: defaultHelperNamer,
    },
    getOptions(this)
  );

  //TODO: use better return value for testing
  return "true";
};

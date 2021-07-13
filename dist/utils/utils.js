"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.defaultHelperNamer = defaultHelperNamer;
exports.defaultNamer = defaultNamer;
exports.getRelativePath = getRelativePath;
exports.removeExtension = removeExtension;

function defaultHelperNamer(file) {
  return defaultNamer(file).replace(".helper", "");
}

function defaultNamer(file) {
  var segments = file
    .replace(process.cwd() + "/src/templates/", "")
    .replace(process.cwd() + "src/templates/", "");
  return removeExtension(segments);
}

function getRelativePath(path) {
  var deep = path.split("/").length - 2;
  var rootLayer = 0;

  if (deep === rootLayer) {
    return "./";
  }

  return "../".repeat(deep);
}

function removeExtension(path) {
  return path.slice(0, path.lastIndexOf("."));
}

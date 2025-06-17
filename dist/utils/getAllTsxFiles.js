"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTsxFiles = getAllTsxFiles;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getAllTsxFiles(dir) {
    let results = [];
    const list = fs_1.default.readdirSync(dir);
    list.forEach((file) => {
        const fullPath = path_1.default.join(dir, file);
        const stat = fs_1.default.statSync(fullPath);
        if (stat &&
            stat.isDirectory() &&
            !file.startsWith("__tests__") &&
            !file.startsWith("__mocks__")) {
            results = results.concat(getAllTsxFiles(fullPath));
        }
        else if (file.endsWith(".tsx") && !file.includes(".test")) {
            results.push(fullPath);
        }
    });
    return results;
}

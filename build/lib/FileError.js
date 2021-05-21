"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingFileError = exports.FileError = void 0;
class FileError extends Error {
    constructor(errorMessage = "File Error: Image file not given") {
        super(errorMessage);
        this.name = errorMessage;
    }
    ;
}
exports.FileError = FileError;
;
class MissingFileError extends Error {
    constructor(errorMessage = "File was not given during execution!") {
        super(errorMessage);
        this.name = errorMessage;
    }
    ;
}
exports.MissingFileError = MissingFileError;

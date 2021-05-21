"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64Encode = void 0;
const Base64Encode = (data) => {
    return Buffer.from(data, "binary").toString("base64");
};
exports.Base64Encode = Base64Encode;

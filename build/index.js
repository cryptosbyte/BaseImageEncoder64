"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const FileError_1 = require("./lib/FileError");
const Base64Encode_1 = require("./lib/Base64Encode");
const node_fetch_1 = __importDefault(require("node-fetch"));
const args = process.argv;
(() => __awaiter(void 0, void 0, void 0, function* () {
    if (args.length == 2)
        throw new FileError_1.MissingFileError();
    if (args.length == 4) {
        if (["-h", "--http"].includes(args[2].toLowerCase())) {
            const res = yield node_fetch_1.default(args[3]);
            const buffer = yield res.buffer();
            console.log(`data:${res.headers.get('content-type')};base64,${Base64Encode_1.Base64Encode(buffer)}`);
        }
        ;
        if (["-r", "--readFile"].includes(args[2].toLowerCase())) {
            try {
                fs_1.readFile(args[3], "utf-8", (err, data) => {
                    if (err)
                        throw console.error(err);
                    console.log(Base64Encode_1.Base64Encode(data));
                });
            }
            catch (error) {
                throw new FileError_1.FileError();
            }
            ;
        }
        ;
    }
    ;
}))();

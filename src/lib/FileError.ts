export class FileError extends Error {

    constructor(
        errorMessage: string = "File Error: Image file not given"
     ) {

        super(errorMessage);
        this.name = errorMessage;

    };

};

export class MissingFileError extends Error {

    constructor(
        errorMessage: string = "File was not given during execution!"
    ) {

        super(errorMessage);
        this.name = errorMessage;

    };

}
export const Base64Encode = (
    data: any
) => {
    
    return Buffer.from(
        data, 
        "binary"
    ).toString("base64");

};
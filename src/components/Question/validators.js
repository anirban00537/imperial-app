export function isvalidDate(datePattern){
    if(!datePattern) return false;
    return /(\d|\d\d)\/(\d|\d\d)\/\d\d\d\d/.test(datePattern);
}
export function isValidInput(input){
    if(!input) return false;
    return input.trim()!=="";
}



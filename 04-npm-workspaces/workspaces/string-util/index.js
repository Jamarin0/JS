export default class StringUtil {
    static revomeEmptySpaces(str){
            return str.replace(/\s/g, "")
    }
    static isEmpty(str){
        return str.length === 0
    }
}
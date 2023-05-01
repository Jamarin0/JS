import {deepStrictEqual} from "assert";
import DateUtil from "./index.js";


{
    const format = 'dd-M-Y'
    const expected = { error: `the format ${format} is not available yet`}
    const date = new Date(1990, 2, 2)
    const result = DateUtil.formatDate(date, format)
    deepStrictEqual(result, expected)
}

{
    const expected = '01-12-2021'
    const format = 'dd-mm-yyyy'
    const date = new Date('2021-12-01')

    const result = DateUtil.formatDate(date, format)
    deepStrictEqual(result, expected)
}

{
    const expected = '22/06/2023'
    const format = 'dd/mm/yyyy'
    const date = new Date('2023-06-22')

    const result = DateUtil.formatDate(date, format)
    deepStrictEqual(result, expected)
}

{
    const expected = '2023-06-22'
    const format = 'yyyy-mm-dd'
    const date = new Date('2023-06-22')

    const result = DateUtil.formatDate(date, format)
    deepStrictEqual(result, expected)
}

///formatString
{
    const expected = {error: 'your text is empty'}
    const date = '' 

    const result = DateUtil.formatString(date)
    deepStrictEqual(result, expected)
}

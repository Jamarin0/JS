const availableFormat = {
    'dd-mm-yyyy': '$<day>-$<month>-$<year>',
    'yyyy-mm-dd': '$<year>-$<month>-$<day>',
    'dd/mm/yyyy': '$<day>/$<month>/$<year>',
}

const yymmdd = /(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/g

export default class DateUtil {
    static formatDate(date, format){
      if (!Object.keys(availableFormat).includes(format)) {
        return {
            error: `the format ${format} is not available yet`
        }
      }
      const exp = availableFormat[format]
      const [result] = date.toISOString().match(yymmdd)

      return result.replace(yymmdd, exp)
    }

    static formatString(date, currentFormat, expectedFormat) {
        
    }
}
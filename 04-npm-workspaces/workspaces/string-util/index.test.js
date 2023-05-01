import {deepStrictEqual} from 'assert';
import StringUtil from '.';

{
 const expected = ''
 const data = '';
 const result = StringUtil.isEmpty(data);
 deepStrictEqual(result, expected);    
}


{
  const expected = "not_empty";
  const data = "not_empty";
  const result = StringUtil.isEmpty(data);
  deepStrictEqual(result, expected);
}
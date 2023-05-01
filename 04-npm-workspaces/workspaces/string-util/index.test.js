import {deepStrictEqual} from 'assert';
import StringUtil from './index.js';

{
 const expected = true
 const data = '';
 const result = StringUtil.isEmpty(data);
 deepStrictEqual(result, expected);    
}


{
  const expected = false;
  const data = "not_empty";
  const result = StringUtil.isEmpty(data);
  deepStrictEqual(result, expected);
}


{
  const expected = 'HELO';
  const data = "H E L O";
  const result = StringUtil.revomeEmptySpaces(data);
  deepStrictEqual(result, expected);
}


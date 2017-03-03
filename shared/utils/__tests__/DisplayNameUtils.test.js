//
//  DisplayNameUtils.test
//  jest-issues
//
//  Created on 03/03/2017
//  Copyright (c) 2017 Brigad. All rights reserved.
//

import { setName, getName } from 'src/shared/utils/NameUtils';
import { printName } from 'src/shared/utils/DisplayNameUtils';

test('display name', () => {
  setName('test');
  console.log(getName());
  printName();
  console.log(getName());
});

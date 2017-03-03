//
//  NameUtils.test
//  jest-issues
//
//  Created on 03/03/2017
//  Copyright (c) 2017 Brigad. All rights reserved.
//

import { setName, getName } from 'src/shared/utils/NameUtils';

test('without setting it', () => {
  expect(getName()).toBe('');
});

test('after setting it', () => {
  setName('test');
  expect(getName()).toBe('test');
});

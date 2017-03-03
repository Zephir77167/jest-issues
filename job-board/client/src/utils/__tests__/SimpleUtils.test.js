//
//  SimpleUtils.test
//  jest-issues
//
//  Created on 03/03/2017
//  Copyright (c) 2017 Brigad. All rights reserved.
//

import { getDeliciousCookie } from 'src/utils/SimpleUtils';

test('yum?', () => {
  expect(getDeliciousCookie()).toBe('cookie');
});

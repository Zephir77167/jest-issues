//
//  NameUtils
//  jest-issues
//
//  Created on 03/03/2017
//  Copyright (c) 2017 Brigad. All rights reserved.
//

let name;

export const setName = (newName) => {
  name = newName;
};

export const getName = () => name || '';

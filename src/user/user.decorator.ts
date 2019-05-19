import { createParamDecorator } from '@nestjs/common';
import { SECRET } from '../config';
import * as jwt from 'jsonwebtoken';

export const User = createParamDecorator((data, req) => {

  // if route is protected, there is a user set in auth.middleware
  if (!!req.user) {
    // console.log('Request already has user info', req.user);
    return !!data ? req.user[data] : req.user;
  };

  // in case a route is not protected, we still want to get the optional auth user from jwt
  const token = req.headers.authorization ? (req.headers.authorization as string).split(' ') : null;
  if (token && token[1]) {
    const decoded: any = jwt.verify(token[1], SECRET);
    // console.log('From jwt', decoded);
    return !!data ? decoded[data] : decoded.user;
  }

  console.log('Can not find any user info', req.headers ? req.headers.authorization: 'No req header authorization');
});

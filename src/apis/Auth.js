import { request } from '~/apis/index';

export const signInAPI = (payload) => {
  return request({
    url: '/user/authenticate',
    method: 'POST',
    body: JSON.stringify(payload)
  })
  .then((data) => {
    // DATA 처리 ~
    console.log('signin?');
    console.log(data);
    return data
  }, false)
}

export const signUpAPI = (payload) => {
  return request({
    url: '/user/signup',
    method: 'POST',
    body: JSON.stringify(payload)
  })
  .then((data) => {
    // TODO : User Model 에 대해서 처리 할거야..?
    return data;
  }, false)
}

export const registerTokenAPI = (registrationToken) => {
  return request({
    url:'/user/account/update/register_token',
    method:'POST',
    body:JSON.stringify({registration_token:registrationToken})
  }).then((data) => {
    return data;
  }, false)
}
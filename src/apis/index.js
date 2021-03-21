import { APP_API_PATH } from '~/Constant';
import store from '~/config/store';

// Token 얻기
export const getToken = () => {
  let jwtToken 
  try{
    jwtToken = store.getState().user.jwtToken
  }catch(e){
    jwtToken = null
  }

  return jwtToken
}

// TODO : 이건 뭐하는 것일까 ...?
// export function getPusherUrl() { 
//   return APP_SERVER_PATH + '/pusher/auth_new'
// }

// axios 대신 fetch 를 이용해서 서버와의 연결을 하게 해주는 함수
export const request = async (options, headerData, contentType) => {
  // Header
  let headers = new Headers({});
  // ContentType
  if(contentType === "image"){
    // 이미지 처리
  }
  else{
    headers.append("Content-Type", "application/json");
  }
  // Datas
  if(headerData) {
    headers.append('Password', headerData);
  }

  // Authenticate : Bearer
  let bearer = null;
  const jwtToken = getToken()
  if(jwtToken) {
    bearer = 'Bearer ' + jwtToken;
    headers.append('Authorization', bearer);
  } 
  const defaults = {headers: headers};

  const url = options.url;
  delete options.url;
  // props.options 에 url, method, body 포함
  options = Object.assign({}, defaults, options);

  return await fetch(APP_API_PATH + url, options)
    .then(response => response.json()
    .then(json => {
        if(!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch(e => {
      console.log(e);
    })
}
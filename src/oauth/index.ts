import { ResourceServers } from './resourceServers';
import { KakaoAPI } from './kakao/KakaoAPI';
import { AbstractExternalAccountAPI } from './base';

const apis = {
  kakao: new KakaoAPI()
};

export function getApi(
  resourceServer: ResourceServers
): AbstractExternalAccountAPI {
  return apis[resourceServer];
}

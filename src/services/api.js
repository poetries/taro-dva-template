// import { stringify } from 'qs';
import request from '@utils/request';

export async function queryMock(params) {
  return request({
    url: '/mock/5b31f47908b3642d152c506a/v1_copy/customer-consume-reports',
    method: "GET",
    type: 'json',
    data: {
      ...params
    }
  });
}

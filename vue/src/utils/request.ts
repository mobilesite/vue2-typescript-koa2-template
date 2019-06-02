/**
 * @file 统一发送请求的地方
 */

import axios from 'axios';

export async function get(url: string, options: any) {
  const response = await axios.get(url, options);
  return response.data;
}

import fetch from 'node-fetch';
import { URL, URLSearchParams } from 'url';

export default class HTTPInterceptor {
  constructor(url, headers = {}) {
    this.url = url;
    this.headers = headers;
  }

  get(path, query = {}) {
    const url = new URL(`${this.url}${path}`);
    url.search = new URLSearchParams(query);
    return fetch(url, { method: 'GET', headers: this.headers }).then(req => req.json());
  }

  post(path, body = {}) {
    const url = new URL(`${this.url}${path}`);
    return fetch(url, { method: 'POST', headers: this.headers, body: JSON.stringify(body) }).then(
      req => req.json()
    );
  }
}

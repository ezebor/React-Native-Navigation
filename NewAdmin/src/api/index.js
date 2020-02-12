import axios from 'axios';
import {AUTH_TOKEN} from '../constants';
import orders from './orders';

const instance = axios.create({
  baseURL: 'https://api.nuvemshop.com.br',
});

instance.defaults.headers.common['Authentication'] = AUTH_TOKEN;

const api = {
  ...instance,
  orders,
};

export default api;

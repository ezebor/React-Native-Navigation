import api from '.';

const orders = {
  getOrders() {
    return api.get('/v1/977917/orders');
  },
};

export default orders;

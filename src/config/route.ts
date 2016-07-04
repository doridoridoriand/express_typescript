import Index from '../app/controllers/index';

export default class Route {
  static init(app) {
    app.get('/index', Index.index)
  }
}

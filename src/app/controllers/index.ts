export default class Index {
  static index(req, res) {
    const json = {
      status: 0,
      data: ['this is json response']
    };
    res.json(json);
  }
}

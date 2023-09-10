class PersonController {
  static get(req, res) {
    res.send('Person retrieved!');
  }

  static create(req, res) {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).send({ error: 'Name is required' });
      }
      res.send('Person created!');
    } catch (error) {
      res.status(500).send({ error: 'Something went wrong' });
    }
  }

  static update(req, res) {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).send({ error: 'Name is required' });
      }
      res.send('Person updated!');
    } catch (error) {
      res.status(500).send({ error: 'Something went wrong' });
    }
  }

  static delete(req, res) {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).send({ error: 'Name is required' });
      }
      res.send('Person deleted!');
    } catch (error) {
      res.status(500).send({ error: 'Something went wrong' });
    }
  }
}

export default PersonController;

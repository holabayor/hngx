import Person from '../models/person.js';

class PersonController {
  /**
   * Retrieves all people from the database and sends them as a response.
   *
   * @param {object} req - The request object.
   * @param {object} res - The response object.
   */
  static async get(req, res) {
    try {
      const people = await Person.find();
      res.status(200).send(people);
    } catch (error) {
      res.status(500).send({ error: 'Something went wrong' });
    }
  }

  /**
   * Retrieves a person by their ID.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getById(req, res) {
    const { id } = req.params;
    try {
      // Retrieve the person by ID
      const person = await Person.findById(id);
      if (!person) {
        // If person is not found, return a 404 error
        res.status(404).send({ error: 'Person not found' });
      } else {
        // If person is found, return the person object
        res.status(200).send(person);
      }
    } catch (error) {
      // If an error occurs, return a 500 error
      res.status(500).send({ error: 'Something went wrong' });
    }
  }

  /**
   * Creates a new person in the database.
   *
   * @param {Object} req - The HTTP request object.
   * @param {Object} res - The HTTP response object.
   * @returns {Object} The HTTP response object with the created person or an error message.
   */
  static async create(req, res) {
    try {
      // Extract the name from the request body
      const { name } = req.body;

      // Check if the name is provided
      if (!name) {
        // Return a 400 error if the name is missing
        return res.status(400).send({ error: 'Name is required' });
      }

      // Check if a person with the given name already exists
      const personExists = await Person.findOne({ name });
      if (personExists) {
        // Return a 400 error if the person already exists
        return res.status(400).send({ error: 'Person already exists' });
      }

      // Create a new person object with the given name
      const newPerson = new Person({ name });
      // Save the new person to the database
      await newPerson.save();

      // Return a 201 status code with the created person
      return res.status(201).send(newPerson);
    } catch (error) {
      // Return a 500 error if something went wrong
      return res.status(500).send({ error: 'Something went wrong' });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const person = await Person.findById(id);

      if (!person) {
        return res.status(404).send({ error: 'Person not found' });
      }

      person.name = name;
      await person.save();

      return res.status(200).send(person);
    } catch (error) {
      return res.status(500).send({ error: 'Something went wrong' });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      const result = await Person.deleteOne({ _id: id });

      if (result.deletedCount === 0) {
        return res.status(404).send({ error: 'Person not found' });
      }

      return res.status(204).send();
    } catch (error) {
      return res.status(500).send({ error: 'Something went wrong' });
    }
  }
}

export default PersonController;

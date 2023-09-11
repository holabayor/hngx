import chai from 'chai';
import chaiHttp from 'chai-http';
import PersonController from '../contollers/person.js';

chai.use(chaiHttp);
const expect = chai.expect;

describe('PersonController', () => {
  describe('get', () => {
    it('should retrieve all people from the database', async () => {
      const req = {};
      const res = {
        status: function (code) {
          expect(code).to.equal(200);
          return this;
        },
        send: function (response) {
          expect(response).to.be.an('object');
          expect(response.persons).to.be.an('array');
        },
      };

      await PersonController.get(req, res);
    });
  });

  describe('getById', () => {
    it('should retrieve a person by their ID from the database', async () => {
      const req = {
        params: {
          id: 'personId',
        },
      };
      const res = {
        status: function (code) {
          expect(code).to.equal(200);
          return this;
        },
        send: function (response) {
          expect(response).to.be.an('object');
          expect(response.name).to.equal('John Doe');
        },
      };

      await PersonController.getById(req, res);
    });
  });

  describe('create', () => {
    it('should create a new person in the database', async () => {
      const req = {
        body: {
          name: 'John Doe',
        },
      };
      const res = {
        status: function (code) {
          expect(code).to.equal(201);
          return this;
        },
        send: function (response) {
          expect(response).to.be.an('object');
          expect(response.message).to.equal('Person created successfully');
          expect(response.newPerson).to.be.an('object');
          expect(response.newPerson.name).to.equal('John Doe');
        },
      };

      await PersonController.create(req, res);
    });
  });

  describe('update', () => {
    it("should update a person's name in the database", async () => {
      const req = {
        params: {
          id: 'personId',
        },
        body: {
          name: 'Jane Smith',
        },
      };
      const res = {
        status: function (code) {
          expect(code).to.equal(200);
          return this;
        },
        send: function (response) {
          expect(response).to.be.an('object');
          expect(response.message).to.equal('Person updated successfully');
          expect(response.person).to.be.an('object');
          expect(response.person.name).to.equal('Jane Smith');
        },
      };

      await PersonController.update(req, res);
    });
  });

  describe('delete', () => {
    it('should delete a person from the database', async () => {
      const req = {
        params: {
          id: 'personId',
        },
      };
      const res = {
        status: function (code) {
          expect(code).to.equal(204);
          return this;
        },
        send: function (response) {
          expect(response).to.be.an('object');
          expect(response.message).to.equal('Person deleted successfully');
        },
      };

      await PersonController.delete(req, res);
    });
  });
});

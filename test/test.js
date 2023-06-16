const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../src/app');

chai.use(chaiHttp);

describe("REGISTRATION FORM TEST CASES ", function () {
    it('USER REGISTER SUCESSFULLY ', function (done) {
        chai.request(app)
            .post('/resdata')
            .send({
                email: 'ok@gmail.com',
                password: 'ok123456',
                confirmpassword: 'ok123456'
            })
            .end(function (err, res) {
              

                expect(res).to.have.status(200);
                done();
            });
    });

    it('should return an error if passwords do not match', (done) => {
        chai
            .request(app)
            .post('/resdata')
            .send({
                email: 'test@example.com',
                password: 'password123',
                confirmPassword: 'differentpassword'
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                console.log(res.body);
               
                done();
            });
    });
    
});

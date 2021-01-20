//During the test the env variable is set to test
process.env.NODE_ENV = "test";
const API = "http://localhost:6000";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();

chai.use(chaiHttp);

describe("/POST /translate", () => {
  it("it should POST a word, target and soruce language", (done) => {
    const translation = {
      target: "Telugu",
      word: "Hello",
      source: "English",
    };
    chai
      .request(API)
      .post("/translate")
      .send(translation)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("translation");
        done();
      });
  });
});

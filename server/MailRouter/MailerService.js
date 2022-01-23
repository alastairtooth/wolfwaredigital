module.exports = function (contents) {
  const nodeMailer = require("nodemailer");
  const transporter = nodeMailer.createTransport({
    service: "hotmail",
    auth: {
      user: "SENDER-TelesenseANZ@outlook.com",
      pass: "Marcus1968",
    },
  });

  const date = new Date();
  console.log(contents)

  const options = {
    from: "SENDER-TelesenseANZ@outlook.com",
    to: "wolfwaredigital@gmail.com",
    subject: `New Sales Lead: ${contents.fName} ${contents.lName}`,
    html: `
    <style>
    .text-container {
      display: flex;
      align-items: flex-end;
      background-image: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
      background-size: cover;
      background-position: center;
      border-radius: 5px;
      width: 100%;
      min-height: 250px;
    }
    h1 {
      color: red;
      margin-left: 10px;
      margin-bottom: 10px;
    }
    table {
      padding-bottom: 200px;
    }
    td:first-child {
      border: 1px solid #999;
      padding: 0.5rem;
      color: white;
      font-weight: bold;
      background: black;
      text-align: right;
    }
    td:last-child {
      border: 1px solid #999;
      padding: 0.5rem;
      text-align: left;
    }
    </style>
    <div class="text-container">
    </div>
    <h2 style="padding-bottom: 5px;" >Customer Details</h2>
    <table>
      <tr>
        <td>Date received</td>
        <td>${date}</td>
      </tr>
      <tr>
        <td>First name:</td>
        <td>${contents.fName}</td>
      </tr>
     <tr>
        <td>Last name:</td>
        <td>${contents.lName}</td>
      </tr>
      <tr>
        <td>Company:</td>
        <td>${contents.company}</td>
      </tr>
      <tr>
        <td>Phone:</td>
        <td>${contents.phone}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>${contents.email}</td>
      </tr>
      <tr>
        <td>Comments:</td>
        <td>${contents.contents}</td>
      </tr>
    </table>
    `,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(info.accepted);
  });
}

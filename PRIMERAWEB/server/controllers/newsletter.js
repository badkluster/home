const Newsletter = require("../models/newsletter");

function suscribeEmail(req, res) {
  const email = req.params.email;
  const newsletter = new Newsletter();

  if (!email) {
    res.status(404).send({ code: 404, message: "El email es obligatorio" });
  } else {
    newsletter.email = email.toLowerCase();
    newsletter.save((err, newsletterStore) => {
      if (err) {
        res.status(500).send({ code: 500, message: "El email ya existe." });
      } else {
        if (!newsletterStore) {
          res.status(400).send({
            code: 400,
            message: "Error al registrar en la newsletter.",
          });
        } else {
          res
            .status(200)
            .send({ code: 200, message: "Email registrado correctamente." });
        }
      }
    });
  }
}

function getNewsletter(req, res) {
  Menu.find()
    .sort({ order: "asc" })
    .exec((err, newsletterStored) => {
      if (err) {
        res.status(500).send({ message: "Error del servidor." });
      } else {
        if (!newsletterStored) {
          res.status(404).send({
            message: "No se ha encontrado ningun Correo",
          });
        } else {
          res.status(200).send({ menu: newsletterStored });
        }
      }
    });
}

module.exports = {
  suscribeEmail,
  getNewsletter,
};

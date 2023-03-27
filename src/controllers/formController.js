exports.form_post = function (req, res) {
  let birdData = {
    Species: req.body.Species,
    Nickname: req.body.Nickname,
    Status: req.body.Status,
  };
  console.log(birdData);

  res.render('form-submit-comfirm', birdData);
};

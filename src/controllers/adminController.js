module.exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "this is create route" });
};

module.exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "this is read route" });
};

module.exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "this is delete route" });
};

module.exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "this is update route" });
};

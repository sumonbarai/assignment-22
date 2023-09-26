exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "this is create route" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "this is read route" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "this is delete route" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "this is update route" });
};

const mockData = { email: "theprabesh723@gmail.com", password: "apple" };

const login = async (req, res) => {
  const data = req.body;
  if (!data.email || !data.password) {
    return res.json({ error: "Please enter credentials", status: "error" });
  } else {
    if (data.email === mockData.email && data.password === mockData.password) {
      return res.json({ success: "Correct credentials", status: "success" });
    } else {
      return res.json({ error: "Credential Worng", status: "error" });
    }
  }
};

module.exports = login;

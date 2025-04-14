exports.updateLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    // Here you'd store to DB or in-memory store like Redis
    res.status(200).json({ message: "Driver location updated", latitude, longitude });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = [{ name: "Pizza Place" }, { name: "Sushi Bar" }];
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getMenuByRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const menuItems = [{ name: "Burger" }, { name: "Salad" }];
    res.status(200).json(menuItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
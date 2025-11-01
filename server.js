app.post("/api/data", (req, res) => {
  const { text } = req.body;
  res.json({ response: `Received: ${text}` });
});

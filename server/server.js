import app from './app.js';
import connectionToDb from './configs/db.config.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`App started at http://localhost:${PORT}`);
  await connectionToDb();
});

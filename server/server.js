import app from './app.js';
import connectionToDb from './configs/db.config.js';
import cloudinary from 'cloudinary';

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectionToDb();
  console.log(`App started at http://localhost:${PORT}`);
});

// cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

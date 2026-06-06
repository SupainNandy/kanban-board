const app = require('./src/app');
const PORT = process.env.PORT ||5000;
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

dotenv.config();
app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
});
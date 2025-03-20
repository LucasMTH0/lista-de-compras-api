import userRoutes from "./routes/User";
import listRoutes from "./routes/List";
import {initializeMongoDB} from "./models/mongoose";
import productRoutes from "./routes/Product";

initializeMongoDB()
const app = require('./app');

app.use('/user', userRoutes);
app.use('/lists', listRoutes);
app.use('/products', productRoutes);

app.listen(process.env.PORT, () => {
    console.log(`RODANDO NA PORTA http://localhost:${process.env.PORT }`)
})
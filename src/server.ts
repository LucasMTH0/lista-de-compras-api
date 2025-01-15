import userRoutes from "./routes/User";
import listRoutes from "./routes/List";

const app = require('./app');
app.use('/user', userRoutes);
app.use('/list', listRoutes);

app.listen(process.env.PORT, () => {
    console.log(`RODANDO NA PORTA http://localhost:${process.env.PORT }`)
})
import { httpServer } from "./app.js";

const PORT = process.env.PORT || 8000;
const startServer = () => {
    
    httpServer.listen(PORT, () => {
      console.log("⚙️  Server is running on port: " + PORT);
    });
};

try {
    startServer();
  } catch (err) {
    console.log("connect error: ", err);
}

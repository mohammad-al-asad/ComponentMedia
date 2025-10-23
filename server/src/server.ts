import app from "./index.js";
import mongoose from "mongoose"

const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL || ""

main().catch(err => console.log(err))

async function main() {
  await mongoose.connect(DATABASE_URL);

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
  })
}

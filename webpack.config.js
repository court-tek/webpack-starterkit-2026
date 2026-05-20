import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: "./assets/js/hyper/app.js",
    output: {
        path: path.resolve(__dirname, "./public/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                use: ["style-loader", "css-loader", "sass-loader"],
                test:/\.scss$/,
            }
        ]
    },
  devServer: {
        port: 8080,
        static: path.join(__dirname, "public"),
        hot: true,
        compress: true,
  },
  mode: "development"
};
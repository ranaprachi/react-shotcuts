import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import packageJson from "./package.json"

const config = {
  input: `src/index.js`,
  plugins: [
    external(),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
      externalHelpers: true
    }),
    commonjs(),
    resolve()
  ],
  output: [
    {
      file: packageJson.module,
      format: "esm"
    },
    {
      file: packageJson.main,
      format: "cjs",
      exports: "named"
    }
  ]
};

export default config
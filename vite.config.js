import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import libCss from "vite-plugin-libcss";
import dts from "vite-plugin-dts";
import * as path from "path";
export default defineConfig({
    plugins: [react(), libCss(), dts()],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "ReactTypeWriterEffect",
            fileName: "react-type-writer-effect",
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});

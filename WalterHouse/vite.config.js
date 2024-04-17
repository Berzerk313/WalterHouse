import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
import injectHTML from "vite-plugin-html-inject";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [FullReload(["config/routes.rb", "app/views/**/*"])],
  plugins: [injectHTML()],
  plugins: [handlebars()],
});

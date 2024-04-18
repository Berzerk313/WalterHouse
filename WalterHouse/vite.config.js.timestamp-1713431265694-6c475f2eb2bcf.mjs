// vite.config.js
import { defineConfig, resolveConfig } from "file:///D:/Projects/Github/WalterHouse/WalterHouse/WalterHouse/node_modules/vite/dist/node/index.js";
import FullReload from "file:///D:/Projects/Github/WalterHouse/WalterHouse/WalterHouse/node_modules/vite-plugin-full-reload/dist/index.js";
import injectHTML from "file:///D:/Projects/Github/WalterHouse/WalterHouse/WalterHouse/node_modules/vite-plugin-html-inject/dist/index.mjs";
import handlebars from "file:///D:/Projects/Github/WalterHouse/WalterHouse/WalterHouse/node_modules/vite-plugin-handlebars/dist/index.js";
var __vite_injected_original_dirname = "D:\\Projects\\Github\\WalterHouse\\WalterHouse\\WalterHouse";
var vite_config_default = defineConfig({
  plugins: [injectHTML(), handlebars({ reloadOnPartialChange: true, partialDirectory: resolve(__vite_injected_original_dirname, "src/html") })],
  server: {
    port: 3025,
    host: "0.0.0.0",
    hmr: true
  }
  // plugins: [injectHTML()],
  // plugins: [handlebars({reloadOnPartialChange: true, partialDirectory: resolve(__dirname, 'src/html')})],
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxHaXRodWJcXFxcV2FsdGVySG91c2VcXFxcV2FsdGVySG91c2VcXFxcV2FsdGVySG91c2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXEdpdGh1YlxcXFxXYWx0ZXJIb3VzZVxcXFxXYWx0ZXJIb3VzZVxcXFxXYWx0ZXJIb3VzZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMvR2l0aHViL1dhbHRlckhvdXNlL1dhbHRlckhvdXNlL1dhbHRlckhvdXNlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCByZXNvbHZlQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBGdWxsUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWZ1bGwtcmVsb2FkJztcclxuaW1wb3J0IGluamVjdEhUTUwgZnJvbSAndml0ZS1wbHVnaW4taHRtbC1pbmplY3QnO1xyXG5pbXBvcnQgaGFuZGxlYmFycyBmcm9tICd2aXRlLXBsdWdpbi1oYW5kbGViYXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBwbHVnaW5zOiBbIGluamVjdEhUTUwoKSwgaGFuZGxlYmFycyh7IHJlbG9hZE9uUGFydGlhbENoYW5nZTogdHJ1ZSwgcGFydGlhbERpcmVjdG9yeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaHRtbCcpIH0pXSwgXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgcG9ydDogMzAyNSxcclxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICBobXI6IHRydWVcclxuICAgIH0sXHJcbiAgICAvLyBwbHVnaW5zOiBbaW5qZWN0SFRNTCgpXSxcclxuICAgIC8vIHBsdWdpbnM6IFtoYW5kbGViYXJzKHtyZWxvYWRPblBhcnRpYWxDaGFuZ2U6IHRydWUsIHBhcnRpYWxEaXJlY3Rvcnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2h0bWwnKX0pXSxcclxufSk7XHJcblxyXG4vLyBpbmplY3RIVE1MKHtcclxuLy8gICAgIGRlYnVnOiB7XHJcbi8vICAgICAgICAgbG9nUGF0aDogdHJ1ZSxcclxuLy8gICAgIH0sXHJcbi8vIH0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdXLFNBQVMsY0FBYyxxQkFBcUI7QUFDNVksT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFIdkIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFFLFdBQVcsR0FBRyxXQUFXLEVBQUUsdUJBQXVCLE1BQU0sa0JBQWtCLFFBQVEsa0NBQVcsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUFBLEVBQ3RILFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxFQUNQO0FBQUE7QUFBQTtBQUdKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

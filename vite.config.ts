import { UserConfigExport, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const baseConfigs: UserConfigExport = {
    plugins: [react()],
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "./src/app"),
        "@entities": path.resolve(__dirname, "./src/entities"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@shared": path.resolve(__dirname, "./src/shared"),
        "@widgets": path.resolve(__dirname, "./src/widgets"),
      },
    },
  };
  if (command === "serve") {
    return {
      ...baseConfigs,
      define:{
        _APP_BASE_API_:JSON.stringify("http://localhost:1337/api")
      }
    };
  } else {
    // command === 'build'
    return {
      ...baseConfigs,
      define:{
        _APP_BASE_API_:JSON.stringify("http://localhost:1337/api")
      }
    };
  }
});

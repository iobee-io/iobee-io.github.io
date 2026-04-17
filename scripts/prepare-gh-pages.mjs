import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const indexPath = join(distDir, "index.html");
const notFoundPath = join(distDir, "404.html");

if (!existsSync(indexPath)) {
  console.warn("[prepare-gh-pages] dist/index.html not found. Skipping 404 copy.");
  process.exit(0);
}

copyFileSync(indexPath, notFoundPath);
console.log("[prepare-gh-pages] 404.html generated from index.html");
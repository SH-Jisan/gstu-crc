import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Read base semantic version from package.json
const pkgPath = path.resolve(__dirname, "../package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
const semver = pkg.version || "1.0.0";

// 2. Extract commit hash: check Netlify CI environment first, fallback to local git
let commitHash = "dev";
if (process.env.COMMIT_REF) {
  commitHash = process.env.COMMIT_REF.slice(0, 7);
} else {
  try {
    commitHash = execSync("git rev-parse --short HEAD", {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    commitHash = Date.now().toString(36).slice(-6);
  }
}

// 3. Assemble version metadata
const fullTag = `v${semver}-${commitHash}`;
const timestamp = new Date().toISOString();
const buildDate = timestamp.split("T")[0];

const versionData = {
  version: semver,
  commit: commitHash,
  tag: fullTag,
  buildTime: timestamp,
  buildDate: buildDate,
};

// 4. Save to frontend/src/version.json for Next.js imports
const srcDest = path.resolve(__dirname, "../src/version.json");
fs.writeFileSync(srcDest, JSON.stringify(versionData, null, 2) + "\n", "utf-8");

// 5. Save to frontend/public/version.json for HTTP inspection
const publicDest = path.resolve(__dirname, "../public/version.json");
fs.writeFileSync(publicDest, JSON.stringify(versionData, null, 2) + "\n", "utf-8");

console.log(`[CRC Version Generator] Generated version ${fullTag} (${buildDate})`);

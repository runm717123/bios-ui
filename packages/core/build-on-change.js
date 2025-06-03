import { exec } from "child_process";
import { existsSync, writeFileSync } from "fs";

const FLAG_FILE = ".ran-once";

if (existsSync(FLAG_FILE)) {
  console.log("✅ Detected change. Running build:css...");
  exec("pnpm build:css", (err, stdout, stderr) => {
    if (err) console.error(stderr);
    else console.log(stdout);
  });
} else {
  console.log("⏭️ Skipping first run...");
  writeFileSync(FLAG_FILE, "ran");
}

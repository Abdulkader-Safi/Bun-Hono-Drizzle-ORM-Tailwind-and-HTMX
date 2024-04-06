import { db } from ".";
import * as schema from "./schema";

(async () => {
  await db.insert(schema.todos).values([
    {
      content: "Subscribe to CodeBrew",
    },
    {
      content: "Like the video",
    },
    {
      content: "Check out the other videos",
    },
  ]);

  console.log(`Seeding complete.`);
})();

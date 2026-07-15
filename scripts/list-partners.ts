import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2024-10-01" });
client
  .fetch(
    `*[_type == "partner"] | order(order asc){ _id, name, type, order, url, "logo": logo.asset->url }`
  )
  .then((docs) => console.log(JSON.stringify(docs, null, 2)));

import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Jam Boy", short_name: "Jam Boy", description: "A pocket music player for your own library.", start_url: "/jam-boy", display: "standalone", background_color: "#f3ece1", theme_color: "#eae4da" };
}

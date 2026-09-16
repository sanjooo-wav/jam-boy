import { readdir } from "node:fs/promises";
import { join } from "node:path";
const AUDIO_EXTENSION = /\.(aac|flac|m4a|mp3|ogg|wav)$/i;
export const runtime = "nodejs";
export async function GET() {
  try {
    const files = await readdir(join(process.cwd(), "public", "music"), { withFileTypes: true });
    const tracks = files.filter((file) => file.isFile() && AUDIO_EXTENSION.test(file.name)).sort((a, b) => a.name.localeCompare(b.name)).map((file) => ({ name: file.name.replace(/\.[^/.]+$/, "").replace(/[_-]+/g, " "), url: `/music/${encodeURIComponent(file.name)}` }));
    return Response.json(tracks, { headers: { "cache-control": "no-store" } });
  } catch { return Response.json([]); }
}

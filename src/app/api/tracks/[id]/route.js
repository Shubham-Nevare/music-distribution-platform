import { getTrackById } from '../../../../data/tracks.js';

// GET /api/tracks/[id] - Get a specific track
export async function GET(request, { params }) {
    const track = getTrackById(params.id);

    if (!track) {
        return Response.json({ error: "Track not found" }, { status: 404 });
    }

    return Response.json(track);
}
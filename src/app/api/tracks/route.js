import { getTracks, addTrack } from '../../../data/tracks.js';

// GET /api/tracks - Get all tracks
export async function GET() {
    const tracks = getTracks();
    return Response.json(tracks);
}

// POST /api/tracks - Add a new track
export async function POST(request) {
    try {
        const newTrack = await request.json();
        const track = addTrack(newTrack);
        return Response.json(track, { status: 201 });
    } catch (error) {
        return Response.json({ error: "Invalid request body" }, { status: 400 });
    }
}
// Shared tracks data store
let tracks = [{
        id: 1,
        title: "Dreamscape",
        artist: "Aria Smith",
        releaseDate: "2024-05-10",
        genre: "Pop",
        status: "Published",
    },
    {
        id: 2,
        title: "Midnight Beats",
        artist: "DJ Raven",
        releaseDate: "2024-06-22",
        genre: "Electronic",
        status: "Draft",
    },
    {
        id: 3,
        title: "Echoes of Tomorrow",
        artist: "Liam Grey",
        releaseDate: "2024-07-01",
        genre: "Rock",
        status: "Submitted",
    },
];

// Helper functions
export const getTracks = () => tracks;

export const getTrackById = (id) => {
    const trackId = parseInt(id);
    return tracks.find((t) => t.id === trackId);
};

export const addTrack = (newTrack) => {
    const newId = Math.max(...tracks.map((t) => t.id)) + 1;
    const track = {
        id: newId,
        title: newTrack.title,
        artist: newTrack.artist,
        releaseDate: newTrack.releaseDate,
        genre: newTrack.genre,
        status: "Draft",
    };
    tracks.push(track);
    return track;
};
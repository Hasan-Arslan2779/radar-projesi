export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.812898",
    bl_lng: "27.59446",
    tr_lat: "41.582989",
    tr_lng: "44.816771",
    limit: "300",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "446af5c39fmsh8bdd4b925ca3f32p194697jsn9467629ea658",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

// detail
export const detailOpt = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "446af5c39fmsh8bdd4b925ca3f32p194697jsn9467629ea658",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

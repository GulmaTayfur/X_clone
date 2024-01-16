const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a40479d2b8mshc4b883a4f9191d1p1d92b1jsn4316bb916aee",
    "X-RapidAPI-Host": "twitter-api45.p.rapidapi.com",
  },
};

export default class API {
  static async getUser(username) {
    const res = await fetch(
      `https://twitter-api45.p.rapidapi.com/screenname.php?screenname=${username}`,
      options
    );
    const data = await res.json();

    return data;
  }
  static async getData(endpoint) {
    try {
      const res = await fetch(
        `https://twitter-api45.p.rapidapi.com${endpoint}`,
        options
      );
      return await res.json();
    } catch (err) {
      console.log("Verileri alırken hata", err);
    }
  }
}

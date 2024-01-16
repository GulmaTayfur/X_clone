const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a40479d2b8mshc4b883a4f9191d1p1d92b1jsn4316bb916aee",
    "X-RapidAPI-Host": "twitter-api45.p.rapidapi.com",
  },
};

export default class API {
  static async getUser(username) {
    // 1- verileri al.
    const res = await fetch(
      `https://twitter-api45.p.rapidapi.com/screenname.php?screenname=${username}`,
      options
    );

    // 2- json verisini javascript verisine çevir.
    const data = await res.json();

    // 3- veriyi fonksiyonun çağrıldığı yere gönder.
    return data;
  }

  // parametre oalrak gönderdiğimiz endpoint'deki verileri alır
  static async getData(endpoint) {
    try {
      // parametre olarak gelen uçnoktaya istek at
      const res = await fetch(
        `https://twitter-api45.p.rapidapi.com${endpoint}`,
        options
      );

      // gelen veriyi işle ve döndür
      return await res.json();
    } catch (err) {
      console.log("Verileri alırken hata", err);
    }
  }
}

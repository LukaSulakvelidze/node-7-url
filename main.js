const http = require("http");
const url = require("url");
const fs = require("fs/promises");

// 1)
// const myServer = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url);
//   if (parsedUrl.pathname === "/html") {
//     res.setHeader("Content-Type", "text/html");
//     res.write(`
//      <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <table>
//       <tr>
//         <th>id</th>
//         <th>name</th>
//         <th>email</th>
//       </tr>
//       <tr>
//         <td>1</td>
//         <td>John</td>
//         <td>john@gmail.com</td>
//       </tr>
//     </table>
//   </body>
// </html>
//     `);
//     return res.end();
//   } else if (parsedUrl.pathname === "/api") {
//     const animalData = [
//       { name: "Dog", age: 6 },
//       { name: "Kitten", age: 5 },
//     ];
//     res.setHeader("content-type", "application/json");
//     res.write(JSON.stringify(animalData));
//     return res.end();
//   } else if (parsedUrl.pathname === "/time") {
//     res.setHeader("content-type", "application/json");
//     res.write(JSON.stringify(new Date().toISOString()));
//     return res.end();
//   } else {
//     res.setHeader("content-type", "application/json");
//     res.write(JSON.stringify("404 not found"));
//     return res.end();
//   }
// });

// myServer.listen(3000, () => {
//   console.log("Server running on port http://localhost:3000");
// });

// 2)
// const myServer = http.createServer(async (req, res) => {
//   const parsedUrl = url.parse(req.url);
//   if (parsedUrl.pathname === "/movies") {
//     try {
//       const rawData = await fs.readFile("movieData.json", "utf-8");
//       const data = JSON.parse(rawData).results;
//       const mappedMovies = data.map((el) => {
//         return {
//           Title: el.title,
//           Genre: el.genre_ids,
//           ReleaseData: el.release_date,
//         };
//       });
//       const randomMovieIndex = Math.floor(Math.random() * mappedMovies.length);
//       res.setHeader("Content-Type", "application/json");
//       res.write(JSON.stringify(mappedMovies[randomMovieIndex]));
//       return res.end();
//     } catch (error) {
//       res.setHeader("Content-Type", "text/plain");
//       res.write("Internal Server Error");
//       return res.end();
//     }
//   } else if (parsedUrl.pathname === "/number") {
//     res.setHeader("Content-Type", "text/plain");
//     const randomNumber = Math.floor(Math.random() * 1000);
//     const goodNumbers = [111, 222, 333, 444, 555, 666, 777, 888, 999];
//     if (goodNumbers.includes(randomNumber)) {
//       res.end(`You win Euro tickets with this number${randomNumber}!`);
//     } else {
//       res.end(`You lost ${randomNumber}. Keep going!`);
//     }
//   } else {
//     res.setHeader("Content-Type", "text/plain");
//     res.end("404 Not Found");
//   }
// });

// myServer.listen(3000, () => {
//   console.log("Server running on port http://localhost:3000");
// });

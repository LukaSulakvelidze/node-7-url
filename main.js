const http = require("http");
const url = require("url");
const fs = require("fs/promises");

// 1)

// const myServer = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url);
//   if (parsedUrl.pathname === "/html") {
//     res.setHeader("Content-Type", "text/html");
//     res.write(`
//     <!DOCTYPE html>
//       <html lang="en">
//         <head>
//             <meta charset="UTF-8" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>Document</title>
//         </head>
//           <body>
//             <table>
//               <tr>
//                 <th>id</th>
//                 <th>name</th>
//                 <th>email</th>
//               </tr>
//               <tr>
//                 <td>1</td>
//                  <td>John</td>
//                  <td>john@gmail.com</td>
//               </tr>
//             </table>
//           </body>
//       </html>`);
//   }
//   if (parsedUrl.pathname === "/api") {
//     res.setHeader("content-type", "application/json");
//     res.write(
//       JSON.stringify({
//         Breed: "Rottweiler",
//         Color: "Black",
//         Name: "Gigi",
//       })
//     );
//   }

//   if (parsedUrl.pathname === "/time") {
//     res.setHeader("content-type", "application/json");
//     res.write(new Date().toISOString());
//   }
//   res.end();
// });

// myServer.listen(3000, () => {
//   console.log("Server running on port http://localhost:3000");
// });

// 2)

// const myServer = http.createServer(async (req, res) => {
//   const parsedUrl = url.parse(req.url);
//   res.setHeader("content-type", "application/json");
//   if (parsedUrl.pathname === "/movies") {
//     try {
//       const readData = await fs.readFile("movieData.json", "utf-8");
//       const parsedMovieData = JSON.parse(readData).results.map((el) => ({
//         Title: el.title,
//         Genre: el.genre_ids,
//         ReleaseData: el.release_date,
//       }));
//       let randomNumber = Math.round(Math.random() * parsedMovieData.length);
//       res.write(JSON.stringify(parsedMovieData[randomNumber]));
//       res.end();
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   if (parsedUrl.pathname === "/number") {
//     let randomNumber = Math.round(Math.random() * 1000);
//     const winningNumbers = [111, 222, 333, 444, 555, 666, 777, 888, 999];
//     if (winningNumbers.includes(randomNumber)) {
//       res.write(JSON.stringify(`Your number is ${randomNumber} and you win`));
//     } else {
//       res.write("Try again");
//     }
//     res.end();
//   }
// });

// myServer.listen(3000, () => {
//   console.log("Server running on port http://localhost:3000");
// });

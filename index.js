const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  if (ctx.url === "/") {
    ctx.status = 200;
    ctx.body = "<h1>Index Safyası</h1>";
  }
  else if (ctx.url === "/about"){
    ctx.status = 200;
    ctx.body = "<h1>Hakkimda Safyası</h1>";
  }
  else if (ctx.url === "/contact"){
    ctx.status = 200;
    ctx.body = "<h1>Iletisim Safyası</h1>";
  }
  else{
    ctx.status = 404;
    ctx.body = "<h1>404 Sayfa Bulunamadı.</h1>.";
  }
});

port = 3000;

app.listen(port, () => {
    console.log(`${port} portunda sunucu başlatıldı.`);
  });
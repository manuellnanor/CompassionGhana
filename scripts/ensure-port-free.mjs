import net from "node:net";

const port = Number(process.env.PORT || 3000);
const host = "0.0.0.0";

const server = net.createServer();

server.once("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `Port ${port} is already in use. Stop the existing server before running this app so you do not open the wrong website.`
    );
    process.exit(1);
  }

  console.error(`Unable to verify port ${port}: ${error.message}`);
  process.exit(1);
});

server.once("listening", () => {
  server.close(() => {
    process.exit(0);
  });
});

server.listen(port, host);

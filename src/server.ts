import { buildApp } from './app';

const start = async () => {
  const app = await buildApp();
  const PORT = Number(process.env.PORT) || 5000;

  try {
    await app.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📘 Swagger docs on http://localhost:${PORT}/docs`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

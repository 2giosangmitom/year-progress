# Year progress

## Build Docker image from `Dockerfile`

### Prerequisite

- Docker
- make

### Steps

- Build Docker image

```sh
make build
```

- Run Docker image

```sh
make run
```

- How to stop and remove the container?

```sh
make stop && make remove
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                       |
| :--------------- | :------------------------------------------- |
| `pnpm install`   | Installs dependencies                        |
| `pnpm run dev`   | Starts local dev server at `localhost:3000`  |
| `pnpm run build` | Build your production site                   |
| `pnpm run start` | Preview your build locally, before deploying |

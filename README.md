# Year progress

<!--toc:start-->

- [Year progress](#year-progress)
  - [Build Docker image from `Dockerfile`](#build-docker-image-from-dockerfile)
    - [Prerequisite](#prerequisite)
    - [Steps](#steps)
  - [🧞 Commands](#-commands)
  <!--toc:end-->

![preview](./preview.png)

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

| Command           | Action                                                     |
| :---------------- | :--------------------------------------------------------- |
| `pnpm install`    | Installs dependencies                                      |
| `pnpm dev`        | Starts local dev server at `localhost:3000`                |
| `pnpm build`      | Build your production site                                 |
| `pnpm start`      | Preview your build locally, before deploying               |
| `pnpm check`      | Lint the project using [biome](https://biomejs.dev/)       |
| `pnpm fix`        | Fix the project using [biome](https://biomejs.dev/)        |
| `pnpm test`       | Run unit test using [Jest](https://jestjs.io/)             |
| `pnpm test:watch` | Run unit test in dev mode using [Jest](https://jestjs.io/) |

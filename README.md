# Year progress

![preview](./preview.png)

## Build Docker image

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

| Command           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `pnpm install`    | Installs project dependencies                          |
| `pnpm dev`        | Starts local development server on port 3000           |
| `pnpm build`      | Builds the production ready website                    |
| `pnpm start`      | Previews the built website locally                     |
| `pnpm check`      | Lints the project for code style and formatting issues |
| `pnpm fix`        | Automatically fixes linting issues if possible         |
| `pnpm test`       | Runs unit tests using Jest                             |
| `pnpm test:watch` | Runs unit tests in watch mode for continuous feedback  |

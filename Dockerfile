# build
FROM rust:1.48.0-slim as builder
WORKDIR /myapp

COPY Cargo.toml Cargo.lock .
COPY src/hello-world src/hello-world
RUN cargo build --release --bin hello-world

COPY src src
RUN cargo build --release --bins

# run
FROM debian:buster-slim
COPY --from=builder /myapp/target/release /usr/local/bin
CMD ["main"]

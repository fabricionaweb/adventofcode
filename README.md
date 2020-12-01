Some docker commands that helps me

*Runs cargo*  
```
docker run -it --rm --name cargo \
  -v "$(pwd)":/myapp \
  -w /myapp \
  -e USER=$USER \
  rust:1.48.0-slim
```

*Runs the app*  
```
docker build -t my-rust-app .
docker run -it --rm my-rust-app hello-world
docker run -it --rm my-rust-app day-1
```

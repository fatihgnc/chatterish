mkdir -p ../client/src/proto
protoc -I=. ./chatterish.proto \
  --js_out=import_style=commonjs:../client/src/proto \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:../client/src/proto
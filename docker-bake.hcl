group "default" {
  targets = ["pulse-backend", "pulse-frontend"]
}

target "pulse-backend" {
  context    = "."
  dockerfile = "Dockerfile.backend"
  platforms  = ["linux/amd64", "linux/arm64"]
  tags       = ["inetumreg.azurecr.io/pulse-backend:aksrescue"]
  output     = ["type=registry"]
}

target "pulse-frontend" {
  context    = "."
  dockerfile = "Dockerfile.frontend"
  platforms  = ["linux/amd64", "linux/arm64"]
  tags       = ["inetumreg.azurecr.io/pulse-frontend:aksrescue"]
  output     = ["type=registry"]
}

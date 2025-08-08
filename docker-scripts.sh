#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Loay Nasser Portfolio - Docker Management Script${NC}"
echo "=================================================="

case "$1" in
  "build")
    echo -e "${YELLOW}Building production Docker image...${NC}"
    docker-compose build
    ;;
  "build-dev")
    echo -e "${YELLOW}Building development Docker image...${NC}"
    docker-compose -f docker-compose.dev.yml build
    ;;
  "up")
    echo -e "${YELLOW}Starting production container...${NC}"
    docker-compose up -d
    echo -e "${GREEN}Production site available at: http://localhost:3000${NC}"
    ;;
  "up-dev")
    echo -e "${YELLOW}Starting development container...${NC}"
    docker-compose -f docker-compose.dev.yml up -d
    echo -e "${GREEN}Development site available at: http://localhost:3000${NC}"
    ;;
  "down")
    echo -e "${YELLOW}Stopping containers...${NC}"
    docker-compose down
    docker-compose -f docker-compose.dev.yml down
    ;;
  "logs")
    echo -e "${YELLOW}Showing production logs...${NC}"
    docker-compose logs -f
    ;;
  "logs-dev")
    echo -e "${YELLOW}Showing development logs...${NC}"
    docker-compose -f docker-compose.dev.yml logs -f
    ;;
  "restart")
    echo -e "${YELLOW}Restarting containers...${NC}"
    docker-compose down
    docker-compose up -d
    ;;
  "clean")
    echo -e "${YELLOW}Cleaning up Docker resources...${NC}"
    docker-compose down --rmi all --volumes --remove-orphans
    docker-compose -f docker-compose.dev.yml down --rmi all --volumes --remove-orphans
    docker system prune -f
    ;;
  *)
    echo -e "${YELLOW}Usage: ./docker-scripts.sh [command]${NC}"
    echo ""
    echo "Commands:"
    echo "  build      - Build production Docker image"
    echo "  build-dev  - Build development Docker image"
    echo "  up         - Start production container"
    echo "  up-dev     - Start development container"
    echo "  down       - Stop all containers"
    echo "  logs       - Show production logs"
    echo "  logs-dev   - Show development logs"
    echo "  restart    - Restart production container"
    echo "  clean      - Clean up Docker resources"
    echo ""
    echo "Examples:"
    echo "  ./docker-scripts.sh build"
    echo "  ./docker-scripts.sh up-dev"
    echo "  ./docker-scripts.sh logs"
    ;;
esac

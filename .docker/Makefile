DOCKER_IMAGE_NAME := andersonbosa.vercel.app:development
DOCKER_CONTAINER_NAME := andersonbosa.vercel.app
CONTAINER_PORT := 3000

build:
    docker build -t $(DOCKER_IMAGE_NAME) ../.

run:
    docker run -d -p $(CONTAINER_PORT):$(CONTAINER_PORT) --name $(DOCKER_CONTAINER_NAME) $(DOCKER_IMAGE_NAME)

stop:
    docker stop $(DOCKER_CONTAINER_NAME)

remove:
    docker rm $(DOCKER_CONTAINER_NAME)

clean:
    docker rmi $(DOCKER_IMAGE_NAME)

all: build run

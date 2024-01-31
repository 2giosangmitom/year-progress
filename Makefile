IMAGE_NAME=year-progress
CONTAINER_NAME=pheloi_progress
VERSION=0.0.1

build:
	@echo -e "🚀 \033[1;37mStarting build Docker image from Dockerfile\033[0m"
	docker build -t $(IMAGE_NAME):$(VERSION) .
	@echo -e "✅ \033[1;32mSuccessfully built Docker image\033[0m"

run:
	docker run --name $(CONTAINER_NAME) -dp 3000:3000 $(IMAGE_NAME):$(VERSION)

stop:
	docker container stop $(CONTAINER_NAME)

remove:
	docker rm $(CONTAINER_NAME)

remove-image:
	docker image rm $(IMAGE_NAME):$(VERSION)

.SILENT: build run stop remove

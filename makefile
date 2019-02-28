start: #start docker container
	@sudo docker-compose up -d

stop: #stop docker container
	@sudo docker-compose down

show: #show docker's containers
	@sudo docker ps

connect_db: #Connect
	@sudo docker-compose exec db bash
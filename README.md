### USE ONLY PROD VERSION FOR TESTS AT :

### https://devhugo.com:8080 (server, HTTPS ONLY)
### https://devhugo.com:8081 (web, HTTPS ONLY)

# AREA_2019

Command to launch the project with `docker-compose`.

```
docker-compose build && docker-compose up -d
```

## Client Web

We chose Angular because its component system is quite good and optimize.

## Client Mobile

We chose Ionic because it is cross-platform and its simplicity of implementation.

## Server

Use to serve the AREA API, you can find the API documentation in [Server/Doc-API.md](../dev/Server/Doc-API.md).

---

```
Justification choix graphique AREA

Nous avons fait le choix du Material Design pour notre application mobile. Nous nous sommes inspiré de l’application IFTTT pour rendre l’application la plus ergonomique possible. Avec son système de IF THIS ... THEN THAT, qui permet à l’utilisateur de mieux comprendre le principe d’action entrainant une réaction d’un simple coup d’œil.
```
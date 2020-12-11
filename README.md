# Proyecto Ecologia

## Back-end

Ejecute `npm install` para instalar dependencias.

Ejecute `npm start` para el servidor de desarrollo. Vaya a `http://localhost:8012/`.

## Front-end

Ejecute `npm install` para instalar dependencias.

Ejecute Ejecutar `ng serve --open` para un servidor de desarrollo. Navegue a `http://localhost:4200/`.

## Proyecto Ecologia subirlo a un servidor Linux Ubuntu 20.04

### Comprobar SERVIDOR

```console
sudo apt-get upgrade
sudo apt-get update
sudo apt-get install -y git			// instalado por defecto en linux
```

### Instalar NodeJS y Verificar si tenemos instalado Nodejs 10 o superior.

```
sudo apt-get install -y nodejs
sudo apt-get install -y npm
// Seguir estos pasos si tenemos instalado version menor a 10.x
cd ~
curl -sL https://deb.nodesource.com/setup_10.x -o setup_node.sh
sudo bash setup_node.sh
sudo apt-get install -y nodejs
```

### Instalar Angular/cli.

```
sudo npm install -g @angular/cli
```

### Instalar NGINX.

```
sudo apt-get install -y nginx
```

### Instalar PM2.

```
sudo npm install pm2 -g
```

### Instalamos postgreSQL

```
sudo apt install postgresql postgresql-contrib
```

### Clonar los archivos del sistema con la ayuda del repositorio.

```
cd /var/www/
sudo git clone https://github.com/borisvargas/proyecto_ecologia.git
sudo chmod -R 777 proyecto_ecologia
cd proyecto_ecologia/back-end
npm install
```

### Configuración de la Base de datos e Importación de la base de datos.

```
sudo su - postgres              				// ingresar al usuario postgres
psql -c "alter user postgres with password 'postgres'"
psql -U postgres -W             				// ingresar a consola postgres
CREATE DATABASE bd_ecologia;    			// crear la BD
\q							// salir consola de postgres
cd /var/www/proyecto_ecologia/
psql -U postgres bd_ecologia < bd_ecologia_final.sql
// Verificar si está correctamente instalado la BD
psql -U postgres -W
\c bd_ecologia
\dt							// mostrar tablas
SELECT * FROM adm_usuarios;			// mostrar usuarios
```

### Configuración Backend con PM2.

```
cd /var/www/proyecto_ecologia/back-end/
sudo pm2 start bin/www.js --name web
sudo pm2 startup systemd
sudo pm2 save
// Reiniciar la máquina virtual linux (VPS)
sudo reboot
sudo systemctl start pm2-root
sudo systemctl status pm2-root
sudo systemctl restart pm2-root
sudo pm2 restart web
sudo pm2 logs web					// mostrar logs backend
```

### Configuración NGINX.

```
cd /etc/nginx/
sudo nano nginx.conf					// configurar buffers
cd /etc/nginx/sites-available/
sudo nano default					// configurar servidor
```

### Configuración Frontend con NG.

```
cd /var/www/proyecto_ecologia/front-end/
npm install
ng build --prod						// generar dist
```

### Instalar Cerbot y configuración de Cerbot para HTTPS.

```
sudo apt install certbot python3-certbot-nginx
sudo nano /etc/nginx/sites-available/default		// Este paso, ya hicimos
sudo certbot --nginx -d proyectosecologia.net.bo -d www.proyectosecologia.net.bo
sudo systemctl status certbot.timer
```

### Para realizar cambios en Backend y Frontend.
```
sudo pm2 restart web
sudo service nginx restart
```
# Configuración
La URL de la API se encuentra en el archivo .env:
VITE_API_URL=https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/

Dado que esta URL no contiene credenciales ni información sensible, el archivo .env se incluye para facilitar la ejecución y validación de la aplicación.

# Uso de la aplicación

Al iniciar la app, se solicita el correo del candidato. Este se utiliza para obtener sus datos desde la API y completar automáticamente la información necesaria al postular a una posición.
Para realizar pruebas, puede utilizarse el siguiente correo:
bautistapiccarenaudo@gmail.com

# Ejecución del proyecto

Instalar dependencias (sólo react):
npm install

Iniciar servidor de desarrollo:
npm run dev
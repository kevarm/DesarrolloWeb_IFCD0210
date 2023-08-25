Mi proyecto consistirá en una aplicación web de envíos de península a Canarias, que funciona 
llevándose un porcentaje que varía según las dimensiones y características del producto. La 
estructura de la web se divide en:
PARTE CLIENTE (Antes de identificación)
 Habrá un menú superior en la parte derecha que se divide en estos botones:
o Cómo funcionamos
o Tarifas
o Contacto
 Se encontrará un formulario de consulta con los inputs “Nombre”, 
“Apellidos”, “Correo” y “Mensaje”. Todos estos datos se enviarán a nuestro 
servidor.
o Acceder
 Si el cliente ya está previamente registrado, tendrá que rellenar los inputs 
“Correo” y “Contraseña” y pulsar el botón “Acceder”. Al pulsar dicho botón, 
se realizará una validación con los datos almacenados en nuestro servidor, 
informando al cliente si alguno de los campos no coincide. En caso de 
coincidir, se entraría a la aplicación como usuario identificado.
o Registrarme
 Los usuarios que no están registrados, deberán rellenar un formulario de 
alta en el cuál solicitaremos los siguientes datos: “Nombre completo”, 
“Correo”, “Teléfono”, “DNI”, “Dirección de envío”, “Contraseña” y “Repetir 
contraseña”, junto con un botón de “Registrarme”. Al rellenar los campos y 
pulsar el botón “Registrarme”, existirá una validación a través de JavaScript
y Html para comprobar que los formatos de los inputs son correctos y que 
ambas contraseñas coinciden. Todos estos datos serán enviados como un 
array a nuestro servidor, donde se alojarán para validar los datos cada vez 
que dicho cliente fuese a iniciar sesión.
PARTE CLIENTE (Después de identificación)
 El menú superior en la parte derecha será el mismo que en el caso de “antes de la 
identificación” pero se sustituirán el botón de “Acceder” y “Registrarme” por “Mis 
pedidos”, “Realizar pedido” y “Configuración”.
o Mis pedidos
 En este apartado, los clientes podrán ver los pedidos antiguos ya 
entregados, así como sus pedidos abiertos, es decir, los pedidos que aún no 
han llegado al destino. Tendrán disponible la localización exacta de su 
pedido, así como la fecha y hora aproximada de recepción.
o Realizar pedido
 Aquí los clientes deberán rellenar un formulario con diferentes inputs para 
poder solicitarnos un envío. “Dirección de facturación”,” Dirección de 
entrega”, “Factura” (Factura de la compra en formato .pdf) y botón de 
“Realizar pedido”. Al pulsar el botón, se almacenarán en nuestro servidor 
dichos inputs como un array y se almacenará como “pedido pendiente” en 
la vista del administrador.
o Configuración
 Aquí, los clientes podrán:
 Editar perfil
 Cerrar sesión
PARTE ADMINISTRADOR (Antes de la identificación)
 Existirá un formulario de identificación para acceder como administrador a la aplicación. 
Los inputs a rellenar serán correo y contraseña, al igual que los clientes. Dichos datos se 
validarán con los del servidor (los datos de acceso del administrador se habrán almacenado
previamente) y también se recibirá un mensaje en caso de que alguno de los campos sea 
incorrecto o no coincida con los del servidor.
PARTE ADMINISTRADOR (Después de identificación)
 Se podrá visualizar un menú superior en la parte derecha con los apartados “Pedidos 
pendientes”, “Pedidos en tránsito”, “Pedidos finalizados”, “Mensajes” y “Configuración”
o Pedidos pendientes
 Habrá un listado de los pedidos que tengo pendientes de enviar. Me 
aparecerán los campos “Nº de pedido” (generado automáticamente por el 
servidor), “Dirección de facturación”, “Dirección de entrega”, “Cliente” y 
“Factura”. A la derecha de estos datos, aparecerán dos botones: el primero 
“Generar impreso”, nos abre en otra pestaña un pdf generador 
automáticamente con los datos de envío para poder adjuntarlo al paquete. 
El segundo, “Confirmar envío”, genera automáticamente un correo 
electrónico al cliente de dicho pedido confirmándole el envío del mismo. 
Además, nos cambia la situación de este pedido de “pedidos pendientes” a 
“pedidos en tránsito”, además de cambiarle la situación del pedido al cliente 
de “pendiente” a “enviado” dentro de su menú de “mis pedidos” y su vez, 
en “pedidos abiertos”. Estos datos al pulsar el botón se envían al servidor 
para notificar el cambio de situación del pedido.
o Pedidos en tránsito
 Son los pedidos que se encontraban en pendientes y hemos enviado. Nos 
aparecen todos los datos relativos al pedido (al igual que en pedidos 
pendientes) pero con el añadido de que podemos ver la ubicación a tiempo
real del producto.
o Pedidos finalizados
 Nos aparecen los pedidos que el cliente ha confirmado como recibidos y, 
por tanto, ya no requieren ninguna acción más por parte de la empresa.
o Mensajes
 Aquí podremos visualizar los mensajes que nos hayan llegado de clientes a 
través de “Contacto”. Solicitamos al servidor todo lo que se haya 
almacenado en los inputs del formulario de contacto.
o Configuración
 Aquí el administrador podrá editar su perfil y trabajar con los permisos de 
otros perfiles y editar los mismos.
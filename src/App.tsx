import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1>Documentación de los diferentes proyectos de SOA</h1>

        <section className="design-decisions">
          <h2>Proyecto 2</h2>
          <ul>
            <li>
              <strong>1. Lenguajes de programación:</strong>
              <p>
                Para el frontend, se eligió TypeScript por su tipado estático,
                que mejora la mantenibilidad del código. Además de su
                integración sencilla utilizando React.
              </p>
              <p>
                Para el API, se utilizó Python, lo que permite un desarrollo
                ágil y una fácil implementación de funcionalidades.
              </p>
            </li>
            <li>
              <strong>2. Frameworks/Toolkits:</strong>
              <p>
                En el frontend, se utilizó React para construir la interfaz de
                usuario, esto debido a la familiaridad que se tiene con React.
              </p>
              <p>
                Para el API, se emplearon Flask como framework web, Flasgger
                para la documentación automática, y Flask-CORS para habilitar el
                soporte de CORS.
              </p>
            </li>
            <li>
              <strong>3. Tecnología:</strong>
              <p>
                Para el desarrollo del frontend, se utilizó Vite como bundler,
                lo que permite un rápido tiempo de recarga y una configuración
                sencilla para proyectos en TypeScript.
              </p>
              <p>
                En el API, se implementó un sistema de almacenamiento basado en
                JSON para gestionar las tareas, asegurando una estructura de
                datos sencilla y accesible.
              </p>
              <p>
                Tanto el frontend como el API están contenerizados utilizando
                Docker Compose, facilitando la implementación y gestión de
                entornos de desarrollo y producción.
              </p>
            </li>
            <li>
              <strong>4. Estándares de programación:</strong>
              <p>
                Se siguieron las guías de estilo de Airbnb para
                JavaScript/TypeScript, asegurando un código limpio y
                consistente.
              </p>
            </li>
            <li>
              <strong>5. Argumentos del API:</strong>
              <p>
                El API recibe un objeto JSON con parámetros específicos y
                responde con datos estructurados según la solicitud.
              </p>
            </li>
            <strong>
              6. Integración Continua y Despliegue Continuo (CI/CD):
            </strong>{" "}
            Se implementará un pipeline automatizado que construirá, probará y
            desplegará la aplicación. El despliegue solo se realizará si al
            menos el 90% de las pruebas automáticas pasan exitosamente,
            asegurando que no se introduzcan errores en el sistema.
            <ul>
              <li>
                <strong>Construcción:</strong> Al hacer un push a la rama
                principal del repositorio, se activará un workflow de
                construcción que se encargará de compilar el frontend y el
                backend utilizando Docker.
              </li>
              <li>
                <strong>Pruebas:</strong> Se ejecutarán pruebas automatizadas
                para verificar la correcta integración del código y asegurar que
                no se introduzcan errores en el sistema. En caso de que alguna
                prueba falle, el pipeline se detendrá y notificará a los
                desarrolladores, evitando que se realice el despliegue hasta que
                los problemas sean solucionados. El pipeline de CI/CD solo
                permitirá el despliegue si al menos el 90% de las pruebas se
                ejecutan exitosamente, garantizando la calidad y estabilidad del
                sistema.
              </li>
              <li>
                <strong>Despliegue:</strong> El frontend y el API se desplegarán
                en una instancia EC2 en AWS. Para gestionar la infraestructura,
                se utiliza Terraform, lo que permite automatizar la creación y
                configuración de los recursos necesarios. Esto facilita la
                escalabilidad y reproducibilidad del entorno de despliegue.
              </li>
            </ul>
            <p>
              Este enfoque garantiza que cualquier cambio en el código sea
              validado automáticamente y desplegado en tiempo real, manteniendo
              la calidad del software y agilizando el proceso de entrega
              continua.
            </p>
          </ul>
        </section>

        <section className="frontend">
          <h2>Frontend</h2>
          <p>
            La aplicación frontend está desarrollada con React y TypeScript,
            proporcionando una experiencia de usuario fluida y dinámica. A
            continuación, se describen las funcionalidades clave:
          </p>
          <ul>
            <li>
              <strong>Gestión de tareas:</strong>
              <p>
                La aplicación permite a los usuarios agregar, actualizar y
                eliminar tareas. Cada tarea tiene un título, una descripción y
                un estado que puede ser "to-do", "in-progress" o "done".
              </p>
            </li>
            <li>
              <strong>Conexión con el API:</strong>
              <p>
                Al iniciar la aplicación, se realiza una llamada a la API para
                obtener la lista de tareas, que se muestra en la interfaz. La
                API proporciona las siguientes funcionalidades:
                <ul>
                  <li>
                    <strong>GET /tasks:</strong> Recupera todas las tareas.
                  </li>
                  <li>
                    <strong>POST /tasks:</strong> Crea una nueva tarea.
                  </li>
                  <li>
                    <strong>PUT /tasks/{`{id}`}</strong>: Actualiza el estado o
                    los detalles de una tarea específica.
                  </li>
                  <li>
                    <strong>DELETE /tasks/{`{id}`}</strong>: Elimina una tarea
                    específica.
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <strong>Interactividad:</strong>
              <p>
                Los usuarios pueden interactuar con la interfaz para cambiar el
                estado de las tareas, proporcionando una experiencia ágil. Las
                tareas se organizan en columnas según su estado, facilitando su
                visualización y gestión.
              </p>
            </li>
            <li>
              <strong>Componentes reutilizables:</strong>
              <p>
                Se emplea un enfoque basado en componentes, lo que permite una
                fácil reutilización y mantenimiento del código. Cada tarea se
                maneja a través del componente <code>Task</code>, que encapsula
                la lógica de presentación y gestión de estado.
              </p>
            </li>
          </ul>
        </section>

        <section className="frontend">
          <h2>API</h2>
          El API fue implementado utilizando Flask y Flasgger, lo que permite
          visualizar la documentación interactiva generada automáticamente por
          Swagger. Puedes consultar la documentación del API y probar los
          endpoints directamente desde el siguiente enlace:
          <a
            href="http://ec2-44-212-66-25.compute-1.amazonaws.com:5001/apidocs/#/default/get_tasks"
            target="_blank"
          >
            Swagger API Docs
          </a>
          .
          <ul>
            <li>
              <strong>GET /tasks</strong>: Recupera todas las tareas existentes.
            </li>
            <li>
              <strong>POST /tasks</strong>: Crea una nueva tarea. Se requiere un
              cuerpo JSON que contenga al menos el título de la tarea.
            </li>
            <li>
              <strong>GET /tasks/{`{id}`}</strong>: Recupera los detalles de una
              tarea específica por su ID.
            </li>
            <li>
              <strong>PUT /tasks/{`{id}`}</strong>: Actualiza una tarea
              específica. Se puede modificar el título, la descripción o el
              estado.
            </li>
            <li>
              <strong>DELETE /tasks/{`{id}`}</strong>: Elimina una tarea
              específica por su ID.
            </li>
          </ul>
          <p>
            Cada respuesta del API está en formato JSON y puede incluir mensajes
            de error según sea necesario.
          </p>
        </section>
      </div>
    </>
  );
}

export default App;

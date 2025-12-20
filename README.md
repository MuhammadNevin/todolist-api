# ToDo List API - OpenAPI Specification

This project is a learning exercise for working with OpenAPI specifications. It defines a simple ToDo List API using OpenAPI 3.0.3. The API allows users to manage their ToDo items, including creating, retrieving, updating, and deleting tasks.

## Project Structure

The project contains the following key files and folders:

- **todolist.json**: The OpenAPI specification file for the ToDo List API.
- **go-client-generated/**: Contains the Go client code generated from the OpenAPI specification.
- **javascript-client-generated/**: Contains the JavaScript client code generated from the OpenAPI specification.
- **python-client-generated/**: Contains the Python client code generated from the OpenAPI specification.
- **docs/**: Documentation files for the API and its components.

## API Overview

### Base URL
The API can be accessed at the following base URLs:
- Production: `https://api.example.com/v1`
- Development: `http://localhost:3000/v1`

### Endpoints

#### `GET /todos`
Retrieve all ToDo items. Supports filtering by `title` and `status`.

#### `POST /todos`
Create a new ToDo item. Requires the following fields:
- `title` (string, required)
- `description` (string, optional)
- `dueDate` (string, required, format: `date-time`)
- `priority` (string, required, enum: `low`, `medium`, `high`)
- `status` (string, required, enum: `pending`, `completed`)
- `tags` (array of strings, optional)

#### `GET /todos/{id}`
Retrieve a specific ToDo item by its ID.

#### `PUT /todos/{id}`
Update an existing ToDo item by its ID.

#### `DELETE /todos/{id}`
Delete a specific ToDo item by its ID.

### Responses
Each endpoint returns appropriate HTTP status codes and response bodies. For example:
- `200 OK`: Successful operation.
- `201 Created`: Resource created successfully.
- `400 Bad Request`: Invalid input data.
- `404 Not Found`: Resource not found.

### Examples
Reusable examples for request and response bodies are defined in the `components.examples` section of the OpenAPI specification. These examples include:
- `LearnJavascript`: Example of a ToDo item for learning JavaScript.
- `LearnPython`: Example of a ToDo item for learning Python.

## How to Use

1. Open the `todolist.json` file in an OpenAPI editor such as [Swagger Editor](https://editor.swagger.io/) or [Redocly](https://redocly.com/).
2. Explore the API documentation and test the endpoints.
3. Use the generated client code in the `go-client-generated/`, `javascript-client-generated/`, or `python-client-generated/` folders to interact with the API programmatically.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or feedback, contact:
- **Name**: Muhammad Nevin
- **Email**: [nevin.muhammad@gmail.com](mailto:nevin.muhammad@gmail.com)
- **GitHub**: [MuhammadNevin](https://github.com/MuhammadNevin)

## Conclusion

- There are still many features in OpenAPI; feel free to explore them directly on the official website.
- From now on, always use OpenAPI to create RESTful API documentation.
- Create the OpenAPI specification before building the RESTful API application.
- OpenAPI can be used as a contract agreement between those developing the RESTful API and those consuming it.
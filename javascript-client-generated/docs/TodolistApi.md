# ToDoListApi.TodolistApi

All URIs are relative to *https://{environment}.programmerzamannow.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**todosGet**](TodolistApi.md#todosGet) | **GET** /todos | Get all ToDo items
[**todosIdDelete**](TodolistApi.md#todosIdDelete) | **DELETE** /todos/{id} | Delete a ToDo item by ID
[**todosIdGet**](TodolistApi.md#todosIdGet) | **GET** /todos/{id} | Get a ToDo item by ID
[**todosIdPut**](TodolistApi.md#todosIdPut) | **PUT** /todos/{id} | Update a ToDo item by ID
[**todosPost**](TodolistApi.md#todosPost) | **POST** /todos | Create a new ToDo item

<a name="todosGet"></a>
# **todosGet**
> ArrayTodo todosGet(opts)

Get all ToDo items

Only return active ToDo items, unless query param &#x27;status&#x27; is set to &#x27;all&#x27;

### Example
```javascript
import {ToDoListApi} from 'to_do_list_api';
let defaultClient = ToDoListApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new ToDoListApi.TodolistApi();
let opts = { 
  'title': "title_example", // String | Filter ToDo items by title
  'status': "pending" // String | Filter ToDo items by status
};
apiInstance.todosGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| Filter ToDo items by title | [optional] 
 **status** | **String**| Filter ToDo items by status | [optional] [default to pending]

### Return type

[**ArrayTodo**](ArrayTodo.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todosIdDelete"></a>
# **todosIdDelete**
> InlineResponse204 todosIdDelete(id)

Delete a ToDo item by ID

### Example
```javascript
import {ToDoListApi} from 'to_do_list_api';
let defaultClient = ToDoListApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new ToDoListApi.TodolistApi();
let id = "id_example"; // String | ID of the ToDo item

apiInstance.todosIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ToDo item | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todosIdGet"></a>
# **todosIdGet**
> InlineResponse200 todosIdGet(id)

Get a ToDo item by ID

Returns a single ToDo item by its ID, 404 if not found

### Example
```javascript
import {ToDoListApi} from 'to_do_list_api';
let defaultClient = ToDoListApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new ToDoListApi.TodolistApi();
let id = "id_example"; // String | ID of the ToDo item

apiInstance.todosIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the ToDo item | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="todosIdPut"></a>
# **todosIdPut**
> Todolist todosIdPut(body, id)

Update a ToDo item by ID

Updates an existing ToDo item with the provided details

### Example
```javascript
import {ToDoListApi} from 'to_do_list_api';
let defaultClient = ToDoListApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new ToDoListApi.TodolistApi();
let body = new ToDoListApi.CreateOrUpdateToDo(); // CreateOrUpdateToDo | 
let id = "id_example"; // String | ID of the ToDo item

apiInstance.todosIdPut(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateOrUpdateToDo**](CreateOrUpdateToDo.md)|  | 
 **id** | **String**| ID of the ToDo item | 

### Return type

[**Todolist**](Todolist.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="todosPost"></a>
# **todosPost**
> Todolist todosPost(body)

Create a new ToDo item

Creates a new ToDo item with the provided details

### Example
```javascript
import {ToDoListApi} from 'to_do_list_api';
let defaultClient = ToDoListApi.ApiClient.instance;

// Configure API key authorization: TodolistAuth
let TodolistAuth = defaultClient.authentications['TodolistAuth'];
TodolistAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TodolistAuth.apiKeyPrefix = 'Token';

let apiInstance = new ToDoListApi.TodolistApi();
let body = new ToDoListApi.CreateOrUpdateToDo(); // CreateOrUpdateToDo | 

apiInstance.todosPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateOrUpdateToDo**](CreateOrUpdateToDo.md)|  | 

### Return type

[**Todolist**](Todolist.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


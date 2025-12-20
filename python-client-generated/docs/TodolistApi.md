# swagger_client.TodolistApi

All URIs are relative to *https://{environment}.programmerzamannow.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**todos_get**](TodolistApi.md#todos_get) | **GET** /todos | Get all ToDo items
[**todos_id_delete**](TodolistApi.md#todos_id_delete) | **DELETE** /todos/{id} | Delete a ToDo item by ID
[**todos_id_get**](TodolistApi.md#todos_id_get) | **GET** /todos/{id} | Get a ToDo item by ID
[**todos_id_put**](TodolistApi.md#todos_id_put) | **PUT** /todos/{id} | Update a ToDo item by ID
[**todos_post**](TodolistApi.md#todos_post) | **POST** /todos | Create a new ToDo item

# **todos_get**
> ArrayTodo todos_get(title=title, status=status)

Get all ToDo items

Only return active ToDo items, unless query param 'status' is set to 'all'

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: TodolistAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-KEY'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.TodolistApi(swagger_client.ApiClient(configuration))
title = 'title_example' # str | Filter ToDo items by title (optional)
status = 'pending' # str | Filter ToDo items by status (optional) (default to pending)

try:
    # Get all ToDo items
    api_response = api_instance.todos_get(title=title, status=status)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TodolistApi->todos_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **str**| Filter ToDo items by title | [optional] 
 **status** | **str**| Filter ToDo items by status | [optional] [default to pending]

### Return type

[**ArrayTodo**](ArrayTodo.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **todos_id_delete**
> InlineResponse204 todos_id_delete(id)

Delete a ToDo item by ID

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: TodolistAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-KEY'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.TodolistApi(swagger_client.ApiClient(configuration))
id = 'id_example' # str | ID of the ToDo item

try:
    # Delete a ToDo item by ID
    api_response = api_instance.todos_id_delete(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TodolistApi->todos_id_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the ToDo item | 

### Return type

[**InlineResponse204**](InlineResponse204.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **todos_id_get**
> InlineResponse200 todos_id_get(id)

Get a ToDo item by ID

Returns a single ToDo item by its ID, 404 if not found

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: TodolistAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-KEY'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.TodolistApi(swagger_client.ApiClient(configuration))
id = 'id_example' # str | ID of the ToDo item

try:
    # Get a ToDo item by ID
    api_response = api_instance.todos_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TodolistApi->todos_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the ToDo item | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **todos_id_put**
> Todolist todos_id_put(body, id)

Update a ToDo item by ID

Updates an existing ToDo item with the provided details

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: TodolistAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-KEY'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.TodolistApi(swagger_client.ApiClient(configuration))
body = swagger_client.CreateOrUpdateToDo() # CreateOrUpdateToDo | 
id = 'id_example' # str | ID of the ToDo item

try:
    # Update a ToDo item by ID
    api_response = api_instance.todos_id_put(body, id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TodolistApi->todos_id_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateOrUpdateToDo**](CreateOrUpdateToDo.md)|  | 
 **id** | **str**| ID of the ToDo item | 

### Return type

[**Todolist**](Todolist.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **todos_post**
> Todolist todos_post(body)

Create a new ToDo item

Creates a new ToDo item with the provided details

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure API key authorization: TodolistAuth
configuration = swagger_client.Configuration()
configuration.api_key['X-API-KEY'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-API-KEY'] = 'Bearer'

# create an instance of the API class
api_instance = swagger_client.TodolistApi(swagger_client.ApiClient(configuration))
body = swagger_client.CreateOrUpdateToDo() # CreateOrUpdateToDo | 

try:
    # Create a new ToDo item
    api_response = api_instance.todos_post(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TodolistApi->todos_post: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


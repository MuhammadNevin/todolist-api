# {{classname}}

All URIs are relative to *https://{environment}.programmerzamannow.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TodosGet**](TodolistApi.md#TodosGet) | **Get** /todos | Get all ToDo items
[**TodosIdDelete**](TodolistApi.md#TodosIdDelete) | **Delete** /todos/{id} | Delete a ToDo item by ID
[**TodosIdGet**](TodolistApi.md#TodosIdGet) | **Get** /todos/{id} | Get a ToDo item by ID
[**TodosIdPut**](TodolistApi.md#TodosIdPut) | **Put** /todos/{id} | Update a ToDo item by ID
[**TodosPost**](TodolistApi.md#TodosPost) | **Post** /todos | Create a new ToDo item

# **TodosGet**
> []Todolist TodosGet(ctx, optional)
Get all ToDo items

Only return active ToDo items, unless query param 'status' is set to 'all'

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***TodolistApiTodosGetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a TodolistApiTodosGetOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **optional.String**| Filter ToDo items by title | 
 **status** | **optional.String**| Filter ToDo items by status | [default to pending]

### Return type

[**[]Todolist**](array.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TodosIdDelete**
> InlineResponse204 TodosIdDelete(ctx, id)
Delete a ToDo item by ID

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | **string**| ID of the ToDo item | 

### Return type

[**InlineResponse204**](inline_response_204.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TodosIdGet**
> InlineResponse200 TodosIdGet(ctx, id)
Get a ToDo item by ID

Returns a single ToDo item by its ID, 404 if not found

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | **string**| ID of the ToDo item | 

### Return type

[**InlineResponse200**](inline_response_200.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TodosIdPut**
> Todolist TodosIdPut(ctx, body, id)
Update a ToDo item by ID

Updates an existing ToDo item with the provided details

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**CreateOrUpdateToDo**](CreateOrUpdateToDo.md)|  | 
  **id** | **string**| ID of the ToDo item | 

### Return type

[**Todolist**](todolist.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TodosPost**
> Todolist TodosPost(ctx, body)
Create a new ToDo item

Creates a new ToDo item with the provided details

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**CreateOrUpdateToDo**](CreateOrUpdateToDo.md)|  | 

### Return type

[**Todolist**](todolist.md)

### Authorization

[TodolistAuth](../README.md#TodolistAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


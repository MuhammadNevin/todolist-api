# ToDoListApi.CreateOrUpdateToDo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** |  | 
**description** | **String** |  | [optional] 
**dueDate** | **Date** |  | 
**priority** | **String** |  | [default to &#x27;medium&#x27;]
**status** | **String** |  | [default to &#x27;pending&#x27;]
**tags** | **[String]** |  | [optional] 

<a name="PriorityEnum"></a>
## Enum: PriorityEnum

* `low` (value: `"low"`)
* `medium` (value: `"medium"`)
* `high` (value: `"high"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `pending` (value: `"pending"`)
* `completed` (value: `"completed"`)


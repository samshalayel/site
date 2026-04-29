# API + Backend: Update Student

## Endpoint
- **Method**: PUT/PATCH
- **Path**: `/students/:id`
- **Description**: تعديل بيانات الطالب (Edit student data)

## Request Parameters
- `id` (path parameter): Student ID

## Request Body
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "status": "string"
}
```

## Response
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "phone": "string",
  "status": "string",
  "updatedAt": "ISO8601"
}
```

## Status Codes
- 200: Success
- 400: Bad Request
- 404: Student not found
- 500: Server Error
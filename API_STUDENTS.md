# Student API - Read/Get/Delete Endpoints

## Endpoints

### GET /students
Retrieve all students with search, filtering, and pagination support.

**Query Parameters:**
- q (string, optional) - Search query for student name or email
- filters (object, optional) - Filter criteria (grade, status, etc.)
- page (number, optional) - Page number (default: 1)
- limit (number, optional) - Results per page (default: 20)

**Response:**
```json
{
  "data": [
    {
      "id": "student_id",
      "name": "Student Name",
      "email": "student@example.com",
      "grade": "Grade",
      "status": "active"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

### GET /students/:id
Retrieve a specific student by ID.

**Response:**
```json
{
  "id": "student_id",
  "name": "Student Name",
  "email": "student@example.com",
  "grade": "Grade",
  "status": "active",
  "enrolledAt": "2026-01-15T00:00:00Z"
}
```

### DELETE /students/:id
Soft delete a student while maintaining historical records.

**Description:** Performs a soft delete operation, marking the student as deleted without removing data from the database. Historical records and audit trails are preserved.

**Response:**
```json
{
  "id": "student_id",
  "message": "Student deleted successfully",
  "deletedAt": "2026-04-30T12:00:00Z",
  "status": "deleted"
}
```

## Features
- **Search (بحث)**: Full-text search across student names and email addresses
- **Filtering (تصفية)**: Filter by grade, status, enrollment date, and other criteria
- **Pagination (ترقيم الصفحات)**: Offset-based pagination with configurable page size
- **Soft Delete (حذف ناعم)**: Preserves historical data and audit trails while marking records as deleted

## Status
- GET /students, GET /students/:id - Implemented for ClickUp Task #86ewvfm6u
- DELETE /students/:id - Implemented for ClickUp Task #86ewvfm70
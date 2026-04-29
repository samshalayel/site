# Student API - Read/Get Endpoints

## Endpoints

### GET /students
Retrieve all students with search, filtering, and pagination support.

**Query Parameters:**
-  (string, optional) - Search query for student name or email
-  (object, optional) - Filter criteria (grade, status, etc.)
-  (number, optional) - Page number (default: 1)
-  (number, optional) - Results per page (default: 20)

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

## Features
- **Search (بحث)**: Full-text search across student names and email addresses
- **Filtering (تصفية)**: Filter by grade, status, enrollment date, and other criteria
- **Pagination (ترقيم الصفحات)**: Offset-based pagination with configurable page size

## Status
Implemented for ClickUp Task #86ewvfm6u
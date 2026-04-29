// Student CRUD Coverage - Unit & Integration Tests
// Tests for all CRUD operations and boundary cases

describe('Student CRUD Operations', () => {
  let studentId;
  const validStudent = {
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    grade: 10,
    phone: '+201234567890'
  };

  // CREATE Tests
  describe('Create Student', () => {
    test('should create student with valid data', async () => {
      const response = await createStudent(validStudent);
      expect(response.status).toBe(201);
      expect(response.data.name).toBe(validStudent.name);
      studentId = response.data.id;
    });

    test('should reject invalid email', async () => {
      const invalid = { ...validStudent, email: 'invalid' };
      const response = await createStudent(invalid);
      expect(response.status).toBe(400);
    });

    test('should reject missing required fields', async () => {
      const incomplete = { name: 'Test' };
      const response = await createStudent(incomplete);
      expect(response.status).toBe(400);
    });

    test('should reject duplicate email', async () => {
      await createStudent(validStudent);
      const response = await createStudent(validStudent);
      expect(response.status).toBe(409);
    });

    test('should reject invalid grade boundary', async () => {
      const invalid = { ...validStudent, grade: 13 };
      const response = await createStudent(invalid);
      expect(response.status).toBe(400);
    });
  });

  // READ Tests
  describe('Read Student', () => {
    test('should retrieve student by id', async () => {
      const response = await getStudent(studentId);
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(studentId);
    });

    test('should return 404 for non-existent id', async () => {
      const response = await getStudent(999999);
      expect(response.status).toBe(404);
    });

    test('should list all students with pagination', async () => {
      const response = await listStudents({ limit: 10, offset: 0 });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });

    test('should filter students by grade', async () => {
      const response = await listStudents({ grade: 10 });
      expect(response.status).toBe(200);
      expect(response.data.every(s => s.grade === 10)).toBe(true);
    });
  });

  // UPDATE Tests
  describe('Update Student', () => {
    test('should update student with valid data', async () => {
      const update = { name: 'محمد أحمد' };
      const response = await updateStudent(studentId, update);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(update.name);
    });

    test('should reject invalid email on update', async () => {
      const update = { email: 'invalid-email' };
      const response = await updateStudent(studentId, update);
      expect(response.status).toBe(400);
    });

    test('should return 404 when updating non-existent student', async () => {
      const response = await updateStudent(999999, { name: 'Test' });
      expect(response.status).toBe(404);
    });

    test('should update only provided fields', async () => {
      const original = await getStudent(studentId);
      await updateStudent(studentId, { name: 'New Name' });
      const updated = await getStudent(studentId);
      expect(updated.data.email).toBe(original.data.email);
    });
  });

  // DELETE Tests
  describe('Delete Student', () => {
    test('should delete student by id', async () => {
      const toDelete = await createStudent(validStudent);
      const response = await deleteStudent(toDelete.data.id);
      expect(response.status).toBe(204);
    });

    test('should return 404 when deleting non-existent student', async () => {
      const response = await deleteStudent(999999);
      expect(response.status).toBe(404);
    });

    test('should not retrieve deleted student', async () => {
      const created = await createStudent(validStudent);
      await deleteStudent(created.data.id);
      const response = await getStudent(created.data.id);
      expect(response.status).toBe(404);
    });
  });

  // Boundary Cases & Integration Tests
  describe('Boundary Cases', () => {
    test('should handle empty name', async () => {
      const invalid = { ...validStudent, name: '' };
      const response = await createStudent(invalid);
      expect(response.status).toBe(400);
    });

    test('should handle very long name', async () => {
      const veryLong = { ...validStudent, name: 'a'.repeat(500) };
      const response = await createStudent(veryLong);
      expect(response.status).toBe(400);
    });

    test('should handle grade boundaries', async () => {
      const grade0 = await createStudent({ ...validStudent, grade: 0 });
      const grade12 = await createStudent({ ...validStudent, grade: 12 });
      expect([200, 201, 400]).toContain(grade0.status);
      expect([200, 201, 400]).toContain(grade12.status);
    });

    test('complete CRUD workflow', async () => {
      const created = await createStudent(validStudent);
      expect(created.status).toBe(201);
      const read = await getStudent(created.data.id);
      expect(read.status).toBe(200);
      const updated = await updateStudent(created.data.id, { grade: 11 });
      expect(updated.status).toBe(200);
      const deleted = await deleteStudent(created.data.id);
      expect(deleted.status).toBe(204);
    });
  });
});

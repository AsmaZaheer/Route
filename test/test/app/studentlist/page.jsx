// app/studentlist/page.jsx
// app/studentlist/page.jsx
/*'use client';

import Link from 'next/link';

const StudentListPage = () => {
  const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Sam Smith' }
  ];

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link href={`/studentlist/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListPage;*/

//latest
'use client';

import Link from 'next/link';

const StudentListPage = () => {
  const students = [
    { id: 1, name: 'James' },
    { id: 2, name: 'Oliver' },
    { id: 3, name: 'Emily' },
    { id: 4, name: 'Jennie'}
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-800">
        Student List
      </h1>
      <ul className="max-w-md mx-auto space-y-6">
        {students.map((student) => (
          <li
            key={student.id}
            className="p-5 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-blue-50 hover:shadow-lg transition duration-300"
          >
            <Link
              href={`/studentlist/${student.id}`}
              className="text-lg font-semibold text-blue-700 hover:text-blue-900 hover:underline transition duration-200"
            >
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListPage;



'use client';

import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h2>Daniel Maliczewski</h2>
      <p>
        GitHub Repository:{' '}
        <Link href="https://github.com/Dmpoke66/cprg306-assignments" target="_blank">
          Visit my GitHub
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;



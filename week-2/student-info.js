'use client';

import Link from 'next/link';

'use client'; 

import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Daniel Maliczewski</h1>
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


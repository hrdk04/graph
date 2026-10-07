import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_STUDENTS = gql`

  query GetStudents {

    students {
      id
      name
      course
      email
    }

  }

`;

function App() {

  const { loading, error, data } =
    useQuery(GET_STUDENTS);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>

      <h1>Student Information</h1>

      {data.students.map((student) => (

        <div
          key={student.id}
          style={{
            border: "1px solid black",
            padding: "15px",
            margin: "10px"
          }}
        >

          <h2>{student.name}</h2>

          <p>
            <strong>ID:</strong> {student.id}
          </p>

          <p>
            <strong>Course:</strong> {student.course}
          </p>

          <p>
            <strong>Email:</strong> {student.email}
          </p>

        </div>

      ))}

    </div>
  );
}

export default App;
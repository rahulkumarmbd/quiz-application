const TableBody = ({ problems }) => {
  return (
    <tbody>
      {problems.map((problem) => {
        const { id, question, selectedAnswer, correct_answer } = problem;
        const score = selectedAnswer === correct_answer ? 1 : 0;

        return (
          <tr>
            <td>{id}</td>
            <td dangerouslySetInnerHTML={{ __html: question }}></td>
            <td
              dangerouslySetInnerHTML={{
                __html: selectedAnswer ?? "Not Attempted",
              }}
            ></td>
            <td
              dangerouslySetInnerHTML={{
                __html: correct_answer,
              }}
            ></td>
            <td>{score}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;

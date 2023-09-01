// Components
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ problems }) => {
  return (
    <table>
      <TableHead />
      <TableBody problems={problems} />
    </table>
  );
};

export default Table;

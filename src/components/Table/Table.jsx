import { useState, useRef } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

import "./Table.css";
import EditModal from "../Modal/EditModal";

function Table({ data }) {
  data = data.map((dt, index) => {
    return { id: index + 1, link: dt };
  });

  const [rows, setRows] = useState(data);
  const [isEdit, setIsEdit] = useState(false);
  const linkRef = useRef();

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      link: `Column Link ${rows.length + 1}`,
    };
    setRows([...rows, newRow]);
  };

  const handleEdit = (link) => {
    linkRef.current = link;
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };
  return (
    <>
      <div className="table-container">
        <button className="add-row-btn" onClick={addRow}>
          Add New Row
        </button>
        <table>
          <thead>
            <tr>
              <th>Column Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                row={row}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {isEdit && (
        <EditModal link={linkRef} closeModal={() => setIsEdit(false)} />
      )}
      {/* {isDelete && <DeleteModal />} */}
    </>
  );
}

export default Table;

function TableRow({ row, handleEdit, handleDelete }) {
  return (
    <tr key={row.id}>
      <td>
        <a href="#">{row.link}</a>
      </td>
      <td>
        <button className="edit-btn" onClick={() => handleEdit(row)}>
          <MdEdit />
        </button>
        <button className="delete-btn" onClick={() => handleDelete(row.id)}>
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}

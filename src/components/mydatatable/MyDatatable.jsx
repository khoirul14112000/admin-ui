import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
{ field: "id", headerName: "ID", width: 70 },
{ field: "name", headerName: "Name", width: 130 },
];

const rows = [
{ id: 1, name: "Coffe" },
{ id: 2,  name: "Non Coffe" },
{ id: 3, name: "Cake" },
{ id: 4,  name: "Pastry" },
{ id: 5,  name: "Cookie" },
];

const actionColumn = [
{
    width: 200,
    renderCell: () => {
    return (
        <div className="cellAction">
        <Link to="/categories/mylist" style={{ textDecoration: "none" }}>
        </Link>
        </div>
    );
    },
},
];

const MyDatatable = () => {
return (
    <div className="mydatatable">
    <div className="mydatatableTitle">
        All Data
    </div>
    <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
        pagination: {
            paginationModel: { page: 0, pageSize: 5 },
        },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
    />
    </div>
);
};

export default MyDatatable;

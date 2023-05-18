import React from "react";
function AdminControl() {
    return (
        <div className= "p-12">
            <div className="my-6">
                <a href="admin/upload">
                    <button className=" bg-green-500 text-red-50 p-2 rounded">Upload Products</button>
                </a>
            </div>
            <div className="my-6">
                <a href="admin/update">
                    <button className=" bg-green-500 text-red-50 p-2 rounded">Update Products</button>
                </a>
            </div>
            <div className="my-6 ">
                <a href="admin/delete">
                    <button className=" bg-red-500 text-red-50 p-2 rounded">Delete Products</button>
                </a>
            </div>

        </div>
    )
}
export default AdminControl
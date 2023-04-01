import "./style.css";
import React, { useEffect, useState } from "react";
import { getItems } from "../../api/requests";
import DataTable from "react-data-table-component";
import { Columns } from "../../utils/Columns";
import Navbar from "../../components/Navbar";

const Main = ({ handleAuth }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getItems(80)
      .then((res) => setData(res?.data?.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="section__page">
      <Navbar isSearch={false} handleAuth={handleAuth} />
      <div className="inpotForm">
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="table">
        {data && (
          <DataTable
            columns={Columns}
            data={data.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search) ||
                    item.properties[1].value.toLowerCase().includes(search);
            })}
            fixedHeader
            pagination
          ></DataTable>
        )}
      </div>
    </section>
  );
};

export default Main;

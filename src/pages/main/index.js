import "./style.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getItems } from "../../api/requests";
import DataTable from "react-data-table-component";
import { Columns } from "../../utils/Columns";
import Navbar from "../../components/Navbar";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getItems(50, 1)
      .then((res) => setData(res?.data?.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="section__page">
    <Navbar />
      <div className="table">
        {data && (
          <DataTable
            columns={Columns}
            data={data}
            fixedHeader
            pagination
          ></DataTable>
        )}
      </div>
    </section>
  );
};

export default Main;

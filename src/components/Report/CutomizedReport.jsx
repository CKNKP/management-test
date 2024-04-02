import React, { useState, useMemo } from "react";
import ReactPaginate from "react-paginate";
import * as XLSX from "xlsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./CustomizedReport.css";

import {
  faHome,
  faBackward,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

function CustomizedReport() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  const handlehome = () => {
    navigate("/home");
  };

  const handleback = () => {
    navigate(-1);
  };

  const data = useMemo(
    () => [
      {
        date: "2024-03-01",
        ticketNo: 1,
        truckNo: "00 02 Al 1860",
        supplier: "MCL",
        material: "",
        product: "Sponge Iron",
        poNo: 120012,
        tpNo: "21T-11000000076981",
        grossWt: 3265,
        tareWt: 1936,
        chWt: 1336,
        status: "Outbound",
      },
      {
        date: "2024-03-02",
        ticketNo: 2,
        truckNo: "00 14 OD 1334",
        supplier: "MCL",

        material: "",
        product: "Sponge Iron",

        poNo: 16123456,
        tpNo: "21T-11000000076982",
        grossWt: 3265,
        tareWt: 1935,
        chWt: 1331,
        status: "Outbound",
      },
      {
        date: "2024-03-03",
        ticketNo: 3,
        truckNo: "00 14 OD 1334",
        supplier: "MCL",

        material: "",
        product: "Sponge Iron",

        poNo: 16123456,
        tpNo: "21T-11000000076982",
        grossWt: 3265,
        tareWt: 1935,
        chWt: 1329,
        status: "Outbound",
      },
      {
        date: "2024-04-04",
        ticketNo: 4,
        truckNo: "00 14 OD 1334",
        supplier: "MCL",

        material: "Bricks",
        product: "",

        poNo: 16123456,
        tpNo: "21T-11000000076982",
        grossWt: 3265,
        tareWt: 1935,
        chWt: 1330,
        status: "Inbound",
      },
      {
        date: "2024-04-04",
        ticketNo: 5,
        truckNo: "00 14 OD 1335",
        supplier: "MCL",

        material: "Bricks",
        product: "",
        poNo: 16123456,
        tpNo: "21T-11000000076782",
        grossWt: 3265,
        tareWt: 1935,
        chWt: 1332,
        status: "Inbound",
      },
    ],
    []
  );

  const filteredData = useMemo(() => {
    let filteredDataByDate = data;

    if (startDate && endDate) {
      filteredDataByDate = data.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
      });
    }

    if (status) {
      return filteredDataByDate.filter((item) => item.status === status);
    }

    return filteredDataByDate;
  }, [data, startDate, endDate, status]);

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage) || 1;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    const fileNamePrefix = `${startDate}_to_${endDate}_customized_report`;
    XLSX.utils.book_append_sheet(wb, ws, "CustomizedReport");
    XLSX.writeFile(wb, `${fileNamePrefix}.xlsx`);
  };

  return (
    <div>
      <div className="report-header d-flex justify-content-center">
        <h3 className="report-header-title text-center mt-3 d-flex justify-content-center align-items-center flex-wrap">
          Customized Report
        </h3>
      </div>
      <div className="daily-report-date d-flex flex-column align-items-start ml-3 mt-3">
        <div className="mb-3">
          <label htmlFor="startDate" className="mb-0 mr-3">
            &nbsp;Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div>
          <label htmlFor="endDate" className="mb-0 mr-3">
            &nbsp; End Date:
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div>
          <label htmlFor="status" className="mb-0 mr-3 mt-3">
            &nbsp; Status:
          </label>
          <select
            id="status"
            name="status"
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ marginLeft: "5px" }}
          >
            <option value="">All</option>
            <option value="Inbound">Inbound</option>
            <option value="Outbound">Outbound</option>
          </select>
        </div>
      </div>
      <div className="dail-report-table table-responsive-xl table-responsive-md table-responsive-lg table-responsive-sm table-responsive-xxl mt-3">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Ticket no.</th>
              <th scope="col">Truck no.</th>
              <th scope="col">Supplier</th>
              <th scope="col">Material</th>
              <th scope="col">Product</th>
              <th scope="col">Po no.</th>
              <th scope="col">TP no.</th>
              <th scope="col">Gross Wt.</th>
              <th scope="col">Tare Wt.</th>
              <th scope="col">Ch_Wt.</th>
              <th scope="col">Net Wt.</th>
              <th scope="col">Excess</th>
              <th scope="col">Status</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.ticketNo}</td>
                <td>{item.truckNo}</td>
                <td>{item.supplier}</td>
                <td>{item.material}</td>
                <td>{item.product}</td>
                <td>{item.poNo}</td>
                <td>{item.tpNo}</td>
                <td>{item.grossWt}</td>
                <td>{item.tareWt}</td>
                <td>{item.chWt}</td>
                <td>{item.grossWt - item.tareWt}</td>
                <td>{item.grossWt - item.tareWt - item.chWt}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"pagination justify-content-center"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
          pageClassName={"d-none"}
          breakClassName={"d-none"}
          pageLinkClassName={"d-none"}
          marginPagesDisplayed={0}
          breakLabel={null}
        />
      )}
      <div className="text-center mt-4">
        <button
          className="btn btn-primary download-btn"
          onClick={handleDownload}
        >
          Download Report
        </button>
      </div>

      <div className="mt-5 mb-3 d-flex justify-content-center gap-5 button-container">
        <button className="icon-button" onClick={handlehome}>
          <FontAwesomeIcon icon={faHome} size="lg" />
          <span className="ms-1">Home</span>
        </button>
        <button className="icon-button" onClick={handleback}>
          <FontAwesomeIcon icon={faBackward} size="lg" />
          <span className="ms-1">Back</span>
        </button>
        <button className="icon-button" onClick={handleSignOut}>
          <FontAwesomeIcon icon={faPowerOff} size="lg" />
          <span className="ms-1">Sign Out</span>
        </button>
      </div>
    </div>
  );
}

export default CustomizedReport;

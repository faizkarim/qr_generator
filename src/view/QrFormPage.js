import React, { Component } from "react";

import TableRowComponent from "../components/TableRowComponent";

var QRCode = require("qrcode.react");

class QrFormPage extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="col-xl-12 col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
          <QRCode value="" size={200} />
        </div>
        <div className="mt-4">
          <div>
            <h5 className="fw-bold mb-3">Butiran Kertas Peperiksaan</h5>
          </div>
          <table class="table">
            <tbody>
              <TableRowComponent th="Mata Pelajaran" td="Sains Komputer"/>
              <TableRowComponent th="Kelas" td="4 RK3" />
              <TableRowComponent th="Tarikh"  />
              <TableRowComponent th="Masa" />
              <TableRowComponent th="Bilangan Pelajar" td="34" />
              <TableRowComponent th="Bilangan Kertas Yang Dijawab" />
            </tbody>
          </table>
        </div>

        <div className="mt-3">
          <div>
            <h5 className="fw-bold mb-3">Nama Guru Peperiksaan</h5>
          </div>
          <table class="table ">
            <tbody>
              <TableRowComponent th="Nama Guru Penyedia Soalan" />
              <TableRowComponent th="Nama Guru Yang Memulakan Ujian" />
              <TableRowComponent th="Nama Guru Yang Menamatkan Ujian" />
              <TableRowComponent th="Nama Guru Penanada Soalan" />
            </tbody>
          </table>
        </div>

        <div className="mt-3">
          <div>
            <h5 className="fw-bold mb-3">Nama Pelajar Tidak Hadir</h5>
          </div>
          <table class="table ">
            <tbody>
              <TableRowComponent th="1." td="4." />
              <TableRowComponent th="2." td="5." />
              <TableRowComponent th="3." td="6." />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default QrFormPage;

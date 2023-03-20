import React from "react";
function DetailAgency() {
  return (
    <div class="col-lg-8">
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Agency name : </p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0"> AgencyCar</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Email : </p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">Agence@gmail.com</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">GSM : </p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">71586952</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailAgency;

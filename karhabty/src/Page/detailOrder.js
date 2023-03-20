import React from "react";
import CarPictures from "./../Components/Cars/carPictures";
import CarDetail from "../Components/Cars/carDetail";
import DetailAgency from "../Components/Agency/detailAgency";

function DetailOrder() {
  return (
    <div class="container py-5">
      <CarPictures />
      <div className="m-2">
       
        <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Reference : </p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">#dh855z</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Date : </p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">02-10-2022</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Return Date : </p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">02-10-2022</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Price : </p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">1222 DT</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Status : </p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">En cours</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
        <CarDetail />
        <DetailAgency />
      </div>
    </div>
  );
}

export default DetailOrder;

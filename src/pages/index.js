import React from "react"

import Layout from "../components/layout";
import Image from "../components/image";
import 'bootstrap/dist/css/bootstrap.css';

import "../styling/index.css";

const IndexPage = () => (
  <Layout>
    <div className="d-block mx-auto image-box">
      <Image />
    </div>
    <div className="d-flex flex-column align-items-center index-page-content">
      <div className="h1">Learning time!</div>
      <div className="h2">...what a disaster</div>
      <div className="d-flex py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at scelerisque nibh. Nulla facilisis ex at placerat vestibulum. Proin consectetur quam arcu, vitae eleifend erat rhoncus eget. Sed lobortis orci et velit mattis, non rhoncus libero egestas. Suspendisse potenti. Vivamus venenatis nisl dui, vel finibus augue faucibus nec. Praesent eget odio viverra, dapibus massa vitae, suscipit eros. Sed aliquam libero blandit ante dapibus placerat. Sed elit nulla, tempor lacinia elit non, porta faucibus elit. Vestibulum a magna non mi luctus pharetra. Mauris posuere egestas dui, ut rutrum mauris interdum vel. Proin condimentum, est a sollicitudin scelerisque, erat mauris varius ante, sit amet mollis eros massa quis turpis. In sapien augue, aliquet ut luctus sit amet, ullamcorper nec nunc. Vivamus in efficitur risus, a mollis enim. Vivamus vitae enim bibendum, convallis nisi non, volutpat purus.</div>
    </div>
  </Layout>
)

export default IndexPage

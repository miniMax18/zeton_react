//import {PropTypes}  from "react/prop-types";
import { connect } from "react-redux";
import HomeTemplate from "../components/templates/HomeTemplate";
import Navbar from "../components/structures/Navbar/Navbar";
import React from "react";
import { JSX } from 'react/jsx-runtime';


const InfoView = ({ student }: any): JSX.Element => {
  return(
  <HomeTemplate>
    <div>Info</div>
    <Navbar />
  </HomeTemplate>
)};

//InfoView.propTypes = {
//  student: PropTypes.any.isRequired
//};

const mapStateToProps: any = (state: any) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(InfoView);
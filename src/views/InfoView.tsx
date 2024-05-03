import { connect } from 'react-redux';
import React from 'react';
import { type JSX } from 'react/jsx-runtime';
import HomeTemplate from '../components/templates/HomeTemplate';
import Navbar from '../components/structures/Navbar/Navbar';

const InfoView = ({ student }: any): JSX.Element => {
  return (
    <HomeTemplate>
      <div>Info</div>
      <Navbar />
    </HomeTemplate>
  );
};

const mapStateToProps: any = (state: any) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(InfoView);

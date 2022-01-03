import React from "react";
import { Link } from "react-router-dom";
import "./SubjectItem.css";

const SubjectItem = () => {
  return (
    <div className="container mt-4 p-0">
      <div className="subjectItems d-flex justify-content-between">
        <div className="box">
          <div className="subject ">
            <Link to="/novelBooks">উপন্যাস</Link>
          </div>
        </div>
        <div className="box">
          <div className="subject ">
            <h2>প্রি-অর্ডার</h2>
          </div>
        </div>
        <div className="box">
          <div className="subject ">
            <h2>বেস্টসেলার বই</h2>
          </div>
        </div>
        <div className="box">
          <div className="subject ">
            <h2>প্যাকেজ সমুহ</h2>
          </div>
        </div>
        <div className="box">
          <div className="subject ">
          <Link to="/historyBooks">ইতিহাস</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectItem;

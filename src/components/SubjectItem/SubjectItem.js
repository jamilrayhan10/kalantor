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
          <Link to="/historyBooks">ইতিহাস</Link>
          </div>
        </div>
        <div className="box">
          <div className="subject ">
          <Link to="/historyBooks">বেস্টসেলার বই</Link>
          </div>
        </div>
        <div className="box">
          <div className="subject ">
          <Link to="/historyBooks">প্যাকেজ সমুহ</Link>
          </div>
        </div>
        <div className="box">
          <div className="subject ">
          <Link to="/novelBooks">প্রি-অর্ডার</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectItem;

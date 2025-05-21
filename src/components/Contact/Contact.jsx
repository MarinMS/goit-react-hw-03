import React from "react";
import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.innerContainer}>
        <p className={css.text}>
          {" "}
          <FaPhoneAlt />
          {name}
        </p>
        <p className={css.text}>
          {" "}
          <IoPerson />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

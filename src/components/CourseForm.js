import React from "react";
import TextArea from "./common/TextArea";


function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextArea
        id="title"
        name="title"
        label="title"
        value={props.course.title}
        onChange={props.onChangeHandler}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            className="form-control"
            onChange={props.onChangeHandler}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>


      <TextArea
        id="category"
        name="category"
        className="form-control"
        value={props.course.category}
        onChange={props.onChangeHandler}
        label="category"
      />


      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
